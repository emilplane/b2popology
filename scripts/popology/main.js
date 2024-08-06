import PopologyTower from "./popologyTower.js";
import { TEST_CASES, UI_CONSTANTS } from "./constants.js";
import { PopologyUi } from "./ui.js";
import { Tower } from "./modulesHiearchy/towerLevel.js";

const popologyTowerInstance = new PopologyTower(TEST_CASES.WIZARD_MONKEY)
const path = [0, 0, 0]
const currentTower = {
    "type": "tower",
    "data": new Tower(popologyTowerInstance, path)
}

console.log(currentTower.data)

PopologyUi.updateBanner("Operation: Dart Storm", "Exploding Pineapple ")
PopologyUi.createConfigPanel()