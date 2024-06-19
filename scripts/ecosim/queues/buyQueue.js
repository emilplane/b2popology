import BuyQueueItem from "./buyQueueItem.js";

export default class BuyQueue {
    constructor() {
        this.items = []
    }

    /**
     * Adds multiple objects with values compatible with BuyQueueItem to the queue.
     * @param {object} objects 
     */
    addObjects(objects) {
        objects.forEach(object => {
            this.addObject(object)
        });
    }

    /**
     * Adds an object with values compatible with BuyQueueItem to the queue.
     * @param {string} action 
     * @param {object} values 
     */
    addObject(object) {
        this.addItem(new BuyQueueItem(object.action, object.values))
    }

    /**
     * Adds multiple buy queue actionsto the queue.
     * @param {BuyQueueItem} items 
     */
    addItems(items) {
        items.forEach(item => {
            this.addItem(item)
        });
    }

    /**
     * Adds a buy queue action to the queue.
     * @param {BuyQueueItem} item 
     */
    addItem(item) {
        this.items.push(item)
    }

    getQueue() {
        let queue = []
        this.items.forEach(item => {
            queue.push(item.getBuyQueueItem())
        });
        return queue
    }

    getQueueEcosimCode() {
        let codeString = "["
        this.items.forEach(item => {
            codeString += `[b2.${[item.getEcosimCode()]}],`
        });
        codeString += `]`
        return codeString
    }
}