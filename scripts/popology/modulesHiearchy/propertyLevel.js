import { MODULE_PROPERTIES, ERRORS } from "../constants.js";
import { multiplyArray, sumArray } from "../utilities.js";

/**
 * A property on a module that has some value.
 */

export class Property {
    constructor(name, value, initializedAfterModule) {
        this.name = name;
        this.initialValue = value;
        this.value = value;
        this.newBuffs = [];
        this.initializedAfterModule = initializedAfterModule;
        if (this.initializedAfterModule == undefined) {
            this.initializedAfterModule = false;
        }
        this.criteria = MODULE_PROPERTIES[this.name];
        if (this.criteria == undefined) {
            throw new Error(ERRORS.PROPERTY_NOT_CONFIGURED);
        }
    }

    /**
     * Adds a buff to the property.
     * @param {PropertyBuff} propertyBuff - The buff to add to this property.
     */
    buff(propertyBuff) {
        this.newBuffs.push(propertyBuff);
        this.assembleBuffs();
    }

    /**
     * Part 1 of the buffing process: orders each buff for this property in
     * the valid order. The ordering depends on the type.
     */
    assembleBuffs() {
        let orderedBuffs = [];

        this.newBuffs.forEach(propertyBuff => {
            if (this.name !== propertyBuff.name) {
                throw new Error(ERRORS.NAME_NOT_MATCHING);
            }

            switch (this.criteria.type) {
                case "number":
                    handleNumberTypeBuff(propertyBuff, orderedBuffs);
                    break;
                case "string":
                    orderedBuffs.push(propertyBuff.value);
                    break;
                case "boolean":
                    handleBooleanTypeBuff(propertyBuff);
                    break;
                default:
                    throw new Error(ERRORS.TYPE_NOT_SUPPORTED);
            }
        });

        this.calculateBuffs(orderedBuffs);

        function handleNumberTypeBuff(propertyBuff, orderedBuffs) {
            if (typeof propertyBuff.value === "number") {
                throw new Error(ERRORS.DEFAULTS_NOT_IMPLEMENTED);
            }

            if (propertyBuff.value[0] === "set") {
                orderedBuffs.push(propertyBuff.value[1]);
            } else if (["+", "%", "*"].includes(propertyBuff.value[0])) {
                if (typeof orderedBuffs[orderedBuffs.length - 1] !==
                    "object") { orderedBuffs.push({ "+": [], "%": [], "*": [] }); }

                orderedBuffs[orderedBuffs.length - 1][propertyBuff.value[0]]
                    .push(propertyBuff.value[1]);
            } else {
                throw new Error(ERRORS.OPERATOR_NOT_SUPPORTED);
            }
        }

        function handleBooleanTypeBuff(propertyBuff) {
            let normalizedValue = propertyBuff.value;
            if (normalizedValue === true) { normalizedValue = "true"; }
            else if (normalizedValue === false) { normalizedValue = "false"; }

            switch (normalizedValue) {
                case "true": case "false": case "invert":
                    orderedBuffs.push(propertyBuff.value);
                    break;
                default:
                    throw new Error(ERRORS.VALUE_NOT_SUPPORTED);
            }
            orderedBuffs.push(propertyBuff.value);
        }
    }

    /**
     * Part 2 of the buffing process: calculates the final value of the property
     * based on the ordered buffs.
     * @param {Array} orderedBuffs The ordered buffs for this property.
     */
    calculateBuffs(orderedBuffs) {
        this.value = this.initialValue;

        switch (this.criteria.type) {
            case "number":
                orderedBuffs.forEach(buffValue => {
                    if (typeof buffValue === "number") {
                        this.value = buffValue;
                    } else {
                        this.value = calculateOperationsForNumber(
                            buffValue, this.value
                        );
                    }
                });
                break;
            case "string":
                this.value = orderedBuffs[orderedBuffs.length - 1];
                break;
            default: throw new Error(ERRORS.TYPE_NOT_SUPPORTED);
        }

        /**
         * Takes an object containing values that are an additive,
         * multiplicative, or percentage buff and applies them to the base
         * value.
         * @param {object} valuesInOperations
         * The object containing values that are an additive, multiplicative, or
         * percentage buff.
         * @param {number} value The base value to affect.
         * @returns The modified value
         */
        function calculateOperationsForNumber(valuesInOperations, value) {
            const multiplicativeValue = multiplyArray(valuesInOperations["*"]);
            const percentageValue = 1 + sumArray(valuesInOperations["%"]);
            const additiveValue = sumArray(valuesInOperations["+"]);

            let returnValue = value;
            returnValue *= multiplicativeValue;
            returnValue *= percentageValue;
            returnValue += additiveValue;
            return returnValue;
        }
    }
}
/**
 * Buffs a property.
 */

export class PropertyBuff {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

    /**
     * Converts this PropertyBuff into a Property.
     * @returns the resulting Property.
     */
    toProperty() {
        const propertyCriteria = MODULE_PROPERTIES[this.name];
        let property = new Property(this.name, this.value);
        switch (propertyCriteria.type) {
            case "string": case "boolean":
                break;
            case "number": 
                if (Array.isArray(this.value)) {
                    if (!(this.value[0] == "set" || this.value[0] == "+")) {
                        throw new Error(ERRORS.CANT_CONVERT);
                    }
                    property = new Property(this.name, this.value[1]);
                }
                break;
            default:
                throw new Error(ERRORS.CANT_CONVERT);
        }
        return property;
    }
}

