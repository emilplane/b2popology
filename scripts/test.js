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
            }
        ],
        "top": [
            [
                {
                    "moduleType": ["attack", "buff"],
                    "name": "dart",
                    
                    "pierce": 1
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

    getUpgradeData(path) {
        let upgradeCounter = 0
        let output = new ModuleSet(this.tower.upgrades.base)
        Array.from({length: getPathSignificances(path).mainPathValue}, () => {
            upgradeCounter++
            let upgradeData = this.tower.upgrades[getPathSignificances(path).mainPathName][upgradeCounter]
            ModuleSet.mergeModules(output, upgradeData)
        });
        return output
    }
}

class ModuleSet {
    constructor(moduleSet) {
        this.moduleSet = moduleSet;
    }

    mergeModules(initialModuleSet, upgradeData) {
        
    }
}

class Module {
    constructor(module) {
        this.module = module;
    }
}

let x = new Tower(dartMonkey)
console.log(x)
console.log(x.getUpgradeData([3, 1, 2]))