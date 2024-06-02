import EcoSend from "./ecoSend.js";

export default class EcoSendWithTime extends EcoSend {
    constructor(sendWithTime, type) {
        super(sendWithTime.ecoSend, type)
        this.time = sendWithTime.time
    }
}