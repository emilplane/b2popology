import { MODULE_PROPERTIES } from "./constants.js";

/**
 * A collection of modules that make up a tower's upgrade.
 */
export class Upgrade {
    /**
     * @param {Array} upgradeBlueprint
     * An array of modules that makes up the upgrade
     */
    constructor(upgradeBlueprint) {
        this.modules = []

        upgradeBlueprint.forEach(module => {
            this.modules.push(new UpgradeModule(module))
        });
    }
}

/**
 * A collection of upgrades that are constructed together into a tower.
 */
export class Tower {
    constructor() {
        this.upgrades = []
        this.modules = []
    }

    /**
     * After adding upgrades, construct the resulting modules onto the instance
     * of this tower.
     */
    constructTower() {
        this.modules = []

        this.upgrades.forEach(upgrade => {
            upgrade.modules.forEach(module => {
                if (module.action == "new") {
                    this.modules.push(new TowerModule(module))
                } else {
                    this.modules.forEach(towerModule => {
                        if (towerModule.allValidNames.includes(module.name)) {
                            towerModule.upgradeModule(new UpgradeModule(module))
                        }
                    });
                }
            })
        });
    }

    /**
     * Adds an upgrade to this tower.
     * @param {Array} upgrade - An array of modules that makes up the upgrade
     */
    addUpgrade(upgrade) {
        this.upgrades.push(new Upgrade(upgrade))
    }
}

/**
 * A module for an upgrade.
 */
export class UpgradeModule {
    /**
     * @param {Object} moduleBlueprint
     */
    constructor(moduleBlueprint) {
        this.name = moduleBlueprint.name
        this.action = moduleBlueprint.action
        this.type = moduleBlueprint.type

        this.properties = []
        

        for (let propertyName in moduleBlueprint.properties) {
            const propertyValue = moduleBlueprint.properties[propertyName]
            if (
                propertyValue instanceof Property ||
                propertyValue instanceof BuffProperty
            ) {
                this.properties.push(moduleBlueprint.properties[propertyName])
            } else {
                if (this.action == "new") {
                    this.properties.push(new Property(
                        propertyName,
                        moduleBlueprint.properties[propertyName]
                    ))
                } else if (this.action == "buff") {
                    this.properties.push(new BuffProperty(
                        propertyName,
                        moduleBlueprint.properties[propertyName]
                    ))
                }
            }
        }
    }
}

/**
 * A constructed module for a tower.
 */
export class TowerModule {
    constructor(newModuleBlueprint) {
        if (newModuleBlueprint.action != "new") {
            throw new Error("This upgrade module does not create a new module!")
        }

        this.name = newModuleBlueprint.name
        this.type = newModuleBlueprint.type
        this.properties = newModuleBlueprint.properties
        this.allValidNames = [newModuleBlueprint.name]
    }

    upgradeModule(moduleBlueprint) {
        if (!this.allValidNames.includes(moduleBlueprint.name)) {
            throw new Error(
                "This upgrade module's name is invalid for this module!"
            )
        }

        moduleBlueprint.properties.forEach((buffProperty) => {
            this.properties.forEach(property => {
                if (property.name == buffProperty.name) {
                    property.buff(buffProperty)
                }
            });
        })
    }
}

/**
 * A property on a module that has some value.
 */
export class Property {

    constructor(name, value) {
        this.name = name
        this.initialValue = value
        this.value = value
        this.buffs = []

        // this.buffs = [
        //     {
        //         "+": [2, 6],
        //         "%": [0.5, 0.85],
        //         "*": [0.64, 0.85]
        //     },
        //     10,
        //     {
        //         "+": [2, 7],
        //         "%": [0.5, 0.85],
        //         "*": [0.64, 0.85]
        //     },
        //     {
        //         "+": [2, 8],
        //         "%": [0.5, 0.85],
        //         "*": [0.64, 0.85]
        //     }
        // ]

        // this.propertyCriteria = MODULE_PROPERTIES[name]

        // const propertyCriteria = MODULE_PROPERTIES[name]

        // switch (propertyCriteria.type) {
        //     case "number":
                
        // }
    }
    
    buff(buffProperty) {
        const propertyCriteria = MODULE_PROPERTIES[this.name]

        if (this.name != buffProperty.name) {
            throw new Error("The property name does not match this property!")
        }
        switch (propertyCriteria.type) {
            case "number":
                if (typeof buffProperty.value == "number") {
                    throw new Error(
                        "Default operators for numeric properties are not " +
                        "implemented yet!"
                    )
                }
                
                if (buffProperty.value[0] == "set") {
                    this.buffs.push(buffProperty.value[1])
                } else if (["+", "%", "*"].includes(buffProperty.value[0])) {
                    if (
                        typeof this.buffs[this.buffs.length-1] != "object"
                    ) {
                        this.buffs.push({ "+": [], "%": [], "*": [] })
                    }
                    this.buffs[this.buffs.length-1][buffProperty.value[0]].push(
                        buffProperty.value[1]
                    )
                } else {
                    throw new Error("This operator is not accounted for!")
                }
                break;
            case "string":
                this.buffs.push(buffProperty.value)
                break;
            default:
                throw new Error(
                    "The type of this property is not accounted for!"
                )
        }
        this.calculateBuffs()
    }

    calculateBuffs() {
        const propertyCriteria = MODULE_PROPERTIES[this.name]

        this.value = this.initialValue

        switch (propertyCriteria.type) {
            case "number":
                this.buffs.forEach(buffBracket => {
                    if (typeof buffBracket == "number") {
                        this.value == buffBracket
                    } else {
                        
                    }
                });
                break;
            case "string":
                break;
            default:
                throw new Error(
                    "The type of this property is not accounted for!"
                )
        }
    }
}

/**
 * Buffs a property.
 */
export class BuffProperty {
    constructor(name, value) {
        this.name = name
        this.value = value
    }
}