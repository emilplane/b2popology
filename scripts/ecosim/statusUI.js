// The element for the loading bar
const loadingBar = document.getElementById("loadingBar")

// The element for the status text
const statusText = document.getElementById("statusText")

// The element for the status light
const statusLight = document.getElementById("statusLight")

export default class StatusUI {
    /**
     * Indicates that the simulator is running.
     * @param {boolean} initializing - Whether the simulator is initializing
     */
    static loadingSim(initializing) {
        StatusUI.setLight("loading")
        if (!initializing) {
            StatusUI.setText("Simulating")
        }
    }

    /**
     * Indicates that the simulator is finished.
     * @param {boolean} initializing - Whether the simulator was initializing
     */
    static simulationFinished(initializing) {
        StatusUI.setLight("ready")
        if (initializing == undefined) {
            StatusUI.clearText()
        }
    }

    /**
     * Sets the text next to the status light
     * @param {string} text - the text to set
     */
    static setText(text) {
        statusText.innerText = text
        return this // to perform another action
    }

    /**
     * Clears the status text next to the status light
     */
    static clearText() {
        statusText.innerText = ""
        return this // to perform another action
    }

    /**
     * Sets the state of the status light.
     * @param {string} state - ready, loading, error, or clear
     */
    static setLight(state) {
        statusLight.classList.remove("readyLight", "loadingLight", "errorLight")
        if (state == "ready" || state == "loading" || state == "error") {
            document.getElementById("statusLight").classList.add(state + "Light")
        }
        return this // to perform another action
    }

    /**
     * 
     * @param {number} percentage - Percentage completed from 0 to 1
     */
    static setLoadingBar(percentage) {
        loadingBar.style.width = `${percentage*100}%`
        if (percentage == 1) {
            this.setLight("ready")
            setTimeout(() => {loadingBar.style.opacity = "0"}, 500);
        } else {
            this.setLight("loading")
            loadingBar.style.opacity = "1"
        }
        return this // to perform another action
    }
}