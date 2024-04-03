import { Tower } from "./tower.mjs"

const sampleTower = {
    "name": "sampleTower", "displayName": "Sample Tower",

    "upgrades": {
        "base": [
            {"name": "dart", "action": "new", "damage": 2, "attackCooldown": 0.95},
            {"name": "bullet", "action": "new", "damage": 3, "attackCooldown": 2}
        ],
        "paths": [
            [
                [
                    {"name": "dart", "action": "buff", "damage": ["+", 1]}
                ],[
                    {"name": "dart", "action": "buff", "damage": ["+", 1]}
                ],
                [],[],[]
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
console.log(tower1.getConstructedTower([1, 0, 0]))