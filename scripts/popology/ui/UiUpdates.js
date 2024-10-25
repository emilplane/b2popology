import { UI_CONSTANTS } from "../constants.js"
import { Tower } from "../modulesHiearchy/towerLevel.js"
import { pathDisplayText } from "../utilities.js"
import { PopologyUi } from "./popologyUi.js"

export default class UIUpdates {
    static mainScreen(popologyContext) {
        UI_CONSTANTS.POPOLOGY_UI_CONTAINER.innerHTML = ""
        UI_CONSTANTS.POPOLOGY_UI_CONTAINER.insertAdjacentElement("beforeend",
            new PopologyUi.MainScreen(popologyContext).element
        )
    }

    static towerSelection(popologyContext) {
        UI_CONSTANTS.POPOLOGY_UI_CONTAINER.innerHTML = ""
        UI_CONSTANTS.POPOLOGY_UI_CONTAINER.insertAdjacentElement("beforeend",
            new PopologyUi.TowerInfo(popologyContext).element
        )
    }

    static towerUpgrade(popologyContext) {
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
}