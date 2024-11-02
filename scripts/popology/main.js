import TowerBlueprint from "./TowerBlueprint.js";
import { TEST_CASES, UI_CONSTANTS } from "./constants.js";
import { PopologyUi } from "./ui/popologyUi.js";
import { pathDisplayText } from "./utilities.js";
import { UiElements } from "./ui/UiElements.js";
import { PopologyContext } from "./PopologyContext.js";
import { DIRECTORY } from "./data/directory.js";

const popologyContext = new PopologyContext(() => {
    // const directoryCopy = structuredClone(DIRECTORY)
    // directoryCopy.categories.magic.items.wizardMonkey = TEST_CASES.WIZARD_MONKEY
    return DIRECTORY
});
popologyContext.createTower([0, 0, 0], "tower")

// UI_CONSTANTS.POPOLOGY_UI_CONTAINER.insertAdjacentElement("beforeend",
//     new PopologyUi.TowerInfo(popologyContext).element
// )

UI_CONSTANTS.POPOLOGY_UI_CONTAINER.insertAdjacentElement("beforeend",
    new PopologyUi.MainScreen(popologyContext).element
)