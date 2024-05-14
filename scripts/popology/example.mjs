import { Tower } from "./tower.mjs"

const sampleTower = {
    "name": "sampleTower", "displayName": "Sample Tower",

    "upgrades": {
        "base": [
            {
                "name": "attack1", 
                "type": "attack", 
                "action": "new", 
                "damage": 1, 
                "pierce": 4, 
                "attackCooldown": 0.5
            },
            {"name": "attack2", "type": "attack", "action": "new", "damage": 2, "pierce": 1, "attackCooldown": 0.25},
            {"name": "attack3", "type": "attack", "action": "new", "damage": 4, "pierce": 6, "attackCooldown": 2.3},
        ],
        "paths": [
            [
                [
                    {
                        "name": "attack1", 
                        "type": "attack", 
                        "action": "buff", 
                        "damage": ["+", 2], 
                    },
                ], [
                    {
                        "name": "attack1", 
                        "type": "attack", 
                        "action": "buff", 
                        "damage": ["*", 2], 
                    }
                ], [
                    {
                        "name": "attack1", "replacing": "attack1",
                        "type": "attack", 
                        "action": "replace", 
                        "damage": 1, 
                        "pierce": 1000, 
                        "attackCooldown": 8.2,
                        "rebound": true
                    }
                ], [
                    {
                        "name": "attack1", 
                        "type": "attack", 
                        "action": "buff", 
                        "pierce": ["%", 0.42], 
                    }
                ], [
                    {
                        "name": "attack1", 
                        "type": "attack", 
                        "action": "buff", 
                        "attackCooldown": ["*", 0.8],
                    }
                ]
            ],
            [
                [], [], [], [], []
            ],
            [
                [], [], [], [], []
            ]
        ]
    }
}

const dartMonkey = {
    "name": "dartMonkey", "displayName": "Dart Monkey",

    "upgrades": {
        "base": [
            {
                "name": "dart", "action": "new",

                "damage": 2,
                "attackCooldown": 0.95
            },
        ],
        "paths": [
            [
                [], [], [], [], []
            ],
            [
                [], [], [], [], []
            ],
            [
                [], [], [], [], []
            ]
        ]
    }
}

let tower1 = new Tower(sampleTower)

// console.log(tower1.getTowerUpgrade(true))
// console.log(tower1.getTowerUpgrade(false, 0, 0))
console.log(tower1.getName())
// console.log(tower1.getTowerUpgrade(false, 0, 1))
// console.log(tower1.getUpgradeText(false, 0, 3))
console.log(tower1.getConstructedTower([3, 0, 0]))