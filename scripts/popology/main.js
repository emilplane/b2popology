import PopologyTower from "./popologyTower.js";
import { TEST_CASES } from "./constants.js";
import { PopologyUi } from "./ui/popologyUi.js";
import { Tower } from "./modulesHiearchy/towerLevel.js";
import { pathDisplayText } from "./utilities.js";

const popologyTowerInstance = new PopologyTower(TEST_CASES.WIZARD_MONKEY)
const path = [5, 3, 2]
const currentTower = {
    "type": "tower",
    "data": new Tower(popologyTowerInstance, path)
}

console.log(currentTower.data)

document.getElementById("uiContent").insertAdjacentElement("beforeend", 
    new PopologyUi.PopologyTowerDisplay()
        .updateBanner(
            currentTower.data.towerName,
            currentTower.data.towerCrosspathName,
            `${pathDisplayText(path)} ${popologyTowerInstance.displayName}`
        )
        .generateModules(currentTower)
        .element
)

// document.getElementById("uiContent").insertAdjacentElement("beforeend", 
//     new PopologyUi.TowerInfo(popologyTowerInstance).element
// )