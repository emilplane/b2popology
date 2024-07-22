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

        this.properties = [];

        for (let propertyName in moduleBlueprint.properties) {
            const propertyValue = moduleBlueprint.properties[propertyName];
            if (propertyValue instanceof Property ||
                propertyValue instanceof PropertyBuff) {
                this.properties.push(moduleBlueprint.properties[propertyName]);
            } else {
                if (this.action == "new") {
                    this.properties.push(new Property(
                        propertyName,
                        moduleBlueprint.properties[propertyName]
                    ));
                } else if (this.action == "buff") {
                    this.properties.push(new PropertyBuff(
                        propertyName,
                        moduleBlueprint.properties[propertyName]
                    ));
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
            throw new Error(ERRORS.NOT_NEW_MODULE);
        }

        this.name = newModuleBlueprint.name;
        this.type = newModuleBlueprint.type;
        this.properties = newModuleBlueprint.properties;
        this.allValidNames = [newModuleBlueprint.name];
    }

    upgradeModule(moduleBlueprint) {
        if (!this.allValidNames.includes(moduleBlueprint.name)) {
            throw new Error(ERRORS.INVALID_NAME);
        }

        moduleBlueprint.properties.forEach((propertyBuff) => {
            let propertyExists = false;

            this.properties.forEach(property => {
                if (property.name == propertyBuff.name) {
                    propertyExists = true;
                    property.buff(propertyBuff);
                }
            });

            if (!propertyExists) {
                this.properties.push(propertyBuff.toProperty());
            }
        });
    }
}

