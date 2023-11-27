var pyodide;
const start = new Date;
let b2simLoadTime;
let b2simOutput = {
    "cash": undefined
}

class b2sim {
    constructor(configData) {
        this.configData = configData
        this.farms = this.configData.farms
        
    }

    static async initPython() {
        console.log("Loading Pyodide...")
        pyodide = await loadPyodide();
        await pyodide.loadPackage("micropip");
        const micropip = pyodide.pyimport("micropip");
        await micropip.install('b2sim');
        pyodide.runPython(`
            import js
            import b2sim as b2
        `)
        b2simLoadTime = new Date-start
        console.log(`Loaded b2sim in ${(b2simLoadTime)/1000}s`)
    }

    startingPythonCode() {
        let farms = [];
        for (let farmNumber in this.farms) {
            farms.push(`b2.initFarm(purchase_time=rounds.getTimeFromRound(${this.farms[farmNumber].purchase}), upgrades=(3,2,0))`)
        }
        return `
            class simData:
                x = [1, 2, 3, 4]
            rounds = b2.Rounds(${this.configData.rounds})
            farms = [
                b2.initFarm(purchase_time=rounds.getTimeFromRound(7), upgrades=(3,2,0)),
                b2.initFarm(purchase_time=rounds.getTimeFromRound(13.9), upgrades=(3,2,0))
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
        await pyodide.runPython(this.startingPythonCode())
    }

    async getCash() {
        this.runSim()
        let cash = pyodide.pyimport("simData");
        return cash;
    }
}

async function main() {
    await b2sim.initPython()
    let sim = new b2sim(
        {
            "cash": 600, "eco": 600, "ecoSend": "Grouped Blacks",
            "rounds": 0.1, "gameRound": 13.99, "targetRound": 17,
            "farms": [
                {
                    "purchase": 7,
                    "crosspath": [3, 2, 0]
                },
                {
                    "purchase": 13.9,
                    "crosspath": [3, 2, 0]
                }
            ]
        }
    )
    console.log(await sim.getCash())
    let sim2 = new b2sim(
        {
            "cash": 0, "eco": 1200, "ecoSend": "Grouped Blacks",
            "rounds": 0.1, "gameRound": 13.99, "targetRound": 17,
            "farms": [
                {
                    "purchase": 7,
                    "crosspath": [3, 2, 0]
                },
                {
                    "purchase": 13.9,
                    "crosspath": [3, 2, 0]
                }
            ]
        }
    )
    console.log(await sim2.getCash())
}
main();

// print(game_state.cash_states)
// print(game_state.eco_states)
// print(game_state.time_states)