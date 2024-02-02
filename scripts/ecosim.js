if (window.Worker) {
    let statusLightClasses = document.getElementById("statusLight").classList
    let statusText = document.getElementById("statusText")
    let currentlySimulating = false

    document.querySelectorAll(".settingInput").forEach((input) => {
        input.addEventListener("change", () => {
            sendUpdatedValues()
            loadingSim()
        })
    })

    const ecosimWorker = new Worker("scripts/ecosim/ecosimWorker.js")

    function loadingSim() {
        statusLightClasses.add("loadingLight")
        statusLightClasses.remove("readyLight")
        statusText.innerText = "Simulating"
        currentlySimulating = true
    }

    function simulationFinished() {
        statusLightClasses.remove("loadingLight")
        statusLightClasses.add("readyLight")
        statusText.innerText = ""
        currentlySimulating = false
    }

    function sendUpdatedValues() {
        const parameters = ["cash", "eco", "rounds", "gameRound", "targetRound"]
        let config = {}
        for (let parameterIndex in parameters) {
            config[parameters[parameterIndex]] = Number(document.getElementById(parameters[parameterIndex]).value)
        }
        config.ecoSend = "Grouped Blacks"
        console.log(config)
        ecosimWorker.postMessage({
            "type": "requestData",
            "config": config
        })
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
                            case "micropip":        updateStatusElements(15, "Loading pyodide and python libraries"); break
                            case "installb2sim":    updateStatusElements(20, "Loading pyodide and python libraries"); break
                            case "importjs":        updateStatusElements(35, "Loading pyodide and python libraries"); break
                            case "importb2sim":     updateStatusElements(45, "Loading b2sim"); break
                            default:                updateStatusElements(0, "Loading"); break
                        }
                        break;
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
                        loadingSim()
                        break
                }
                break
            case "returnData":
                let data = e.data.data
                console.log(data)

                document.getElementById("chartContainer").innerHTML = `<canvas id="myChart" class="chartCanvas"></canvas>`

                const chart = document.getElementById('myChart');
                new Chart(chart, {
                    type: 'line',
                    borderWidth: 2,
                    data: {
                        labels: data.timeStates,
                        datasets: [{
                            label: 'Amount of eco',
                            data: data.ecoStates
                        }, {
                            label: 'Amount of cash',
                            data: data.cashStates
                        }]
                    },
                    options: {
                        color: "#FFFFFF",
                        responsive: true,
                        maintainAspectRatio: false,
                        pointRadius: 0,
                        plugins: {
                            legend: {
                                labels: {
                                    font: {
                                        fanily: "Gabarito"
                                    }
                                }
                            }
                        },
                        scales: {
                            x: {
                                ticks: {
                                    color: "#FFFFFF",
                                    maxTicksLimit: "10",
                                    maxRotation: 0
                                }
                            },
                            y: {
                                ticks: {
                                    color: "#FFFFFF",
                                }
                            }
                        }
                    }
                });
                simulationFinished()
                break
        }
    }
}