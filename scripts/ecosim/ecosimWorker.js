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
                'Game Round': 13.99
            }
            game_state = b2.GameState(initial_state_game)
            game_state.fastForward(target_round = 17)
        `
    }

    async runSim() {
        await pyodide.runPython(this.startingPythonCode());
    };

    async getCash() {
        this.runSim();
        pyodide.runPython(`
            js.cash = game_state.cash
            js.eco = game_state.eco
        `);
        return `Cash: $${cash}, Eco: ${eco}`;
    };
};

async function main() {
    await b2sim.initPython();
    let sim = new b2sim(
        {
            "cash": 0, "eco": 1200, "ecoSend": "Grouped Blacks",
            "rounds": 0.1, "gameRound": 13.99, "targetRound": 17,
            "farms": [
                {
                    "purchase": 7,
                    "crosspath": [2, 2, 0]
                }
            ]
        }
    );
    console.log(await sim.getCash());
    let sim2 = new b2sim(
        {
            "cash": 0, "eco": 1200, "ecoSend": "Grouped Blacks",
            "rounds": 0.1, "gameRound": 13.99, "targetRound": 17,
            "farms": [
                {
                    "purchase": 7,
                    "crosspath": [3, 2, 0]
                }
            ]
        }
    );
    console.log(await sim2.getCash());
}
main();