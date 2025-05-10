from api.popology.popology import PopologyTower, TowerDataFormats

test_object = {
    "display_name": "Dart Monkey",
    "category": "Primary",
    "last_changed_version": "4.6.1.[OTA 1]",

    "stats": {
        "base": {
            "modules": [
                {
                    "type": "tower_stats",
                    "name": "tower-stats",
                    "properties": {
                        "range": 32,
                        "size": 6
                    }
                },
                {
                    "type": "attack",
                    "name": "dart",
                    "properties": {
                        "damage": 1,
                        "pierce": 2,
                        "attack_cooldown": 0.95,
                    }
                },
                {
                    "type": "attack",
                    "name": "dart",
                    "properties": {
                        "damage": 3,
                    }
                },
                {
                    "type": "attack",
                    "name": "secondary",
                    "properties": {
                        "damage": 3,
                        "pierce": 5,
                        "attack_cooldown": 3.2,
                    }
                },
            ]
        }
    }
}

tower = PopologyTower(test_object)
tower_stats = tower.get_tower([2, 1, 0])
# print(tower_stats)