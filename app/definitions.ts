import {createContext} from 'react';
import {ClientTowerData, ClientTowerInfo} from "@/types/popology";

export type Category = "other" | "primary" | "military" | "magic" | "support" | "hero";

export const CategoryContext = createContext<Category>("other");

export const SetPathContext = createContext<(index: number, value: number) => void>(() => {
});

export const TowerInfoContext = createContext<ClientTowerInfo>({
    available_paths_info: [],
    category: 'other',
    display_name: '',
    last_changed_version: '',
    upgrade_names: []
});

export const TowerDataContext = createContext<ClientTowerData>({
    path: [],
    tower_modules: [],
    tower_stats_module: {
        name: 'tower-stats',
        module_type: 'tower_stats',
        stats: []
    }
});