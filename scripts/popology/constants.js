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
        "type": "number"
    },
    "pierce": {
        "type": "number"
    },
    "attackCooldown": {
        "type": "number"
    },
    "attackType": {
        "type": "string"
    },
}

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