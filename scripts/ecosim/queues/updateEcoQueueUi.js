import EcoSend from "/scripts/ecosim/eco/ecoSend.js"
import { ECO_QUEUE_UI_ELEMENTS } from "/scripts/ecosim/constants/constants.js";

/**
 * Updates the UI for the eco queue. Pass context with call(), apply(), etc.
 * @return {void}
 */
export default function updateEcoQueueUI() {

    // Clear the container
    ECO_QUEUE_UI_ELEMENTS.ECO_QUEUE_CONTAINER.innerHTML = "";

    let template = ECO_QUEUE_UI_ELEMENTS.ECO_QUEUE_TEMPLATE;
    for (let ecoQueueIndex in this.ecoQueue) {
        /** Clone of the eco queue UI */
        const clone = template.content.cloneNode(true);
        const context = this
        const ecoQueueItem = this.ecoQueue[ecoQueueIndex]
        this.getSendsForRound(Math.floor(ecoQueueItem.time[1])).forEach((element) => {
            let ecoSend = new EcoSend(element, "ecoSimName")
            let ecoSendButton;
            if (ecoSend.getName() == "zero") {
                ecoSendButton = ECO_QUEUE_UI_ELEMENTS.ZERO_SEND_BUTTON();
            } else {
                const button = ECO_QUEUE_UI_ELEMENTS.BLOON_SEND_BUTTON();
                switch (ecoSend.getSpacing()) {
                    case "grouped":
                        for (let i = 0; i < 2; i++) {
                            const img = ECO_QUEUE_UI_ELEMENTS.BLOON_SEND_IMAGE(ecoSend)
                            button.appendChild(img);
                        }
                        break;
                    case "spaced":
                    default:
                        const img = ECO_QUEUE_UI_ELEMENTS.BLOON_SEND_IMAGE(ecoSend)
                        button.appendChild(img);
                        break;
                }

                button.className += " doubleBloon";
                ecoSendButton = button;
            }
            clone.querySelector(".ecoBloonGrid").insertAdjacentElement("beforeend", ecoSendButton)
            clone.getElementById("newEcoBloonButton").addEventListener("click", () => {
                ecoQueueItem.ecoSend = ecoSend.getEcoSend()
                this.ecoQueueUpdate()
            })
            clone.getElementById("newEcoBloonButton").removeAttribute("id");
        });
        
        clone.querySelector(".ecoBloonGridContainer").insertAdjacentElement("beforeend", ECO_QUEUE_UI_ELEMENTS.BLOON_MODIFIER_CONTAINER())

        //buttonSelected
        clone.querySelector(".regrow").addEventListener("click", () => {
            this.ecoQueue[ecoQueueIndex].property
            context.ecoQueueUpdate()
        })
        clone.querySelector(".timeText").innerHTML = 
            `Round <div class="monoHighlight roundNumber">
                ${ecoQueueItem.time[1]}
            </div>`
        clone.querySelector(".roundNumber").addEventListener(
            "click", editRoundNumberCallbackFunction
        )
        clone.querySelector(".delete").addEventListener("click", () => {
            delete this.ecoQueue[ecoQueueIndex]
            context.ecoQueueUpdate()
        })
        clone.querySelector(".ecoQueueCardConfigPanel").id = "configPanel" + ecoQueueIndex
        let configPanel = clone.getElementById("configPanel" + ecoQueueIndex)
        clone.querySelector(".edit").addEventListener("click", () => {
            configPanel.classList.toggle("showConfigPanel")
        })
        

        function editRoundNumberCallbackFunction(e) {
            let currentValue = Number(e.target.innerHTML)
            
            e.target.innerHTML = `
                <div class="changeEcoSendRoundContainer">
                    <input type="number" class="changeEcoSendRoundInput"
                        value="${currentValue}"/>
                    <button 
                        class="material-symbols-outlined iconButton cancel">
                        close</button>
                    <button 
                        class="material-symbols-outlined iconButton confirm">
                        check</button>
                </div>
            `
            
            let roundInput = e.target.querySelector(".changeEcoSendRoundInput")
            roundInput.focus()
            roundInput.select()

            e.target.removeEventListener("click", editRoundNumberCallbackFunction)

            roundInput.addEventListener(
                'keyup', function(event) {
                    if (event.key === 'Enter') {
                        confirmCallbackFunction()
                    }
                }
            )
            e.target.querySelector(".confirm").addEventListener(
                "click", confirmCallbackFunction
            )
            roundInput.addEventListener(
                'keydown', function(event) {
                    if (event.key === "Escape") {
                        cancelCallbackFunction()
                    }
                }
            )
            e.target.querySelector(".cancel").addEventListener(
                "click", cancelCallbackFunction
            )
            function confirmCallbackFunction() {
                let updatedValue = 
                Number(roundInput.value)
                context.ecoQueue[ecoQueueIndex].time[1] = updatedValue
                context.ecoQueueUpdate()
            }
            function cancelCallbackFunction() {
                context.updateEcoQueueUI()
            }
        }

        if (ecoQueueItem.ecoSend.name == "zero") {
            clone.querySelector(".ecoQueueMainButtonContainer").insertAdjacentHTML("beforeend", `
                <div 
                class="material-symbols-outlined imageIconSmall 
                ecoBloonIcon zeroSendSymbol">
                    block
                </div>
            `)
        } else {
            const bloonFolder = ecoQueueItem.ecoSend.name
            const bloonName = ecoQueueItem.ecoSend.name

            let htmlString;
            switch (ecoQueueItem.ecoSend.spacing) {
                case "grouped":
                    htmlString = `
                        <div class="doubleBloonSmall">
                            <img class="imageIconSmall ecoBloonIcon" 
                                src="media/bloonIcons/${bloonFolder}/${bloonName}.png">
                            <img class="imageIconSmall ecoBloonIcon" 
                                src="media/bloonIcons/${bloonFolder}/${bloonName}.png">
                        </div>
                    `
                    break
                case "spaced": default:
                    htmlString = `
                    <img class="imageIconSmall ecoBloonIcon" 
                    src="media/bloonIcons/${bloonFolder}/${bloonName}.png">
                    `
                    break
            }

            clone.querySelector(".ecoQueueMainButtonContainer")
                .insertAdjacentHTML("beforeend", htmlString)
        }

        document.getElementById("ecoQueueContainer").appendChild(clone);
    }
}