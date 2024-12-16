import {areArraysEqual} from "../utilities.js";

export class TowerPath {
    constructor(input) {
        this.input = input;
        this.path = [0, 0, 0]

        if (Array.isArray(input)) {
            input.forEach((item) => {
                if (isPositiveInt(item)) TowerPath.invalidInputError()
            })
            this.path = input
        } else if (typeof input === 'string') {
            if (input.toLowerCase() !== 'base') TowerPath.invalidInputError()
        } else if (typeof input === 'object') {
            if (isPositiveInt(input.path) && isPositiveInt(input.upgrade)) {
                this.path[input.path] = input.upgrade+1
            } else {

            }
        } else if (input !== undefined) {
             TowerPath.invalidInputError()
        }

        function isPositiveInt(value) {
            return Number.isInteger(value) && value >= 0
        }
    }

    pathLevelBreakoutObject(towerBlueprint) {
        const obj = this.path.map((level, index) => ({
            level,
            pathNumber: index,
            upgrades: towerBlueprint.upgrades.paths[index]
        }));

        console.log(obj)

        return obj
    }

    simplePathString(baseStringFor000) {
        if (baseStringFor000 && this.isBase()) return "base"
        return this.path.join("")
    }

    isBase() {
        return areArraysEqual(this.path, [0, 0, 0])
    }

    /**
     * Selects the correct upgrade for this path and returns it.
     * @param object
     */
    blueprintUpgradeSelector(object) {
        if (this.isBase()) return object.base

        const path = this.path.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0)
        const index = Math.max(...this.path) - 1
        return object.paths[path][index]
    }

    static invalidInputError() {
        throw new Error('Input for this path/upgrade is invalid!')
    }
}