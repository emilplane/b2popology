import chartConfig from "./constants/chartConfig.js"
import StatusUI from "./statusUI.js"
import addEventListeners from "./constants/eventListeners.js";
import { DEFAULT_BUY_QUEUE, DEFAULT_ECO_QUEUE } from "./constants/constants.js";
import updateEcoQueueUI from "./queues/updateEcoQueueUi.js";
import EcoQueue from "./queues/ecoQueue.js";
import BuyQueueItem from "./queues/buyQueueItem.js";
import BuyQueue from "./queues/buyQueue.js";
import updateBuyQueueUi from "./queues/updateBuyQueueUi.js";

export default class RunSim {
    /**
     * Main code to run the simulator
     * @constructor
     */
    constructor() {
        this.ecoQueue = new EcoQueue
        this.ecoQueue.addObjects(DEFAULT_ECO_QUEUE)
        console.log(this.ecoQueue)

        this.buyQueue = new BuyQueue

        this.testBuyQueueItem = new BuyQueueItem(
            DEFAULT_BUY_QUEUE[0].action, DEFAULT_BUY_QUEUE[0].values
        )
        console.log(this.testBuyQueueItem.getEcosimCode())
        this.buyQueue.addObjects(DEFAULT_BUY_QUEUE)
        console.log(this.buyQueue.getQueueEcosimCode())

        this.selectedTab = 0

        // Adds event listeners
        addEventListeners.call(this)

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
                    updateEcoQueueUI.call(this)
                    updateBuyQueueUi.call(this)
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
                this.tabContentLoaded()
                this.sendUpdatedValues()
                break
        }
    }

    tabContentLoaded() {
        document.getElementById("loadingTab0ContentContainer").classList.add("hide")
        document.getElementById("tab0Content").classList.remove("hide")
        document.getElementById("loadingTab1ContentContainer").classList.add("hide")
        document.getElementById("tab1Content").classList.remove("hide")
        document.getElementById("loadingTab2ContentContainer").classList.add("hide")
        document.getElementById("tab2Content").classList.remove("hide")
    }
    
    /**
     * Method for messages returned by the web worker when the simulator returns data from a 
     * simulation
     * @param {object} data - The content of the message returned by the web worker
     */
    returnData(data) {
        const simulationData = data.data;
        this.bloonSendData = simulationData.ecoSendInfo

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
                console.log(roundStartIndex)
                let xAxisIndex = simulationData.convertedTimeStates.findIndex((e) => e == 
                    Number(simulationData.roundStarts[roundStartIndex].toFixed(1)))
                verticalReferenceMarkers["round"+roundStartIndex] = {
                    scaleID: "x",
                    type: 'line',
                    value: xAxisIndex,
                    endValue: xAxisIndex,
                    borderColor: 'rgb(255, 255, 255)',
                    borderWidth: 2,
                    label: {
                        content: `r${roundStartIndex}`,
                        display: true,
                        position: "start",
                        backgroundColor: 'hsl(160, 100%, 26%)',
                    }
                }
            }
        }
        
        // Creates a new chart with the returned simulation data
        console.log(verticalReferenceMarkers)
        new Chart(
            document.getElementById('myChart'),
            chartConfig(simulationData, verticalReferenceMarkers)
        )

        StatusUI.simulationFinished(simulationData.initializing)
    }

    /**
     * Send updated values to the simulator's web worker
     */
    sendUpdatedValues() {
        const params = ["cash", "eco", "rounds", "gameRound", "targetRound"];
        const config = {
            ecoSend: document.getElementById("startingBloonSend").value,
            ecoQueue: this.ecoQueue.getQueue(),
            buyQueue: this.buyQueue.getQueueEcosimCode()
        };
        
        params.forEach(p => {
            config[p] = Number(document.getElementById(p).value);
        });
        
        this.ecosimWorker.postMessage({
            type: "requestData",
            config
        });
        
        StatusUI.loadingSim();
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
        document.getElementById("startingBloonSend").innerHTML = ""
        bloonSendData.forEach(eachBloonSend)
    }

    getSendsForRound(round) {
        let validSends = []
        this.bloonSendData.forEach(eachBloonSend)
        function eachBloonSend(value, index) {
            if (
                round >= value.get("Start Round") && 
                round <= value.get("End Round")
            ) {
                validSends.push(index)
            }
        }
        return validSends
    }

    ecoQueueUpdate() {
        this.sortEcoQueue()
        updateEcoQueueUI.call(this)
        this.sendUpdatedValues();
    }

    buyQueueUpdate() {
        console.log(this.buyQueue)
        updateBuyQueueUi.call(this)
        this.sendUpdatedValues();
    }

    sortEcoQueue() {
        this.ecoQueue.sortQueue()
    }
}