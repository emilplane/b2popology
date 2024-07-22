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