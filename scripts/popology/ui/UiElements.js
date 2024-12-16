import {MODULE_PROPERTIES, MODULE_TYPES, WARNS} from "../constants.js";
import {addAfterBuffValueToPropertyBuff, setCharAt, statArrayToDisplayStat} from "../utilities.js";
import {Element} from "./element.js";
import UiUpdates from "./UiUpdates.js";
import {UpgradeModule} from "../modulesHiearchy/moduleLevel.js";
import {TowerPath} from "../modulesHiearchy/TowerPath.js";

/**
 * Contains functions that create UI elements across the site
 */
export class UiElements {
    static categoryContainer(category, categoryData, popologyContext) {
        const title = new Element(categoryData.nameSplit[0].prioritize === true ? "h2" : "h4")
            .class("luckiestGuy", `${category}CategoryTitle`)
            .text(categoryData.nameSplit[0].name);
        
        let subtitle = new Element("div");
        if (categoryData.nameSplit[1] !== undefined) {
            subtitle = new Element(categoryData.nameSplit[1].prioritize === true ? "h2" : "h4")
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
            towerCardContainer.children(this.categoryContainerTowerCard(category, towerBlueprint, popologyContext));
        }

        return new Element("div").class("categoryContainer", `${category}CategoryContainer`)
            .children(titleContainer, categoryDividingLine, towerCardContainer);
    }

    static categoryContainerTowerCard(category, towerBlueprint, popologyContext) {
        const titleContainer = new Element("div").class("categoryContainerTowerCardTitleContainer");

        towerBlueprint.nameSplit.forEach((split) => {
            let title;
            if (split.prioritize === true) {
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

        if (category === "heroes") {
            towerPortrait.setProperty(
                "src",
                `media/towerPortraits/${towerBlueprint.name}/${towerBlueprint.name}Portrait.png`
            );
        } else {
            towerPortrait.setProperty(
                "src",
                `media/towerPortraits/${towerBlueprint.name}/base/${towerBlueprint.name}Portrait.png`
            );
        }
        
        const cardElement = new Element("div").class("categoryContainerTowerCard")
            .children(titleContainer, towerPortrait)
        
        // if (towerBlueprint.upgrades !== undefined) {
            cardElement.onclick(() => {
                // popologyContext.createTower([0, 0, 0], "tower")
                // popologyContext.selectBlueprint();
                UiUpdates.upgradeSelection(popologyContext, category, towerBlueprint.name);
            })
        // }

        return cardElement
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
        return new Element("div")
            .class("towerUpgradeSelector")
            .children(pathTrackContainer, upgradeSelectorVisual, numberOverlay);
    }

    static towerNavBar(popologyContext, scrollVelocity) {
        let velocity = scrollVelocity;
        let isDragging = false;

        const backButton = new Element("button").class("grayButton").text("Back")
        backButton.onclick(() => {
            UiUpdates.mainScreen(popologyContext)
        })

        const titleContainer = new Element("div")
            .class("towerNavBarTitleContainer")
            .children(
                backButton,
                new Element("p")
                    .class("towerNavBarTitleContainerText", "mono")
                    .text("All Towers"),
                new Element("div")
                    .class("towerNavBarTitleContainerLine")
            );

        const buttonContainer = new Element("div")
            .class("towerNavBarButtonContainer")

        for (const category in popologyContext.directory.categories) {
            const categoryData = popologyContext.directory.categories[category]
            for (const towerName in categoryData.items) {
                const towerBlueprint = categoryData.items[towerName]

                const towerPortraitPath = category === "heroes"
                    ? `media/towerPortraits/${towerBlueprint.name}/${towerBlueprint.name}Portrait.png`
                    : `media/towerPortraits/${towerBlueprint.name}/base/${towerBlueprint.name}Portrait.png`;

                const button = new Element("button")
                    .class("towerNavBarButton")
                    .children(
                        new Element("img").class("towerNavBarButtonImage")
                            .setProperty("src", towerPortraitPath)
                    )
                    .onclick(() => {
                        if (startX <= lastX + 20 && startX >= lastX - 20) {
                            UiUpdates.upgradeSelection(popologyContext, category, towerName, buttonContainer.element.scrollLeft, velocity)
                        }
                    })

                buttonContainer.children(button)
            }
        }

        const buttonWrapper = new Element("div")
            .class("towerNavBarButtonContainerWrapper")
            .children(buttonContainer);

        let startX;
        let scrollLeft;
        let lastX;
        let momentumId;

        buttonContainer.element.addEventListener('mousedown', (event) => {
            isDragging = true;
            startX = event.pageX - buttonContainer.element.offsetLeft;
            scrollLeft = buttonContainer.element.scrollLeft;
            // navbarScrollPosition = buttonContainer.element.scrollLeft;
            lastX = startX;
            velocity = 0; // Reset velocity
            cancelAnimationFrame(momentumId); // Stop any ongoing momentum
        });

        // buttonContainer.element.addEventListener('mouseup', (event) => {
        //     buttonContainer.element.scrollLeft = 0
        // });

        // buttonContainer.element.scrollLeft = navbarScrollPosition;

        buttonContainer.element.addEventListener('mouseleave', () => {
            isDragging = false;
            startMomentum(); // Start momentum when leaving
        });

        buttonContainer.element.addEventListener('mouseup', () => {
            isDragging = false;
            startMomentum(); // Start momentum on mouse up
        });

        buttonContainer.element.addEventListener('mousemove', (event) => {
            if (!isDragging) return;
            event.preventDefault(); // Prevent text selection
            const x = event.pageX - buttonContainer.element.offsetLeft;
            const walk = x - startX; // Calculate distance moved
            velocity = (x - lastX) * 2;
            lastX = x; // Update last position
            buttonContainer.element.scrollLeft = scrollLeft - walk; // Scroll the content
        });

        // Function to start momentum scrolling
        function startMomentum() {
            if (Math.abs(velocity) > 1) { // Apply momentum if there's significant velocity
                momentumId = requestAnimationFrame(momentumScroll);
            }
        }

        // Momentum scrolling function
        function momentumScroll() {
            buttonContainer.element.scrollLeft += -velocity; // Apply the current velocity

            // Decay the velocity (adjust this factor to control how quickly it slows down)
            velocity *= 0.95;

            if (Math.abs(velocity) > 0.01) { // Continue if the velocity is still significant
                momentumId = requestAnimationFrame(momentumScroll);
            } else {
                cancelAnimationFrame(momentumId); // Stop when velocity is low
            }
        }

        // Wheel event for horizontal scroll
        buttonContainer.element.addEventListener('wheel', (event) => {
            event.preventDefault(); // Prevent default scrolling
            buttonContainer.element.scrollLeft += event.deltaY * 0.5; // Scroll horizontally
        });

        return new Element("div").class("towerNavBar")
            .children(titleContainer, buttonWrapper);
    }

    static towerPropertiesModule(towerProperties) {
        const title = new Element("h5").text("Tower properties");

        const statChipContainer = this.basicStatsContainerSmall(towerProperties.properties);

        return new Element("div").class("module", "towerPropertiesModule")
            .children(title, statChipContainer);
    }

    /**
     * @param {*} module - The module to display in this element
     * @param {*} tower_upgrade_object - The tower this module comes from
     * @param {*} conditionString
     * The condition under which this module is used (this is used for submodules) (ex. "on contact")
     * @param {*} tower - If this module is for an upgrade, pass in the tower to display fully calculated stats for some
     * properties
     * @param {*} useSecondaryModuleStyle
     * Whether to use a darker module style (this alternates as nested modules grow deeper)
     */
    static module(module, tower_upgrade_object, conditionString, tower = undefined, useSecondaryModuleStyle = false) {
        const damageStats = { "damage": undefined, "secondary": [] };
        const basicStats = [], booleanStats = [], submodules = {};

        for (let propertyName in MODULE_PROPERTIES) {
            if (MODULE_PROPERTIES[propertyName].category === "submodules") {
                submodules[propertyName] = [];
            }
        }

        module.properties.forEach(property => {
            switch (property.criteria.category) {
                case "damage":
                    if (module instanceof UpgradeModule) {
                        if (property.name === "damage") {
                            damageStats.damage = addAfterBuffValueToPropertyBuff(property, module, tower);
                        } else {
                            damageStats.secondary.push(addAfterBuffValueToPropertyBuff(property, module, tower));
                        }
                    } else {
                        if (property.name === "damage") {
                            damageStats.damage = property
                        } else {
                            damageStats.secondary.push(property);
                        }
                    }
                    break;
                case "basic":
                    if (Array.isArray(property.value)) {
                        basicStats.push(addAfterBuffValueToPropertyBuff(property, module, tower));
                    } else {
                        basicStats.push(property);
                    }
                    break;
                case "boolean":
                    booleanStats.push(property);
                    break;
                case "submodules":
                    submodules[property.name].push(property);
                    break;
            }
        });

        const moduleStatContainer = new Element("div").class("moduleStatContainer");

        if (damageStats.damage !== undefined && damageStats.damage.value !== undefined) {
            if (damageStats.secondary.length === 0) {
                basicStats.unshift(damageStats.damage);
            } else {
                moduleStatContainer.children(
                    UiElements.damageStatsContainer(damageStats)
                );
            }
        }

        const submoduleContainer = new Element("div").class("submoduleContainer");

        let submoduleExists = false;
        Object.entries(submodules).forEach(([key, properties]) => {
            properties.forEach(({ value }) => {
                value.forEach((val) => {
                    const matchingModules = tower_upgrade_object.modules.filter((module) => module.allValidNames.includes(val));
                    matchingModules.forEach((module) => {
                        const colon = MODULE_PROPERTIES[key].colon ? ":" : "";
                        submoduleExists = true;
                        submoduleContainer.children(
                            UiElements.module(module, tower_upgrade_object,
                                `${MODULE_PROPERTIES[key].displayName}${colon}`, tower,
                                !useSecondaryModuleStyle
                            )
                        );
                    });
                });
            });
        });

        if (basicStats.length !== 0) {
            moduleStatContainer.children(UiElements.basicStatsContainer(basicStats));
        }

        if (booleanStats.length !== 0) {
            moduleStatContainer.children(UiElements.basicStatsContainerSmall(booleanStats))
        }

        if (submoduleExists) {
            moduleStatContainer.children(submoduleContainer);
        }

        // Create and return module container
        const container = new Element("div").class("module", `${module.type}Module`)
            .children(
                UiElements.moduleTitle(module, conditionString),
                new Element("div").class("moduleDividingLine")
                    .children(new Element("div").class("moduleDividingLineHover")),
                moduleStatContainer
            );
        if (useSecondaryModuleStyle) container.class("secondaryModuleStyle")

        return container;
    }

    /**
     * Delivers a module title.
     * @param {*} module - The module to display in this element
     * @param {*} conditionString
     * The condition under which this module is used (this is used for submodules) (ex. "on contact")
     */
    static moduleTitle(module, conditionString) {
        const title = new Element("div").class("moduleTitle");

        if (conditionString !== undefined) {
            title.children(
                new Element("span").class("moduleCondition").text(`${conditionString} `)
            );
        }

        // Array of span elements for the title of this module
        const titleTextElements = [
            new Element("span").class("moduleName").text(`${module.name}`),
            document.createTextNode(" "),
            new Element("span").class("moduleType")
                .text(`${MODULE_TYPES[module.type].displayName}`)
        ]

        if (module instanceof UpgradeModule) {
            switch (module.action) {
                case "new":
                    if (conditionString === undefined) {
                        titleTextElements.unshift(document.createTextNode(" "));
                        titleTextElements.unshift(new Element("span").text("gains"));
                    }
                    break;
                case "buff":
                    titleTextElements.push(document.createTextNode(" "));
                    titleTextElements.push(new Element("span").text("buffed"));
                    break;
            }
        }

        title.children(...titleTextElements);

        return title;
    }

    /**
     * An element that displays damage stats for a module.
     * @param {*} damageStats
     * @returns
     */
    static damageStatsContainer(damageStats) {
        const input1 = ["damage", "Damage", statArrayToDisplayStat(damageStats.damage)];
        const input2 = [];
        damageStats.secondary.forEach(stat => {
            const statWithAddedBaseDamage = structuredClone(stat)
            if (statWithAddedBaseDamage.afterBuffValue === undefined) {
                statWithAddedBaseDamage.afterBuffValue = damageStats.damage.value + stat.value;
            // } else if () {
            } else {
                statWithAddedBaseDamage.afterBuffValue += damageStats.damage.afterBuffValue
            }

            input2.push([stat.name, stat.criteria.displayName, statArrayToDisplayStat(statWithAddedBaseDamage)]);
        });
        return UiElements.statContainer(input1, input2);
    }

    static basicStatsContainer(basicStats) {
        const basicStatsContainer = new Element("div")
            .class("statChipContainer");


        basicStats.forEach(stat => {
            basicStatsContainer.children(
                UiElements.statContainer(
                    [stat.name, stat.criteria.displayName, statArrayToDisplayStat(stat)]
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

        if (secondaryStats !== undefined) {
            if (secondaryStats.length !== 0) {
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

        return new Element("div")
            .class("statContainer").children(
                UiElements.statGroupSmall(mainStat)
                    .class("mainStatElement")
            );
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
        if (MODULE_PROPERTIES[stat[0]].type === "boolean" && stat[2] === true) {
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

            const card = UiElements.towerCard(
                `media/towerPortraits/wizardMonkey/${pathString}.png`,
                nameData[index].displayName,
                new TowerPath({path: path, upgrade: index}),
                context
            )

            container.children(card)
        })
        
        return container;
    }

    static towerCard(portraitFilepath, towerName, towerPath, context) {
        // console.log(portraitFilepath, towerName, index, path, context)
        const image = new Element("div").class("towerPortraitContainer")
            .children(
                new Element("img").class("towerPortrait")
                    .setProperty("src", portraitFilepath)
            )

        const titleContainer = new Element("div").class("towerTitleContainer")
            .children(
                new Element("h3").class("towerTitle", "luckiestGuy")
                    .text(towerName)
            )

        const towerButtonsContainer = new Element("div").class("towerButtonsContainer")

        const viewTowerButton = new Element("button").class("towerNavButton").children(
            document.createTextNode("View Tower"),
            new Element("span").class("material-symbols-outlined").text("arrow_forward_ios")
        )

        viewTowerButton.onclick(() => {
            context.path = towerPath
            UiUpdates.towerDisplay(context)
        })

        const viewUpgradeButton = new Element("button").class("towerNavButton").children(
            document.createTextNode("View Upgrade"),
            new Element("span").class("material-symbols-outlined").text("arrow_forward_ios")
        )

        viewUpgradeButton.onclick(() => {
            context.path = towerPath
            UiUpdates.upgradeDisplay(context)
        })

        towerButtonsContainer.children(viewTowerButton, viewUpgradeButton)

        return new Element("div").class("towerCard").children(
            image, titleContainer, /*towerCardChipContainer,*/ towerButtonsContainer
        )
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