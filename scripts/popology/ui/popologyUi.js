import { UI_CONSTANTS, WARNS } from "../constants.js"
import { Element } from "./element.js"
import { UiElements } from "./UiElements.js"

/**
 * Contains UI content to be used in the uiContent div
 */
export class PopologyUi {
    static TowerInfo = class {
        constructor(popologyTower) {
            this.blueprint = popologyTower.blueprint
                
        }

        get element() {
            // const banner = new Element("div").class("towerInfoBanner")
            //     .children(
            //         new Element("h2").text(this.blueprint.displayName).class("luckiestGuy")
            //     )

            return new Element("div").class("towerInfoContainer").children(
                // banner,
                UiElements.towerInfoPathContainer(0, this.blueprint),
                // UiElements.towerInfoPathContainer(1, this.blueprint),
                // UiElements.towerInfoPathContainer(2, this.blueprint)
            ).element
        }
    }

    /**
     * An element for showing the stats of a tower.
     */
    static PopologyTowerDisplay = class {
        constructor() {
            this.banner = new Element("div").class("towerBanner").id("towerBanner")
            this.moduleContainer = new Element("div").class("moduleContainer").id("moduleContainer")
        }

        /**
         * After all the content has been added to this element, use this to add it to the uiContent
         * div.
         */
        get element() {
            const container = new Element("div").class("towerSections").id("towerSections")
                .children(
                    this.banner.element,
                    this.moduleContainer
                )

            return container.element
        }

        /**
         * Adds appropriate info to the banner.
         * @param {*} name - The tower name
         * @param {*} crosspath - The tower's crosspath, if applicable
         * @param {*} bottomText - The text to display at the bottom of the banner
         */
        updateBanner(name, crosspath, bottomText) {    
            const bannerTitleContainer = new Element("div").children(
                    new Element(UI_CONSTANTS.BANNER.TITLE_TEXT_SIZE).class("luckiestGuy").text(name)
                )
            
            if (crosspath != undefined) {
                bannerTitleContainer.children(
                    new Element(UI_CONSTANTS.BANNER.CROSSPATH_TEXT_SIZE)
                        .class("luckiestGuy").text(UI_CONSTANTS.BANNER.CROSSPATH_PREFIX + crosspath)
                )
            }
    

            this.banner.clearHTML().children(bannerTitleContainer)
            if (bottomText != undefined) {
                this.banner.children(
                    new Element("p").text(bottomText).class("mono", "big", "bannerBottomText")
                )
            }

            return this
        }

        /**
         * Generates the modules of the currently selected tower
         * @param {*} currentTower 
         * @returns 
         */
        generateModules(currentTower) {
            const towerPropertiesModule =
                currentTower.data.modules.find(item => item.name === "tower-properties")
            if (towerPropertiesModule) {
                this.moduleContainer.children(
                    UiElements.towerPropertiesModule(towerPropertiesModule)
                )
            } else {
                console.warn(WARNS.NO_TOWER_PROPERTIES_MODULE)
            }
    
            currentTower.data.modules.forEach((module) => {
                if (module.type == "attack") {
                    this.moduleContainer.children(
                        UiElements.module(module, currentTower.data, undefined)
                    )
                }
            })

            return this
        }
    }
}