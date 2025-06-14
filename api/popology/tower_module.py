import warnings

from api.popology.definitions import ModuleTypes, Properties, NonNegativeNumber, LimitedString, NumericalStatModifier, \
    NumericalStatModificationGroup
from api.popology.upgrade_module import UpgradeModule, UpgradeModuleProperty


class TowerModuleProperty:
    def __init__(self, property_name: Properties):
        self.property_name = property_name
        self.upgrade_module_properties = []

    def __repr__(self):
        return f"TP {self.property_name}: {self.get_stat()}"

    def get_dict(self):
        output_dict = {
            "property_name": self.property_name.name,
            "value": self.get_stat(),
        }
        return output_dict

    def add_upgrade_module_property(self, upgrade_module_property: UpgradeModuleProperty):
        if type(upgrade_module_property) is not UpgradeModuleProperty:
            raise TypeError("upgrade_module_property is not an instance of UpgradeModuleProperty!")
        self.upgrade_module_properties.append(upgrade_module_property)

    def get_stat(self):
        stat = None
        if type(self.property_name.value.type) == NonNegativeNumber:
            current_value = None
            numerical_stat_modification_group = NumericalStatModificationGroup()
            for upgrade_module_property in self.upgrade_module_properties:
                if isinstance(upgrade_module_property.value, float):
                    current_value = upgrade_module_property.value
                    numerical_stat_modification_group = NumericalStatModificationGroup()
                elif isinstance(upgrade_module_property.value, NumericalStatModifier):
                    numerical_stat_modification_group.add_modification(upgrade_module_property.value)
                else:
                    warnings.warn("Not implemented")
            if current_value == None:
                return current_value
            stat = numerical_stat_modification_group.calculate_stats_with_base_value(current_value)
        elif type(self.property_name.value.type) == LimitedString:
            for upgrade_module_property in self.upgrade_module_properties:
                stat = upgrade_module_property.value
        return stat


class TowerModule:
    def __init__(self, module_type: ModuleTypes, name: str):
        self.module_type = module_type
        self.name = name
        self.upgrade_modules = []

    def __repr__(self):
        tower_module_stats = self.get_stats()
        properties_str = "\n".join(repr(tower_module_stats.get(prop)) for prop in tower_module_stats)
        return f"{self.name}: {self.module_type}\n{properties_str}"

    def get_dict(self):
        output_dict = {
            "name": self.name,
            "module_type": self.module_type.value,
            "stats": []
        }
        stats = self.get_stats()
        for tower_prop in stats:
            output_dict["stats"].append(stats[tower_prop].get_dict())
        return output_dict

    def add_upgrade_module(self, upgrade_module: UpgradeModule):
        self.upgrade_modules.append(upgrade_module)

    def get_stats(self):
        tower_module_properties = {}
        for upgrade_module in self.upgrade_modules:
            for prop_instance in upgrade_module.properties:
                # Create property in tower_module_properties if it does not exist yet
                if not tower_module_properties.get(prop_instance.property_name):
                    prop = TowerModuleProperty(prop_instance.property_name)
                    tower_module_properties[prop_instance.property_name] = prop

                current_tower_property = tower_module_properties.get(prop_instance.property_name)
                current_tower_property.add_upgrade_module_property(prop_instance)

        return tower_module_properties
