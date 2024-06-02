export default class EcoQueue {
    constructor() {
        this.sendsList = []
    }

    addSend(send) {
        this.sendsList.push(send)
    }

    sortQueue() {
        this.sendsList.sort((a, b) => a.time[1] - b.time[1])
    }
}