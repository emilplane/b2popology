import { TowerModule, UpgradeModule } from "./moduleLevel.js";

/**
 * A collection of modules that make up a tower's upgrade.
 */
export class Upgrade {
    /**
     * @param {Array} upgradeBlueprint
     * An array of modules that makes up the upgrade
     */
    constructor(upgradeBlueprint) {
        this.modules = []

        upgradeBlueprint.forEach(module => {
            this.modules.push(new UpgradeModule(module))
        });
    }
}

/**
 * A collection of upgrades that are constructed together into a tower.
 */
export class Tower {
    constructor() {
        this.upgrades = []
        this.modules = []
    }

    /**
     * After adding upgrades, construct the resulting modules onto the instance
     * of this tower.
     */
    constructTower() {
        this.modules = []

        this.upgrades.forEach(upgrade => {
            upgrade.modules.forEach(module => {
                if (module.action == "new") {
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


