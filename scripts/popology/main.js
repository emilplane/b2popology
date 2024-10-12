import TowerBlueprint from "./popologyTower.js";
import { TEST_CASES, UI_CONSTANTS } from "./constants.js";
import { PopologyUi } from "./ui/PopologyUi.js";
import { Tower } from "./modulesHiearchy/towerLevel.js";
import { pathDisplayText } from "./utilities.js";
import { UiElements } from "./ui/UiElements.js";

class PopologyContext {
    /**
     * Holds the current tower blueprint and instance of the selected tower or upgrade.
     * @param {TowerBlueprint} towerBlueprint - Instance of a blueprint
     */
    constructor(towerBlueprint) {
        this.towerBlueprint = towerBlueprint
        this.path = [0, 0, 0]
        this.currentTowerOrUpgrade = undefined
    }

    /**
     * @param {Array} path - Array of tower levels
     * @param {string} type - tower or upgrade
     */
    createTower(path, type) {
        this.path = path
        switch (type) {
            case "tower":
                this.currentTowerOrUpgrade = new Tower(this.towerBlueprint, this.path)
                break;
            case "upgrade":
                throw new Error("Not implemented")
                break;
        }
    }
}

const popologyContext = new PopologyContext(new TowerBlueprint(TEST_CASES.WIZARD_MONKEY));
popologyContext.createTower([0, 0, 0], "tower")

console.log(popologyContext)

UI_CONSTANTS.POPOLOGY_UI_CONTAINER.insertAdjacentElement("beforeend", 
    new PopologyUi.TowerInfo(popologyContext).element
)

UI_CONSTANTS.POPOLOGY_UI_CONTAINER.insertAdjacentElement("beforeend",
    new PopologyUi.MainScreen(popologyContext).element
)