import { isBasePath } from "../utilities.js";
import { TowerModule, TowerPropertiesModule, UpgradeModule } from "./moduleLevel.js";

/**
 * A collection of modules that make up a tower's upgrade.
 */
export class Upgrade {
    /**
     * @param {Array} upgradeBlueprint
     * An array of modules that makes up the upgrade
     */
    constructor(upgradeBlueprint) {
        this.modules = [];

        upgradeBlueprint.forEach(module => {
            this.modules.push(new UpgradeModule(module))
        });
    }
}

/**
 * A collection of upgrades that are constructed together into a tower.
 */
export class Tower {
    constructor(towerBlueprint, path) {
        this.towerBlueprint = towerBlueprint;
        this.path = path;
        this.upgrades = [];
        this.modules = [];
        this.towerName = "unknown";

        this.initTower();
    }

    initTower() {
        this.upgrades = [];
        this.addUpgrade(this.towerBlueprint.upgrades.base);
    
        const paths = this.path.map((level, index) => ({
            level,
            pathNumber: index,
            upgrades: this.towerBlueprint.upgrades.paths[index]
        }));
    
        paths.sort((a, b) => b.level - a.level);
    
        paths.forEach((path, index) => {
            for (let i = 0; i < path.level; i++) {
                this.addUpgrade(path.upgrades[i]);
            }

            const upgradeData = this.towerBlueprint
                .upgradeNames[path.pathNumber][path.level - 1];
            let upgradeName = upgradeData ? upgradeData.displayName : undefined;
            
            switch (index) {
                case 0:
                    this.towerName = 
                        (upgradeData === undefined) ? "unknown" : upgradeName;
                    break;
                case 1:
                    this.towerCrosspathName = upgradeName;
                    break;
                case 2:
                    if (path.level > 0) {
                        this.towerCrosspathName =
                            `${this.towerCrosspathName} + ${upgradeName}`
                    }
                    break;
            }
        });

        const baseTowerName = this.towerBlueprint.displayName
        if (isBasePath(this.path) && baseTowerName !== undefined) {
            this.towerName = baseTowerName
        }
    
        this.constructTower();
    }

    /**
     * After adding upgrades, construct the resulting modules onto the instance
     * of this tower.
     */
    constructTower() {
        this.modules = []

        this.modules.push(new TowerPropertiesModule(this.towerBlueprint.towerProperties))
        
        this.upgrades.forEach(upgrade => {
            upgrade.modules.forEach(module => {
                if (module.action === "new") {
                    this.modules.push(new TowerModule(module))
                } else {
                    this.modules.forEach(towerModule => {
                        if (towerModule.allValidNames.includes(module.name)) {
                            towerModule.upgradeModule(new UpgradeModule(module))
                        }
                    });
                }
            })
        });
    }

    /**
     * Adds an upgrade to this tower.
     * @param {Array} upgrade - An array of modules that makes up the upgrade
     */
    addUpgrade(upgrade) {
        this.upgrades.push(new Upgrade(upgrade))
    }
}