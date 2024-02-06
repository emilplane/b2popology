import Tower from "./tower.mjs"

let exampleTower = {
    "tower": {
        "range": 40
    },
    "upgrades": {
        "base": [
            {
                "name": "dart", "type": "attack",
                "action": "new", "mainAttack": true,

                "damage": 1, "pierce": 2, "attackCooldown": 0.5
            },
            {
                "name": "bullet", "type": "attack",
                "action": "new",

                "damage": 2, "pierce": 1, "attackCooldown": 1.7
            }
        ],
        "paths": [
            [
                [
                    {
                        "name": "dart", "type": "attack",
                        "action": "buff",
        
                        "damage": ["+", 1]
                    }
                ],
                [
                    {
                        "name": "dart", "type": "attack",
                        "action": "buff",
        
                        "damage": ["*", 2]
                    },
                    {
                        "name": "bullet", "type": "attack",
                        "action": "buff",
        
                        "damage": ["*", 1]
                    }
                ],
                [
                    {
                        "name": "dart", "type": "attack",
                        "action": "buff",
        
                        "damage": ["+", 1]
                    }
                ],
                [
                    {
                        "name": "dart", "type": "attack",
                        "action": "buff",
        
                        "damage": ["+", 1]
                    }
                ],
                [
                    {
                        "name": "dart", "type": "attack",
                        "action": "buff",
        
                        "damage": ["+", 1]
                    }
                ]
            ],
            [
                [
                    {
                        "name": "dart", "type": "attack",
                        "action": "buff",
        
                        "damage": ["+", 1]
                    }
                ],
                [
                    {
                        "name": "dart", "type": "attack",
                        "action": "buff",
        
                        "damage": ["*", 2]
                    },
                    {
                        "name": "bullet", "type": "attack",
                        "action": "buff",
        
                        "damage": ["*", 1]
                    }
                ],
                [
                    {
                        "name": "dart", "type": "attack",
                        "action": "buff",
        
                        "damage": ["+", 1]
                    }
                ],
                [
                    {
                        "name": "dart", "type": "attack",
                        "action": "buff",
        
                        "damage": ["+", 1]
                    }
                ],
                [
                    {
                        "name": "dart", "type": "attack",
                        "action": "buff",
        
                        "damage": ["+", 1]
                    }
                ]
            ],
            [
                [
                    {
                        "name": "dart", "type": "attack",
                        "action": "buff",
        
                        "damage": ["+", 1]
                    }
                ],
                [
                    {
                        "name": "dart", "type": "attack",
                        "action": "buff",
        
                        "damage": ["*", 2]
                    },
                    {
                        "name": "bullet", "type": "attack",
                        "action": "buff",
        
                        "damage": ["*", 1]
                    }
                ],
                [
                    {
                        "name": "dart", "type": "attack",
                        "action": "buff",
        
                        "damage": ["+", 1]
                    }
                ],
                [
                    {
                        "name": "dart", "type": "attack",
                        "action": "buff",
        
                        "damage": ["+", 1]
                    }
                ],
                [
                    {
                        "name": "dart", "type": "attack",
                        "action": "buff",
        
                        "damage": ["+", 1]
                    }
                ]
            ]
        ]
    }
}

let example = new Tower(exampleTower)

console.log(example)
console.log(example.getTowerData([1, 0, 0]))