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

export function rep() {
    var str = 'Hello World';
    str = setCharAt(str,4,'a');
    alert(str);
}

export function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}

class Color {
    constructor() {}
}

export class HSLA extends Color {
    constructor(h, s, l, a) {
        super()
        this.h = h
        this.s = s
        this.l = l
        this.a = a
    }
}

export class HSL extends Color {
    constructor(h, s, l) {
        super()
        this.h = h
        this.s = s
        this.l = l
    }
}

export class BackgroundGradient {
    defaultValue = new HSLA(0, 0, 0, 0.5)

    constructor(start, end, direction) {
        this.start = start
        this.end = end
        this.direction = direction
    }
}