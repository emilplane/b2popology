import json

from pathlib import Path
from api.popology.definitions import Properties
from api.popology.popology import PopologyTower

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
                        "attack_type": "sharp"
                    }
                },
                {
                    "type": "attack",
                    "name": "dart",
                    "properties": {
                        "damage": 3.5,
                    }
                },
                {
                    "type": "attack",
                    "name": "secondary",
                    "properties": {
                        "damage": 4,
                        "pierce": 5,
                        "attack_cooldown": 3.2,
                    }
                },
            ]
        }
    }
}

root_dir = Path(__file__).resolve().parent.parent
json_path = root_dir / "statsData" / "blueprints" / "dart_monkey.json"

with open(json_path, "r", encoding="utf-8") as f:
    data = json.load(f)

tower = PopologyTower(data)
tower_stats = tower.get_tower([2, 1, 0])
print(tower_stats)