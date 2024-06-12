import { ECO_QUEUE_UI_ELEMENTS } from "../constants/constants.js";

export default function editRoundNumber(ecoQueueIndex, e) {
    
    const roundContainer = e.target
    const currentValue = Number(roundContainer.innerHTML);
    
    roundContainer.removeEventListener("click", editRoundNumber)
    
    roundContainer.innerHTML = '';
    roundContainer.appendChild(ECO_QUEUE_UI_ELEMENTS.CHANGE_ROUND_BUTTON(currentValue));
    
    const roundInput = roundContainer.querySelector(".changeEcoSendRoundInput")
    roundInput.focus()
    roundInput.select()


    const confirmButton = roundContainer.querySelector(".confirm");
    const cancelButton = roundContainer.querySelector(".cancel");

    roundInput.addEventListener('keyup', handleEnter.bind(this));
    roundInput.addEventListener('keydown', handleEsc.bind(this));
    confirmButton.addEventListener('click', confirmCallbackFunction.bind(this));
    cancelButton.addEventListener('click', cancelCallbackFunction.bind(this));
    
    function handleEnter(event) {
        if (event.key === 'Enter') {
            confirmCallbackFunction.call(this);
        }
    }

    function handleEsc(event) {
        if (event.key === "Escape") {
            cancelCallbackFunction.call(this);
        }
    }
    
    function confirmCallbackFunction() {
        let updatedValue = Number(roundInput.value)
        this.ecoQueue.items[ecoQueueIndex].time[1] = updatedValue
        this.ecoQueueUpdate()
    }
    function cancelCallbackFunction() {
        this.ecoQueueUpdate()
    }
}