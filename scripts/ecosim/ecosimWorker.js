importScripts("https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js");
importScripts("./b2sim.js");

let pyodide;
const start = new Date;
let initializing = true;

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
                "data": data,
                "initializing": initializing
            })
            initializing = false
            break
        case "requestBloonSendData": 
            new b2sim(undefined)
            let roundData = []
            postMessage({
                "type": "requestBloonSendData",
                "data": roundData
            })
            break
    }
}