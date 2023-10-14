let towerDirectory = [
    {
        "name": "primary", 
        "displayName": "Primary",
        "type": "tower", 
        "data": [
            {
                "name": "dartMonkey",
                "enabled": true
            },
            {
                "name": "boomerangMonkey",
                "enabled": true
            },
            {
                "name": "bombShooter",
                "enabled": true
            },
            {
                "name": "tackShooter",
                "enabled": true
            },
            {
                "name": "iceMonkey",
                "enabled": true
            },
            {
                "name": "glueGunner",
                "enabled": true
            }
        ]
    },
    {
        "name": "military", 
        "displayName": "Military",
        "type": "tower", 
        "data": [
            {
                "name": "sniperMonkey",
                "enabled": true
            },
            {
                "name": "monkeySub",
                "enabled": true
            },
            {
                "name": "monkeyBuccaneer",
                "enabled": true
            },
            {
                "name": "monkeyAce",
                "enabled": true
            },
            {
                "name": "heliPilot",
                "enabled": true
            },
            {
                "name": "mortarMonkey",
                "enabled": true
            },
            {
                "name": "dartlingGunner",
                "enabled": true
            }
        ]
    }
]

let dartMonkey = {
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
                "name": "dart2", "mainAttack": true,
                
                "damage": 1, "pierce": 2, "attackCooldown": 0.95, "attackType": "sharp"
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
                    "name": "dart2",
                    
                    "pierce": 4
                },
                {
                    "moduleType": ["attack", "buff"],
                    "name": "shouldNotExist",
                    
                    "pierce": 4
                }
            ],
            [
                {
                    "moduleType": ["attack", "buff"],
                    "name": "dart",
                    
                    "pierce": 3
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
                    "replacingName": "juggernauts",
                    
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

function getPathSignificances(path) {
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
        } else {
            output.crosspathPath = 2
            output.crosspathPathName = "bottom"
            output.crosspathPathValue = path[2]
        }
    } else if (path[1] > path[2]) {
        output.mainPath = 1
        output.mainPathName = "middle"
        output.mainPathValue = path[1]
        if (path[0] > path[2]) {
            output.crosspathPath = 0
            output.crosspathPathName = "top"
            output.crosspathPathValue = path[0]
        } else {
            output.crosspathPath = 2
            output.crosspathPathName = "bottom"
            output.crosspathPathValue = path[2]
        }
    } else {
        output.mainPath = 2
        output.mainPathName = "bottom"
        output.mainPathValue = path[2]
        if (path[0] > path[1]) {
            output.crosspathPath = 0
            output.crosspathPathName = "top"
            output.crosspathPathValue = path[0]
        } else {
            output.crosspathPath = 1
            output.crosspathPathName = "middle"
            output.crosspathPathValue = path[1]
        }
    }

    return output
}

class Tower {
    constructor(towerObject) {
        this.tower = towerObject;
    }

    static function() {
        return tower
    }
}

class ModuleSet {
    constructor(moduleSet) {
        this.moduleSet = moduleSet;
    }

    mergeSet(buffModuleSetData) {
        for (let buffModuleNumber in buffModuleSetData.moduleSet) {
            for (let initialModuleNumber in this.moduleSet) {
                if (
                    this.moduleSet[initialModuleNumber].name == buffModuleSetData.moduleSet[buffModuleNumber].name 
                    || this.moduleSet[initialModuleNumber].name == buffModuleSetData.moduleSet[buffModuleNumber].replacingName
                ) {
                    let initialModule = new Module(this.moduleSet[initialModuleNumber])
                    let buffModule = new Module(buffModuleSetData.moduleSet[buffModuleNumber])
                    initialModule.merge(buffModule)
                    this.moduleSet[initialModuleNumber] = initialModule.module
                }
            }
        }
    }
}

function simpleNumberBuff(initial, buff, defaultOperator) {
    if (initial == undefined) {initial = 0}
    if (buff == Infinity || buff == "Infinity" || buff == "infinity") {
        return Infinity
    }
    let buffValue = buff; let operator = defaultOperator
    if (typeof buff == "object") {
        buffValue = buff[1]; operator = buff[0]
    }
    switch (operator) {
        case "+": return initial+buffValue;
        case "-": return initial-buffValue;
        case "*": return ((initial*1000)*buffValue)/1000;
        case "/": if(buffValue==0){return 0}; return initial/buffValue;
        case "absolute": return buffValue;
        case Infinity: case "Infinity": case "infinity": return Infinity;
    }
}

const properties = [
    {"name": "damage",          "displayName": "Damage",                "type": "number",   "defaultOperator": "+"          },
    {"name": "moabDamage",      "displayName": "MOAB Damage",           "type": "number",   "defaultOperator": "+"          },
    {"name": "fortifiedDamage", "displayName": "Fortified Damage",      "type": "number",   "defaultOperator": "+"          },
    {"name": "forfifiedMoabDamage","displayName": "Fortified MOAB Damage","type": "number", "defaultOperator": "+"          },
    {"name": "ceramicDamage",   "displayName": "Ceramic Damage",        "type": "number",   "defaultOperator": "+"          },
    {"name": "leadDamage",      "displayName": "Lead Damage",           "type": "number",   "defaultOperator": "+"          },
    {"name": "camoDamage",      "displayName": "Camo Damage",           "type": "number",   "defaultOperator": "+"          },
    {"name": "frozenDamage",    "displayName": "Frozen Damage",         "type": "number",   "defaultOperator": "+"          },
    {"name": "stunnedBloonDamage","displayName": "Stunned Bloon Damage","type": "number",   "defaultOperator": "+"          },
    {"name": "projectiles",     "displayName": "Projectiles",           "type": "number",   "defaultOperator": "absolute"   },
    {"name": "spread",          "displayName": "Spread",                "type": "number",   "defaultOperator": "absolute"   },
    {"name": "pierce",          "displayName": "Pierce",                "type": "number",   "defaultOperator": "+"          },
    {"name": "impact",          "displayName": "Impact",                "type": "boolean",  "defaultValue": "false"         },
    {"name": "attackCooldown",  "displayName": "Attack Cooldown",       "type": "number",   "defaultOperator": "*"          },
]

const propertyTypes = {
    "number": function(main, buff, property) {
        main.module[property.name] = simpleNumberBuff(
            main.module[property.name],
            buff[property.name], property.defaultOperator
        )
    //console.log(property.name)
    //console.log(main.module[property.name])
    },
    "boolean": function(main, buff, property) {
        main.module[property.name] = buff[property.name]
    }
}

class Module {
    constructor(module) {
        this.module = module;
    }

    merge(buffModule) {
        let buff = buffModule.module
        switch (buff.moduleType[1]) {
            case "buff":
                for (let propertyNumber in properties) {
                    let property = properties[propertyNumber]
                    if (buff[property.name] != undefined) {
                        propertyTypes[property.type](this, buff, property)
                    }   
                }
                return this;
            case "replace":
                let previousModule = this.module
                this.module = structuredClone(buffModule.module)
                this.module.moduleType[1] = "new"
                delete this.module.replacingName
        }
        return undefined
    }
}

let moduleSetData = [
    {
        "moduleType": ["attack", "new"],
        "name": "dart", "mainAttack": true,
    
        "damage": 1, "projectiles": 2, "spread": 10, "attackCooldown": 0.95, "attackType": "sharp"
    },
    {
        "moduleType": ["attack", "new"],
        "name": "laser",
    
        "damage": 2, "moabDamage": 1, "projectiles": 2, "pierce": 4, "attackCooldown": 3, "attackType": "plasma"
    },
    {
        "moduleType": ["attack", "new"],
        "name": "bullet",
    
        "damage": 2, "pierce": 1, "impact": true, "attackCooldown": 1.5, "attackType": "normal"
    }
]

let buffModuleSetData = [
    {
        "moduleType": ["attack", "buff"],
        "name": "dart",
    
        "pierce": 1, "attackCooldown": 0.9
    },
    {
        "moduleType": ["attack", "replace"],
        "name": "multishot", "replacingName": "bullet",
    
        "damage": 1, "attackCooldown": 0.1, "impact": false
    }
]

let initialModuleSet = new ModuleSet(moduleSetData)
let buffModuleSet = new ModuleSet(buffModuleSetData)
initialModuleSet.mergeSet(buffModuleSet)
console.log(initialModuleSet)

let selectedCategory = "primary"; let selectedTower = "dartMonkey"
