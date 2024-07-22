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
                        }
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
    }
}

export const MODULE_PROPERTIES = {
    "damage": {
        "type": "number",
    },
    "moabDamageBonus": {
        "type": "number",
        "bonusValueTo": "damage"
    },
    "ceramicDamageBonus": {
        "type": "number",
        "bonusValueTo": "damage"
    },
    "fortifiedDamageBonus": {
        "type": "number",
        "bonusValueTo": "damage"
    },
    "pierce": {
        "type": "number"
    },
    "impact": {
        "type": "boolean",
        "requires": ["pierce"]
    },
    "attackCooldown": {
        "type": "number"
    },
    "attackType": {
        "type": "string"
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
    "CANT_CONVERT": "This BuffProperty can't be converted to a Property!",

    "TYPE_NOT_SUPPORTED": "The type of this property is not accounted for!",
    "VALUE_NOT_SUPPORTED": "The value of this property is not accounted for!",
    "OPERATOR_NOT_SUPPORTED": "This operator is not accounted for!",
}