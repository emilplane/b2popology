import chartConfig from "./ecosim/chartConfig"
if (window.Worker) {
    runSim()
} else {
    document.getElementById("statusLight").classList.add("errorLight")
    document.getElementById("statusText").innerText = "Error: Your browser does not support web workers"
}

function runSim() {
    let statusLightClasses = document.getElementById("statusLight").classList
    let statusText = document.getElementById("statusText")
    let currentlySimulating = false
    let farmArray = [
        {
            "crosspath": [3, 2, 0],
            "purchase": 14
        },
        {
            "crosspath": [2, 0, 3],
            "purchase": 16
        },
        {
            "crosspath": [2, 0, 4],
            "purchase": 20
        }
    ]

    
    document.querySelectorAll(".settingInput").forEach((input) => {
        input.addEventListener("change", () => {
            sendUpdatedValues()
            loadingSim()
        })
    })
    
    const ecosimWorker = new Worker("scripts/ecosim/ecosimWorker.js")
    
    function farmUpdate(updateUI) {
        if (updateUI) {
            updateFarmUI();
        }
        sendUpdatedValues();
    }

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
                farmUpdate(true)
            })
            document.getElementById("farmsContainer").appendChild(clone);
        }
    }
    updateFarmUI(true)

    document.getElementById("addFarmButton").addEventListener("click", () => {
        farmArray.push({
            "crosspath": [0, 0, 0],
            "purchase": 10
        })
        farmUpdate(true)
    })

    function loadingSim(initializing) {
        statusLightClasses.add("loadingLight")
        statusLightClasses.remove("readyLight")
        if (!initializing) {
            statusText.innerText = "Simulating"
        }
        currentlySimulating = true
    }

    function simulationFinished(initializing) {
        statusLightClasses.remove("loadingLight")
        statusLightClasses.add("readyLight")
        if (!initializing) {
            statusText.innerText = ""
        }
        if (initializing) {
            document.getElementById("startingBloonSend").addEventListener("change", () => {
                sendUpdatedValues()
            })
        }
        currentlySimulating = false
    }

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
        ecosimWorker.postMessage({
            "type": "requestBloonSendData"
        })
        console.log(bloonSendData)
        document.getElementById("startingBloonSend").innerHTML = ""
        bloonSendData.forEach(eachBloonSend)
    }

    ecosimWorker.onmessage = (e) => {
        switch (e.data.type) {
            case "initStatus": 
                statusLightClasses.remove("loadingLight", "readyLight")
                statusText.innerText = ""
                let loadingBar = document.getElementById("loadingBar")
                switch (e.data.state) {
                    case "loading": 
                        loadingBar.style.opacity = "1"
                        statusLightClasses.add("loadingLight")
                        function updateStatusElements(loadingBarWidth, loadingText) {
                            loadingBar.style.width = `${loadingBarWidth}%`
                            statusText.innerText = loadingText
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
                        statusLightClasses.add("readyLight")
                        statusText.innerText = `Ready! Loaded in ${e.data.loadTime}s!`
                        loadingBar.style.width = `${100}%`
                        setTimeout(() => {
                            loadingBar.style.opacity = "0"
                        }, 500);
                        setTimeout(() => {
                            statusText.innerText = ""
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
                        console.log(Number(data.roundStarts[roundStartIndex].toFixed(1)))
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

                new Chart (chart, chartConfig(data, verticalReferenceMarkers))

                simulationFinished(e.data.initializing)
                break
        }
    }
}