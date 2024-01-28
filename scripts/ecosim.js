if (window.Worker) {
    const ecosimWorker = new Worker("scripts/ecosim/ecosimWorker.js")

    ecosimWorker.onmessage = (e) => {
        switch (e.data.type) {
            case "initStatus": 
                let statusLightClasses = document.getElementById("statusLight").classList
                statusLightClasses.remove("loadingLight", "readyLight")
                let statusText = document.getElementById("statusText")
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
                            case "importjs":        updateStatusElements(35, "Loading b2sim"); break
                            case "importb2sim":     updateStatusElements(40, "Loading b2sim"); break
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
                        }, 5000);
                        break;
                }
                break;
        }
    };
};