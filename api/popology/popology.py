from dataclasses import dataclass
from enum import Enum, StrEnum, auto
from typing import cast


class TowerDataFormats(str, Enum):
    AS_UPGRADES = "upgrades"
    AS_TOWER = "tower"


class ModuleTypes(Enum):
    tower_stats = auto()
    attack = auto()


class Properties(Enum):
    range = auto()
    size = auto()
    damage = auto()
    pierce = auto()
    attack_cooldown = auto()

class UpgradePath:
    def __init__(self, path1, path2, path3):
        self.path1 = path1
        self.path2 = path2
        self.path3 = path3


class PopologyTower:
    def __init__(self, tower_json):
        self.tower_json = tower_json

    def get_display_name(self):
        return self.tower_json.get("display_name", None) or None

    def get_last_changed_version(self):
        return self.tower_json.get("last_changed_version", None) or None

    def get_category(self):
        return self.tower_json.get("category", None) or None

    def get_tower_info(self):
        return {
            "display_name": self.get_display_name(),
            "last_changed_version": self.get_last_changed_version(),
            "category": self.get_category()
        }

    def get_tower(self, path: list):
        tower_instance = Tower(self.tower_json["stats"], path)
        return tower_instance


class Tower:
    def __init__(self, stats_object: dict, path: list):
        self.stats_object = stats_object
        self.path = path

        self.tower_module_objects = []

        self.tower_stats_module = None
        self.tower_modules = []

        self._add_tower_module_objects()
        self._create_tower_modules()

        # print(self.tower_module_objects)

    def _add_tower_module_objects(self):
        self.tower_module_objects.extend(self.stats_object["base"]["modules"])

    def _create_tower_modules(self):
        self.tower_stats_module = TowerModule(ModuleTypes.tower_stats, "tower-stats")
        for module_object in self.tower_module_objects:
            upgrade_module = UpgradeModule(module_object)
            if upgrade_module.type == ModuleTypes.tower_stats:
                self.tower_stats_module.add_upgrade_module(upgrade_module)
            else:
                selected_tower_module = None

                for tower_module in self.tower_modules:
                    if tower_module.name == upgrade_module.name:
                        selected_tower_module = tower_module
                        break

                if not selected_tower_module:
                    tower_module = TowerModule(upgrade_module.type, upgrade_module.name)
                    self.tower_modules.append(tower_module)
                    selected_tower_module = tower_module

                selected_tower_module.add_upgrade_module(upgrade_module)


class UpgradeModule:
    def __init__(self, module_data):
        self.module_data = module_data
        self.type = None

        if module_data["type"] in ModuleTypes.__members__:
            member = cast(ModuleTypes, ModuleTypes[module_data["type"]])
            self.type = member

        self.name = module_data["name"]
        self.properties = []

        for property_name in module_data["properties"]:
            if property_name in Properties.__members__:
                member = cast(Properties, Properties[property_name])
                val    = module_data["properties"][property_name]
                prop   = UpgradeModuleProperty(member, val)

                self.properties.append(prop)

        return


class UpgradeModuleProperty:
    def __init__(self, property_name: Properties, value):
        self.property_name = property_name
        self.value = value


class TowerModule:
    def __init__(self, module_type: ModuleTypes, name: str):
        self.module_type = module_type
        self.name = name
        self.upgrade_modules = []

    def add_upgrade_module(self, upgrade_module: UpgradeModule):
        self.upgrade_modules.append(upgrade_module)