const sniperMonkey = {
    "upgrades": {
        "base": [
            {
                "name": "bullet",
                "type": "attack",
                "properties": {
                    "damage": {
                        "base": 2
                    },
                    "pierce": {
                        "value": 1,
                        "impact": true
                    },
                    "range": {
                        "value": "infinity"
                    },
                    "attackCooldown": 1.59,
                    "attackType": "sharp"
                }
            }
        ],
        "top": [
            [
                {
                    "name": "bullet",
                    "type": "attackBuff",
                    "properties": {
                        "damage": {
                            "base": {
                                "value": 2,
                                "type": "additive"
                            }
                        },
                        "attackType": "normal"
                    }
                },
                {
                    "name": "test",
                    "type": "status",
                    "properties": {

                    }
                }
            ],
            [
                {
                    "name": "bullet",
                    "type": "attackBuff",
                    "properties": {
                        "damage": {
                            "base": {
                                "value": 3,
                                "type": "additive"
                            }
                        }
                    }
                }
            ],
            [
                {
                    "name": "bullet",
                    "type": "attackBuff",
                    "properties": {
                        "damage": {
                            "base": {
                                "value": 13,
                                "type": "additive"
                            },
                            "ceramic": {
                                "value": 15,
                                "type": "additive"
                            }
                        }
                    }
                }
            ],
            [
                {
                    "name": "bullet",
                    "type": "attackBuff",
                    "properties": {
                        "damage": {
                            "base": {
                                "value": 10,
                                "type": "additive"
                            }
                        },
                        "effects": [
                            {
                                "name": "stun",
                                "condition": "contact"
                            }
                        ]
                    }
                },
                {
                    "name": "stun",
                    "type": "status",
                    "properties": {
                        "statusType": "stun",
                        "duration": {
                            "type": "perBloon",
                            "perBloon": [
                                {
                                    "moab": 2
                                },
                                {
                                    "bfb": 1
                                },
                                {
                                    "zomg": 0.3
                                },
                                {
                                    "ddt": 0.5
                                }
                            ]
                        }
                    }
                }
            ],
            [
                {
                    "name": "bullet",
                    "type": "attackBuff",
                    "properties": {
                        "damage": {
                            "base": {
                                "value": 250,
                                "type": "additive"
                            }
                        }
                    }
                },
                {
                    "name": "stun",
                    "type": "statusBuff",
                    "properties": {
                        "duration": {
                            "type": "perBloon",
                            "perBloon": [
                                {
                                    "moab": 7
                                },
                                {
                                    "bfb": 6
                                },
                                {
                                    "zomg": 3
                                },
                                {
                                    "ddt": 4
                                }
                            ]
                        },
                        "effects": [
                            {
                                "name": "crippled",
                                "condition": "contact"
                            }
                        ]
                    }
                },
                {
                    "name": "crippled",
                    "type": "status",
                    "properties": {
                        "statusType": "debuff",
                        "debuff": 5,
                        "duration": {
                            "type": "perBloon",
                            "perBloon": [
                                {
                                    "moab": 7
                                },
                                {
                                    "bfb": 6
                                },
                                {
                                    "zomg": 3
                                },
                                {
                                    "ddt": 4
                                },
                                {
                                    "bad": 0.5
                                }
                            ]
                        },
                        "notes": [
                            "Applied before the target takes damage"
                        ]
                    }
                }
            ]
        ],
        "middle": [
            [
                {
                    "type": "camoDetection",
                    "value": "true"
                },
                {
                    "name": "bullet",
                    "type": "attackBuff",
                    "properties": {
                        "damage": {
                            "camo": {
                                "value": 2,
                                "type": "additive"
                            }
                        }
                    }
                }
            ],
            [
                {
                    "name": "bullet",
                    "type": "attackBuff",
                    "properties": {
                        "effects": [
                            {
                                "name": "shrapnel",
                                "condition": "damage"
                            }
                        ]
                    }
                },
                {
                    "name": "shrapnel",
                    "type": "attack",
                    "properties": {
                        "damage": {
                            "base": 1
                        },
                        "projectiles": {
                            "value": 5,
                            "spread": 45
                        },
                        "pierce": {
                            "value": 2
                        },
                        "attackType": "sharp",
                        "notes": [
                            "Spread centered around direction fired"
                        ]
                    }
                }
            ],
            [
                {
                    "name": "bullet",
                    "type": "attackBuff",
                    "properties": {
                        "pierce": {
                            "value": {
                                "value": 4,
                                "type": "absolute"
                            }
                        },
                        "notes": [
                            "Jumps to targets within 50 units"
                        ]
                    }
                }
            ],
            [
                {
                    "name": "bullet",
                    "type": "attackBuff",
                    "properties": {
                        "attackType": "normal"
                    }
                },
                {
                    "name": "supply-drop",
                    "type": "ability",
                    "properties": {
                        "crate": {
                            "income": 2000
                        }
                    }
                },
                {
                    "name": "shrapnel",
                    "type": "attackBuff",
                    "properties": {
                        "pierce": {
                            "value": 1,
                            "type": "additive"
                        }
                    }
                }

            ],
            [
                {
                    "name": "bullet",
                    "type": "attackBuff",
                    "properties": {
                        "attackCooldown": {
                            "value": 0.4,
                            "type": "multiplicative"
                        }
                    }
                },
                {
                    "name": "elite",
                    "type": "buff",
                    "properties": {
                        "notes": [
                            "Affects all snipers, excluding self",
                            "Enables elite targeting for all snipers",
                            "Prioritizes First if bloons are past 75% of the track, then Ceramics if there are any, otherwise Strong"
                        ]
                    }
                }
            ]
        ],
        "bottom": [
            [

            ],
            [

            ],
            [

            ],
            [

            ],
            [

            ]
        ]
    }
};

function getTowerObject (tower, path) {
    if (path[0] == 0 && path[1] == 0 && path[2] == 0) {
        return tower.upgrades.base
    }

    let mainUpgradePath;
    let mainUpgradePathNumber;
    if (path[0] > path[1] && path[0] > path[2]) {
        mainUpgradePath = "top"
        mainUpgradePathNumber = 0
    } else if (path[1] > path[2]) {
        mainUpgradePath = "middle"
        mainUpgradePathNumber = 1
    } else {
        mainUpgradePath = "bottom"
        mainUpgradePathNumber = 2
    }

    let upgradeCounter = 0;
    for (upgrade in tower.upgrades[mainUpgradePath]) {
        upgradeCounter = upgradeCounter + 1
        if (upgradeCounter <= path[mainUpgradePathNumber]) {
            result = buffTower(tower.upgrades.base, tower.upgrades[mainUpgradePath][upgrade])
        }
    }
    return result
}

function buffTower (tower, buff) {
    let result = tower;
    for (x in buff) {
        let attack = buff[x]
        
        switch (attack.type) {
            case "attackBuff":
            case "statusBuff":

                for (nameOfProperty in attack.properties) {
                    let property = attack.properties[nameOfProperty]
                    switch (nameOfProperty) {
                        case "damage":
                            
                            for (damageBonus in property) {
                                if (result[x].properties[nameOfProperty][damageBonus] == undefined) {
                                    result[x].properties[nameOfProperty][damageBonus] = property[damageBonus].value
                                } else {
                                    result[x].properties[nameOfProperty][damageBonus] = buffStat(result[x].properties[nameOfProperty][damageBonus], property[damageBonus].value, property[damageBonus].type)
                                }
                            }
                            break;
                        
                        case "effects":
                            
                            if (result[x].properties.effects == undefined) {
                                result[x].properties.effects = property
                            }
                            break;
                        
                        case "perBloon": 
                            
                            result[x].properties.perBloon = property

                        break;
                    
                    }
                }
                break;

            case "attack":
            case "status":
                
                for (attackNumber in result) {
                    console.log(attackNumber)
                    if (result[attackNumber]) {

                    }
                }
                result.push(attack)
                break;
        }
    }
    return result
}

function buffStat (initial, buff, type) {
    switch (type) {
        case "additive": 
            return initial + buff
    }
}

const y = {
    "upgrades": {
        "base": [
            {
                "name": "bullet",
                "type": "attack",
                "properties": {
                    "damage": {
                        "base": 2
                    },
                    "pierce": {
                        "value": 1,
                        "impact": true
                    },
                    "range": {
                        "value": "infinity"
                    },
                    "attackCooldown": 1.59,
                    "attackType": "sharp"
                }
            }
        ],
        "top": [
            [
                {
                    "name": "bullet",
                    "type": "attackBuff",
                    "properties": {
                        "damage": {
                            "base": {
                                "value": 2,
                                "type": "additive"
                            }
                        },
                        "attackType": "normal"
                    }
                },
                {
                    "name": "test",
                    "type": "status",
                    "properties": {

                    }
                }
            ],
            [
                {
                    "name": "bullet",
                    "type": "attackBuff",
                    "properties": {
                        "damage": {
                            "base": {
                                "value": 3,
                                "type": "additive"
                            }
                        }
                    }
                }
            ],
            [
                {
                    "name": "bullet",
                    "type": "attackBuff",
                    "properties": {
                        "damage": {
                            "base": {
                                "value": 13,
                                "type": "additive"
                            },
                            "ceramic": {
                                "value": 15,
                                "type": "additive"
                            }
                        }
                    }
                }
            ],
            [
                {
                    "name": "bullet",
                    "type": "attackBuff",
                    "properties": {
                        "damage": {
                            "base": {
                                "value": 10,
                                "type": "additive"
                            }
                        },
                        "effects": [
                            {
                                "name": "stun",
                                "condition": "contact"
                            }
                        ]
                    }
                },
                {
                    "name": "stun",
                    "type": "status",
                    "properties": {
                        "statusType": "stun",
                        "duration": {
                            "type": "perBloon",
                            "perBloon": [
                                {
                                    "moab": 2
                                },
                                {
                                    "bfb": 1
                                },
                                {
                                    "zomg": 0.3
                                },
                                {
                                    "ddt": 0.5
                                }
                            ]
                        }
                    }
                }
            ],
            [
                {
                    "name": "bullet",
                    "type": "attackBuff",
                    "properties": {
                        "damage": {
                            "base": {
                                "value": 250,
                                "type": "additive"
                            }
                        }
                    }
                },
                {
                    "name": "stun",
                    "type": "statusBuff",
                    "properties": {
                        "duration": {
                            "type": "perBloon",
                            "perBloon": [
                                {
                                    "moab": 7
                                },
                                {
                                    "bfb": 6
                                },
                                {
                                    "zomg": 3
                                },
                                {
                                    "ddt": 4
                                }
                            ]
                        },
                        "effects": [
                            {
                                "name": "crippled",
                                "condition": "contact"
                            }
                        ]
                    }
                },
                {
                    "name": "crippled",
                    "type": "status",
                    "properties": {
                        "statusType": "debuff",
                        "debuff": 5,
                        "duration": {
                            "type": "perBloon",
                            "perBloon": [
                                {
                                    "moab": 7
                                },
                                {
                                    "bfb": 6
                                },
                                {
                                    "zomg": 3
                                },
                                {
                                    "ddt": 4
                                },
                                {
                                    "bad": 0.5
                                }
                            ]
                        },
                        "notes": [
                            "Applied before the target takes damage"
                        ]
                    }
                }
            ]
        ],
        "middle": [
            [
                {
                    "type": "camoDetection",
                    "value": "true"
                },
                {
                    "name": "bullet",
                    "type": "attackBuff",
                    "properties": {
                        "damage": {
                            "camo": {
                                "value": 2,
                                "type": "additive"
                            }
                        }
                    }
                }
            ],
            [
                {
                    "name": "bullet",
                    "type": "attackBuff",
                    "properties": {
                        "effects": [
                            {
                                "name": "shrapnel",
                                "condition": "damage"
                            }
                        ]
                    }
                },
                {
                    "name": "shrapnel",
                    "type": "attack",
                    "properties": {
                        "damage": {
                            "base": 1
                        },
                        "projectiles": {
                            "value": 5,
                            "spread": 45
                        },
                        "pierce": {
                            "value": 2
                        },
                        "attackType": "sharp",
                        "notes": [
                            "Spread centered around direction fired"
                        ]
                    }
                }
            ],
            [
                {
                    "name": "bullet",
                    "type": "attackBuff",
                    "properties": {
                        "pierce": {
                            "value": {
                                "value": 4,
                                "type": "absolute"
                            }
                        },
                        "notes": [
                            "Jumps to targets within 50 units"
                        ]
                    }
                }
            ],
            [
                {
                    "name": "bullet",
                    "type": "attackBuff",
                    "properties": {
                        "attackType": "normal"
                    }
                },
                {
                    "name": "supply-drop",
                    "type": "ability",
                    "properties": {
                        "crate": {
                            "income": 2000
                        }
                    }
                },
                {
                    "name": "shrapnel",
                    "type": "attackBuff",
                    "properties": {
                        "pierce": {
                            "value": 1,
                            "type": "additive"
                        }
                    }
                }

            ],
            [
                {
                    "name": "bullet",
                    "type": "attackBuff",
                    "properties": {
                        "attackCooldown": {
                            "value": 0.4,
                            "type": "multiplicative"
                        }
                    }
                },
                {
                    "name": "elite",
                    "type": "buff",
                    "properties": {
                        "notes": [
                            "Affects all snipers, excluding self",
                            "Enables elite targeting for all snipers",
                            "Prioritizes First if bloons are past 75% of the track, then Ceramics if there are any, otherwise Strong"
                        ]
                    }
                }
            ]
        ],
        "bottom": [
            [

            ],
            [

            ],
            [

            ],
            [

            ],
            [

            ]
        ]
    }
}


console.log(getTowerObject(sniperMonkey, [5, 0, 0]))
console.log(getTowerObject(sniperMonkey, [5, 0, 0]))
console.log(getTowerObject(sniperMonkey, [5, 0, 0]))
console.log(getTowerObject(sniperMonkey, [5, 0, 0]))

console.log(getTowerObject(y, [5, 0, 0]))
console.log(getTowerObject(y, [5, 0, 0]))