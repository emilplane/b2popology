import warnings
from dataclasses import dataclass
from enum import Enum
from typing import Any


class TowerDataFormats(str, Enum):
    AS_UPGRADES = "upgrades"
    AS_TOWER = "tower"


class ModuleTypes(Enum):
    tower_stats = "tower_stats"
    attack = "attack"


class PropertyType:
    def validate(self, value: Any) -> Any:
        """Overrides in subclasses"""
        return value

# Property types
class AnyNumber(PropertyType):
    def validate(self, value: Any) -> float:
        return float(value)

class PositiveNumber(PropertyType):
    def validate(self, value: Any) -> float:
        value = float(value)
        if value <= 0:
            warnings.warn("Value was not positive, setting to float 1")
            value = 1
        return value

class NonNegativeNumber(PropertyType):
    def validate(self, value: Any) -> float:
        value = float(value)
        if value < 0:
            warnings.warn("Value was negative, setting to float 0")
            value = 0
        return value

class LimitedString(PropertyType):
    def __init__(self, allowed: set[str]):
        self.allowed = allowed

    def validate(self, value: Any) -> str:
        value = str(value)
        if value not in self.allowed:
            warnings.warn("Value is not available in this property")
            value = None
        return value

class AnyString(PropertyType):
    def validate(self, value: Any) -> str:
        return str(value)

class Boolean(PropertyType):
    def validate(self, value: Any) -> bool:
        if isinstance(value, bool):
            return value
        if isinstance(value, str):
            if value.lower() in ("true", "1"):
                return True
            elif value.lower() in ("false", "0"):
                return False
        warnings.warn("Value was not boolean, setting to False")
        return False


# --- PropertyData dataclass ---

@dataclass(frozen=True)
class PropertyData:
    type: PropertyType
    default: Any
    # description: Optional[str] = None

    def validate(self, value: Any) -> Any:
        return self.type.validate(value)

# --- Properties enum ---

class Properties(Enum):
    range = PropertyData(NonNegativeNumber(), None)
    size = PropertyData(NonNegativeNumber(), None)
    damage = PropertyData(NonNegativeNumber(), None)
    pierce = PropertyData(NonNegativeNumber(), None)
    attack_cooldown = PropertyData(NonNegativeNumber(), None)
    attack_type = PropertyData(LimitedString({"normal", "acid", "sharp", "explosion", "cold", "glacier", "shatter", "energy", "plasma", "fire"}), None)


class UpgradePath:
    def __init__(self, path1, path2, path3):
        self.path1 = path1
        self.path2 = path2
        self.path3 = path3