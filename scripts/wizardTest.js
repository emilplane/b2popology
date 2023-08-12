let wizardMonkey = {
    "base": [
        {
            "name": "magic-bolt",
            "type": "attack",
            "state": "new",
            "properties": {
                "damage": {
                    "base": 1
                },
                "pierce": {
                    "value": 3
                },
                "range": {
                    "value": 40
                },
                "attackCooldown": {
                    "value": 1.1
                },
                "attackType": "energy"
            }
        },
        {
            "name": "test-attack-1",
            "type": "attack",
            "state": "new",
            "properties": {
                "damage": {
                    "base": 1,
                    "moab": 3,
                    "stunned": 2
                },
                "pierce": {
                    "value": 3
                },
                "range": {
                    "value": 40
                },
                "attackCooldown": {
                    "value": 1.1
                },
                "attackType": "energy"
            }
        },
        {
            "name": "test-attack-2",
            "type": "attack",
            "state": "new",
            "properties": {
                "pierce": {
                    "value": 3,
                    "impact": true
                },
                "range": {
                    "value": 40,
                    "zone": true
                },
                "attackCooldown": {
                    "value": 1.1
                },
                "attackType": "energy"
            }
        }
    ],
    "top": [
        [
            {
                "name": "magic-bolt",
                "type": "attack",
                "state": "buff",
                "properties": {
                    "damage": {
                        "base": {
                            "type": "additive",
                            "value": 1
                        }
                    }
                }
            },
            {
                "name": "test-attack-3",
                "type": "attack",
                "state": "buff",
                "properties": {
                    "damage": {
                        "base": {
                            "type": "additive",
                            "value": 1
                        }
                    }
                }
            }
        ],
        [
            {
                "name": "magic-bolt",
                "type": "attack",
                "state": "buff",
                "properties": {
                    "homing": {
                        "turnRate": 360
                    }
                }
            }
        ],
        [
            {
                "name": "magic-bolt",
                "type": "attack",
                "state": "buff",
                "properties": {
                    "damage": {
                        "base": {
                            "type": "additive",
                            "value": 1
                        }
                    }
                }
            }
        ],
        [
            {
                "name": "magic-bolt",
                "type": "attack",
                "state": "buff",
                "properties": {
                    "damage": {
                        "base": {
                            "type": "additive",
                            "value": 1
                        }
                    },
                    "pierce": {
                        "value": {
                            "type": "additive",
                            "value": 4
                        }
                    },
                    "range": {
                        "value": {
                            "type": "additive",
                            "value": 20
                        }
                    },
                    "attackCooldown": {
                        "value": {
                            "type": "multiplicative",
                            "value": 0.5
                        }
                    },
                    "attackType": "plasma"
                }
            }
        ],
        [
            {
                "name": "magic-bolt",
                "type": "attack",
                "state": "buff",
                "properties": {
                    "damage": {
                        "base": {
                            "type": "additive",
                            "value": 5
                        },
                        "moab": {
                            "type": "additive",
                            "value": 10
                        },
                        "lead": {
                            "type": "additive",
                            "value": 4
                        }
                    },
                    "attackCooldown": {
                        "value": {
                            "type": "multiplicative",
                            "value": 0.5
                        }
                    }
                }
            }
        ],
        [
            {
                "name": "magic-bolt",
                "type": "attack",
                "state": "buff",
                "properties": {
                    "damage": {
                        "base": {
                            "type": "additive",
                            "value": 2
                        },
                        "moab": {
                            "type": "additive",
                            "value": 15
                        },
                        "lead": {
                            "type": "additive",
                            "value": 4
                        }
                    },
                    "pierce": {
                        "value": {
                            "type": "additive",
                            "value": 4
                        }
                    },
                    "attackCooldown": {
                        "value": {
                            "type": "multiplicative",
                            "value": 0.5
                        }
                    }
                }
            },
            {
                "name": "archmage-shimmer",
                "type": "attack",
                "state": "new",
                "properties": {
                    "pierce": {
                        "value": 200
                    },
                    "range": {
                        "value": 40,
                        "zone": true
                    },
                    "attackCooldown": {
                        "value": 1.25
                    },
                    "camo": true,
                    "obstacles": {
                        "seeThrough": true,
                        "passThrough": true
                    },
                    "effects": {
                        "decamo": true
                    }
                }
            },
            {
                "name": "archmage-flame",
                "type": "attack",
                "state": "new",
                "properties": {
                    "damage": {
                        "base": 1,
                        "ceramic": {
                            "type": "additive",
                            "value": 1
                        },
                        "moab": {
                            "type": "additive",
                            "value": 1
                        }
                    },
                    "pierce": {
                        "value": 4
                    },
                    "range": {
                        "value": 70
                    },
                    "attackCooldown": {
                        "value": 0.05
                    },
                    "attackType": "fire",
                    "obstacles": {
                        "seeThrough": true,
                        "passThrough": false
                    },
                    "status": {
                        "name": "archmage-burn"
                    }
                }
            },
            {
                "name": "archmage-burn",
                "type": "status",
                "state": "new",
                "properties": {
                    "damage": {
                        "base": 1
                    },
                    "tick": 1.5,
                    "attackType": "fire",
                    "duration": 3.1
                }
            },
            {
                "name": "fireball",
                "type": "attack",
                "state": "buff",
                "crosspath": [5, 1, 0],
                "properties": {
                    "damage": {
                        "base": {
                            "type": "additive",
                            "value": 6
                        },
                        "moab": {
                            "type": "additive",
                            "value": 9
                        }
                    },
                    "attackCooldown": {
                        "value": {
                            "type": "multiplicative",
                            "value": 0.5
                        }
                    },
                    "attackType": "plasma"
                }
            },
            {
                "name": "wall-of-fire",
                "type": "attack",
                "state": "buff",
                "crosspath": [5, 2, 0],
                "properties": {
                    "damage": {
                        "moab": {
                            "type": "additive",
                            "value": 1
                        }
                    },
                    "attackCooldown": {
                        "value": {
                            "type": "multiplicative",
                            "value": 0.5
                        }
                    }
                }
            }
        ]
    ]
}

let damageBonuses = [
    {
        "name": "moab",
        "abbreviation": "md",
    },
    {
        "name": "fortified",
        "abbreviation": "fd",
    },
    {
        "name": "fortifiedMoab",
        "abbreviation": "fmd",
    },
    {
        "name": "ceramic",
        "abbreviation": "cd",
    },
    {
        "name": "lead",
        "abbreviation": "ld",
    },
    {
        "name": "camo",
        "abbreviation": "cad",
    },
    {
        "name": "frozen",
        "abbreviation": "frd",
    },
    {
        "name": "stunned",
        "abbreviation": "sd",
    },
    
]

let emilplaneTower = [
    {
        "name": "emilmissile",
        "type": "attack",
        "properties": {
            "damage": {
                "base": 1000,
            },
            "pierce": {
                "value": 10
            },
            "range": {
                "value": "infinity",
            },
            "attackCooldown": {
                "value": 2
            },
            "attackType": "explosive"
        }
    },
    {
        "name": "emildart",
        "type": "attack",
        "properties": {
            "damage": {
                "base": 50,
                "moab": 200,
                "lead": 50,
                "stunned": 25
            },
            "pierce": {
                "value": 10
            },
            "attackCooldown": {
                "value": 0.5
            },
            "attackType": "sharp"
        }
    }
]   

let emilplaneUpgrade = [
    {
        "name": "emildart",
        "type": "attackBuff",
        "properties": {
            "damage": {
                "base": {
                    "type": "additive",
                    "value": 20
                },
                "camo": {
                    "type": "additive",
                    "value": 20
                },
                "stunned": {
                    "type": "additive",
                    "value": 20
                },
            },
            "pierce": {
                "value": {
                    "type": "multiplicative",
                    "value": 3
                },
                "impact": true
            },
            "attackCooldown": {
                "value": {
                    "type": "multiplicative",
                    "value": 0.25
                },
            },
            "attackType": "normal"
        }
    }
]

function buffAttack(tower, upgrade) {
    let attack;
    for (attackNumber in tower) {
        if (tower[attackNumber].name == upgrade.name) {
            attack = tower[attackNumber]
        }
    }
    let result = attack;
        for (property in upgrade.properties) {
            buffStat(property, result.properties[property], upgrade.properties[property])
        }
    return result;
}

function buffStat(stat, initial, buff) {
    let result = initial;
    switch (stat) {
        case "damage":
            let statsToChange = [];
            for (x in buff) {
                statsToChange.push(x)
            }
            for (type in statsToChange) {
                if (initial[statsToChange[type]] != undefined) {
                    result[statsToChange[type]] = numberChange(initial[statsToChange[type]], buff[statsToChange[type]])
                } else {
                    result[statsToChange[type]] = numberChange(0, buff[statsToChange[type]])
                }
            }
            return result;
        case "pierce":
            result.value = numberChange(initial.value, buff.value)
            if (buff.impact != undefined) {
                result.impact = buff.impact
            }
            return result;
        case "attackCooldown":
            result.value = numberChange(initial.value, buff.value)
            return result;
        case "attackType":
            result = numberChange(initial, buff)
            return result;
    }
    
}

function numberChange(initial, buff) {
    switch (buff.type) {
        case "additive":
            return initial + buff.value;
        case "multiplicative":
            return initial * buff.value;
    }
}

console.log(buffAttack(emilplaneTower, emilplaneUpgrade[0]));

console.log(buffAttack(wizardMonkey.base, emilplaneUpgrade[0]));
