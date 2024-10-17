class b2sim {
    /** Time taken to load b2sim */
    static b2simLoadTime;
    
    /**
     * Interfaces with the b2sim simulator
     * @constructor
     * @param {*} configData - parameters for the simulator
     */
    constructor(configData) {
        console.log(configData)
        if (configData != undefined) {
            this.configData = configData;
            this.ecoQueue = this.configData.ecoQueue;
            this.buyQueue = this.configData.buyQueue;
        }
    }

    /**
     * Initializes pyodide, micropip, b2sim, etc, etc, etc
     */
    static async initPython() {
        /**
         * Function to post a message indicating what is being loaded
         * @param {string} status - What is being loaded
         */
        function messageLoadStatus(status) {
            postMessage({
                "type": "initStatus",
                "state": "loading",
                "loadingState": status
            });
        }

        // Initialize pyodide
        messageLoadStatus("pyodideInit");
        pyodide = await loadPyodide();

        // Install micropip
        messageLoadStatus("micropip");
        await pyodide.loadPackage("micropip");
        const micropip = pyodide.pyimport("micropip");

        // Install b2sim
        messageLoadStatus("installb2sim");
        await micropip.install('b2sim');
        

        // Import b2sim
        messageLoadStatus("importjs");
        await pyodide.runPython(`
            import importlib.metadata
            print("Version: " + importlib.metadata.version('b2sim'))
            import js
        `);
        messageLoadStatus("importb2sim");
        pyodide.runPython(`
            import b2sim.engine as b2
        `);

        // Calculate load time
        this.b2simLoadTime = new Date - start;
        console.log(`Loaded b2sim in ${(this.b2simLoadTime) / 1000}s`);
        
        // Ready
        postMessage({
            "type": "initStatus",
            "state": "ready",
            "loadTime": (this.b2simLoadTime) / 1000
        });
    }

    /**
     * Returns Python code to run the simulator
     * @returns generated code
     */
    pythonCode() {
        let eco_queue = [];
        for (let ecoQueueIndex in this.ecoQueue) {
            let timeString = "0";
            if (this.ecoQueue[ecoQueueIndex].time[0] == "round") {
                timeString = `rounds.getTimeFromRound(${this.ecoQueue[ecoQueueIndex].time[1]})`;
            }
            eco_queue.push(`b2.ecoSend(
                time=${timeString},
                send_name='${this.getBloonSendName(this.ecoQueue[ecoQueueIndex].ecoSend)}'
            )`);
        }
        let codeString = `
            class simData:
                x = [1, 2, 3, 4]
            rounds = b2.Rounds(${this.configData.rounds})
            farms = []
            initial_state_game = {
                'Cash': ${this.configData.cash},
                'Eco': ${this.configData.eco},
                'Eco Send': b2.ecoSend(send_name = '${this.configData.ecoSend}'),
                'Rounds': rounds,
                'Farms': farms,
                'Game Round': ${this.configData.gameRound},
                'Eco Queue': [${eco_queue}],
                'Buy Queue': ${this.buyQueue}
            }
            game_state = b2.GameState(initial_state_game)
            game_state.fastForward(target_round = ${this.configData.targetRound})
            js.ecoSendInfo = b2.eco_send_info
        `
        return codeString;
    }

    /**
     * Runs the simulator with Pyodide
     */
    async runSim() {
        await pyodide.runPython(this.pythonCode());
    }

    /**
     * Gets simulator data
     * @returns simulator data
     */
    async getData() {
        this.runSim();
        pyodide.runPython(`
            js.cash = game_state.cash
            js.eco = game_state.eco
            js.cashStates = game_state.cash_states
            js.ecoStates = game_state.eco_states
            js.timeStates = game_state.time_states
            js.roundStarts = rounds.round_starts
        `);
        ecoSendInfo = ecoSendInfo.toJs();
        function roundArray(array, places) {
            let arrayRounded = [];
            for (let i in array) {
                arrayRounded.push(parseFloat(array[i].toFixed(places)));
            }
            return arrayRounded;
        }
        cashStates = cashStates.toJs();
        cashStates = roundArray(cashStates, 1);
        ecoStates = ecoStates.toJs();
        ecoStates = roundArray(ecoStates, 1);
        timeStates = timeStates.toJs();
        timeStates = roundArray(timeStates, 3);
        roundStarts = roundStarts.toJs();
        return {
            "cash": cash, "eco": eco,
            "cashStates": cashStates,
            "ecoStates": ecoStates,
            "timeStates": timeStates,
            "ecoSendInfo": ecoSendInfo,
            "roundStarts": roundStarts
        };
    }

    /**
     * Gets bloon send data.
     * @returns bloon send data
     */
    async getBloonSendData() {
        pyodide.runPython(`
            js.roundStarts = rounds.round_starts
        `);
        roundStarts = roundStarts.toJs();
        return roundStarts;
    }

    getBloonSendName(bloonSend) {
        const bloonTypes = {
            "red": "Reds",
            "blue": "Blues",
            "green": "Greens",
            "yellow": "Yellows",
            "pink": "Pinks",
            "white": "Whites",
            "black": "Blacks",
            "purple": "Purples",
            "zebra": "Zebras",
            "lead": "Leads",
            "rainbow": "Rainbows",
            "ceramic": "Ceramics",
            "moab": "Moabs",
            "bfb": "BFBs",
            "zomg": "ZOMGs",
            "ddt": "DDTs",
            "bad": "BADs",
            "zero": "Zero"
        };
        const spacingTypes = {
            "spaced": "Spaced ",
            "grouped": "Grouped ",
            "tight": "Tight "
        };
        const bloonName = bloonTypes[bloonSend.name] || bloonTypes["zero"];
        const spacingName = spacingTypes[bloonSend.spacing] || "";
        return `${spacingName}${bloonName}`;
    }
}