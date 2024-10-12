import { UI_CONSTANTS, WARNS } from "../constants.js"
import { DIRECTORY } from "../data/directory.js"
import { Element } from "./element.js"
import { UiElements } from "./UiElements.js"
import UIUpdates from "./uiUpdates.js"

/**
 * Contains UI content to be used in the uiContent div
 */
export class PopologyUi {
    static MainScreen = class {
        constructor(popologyContext) {
            this.popologyContext = popologyContext
        }

        get element() {
            return new Element("div").class("categoriesContainer")
                .children(
                    UiElements.categoryContainer("primary", DIRECTORY.categories.primary),
                    UiElements.categoryContainer("military", DIRECTORY.categories.military),
                    UiElements.categoryContainer("magic", DIRECTORY.categories.magic),
                    UiElements.categoryContainer("support", DIRECTORY.categories.support),
                    UiElements.categoryContainer("heroes", DIRECTORY.categories.heroes)
                ).element
        }
    }

    static TowerInfo = class {
        constructor(popologyContext) {
            this.popologyContext = popologyContext
            this.blueprint = popologyContext.towerBlueprint.blueprint
        }

        get element() {
            // const banner = new Element("div").class("towerInfoBanner")
            //     .children(
            //         new Element("h2").text(this.blueprint.displayName).class("luckiestGuy")
            //     )

            return new Element("div").class("towerInfoContainer").children(
                // banner,
                UiElements.towerInfoPathContainer(0, this.blueprint, this.popologyContext),
                UiElements.towerInfoPathContainer(1, this.blueprint, this.popologyContext),
                UiElements.towerInfoPathContainer(2, this.blueprint, this.popologyContext)
            ).element
        }
    }

    /**
     * An element for showing the stats of a tower.
     * @param {*} towerBlueprint - The blueprint of the tower
     */
    static PopologyTowerDisplay = class {
        constructor(popologyContext) {
            this.popologyContext = popologyContext
            this.blueprint = popologyContext.currentTower
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
                    this.navBar(),
                    this.banner.element,
                    this.moduleContainer
                )

            return container.element
        }

        navBar() {
            const backButton = new Element("button").class("grayButton").text("Back")

            backButton.onclick(() => {
                UIUpdates.towerSelection(this.popologyContext)
            })

            return new Element("div").class("towerDisplayNavbar").children(backButton)
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
        generateModules() {
            const towerPropertiesModule =
            this.blueprint.data.modules.find(item => item.name === "tower-properties")
            if (towerPropertiesModule) {
                this.moduleContainer.children(
                    UiElements.towerPropertiesModule(towerPropertiesModule)
                )
            } else {
                console.warn(WARNS.NO_TOWER_PROPERTIES_MODULE)
            }
    
            this.blueprint.data.modules.forEach((module) => {
                if (module.type == "attack") {
                    this.moduleContainer.children(
                        UiElements.module(module, this.blueprint.data, undefined)
                    )
                }
            })

            return this
        }
    }
}