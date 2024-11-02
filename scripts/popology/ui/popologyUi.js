import { UI_CONSTANTS, TEST_CASES, WARNS } from "../constants.js"
import { DIRECTORY } from "../data/directory.js"
import { Element } from "./element.js"
import { UiElements } from "./UiElements.js"
import UiUpdates from "./UiUpdates.js"

/**
 * Contains UI content to be used in the uiContent div
 */
export class PopologyUi {
    static MainScreen = class {
        constructor(popologyContext) {
            this.popologyContext = popologyContext
        }

        get element() {
            const container = new Element("div").class("categoriesContainer")

            for (const category in this.popologyContext.directory.categories) {
                const categoryData = this.popologyContext.directory.categories[category]
                container.children(UiElements.categoryContainer(category, categoryData, this.popologyContext))
            }

            return container.element
        }
    }

    static TowerInfo = class {
        constructor(popologyContext, navBarScrollVelocity) {
            this.popologyContext = popologyContext;
            this.navBarScrollVelocity = navBarScrollVelocity;
            this.blueprint = popologyContext.towerBlueprint;
        }

        get element() {
            const banner = new Element("div").class("towerInfoBanner")
                .children(
                    new Element("h2").text(this.blueprint.displayName).class("luckiestGuy")
                )

            const towerNav = UiElements.towerNavBar(this.popologyContext, this.navBarScrollVelocity);

            const towerInfoContainer = new Element("div")
                .class("towerInfoContainer")
                .children(
                    towerNav, banner
                );

            if (this.blueprint.upgrades === undefined) {

            } else {
                this.blueprint.upgrades.paths.forEach((path, index) => {
                    towerInfoContainer.children(
                        UiElements.towerInfoPathContainer(index, this.blueprint, this.popologyContext)
                    )
                });
            }

            return towerInfoContainer.element;
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
                UiUpdates.upgradeSelection(this.popologyContext)
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