export const SETTINGS = {
    "STOP_IF_INVALID_TOWER_JSON": true
}

export const TEST_CASES = {
    TEST_CASE_1: {
        "name": "customDartMonkey", "displayName": "Custom Dart Monkey",

        "upgrades": {
            "base": [
                {
                    "name": "dart",
                    "action": "new", "type": "attack",

                    "properties": {
                        "damage": 1,
                        "pierce": 2,
                        "attackCooldown": 0.95,
                        "attackType": "sharp"
                    }
                }
            ],
            "paths": [
                [
                    [
                        {
                            "name": "missile",
                            "action": "new", "type": "attack",

                            "properties": {
                                "damage": 3,
                                "pierce": 1,
                                "attackCooldown": 2,
                                "attackType": "explosion"
                            }
                        },
                        {
                            "name": "dart",
                            "action": "buff", "type": "attack",

                            "properties": {
                                "pierce": ["+", 2],
                                "attackCooldown": ["*", 0.5],
                                "attackType": "normal"
                            }
                        }
                    ],
                    [
                        {
                            "name": "dart",
                            "action": "buff", "type": "attack",

                            "properties": {
                                "pierce": ["set", 100], "impact": true,
                                "attackCooldown": ["*", 0.25],
                            }
                        },
                        {
                            "name": "burn",
                            "action": "new", "type": "status",

                            "properties": {
                                // "damage": 3,
                                // "pierce": 1,
                                // "attackCooldown": 2,
                                // "attackType": "explosion"
                            }
                        },
                        {
                            "name": "crate",
                            "action": "new", "type": "income",

                            "properties": {
                                // "damage": 3,
                                // "pierce": 1,
                                // "attackCooldown": 2,
                                // "attackType": "explosion"
                            }
                        },
                    ],
                    [
                        {
                            "name": "dart",
                            "action": "buff", "type": "attack",

                            "properties": {
                                "pierce": ["+", 6],
                                "attackCooldown": ["*", 0.1],
                            }
                        }
                    ],
                    [
                        {
                            "name": "dart",
                            "action": "buff", "type": "attack",

                            "properties": {
                                "pierce": ["set", 1000],
                            }
                        }
                    ],
                    [
                        {
                            "name": "dart",
                            "action": "buff", "type": "attack",

                            "properties": {
                                "pierce": ["%", 0.8],
                            }
                        }
                    ]
                ],
                [
                    [],
                    [],
                    [],
                    [],
                    []                    
                ],
                [
                    [],
                    [],
                    [],
                    [],
                    []                    
                ]
            ]
        }
    },
    WIZARD_MONKEY: {
        "name": "wizardMonkey", "displayName": "Wizard Monkey",

        "aliases": ["lizard", "lizardmonkey", "wiz", "apprentice"],

        "upgradeNames": [
            [
                {
                    "name": "guidedMagic", "displayName": "Guided Magic",
                    "aliases": ["gmagic", "guided"]
                },
                {
                    "name": "arcaneBlast", "displayName": "Arcane Blast",
                    "aliases": ["ablast"]
                },
                {
                    "name": "arcaneMastery", "displayName": "Arcane Mastery",
                    "aliases": ["amastery", "mastery"]
                },
                {
                    "name": "arcaneSpike", "displayName": "Arcane Spike",
                    "aliases": ["aspike"]
                },
                {
                    "name": "archmage", "displayName": "Archmage",
                    "aliases": ["arch"]
                }
            ],
            [
                {
                    "name": "fireball", "displayName": "Fireball",
                    "aliases": []
                },
                {
                    "name": "wallOfFire", "displayName": "Wall Of Fire",
                    "aliases": ["wof"]
                },
                {
                    "name": "dragonsBreath", "displayName": "Dragon's Breath",
                    "aliases": ["dbreath", "dragon", "breath"]
                },
                {
                    "name": "summonPhoenix", "displayName": "Summon Phoenix",
                    "aliases": ["phoenix", "summon"]
                },
                {
                    "name": "wizardLordPhoenix",
                    "displayName": "Wizard Lord Phoenix",
                    "aliases": ["wlp"]
                }
            ],
            [
                {
                    "name": "intenseMagic", "displayName": "Intense Magic",
                    "aliases": ["intense", "imagic"]
                },
                {
                    "name": "monkeySense", "displayName": "Monkey Sense",
                    "aliases": ["msense"]
                },
                {
                    "name": "shimmer", "displayName": "Shimmer",
                    "aliases": []
                },
                {
                    "name": "necromancerUnpoppedArmy",
                    "displayName": "Necromancer: Unpopped Army",
                    "aliases": ["necro"]
                },
                {
                    "name": "princeOfDarkness",
                    "displayName": "Prince Of Darkness",
                    "aliases": ["pod"]
                }
            ]
        ],

        "properties": {
            "range": 40
        },

        "upgrades": {
            "base": [
                {
                    "name": "magic-bolt",
                    "action": "new", "type": "attack",

                    "properties": {
                        "damage": 1,
                        "pierce": 3,
                        "attackCooldown": 1.1,
                        "attackType": "energy",
                        // "impact": true
                    }
                }
            ],
            "paths": [
                [
                    [
                        {
                            "name": "magic-bolt",
                            "action": "buff", "type": "attack",
                            
                            "properties": {
                                "canSeePastObstacles": true,
                                "homingTurnRate": ["set", 720],
                            }
                        }
                    ],
                    [
                        {
                            "name": "magic-bolt",
                            "action": "buff", "type": "attack",

                            "properties": {
                                "damage": ["+", 1],
                            }
                        }
                    ],
                    [
                        {
                            "name": "magic-bolt",
                            "action": "buff", "type": "attack",

                            "properties": {
                                "damage": ["+", 1],
                                "pierce": ["+", 4],
                                "attackCooldown": ["*", 0.5],
                                "attackType": "plasma"
                            }
                        }
                    ],
                    [
                        {
                            "name": "magic-bolt",
                            "action": "buff", "type": "attack",

                            "properties": {
                                "damage": ["+", 5],
                                "moabDamageBonus": ["+", 10],
                                "leadDamageBonus": ["+", 4],
                                "attackCooldown": ["*", 0.5]
                            }
                        }
                    ],
                    [
                        {
                            "name": "magic-bolt",
                            "action": "buff", "type": "attack",

                            "properties": {
                                "damage": ["+", 2],
                                "moabDamageBonus": ["+", 15],
                                "leadDamageBonus": ["+", 4],
                                "pierce": ["+", 6],
                                "attackCooldown": ["*", 0.5]
                            }
                        },
                        {
                            "name": "flame",
                            "action": "new", "type": "attack",
        
                            "properties": {
                                "damage": 1,
                                "ceramicDamageBonus": 1,
                                "moabDamageBonus": 1,
                                "pierce": 4,
                                "attackCooldown": 0.05,
                                "attackType": "fire",
                                "canSeePastObstacles": true,
                                "collidesWithObstacles": true
                            }
                        },
                        {
                            "name": "burn",
                            "action": "new", "type": "status",
        
                            "properties": {
                                "damage": 1,
                                "tick": 1.5,
                                "duration": 3.1,
                            }
                        }
                    ]
                ],
                [
                    [
                        {
                            "name": "fireball",
                            "action": "new", "type": "attack",
        
                            "properties": {
                                "attackCooldown": 2.6,
                            }
                        },
                        {
                            "name": "explosion",
                            "action": "new", "type": "subattack",
        
                            "properties": {
                                "damage": 2,
                                "pierce": 15,
                                "attackType": "explosion",
                            }
                        }
                    ],
                    [
                        {
                            "name": "place-fire",
                            "action": "new", "type": "attack",
        
                            "properties": {
                                "attackCooldown": 5.5,
                            }
                        },
                        {
                            "name": "wall-of-fire",
                            "action": "new", "type": "trackItem",
        
                            "properties": {
                                "damage": 1,
                                "pierce": 15,
                                "duration": 5.5,
                            }
                        }   
                    ],
                    [],
                    [],
                    []                    
                ],
                [
                    [],
                    [],
                    [],
                    [],
                    []                    
                ]
            ]
        }
    }
}

export const MODULE_PROPERTIES = {
    "damage": {
        "type": "number",
        "displayName": "Damage",
        "subproperties": {
            "moabDamageBonus": {
                "type": "number",
                "displayName": "MOAB Damage"
            }
        }
    },
    "moabDamageBonus": {
        "type": "number",
        "bonusValueTo": "damage",
        "displayName": "MOAB Damage",
        "parent": "damage"
    },
    "ceramicDamageBonus": {
        "type": "number",
        "bonusValueTo": "damage",
        "displayName": "Ceramic Damage"
    },
    "fortifiedDamageBonus": {
        "type": "number",
        "bonusValueTo": "damage",
        "displayName": "Fortified Damage"
    },
    "leadDamageBonus": {
        "type": "number",
        "bonusValueTo": "damage",
        "displayName": "Lead Damage"
    },  
    "pierce": {
        "type": "number",
        "displayName": "Pierce",
        "subproperties": {
            "impact": {
                "type": "boolean",
                "displayName": "Impact"
            }
        }
    },
    // "impact": {
    //     "type": "boolean",
    //     "parent": "pierce",
    //     "displayName": "Impact"
    // },
    "attackCooldown": {
        "type": "number",
        "unit": "s",
        "displayName": "Attack Cooldown"
    },
    "tick": {
        "type": "number",
        "unit": "s",
        "displayName": "Tick"
    },
    "duration": {
        "type": "number",
        "unit": "s",
        "displayName": "Duration"
    },
    "attackType": {
        "type": "string",
        "displayName": "Attack Type"
    },
    "canSeePastObstacles": {
        "type": "boolean",
        "displayName": "Can See Past Obstacles"
    },
    "collidesWithObstacles": {
        "type": "boolean",
        "displayName": "Collides With Obstacles"
    },
    "homingTurnRate": {
        "type": "number",
        "displayName": "Turn Rate"
    },
}

/**
 * This JSON schema is for an entire tower blueprint, and checks down to the 
 * property level. It does not check to make sure that every property is valid.
 */
export const TOWER_JSON_SCHEMA = {
    "title": "Popology Tower",
    "description": "A Battles 2 tower",
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "description": "The internal name of the Battles 2 tower"
        },
        "displayName": {
            "type": "string",
            "description": 
                "The name of the Battles 2 tower that is displayed to the user"
        },
        "upgrades": {
            "type": "object",
            "properties": {
                "base": {
                    "type": "array",    
                    "items": {
                        "$ref": "#/$defs/module"
                    }
                },
                "paths": {
                    "type": "array",
                    "items": {
                        "type": "array",
                        "items": {
                            "type": "array",
                            "items": {
                                "$ref": "#/$defs/module"
                            },
                        },
                    },
                },
            },
            "required": ["base"]
        }
    },
    "required": ["name", "upgrades"],
    "$defs": {
        "module": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string"
                },
                "action": {
                    "type": "string"
                },
                "type": {
                    "type": "string"
                },
                "properties": {
                    "type": "object"
                }
            }
        }
    }
}

export const ERRORS = {
    "NOT_NEW_MODULE": "This upgrade module does not create a new module!",
    "INVALID_NAME": "This upgrade module's name is invalid for this module!",

    "NAME_NOT_MATCHING": "The property name does not match this property!",
    
    "DEFAULTS_NOT_IMPLEMENTED": "Default operators for numeric properties are not implemented yet!",
    "CANT_CONVERT": "This PropertyBuff can't be converted to a Property!",

    "TYPE_NOT_SUPPORTED": "The type of this property is not accounted for!",
    "VALUE_NOT_SUPPORTED": "The value of this property is not accounted for!",
    "OPERATOR_NOT_SUPPORTED": "This operator is not accounted for!",
}

export const UI_CONSTANTS = {
    "CONFIG_PANEL": {
        "ELEMENT": document.getElementById("configPanel"),
        "SHOW": false
    },
    "BANNER": {
        "ELEMENT": document.getElementById("towerBanner"),
        "TITLE_TEXT_SIZE": "h2",
        "CROSSPATH_TEXT_SIZE": "h4",
        "CROSSPATH_PREFIX": "+ "
    }
}