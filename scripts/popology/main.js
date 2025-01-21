import TowerBlueprint from "./TowerBlueprint.js";
import { TEST_CASES, UI_CONSTANTS } from "./constants.js";
import { PopologyUi } from "./ui/popologyUi.js";
import {pathDisplayText, sleep} from "./utilities.js";
import { UiElements } from "./ui/UiElements.js";
import { PopologyContext } from "./PopologyContext.js";
import { DIRECTORY } from "./data/directory.js";
import UiUpdates from "./ui/UiUpdates.js";

const popologyContext = new PopologyContext(() => {
    return DIRECTORY
});

UI_CONSTANTS.POPOLOGY_UI_CONTAINER.insertAdjacentElement("beforeend",
    new PopologyUi.MainScreen(popologyContext).element
)

// Make main content scroll to top on load
window.addEventListener("load", async (event) => {
    await sleep(0)
    UiUpdates.goToTop()
});