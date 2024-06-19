/**
 * Adds event listeners for UI buttons that don't move. Pass context with call(), apply(), etc.
 */
export default function addEventListeners() {
    // Adds an event listener for UI elements that change simple simulator parameters. More 
    // complex implementations will need their own logic to implement event listeners. 
    document.querySelectorAll(".settingInput").forEach((input) => {
        input.addEventListener("change", () => {
            this.sendUpdatedValues()
        })
    })


    document.getElementById("addEcoQueueItem").addEventListener("click", () => {
        this.ecoQueue.addObject({
            "time": ["round", 1],           
            "ecoSend": {
                "name": "zero",
                "spacing": null
            }
        })
        this.ecoQueueUpdate()
    })

    document.getElementById("addBuyQueueItem").addEventListener("click", () => {
        this.buyQueue.addObject({
            "action": "buyDefense",
            "values": {
                "name": "New defense purchase",
                "defenseCost": 1000
            }
        })
        this.buyQueueUpdate()
    })

    // Event listeners for the 3 tab buttons
    for (let tabIndex = 0; tabIndex < 3; tabIndex++) {
        document.getElementById(`tab${tabIndex}Button`).addEventListener("click", () => {
            this.selectedTab = tabIndex
            hideAllExcept(`tab${tabIndex}`)
            setTabButtons(this)
        })
    }

    /**
     * Hides all tab content except for a specific tab's content.
     * @param {string} id - the ID to not hide 
     */
    function hideAllExcept(id) {
        document.getElementById("tab0").classList.remove("showTab")
        document.getElementById("tab1").classList.remove("showTab")
        document.getElementById("tab2").classList.remove("showTab")
        document.getElementById(id).classList.add("showTab")
    }

    /**
     * Updates the tab buttons.
     */
    function setTabButtons(context) {
        document.getElementById("tab0Button").classList.remove("activeTab")
        document.getElementById("tab1Button").classList.remove("activeTab")
        document.getElementById("tab2Button").classList.remove("activeTab")
        document.getElementById(`tab${context.selectedTab}Button`).classList.add("activeTab")
    }
}