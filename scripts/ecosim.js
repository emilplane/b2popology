import chartConfig from "./ecosim/chartConfig.js"
import StatusUI from "./ecosim/statusUI.js"

// Displays any unhandled exceptions to the user
window.onerror = (message, source, lineno, colno, error) => {
    StatusUI.setLight("error").setText(error)
};

// Logic to detect whether the browser supports web workers
if (window.Worker) {
    runSim()
} else {
    throw "Error: Web workers are not supported on this browser"
}

/**
 * Main function to run the simulator
 */
function runSim() {
    let farmArray = []

    addEventLiisteners()
    
    // Creates a web worker to run the simulator
    const ecosimWorker = new Worker("scripts/ecosim/ecosimWorker.js")
    
    /**
     * Called when the list of farms is updated.
     */
    function farmUpdate() {
        updateFarmUI();
        sendUpdatedValues();
    }

    /**
     * Updates the UI for the list of farms.
     */
    function updateFarmUI() {
        document.getElementById("farmsContainer").innerHTML = "";
        let template = document.getElementById("farmTemplate");
        for (let farmIndex in farmArray) {
            let clone = template.content.cloneNode(true);
            clone.querySelector(".farmTemplateTitle").innerText = Number(farmIndex)+1
            for (let pathIndex in farmArray[farmIndex].crosspath) {
                clone.querySelector(`.farmTemplateUpgrade${Number(pathIndex)+1}`).value = farmArray[farmIndex].crosspath[pathIndex]
                clone.querySelector(`.farmTemplateUpgrade${Number(pathIndex)+1}`).addEventListener("change", (e) => {
                    farmArray[farmIndex].crosspath[pathIndex] = e.target.value
                    farmUpdate()
                })
            }
            clone.querySelector(`.farmTemplateStartRound`).value = farmArray[farmIndex].purchase
            clone.querySelector(`.farmTemplateStartRound`).addEventListener("change", (e) => {
                farmArray[farmIndex].purchase = e.target.value
                farmUpdate()
            })
            clone.querySelector(".farmTemplateDeleteButton").addEventListener("click", () => {
                delete farmArray[farmIndex]
                farmUpdate()
            })
            document.getElementById("farmsContainer").appendChild(clone);
        }
    }
    updateFarmUI()

    /**
     * Indicates that the simulator is running.
     * @param {boolean} initializing - Whether the simulator is initializing
     */
    function loadingSim(initializing) {
        StatusUI.setLight("loading")
        if (!initializing) {
            StatusUI.setText("Simulating")
        }
    }

    /**
     * Indicates that the simulator is running.
     * @param {boolean} initializing - Whether the simulator was initializing
     */
    function simulationFinished(initializing) {
        StatusUI.setLight("ready")
        if (!initializing) {
            StatusUI.clearText()
        }
    }

    /**
     * Sends updated values to the simulator's web worker; called when a simulator parameter is changed
     */
    function sendUpdatedValues() {
        const parameters = ["cash", "eco", "rounds", "gameRound", "targetRound"]
        let config = {
            "ecoSend": document.getElementById("startingBloonSend").value,
            "farms": farmArray
        }
        for (let parameterIndex in parameters) {
            config[parameters[parameterIndex]] = Number(document.getElementById(parameters[parameterIndex]).value)
        }
        console.log(config)
        ecosimWorker.postMessage({
            "type": "requestData",
            "config": config
        })
    }

    /**
     * Updates the dropdown of bloon sends for the starting round.
     * @param {object} bloonSendData - Data from the simulator about which bloons are available on which rounds.
     */
    function updateStartingEcoBloons(bloonSendData) {
        let currentValue = document.getElementById("startingBloonSend").value
        let startRound = document.getElementById("gameRound").value
        
        function eachBloonSend(value, key) {
            let bloonSendStartRound = value.get("Start Round"); let bloonSendEndRound = value.get("End Round")
            if (startRound >= bloonSendStartRound && startRound <= bloonSendEndRound) {
                let optionElement = document.createElement("option")
                if (currentValue == key) {optionElement.selected = true}
                optionElement.value = key; optionElement.innerText = key
                document.getElementById("startingBloonSend").insertAdjacentElement("beforeend", optionElement)
            }
        }
        console.log(bloonSendData)
        document.getElementById("startingBloonSend").innerHTML = ""
        bloonSendData.forEach(eachBloonSend)
    }

    ecosimWorker.onmessage = (e) => {
        switch (e.data.type) {
            case "initStatus": 
                StatusUI.clearText().setLight("clear")
                let loadingBar = document.getElementById("loadingBar")
                switch (e.data.state) {
                    case "loading": 
                        loadingBar.style.opacity = "1"
                        StatusUI.setLight("loading")
                        function updateStatusElements(loadingBarWidth, loadingText) {
                            loadingBar.style.width = `${loadingBarWidth}%`
                            StatusUI.setText(loadingText)
                        }
                        switch (e.data.loadingState) {
                            case "pyodideInit":     updateStatusElements(5, "Loading pyodide and python libraries"); break
                            case "micropip":        updateStatusElements(50, "Loading pyodide and python libraries"); break
                            case "installb2sim":    updateStatusElements(60, "Loading pyodide and python libraries"); break
                            case "importjs":        updateStatusElements(70, "Loading pyodide and python libraries"); break
                            case "importb2sim":     updateStatusElements(80, "Loading b2sim"); break
                            default:                updateStatusElements(0, "Loading"); break
                        }
                        break
                    case "ready":
                        StatusUI.setText(`Ready! Loaded in ${e.data.loadTime}s!`)
                            .setLight("ready")
                        loadingBar.style.width = `${100}%`
                        setTimeout(() => {
                            loadingBar.style.opacity = "0"
                        }, 500);
                        setTimeout(() => {
                            StatusUI.clearText()
                        }, 5000)
                        sendUpdatedValues()
                        loadingSim(true)
                        break
                }
                break
            case "returnData":
                let data = e.data.data; 
                data.convertedTimeStates = []; data.convertedEcoStates = []; data.convertedCashStates = []
                for (let timeStateIndex in data.timeStates) {
                    if (Number(data.timeStates[timeStateIndex].toFixed(1)) == data.timeStates[timeStateIndex]) {
                        data.convertedTimeStates.push(data.timeStates[timeStateIndex])
                        data.convertedEcoStates.push(data.ecoStates[timeStateIndex])
                        data.convertedCashStates.push(data.cashStates[timeStateIndex])
                    }
                }
                console.log(data)

                let verticalReferenceMarkers = {}

                updateStartingEcoBloons(data.ecoSendInfo)
                document.getElementById("chartContainer").innerHTML = `<canvas id="myChart" class="chartCanvas">`
                
                for (let roundStartIndex in data.roundStarts) {
                    if (
                        data.convertedTimeStates[0] < Number(data.roundStarts[roundStartIndex].toFixed(1)) && 
                        data.convertedTimeStates[data.convertedTimeStates.length-1] >= Number(data.roundStarts[roundStartIndex].toFixed(1))
                    ) {
                        let xAxisIndex = data.convertedTimeStates.findIndex((e) => e == Number(data.roundStarts[roundStartIndex].toFixed(1)))
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
                
                const chart = document.getElementById('myChart');

                new Chart(chart, chartConfig(data, verticalReferenceMarkers))

                simulationFinished(e.data.initializing)
                break
        }
    }

    /**
     * Adds event listeners for UI elements.
     */
    function addEventLiisteners() {
        // Adds an event listener for UI elements that change simulator parameters
        document.querySelectorAll(".settingInput").forEach((input) => {
            input.addEventListener("change", () => {
                sendUpdatedValues()
                loadingSim()
            })
        })
    
        // Adds an event listener to add a new farm to the array of farms
        document.getElementById("addFarmButton").addEventListener("click", () => {
            farmArray.push({
                "crosspath": [0, 0, 0],
                "purchase": 10
            })
            farmUpdate()
        })
    }
}