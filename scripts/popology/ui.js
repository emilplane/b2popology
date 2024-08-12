import { MODULE_PROPERTIES, MODULE_TYPES, UI_CONSTANTS, WARNS } from "./constants.js"

export class PopologyUi {
    static createConfigPanel() {
        if (UI_CONSTANTS.CONFIG_PANEL.SHOW) {
            UI_CONSTANTS.CONFIG_PANEL.ELEMENT.appendChild(
                PopologyUi.Elements.towerUpgradeSelector().element
            )
        } else {
            UI_CONSTANTS.CONFIG_PANEL.ELEMENT.classList.add("hide")
        }
    }

    static updateBanner(name, crosspath, bottomText) {
        const BANNER = UI_CONSTANTS.BANNER

        const bannerTitleContainer = new Element("div").children(
                new Element(BANNER.TITLE_TEXT_SIZE).class("luckiestGuy").text(name).element
            )
        if (crosspath != undefined) {
            bannerTitleContainer.children(
                new Element(BANNER.CROSSPATH_TEXT_SIZE)
                    .class("luckiestGuy").text(BANNER.CROSSPATH_PREFIX + crosspath).element
            )
        }

        BANNER.ELEMENT.innerHTML = ""
        BANNER.ELEMENT.insertAdjacentElement("beforeend", bannerTitleContainer.element)
        if (bottomText != undefined) {
            BANNER.ELEMENT.insertAdjacentElement("beforeend",
                new Element("p").text(bottomText).class("mono", "big", "bannerBottomText").element
            )
        }
    }

    static generateModules(currentTower) {
        const towerPropertiesModule =
            currentTower.data.modules.find(item => item.name === "tower-properties")
        if (towerPropertiesModule) {
            UI_CONSTANTS.MODULES.COMTAINER_ELEMENT.appendChild(
                PopologyUi.Elements.towerPropertiesModule(towerPropertiesModule).element
            )
        } else {
            console.warn(WARNS.NO_TOWER_PROPERTIES_MODULE)
        }

        currentTower.data.modules.forEach((module) => {
            if (module.type == "attack") {
                UI_CONSTANTS.MODULES.COMTAINER_ELEMENT.appendChild(
                    PopologyUi.Elements.module(module, currentTower.data).element
                )
            }
        })
    }

    static Elements = class {
        static towerUpgradeSelector() {
            // Layer 1
            const pathTrackContainer = new Element("div").class("pathTrackContainer")
        
            for (let i = 0; i < 3; i++) {
                pathTrackContainer.children(new Element("div").class("pathTrack"))
            }
        
            //Layer 2
            const upgradeSelectorVisual = new Element("div").class("upgradeSelectorVisual")
        
            for (let i = 0; i < 3; i++) {
                upgradeSelectorVisual.children(
                    new Element("div").class("path", "position0").id(`path${i}`)
                )
            }
        
            // Layer 3
            const numberOverlay = new Element("div").class("numberOverlay")
        
            for (let i = 0; i < 3; i++) {
                const path = new Element("div").class("path")
        
                for (let j = 0; j < 6; j++) {
                    const upgradeNode = new Element("div")
                        .class("upgradeNode").id(`upgradeNode_${i}_${j}`).text(j)

                    if (j === 0) upgradeNode.class('selectedNode')
                    path.children(upgradeNode);
                }
        
                numberOverlay.children(path)
            }
            
            // Combine layers
            const container = new Element("div")
                .class("towerUpgradeSelector")
                .children(pathTrackContainer, upgradeSelectorVisual, numberOverlay)
            
            return container
        }

        static towerPropertiesModule (towerProperties) {
            const title = new Element("h5").text("Tower properties")

            const statChipContainer = this.basicStatsContainerSmall(towerProperties.properties)

            return new Element("div").class("module", "towerPropertiesModule")
                .children(title, statChipContainer)
        }

        static module(module, tower, conditionString) {
            const title = new Element("div").class("moduleTitle")

            if (conditionString != undefined) {
                title.children(
                    new Element("span").class("moduleCondition").text(`${conditionString} `)
                )
            }

            title.children(
                    new Element("span").class("moduleName").text(`${module.name}`),
                    document.createTextNode(" "),
                    new Element("span").class("moduleType")
                        .text(`${MODULE_TYPES[module.type].displayName}`)
                )

            const line = new Element("div").class("moduleDividingLine")
                .children(new Element("div").class("moduleDividingLineHover"))
            
            const damageStats = { "damage": undefined, "secondary": [] }
            const basicStats = []
            const submodules = {}
            for (let propertyName in MODULE_PROPERTIES) {
                if (MODULE_PROPERTIES[propertyName].category == "submodules") {
                    submodules[propertyName] = []
                }
            }

            module.properties.forEach(property => {
                switch (property.criteria.category) {
                    case "damage":
                        if (property.name == "damage") {
                            damageStats.damage = property
                        } else {
                            damageStats.secondary.push(property)
                        }
                        break;
                    case "basic":
                        basicStats.push(property)
                        break;
                    case "submodules":
                        submodules[property.name].push(property)
                        break;
                }
            });

            const moduleStatContainer = new Element("div").class("moduleStatContainer")

            if (damageStats.damage != undefined) {
                if (damageStats.damage.value != undefined) {
                    if (damageStats.secondary.length == 0) {
                        basicStats.unshift(damageStats.damage)
                    } else {
                        moduleStatContainer.children(
                            PopologyUi.Elements.damageStatsContainer(damageStats)
                        )
                    }
                }
            }

            const submoduleContainer = new Element("div").class("submoduleContainer")

            let submoduleExists = false
            Object.entries(submodules).forEach(([key, properties]) => {
                properties.forEach(({ value }) => {
                    value.forEach((val) => {
                        const matchingModules = tower.modules.filter((module) =>
                            module.allValidNames.includes(val)
                        );
            
                        matchingModules.forEach((module) => {
                            const colon = MODULE_PROPERTIES[key].colon ? ":" : ""
                            submoduleExists = true;
                            submoduleContainer.children(
                                PopologyUi.Elements.module(module, tower,
                                    `${MODULE_PROPERTIES[key].displayName}${colon}`
                                ).class("secondaryModuleStyle")
                            );
                        });
                    });
                });
            });
            
            if (basicStats.length != 0) {
                moduleStatContainer.children(PopologyUi.Elements.basicStatsContainer(basicStats))
            }

            if (submoduleExists) {
                moduleStatContainer.children(submoduleContainer);
            }

            return new Element("div").class("module", `${module.type}Module`)
                .children(title, line, moduleStatContainer)
        }

        static damageStatsContainer(damageStats) {
            const input1 = ["damage", "Damage", damageStats.damage.value]
            const input2 = []
            damageStats.secondary.forEach(stat => {
                input2.push([stat.name, stat.criteria.displayName, stat.value])
            })
            const damageContainer = PopologyUi.Elements.statContainer(input1, input2)
            return damageContainer
        }

        static basicStatsContainer(basicStats) {
            const basicStatsContainer = new Element("div")
                .class("statChipContainer")
            
            basicStats.forEach(stat => {
                let value = stat.value
                if (stat.criteria.showUnitByDefault) {
                    value += stat.criteria.unit
                }
                basicStatsContainer.children(
                    PopologyUi.Elements.statContainer(
                        [stat.name, stat.criteria.displayName, value],
                    )
                )
            })

            return basicStatsContainer
        }

        static basicStatsContainerSmall(basicStats) {
            const basicStatsContainer = new Element("div")
                .class("statChipContainer")
            
            basicStats.forEach(stat => {
                let value = stat.value
                if (stat.criteria.showUnitByDefault) {
                    value += stat.criteria.unit
                }
                basicStatsContainer.children(
                    PopologyUi.Elements.smallStatContainer(
                        [stat.name, stat.criteria.displayName, value],
                    )
                )
            })

            return basicStatsContainer
        }

        static statContainer(mainStat, secondaryStats) {
            // Arrays are laid out as: [statName, statDisplayName, statValue]
            let secondaryStatsExist = false

            if (secondaryStats != undefined) {
                if (secondaryStats.length != 0) {
                    secondaryStatsExist = true
                }
            }
            
            const dividingLine = new Element("div").class("statDividingLine")

            const secondaryStatsContainer = new Element("div")
                .class("secondaryStatsContainer")
            
            if (secondaryStatsExist) { secondaryStats.forEach((stat) => {
                secondaryStatsContainer.children(
                    PopologyUi.Elements.statGroup(stat)
                )
            })}

            const container = new Element("div")
                .class("statContainer").children(
                    PopologyUi.Elements.statGroup(mainStat)
                        .class("mainStatElement")
                )

            if (secondaryStatsExist) {
                container.children(dividingLine, secondaryStatsContainer)
            }

            return container
        }

        static smallStatContainer(mainStat, secondaryStats) {
            // Arrays are laid out as: [statName, statDisplayName, statValue]
            if (secondaryStats) { console.warn(WARNS.NOT_IMPLEMENTED) }

            const container = new Element("div")
                .class("statContainer").children(
                    PopologyUi.Elements.statGroupSmall(mainStat)
                        .class("mainStatElement")
                )

            return container
        }

        static statGroup(stat) {
            const statTitleContainer = new Element("div")
                .class("statTitleContainer")
                .children(new Element("h4").text(stat[2]))

            if (MODULE_PROPERTIES[stat[0]].icon) {
                const icon = new Element("img")
                    .setProperty(
                        "src",
                        `media/propertyIcons/${stat[0]}.png`
                    )
                    .class("statIcon")
                statTitleContainer.children(icon)
            }

            return new Element("div")
                .class("statGroup").children(
                statTitleContainer,
                new Element("p").text(stat[1])
            )
        }

        static statGroupSmall(stat) {
            if (MODULE_PROPERTIES[stat[0]].type == "boolean" && stat[2] == true) {
                return new Element("p").text(`${stat[1]}`)
            }
            return new Element("p").text(`${stat[1]}: ${stat[2]}`)
        }
    }
}

class Element {
    constructor(tagName) {
        this.element = document.createElement(tagName)
    }

    class() {
        for (const className of arguments) {
            this.element.classList.add(className)
        }
        return this
    }

    children() {
        for (const child of arguments) {
            if (child instanceof Element) {
                this.element.appendChild(
                    child.element
                )
            } else {
                this.element.appendChild(child)
            }
        }
        return this
    }

    text(text) {
        this.element.innerText = text
        return this
    }

    id(id) {
        this.element.id = id
        return this
    }

    setProperty(key, value) {
        this.element[key] = value
        return this
    }
}