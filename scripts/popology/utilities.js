import { UI_CONSTANTS } from "./constants.js"

export function fixFloatingPoint(number) {
    if (typeof number == "number") return Number(number.toFixed(10))
    return undefined
}

export function multiplyArray(array) {
    if (!Array.isArray(array)) {
        throw new Error(`${typeof array} given instead of an array`)
    }
    return fixFloatingPoint(
        array.reduce((accumulator, currentValue) => 
            accumulator * currentValue, 1
        )
    )
}

export function sumArray(array) {
    if (!Array.isArray(array)) {
        throw new Error(`${typeof array} given instead of an array`)
    }
    return fixFloatingPoint(
        array.reduce((accumulator, currentValue) => 
            accumulator + currentValue, 0
        )
    )
}

export function isBasePath(path) {
    if (path[0] == 0 && path[1] == 0 && path[2] == 0) {
        return true
    }
    return false
}

export function pathDisplayText(path) {
    return path.join(UI_CONSTANTS.PATH_JOIN_CHARACTER)
}