import { UI_CONSTANTS } from "../constants.js"
import { Tower, Upgrade } from "../modulesHiearchy/towerLevel.js"
import { sleep, pathDisplayText } from "../utilities.js"
import { PopologyUi } from "./popologyUi.js"
import { PopologyContext } from "../PopologyContext.js";
import {TowerPath} from "../modulesHiearchy/TowerPath.js";

export default class UiUpdates {
    static goToTop() {
        document.querySelector("html").scrollTop = 0
    }

    static mainScreen(popologyContext) {
        UI_CONSTANTS.POPOLOGY_UI_CONTAINER.innerHTML = ""
        UI_CONSTANTS.POPOLOGY_UI_CONTAINER.insertAdjacentElement("beforeend",
            new PopologyUi.MainScreen(popologyContext).element
        )
        UiUpdates.goToTop()
    }

    /**
     * Changes the currently selected blueprint and changes the UI to the upgrade selection screen for a tower.
     * @param {string} category
     * @param {string} name
     * @param {PopologyContext} popologyContext
     * @param {number} navBarScrollPosition
     */
    static upgradeSelection(popologyContext, category, name, navBarScrollPosition = 0) {
        popologyContext.selectBlueprint(category, name);
        UI_CONSTANTS.POPOLOGY_UI_CONTAINER.innerHTML = ""
        UI_CONSTANTS.POPOLOGY_UI_CONTAINER.insertAdjacentElement("beforeend",
            new PopologyUi.TowerInfo(popologyContext).element
        )
        document.querySelector(".towerNavBarButtonContainer").scrollLeft = navBarScrollPosition
        UiUpdates.goToTop()
    }

    /**
     * Update the UI to display the current tower or upgrade.
     * @param popologyContext
     * @param type {string}
     * @param path {TowerPath}
     */
    static displayEntityStats(popologyContext, type, path) {
        let isUpgrade = false
        switch (type) {
            case "tower":
                popologyContext.setCurrentEntity(
                    new Tower(popologyContext.towerBlueprint, path)
                )
                break;
            case "upgrade":
                isUpgrade = true
                popologyContext.setCurrentEntity(
                    new Upgrade(path.blueprintUpgradeSelector(popologyContext.towerBlueprint.upgrades))
                )
                break;
            default:
                throw new Error("Incorrect entity type!")
        }

        UI_CONSTANTS.POPOLOGY_UI_CONTAINER.innerHTML = ""
        UI_CONSTANTS.POPOLOGY_UI_CONTAINER.insertAdjacentElement("beforeend",
            new PopologyUi.PopologyTowerDisplay(popologyContext, isUpgrade)
                .updateBanner(
                    popologyContext.currentEntity.towerName,
                    popologyContext.currentEntity.towerCrosspathName,
                    `${pathDisplayText(popologyContext.currentEntity.path, isUpgrade)} ${popologyContext.towerBlueprint.displayName}`
                )
                .generateModules()
                .element
        )
        UiUpdates.goToTop()
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
        UiUpdates.goToTop()
    }

    static upgradeDisplay(popologyContext) {
        popologyContext.currentTower = {
            "type": "upgrade",
            "data": new Upgrade(popologyContext.path.blueprintUpgradeSelector(popologyContext.towerBlueprint.upgrades))
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
        UiUpdates.goToTop()
    }
}