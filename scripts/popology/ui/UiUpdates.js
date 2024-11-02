import { UI_CONSTANTS } from "../constants.js"
import {Tower, Upgrade} from "../modulesHiearchy/towerLevel.js"
import { pathDisplayText } from "../utilities.js"
import { PopologyUi } from "./popologyUi.js"
import { PopologyContext } from "../PopologyContext.js";

export default class UiUpdates {
    static mainScreen(popologyContext) {
        UI_CONSTANTS.POPOLOGY_UI_CONTAINER.innerHTML = ""
        UI_CONSTANTS.POPOLOGY_UI_CONTAINER.insertAdjacentElement("beforeend",
            new PopologyUi.MainScreen(popologyContext).element
        )
    }

    /**
     * Changes the currently selected blueprint and changes the UI to the upgrade selection screen for a tower.
     * @param {string} category
     * @param {string} name
     * @param {PopologyContext} popologyContext
     * @param {number} navBarScrollPosition
     * @param {number} scrollVelocity
     */
    static upgradeSelection(popologyContext, category, name, navBarScrollPosition = 0, scrollVelocity = 0) {
        popologyContext.selectBlueprint(category, name);
        UI_CONSTANTS.POPOLOGY_UI_CONTAINER.innerHTML = ""
        UI_CONSTANTS.POPOLOGY_UI_CONTAINER.insertAdjacentElement("beforeend",
            new PopologyUi.TowerInfo(popologyContext, scrollVelocity).element
        )
        document.querySelector(".towerNavBarButtonContainer").scrollLeft = navBarScrollPosition
    }

    static towerDisplay(popologyContext) {
        popologyContext.currentTower = {
            "type": "tower",
            "data": new Tower(popologyContext.towerBlueprint, popologyContext.path)
        }

        UI_CONSTANTS.POPOLOGY_UI_CONTAINER.innerHTML = ""
        UI_CONSTANTS.POPOLOGY_UI_CONTAINER.insertAdjacentElement("beforeend", 
            new PopologyUi.PopologyTowerDisplay(popologyContext)
                .updateBanner(
                    popologyContext.currentTower.data.towerName,
                    popologyContext.currentTower.data.towerCrosspathName,
                    `${pathDisplayText(popologyContext.path)} ${popologyContext.towerBlueprint.displayName}`
                )
                .generateModules()
                .element
        )
    }

    static upgradeDisplay(popologyContext) {
        const index = Math.max(...popologyContext.path) - 1
        const path = popologyContext.path.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0)
        popologyContext.currentTower = {
            "type": "upgrade",
            "data": new Upgrade(popologyContext.towerBlueprint.upgrades.paths[path][index])
        }

        UI_CONSTANTS.POPOLOGY_UI_CONTAINER.innerHTML = ""
        UI_CONSTANTS.POPOLOGY_UI_CONTAINER.insertAdjacentElement("beforeend",
            new PopologyUi.PopologyTowerDisplay(popologyContext, true)
                .updateBanner(
                    popologyContext.currentTower.data.towerName,
                    popologyContext.currentTower.data.towerCrosspathName,
                    `${pathDisplayText(popologyContext.path, true)} ${popologyContext.towerBlueprint.displayName}`
                )
                .generateModules()
                .element
        )
    }
}