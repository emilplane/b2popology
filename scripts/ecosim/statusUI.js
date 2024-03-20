export default class StatusUI {
    /**
     * Sets the text next to the status light
     * @param {string} text - the text to set
     */
    static setText(text) {
        document.getElementById("statusText").innerText = text
        return this // to perform another action
    }

    /**
     * Clears the status text next to the status light
     */
    static clearText() {
        document.getElementById("statusText").innerText = ""
        return this // to perform another action
    }

    /**
     * Sets the state of the status light.
     * @param {string} state - ready, loading, error, or clear
     */
    static setLight(state) {
        document.getElementById("statusLight").classList.remove("readyLight", "loadingLight", "errorLight")
        if (state == "ready" || state == "loading" || state == "error") {
            document.getElementById("statusLight").classList.add(state + "Light")
        }
        return this // to perform another action
    }

    static setLightForLoadingBar(state) {
        document.getElementById("statusLight").classList.remove("readyLight", "loadingLight", "errorLight")
        if (state == "ready" || state == "loading" || state == "error") {
            document.getElementById("statusLight").classList.add(state + "Light")
        }
        return this // to perform another action
    }

    /**
     * 
     * @param {number} percentage - Percentage completed from 0 to 1
     */
    static setLoadingBar(percentage){
        loadingBar.style.width = `${loadingBarWidth}%`
        return this // to perform another action
    }
}