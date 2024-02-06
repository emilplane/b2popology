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
        this.upgrades.base = new Upgrade(this.towerBlueprint.upgrades.base, true)
        this.upgrades.paths = []
        for (let pathIndex in this.towerBlueprint.upgrades.paths) {
            let currentPath = []
            for (let upgradeIndex in this.towerBlueprint.upgrades.paths[pathIndex]) {
                currentPath.push(new Upgrade(this.towerBlueprint.upgrades.paths[pathIndex][upgradeIndex]), false)
            }
            this.upgrades.paths.push(currentPath)
        }
    }

    /** Calculates and returns a fully upgraded tower. */
    getTowerData() {
        
    }
}

/** Class representing a tower upgrade, which can include the base tower itself. */
class Upgrade {
    /**
     * Creates a new Upgrade.
     * @param {object} upgradeBlueprint - The upgrade blueprint.
     * @param {boolean} isBase - Whether this upgrade is the base tower.
     */
    constructor(upgradeBlueprint, isBase) {
        this.upgradeBlueprint = upgradeBlueprint
        this.isBaseUpgrade = isBase
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

    /** Creates the Module's properties with instances of the Property class. */
    createProperties() {
        for (let name in this.moduleBlueprint) {
            this.properties.push(new Property(name, this.moduleBlueprint[name]))
        }
    }
}

/** Class representing a property on a module or tower. */
class Property {
    /**
     * Creates a new Property.
     * @param {string} propertyName - The name of the property.
     * @param {object} propertyData - The data of the property.
     */
    constructor(propertyName, propertyData) {
        this.name = propertyName
        this.data = propertyData
        console.log(this.name, this.data)
    }
}