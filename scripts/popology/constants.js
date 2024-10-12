import { BackgroundGradient, HSL } from "./utilities.js"

export const SETTINGS = {
    "STOP_IF_INVALID_TOWER_JSON": true,
    "SHOW_DEBUG_STYLES": true
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

        "colors": {
            "base": {
                "backgroundGradient": {
                    "start": new HSL(0, 0, 0),
                    "end": new HSL(0, 0, 0)
                }
            },
            "upgrades": [
                [
                    {
                        // "backgroundGradient": new BackgroundGradient(
                        //     new HSL(18, 90, 38), new HSL(73, 100, 30), 90)
                    }
                ],
            ],
        },

        // An attempt to identify which properties are shown as a summary on the upgrade selection
        // screen.
        // "summaryProperties": {
        //     "base": [
        //         []
        //     ],
        //     "paths": [
        //         [
        //             [], [["magic-bolt", "damage"]], [], [], [],
        //         ],
        //         [
        //             [], [], [], [], [],
        //         ],
        //         [
        //             [], [], [], [], [],
        //         ]
        //     ]
        // },

        "towerProperties": {
            "range": 40,
            "towerCamo": true
        },
        
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
                                "collidesWithObstacles": true,
                                "onContact": ["burn"],
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
                                "onContact": ["explosion"]
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
                                "places": ["wall-of-fire"],
                            }
                        },
                        {
                            "name": "wall-of-fire",
                            "action": "new", "type": "trackItem",
        
                            "properties": {
                                "damage": 1,
                                "pierce": 15,
                                "attackCooldown": 0.15,
                                "attackType": "fire",
                                "duration": 5.5,
                                "onContact": ["vuldora"],
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

export const MODULE_TYPES = {
    "attack": {
        "displayName": "attack",
    },
    "subattack": {
        "displayName": "subattack",
    },
    "trackItem": {
        "displayName": "track item",
    },
    "status": {
        "displayName": "status",
    },
    "income": {
        "displayName": "income",
    }
}

export const MODULE_PROPERTIES = {
    "damage": {
        "type": "number",
        "displayName": "Damage",
        "category": "damage",
        "includeInSummary": true,
        "unit": "d",
        "icon": true
    },
    "moabDamageBonus": {
        "type": "number",
        "displayName": "MOAB Damage",
        "category": "damage",
        "includeInSummary": true,
        "icon": true
    },
    "ceramicDamageBonus": {
        "type": "number",
        "displayName": "Ceramic Damage",
        "category": "damage",
        "includeInSummary": true,
    },
    "fortifiedDamageBonus": {
        "type": "number",
        "displayName": "Fortified Damage",
        "category": "damage",
        "includeInSummary": true,
    },
    "leadDamageBonus": {
        "type": "number",
        "displayName": "Lead Damage",
        "category": "damage",
        "includeInSummary": true,
        "icon": true
    },  
    "pierce": {
        "type": "number",
        "displayName": "Pierce",
        "category": "basic",
        "unit": "p",
        "includeInSummary": true,
        "icon": true
    },
    "impact": {
        "type": "boolean",
        "parent": "pierce",
        "displayName": "Impact"
    },
    "range": {
        "type": "number",
        "unit": "r",
        "showUnitByDefault": true,
        "displayName": "Range",
        "category": "basic",
        "isTowerProperty": true
    },
    "attackCooldown": {
        "type": "number",
        "unit": "s",
        "showUnitByDefault": true,
        "displayName": "Attack Cooldown",
        "category": "basic",
        "icon": true
    },
    "tick": {
        "type": "number",
        "unit": "s",
        "displayName": "Tick"
    },
    "duration": {
        "type": "number",
        "unit": "s",
        "showUnitByDefault": true,
        "displayName": "Duration",
        "category": "basic",
        "icon": true
    },
    "attackType": {
        "type": "string",
        "displayName": "Attack Type",
        "category": "basic",
        "stringValueWhitelist": [
            ["normal", "Normal"], ["explosion", "Explosion"], ["fire", "Fire"],
            ["plasma", "Plasma"], ["sharp", "Sharp"], ["shatter", "Shatter"]
        ]
    },
    "canSeePastObstacles": {
        "type": "boolean",
        "displayName": "Can See Past Obstacles",
        "category": "boolean"
    },
    "collidesWithObstacles": {
        "type": "boolean",
        "displayName": "Collides With Obstacles",
        "category": "boolean"
    },
    "homingTurnRate": {
        "type": "number",
        "displayName": "Homing Turn Rate",
        "category": "basic",
        "unit": "°",
        "showUnitByDefault": true
    },
    "onContact": {
        "type": "modules",
        "displayName": "on contact",
        "colon": true,
        "category": "submodules"
    },
    "places": {
        "type": "modules",
        "displayName": "places",
        "colon": false,
        "category": "submodules"
    },
    "towerCamo": {
        "type": "boolean",
        "displayName": "Tower has camo",
        "category": "basic"
    }
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

    "PROPERTY_NOT_CONFIGURED": "This property is not configured!",
    "REFERS_TO_OWN_MODULE": "This property is attempting to embed its own module!",
    "CIRCULAR_DEPENDENCY": "you bozo you can't do that (This property refers to its own module creating a circular dependency)",
}

export const WARNS = {
    "NO_TOWER_PROPERTIES_MODULE": "There is no tower properties module for this tower!",
    
    "NOT_IMPLEMENTED": "This feature is not implemented yet!",
}

export const UI_CONSTANTS = {
    "PATH_JOIN_CHARACTER": "",
    "MODULE_NESTING_MODE": "none",

    "POPOLOGY_UI_CONTAINER": document.getElementById("uiContent"),

    "CONFIG_PANEL": {
        "ELEMENT": document.getElementById("configPanel"),
        "SHOW": false   
    },
    "BANNER": {
        "ELEMENT": document.getElementById("towerBanner"),
        "TITLE_TEXT_SIZE": "h2",
        "CROSSPATH_TEXT_SIZE": "h5",
        "CROSSPATH_PREFIX": "+ ",
    },
    "MODULES": {
        "COMTAINER_ELEMENT": document.getElementById("moduleContainer"),
    }
}