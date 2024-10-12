import { MODULE_TYPES, MODULE_PROPERTIES, WARNS } from "../constants.js";
import { setCharAt } from "../utilities.js";
import { Element } from "./element.js";
import UIUpdates from "./uiUpdates.js";

/**
 * Contains functions that create UI elements across the site
 */
export class UiElements {
    static categoryContainer(category, categoryData, popologyContext) {
        console.log(categoryData);
        const title = new Element(categoryData.nameSplit[0].prioritize == true ? "h2" : "h4")
            .class("luckiestGuy", `${category}CategoryTitle`)
            .text(categoryData.nameSplit[0].name);
        
        let subtitle = new Element("div");
        if (categoryData.nameSplit[1] != undefined) {
            subtitle = new Element(categoryData.nameSplit[1].prioritize == true ? "h2" : "h4")
                .class(`${category}CategorySubtitle`)
                .text(categoryData.nameSplit[1].name);
        }

        const titleContainer = new Element("div")
            .class("categoryTitleContainer")
            .children(title, subtitle);

        const categoryDividingLine = new Element("div")
            .class("categoryDividingLine");

        const towerCardContainer = new Element("div")
            .class("categoryContainerTowerCardContainer")

        for (const towerName in categoryData.items) {
            const towerBlueprint = categoryData.items[towerName];
            towerCardContainer.children(this.categoryContainerTowerCard(category, towerBlueprint));
        }

        return new Element("div").class("categoryContainer", `${category}CategoryContainer`)
            .children(titleContainer, categoryDividingLine, towerCardContainer);
    }

    static categoryContainerTowerCard(category, towerBlueprint) {
        const titleContainer = new Element("div").class("categoryContainerTowerCardTitleContainer");
        towerBlueprint.nameSplit.forEach((split) => {
            let title;
            if (split.prioritize == true) {
                title = new Element("h4")
                    .class("categoryContainerTowerCardTitle")
                    .text(split.name);
            } else {
                title = new Element("p")
                    .class("categoryContainerTowerCardTitle")
                    .text(split.name);
            }
            titleContainer.children(title);
        })

        const towerPortrait = new Element("img")
            .class("categoryContainerTowerCardPortrait")

        if (category == "heroes") {
            towerPortrait.setProperty("src", `media/towerPortraits/${towerBlueprint.name}/${towerBlueprint.name}Portrait.png`);
        } else {
            towerPortrait.setProperty("src", `media/towerPortraits/${towerBlueprint.name}/base/${towerBlueprint.name}Portrait.png`);
        }

        return new Element("div").class("categoryContainerTowerCard")
            .children(titleContainer, towerPortrait);
    }

    static towerUpgradeSelector() {
        // Layer 1
        const pathTrackContainer = new Element("div").class("pathTrackContainer");

        for (let i = 0; i < 3; i++) {
            pathTrackContainer.children(new Element("div").class("pathTrack"));
        }

        //Layer 2
        const upgradeSelectorVisual = new Element("div").class("upgradeSelectorVisual");

        for (let i = 0; i < 3; i++) {
            upgradeSelectorVisual.children(
                new Element("div").class("path", "position0").id(`path${i}`)
            );
        }

        // Layer 3
        const numberOverlay = new Element("div").class("numberOverlay");

        for (let i = 0; i < 3; i++) {
            const path = new Element("div").class("path");

            for (let j = 0; j < 6; j++) {
                const upgradeNode = new Element("div")
                    .class("upgradeNode").id(`upgradeNode_${i}_${j}`).text(j);

                if (j === 0) upgradeNode.class('selectedNode');
                path.children(upgradeNode);
            }

            numberOverlay.children(path);
        }

        // Combine layers
        const container = new Element("div")
            .class("towerUpgradeSelector")
            .children(pathTrackContainer, upgradeSelectorVisual, numberOverlay);

        return container;
    }

    static towerPropertiesModule(towerProperties) {
        const title = new Element("h5").text("Tower properties");

        const statChipContainer = this.basicStatsContainerSmall(towerProperties.properties);

        return new Element("div").class("module", "towerPropertiesModule")
            .children(title, statChipContainer);
    }

    /**
     * @param {*} module - The module to display in this element
     * @param {*} tower - The tower this module comes from
     * @param {*} conditionString
     * The condition under which this module is used (this is used for submodules)
     * @param {*} useSecondaryModuleStyle
     * Whether to use a darker module style (this alternates as nested modules grow deeper)
     */
    static module(module, tower, conditionString, useSecondaryModuleStyle = false) {
        const title = new Element("div").class("moduleTitle");

        if (conditionString != undefined) {
            title.children(
                new Element("span").class("moduleCondition").text(`${conditionString} `)
            );
        }

        title.children(
            new Element("span").class("moduleName").text(`${module.name}`),
            document.createTextNode(" "),
            new Element("span").class("moduleType")
                .text(`${MODULE_TYPES[module.type].displayName}`)
        );

        const line = new Element("div").class("moduleDividingLine")
            .children(new Element("div").class("moduleDividingLineHover"));

        const damageStats = { "damage": undefined, "secondary": [] };
        const basicStats = [], submodules = {};

        for (let propertyName in MODULE_PROPERTIES) {
            if (MODULE_PROPERTIES[propertyName].category == "submodules") {
                submodules[propertyName] = [];
            }
        }

        module.properties.forEach(property => {
            switch (property.criteria.category) {
                case "damage":
                    if (property.name == "damage") {
                        damageStats.damage = property;
                    } else {
                        damageStats.secondary.push(property);
                    }
                    break;
                case "basic":
                    basicStats.push(property);
                    break;
                case "submodules":
                    submodules[property.name].push(property);
                    break;
            }
        });

        const moduleStatContainer = new Element("div").class("moduleStatContainer");

        if (damageStats.damage != undefined) {
            if (damageStats.damage.value != undefined) {
                if (damageStats.secondary.length == 0) {
                    basicStats.unshift(damageStats.damage);
                } else {
                    moduleStatContainer.children(
                        UiElements.damageStatsContainer(damageStats)
                    );
                }
            }
        }

        const submoduleContainer = new Element("div").class("submoduleContainer");

        let submoduleExists = false;
        Object.entries(submodules).forEach(([key, properties]) => {
            properties.forEach(({ value }) => {
                value.forEach((val) => {
                    const matchingModules = tower.modules.filter((module) => module.allValidNames.includes(val)
                    );

                    matchingModules.forEach((module) => {
                        const colon = MODULE_PROPERTIES[key].colon ? ":" : "";
                        submoduleExists = true;
                        submoduleContainer.children(
                            UiElements.module(module, tower,
                                `${MODULE_PROPERTIES[key].displayName}${colon}`,
                                !useSecondaryModuleStyle
                            )
                        );
                    });
                });
            });
        });

        if (basicStats.length != 0) {
            moduleStatContainer.children(UiElements.basicStatsContainer(basicStats));
        }

        if (submoduleExists) {
            moduleStatContainer.children(submoduleContainer);
        }

        const container = new Element("div").class("module", `${module.type}Module`)
            .children(title, line, moduleStatContainer);

        if (useSecondaryModuleStyle) { container.class("secondaryModuleStyle") }

        return container;
    }

    /**
     * An element that displays damage stats for a module.
     * @param {*} damageStats
     * @returns
     */
    static damageStatsContainer(damageStats) {
        console.log(damageStats);
        const input1 = ["damage", "Damage", damageStats.damage.value];
        const input2 = [];
        damageStats.secondary.forEach(stat => {
            input2.push([stat.name, stat.criteria.displayName, stat.value]);
        });
        const damageContainer = UiElements.statContainer(input1, input2);
        return damageContainer;
    }

    static basicStatsContainer(basicStats) {
        const basicStatsContainer = new Element("div")
            .class("statChipContainer");

        basicStats.forEach(stat => {
            let value = stat.value;
            if (stat.criteria.showUnitByDefault) {
                value += stat.criteria.unit;
            }
            basicStatsContainer.children(
                UiElements.statContainer(
                    [stat.name, stat.criteria.displayName, value]
                )
            );
        });

        return basicStatsContainer;
    }

    static basicStatsContainerSmall(basicStats) {
        const basicStatsContainer = new Element("div")
            .class("statChipContainer");

        basicStats.forEach(stat => {
            let value = stat.value;
            if (stat.criteria.showUnitByDefault) {
                value += stat.criteria.unit;
            }
            basicStatsContainer.children(
                UiElements.smallStatContainer(
                    [stat.name, stat.criteria.displayName, value]
                )
            );
        });

        return basicStatsContainer;
    }

    static statContainer(mainStat, secondaryStats) {
        // Arrays are laid out as: [statName, statDisplayName, statValue]
        let secondaryStatsExist = false;

        if (secondaryStats != undefined) {
            if (secondaryStats.length != 0) {
                secondaryStatsExist = true;
            }
        }

        const dividingLine = new Element("div").class("statDividingLine");

        const secondaryStatsContainer = new Element("div")
            .class("secondaryStatsContainer");

        if (secondaryStatsExist) {
            secondaryStats.forEach((stat) => {
                secondaryStatsContainer.children(
                    UiElements.statGroup(stat)
                );
            });
        }

        const container = new Element("div")
            .class("statContainer").children(
                UiElements.statGroup(mainStat)
                    .class("mainStatElement")
            );

        if (secondaryStatsExist) {
            container.children(dividingLine, secondaryStatsContainer);
        }

        return container;
    }

    static smallStatContainer(mainStat, secondaryStats) {
        // Arrays are laid out as: [statName, statDisplayName, statValue]
        if (secondaryStats) { console.warn(WARNS.NOT_IMPLEMENTED); }

        const container = new Element("div")
            .class("statContainer").children(
                UiElements.statGroupSmall(mainStat)
                    .class("mainStatElement")
            );

        return container;
    }

    static statGroup(stat) {
        const statTitleContainer = new Element("div")
            .class("statTitleContainer")
            .children(new Element("h4").text(stat[2]));

        if (MODULE_PROPERTIES[stat[0]].icon) {
            const icon = new Element("img")
                .setProperty(
                    "src",
                    `media/propertyIcons/${stat[0]}.png`
                )
                .class("statIcon");
            statTitleContainer.children(icon);
        }

        return new Element("div")
            .class("statGroup").children(
                statTitleContainer,
                new Element("p").text(stat[1])
            );
    }

    static statGroupSmall(stat) {
        if (MODULE_PROPERTIES[stat[0]].type == "boolean" && stat[2] == true) {
            return new Element("p").text(`${stat[1]}`);
        }
        return new Element("p").text(`${stat[1]}: ${stat[2]}`);
    }

    static towerInfoPathContainer(path, blueprint, context) {
        const towerPathData = blueprint.upgrades.paths[path];
        const nameData = blueprint.upgradeNames[path];

        const container = new Element("div").class("towerInfoContainer");
        towerPathData.forEach((upgrade, index) => {
            let pathString = "000"; pathString = setCharAt(pathString, path, index+1);

            const image = new Element("div").class("towerPortraitContainer")
                .children(
                    new Element("img").class("towerPortrait")
                        .setProperty("src", `media/towerPortraits/wizardMonkey/${pathString}.png`)
                )
            
            const titleContainer = new Element("div").class("towerTitleContainer")
                .children(
                    new Element("h3").class("towerTitle", "luckiestGuy")
                        .text(nameData[index].displayName)
                )

            const towerCardChipContainer = new Element("div").class("towerCardChipContainer")
                // .children(
                //     new Element("div").class("towerCardChip").text("1p")
                // )

            // const upgradeSummaryStats = new UpgradeSummaryStats(upgrade)

            // upgradeSummaryStats.summaryArray.forEach(summary => {
            //     towerCardChipContainer.children(
            //         new Element("div").class("towerCardChip").text(summary)
            //     )
            // })

            const towerButtonsContainer = new Element("div").class("towerButtonsContainer")

            const viewUpgradeButton = new Element("button").class("towerNavButton").children(
                document.createTextNode("View Upgrade "),
                new Element("span").class("material-symbols-outlined").text("arrow_forward_ios")
            )

            viewUpgradeButton.onclick(() => {
                const newPath = [0, 0, 0]
                newPath[path] = index + 1
                context.path = newPath
                UIUpdates.towerUpgrade(context)
            })

            towerButtonsContainer.children(viewUpgradeButton)

            const card = new Element("div").class("towerCard").children(
                image, titleContainer, /*towerCardChipContainer,*/ towerButtonsContainer
            )

            container.children(card)
        })
        
        return container;
    }

    static UiOverlays = class {
        static propertyInfoOverlay() {
            const stat = new Element("h2").class("mono").text("1.1s");
            const title = new Element("h4").class().text("Attack Cooldown");

            const description = new Element("p").text("The time between attacks in seconds. This is commonly confused with attack speed, which refers to attacks per second. For example, if a tower shoots a projectile every quarter second, then it has 4 attack speed, but 0.25 attack cooldown, which is what is used here.");

            const container = new Element("div").class("propertyInfoOverlay").children(stat, title, description);

            return new Element("div").class("propertyInfoOverlayWrapper").children(container);
        }
    }
}