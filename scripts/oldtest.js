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
                                "number": 2,
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
                                "number": 3,
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
                                "number": 13,
                                "type": "additive"
                            },
                            "ceramic": {
                                "number": 15,
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
                                "number": 10,
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
                                "number": 250,
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
                                "number": 2,
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
                            "number": {
                                "number": 4,
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
                            "number": 1,
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
                            "number": 0.4,
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
                            "number": 0.7,
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
                            "number": 0.7,
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
                            "number": 0.3333,
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
                                "number": 2,
                                "type": "additive"
                            }
                        },
                        "attackCooldown": {
                            "number": 0.5,
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
                                "number": 1,
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
                                "number": 1,
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
                            "number": 0.5,
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
                            "number": 0.25,
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

    let mainPath; let mainPathNumber;
    if (crosspath[0] >= crosspath[1] && crosspath[0] >= crosspath[2]) {
        mainPath = "top";
        mainPathNumber = 0;
    } else if (crosspath[1] >= crosspath[0] && crosspath[1] >= crosspath[2]) {
        mainPath = "middle";
        mainPathNumber = 1;
    } else {
        mainPath = "bottom";
        mainPathNumber = 2;
    }
    
    let crosspathName; let crosspathNumber;
    if (crosspath[0] >= crosspath[1] && crosspath[0] >= crosspath[2]) {
        if (crosspath[1] >= crosspath[2]) {
            crosspathName = "middle";
            crosspathNumber = 1;
        } else {
            crosspathName = "bottom";
            crosspathNumber = 2;
        }
    } else if (crosspath[1] >= crosspath[0] && crosspath[1] >= crosspath[2]) {
        if (crosspath[0] >= crosspath[2]) {
            crosspathName = "top";
            crosspathNumber = 0;
        } else {
            crosspathName = "bottom";
            crosspathNumber = 2;
        }
    } else {
        if (crosspath[1] >= crosspath[2]) {
            crosspathName = "middle";
            crosspathNumber = 1;
        } else {
            crosspathName = "bottom";
            crosspathNumber = 2;
        }
    }
    
    const upgradeCounter = crosspath[mainPathNumber];
    for (let i = 0; i < upgradeCounter; i++) {
        output = buffTower(output, tower.upgrades[mainPath][i])
    }

    if (crosspath[crosspathNumber] != 0) {
        const upgradeCounter = crosspath[crosspathNumber];
        for (let i = 0; i < upgradeCounter; i++) {
            output = buffTower(output, tower.upgrades[crosspathName][i])
        }
    }

    return output
}

function buffTower (initial, buff) {
    let output = structuredClone(initial)
    for (buffNumber in buff) {
        switch (buff[buffNumber].type) {
            case "attackBuff":
                for (attackNumber in output) {
                    if (output[attackNumber].name == buff[buffNumber].name) {
                        output[attackNumber] = buffAttack(output[attackNumber], buff[buffNumber])
                    }
                }
                break;
            case "attack":
            case "status":
                output.push(buff[buffNumber])
                break;
        }
    }
    return output;
}

function buffAttack (initial, buff) {
    let output = structuredClone(initial)
    for (property in buff.properties) {
        switch (property) {
            case "damage":
                if (output.properties.damage == undefined) {output.properties.damage = {}}
                if (buff.properties.damage.base != undefined) {
                    output.properties.damage.base = buffStat(output.properties.damage.base, buff.properties.damage.base)
                }
                for (bonus in damageBonuses) {
                    if (buff.properties.damage[damageBonuses[bonus].name] != undefined) {
                        output.properties.damage[damageBonuses[bonus].name] = buffStat(output.properties.damage[damageBonuses[bonus].name], buff.properties.damage[damageBonuses[bonus].name])
                    }
                }
            case "attackType":
                if (buff.properties.attackType != undefined) {
                    output.properties.attackType = buff.properties.attackType
                }
            case "effects":
                if (buff.properties.effects != undefined) {
                    output.properties.effects = buff.properties.effects
                }
            case "attackCooldown":
                if (output.properties.attackCooldown == undefined) {output.properties.attackCooldown = {}}
                if (buff.properties.attackCooldown != undefined) {
                    output.properties.attackCooldown = buffStat(output.properties.attackCooldown, buff.properties.attackCooldown)
                }
        }
    }
    return output;
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

console.log(getTowerObject(sniperMonkey, [5, 0, 2]))