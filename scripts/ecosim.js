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
                        statusText.innerText = "Loading b2sim"
                        switch (e.data.loadingState) {
                            case "pyodideInit":     loadingBar.style.width = `${5}%`;   break
                            case "micropip":        loadingBar.style.width = `${15}%`;  break
                            case "installb2sim":    loadingBar.style.width = `${30}%`;  break
                            case "importb2sim":     loadingBar.style.width = `${50}%`;  break
                            default:                loadingBar.style.width = `${0}%`;   break
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