from api.popology.definitions import ModuleTypes
from api.popology.tower_module import TowerModule
from api.popology.upgrade_module import UpgradeModule

class PopologyTower:
    def __init__(self, tower_blueprint):
        """
        Contains all of the data and functionality for one tower in Battles 2.
        Create an instance using the data found in a tower's JSON file, which is
        called a tower blueprint. The instance contains various methods to retrieve
        data related to the tower.
        :param tower_blueprint:
        """
        self.tower_blueprint = tower_blueprint

    def get_display_name(self):
        return self.tower_blueprint.get("display_name", None) or None

    def get_last_changed_version(self):
        return self.tower_blueprint.get("last_changed_version", None) or None

    def get_category(self):
        return self.tower_blueprint.get("category", None) or None

    def get_tower_info(self):
        return {
            "display_name": self.get_display_name(),
            "last_changed_version": self.get_last_changed_version(),
            "category": self.get_category()
        }

    def get_tower(self, path: list):
        """
        Retrieve the stats of this tower according to a certain path, such as
        retrieving the stats of a 3-1-0 Monkey Ace.
        :param path:
        :return:
        """
        tower_instance = Tower(self.tower_blueprint["stats"], path)
        return tower_instance.get_dict()

# PopologyTowers concern a class of monkey, and all the properties it may assume
# Towers concern a particular instance (upgrade path) of a monkey. 
# So think of this as being the difference between a Dart Monkey and a [1,2,0] Dart Monkey
class Tower:
    def __init__(self, stats_object: dict, path: list):
        self.stats_object = stats_object
        self.path = path

        self.tower_module_objects = []

        self.tower_stats_module = None
        self.tower_modules = []

        # Towers have something called tower module objects and tower modules, but...
        # what do these do in the context of the Tower class?
        self._add_tower_module_objects()
        self._create_tower_modules()

    def __str__(self):
        return f"""Path: {self.path}
Modules: {len(self.tower_modules)}

{"\n\n".join(str(module) for module in self.tower_modules)}"""

    def get_dict(self):
        output_dict = {
            "tower_stats_module": self.tower_stats_module.get_dict(),
            "tower_modules": []
        }
        for tower_module in self.tower_modules:
            output_dict["tower_modules"].append(tower_module.get_dict())
        return output_dict

    def _add_tower_module_objects(self):
        self.tower_module_objects.extend(self.stats_object["base"]["modules"])

    def _create_tower_modules(self):
        self.tower_stats_module = TowerModule(ModuleTypes.tower_stats, "tower-stats")
        for module_object in self.tower_module_objects:
            upgrade_module = UpgradeModule(module_object)
            if upgrade_module.type == ModuleTypes.tower_stats:
                self.tower_stats_module.add_upgrade_module(upgrade_module)
            else:
                # Find the module instance for this UpgradeModule if it has been created already
                selected_tower_module = None
                for tower_module in self.tower_modules:
                    if tower_module.name == upgrade_module.name:
                        selected_tower_module = tower_module
                        break

                # Create module instance if it does not yet exist
                if not selected_tower_module:
                    tower_module = TowerModule(upgrade_module.type, upgrade_module.name)
                    self.tower_modules.append(tower_module)
                    selected_tower_module = tower_module

                selected_tower_module.add_upgrade_module(upgrade_module)