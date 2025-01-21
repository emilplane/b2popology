import { UI_CONSTANTS, TEST_CASES, WARNS } from "../constants.js"
import { DIRECTORY } from "../data/directory.js"
import { Element } from "./element.js"
import { UiElements } from "./UiElements.js"
import UiUpdates from "./UiUpdates.js"
import {Tower} from "../modulesHiearchy/towerLevel.js";
import {TowerPath} from "../modulesHiearchy/TowerPath.js";

/**
 * Contains UI content to be used in the uiContent div
 */
export class PopologyUi {
    static MainScreen = class {
        constructor(popologyContext) {
            this.popologyContext = popologyContext
            console.log(popologyContext)
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
        constructor(popologyContext) {
            this.popologyContext = popologyContext;
            this.blueprint = popologyContext.towerBlueprint;
        }

        get element() {
            const banner = new Element("div").class("towerInfoBanner")
                .children(
                    new Element("h2").text(this.blueprint.displayName).class("luckiestGuy")
                )

            const towerNav = UiElements.towerNavBar(this.popologyContext);

            const towerInfoContainer = new Element("div")
                .class('towerInfoContainer')
                .children(
                    towerNav, banner
                );

            if (this.blueprint.upgrades === undefined) {
                // Add "no upgrades" screen
            } else {
                towerInfoContainer.children(UiElements.towerCard(
                    `media/towerPortraits/wizardMonkey/base.png`,
                    `Base ${this.blueprint.displayName}`,
                    new TowerPath('base'),
                    this.popologyContext
                ))
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
     * @param {boolean} isUpgrade - Whether the entity to be displayed is an upgrade
     */
    static PopologyTowerDisplay = class {
        constructor(popologyContext, isUpgrade) {
            this.popologyContext = popologyContext;
            this.isUpgrade = isUpgrade;
            this.blueprint = popologyContext.currentTower;
            this.banner = new Element("div").class("towerBanner").id("towerBanner");
            this.moduleContainer = new Element("div").class("moduleContainer").id("moduleContainer");

            // Create a tower if this display is for viewing an upgrade. This tower is used to display full stats, ex:
            // +2d (4d)
            // An instance of the upgrade class only has +2d, so the tower is used to derive the 4d
            if (this.isUpgrade) {
                this.towerForUpgradeView = new Tower(this.popologyContext.towerBlueprint, this.popologyContext.currentEntity.path)
                this.popologyContext.currentEntity.towerName = this.towerForUpgradeView.towerName
                this.popologyContext.currentEntity.towerCrosspathName = this.towerForUpgradeView.towerCrosspathName
            }
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

            const changeTowerUpgradeButton = new Element("button").class("grayButton")

            switch (this.popologyContext.currentTower.type) {
                case "tower":
                    changeTowerUpgradeButton.text("View As Upgrade");
                    changeTowerUpgradeButton.onclick(() => {
                        UiUpdates.upgradeDisplay(this.popologyContext)
                    })
                    break;
                case "upgrade": default:
                    changeTowerUpgradeButton.text("View As Tower");
                    changeTowerUpgradeButton.onclick(() => {
                        UiUpdates.towerDisplay(this.popologyContext)
                    })
                    break;
            }

            return new Element("div").class("towerDisplayNavbar").children(
                backButton,
                changeTowerUpgradeButton
            )
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
            
            if (crosspath !== undefined) {
                bannerTitleContainer.children(
                    new Element(UI_CONSTANTS.BANNER.CROSSPATH_TEXT_SIZE)
                        .class("luckiestGuy").text(UI_CONSTANTS.BANNER.CROSSPATH_PREFIX + crosspath)
                )
            }

            const pathString = this.popologyContext.currentEntity.path.simplePathString(true)

            const towerPortrait = new Element("div").class("towerBannerPortraitContainer").children(
                new Element("img").class("towerBannerPortrait").setProperty("src",
                    `media/towerPortraits/${this.popologyContext.towerBlueprint.name}/${pathString}.png`
                )
            )

            const towerBannerContent = new Element("div").class("towerBannerContent").children(bannerTitleContainer)
            if (bottomText !== undefined) {
                towerBannerContent.children(
                    new Element("p").text(bottomText).class("mono", "big", "bannerBottomText")
                )
            }

            this.banner.clearHTML().children(towerBannerContent, towerPortrait)

            return this
        }

        /**
         * Generates the modules of the currently selected tower
         * @returns
         */
        generateModules() {

            const towerPropertiesModule = this.blueprint.data.modules.find(item => item.name === "tower-properties")
            if (towerPropertiesModule) {
                this.moduleContainer.children(
                    UiElements.towerPropertiesModule(towerPropertiesModule)
                )
            } else if (!this.isUpgrade) {
                console.warn(WARNS.NO_TOWER_PROPERTIES_MODULE)
            }
    
            this.blueprint.data.modules.forEach((module) => {
                if (module.type === "attack") {
                    this.moduleContainer.children(
                        UiElements.module(module, this.blueprint.data, undefined, this.towerForUpgradeView)
                    )
                }
            })

            return this
        }
    }
}