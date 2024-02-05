import Upgrade from "./upgrade.js"

export default class Tower {
    constructor(blueprint) {
        this.blueprint = blueprint
        this.upgrades = {}
        this.createUpgrades()
    }

    createUpgrades() {
        this.upgrades.base = new Upgrade(this.blueprint.upgrades.base)
        this.upgrades.paths = []
        for (let pathIndex in this.blueprint.upgrades.paths) {
            let currentPath = []
            for (let upgradeIndex in this.blueprint.upgrades.paths[pathIndex]) {
                currentPath.push(new Upgrade(this.blueprint.upgrades.paths[pathIndex][upgradeIndex]))
            }
            this.upgrades.paths.push(currentPath)
        }
    }
}