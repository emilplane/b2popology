import { BUY_QUEUE_UI_ELEMENTS } from "../constants/constants.js";

export default function updateBuyQueueUi() {
    BUY_QUEUE_UI_ELEMENTS.BUY_QUEUE_CONTAINER.innerHTML = "";
    this.buyQueue.items.forEach((buyQueueItem, buyQueueIndex) => {
        /* Clone of the current buy queue card */
        const clone = BUY_QUEUE_UI_ELEMENTS.BUY_QUEUE_TEMPLATE.content.cloneNode(true);
        const cloneElements = {}

        console.log(buyQueueItem)

        clone.querySelector(".actionText").innerHTML = '';

        const textNode = document.createTextNode(buyQueueItem.values.name);
        clone.querySelector(".actionText").appendChild(textNode);

        /* --- Event listeners --- */

        // Event listener for the delete button
        clone.querySelector(".delete").addEventListener("click", () => {
            delete this.buyQueue.items[buyQueueIndex]
            this.buyQueueUpdate()
        })

        // Event listener for the edit button
        clone.querySelector(".buyQueueCardConfigPanel").id = "configPanel" + buyQueueIndex
        const configPanel = clone.getElementById("configPanel" + buyQueueIndex)
        clone.querySelector(".edit").addEventListener("click", () => {
            configPanel.classList.toggle("showConfigPanel")
        })

        document.getElementById("buyQueueContainer").appendChild(clone);
    });
}