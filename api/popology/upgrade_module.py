from typing import cast
from api.popology.definitions import ModuleTypes, Properties


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
                val = module_data["properties"][property_name]
                prop = UpgradeModuleProperty(member, val)

                self.properties.append(prop)

    def __repr__(self):
        return f"[{len(self.properties)} props total | {" | ".join(map(str, self.properties))}]"


class UpgradeModuleProperty:
    def __init__(self, property_name: Properties, value):
        self.property_name = property_name
        self.value = self.property_name.value.validate(value)

    def __repr__(self):
        return f"{self.property_name}: {self.value}"