import { EcoSendWithTime } from "./ecoSend.js";

export default class EcoQueue {
    constructor() {
        this.items = []
    }

    /**
     * Adds multiple objects with values compatible with EcoSendWithTime to the queue.
     * @param {object} objects 
     */
    addObjects(objects) {
        objects.forEach(object => {
            this.addObject(object)
        });
    }

    /**
     * Adds an object with values compatible with EcoSendWithTime to the queue.
     * @param {object} object 
     */
    addObject(object) {
        this.addItem(new EcoSendWithTime(object, "ecoSend"))
    }

    /**
     * Adds multiple eco sends with time to the queue.
     * @param {EcoSendWithTime} items 
     */
    addItems(items) {
        items.forEach(item => {
            this.addItem(item)
        });
    }

    /**
     * Adds an eco send with time to the queue.
     * @param {EcoSendWithTime} item 
     */
    addItem(item) {
        this.items.push(item)
    }

    getQueue() {
        let queue = []
        this.items.forEach(item => {
            queue.push(item.getEcoSendWithTime())
        });
        return queue
    }

    sortQueue() {
        this.items.sort((a, b) => a.time[1] - b.time[1])
        return this
    }
}