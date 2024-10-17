import { Tower } from "./modulesHiearchy/towerLevel.js";

export class PopologyContext {
    /**
     * Holds the current tower blueprint and instance of the selected tower or upgrade.
     * @param {Function} directoryFn
     */
    constructor(directoryFn) {
        this.directory = directoryFn();
        this.towerBlueprint = undefined;
        this.path = [0, 0, 0];
        this.currentTowerOrUpgrade = undefined;
    }

    selectBlueprint(category, name) {
        this.towerBlueprint = this.directory.categories[category].items[name];
    }

    /**
     * @param {Array} path - Array of tower levels
     * @param {string} type - tower or upgrade
     */
    createTower(path, type) {
        this.path = path;
        switch (type) {
            case "tower":
                // this.currentTowerOrUpgrade = new Tower(this.towerBlueprint, this.path);
                break;
            case "upgrade":
                throw new Error("Not implemented");
        }
    }
}
