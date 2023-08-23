const damageBonuses = [
    {
        "name": "moab",
        "displayName": "MOAB",
        "abbreviation": "md"
    },
    {
        "name": "fortified",
        "displayName": "Fortified",
        "abbreviation": "fd"
    },
    {
        "name": "fortifiedMoab",
        "displayName": "Fortified MOAB",
        "abbreviation": "fmd"
    },
    {
        "name": "ceramic",
        "displayName": "Ceramic",
        "abbreviation": "cd"
    },
    {
        "name": "lead",
        "displayName": "Lead",
        "abbreviation": "ld"
    },
    {
        "name": "camo",
        "displayName": "Camo",
        "abbreviation": "cad"
    },
    {
        "name": "frozen",
        "displayName": "Frozen",
        "abbreviation": "frd"
    },
    {
        "name": "stunned",
        "displayName": "Stunned",
        "abbreviation": "sd"
    }
]

const sniperMonkey = {
    "upgrades": {
        "base": [
            {
                "name": "bullet",
                "type": "attack",
                "properties": {
                    "damage": {
                        "base": 3
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
                    "type": "income",
                    "ability": {
                        "initialCooldown": 20,
                        "cooldown": 40,
                        "duration": 0,
                        "type": "active"
                    },
                    "properties": {
                        "income": 2000
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
                        "buff": {
                            "self": false,
                            "external": {
                                "range": "map",
                                "filter": ["sniperMonkey"]
                            }
                        },
                        "notes": [
                            "Affects all snipers, excluding self",
                            "Enables elite targeting for all snipers",
                            "Prioritizes First if bloons are past 75% of the track, then Ceramics if there are any, otherwise Strong"
                        ]
                    }
                },
                {
                    "name": "elite-supplies",
                    "type": "income",
                    "replacement": "supply-drop",
                    "ability": {
                        "initialCooldown": 20,
                        "cooldown": 40,
                        "duration": 0,
                        "type": "active"
                    },
                    "properties": {
                        "income": 5000
                    }
                }
            ]
        ],
        "bottom": [
            [
                {
                    "name": "bullet",
                    "type": "attackBuff",
                    "properties": {
                        "attackCooldown": {
                            "value": 0.7,
                            "type": "multiplicative"
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
                            "value": 0.7,
                            "type": "multiplicative"
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
                            "value": 0.3333,
                            "type": "multiplicative"
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
                            "moab": {
                                "value": 2,
                                "type": "additive"
                            }
                        },
                        "attackCooldown": {
                            "value": 0.5,
                            "type": "multiplicative"
                        },
                        "attackType": "normal"
                    }
                },
                {
                    "name": "bullet",
                    "type": "attackBuff",
                    "crosspath": [1, 0, 4],
                    "properties": {
                        "damage": {
                            "moab": {
                                "value": 1,
                                "type": "additive"
                            }
                        }
                    }
                },
                {
                    "name": "bullet",
                    "type": "attackBuff",
                    "crosspath": [2, 0, 4],
                    "properties": {
                        "damage": {
                            "moab": {
                                "value": 1,
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
                        "attackCooldown": {
                            "value": 0.5,
                            "type": "multiplicative"
                        },
                        "notes": [
                            "Shoots x% faster, where x% is how far along the track the furthest forward bloon is"
                        ]
                    }
                },
                {
                    "name": "retaliation",
                    "type": "buff",
                    "ability": {
                        "initialCooldown": 0,
                        "cooldown": 10,
                        "duration": 7,
                        "type": "passive",
                        "trigger": "leak"
                    },
                    "properties": {
                        "buff": {
                            "self": false,
                            "external": {
                                "range": "map",
                                "filter": ["sniperMonkey"]
                            }
                        },
                        "attackCooldown": {
                            "value": 0.25,
                            "type": "multiplicative"
                        }
                    }
                }
            ]
        ]
    }
};

function getTowerObject (tower, crosspath) {
    if (crosspath[0] == 0 && crosspath[1] == 0 && crosspath[2] == 0) {
        return tower.upgrades.base
    }

    let output = tower.upgrades.base

    let mainCrosspath;
    let mainCrosspathNumber;
    if (crosspath[0] >= crosspath[1] && crosspath[0] >= crosspath[2]) {
        mainCrosspath = "top";
        mainCrosspathNumber = 0;
    } else if (crosspath[1] >= crosspath[0] && crosspath[1] >= crosspath[2]) {
        mainCrosspath = "middle";
        mainCrosspathNumber = 1;
    } else {
        mainCrosspath = "bottom";
        mainCrosspathNumber = 2;
    }

    const upgradeCounter = crosspath[mainCrosspathNumber];
    for (let i = 0; i < upgradeCounter; i++) {
        console.log(output);
        buffTower(output, tower.upgrades[mainCrosspath][i])
    }

    return output
}

function buffTower (initial, buff) {
    let output = []
    for (initialSectionNumber in initial) {
        let isBuffed = false;
        let result = undefined;
        for (buffSectionNumber in buff) {
            if (initial[initialSectionNumber].name == buff[buffSectionNumber].name) {

                isBuffed = true;
                let initialSection = initial[initialSectionNumber]; let buffSection = buff[buffSectionNumber]

                for (propertyName in buffSection.properties) {
                    let initProp = initialSection.properties[propertyName]; let buffProp = buffSection.properties[propertyName];
                    if (initProp === undefined) {
                        switch (propertyName) {
                            case "range": 
                                initProp = buffProp
                                break;
                        }
                    } else {
                        switch (propertyName) {
                            case "damage":
                                base = initProp.base
                                base = buffStat(base, buffProp.base.value)
                                for (bonusNumber in damageBonuses) {
                                    let bonus = damageBonuses[bonusNumber].name
                                    if (buffProp[bonus] != undefined) {
                                        if (initProp[bonus] != undefined) { 
                                            initProp[bonus] = buffStat(initProp[bonus], buffProp[bonus])
                                        } else {
                                            initProp[bonus] = buffProp[bonus].number
                                        }
                                    }
                                }
                                break;
                            case "pierce": 
                                initProp.value = buffStat(initProp.value, buffProp.value)
                                break;
                            case "attackCooldown":
                                initProp = buffStat(initProp, buffProp)
                                break;
                            case "attackType":
                                initProp = buffProp
                                break;
                        }
                    }
                    initialSection.properties[propertyName] = initProp; buffSection.properties[propertyName] = buffProp
                }
                
                result = initialSection
            }
        }
        if (isBuffed == true) {
            output.push(result)
        } else (
            output.push(initial[initialSectionNumber])
        )
    }
    return output
}

function buffStat (initial, buff) {
    if (initial === undefined) {
        return buff.number
    }
    switch (buff.type) {
        case "additive": 
            return initial + buff.number
        case "multiplicative": 
            return initial * buff.number
        case "absolute": 
            return buff.number
    }
}

console.log(getTowerObject(sniperMonkey, [0, 0, 0]))
console.log(getTowerObject(sniperMonkey, [3, 0, 0]))
console.log(sniperMonkey)