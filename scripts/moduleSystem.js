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
            },
            "subvalues": []
        }
    ]
}

const dartMonkey = {
    "name": "dartMonkey", "displayName": "Dart Monkey",

    "upgradeNames": {
        "top": [
            {
                "name": "sharpShots", "displayName": "Sharp Shots"
            },
            {
                "name": "razorSharpShots", "displayName": "Razor Sharp Shots"
            },
            {
                "name": "spikeOPult", "displayName": "Spike-o-pult"
            },
            {
                "name": "juggernaut", "displayName": "Juggernaut"
            },
            {
                "name": "ultraJuggernaut", "displayName": "Ultra Juggernaut"
            }
        ],
        "middle": [
            {
                "name": "quickShots", "displayName": "Quick Shots"
            },
            {
                "name": "veryQuickShots", "displayName": "Very Quick Shots"
            },
            {
                "name": "tripleShot", "displayName": "Triple Shot"
            },
            {
                "name": "superMonkeyFanClub", "displayName": "Super Monkey Fan Club"
            },
            {
                "name": "plasmaMonkeyFanClub", "displayName": "Plasma Monkey Fan Club"
            }
        ],
        "bottom": [
            {
                "name": "longRangeDarts", "displayName": "Long Range Darts"
            },
            {
                "name": "enhancedEyesight", "displayName": "Enhanced Eyesight"
            },
            {
                "name": "crossbow", "displayName": "Crossbow"
            },
            {
                "name": "sharpShooter", "displayName": "Sharp Shooter"
            },
            {
                "name": "crossbowMaster", "displayName": "Crossbow Master"
            }
        ]
    },

    "costs": {
        "base": 200,
        "top": [100, 250, 300, 1800, 13500],
        "middle": [100, 150, 300, 8000, 45000],
        "bottom": [90, 200, 475, 2000, 25000]
    },

    "validPlacements": ["land"],
    "range": 32, "size": ["radius", 6],

    "upgrades": {
        "base": [
            {
                "moduleType": ["attack", "new"],
                "name": "dart", "mainAttack": true,
                
                "damage": 1, "pierce": 2, "attackCooldown": 0.95, "attackType": "sharp"
            },
            {
                "moduleType": ["attack", "new"],
                "name": "parallel-attack",
                
                "damage": 5, "pierce": 1, "attackType": "sharp"
            }
        ],
        "top": [
            [
                {
                    "moduleType": ["attack", "buff"],
                    "name": "dart",
                    
                    "pierce": 1
                },
                {
                    "moduleType": ["attack", "buff"],
                    "name": "parallel-attack",
                    
                    "damage": 2, "leadDamage": ["+", 5], "attackCooldown": 0.8, "projectiles": 2, "attackType": "normal"
                },
                {
                    "moduleType": ["income", "new"],
                    "name": "tower-income",
                    
                    "money": 30
                }
            ],
            [
                {
                    "moduleType": ["attack", "buff"],
                    "name": "dart",
                    
                    "pierce": 3
                },
                {
                    "moduleType": ["income", "buff"],
                    "name": "tower-income",
                    
                    "money": 100
                }
            ],
            [
                {
                    "moduleType": ["attack", "replace"],
                    "replacingName": "dart", "name": "spikeball",
                    
                    "damage": 1, "ceramicDamage": 1, "pierce": 22, "attackCooldown": 1.15, "attackType": "shatter",
                    "rebounds": true
                },
                {
                    "moduleType": ["rangeBuff"],
                    "value": ["%", 0.15]
                }
            ],
            [
                {
                    "moduleType": ["attack", "replace"],
                    "replacingName": "spikeball", "name": "juggernaut",
                    
                    "damage": 2, "ceramicDamage": 4, "pierce": 50, "attackCooldown": 1, "attackType": "normal",
                    "rebounds": true
                }
            ],
            [
                {
                    "moduleType": ["attack", "replace"],
                    "replacingName": "juggernaut", "name": "ultrajugg",
                    
                    "damage": 4, "ceramicDamage": 16, "fortifiedDamage": 5, "leadDamage": ["*", 6], "pierce": 200,
                    "rebounds": true,

                    "rehit": ["rebound"],

                    "effects": [
                        {
                            "condition": ["multiple", "whicheverFirst", 
                                ["pierceUsed", ["%", 0.5]], 
                                "expireNaturally"
                            ],
                            "result": ["module", "juggernauts"]
                        },
                        {
                            "condition": ["multiple", "whicheverFirst", 
                                ["pierceUsed", ["%", 1]], 
                                "expireNaturally"
                            ],
                            "result": ["module", "juggernauts"]
                        }
                    ]
                },
                {
                    "moduleType": ["attack", "new"],
                    "name": "juggernauts",
                    
                    "damage": 1, "ceramicDamage": 2, "fortifiedDamage": 2, "leadDamage": ["*", 6], "projectiles": [6, 360], "pierce": 100, "attackType": "normal",
                    "rebounds": true,

                    "rehit": ["rebound"]
                }
            ]
        ],
        "middle": [
            [
                {
                    "moduleType": ["attack", "buff"],
                    "name": "dart",
                    
                    "attackCooldown": 0.85
                },
                {
                    "moduleType": ["attack", "buff"],
                    "name": "parallel-attack",
                    
                    "mainAttack": true
                }
            ],
            [
                {
                    "moduleType": ["attack", "buff"],
                    "name": "dart",
                    
                    "attackCooldown": 0.7882
                }
            ],
            [
                {
                    "moduleType": ["attack", "buff"],
                    "name": "dart",
                    
                    "projectiles": [3, 30]
                }
            ],
            [
                {
                    "moduleType": ["attack", "buff"],
                    "name": "dart",
                    
                    "attackCooldown": 0.75
                },
                {
                    "moduleType": "transform", 
                    "name": "fan-club",

                    "ability": {"duration": 15, "cooldown": 50, "initialCooldown": 0, "type": "activated"},

                    "target": [["dartMonkey", [2, 4, 2]]], "transform": "superfan",
                    "count": 10, "addTargetsAfterTransform": true, "removeTransformedOnSell": false
                },
                {
                    "moduleType": ["subtower", "new"],
                    "name": "superfan",
                    "range": 32,

                    "modules": [
                        {
                            "moduleType": ["attack", "new"],
                            "name": "dart", "mainAttack": true,
                            
                            "damage": 1, "pierce": 2, "attackCooldown": 0.95, "attackType": "sharp"
                        }
                    ]
                }
            ],
            [
                
            ]
        ],
        "bottom": [
            [
                {
                    "moduleType": ["rangeBuff"],
                    "value": ["+", 8]
                }
            ],
            [
                {
                    "moduleType": ["attack", "buff"],
                    "name": "dart",
                    
                    "increasedProjectileSpeed": true
                },
                {
                    "moduleType": ["rangeBuff"],
                    "value": ["+", 8]
                },
                {
                    "moduleType": ["towerCamo"],
                    "value": true
                }
                
            ],
            [
                {
                    "moduleType": ["attack", "replace"],
                    "replacingName": "dart", "name": "bolt",
                    
                    "damage": 3, "pierce": 6, "attackType": "sharp",
                    "rebounds": true
                },
                {
                    "moduleType": ["rangeBuff"],
                    "value": ["absolute", 56]
                }
            ],
            [
                {
                    "moduleType": ["attack", "buff"],
                    "name": "bolt",
                    
                    "damage": 3, "attackCooldown": ["absolute", 0.75], "increasedProjectileSpeed": true,

                    "crit": ["50", 7]
                }
            ],
            [
                {
                    "moduleType": ["attack", "buff"],
                    "name": "bolt",
                    
                    "damage": 3, "pierce": 7, "attackCooldown": ["absolute", 0.13], "attackType": "normal", "increasedProjectileSpeed": true,

                    "crit": ["50", 5]
                },
                {
                    "moduleType": ["rangeBuff"],
                    "value": 20
                },
                {
                    "moduleType": ["attack", "buff"],
                    "name": "bolt",
                    "crosspath": [1, 0, 5],
                    
                    "pierce": 6
                },
                {
                    "moduleType": ["attack", "buff"],
                    "name": "bolt",
                    "crosspath": [2, 0, 5],
                    
                    "pierce": 8
                }
            ]
        ]
    }
}

class Tower {
    constructor(fullTowerData, pathSet) {
        this.fullTowerData = structuredClone(fullTowerData);
        this.pathSet = pathSet
        this.modules = this.fullTowerData.upgrades.base
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
        let matchModuleNumber;
        for (let moduleNumber in this.modules) {
            if (this.modules[moduleNumber].name == module.name) {
                matchModuleNumber = moduleNumber
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

let tower1 = new Tower(dartMonkey, [0, 0, 0])
tower1.buffWithUpgrades([2, 1, 0])
console.log(tower1.modules) 