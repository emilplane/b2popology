import {Tower, Upgrade} from "./modulesHiearchy/towerLevel.js";

export class PopologyContext {
    /**
     * Holds the current tower blueprint and instance of the selected tower or upgrade.
     * @param {Function} directoryFn
     */
    constructor(directoryFn) {
        this.directory = directoryFn();
        this.towerBlueprint = undefined;
        this.currentEntity = undefined;
    }

    selectBlueprint(category, name) {
        if (category !== undefined && name !== undefined) {
            this.towerBlueprint = this.directory.categories[category].items[name];
        }
    }

    /**
     * Select an instance of a Tower or Upgrade class
     * @param towerOrUpgrade {Tower||Upgrade}
     * @returns {PopologyContext}
     */
    setCurrentEntity(towerOrUpgrade) {
        if (!(towerOrUpgrade instanceof Tower || towerOrUpgrade instanceof Upgrade)) {
            throw new Error("Attempted to set the current selection to something thaat is not an instance of the Tower or Upgrade class!")
        }
        this.currentEntity = towerOrUpgrade;
    }
}
