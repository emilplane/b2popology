import Module from "./module.mjs"

export default class Upgrade {
    constructor(blueprint) {
        this.blueprint = blueprint
        this.modules = []
        this.createModules()
    }

    createModules() {
        for (let i in this.blueprint) {
            this.modules.push(new Module(this.blueprint[i]))
        }
    }
}