import chartConfig from "./chartConfig.js"
import StatusUI from "./statusUI.js"

export default class RunSim {
    /**
     * Main code to run the simulator
     * @constructor
     */
    constructor() {
        this.farmArray = []

        this.addEventListeners()
        this.updateFarmUI()

        // Creates a web worker to run the simulator
        this.ecosimWorker = new Worker("scripts/ecosim/ecosimWorker.js")

        // Handles messages back from the simulation's web worker
        this.ecosimWorker.onmessage = (e) => {
            switch (e.data.type) {
                case "initStatus": 
                    this.initStatus(e.data)
                    break
                case "returnData":
                    this.returnData(e.data)
                    break
            }
        }
    }

    /**
     * Method for messages returned by the web worker when the simulator is initializing
     * @param {object} data - The content of the message returned by the web worker
     */
    initStatus(data) {
        switch (data.state) {
            case "loading": 
                function updateStatusElements(loadingBarWidth, loadingText) {
                    StatusUI.setText(loadingText).setLoadingBar(loadingBarWidth)
                }
                switch (data.loadingState) {
                    case "pyodideInit": 
                        updateStatusElements(0.05, "Loading pyodide and python libraries"); break
                    case "micropip": 
                        updateStatusElements(0.5, "Loading pyodide and python libraries"); break
                    case "installb2sim": 
                        updateStatusElements(0.6, "Loading pyodide and python libraries"); break
                    case "importjs": 
                        updateStatusElements(0.7, "Loading pyodide and python libraries"); break
                    case "importb2sim": 
                        updateStatusElements(0.8, "Loading b2sim"); break
                    default: 
                        updateStatusElements(0, "Loading"); break
                }
                break
            case "ready":
                StatusUI.setText(`Ready! Loaded in ${data.loadTime}s!`)
                    .setLight("ready")
                    .setLoadingBar(1)
                this.sendUpdatedValues()
                this.loadingSim(true)
                break
        }
    }
    
    /**
     * Method for messages returned by the web worker when the simulator returns data from a 
     * simulation
     * @param {object} data - The content of the message returned by the web worker
     */
    returnData(data) {
        let simulationData = data.data; 

        // Logic that creates arrays that for timeStates, ecoStates, and cashStates that only
        // include data points that have a timeState that goes up to the tenths place (0.1)
        simulationData.convertedTimeStates = [];
        simulationData.convertedEcoStates = [];
        simulationData.convertedCashStates = [];
        for (let timeStateIndex in simulationData.timeStates) {
            if (
                Number(simulationData.timeStates[timeStateIndex].toFixed(1)) == 
                    simulationData.timeStates[timeStateIndex]
            ) {
                simulationData.convertedTimeStates.push(simulationData.timeStates[timeStateIndex])
                simulationData.convertedEcoStates.push(simulationData.ecoStates[timeStateIndex])
                simulationData.convertedCashStates.push(simulationData.cashStates[timeStateIndex])
            }
        }

        let verticalReferenceMarkers = {}

        this.updateStartingEcoBloons(simulationData.ecoSendInfo)
        document.getElementById("chartContainer").innerHTML = 
            `<canvas id="myChart" class="chartCanvas">`
        
        for (let roundStartIndex in simulationData.roundStarts) {
            if (
                simulationData.convertedTimeStates[0] < 
                    Number(simulationData.roundStarts[roundStartIndex].toFixed(1)) && 
                simulationData.convertedTimeStates[simulationData.convertedTimeStates.length-1] >= 
                    Number(simulationData.roundStarts[roundStartIndex].toFixed(1))
            ) {
                let xAxisIndex = simulationData.convertedTimeStates.findIndex((e) => e == 
                    Number(simulationData.roundStarts[roundStartIndex].toFixed(1)))
                verticalReferenceMarkers["round"+roundStartIndex] = {
                    scaleID: "x",
                    type: 'line',
                    value: xAxisIndex,
                    endValue: xAxisIndex,
                    borderColor: 'rgb(255, 255, 255)',
                    borderWidth: 2,
                }
            }
        }
        
        // Creates a new chart with the returned simulation data
        new Chart(
            document.getElementById('myChart'),
            chartConfig(simulationData, verticalReferenceMarkers)
        )

        this.simulationFinished(simulationData.initializing)
    }

    /**
     * Sends updated values to the simulator's web worker; called when a simulator parameter is 
     * changed
     */
    sendUpdatedValues() {
        const parameters = ["cash", "eco", "rounds", "gameRound", "targetRound"]
        let config = {
            "ecoSend": document.getElementById("startingBloonSend").value,
            "farms": this.farmArray
        }
        for (let parameterIndex in parameters) {
            config[parameters[parameterIndex]] = 
                Number(document.getElementById(parameters[parameterIndex]).value)
        }
        console.log(config)
        this.ecosimWorker.postMessage({
            "type": "requestData",
            "config": config
        })
    }

    /**
     * Updates the dropdown of bloon sends for the starting round.
     * @param {object} bloonSendData - Data from the simulator about which bloons are available on which rounds.
     */
    updateStartingEcoBloons(bloonSendData) {
        let currentValue = document.getElementById("startingBloonSend").value
        let startRound = document.getElementById("gameRound").value
        
        function eachBloonSend(value, key) {
            let bloonSendStartRound = value.get("Start Round")
            let bloonSendEndRound = value.get("End Round")
            if (startRound >= bloonSendStartRound && startRound <= bloonSendEndRound) {
                let optionElement = document.createElement("option")
                if (currentValue == key) {optionElement.selected = true}
                optionElement.value = key; optionElement.innerText = key
                document.getElementById("startingBloonSend")
                    .insertAdjacentElement("beforeend", optionElement)
            }
        }
        console.log(bloonSendData)
        document.getElementById("startingBloonSend").innerHTML = ""
        bloonSendData.forEach(eachBloonSend)
    }

    /**
     * Called when the list of farms is updated.
     */
    farmUpdate() {
        this.updateFarmUI();
        this.sendUpdatedValues();
    }

    /**
     * Updates the UI for the list of farms.
     */
    updateFarmUI() {
        document.getElementById("farmsContainer").innerHTML = "";
        let template = document.getElementById("farmTemplate");
        for (let farmIndex in this.farmArray) {
            let clone = template.content.cloneNode(true);
            clone.querySelector(".farmTemplateTitle").innerText = Number(farmIndex)+1
            for (let pathIndex in this.farmArray[farmIndex].crosspath) {
                let path = clone.querySelector(`.farmTemplateUpgrade${Number(pathIndex)+1}`)
                path.value = this.farmArray[farmIndex].crosspath[pathIndex]
                path.addEventListener("change", (e) => {
                    this.farmArray[farmIndex].crosspath[pathIndex] = e.target.value
                    this.farmUpdate()
                })
            }
            clone.querySelector(`.farmTemplateStartRound`).value = 
                this.farmArray[farmIndex].purchase
            clone.querySelector(`.farmTemplateStartRound`).addEventListener("change", (e) => {
                this.farmArray[farmIndex].purchase = e.target.value
                this.farmUpdate()
            })
            clone.querySelector(".farmTemplateDeleteButton").addEventListener("click", () => {
                delete this.farmArray[farmIndex]
                this.farmUpdate()
            })
            document.getElementById("farmsContainer").appendChild(clone);
        }
    }

    /**
     * Indicates that the simulator is running.
     * @param {boolean} initializing - Whether the simulator is initializing
     */
    loadingSim(initializing) {
        StatusUI.setLight("loading")
        if (!initializing) {
            StatusUI.setText("Simulating")
        }
    }

    /**
     * Indicates that the simulator is running.
     * @param {boolean} initializing - Whether the simulator was initializing
     */
    simulationFinished(initializing) {
        StatusUI.setLight("ready")
        if (initializing == undefined) {
            StatusUI.clearText()
        }
    }

    /**
     * Adds event listeners for UI elements.
     */
    addEventListeners() {
        // Adds an event listener for UI elements that change simulator parameters
        document.querySelectorAll(".settingInput").forEach((input) => {
            input.addEventListener("change", () => {
                this.sendUpdatedValues()
                this.loadingSim()
            })
        })

        // Adds an event listener to add a new farm to the array of farms
        document.getElementById("addFarmButton").addEventListener("click", () => {
            this.farmArray.push({
                "crosspath": [0, 0, 0],
                "purchase": 10
            })
            this.farmUpdate()
        })
    }
}