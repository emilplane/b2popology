import { BUY_QUEUE_ACTIONS } from "../constants/constants.js";

export default class BuyQueueItem {
    constructor(action, values) {
        if (BUY_QUEUE_ACTIONS[action] != undefined) {
            this.action = action
            this.values = values
        } else {
            throw new Error(`The buy queue action "${action}" does not exist.`)   
        }
    }
    
    getBuyQueueItem() {
        return {
            action: this.action, 
            values: this.values
        }
    }

    getEcosimCode() {
        return BuyQueueItemToEcosimCode[this.action](this.values)
    }

    getAction() {
        return this.action
    }

    getValues() {
        return this.values
    }

    getValue(value) {
        return this.values[value]
    }
}

class BuyQueueItemToEcosimCode {
    static buyDefense(values) {
        return `buyDefense(${values.defenseCost}, message="Buy Defense")`
    }
}