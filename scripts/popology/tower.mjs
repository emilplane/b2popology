/** Class representing a tower. */
export default class Tower {
    /**
     * Creates a new Tower.
     * @param {object} towerBlueprint - The tower blueprint.
     */
    constructor(towerBlueprint) {
        this.towerBlueprint = towerBlueprint
        this.upgrades = {}
        this.createUpgrades()
    }

    /** Creates the Tower's upgrades from the blueprint with instances of the Upgrade class. */
    createUpgrades() {
        this.upgrades.base = new Upgrade(this.towerBlueprint.upgrades.base)
        this.upgrades.paths = []
        for (let pathIndex in this.towerBlueprint.upgrades.paths) {
            let currentPath = []
            for (let upgradeIndex in this.towerBlueprint.upgrades.paths[pathIndex]) {
                currentPath.push(new Upgrade(this.towerBlueprint.upgrades.paths[pathIndex][upgradeIndex]))
            }
            this.upgrades.paths.push(currentPath)
        }
    }
}

/** Class representing a tower upgrade, which can include the base tower itself. */
class Upgrade {
    /**
     * Creates a new Upgrade.
     * @param {object} upgradeBlueprint - The upgrade blueprint.
     */
    constructor(upgradeBlueprint) {
        this.upgradeBlueprint = upgradeBlueprint
        this.modules = []
        this.createModules()
    }

    /** Creates the Upgrade's modules from the blueprint with instances of the Module class. */
    createModules() {
        for (let i in this.upgradeBlueprint) {
            this.modules.push(new Module(this.upgradeBlueprint[i]))
        }
    }
}

/** Class representing a module on an upgrade. */
class Module {
    /**
     * Creates a new Module.
     * @param {object} moduleBlueprint - The module blueprint.
     */
    constructor(moduleBlueprint) {
        this.moduleBlueprint = moduleBlueprint
        this.properties = []
        this.createProperties()
    }

    /** Creates the Upgrade's modules from the blueprint with instances of the Module class. */
    createProperties() {
        for (let i in this.moduleBlueprint) {
            this.properties.push(new Property(this.moduleBlueprint[i]))
        }
    }
}

/** Class representing a property on a module or tower. */
class Property {
    /**
     * Creates a new Property.
     * @param {object} propertyBlueprint - The module blueprint.
     */
    constructor(propertyBlueprint) {
        this.propertyBlueprint = propertyBlueprint
    }
}