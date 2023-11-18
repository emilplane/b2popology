import { Tower } from "/scripts/popology/moduleSystem.js"
import { getPathingData, numberPathNameConversion, getTowerCostData } from "./popology/conversions.js"
import getData from "./request.js"

class PopologyHTML {
    static skeletonHTML = `
    <div class="coverImage" id="coverImage"></div>
    <style id="coverImageStyle"></style>
    <div class="statsPageWrapper">
        <div class="statsPageBody" id="statsPageBody">

        </div>
    </div>
    `

    static navigationHTML = `
        <div class="headerStyle" id="header">
            <h4 class="luckiestGuy">Battles 2 Popology</h4>
            <div style="display: flex; gap: 16px; margin-left: auto">
                <h5>Home</h5>
                <h5 style="text-decoration: underline 2px;text-underline-offset: 2px;">Popology</h5>
                <h5>Eco Sim</h5>
                <h5>Credits</h5>
            </div>
        </div>
    `

    static configurationBarHTML = `<div class="headerStyle configurationBar" id="configurationBar"></div>`

    static titleSectionHTML = `<section class="titleSection" id="titleSection"></section>`

    static mainStatsSectionHTML = `
        <div class="mainStatsSection" id="mainStatsSection">
            <div class="mainStatsFlex" id="mainStatsFlex">
                
            </div>
        </div>
    `

    static coreTowerHTML = `
        <div class="coreTowerSection" id="coreTowerStats">
            ${PopologyHTML.getStatSectionHTML(
                "Prices",
                [],
                ``,
                [["id", "towerCosts"]]
            )}
        </div>
    `

    static towerSidebarHTML = `
        <section class="roundedBoxSection towerSidebar">
            <div class="towerPortraitWrapper">
                <img class="towerPortrait" src="/media/Tower Portraits/dartMonkey/base/dartMonkeyPortrait.png"/>
            </div>
            <div class="towerSidebarContent">
                <div class="horizontalLine"></div>
                <p>Last updated: 11/14/2023</p>
            </div>
        </section>
    `

    static getStatSectionHTML(title, sectionGlobalAttributes, contentHTML, mainGlobalAttributes) {
        let sectionGlobalAttributesString = ``
        for (let attributeNumber in sectionGlobalAttributes) {
            sectionGlobalAttributesString += ` ${sectionGlobalAttributes[attributeNumber][0]}="${sectionGlobalAttributes[attributeNumber][1]}"`
        }
        let mainGlobalAttributesString = ``
        for (let attributeNumber in mainGlobalAttributes) {
            mainGlobalAttributesString += ` ${mainGlobalAttributes[attributeNumber][0]}="${mainGlobalAttributes[attributeNumber][1]}"`
        }
        return `
            <section class="roundedBoxSection" ${sectionGlobalAttributesString}>
                <h4>${title}</h4>
                <div class="horizontalLine"></div>
                <div class="standardTowerStatsContainer" ${mainGlobalAttributesString}>${contentHTML}</div>
            </section>
        `
    }

    static configurationBarItem(title, content) {
        return `
            <div class="configurationBarTextSelectorWrapper">
                <h6>${title}</h6>
                ${content}
            </div>
        `
    }
    static addToConfigurationBar(data) {
        let configurationBarHTML = ``
        for (let dataPoint in data) {
            configurationBarHTML += PopologyHTML.configurationBarItem(data[dataPoint][0], data[dataPoint][1])
        }
        document.getElementById("configurationBar").innerHTML = configurationBarHTML
    }

    static generateSelectContents(data) {
        let output = ``
        for (let optionNumber in data) {
            let selectedString = ``
            if (data[optionNumber][2] == true) {selectedString = ` selected`}
            output += `<option value="${data[optionNumber][1]}"${selectedString}>${data[optionNumber][0]}</option>`
        }
        return output
    }

    static updateConfigurationBar() {
        let categoryHTML = ``
        let categoryPosition
        for (let categoryNumber in towerDirectory) {
            if (category == towerDirectory[categoryNumber].name) {
                categoryPosition = categoryNumber
                categoryHTML += `<option value="${towerDirectory[categoryNumber].name}" selected>${towerDirectory[categoryNumber].displayName}</option>`
            } else {
                categoryHTML += `<option value="${towerDirectory[categoryNumber].name}">${towerDirectory[categoryNumber].displayName}</option>`
            }
        }

        let towerHTML = ``
        for (let towerNumber in towerDirectory[categoryPosition].data) {
            let selectedString = ``;
            if (page == towerDirectory[categoryPosition].data[towerNumber].name) {
                selectedString = "selected"
            }
            let displayNameString = ``
            let displayNameData = towerData[category][towerDirectory[categoryPosition].data[towerNumber].name].displayName
            if (displayNameData == undefined) {
                displayNameString = towerDirectory[categoryPosition].data[towerNumber].name
            } else {
                displayNameString = towerData[category][towerDirectory[categoryPosition].data[towerNumber].name].displayName
            }
            towerHTML += `<option value="${towerDirectory[categoryPosition].data[towerNumber].name}" ${selectedString}>${displayNameString}</option>`
        }

        let pathSelectHTML = `<h5>No Path Data</h5>`;
        if (towerData[category][page].error == false) {
            pathSelectHTML = ``
            for (let pathNumber in config.pathConfig.pathNames) {
                let pathName = config.pathConfig.pathNames[pathNumber]
                pathSelectHTML += `<select id="${pathName}PathSelect">`
                let optionArray = []
                for (let upgrade in towerData[category][page].upgrades[pathName]) {
                    optionArray.push([Number(upgrade)+1, Number(upgrade)+1, (crosspath[0] == Number(upgrade)+1)])
                }
                optionArray.unshift([0, 0, false])
                pathSelectHTML += PopologyHTML.generateSelectContents(optionArray) + `</select>`
            }
        }

        PopologyHTML.addToConfigurationBar(
            [
                ["Category",
                    `<select id="categorySelect">
                        ${categoryHTML}
                    </select>`
                ],
                ["Tower",
                    `<select id="pageSelect">
                        ${towerHTML}
                    </select>`
                ],
                ["Type",
                    `<button>Full Tower</button>`
                ],
                ["Path",
                    `<div style="display:flex;gap:4px">
                        ${pathSelectHTML}
                    </div>`
                ]
            ]
        )
    }
    static addConfigurationBarEventListeners() {
        document.getElementById("categorySelect").addEventListener("change", function() {
            category = document.getElementById("categorySelect").value
            updatePage("category")
        });
        document.getElementById("pageSelect").addEventListener("change", function() {
            page = document.getElementById("pageSelect").value
            updatePage("page")
        });
        if (towerData[category][page].data != false && !towerData[category][page].error) {
            document.getElementById("topPathSelect").addEventListener("change", function() {
                crosspath[0] = Number(document.getElementById("topPathSelect").value)
                updatePage("crosspath")
            });
            document.getElementById("middlePathSelect").addEventListener("change", function() {
                crosspath[1] = Number(document.getElementById("middlePathSelect").value)
                updatePage("crosspath")
            });
            document.getElementById("bottomPathSelect").addEventListener("change", function() {
                crosspath[2] = Number(document.getElementById("bottomPathSelect").value)
                updatePage("crosspath")
            });
        }
    }

    static getSimplePropertyHTML(propertyData, module, parentPropertyData) {
        switch (propertyData.valueData.valueType) {
            case "number":
                if (propertyData.relationshipToMain != undefined) { if (propertyData.relationshipToMain[0] == true) {
                    let buffString = 
                        Tower.getNumberData(null, module [propertyData.name], propertyData.relationshipToMain[1]).operator
                        + Tower.getNumberData(null, module [propertyData.name], propertyData.relationshipToMain[1]).buffValue
                    let totalString = 
                        Tower.calculateNumbers(module [parentPropertyData.name], module [propertyData.name], propertyData.relationshipToMain[1])
                    return `
                        <div class="infoBox">
                            <h6>${propertyData.displayName}</h6>
                            <p>
                                ${buffString}
                                (${totalString})
                            </p>
                        </div>
                    `
                }}
                return `
                    <div class="infoBox">
                        <h6>${propertyData.displayName}</h6>
                        <p>${module [propertyData.name]}</p>
                    </div>
                `
            case "string": 
                return `
                    <div class="infoBox">
                        <h6>${propertyData.displayName}</h6>
                        <p>${module [propertyData.name]}</p>
                    </div>
                `
            case "boolean": 
                return `
                    <div class="infoBox">
                        <h6>${propertyData.displayName}</h6>
                        <p>${module [propertyData.name]}</p>
                    </div>
                `
            case "default": 
                return ``
        }
    }    

    static setInnerHTML(name, id) {
        document.getElementById(id).innerHTML = PopologyHTML[name]
    }

    static insertAdjacent(name, id) {
        if (typeof name == "string") {
            document.getElementById(id).insertAdjacentHTML("beforeend", PopologyHTML[name])
        } else {
            for (let item in name) {
                document.getElementById(id).insertAdjacentHTML("beforeend", PopologyHTML[name[item]])
            }
        }
    }
}

let towerData = {};
let config;
let towerDirectory;

async function getConfigJSON() {
    let data = await getData(`https://raw.githubusercontent.com/emilplane/b2popology/newpopology/json/config.json`)
    if (data.error == false) {
        config = data.data
        console.log(config)
    }
}

async function getTowerDirectoryJSON() {
    let data = await getData(`https://raw.githubusercontent.com/emilplane/b2popology/newpopology/json/towerDirectory.json`)
    if (data.error == false) {
        towerDirectory = data.data
    }
}

async function getTowerJSON() {
    for (let towerCategory in towerDirectory) {
        towerData[towerDirectory[towerCategory].name] = {}
        for (let tower in towerDirectory[towerCategory].data) {
            towerData[towerDirectory[towerCategory].name][towerDirectory[towerCategory].data[tower].name] = {"data": false, "reason": "data not recieved"}
            let data = await getData(`https://raw.githubusercontent.com/emilplane/b2popology/newpopology/json/Towers/${towerDirectory[towerCategory].data[tower].name}.json`)
            if (data.error == false) {
                towerData [towerDirectory[towerCategory].name] [towerDirectory[towerCategory].data[tower].name] = data.data
                towerData [towerDirectory[towerCategory].name] [towerDirectory[towerCategory].data[tower].name].error = false
            } else {
                towerData[towerDirectory[towerCategory].name][towerDirectory[towerCategory].data[tower].name] = {"error": true, "displayName": towerDirectory[towerCategory].data[tower].name, "reason": "data could not be fetched"}
                if(config.console.errors==true){console.log(`Data failed to load!\n\nTower: ${towerDirectory[towerCategory].data[tower].displayName}\nStatus code: ${data.status}`)}
            }
        }
    }
};

function updatePage(change) {
    if (change == "category") {
        for (let categoryNumber in towerDirectory) {
            if (category == towerDirectory[categoryNumber].name) {
                page = towerDirectory[categoryNumber].data[0].name
            }
        }
    }

    PopologyHTML.setInnerHTML("skeletonHTML", "main")
    PopologyHTML.insertAdjacent(
        ["navigationHTML", "configurationBarHTML", "titleSectionHTML", "mainStatsSectionHTML"],
        "statsPageBody"
    )
    PopologyHTML.insertAdjacent(
        ["coreTowerHTML", "towerSidebarHTML"],
        "mainStatsFlex"
    )

    PopologyHTML.updateConfigurationBar()

    updateTopBanner()

    if (!towerData[category][page].error) {
        updateCostStats()
        updateTowerStats()
    }

    PopologyHTML.addConfigurationBarEventListeners()
};

function updateTopBanner() {
    if (towerData[category][page].error == true) {
        return false
    }
    document.getElementById("coverImageStyle").outerHTML = (`
        <style id="coverImageStyle">
            .coverImage {
                background-image: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), url('media/Tower Banners/dartMonkey/banner1Original2.png');
                @media (prefers-color-scheme: dark) {
                    background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url('media/Tower Banners/dartMonkey/banner1Original2.png');
                }
            }
        </style>
    `)

    let towerNameHTML = `No Tower Name`
    if (towerData[category][page].data != false && typeof towerData[category][page].displayName == "string") {
        towerNameHTML = towerData[category][page].displayName
    }

    let crosspathHTML = `${crosspath[0]}${crosspath[1]}${crosspath[2]}`

    let upgradeNameHTML = `Base ${towerData[category][page].displayName}`
    if (getPathingData(crosspath).hasMainPath == true) {
        upgradeNameHTML = towerData [category] [page] .upgradeNames [numberPathNameConversion([getPathingData(crosspath).mainPath])] [getPathingData(crosspath).mainPathValue - 1] .displayName
    }
    let crosspathNameHTML = ``
    if (getPathingData(crosspath).hasCrosspath == true) {
        crosspathNameHTML = `
            <h4 class="luckiestGuy luckiestGuyShadow" style="padding-bottom: 4px;">
                w/${towerData [category] [page] .upgradeNames [numberPathNameConversion([getPathingData(crosspath).crosspathPath])] [getPathingData(crosspath).crosspathPathValue - 1] .displayName}
            </h4>
        `
    }

    document.getElementById("titleSection").innerHTML = `
        <div style="display: flex; gap: 32px; align-items: end;">
            <h1 class="luckiestGuy luckiestGuyShadow largeText2">${upgradeNameHTML}</h1>
            ${crosspathNameHTML}
        </div>
        <div style="display: flex; gap: 32px">
            <h3 class="luckiestGuy luckiestGuyShadow">${towerNameHTML}</h3>
            <h3 class="luckiestGuy luckiestGuyShadow">${crosspathHTML}</h3>
        </div>
    `
}

function updateCostStats() {
    let towerCostData = getTowerCostData(towerData[category][page], crosspath)
    if (towerCostData != undefined) {
        document.getElementById("towerCosts").innerHTML = `
            <div class="infoBox">
                <h6>Upgrade Cost</h6>
                <p>$${towerCostData.upgradeCost}</p>
            </div>
            <div class="infoBox">
                <h6>Total Cost</h6>
                <p>$${towerCostData.totalCost}</p>
            </div>
            <div class="infoBox">
                <h6>Sell Cost</h6>
                <p>$${towerCostData.sellCost}</p>
            </div>
            <div class="infoBox">
                <h6>Loss on Sell</h6>
                <p>$${towerCostData.sellCostLoss}</p>
            </div> 
        `
    } else {
        document.getElementById("towerCosts").innerHTML = `
            <h6>Failed to load data!</h6>
        `
    }
    
}

function updateTowerStats() {
    let towerObject = new Tower(towerData[category][page], crosspath, config)
    console.log(towerObject)
    let moduleSet = towerObject.modules
    let towerStatsHTML = ``
    let propertiesHTML = ``
    if (towerObject.towerStats.range != undefined) {
        propertiesHTML = propertiesHTML + `
            <div class="infoBox">
                <h6>Tower Range</h6>
                <p>${towerObject.towerStats.range}r</p>
            </div>
        `
    }
    if (towerObject.towerStats.size[0] == "radius") {
        propertiesHTML = propertiesHTML + `
            <div class="infoBox">
                <h6>Tower Size</h6>
                <p>${towerObject.towerStats.size[1]}r</p>
            </div>
        `
    }
    towerStatsHTML = PopologyHTML.getStatSectionHTML("Tower Stats", [], propertiesHTML, [])
    let statsHTML = ``
    for (let module in moduleSet) {
        let propertiesHTML = ``
        let propertyTypesHTML = {}
        for (let groupNumber in config.HTMLGroups) {
            propertyTypesHTML[config.HTMLGroups[groupNumber]] = ``
        }
        console.log(propertyTypesHTML)
        for (let property in config.properties) {
            if (moduleSet [module] [config.properties[property].name] != undefined) {
                switch (config.properties[property].type) {
                    case "simpleValue":
                        propertiesHTML = propertiesHTML + PopologyHTML.getSimplePropertyHTML(config.properties[property], moduleSet[module])
                        for (let subvalueNumber in config.properties[property].subvalues) {
                            if (moduleSet [module] [config.properties[property].subvalues[subvalueNumber].name] != undefined) {
                                propertiesHTML = propertiesHTML + PopologyHTML.getSimplePropertyHTML(
                                    config.properties[property].subvalues[subvalueNumber],
                                    moduleSet[module],
                                    config.properties[property]
                                )
                                propertyTypesHTML
                            }
                        }
                        break
                }
            }
        }
        statsHTML = statsHTML + `
            <section class="roundedBoxSection">
                <h4><span class="slightTextEmphasis italicEmphasis">${moduleSet[module].name}</span> ${moduleSet[module].moduleType[0]}</h4>
                <div class="horizontalLine"></div>
                <div class="standardTowerStatsContainer">
                    ${propertiesHTML}
                </div>
            </section>
        `
    }
    document.getElementById("coreTowerStats").insertAdjacentHTML("beforeend", towerStatsHTML)
    document.getElementById("mainStatsSection").insertAdjacentHTML("beforeend", statsHTML)
}

let category = "primary"; let page = "dartMonkey"; let type = "fullTower"; let crosspath = [0, 0, 0]

async function main() {
    await getConfigJSON()
    await getTowerDirectoryJSON()
    await getTowerJSON()
    console.log(towerData)
    updatePage("initial")
}

main()