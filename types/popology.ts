export type Category = "other" | "primary" | "military" | "magic" | "support" | "hero";

export interface ClientTowerInfo {
    available_paths_info: number[];
    category: Category;
    display_name: string;
    last_changed_version: string;
    upgrade_names: string[][];
}

export interface ClientTowerData {
    path: number[];
    tower_modules: Module[];
    tower_stats_module: Module;
}

export interface Module {
    name: string;
    module_type: string;
    stats: Property[]
}

export interface Property {
    property_name: string;
    value: any;
}

export interface NestedProperty extends Property {
    nested: Property[];
}

export interface PropertyComponentData {
    data: Property
    displayName: string
    key: string
}
