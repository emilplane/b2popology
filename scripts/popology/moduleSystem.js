function getPathingData(path) {
    let output = {
        "originalValues": path
    };

    if (path[0] > path[1] && path[0] > path[2]) {
        output.mainPath = 0
        output.mainPathName = "top"
        output.mainPathValue = path[0]
        if (path[1] > path[2]) {
            output.crosspathPath = 1
            output.crosspathPathName = "middle"
            output.crosspathPathValue = path[1]
            output.lastPath = 2
            output.lastPathName = "bottom"
            output.lastPathValue = path[2]
        } else {
            output.crosspathPath = 2
            output.crosspathPathName = "bottom"
            output.crosspathPathValue = path[2]
            output.lastPath = 1
            output.lastPathName = "middle"
            output.lastPathValue = path[1]
        }
    } else if (path[1] > path[2]) {
        output.mainPath = 1
        output.mainPathName = "middle"
        output.mainPathValue = path[1]
        if (path[0] > path[2]) {
            output.crosspathPath = 0
            output.crosspathPathName = "top"
            output.crosspathPathValue = path[0]
            output.lastPath = 2
            output.lastPathName = "bottom"
            output.lastPathValue = path[2]
        } else {
            output.crosspathPath = 2
            output.crosspathPathName = "bottom"
            output.crosspathPathValue = path[2]
            output.lastPath = 0
            output.lastPathName = "top"
            output.lastPathValue = path[0]
        }
    } else {
        output.mainPath = 2
        output.mainPathName = "bottom"
        output.mainPathValue = path[2]
        if (path[0] > path[1]) {
            output.crosspathPath = 0
            output.crosspathPathName = "top"
            output.crosspathPathValue = path[0]
            output.lastPath = 1
            output.lastPathName = "middle"
            output.lastPathValue = path[1]
        } else {
            output.crosspathPath = 1
            output.crosspathPathName = "middle"
            output.crosspathPathValue = path[1]
            output.lastPath = 0
            output.lastPathName = "top"
            output.lastPathValue = path[0]
        }
    }

    if (output.mainPathValue == 0) {
        output.hasMainPath = false
    } else {
        output.hasMainPath = true
    }

    if (output.crosspathPathValue == 0) {
        output.hasCrosspath = false
    } else {
        output.hasCrosspath = true
    }

    if (output.crosspathPathValue == 0) {
        output.hasLastPath = false
    } else {
        output.hasLastPath = true
    }

    return output
}

const config = {
    "console": {
        "errors": true
    },
    "towerProperties": [

    ],
    "properties": [
        {
            "name": "mainAttack", "displayName": "Main Attack", 
            
            "modules": ["attack"],
            "type": "simpleValue", 
            "valueData": {
                "valueType": "boolean", 
                "defaultState": false
            },
            "subvalues": []
        },
        {
            "name": "damage", "displayName": "Damage", 
            
            "modules": ["attack"],
            "type": "simpleValue", 
            "valueData": {
                "valueType": "number", 
                "defaultOperator": "+",
                "defaultState": null
            },
            "subvalues": [
                {
                    "name": "ceramicDamage", "displayName": "Ceramic Damage",
                    "type": "simpleValue", 
                    "valueData": {"valueType": "number", "defaultOperator": "+", "defaultState": null}
                },
                {
                    "name": "moabDamage", "displayName": "MOAB Damage",
                    "type": "simpleValue", 
                    "valueData": {"valueType": "number", "defaultOperator": "+", "defaultState": null}
                },
                {
                    "name": "fortifiedDamage", "displayName": "Fortified Damage",
                    "type": "simpleValue", 
                    "valueData": {"valueType": "number", "defaultOperator": "+", "defaultState": null}
                },
                {
                    "name": "fortifiedMoabDamage", "displayName": "Fortified MOAB Damage",
                    "type": "simpleValue", 
                    "valueData": {"valueType": "number", "defaultOperator": "+", "defaultState": null}
                },
                {
                    "name": "leadDamage", "displayName": "Lead Damage",
                    "type": "simpleValue", 
                    "valueData": {"valueType": "number", "defaultOperator": "+", "defaultState": null}
                },
                {
                    "name": "camoDamage", "displayName": "Camo Damage",
                    "type": "simpleValue", 
                    "valueData": {"valueType": "number", "defaultOperator": "+", "defaultState": null}
                },
                {
                    "name": "frozenDamage", "displayName": "Frozen Damage",
                    "type": "simpleValue", 
                    "valueData": {"valueType": "number", "defaultOperator": "+", "defaultState": null}
                },
                {
                    "name": "stunnedDamage", "displayName": "Stunned Damage",
                    "type": "simpleValue", 
                    "valueData": {"valueType": "number", "defaultOperator": "+", "defaultState": null}
                }
            ]
        },
        {
            "name": "projectiles", "displayName": "Projectiles", 
            
            "modules": ["attack"],
            "type": "simpleValue", 
            "valueData": {
                "valueType": "number", 
                "defaultOperator": "absolute",
                "defaultState": 1
            },
            "subvalues": [
                {
                    "name": "spread", "displayName": "Spread",
                    "type": "simpleValue", 
                    "valueData": {"valueType": "number", "defaultState": null}
                }
            ]
        },
        {
            "name": "pierce", "displayName": "Pierce", 
            
            "modules": ["attack"],
            "type": "simpleValue", 
            "valueData": {
                "valueType": "number", 
                "defaultOperator": "+",
                "defaultState": null
            },
            "subvalues": [
                {
                    "name": "impact", "displayName": "Impact",
                    "type": "simpleValue", 
                    "valueData": {"valueType": "boolean", "defaultState": false}
                }
            ]
        },
        {
            "name": "attackCooldown", "displayName": "Attack Cooldown", 
            
            "modules": ["attack"],
            "type": "simpleValue", 
            "valueData": {
                "valueType": "number", 
                "defaultOperator": "*",
                "defaultState": null
            },
            "subvalues": []
        },
        {
            "name": "money", "displayName": "Money", 
            
            "modules": ["income"],
            "type": "simpleValue", 
            "valueData": {
                "valueType": "number", 
                "defaultOperator": "+",
                "defaultState": null
            }
        }
    ]
}

export class Tower {
    constructor(fullTowerData, pathSet) {
        this.fullTowerData = structuredClone(fullTowerData);
        this.pathSet = pathSet
        this.modules = this.fullTowerData.upgrades.base
        this.name = {"main": undefined, "secondary": undefined}
        this.buffWithUpgrades(this.pathSet)
        this.initializeTowerStats()
    }

    initializeTowerStats() {
        this.towerStats = {
            "range": this.fullTowerData.range,
            "size": this.fullTowerData.size,
        }
    }

    buffWithUpgrades(pathSet) {
        let pathData = getPathingData(pathSet)
        for (let i = 0; i < pathData.mainPathValue; i++) {
            this.addUpgrade(this.fullTowerData.upgrades[pathData.mainPathName][i])
        }
        for (let i = 0; i < pathData.crosspathPathValue; i++) {
            this.addUpgrade(this.fullTowerData.upgrades[pathData.crosspathPathName][i])
        }
    }

    addUpgrade(moduleSet) {
        for (let moduleNumber in moduleSet) {
            this.addModule(moduleSet[moduleNumber])
        }
    }

    addModule(module) {
        if (module.moduleType[1] == "new") {
            this.#addNewModule(module)
            return true
        }
        if (module.moduleType[1] == "replace") {
            for (let moduleNumber in this.modules) {
                if (this.modules[moduleNumber].name == module.replacingName) {
                    let previousModule = structuredClone(this.modules[moduleNumber])
                    delete this.modules[moduleNumber]
                    let newModule = module
                    if (previousModule.previousNames == undefined) {newModule.previousNames = []} 
                    else {newModule.previousNames = previousModule.previousNames}
                    newModule.previousNames.push(newModule.replacingName)
                    delete newModule.replacingName
                    this.modules.push(newModule)
                    return true
                }
            }
        }
        let matchModuleNumber;
        for (let moduleNumber in this.modules) {
            if (this.modules[moduleNumber].name == module.name) {
                matchModuleNumber = moduleNumber
            }
            for (let nameNumber in this.modules[moduleNumber].previousNames) {
                if (this.modules[moduleNumber].previousNames[nameNumber] == module.name) {
                    matchModuleNumber = moduleNumber
                }
            }
        }
        let initialModule = this.modules[matchModuleNumber]
        if (matchModuleNumber == undefined) {return false}
        for (let propertyNumber in config.properties) {
            let propertyData = config.properties[propertyNumber]
            let moduleTypeMatch = false;
            for (let moduleTypeNumber in propertyData.modules) {
                if (initialModule.moduleType[0] == propertyData.modules[moduleTypeNumber]) {moduleTypeMatch = true}
            }
            
            if (moduleTypeMatch) {
                switch (propertyData.type) {
                    case "simpleValue":
                        if (module[propertyData.name] != undefined) {
                            this.#simpleValueSwitch(initialModule, module, propertyData, propertyData.valueData.defaultOperator)
                        }
                        break;
                }
                for (let subpropertyNumber in propertyData.subvalues) {
                    let subpropertyData = propertyData.subvalues[subpropertyNumber]
                    switch (subpropertyData.type) {
                        case "simpleValue":
                            if (module[subpropertyData.name] != undefined) {
                                this.#simpleValueSwitch(initialModule, module, subpropertyData, subpropertyData.valueData.defaultOperator)
                            }
                            break;
                    }
                    
                }
            }
        }
        return true
    }

    #addNewModule(module) {
        this.modules.push(module)
    }

    #simpleValueSwitch(initialModule, buffModule, propertyData, defaultOperator) {
        switch (propertyData.valueData.valueType) {
            case "number":
                Tower.numberBuff(initialModule, buffModule, propertyData.name, defaultOperator)
                break;
            case "boolean": 
                Tower.booleanBuff(initialModule, propertyData.name, buffModule[propertyData.name])
                break;
            case "string": 
                Tower.stringBuff(initialModule, propertyData.name, buffModule[propertyData.name])
                break;
        }
    }

    static numberBuff(initialModule, buffModule, propertyName, defaultOperator) {
        if (initialModule[propertyName] == undefined) {
            if (buffModule[propertyName][0] == "absolute" || (defaultOperator == "absolute" && !(typeof buffModule[propertyName] == "object"))) {
                initialModule[propertyName] = Tower.calculateNumbers(initialModule[propertyName], buffModule[propertyName], "absolute")
            } else {
                return false
            }
        }
        initialModule[propertyName] = Tower.calculateNumbers(initialModule[propertyName], buffModule[propertyName], defaultOperator)
        return true
    }

    static calculateNumbers(initial, buff, defaultOperator) {
        let operator = defaultOperator;
        let buffValue = buff;
        if (typeof buff == "object") {
            operator = buff[0];
            buffValue = buff[1];
        }
        switch (operator) {
            case "+":           return initial + buffValue
            case "-":           return initial - buffValue
            case "*": case "x": return ((initial*10000000) * buffValue)/10000000
            case "/": case "÷": return initial / buffValue
            case "%":           return ((initial*10000000) * (buffValue+1))/10000000
            case "absolute":    return buffValue
        }
    }

    static booleanBuff(initialModule, propertyName, buff) {
        if (typeof buff == "boolean") {
            initialModule[propertyName] = buff
        }
    }

    static stringBuff(initialModule, propertyName, buff) {
        if (typeof buff == "string") {
            initialModule[propertyName] = buff
        }
    }
}