import { TowerBlueprint } from "./tower.mjs"

let exampleTower = {
    "base": [
        {
            "name": "dart",
            "type": "attack",
            "action": "new",
            
            "damage": 1,
            "pierce": 2,
            "attackCooldown": 0.95,
            "attackType": "sharp"
        }
    ],
    "upgrades": [
        [
            {
                "name": "dart",
                "type": "attack",
                "action": "buff",
                
                "damage": ["+", 1],
                "attackCooldown": ["*", 0.9]
            }
        ],
        [
            {
                "name": "dart",
                "type": "attack",
                "action": "buff",
                
                "attackCooldown": ["*", 0.5]
            }
        ]
    ]
}

let tower = new TowerBlueprint(exampleTower)
console.log(tower.getTowerStats(1))