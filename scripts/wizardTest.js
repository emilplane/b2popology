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

function getStats(tower, top, middle, bottom, type, action, location) {
    function standardStats(attack) {
        let string;
        function insertComma() {
            if (string != undefined) {
                string = `${string}, `
            } else {
                string = ``
            }
        }

        if (attack.properties.damage != undefined) {
            insertComma();
            if (attack.properties.damage.base != undefined) {
                string = `${string}${attack.properties.damage.base}d`
            }
            for (type in damageBonuses) {
                let bonusName = damageBonuses[type].name
                let bonusAbbreviation = damageBonuses[type].abbreviation
                
                if (attack.properties.damage[bonusName] != undefined) {
                    insertComma();
                    string = `${string}+${attack.properties.damage[bonusName]}${bonusAbbreviation} (${attack.properties.damage.base+attack.properties.damage[bonusName]}${bonusAbbreviation})`
                }
            }
        };

        if (attack.properties.pierce != undefined) {
            insertComma();
            let pierceAbbreviation = "p";
            if (attack.properties.pierce.impact == true) {
                pierceAbbreviation = "i"
            }
            string = `${string}${attack.properties.pierce.value}${pierceAbbreviation}`
        }

        if (attack.properties.range != undefined) {
            insertComma();
            let zone = "";
            if (attack.properties.range.zone == true) {
                zone = " zone"
            }
            string = `${string}${attack.properties.range.value}r${zone}`
        }

        if (attack.properties.attackCooldown != undefined) {
            insertComma();
            string = `${string}${attack.properties.attackCooldown.value}s`
        }

        if (attack.properties.attackType != undefined) {
            insertComma();
            string = `${string}${attack.properties.attackType} type`
        }

        if (string == undefined) {
            string = ``;
        } else {
            string = `<li>${string}</li>`;
        }
        return string
    }

    if (top == 0 && middle == 0 && bottom == 0) {
        for (position in tower.base) {
            let standardStatsString = standardStats(tower.base[position])
            document.getElementById(location).insertAdjacentHTML("beforeend", `
                <h4 id="attackName">${tower.base[position].name}</h4>
                <div class="horizontalLine"></div>
                <ul>
                    ${standardStatsString}
                </ul>
            `)
        }
    } else if (type == "upgrade") {
        let mainPath;
        let upgradeCounter;
        if(top >= middle && top >= bottom) {
            mainPath = "top";
            upgradeCounter = top
        }
        else if (middle >= top && middle >= bottom) {
            mainPath = "middle";
            upgradeCounter = middle
        }
        else {
            mainPath = "bottom";
            upgradeCounter = bottom
        }

        let towerString = tower.base;

        console.log(towerString)

        console.log(towerString)
    }
}

getStats(wizardMonkey, 0, 0, 0, "upgrade", "insert", "wizardMonkeyStats1")
getStats(wizardMonkey, 0, 0, 0, "upgrade", "insert", "wizardMonkeyStats2")

let emilplaneTower = [
    {
        "name": "emildart",
        "type": "attack",
        "state": "new",
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
            "range": {
                "value": 80,
                "zone": true
            },
            "attackCooldown": {
                "value": 0.5
            },
            "attackType": "explosive"
        }
    },
]

let emilplaneUpgrade = [
    {
        "name": "emildart",
        "type": "attack",
        "state": "buff",
        "properties": {
            "damage": {
                "base": {
                    "type": "addative",
                    "value": 2
                },
                "camo": {
                    "type": "additive",
                    "value": 2
                },
                "stunned": {
                    "type": "additive",
                    "value": 2
                },
            },
            "pierce": {
                "value": {
                    "type": "additive",
                    "value": 100
                },
            },
            "attackCooldown": {
                "value": {
                    "type": "multiplicative",
                    "value": 2
                },
            },
            "attackType": "normal"
        }
    },
]

let result = emilplaneTower

console.log(result)