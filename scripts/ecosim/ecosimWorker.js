importScripts("https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js");

let pyodide;
const start = new Date;
let b2simLoadTime;

class b2sim {
    constructor(configData) {
        this.configData = configData
        this.farms = this.configData.farms
    }

    static async initPython() {
        function messageLoadStatus(status) {
            postMessage({
                "type": "initStatus",
                "state": "loading",
                "loadingState": status
            })
        }

        messageLoadStatus("pyodideInit")
        pyodide = await loadPyodide();

        messageLoadStatus("micropip")
        await pyodide.loadPackage("micropip");
        const micropip = pyodide.pyimport("micropip");
        messageLoadStatus("installb2sim")
        await micropip.install('b2sim');
        messageLoadStatus("importjs")
        pyodide.runPython(`
            import js
        `)

        messageLoadStatus("importb2sim")
        pyodide.runPython(`
            import b2sim as b2
        `)

        b2simLoadTime = new Date-start
        console.log(`Loaded b2sim in ${(b2simLoadTime)/1000}s`)
        postMessage({
            "type": "initStatus",
            "state": "ready",
            "loadTime": (b2simLoadTime)/1000
        })
    }

    startingPythonCode() {
        let farms = [];
        for (let farmNumber in this.farms) {
            farms.push(`b2.initFarm(purchase_time=rounds.getTimeFromRound(${this.farms[farmNumber].purchase}), upgrades=(${this.farms[farmNumber].crosspath}))`)
        }
        return `
            class simData:
                x = [1, 2, 3, 4]
            rounds = b2.Rounds(${this.configData.rounds})
            farms = [
                ${farms}
            ]
            initial_state_game = {
                'Cash': ${this.configData.cash},
                'Eco': ${this.configData.eco},
                'Eco Send': b2.ecoSend(send_name = '${this.configData.ecoSend}'),
                'Rounds': rounds,
                'Farms': farms,
                'Game Round': ${this.configData.gameRound}
            }
            game_state = b2.GameState(initial_state_game)
            game_state.fastForward(target_round = ${this.configData.targetRound})
        `
    }

    async runSim() {
        await pyodide.runPython(this.startingPythonCode());
    };

    async getData() {
        this.runSim();
        pyodide.runPython(`
            js.cash = game_state.cash
            js.eco = game_state.eco
            js.cashStates = game_state.cash_states
            js.ecoStates = game_state.eco_states
            js.timeStates = game_state.time_states
        `);
        function roundArray(array, places) {
            let arrayRounded = []
            for (let i in array) {
                arrayRounded.push(parseFloat(array[i].toFixed(places)))
            }
            return arrayRounded
        }
        cashStates = cashStates.toJs()
        cashStates = roundArray(cashStates, 1)
        ecoStates = ecoStates.toJs()
        ecoStates = roundArray(ecoStates, 1)
        timeStates = timeStates.toJs()
        timeStates = roundArray(timeStates, 3)
        return {
            "cash": cash, "eco": eco,
            "cashStates": cashStates,
            "ecoStates": ecoStates,
            "timeStates": timeStates
        }
    };
};

async function main() {
    await b2sim.initPython();
}
main();

onmessage = async function (e) {
    switch(e.data.type) {
        case "requestData":
            let sim = new b2sim(e.data.config)
            let data = await sim.getData()
            postMessage({
                "type": "returnData",
                "data": data
            })
            break
    }
}