let dartMonkey = {
    "name": "dartMonkey", "displayName": "Dart Monkey",
    "category": "primary",

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
                "name": "dart", "mainAttack": true, "fromTower": true,
                
                "damage": 1, "pierce": 2, "attackCooldown": 0.95, "attackType": "sharp"
            },
            {
                "moduleType": ["attack", "new"],
                "name": "j", "fromTower": true,
                
                "damage": 2, "pierce": 2, "attackCooldown": 2, "attackType": "plasma"
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
                    "name": "j",
                    
                    "pierce": ["%", 0.2]
                }
            ],
            [
                {
                    "moduleType": ["attack", "buff"],
                    "name": "dart",
                    
                    "pierce": 3
                },
                {
                    "moduleType": ["attack", "buff"],
                    "name": "j",
                    
                    "pierce": ["%", 0.4]
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
                    
                    "damage": 2, "ceramicDamage": 4, "pierce": "inherit", "attackCooldown": 1, "attackType": "normal",
                    "rebounds": true
                }
            ],
            [
                {
                    "moduleType": ["attack", "replace"],
                    "replacingName": "juggernaut", "name": "ultrajugg",
                    
                    "damage": 4, "ceramicDamage": 16, "fortifiedDamage": 5, "leadDamage": ["*", 6], "pierce": 200, "attackCooldown": "inherit",
                    "rebounds": true,

                    "rehit": ["rebound"],

                    "releaseProjectiles": [
                        {
                            "condition": {
                                "data": [
                                    ["pierceUsed", ["%", 0.5]],
                                    "expire"
                                ]
                            },
                            "result": "juggernauts"
                        },
                        {
                            "condition": {
                                "data": [
                                    ["pierceUsed", ["%", 1]],
                                    "expire"
                                ]
                            },
                            "result": "juggernauts"
                        }
                    ]
                },
                {
                    "moduleType": ["attack", "new"],
                    "name": "juggernauts",
                    
                    "damage": 1, "ceramicDamage": 2, "fortifiedDamage": 2, "leadDamage": ["*", 6], "projectiles": 6, "spread": 360, "pierce": 100, "attackType": "normal",
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
                    
                    "projectiles": 3, "spread": 30
                }
            ],
            [
                {
                    "moduleType": ["attack", "buff"],
                    "name": "dart",
                    
                    "attackCooldown": 0.75
                },
                {
                    "moduleType": ["transform", "new"],
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
                    
                    "damage": 3, "pierce": 6, "attackCooldown": "inherit", "attackType": "sharp",
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

let config = {
    "properties": {
        "mainAttack": {
            "type": "boolean",
            "moduleTypes": ["attack"],
            "defaultValue": false
        },
        "fromTower": {
            "type": "boolean",
            "moduleTypes": ["attack"],
            "defaultValue": false
        },
        "damage": {
            "type": "number",
            "moduleTypes": ["attack"],
            "defaultOperator": "+"
        },
        "ceramicDamage": {
            "type": "number",
            "moduleTypes": ["attack"],
            "defaultOperator": "+"
        },
        "moabDamage": {
            "type": "number",
            "moduleTypes": ["attack"],
            "defaultOperator": "+"
        },
        "pierce": {
            "type": "number",
            "moduleTypes": ["attack"],
            "defaultOperator": "+"
        },
        "attackCooldown": {
            "type": "number",
            "moduleTypes": ["attack"],
            "defaultOperator": "*",
        },
        "attackType": {
            "type": "string",
            "moduleTypes": ["attack"]
        }
    }
}

class Tower {
    constructor(blueprint, config) {
        this.blueprint = blueprint
        this.config = config
        this.resetToBase()
    }

    fixFloatingPoint(value) {
        return parseFloat((value).toFixed(10))
    }
    
    static Path = class {
        constructor(path) {
            this.path = path
            this.highestPaths = []

            let mappedPath = path.map((value, index) => ({value, index}));
            mappedPath.sort((a, b) => b.value - a.value);
            this.highestPaths = mappedPath.map(item => item.index);
            
            this.highestPathNames = []
            for (let highestPathIndex in this.highestPaths) {
                this.highestPathNames.push(pathNumberToName(this.highestPaths[highestPathIndex]))
            }
            
            function pathNumberToName(number) {
                switch (number) {
                    case 0: return "top"
                    case 1: return "middle"
                    case 2: return "bottom"
                    default: return undefined
                }
            }
        }
    }

    static Module = class {
        constructor(moduleBlueprint, config) {
            this.moduleBlueprint = moduleBlueprint
            this.config = config
            this.initialize()
        }

        fixFloatingPoint(value) {
            return parseFloat((value).toFixed(10))
        }
        
        initialize() {
            this.name = this.moduleBlueprint.name
            this.previousNames = []
            this.type = this.moduleBlueprint.moduleType[0]
            this.subtype = this.moduleBlueprint.moduleType[1]
            this.initialProperties = {}
            for (let property in this.config.properties) {
                if (typeof this.moduleBlueprint[property] == this.config.properties[property].type || Array.isArray(this.moduleBlueprint[property]) || this.moduleBlueprint[property] == "inherit") {
                    this.initialProperties[property] = this.moduleBlueprint[property]
                }
            }
            switch (this.subtype) {
                case "new": 
                    this.buffs = []
                    this.properties = structuredClone(this.initialProperties)
                    break
                case "replace": 
                    this.replacingName = this.moduleBlueprint.replacingName
                    break
                default:
                    break
            }
        }
        
        mergeModule(module) {
            if (!(module.config === this.config)) {
                return false
            }
            switch (module.subtype) {
                case "buff":
                    if (module.type != this.type) {
                        return false
                    }
                    for (let propertyName in module.initialProperties) {
                        this.addBuff(module.initialProperties[propertyName], propertyName)
                    }
                    this.organizeBuffs()
                    return true
                case "replace":
                    this.addBuff(module, "replaceModule")
                    this.addPreviousName(this.name)
                    this.name = module.name
                    this.organizeBuffs()
                    return true
                default:
                    return false
            }
        }

        addPreviousName(name) {
            this.previousNames.push(name)
        }

        addBuff(name, value) {
            this.buffs.push([name, value])
        }

        organizeBuffs() {
            let orderedBuffs = [[]]
            for (let buffIndex in this.buffs) {
                switch (this.buffs[buffIndex][1]) {
                    case "replaceModule": 
                        if (orderedBuffs[orderedBuffs.length-1].length == 0) {
                            orderedBuffs.pop()
                        }
                        orderedBuffs.push(this.buffs[buffIndex][0])
                        orderedBuffs.push([])
                        break
                    default: 
                        orderedBuffs[orderedBuffs.length-1].push(this.buffs[buffIndex])
                        break
                }
            }
            if (orderedBuffs[orderedBuffs.length-1].length == 0) {
                orderedBuffs.pop()
            }
            for (let i in orderedBuffs) {
                if (orderedBuffs[i].length == undefined) {
                    let previousProperties = structuredClone(this.properties)
                    this.replaceModule(orderedBuffs[i], previousProperties)
                } else {
                    this.calculateBuffs(orderedBuffs[i])
                }
            }
        }

        replaceModule(module, previousProperties) {
            // console.log(structuredClone(module.initialProperties), structuredClone(previousProperties), this)
            this.properties = module.initialProperties
            for (let property in config.properties) {
                if (this.properties[property] == "inherit") {
                    this.properties[property] = previousProperties[property]
                }
            }
        }

        calculateBuffs(buffSet) {
            for (let property in this.config.properties) {
                let defaultOperator = this.config.properties[property].defaultOperator
                switch (this.config.properties[property].type) {
                    case "number": 
                        this.numberBuff(buffSet, property, defaultOperator)
                    default: break
                }
            }
        }

        numberBuff(buffSet, property, defaultOperator) {
            if (this.properties[property] != undefined) {
                let propertyBuffs = {
                    ["*"]: [],
                    ["%"]: [],
                    ["+"]: []
                }
                for (let buffIndex in buffSet) {
                    if (buffSet[buffIndex][1] == property) {
                        if (typeof buffSet[buffIndex][0] == "number") {
                            propertyBuffs[defaultOperator].push(buffSet[buffIndex][0])
                        } else {
                            propertyBuffs[buffSet[buffIndex][0][0]].push(buffSet[buffIndex][0][1])
                        }
                    }
                }
                for (let operator in propertyBuffs) {
                    let propertyValue = this.properties[property]
                    switch (operator) {
                        case "*":
                            for (let buffIndex in propertyBuffs[operator]) {
                                propertyValue = this.fixFloatingPoint(propertyValue * propertyBuffs[operator][buffIndex])
                            }
                            this.properties[property] = propertyValue
                            break
                        case "%":
                            let percentageModifier = 0
                            for (let buffIndex in propertyBuffs[operator]) {
                                percentageModifier = this.fixFloatingPoint(percentageModifier + propertyBuffs[operator][buffIndex])
                            }
                            propertyValue = this.fixFloatingPoint(propertyValue * (1 + percentageModifier))
                            this.properties[property] = propertyValue
                            break
                        case "+":
                            for (let buffIndex in propertyBuffs[operator]) {
                                propertyValue = this.fixFloatingPoint(propertyValue + propertyBuffs[operator][buffIndex])
                            }
                            this.properties[property] = propertyValue
                            break
                        default:    
                            this.properties[property] = propertyValue
                            break
                    }
                }
            }
        }
    }
    
    resetToBase() {
        this.tower = {
            range: this.blueprint.range,
            size: this.blueprint.size,
            validPlacements: this.blueprint.validPlacements
        }
        this.modules = []
        for (let moduleIndex in this.blueprint.upgrades.base) {
            this.modules.push(new Tower.Module(this.blueprint.upgrades.base[moduleIndex], this.config))
        }
        this.cost = this.blueprint.costs.base
    }
    
    setUpgrade(path) {
        this.resetToBase()
        let upgradePath = new Tower.Path(path)
        for (let highestPathsIndex in upgradePath.highestPaths) { //for each path on the tower, from most to least upgraded
            for (let i = 0; i < upgradePath.path[upgradePath.highestPaths[highestPathsIndex]]; i++) { //for each upgrade on that path up to the amount upgraded
                for (let moduleIndex in this.blueprint.upgrades[upgradePath.highestPathNames[highestPathsIndex]][i]) { // for each module of the upgrade
                    let buffModule = new Tower.Module(
                        this.blueprint.upgrades[upgradePath.highestPathNames[highestPathsIndex]][i][moduleIndex],
                        this.config
                    )
                    this.matchModule(buffModule)
                }
            }
        }
    }
    
    matchModule(module) {
        for (let moduleIndex in this.modules) {
            if (this.modules[moduleIndex].name == module.name) {
                this.modules[moduleIndex].mergeModule(module)
            } else if (this.modules[moduleIndex].name == module.replacingName) {
                this.modules[moduleIndex].mergeModule(module)
            } else {
                for (let previousNameIndex in this.modules[moduleIndex].previousNames) {
                    if (this.modules[moduleIndex].previousNames[previousNameIndex] == module.name) {
                        this.modules[moduleIndex].mergeModule(module)
                    }
                }
            }
        }
    }
}

let tower1 = new Tower(dartMonkey, config)
tower1.setUpgrade([5, 2, 0])
console.log(tower1.modules)