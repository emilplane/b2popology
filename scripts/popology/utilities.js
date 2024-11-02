import { MODULE_PROPERTIES, UI_CONSTANTS } from "./constants.js"

export function statArrayToDisplayStat(stat) {
    let statValue = stat.value;

    if (Array.isArray(statValue)) {
        switch (statValue[0]) {
            case "+": statValue = `+${statValue[1]}`; break;
            case "*": statValue = `${statValue[1]*100}%`; break;
            case "%": statValue = `${statValue[1]*100}%`; break;
        }
    }

    if (stat.criteria.showUnitByDefault) {
        statValue += stat.criteria.unit;
    }

    if (stat.afterBuffValue !== undefined && !isNaN(stat.afterBuffValue)
    ) {
        statValue += ` (${stat.afterBuffValue}${stat.criteria.showUnitByDefault ? stat.criteria.unit : ""})`;
    }

    return statValue;
}

export function addAfterBuffValueToPropertyBuff(property, module, tower) {
    if (tower === undefined || module === undefined) return property;
    const propertyCopy = structuredClone(property)

    // Find corresponding tower module for this upgrade module
    const correspondingTowerModule = tower.modules.find(towerModule =>
        towerModule.allValidNames.includes(module.name)
    );

    // Find corresponding property for this upgrade's property in the tower module
    propertyCopy.afterBuffValue = correspondingTowerModule.properties.find(
        (property) => property.name === propertyCopy.name
    ).value

    return propertyCopy
}

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
    return path[0] === 0 && path[1] === 0 && path[2] === 0;

}

export function pathDisplayText(path, isUpgrade = false) {
    let pathText = path.join(UI_CONSTANTS.PATH_JOIN_CHARACTER)
    if (isUpgrade) {
        pathText = pathText.replace(/0/g, "x");
    }

    return pathText
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

export class UpgradeSummaryStats {
    constructor(upgrade) {
        this.upgrade = upgrade
        this.summaryArray = []

        this.populateSummaryArray()
    }

    populateSummaryArray() {
        this.numberOfNonBuffUpgradeModules()

        if (this.numberOfNonBuffUpgradeModules() === 0) {
            this.upgrade.forEach(module => {
                for (const propertyName in module.properties) {
                    const propertyData = MODULE_PROPERTIES[propertyName]
                    if (propertyData.includeInSummary) {
                        // console.log(propertyName, module.properties[propertyName])
                        switch (propertyData.type) {
                            case "number":
                                const operator = module.properties[propertyName][0]
                                const value = module.properties[propertyName][1]
                                let valueString = ''
                                switch (operator) {
                                    case "+":
                                        valueString = `+${value}`
                                        break
                                    case "%":
                                        valueString = `+${value*100}%`
                                        break
                                    case "*":
                                        valueString = `${value*100}%`
                                        break
                                }
                                if (propertyData.unit !== undefined) {
                                    this.summaryArray.push(`${valueString}${propertyData.unit}`)
                                } else {
                                    this.summaryArray.push(`${valueString} ${propertyData.displayName}`)
                                }
                                break
                        }
                    }
                }
            })
        }
    }

    numberOfNonBuffUpgradeModules() {
        let number = 0
        this.upgrade.forEach(module => {
            if (module.action !== "buff") {
                number++
            }
        })

        return number
    }
}