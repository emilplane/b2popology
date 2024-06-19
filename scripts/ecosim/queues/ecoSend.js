import bloonNameConverter from "../utilities/bloonNameConverter.js";

export default class EcoSend {
    constructor(bloon, type) {
        this.input = bloon
        this.ecoSend;
        if (type == "ecoSimName") {
            if (bloon == "Zero") {
                this.name = "zero"
                this.spacing = null
            } else {
                this.name = bloonNameConverter(this.input.split(" ")[1], "ecoSimName")
                this.spacing = (this.input.split(" ")[0]).toLowerCase()
            }
        } else if (type == "ecoSend" || type == undefined) {
            this.name = bloon.name
            this.spacing = bloon.spacing
        }
    }

    getPortraitFilePath() {
        return `media/bloonIcons/${this.name}/${this.name}.png`
    }

    getEcoSend() {
        return {
            "name": this.name,
            "spacing": this.spacing
        }
    }

    getName() {
        return this.name
    }

    getSpacing() {
        return this.spacing
    }

    replaceEcoSend(newEcoSend) {
        this.name = newEcoSend.name
        this.spacing = newEcoSend.spacing
    }
}

export class EcoSendWithTime extends EcoSend {
    constructor(bloonWithTime, type) {
        if (type == "ecoSend" || type == undefined) {

            super(bloonWithTime.ecoSend, type)
            this.time = bloonWithTime.time
        }
    }

    getTime() {
        return this.time
    }

    getEcoSendWithTime() {
        return {
            "time": this.time,
            "ecoSend": this.getEcoSend()
        }
    }
}