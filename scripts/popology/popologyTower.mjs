import PopologyText from "./display/popologyText.mjs";
import Tower from "./tower.mjs";
import Upgrade from "./upgrade.mjs";
import propertyList from "./data/propertyList.mjs";

export default class PopologyTower {
    constructor(towerData) {
        this.towerData = towerData
    }

    /**
     * Get the internal name of this tower. 
     * If you want the name that should be displayed to the user, use getDisplayName().
     * @returns the internal name of the tower.
     */
    getName() {
        return this.towerData.name
    }

    /**
     * Get the display name of the tower - the name that is displayed to the user. 
     * @returns the display name.
     */
    getDisplayName() {
        return this.towerData.displayName
    }

    getUpgradeText(isBaseUpgrade, path, upgrade) {
        return new PopologyText(
            "upgrade", this.getTowerUpgrade(isBaseUpgrade, path, upgrade), propertyList
        ).getUpgradeText().plainText()
    }

    getConstructedTowerText() {
        return ""
    }

    /**
     * Returns the stats of a specific tower upgrade, including the base tower 
     * "upgrade".
     * @param {boolean} isBaseUpgrade
     * True to return the base tower upgrade, otherwise false. 
     * @param {number} path
     * The path of the desired upgrade, 0-indexed (0 for top path, 1 for middle 
     * path, 2 for bottom path). Optional if the base upgrade is being requested
     * instead.
     * @param {number} upgrade 
     * The upgrade tier, 0-indexed (0 for tier 1, 1 for tier 2, etc.). Optional 
     * if the base upgrade is being requested instead.
     * @returns 
     */
    getTowerUpgrade(isBaseUpgrade, path, upgrade) {
        if (isBaseUpgrade) {
            return this.towerData.upgrades.base
        }
        return this.towerData.upgrades.paths[path][upgrade]
    }

    /**
     * Returns a tower with upgrades applied to it.
     * @param {array} fullPath 
     * The upgrades of the tower, formatted as: [2, 3, 0]
     * @returns 
     */
    getConstructedTower(fullPath) {
        let currentConstructedTower = new Tower(this.towerData.upgrades)
        currentConstructedTower.addUpgrade(
            this.getTowerUpgrade(true)
        )
        this.addFullPathUpgradesInOrder(fullPath, (path, upgrade) => {
            currentConstructedTower.addUpgrade(
                this.getTowerUpgrade(false, path, upgrade)
            )
        })
        return currentConstructedTower
    }

    addFullPathUpgradesInOrder(fullPath, callback) {
        if (!Array.isArray(fullPath)) {return false}
        if (fullPath[0] > fullPath[1] || fullPath[0] > fullPath[2]) {
            for (let i = 0; i < fullPath[0]; i++) {
                callback(0, i)
            }
        } else if (fullPath[1] > fullPath[2]) {
            for (let i = 0; i < fullPath[1]; i++) {
                callback(1, i)
            }
        } else {
            for (let i = 0; i < fullPath[2]; i++) {
                callback(2, i)
            }
        }
    }
}