import math
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


class UpgradePath:
    def __init__(self, upgrade_list: list):
        self.upgrade_list = []
        for upgrade_num in upgrade_list:
            try:
                value = int(upgrade_num) if isinstance(upgrade_num, str) else upgrade_num
            except (ValueError, TypeError):
                value = 0

            if isinstance(value, int) and value >= 0:
                self.upgrade_list.append(value)
            else:
                self.upgrade_list.append(0)

    def upgrade_in_path(self, index: int):
        if 0 <= index < len(self.upgrade_list):
            return self.upgrade_list[index]
        else:
            return 0

    def upgrade_included_in_instance(self, path: int, upgrade: int):
        print(self.upgrade_list)
        if 0 <= path < len(self.upgrade_list):
            if upgrade <= self.upgrade_list[path]:
                return True
        return False

# --- Numerical stat modification ---

class StatModifierType(Enum):
    ADDITIVE = "additive"
    PERCENTAGE = "percentage"
    MULTIPLICATIVE = "multiplicative"


def is_valid_modifier_type(modifier_type):
    return modifier_type in StatModifierType._value2member_map_


class NumericalStatModifier:
    def __init__(self, modifier: StatModifierType, modifier_value: float, valid=True):
        """
        Represents a numerical modification done to an existing property,
        such as addition (+3) or multiplication (*0.32).
        """
        self.modifier = None
        self.modifier_value = None
        self.valid = valid

        if is_valid_modifier_type(modifier):
            self.modifier = StatModifierType(modifier)
        else:
            self.valid = False

        if isinstance(modifier_value, (int, float, complex)):
            self.modifier_value = float(modifier_value)
        else:
            self.valid = False


class NumericalStatModificationGroup:
    """Handles the calculation of stat modifiers onto a base numerical property value."""

    def __init__(self):
        self.additions = []
        self.percentages = []
        self.multiplicatives = []

    def add_modification(self, modifier: NumericalStatModifier):
        if modifier.valid:
            if modifier.modifier == StatModifierType.ADDITIVE:
                self.additions.append(modifier.modifier_value)
            elif modifier.modifier == StatModifierType.PERCENTAGE:
                self.percentages.append(modifier.modifier_value)
            elif modifier.modifier == StatModifierType.MULTIPLICATIVE:
                self.multiplicatives.append(modifier.modifier_value)
        else:
            warnings.warn(
                f"NumericalStatModifier ({modifier.modifier}, {modifier.modifier_value}) ignored because it was marked as not valid")

    def calculate_stats_with_base_value(self, base_value: int | float | complex):
        calculated_value = base_value
        if len(self.multiplicatives) > 0:
            calculated_value = calculated_value * math.prod(self.multiplicatives)
        if len(self.percentages) > 0:
            calculated_value = calculated_value * (1 + sum(self.percentages))
        if len(self.additions) > 0:
            calculated_value = calculated_value + sum(self.additions)
        return calculated_value


# --- Parent property class ---

class PropertyType:
    def validate(self, value: Any) -> Any:
        """Overrides in subclasses"""
        return value


# --- Property type subclasses ---

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
    def validate(self, value: Any) -> float | NumericalStatModifier:

        if isinstance(value, list):
            if len(value) == 2:
                return NumericalStatModifier(value[0], value[1])
            else:
                return NumericalStatModifier(StatModifierType.ADDITIVE, 0, valid=False)
        value = float(value)
        if value < 0:
            warnings.warn("Value was negative, setting to float 0")
            value = float(0)
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
    attack_type = PropertyData(LimitedString(
        {"normal", "acid", "sharp", "explosion", "cold", "glacier", "shatter", "energy", "plasma", "fire"}), None)
