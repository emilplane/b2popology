import EcoSend from "/scripts/ecosim/eco/ecoSend.js"
import { ECO_QUEUE_UI_ELEMENTS } from "/scripts/ecosim/constants/constants.js";
import editRoundNumber from "./editRoundNumber.js";

/**
 * Updates the UI for the eco queue. Pass context with call(), apply(), etc.
 * @return {void}
 */
export default function updateEcoQueueUI() {
    // Clear the container
    ECO_QUEUE_UI_ELEMENTS.ECO_QUEUE_CONTAINER.innerHTML = "";

    // Iterate through each item in the eco queue
    this.ecoQueue.items.forEach((ecoQueueItem, ecoQueueIndex) => {
        /** Clone of the current eco queue card */
        const clone = ECO_QUEUE_UI_ELEMENTS.ECO_QUEUE_TEMPLATE.content.cloneNode(true);
        const cloneElements = {
            ecoBloonGridContainer: clone.querySelector(".ecoBloonGridContainer"),
            ecoBloonGrid: clone.querySelector(".ecoBloonGrid"),
            mainButtonContainer: clone.querySelector(".ecoQueueMainButtonContainer"),
            timeText: clone.querySelector(".timeText")
        }

        // Iterate through sends available on this round
        this.getSendsForRound(Math.floor(ecoQueueItem.time[1])).forEach((element) => {
            const ecoSend = new EcoSend(element, "ecoSimName")
            // Create the eco send button
            let ecoSendButton;
            if (ecoSend.getName() == "zero") {
                ecoSendButton = ECO_QUEUE_UI_ELEMENTS.ZERO_SEND_BUTTON();
            } else {
                const button = ECO_QUEUE_UI_ELEMENTS.BLOON_SEND_BUTTON();
                const bloonImage = ECO_QUEUE_UI_ELEMENTS.BLOON_SEND_BUTTON_IMAGE(ecoSend);
                switch (ecoSend.getSpacing()) {
                    case "grouped":
                        for (let i = 0; i < 2; i++) {
                            button.appendChild(bloonImage.cloneNode(true));
                        }
                        break;
                    case "spaced": default:
                        button.appendChild(bloonImage);
                        break;
                }
                button.className += " doubleBloon";
                ecoSendButton = button;
            }
            
            // Insert the button
            cloneElements.ecoBloonGrid.insertAdjacentElement("beforeend", ecoSendButton)

            // Add an event listener to the button
            clone.getElementById("newEcoBloonButton").addEventListener("click", () => {
                ecoQueueItem.replaceEcoSend(ecoSend.getEcoSend())
                console.log(this.ecoQueue, ecoQueueItem)
                this.ecoQueueUpdate()
            })
            clone.getElementById("newEcoBloonButton").removeAttribute("id");
        });
        
        // Insert the bloon modifier container
        cloneElements.ecoBloonGridContainer
            .insertAdjacentElement("beforeend", ECO_QUEUE_UI_ELEMENTS.BLOON_MODIFIER_CONTAINER())

        // TODO: Fully implement bloon modifiers
        // clone.querySelector(".regrow").addEventListener("click", () => {
        //     this.ecoQueue[ecoQueueIndex].property
        //     this.ecoQueueUpdate()
        // })

        // Insert the time (in rounds) for current bloon send
        cloneElements.timeText.innerHTML = '';

        const roundContainer = document.createElement('div');
        roundContainer.classList.add('monoHighlight', 'roundNumber');
        roundContainer.textContent = ecoQueueItem.time[1];

        const textNode = document.createTextNode('Round ');
        cloneElements.timeText.appendChild(textNode);
        cloneElements.timeText.appendChild(roundContainer);
        
        addEventListeners.call(this, clone, ecoQueueIndex)

        if (ecoQueueItem.name == "zero") {
            
            cloneElements.mainButtonContainer.appendChild(ECO_QUEUE_UI_ELEMENTS.ZERO_SEND_IMAGE());
        } else {
            const bloonFolder = ecoQueueItem.name
            const bloonName = ecoQueueItem.name

            const filePath = `media/bloonIcons/${bloonFolder}/${bloonName}.png`

            let imageElement;
            if (ecoQueueItem.spacing == "grouped") {
                imageElement = ECO_QUEUE_UI_ELEMENTS.DOUBLE_SEND_BLOON_IMAGE(filePath)
            } else {
                imageElement = ECO_QUEUE_UI_ELEMENTS.SINGLE_SEND_BLOON_IMAGE(filePath)
            }

            clone.querySelector(".ecoQueueMainButtonContainer")
                .insertAdjacentElement("beforeend", imageElement)
        }

        document.getElementById("ecoQueueContainer").appendChild(clone);
    });
}

/** Add event listeners to each eco queue card */
function addEventListeners(clone, ecoQueueIndex) {
    // Event listener for when the round number is clicked to edit the round number
    clone.querySelector(".roundNumber").addEventListener(
        "click", editRoundNumber.bind(this, ecoQueueIndex)
    )

    // Event listener for the delete button
    clone.querySelector(".delete").addEventListener("click", () => {
        delete this.ecoQueue.items[ecoQueueIndex]
        this.ecoQueueUpdate()
    })

    // Event listener for the edit button
    clone.querySelector(".ecoQueueCardConfigPanel").id = "configPanel" + ecoQueueIndex
    const configPanel = clone.getElementById("configPanel" + ecoQueueIndex)
    clone.querySelector(".edit").addEventListener("click", () => {
        configPanel.classList.toggle("showConfigPanel")
    })
}