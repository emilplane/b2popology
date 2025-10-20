from api.popology.definitions import ModuleTypes, UpgradePath
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

    def get_available_paths_info(self):
        stats = self.tower_blueprint["stats"].get("paths")
        if isinstance(stats, list):
            length_list = [len(sublist) for sublist in stats]
            return length_list
        else:
            return []

    def get_upgrade_names(self):
        """
        Build a nested list of upgrade names matching self.get_available_paths_info().
        Uses known names from self.tower_blueprint["upgrade_names"] when available,
        otherwise generates placeholders like "Dart Monkey x-5-x".
        """
        paths_info = self.get_available_paths_info()
        if not paths_info:
            return []

        path_names_data = self.tower_blueprint.get("upgrade_names", []) or []
        base_name = self.tower_blueprint.get("base_name", "Dart Monkey")

        result = []
        num_paths = len(paths_info)

        for path_index, desired_count in enumerate(paths_info):
            known = path_names_data[path_index] if path_index < len(path_names_data) else []
            path_list = []

            for tier in range(1, max(0, desired_count) + 1):
                if tier <= len(known):
                    path_list.append(known[tier - 1])
                else:
                    segments = ['x'] * num_paths
                    segments[path_index] = str(tier)
                    placeholder = f"{base_name} " + "-".join(segments)
                    path_list.append(placeholder)

            result.append(path_list)

        return result

    def get_tower_info(self):
        return {
            "display_name": self.get_display_name(),
            "last_changed_version": self.get_last_changed_version(),
            "category": self.get_category(),
            "available_paths_info": self.get_available_paths_info(),
            "upgrade_names": self.get_upgrade_names()
        }

    def get_tower(self, path: list):
        """
        Retrieve the stats of this tower according to a certain path, such as
        retrieving the stats of a 3-1-0 Monkey Ace.
        :param path:
        :return:
        """
        tower_instance = Tower(self.tower_blueprint["stats"], UpgradePath(path))
        return tower_instance.get_dict()


# PopologyTowers concern a class of monkey, and all the properties it may assume
# Towers concern a particular instance (upgrade path) of a monkey. 
# So think of this as being the difference between a Dart Monkey and a [1,2,0] Dart Monkey
class Tower:
    def __init__(self, stats_blueprint: dict, path: UpgradePath):
        # Raw stats data from the tower blueprint
        self.stats_blueprint = stats_blueprint
        self.path = path

        # Array to contain the data of each tower module that comes from the stats blueprint
        self.tower_module_blueprints = []

        self.tower_stats_module = None
        self.tower_modules = []

        self._add_tower_module_blueprints()
        self._create_tower_modules()

    def __str__(self):
        return f"""Path: {self.path}
Modules: {len(self.tower_modules)}

{"\n\n".join(str(module) for module in self.tower_modules)}"""

    def _add_tower_module_blueprints(self):
        """
        Parses stats_blueprint and adds all module blueprints to the tower_module_blueprints array.
        """
        # Add base modules
        self.tower_module_blueprints.extend(self.stats_blueprint["base"]["modules"])

        # Ranks the indices of the paths for which one to append first
        # For example, for a [2, 4, 0] tower, the middle path's modules should be appended before the top path's modules
        ranked = sorted(
            range(len(self.path.upgrade_list)),
            key=lambda i: (-self.path.upgrade_list[i], i)
        )

        for ranked_path_index in ranked:
            # Check if this path exists
            if ranked_path_index < len(self.stats_blueprint.get("paths", [])):
                # Iterate through each upgrade in the path
                for (upgrade_index, upgrade_data) in enumerate(self.stats_blueprint["paths"][ranked_path_index]):
                    upgrade = upgrade_index + 1
                    # Add this upgrade if it is part of the specified UpgradePath
                    if self.path.upgrade_included_in_instance(ranked_path_index, upgrade):
                        self.tower_module_blueprints.extend(upgrade_data)

    def _create_tower_modules(self):
        """
        Creates instances of TowerModules which contain UpgradeModules, using the data in tower_module_blueprints.
        """

        # Always create a TowerModule for the tower stats not usually associated with another module, such as range
        self.tower_stats_module = TowerModule(ModuleTypes.tower_stats, "tower-stats")

        for module_object in self.tower_module_blueprints:
            # Always create an UpgradeModule for every blueprint.
            upgrade_module = UpgradeModule(module_object)

            # Now, the UpgradeModule must be assigned to a TowerModule.
            if upgrade_module.type == ModuleTypes.tower_stats:
                # This module belongs to the tower_stats module, which is special
                self.tower_stats_module.add_upgrade_module(upgrade_module)
            else:
                # This UpgradeModule belongs to some other TowerModule. Find the TowerModule it belongs to using its
                # name, or create a new TowerModule if this is the first time we are seeing an UpgradeModule with this
                # name.
                selected_tower_module = None
                for tower_module in self.tower_modules:
                    if upgrade_module.replace:
                        if upgrade_module.replace in tower_module.all_names:
                            selected_tower_module = tower_module
                            break
                    else:
                        if upgrade_module.name in tower_module.all_names:
                            selected_tower_module = tower_module
                            break

                # Create module instance if it does not yet exist
                if not selected_tower_module:
                    tower_module = TowerModule(upgrade_module.type, upgrade_module.name)
                    self.tower_modules.append(tower_module)
                    selected_tower_module = tower_module

                selected_tower_module.add_upgrade_module(upgrade_module)

    def get_dict(self):
        output_dict = {
            "tower_stats_module": self.tower_stats_module.get_dict(),
            "tower_modules": [],
            "path": self.path.upgrade_list
        }
        for tower_module in self.tower_modules:
            output_dict["tower_modules"].append(tower_module.get_dict())
        return output_dict
