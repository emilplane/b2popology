import { ERRORS } from "../constants.js";
import { Property, PropertyBuff } from "./propertyLevel.js";

/**
 * A module for an upgrade.
 */
export class UpgradeModule {
    /**
     * @param {Object} moduleBlueprint
     */
    constructor(moduleBlueprint) {
        this.name = moduleBlueprint.name;
        this.action = moduleBlueprint.action;
        this.type = moduleBlueprint.type;
        this.allValidNames = [moduleBlueprint.name];

        this.properties = [];

        for (let propertyName in moduleBlueprint.properties) {
            const propertyValue = moduleBlueprint.properties[propertyName];
            this.properties.push(addProperty(propertyName, propertyValue, this.action))
        }
    }
}

// export class TowerPropertiesModule {
//     constructor(towerPropertiesModuleBlueprint) {
//         this.name = "tower-properties";
//         this.allValidNames = ["tower-properties"];
//         this.type = "towerProperties";
//         this.properties = [];
//
//         for (let propertyName in towerPropertiesModuleBlueprint) {
//             const propertyValue = towerPropertiesModuleBlueprint[propertyName];
//             console.log()
//             this.properties.push(addProperty(propertyName, propertyValue, "new"))
//         }
//     }
// }

function addProperty(propertyName, propertyValue, action) {
    if (propertyValue instanceof Property || propertyValue instanceof PropertyBuff) {
        return propertyValue;
    } else if (action === "new") {
        return new Property(propertyName, propertyValue);
    } else if (action === "buff") {
        return new PropertyBuff(propertyName, propertyValue);
    }
}

/**
 * A constructed module for a tower.
 */
export class TowerModule {
    constructor(newModuleBlueprint) {
        if (newModuleBlueprint.action !== "new") {
            throw new Error(ERRORS.NOT_NEW_MODULE);
        }

        this.name = newModuleBlueprint.name;
        this.type = newModuleBlueprint.type;
        this.properties = newModuleBlueprint.properties;
        this.allValidNames = [newModuleBlueprint.name];
        this.validateModuleReferences();
    }

    upgradeModule(moduleBlueprint) {
        if (!this.allValidNames.includes(moduleBlueprint.name)) {
            throw new Error(ERRORS.INVALID_NAME);
        }

        moduleBlueprint.properties.forEach((propertyBuff) => {
            let propertyExists = false;

            this.properties.forEach(property => {
                if (property.name === propertyBuff.name) {
                    propertyExists = true;
                    property.buff(propertyBuff);
                }
            });

            if (!propertyExists) {
                this.properties.push(propertyBuff.toProperty());
            }
        });
        this.validateModuleReferences();
    }

    /**
     * Makes sure we don't end up with any nasty maximum call stack size errors when some bozo
     * goes and makes a property try and embed its own module
     */
    validateModuleReferences() {
        this.properties.forEach(property => {
            if (property.criteria.type === "modules") {
                property.value.forEach(value => {
                    if (this.name === value) {
                        throw new Error(ERRORS.CIRCULAR_DEPENDENCY);
                    }
                })
            }
        })
    }
}