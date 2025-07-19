import json

from pathlib import Path
from api.popology.definitions import Properties, StatModifierType, is_valid_modifier_type
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
                        "damage": ["additive", 2],
                    }
                },
                {
                    "type": "attack",
                    "name": "dart",
                    "properties": {
                        "damage": 6,
                    }
                },
                {
                    "type": "attack",
                    "name": "dart",
                    "properties": {
                        "damage": ["additive", 26],
                    }
                },
                {
                    "type": "attack",
                    "name": "dart",
                    "properties": {
                        "damage": ["percentage", 0.3],
                    }
                },
                {
                    "type": "attack",
                    "name": "dart",
                    "properties": {
                        "damage": ["multiplicative", 0.5],
                    }
                },
                {
                    "type": "attack",
                    "name": "dart",
                    "properties": {
                        "damage": ["multiplicative", 4],
                    }
                },
                {
                    "type": "attack",
                    "name": "dart",
                    "properties": {
                        "damage": ["invalid", "invalid"],
                    }
                },
                {
                    "type": "attack",
                    "name": "dart",
                    "properties": {
                        "damage": ["additive", 18],
                    }
                },
                {
                    "type": "attack",
                    "name": "dart",
                    "properties": {
                        "damage": ["percentage", 0.15],
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
tower_stats = tower.get_tower([0, 0, 0])
print(tower_stats["tower_modules"][1])