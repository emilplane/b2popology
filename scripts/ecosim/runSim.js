import chartConfig from "./chartConfig.js"
import StatusUI from "./statusUI.js"

export default class RunSim {
    /**
     * Main code to run the simulator
     * @constructor
     */
    constructor() {
        this.farmArray = []
        this.bloonSendData;
        this.ecoQueue = [
            {
                "time": ["round", 12],
                "ecoSend": {
                    "name": "rainbow",
                    "spacing": "spaced"
                }
            },
            {
                "time": ["round", 16],
                "ecoSend": {
                    "name": "black",
                    "spacing": "grouped"
                }
            },
            {
                "time": ["round", 17],
                "ecoSend": {
                    "name": "pink",
                    "spacing": "grouped"
                }
            },
            {
                "time": ["round", 18],
                "ecoSend": {
                    "name": "purple",
                    "spacing": "grouped"
                }
            }
        ]
        this.selectedTab = 0
        

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
                this.updateFarmUI()
                this.updateEcoQueueUI()
                break
        }
    }
    
    /**
     * Method for messages returned by the web worker when the simulator returns data from a 
     * simulation
     * @param {object} data - The content of the message returned by the web worker
     */
    returnData(data) {
        const simulationData = data.data;
        this.bloonSendData = simulationData.ecoSendInfo
        console.log(this.bloonSendData)

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
            "farms": this.farmArray,
            "ecoQueue": this.ecoQueue
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
        this.loadingSim()
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

    ecoQueueUpdate() {
        console.log(this)
        this.updateEcoQueueUI();
        this.sendUpdatedValues();
    }

    updateEcoQueueUI() {
        this.ecoQueue.sort((a, b) => a.time[1] - b.time[1]);
        document.getElementById("ecoQueueContainer").innerHTML = "";
        let template = document.getElementById("ecoQueueTemplate");
        for (let ecoQueueIndex in this.ecoQueue) {
            let clone = template.content.cloneNode(true);
            let context = this

            clone.querySelector(".timeText").innerHTML = 
                `Round <div class="monoHighlight roundNumber">
                    ${this.ecoQueue[ecoQueueIndex].time[1]}
                </div>`
            clone.querySelector(".roundNumber").addEventListener(
                "click", editRoundNumberCallbackFunction
            )
            clone.querySelector(".delete").addEventListener("click", () => {
                delete this.ecoQueue[ecoQueueIndex]
                context.ecoQueueUpdate()
            })
            clone.querySelector(".ecoQueueCardConfigPanel").id = "configPanel" + ecoQueueIndex
            let configPanel = clone.getElementById("configPanel" + ecoQueueIndex)
            clone.querySelector(".edit").addEventListener("click", () => {
                configPanel.classList.toggle("showConfigPanel")
            })

            function editRoundNumberCallbackFunction(e) {
                let currentValue = Number(e.target.innerHTML)
                
                e.target.innerHTML = `
                    <div class="changeEcoSendRoundContainer">
                        <input type="number" class="changeEcoSendRoundInput"
                            value="${currentValue}"/>
                        <button 
                            class="material-symbols-outlined iconButton cancel">
                            close</button>
                        <button 
                            class="material-symbols-outlined iconButton confirm">
                            check</button>
                    </div>
                `
                
                let roundInput = e.target.querySelector(".changeEcoSendRoundInput")
                roundInput.focus()
                roundInput.select()

                e.target.removeEventListener("click", editRoundNumberCallbackFunction)

                roundInput.addEventListener(
                    'keyup', function(event) {
                        if (event.key === 'Enter') {
                            confirmCallbackFunction()
                        }
                    }
                )
                e.target.querySelector(".confirm").addEventListener(
                    "click", confirmCallbackFunction
                )
                roundInput.addEventListener(
                    'keydown', function(event) {
                        if (event.key === "Escape") {
                            console.log(1)
                            cancelCallbackFunction()
                        }
                    }
                )
                e.target.querySelector(".cancel").addEventListener(
                    "click", cancelCallbackFunction
                )
                function confirmCallbackFunction() {
                    let updatedValue = 
                    Number(roundInput.value)
                    context.ecoQueue[ecoQueueIndex].time[1] = updatedValue
                    context.ecoQueueUpdate()
                }
                function cancelCallbackFunction() {
                    context.updateEcoQueueUI()
                }
            }

            if (this.ecoQueue[ecoQueueIndex].ecoSend.name == "zero") {
                clone.querySelector(".ecoQueueMainButtonContainer").insertAdjacentHTML("beforeend", `
                    <div 
                    class="material-symbols-outlined imageIconSmall 
                    ecoBloonIcon zeroSendSymbol">
                        block
                    </div>
                `)
            } else {
                let bloonFolder = this.ecoQueue[ecoQueueIndex].ecoSend.name
                let bloonName = this.ecoQueue[ecoQueueIndex].ecoSend.name
    
                clone.querySelector(".ecoQueueMainButtonContainer").insertAdjacentHTML("beforeend", `
                    <img class="imageIconSmall ecoBloonIcon" 
                        src="media/bloonIcons/${bloonFolder}/${bloonName}.png">
                `)
            }

            document.getElementById("ecoQueueContainer").appendChild(clone);
        }
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
            })
        })

        // Adds an event listener to add a new farm to the array of farms
        document.getElementById("addEcoQueueItem").addEventListener("click", () => {
            this.ecoQueue.push({
                "time": ["round", 12],
                "ecoSend": {
                    "name": "zero",
                    "spacing": null
                }
            })
            this.ecoQueueUpdate()
        })

        document.getElementById("addFarmButton").addEventListener("click", () => {
            this.farmArray.push({
                "crosspath": [0, 0, 0],
                "purchase": 10
            })
            this.farmUpdate()
        })

        // Event listeners for tab buttons
        document.getElementById("tab0Button").addEventListener("click", () => {
            this.selectedTab = 0
            hideAllExcept("tab0")
            setTabButtons(this)
        })
        document.getElementById("tab1Button").addEventListener("click", () => {
            this.selectedTab = 1
            hideAllExcept("tab1")
            setTabButtons(this)
        })
        document.getElementById("tab2Button").addEventListener("click", () => {
            this.selectedTab = 2
            hideAllExcept("tab2")
            setTabButtons(this)
        })

        /**
         * Hides all tab content except for a specific tab's content.
         * @param {string} id - the ID to not hide 
         */
        function hideAllExcept(id) {
            document.getElementById("tab0").classList.remove("showTab")
            document.getElementById("tab1").classList.remove("showTab")
            document.getElementById("tab2").classList.remove("showTab")
            document.getElementById(id).classList.add("showTab")
        }

        /**
         * Updates the tab buttons.
         */
        function setTabButtons(context) {
            document.getElementById("tab0Button").classList.remove("activeTab")
            document.getElementById("tab1Button").classList.remove("activeTab")
            document.getElementById("tab2Button").classList.remove("activeTab")
            document.getElementById(`tab${context.selectedTab}Button`).classList.add("activeTab")
        }
    }
}