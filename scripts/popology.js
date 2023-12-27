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
                {
                    "title": "Prices",
                    "mainGlobalAttributes": [["class", "standardTowerStatsContainer"], ["id", "towerCosts"]]
                }
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
                <p>Last updated: 11/24/2023</p>
            </div>
        </section>
    `

    static updateTopBanner() {
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

    static getStatSectionHTML(sectionConfig) {
        let title = sectionConfig.title
        let details;
        if (sectionConfig.details==undefined) {details=""}
        else {details = `<div class="rightSidePush">${sectionConfig.details}</div>`}
        let sectionGlobalAttributes = sectionConfig.sectionGlobalAttributes
        let contentHTML = sectionConfig.contentHTML
        let mainGlobalAttributes = sectionConfig.mainGlobalAttributes

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
                <div class="roundedBoxSectionTitleBar">
                    <h4>${title}</h4>
                    ${details}
                </div>
                <div class="horizontalLine"></div>
                <div ${mainGlobalAttributesString}>${contentHTML}</div>
            </section>
        `
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

    static addToConfigurationBar(data) {
        for (let dataPoint in data) {
            let configurationBarItem = document.createElement("div")
            configurationBarItem.classList.add("configurationBarTextSelectorWrapper")
            let itemTitle = document.createElement("h6")
            itemTitle.textContent = data[dataPoint][0]
            configurationBarItem.insertAdjacentElement("beforeend", itemTitle)
            configurationBarItem.insertAdjacentElement("beforeend", data[dataPoint][1])
            if (data[dataPoint][2] == "push") {
                configurationBarItem.classList.add("configBarPush")
            }
            document.getElementById("configurationBar").insertAdjacentElement("beforeend", configurationBarItem)
        }
    }

    static updateConfigurationBar() {
        let categoryPosition
        let categoryOptions = []
        for (let categoryNumber in towerDirectory) {
            let option = document.createElement("option")
            option.textContent = towerDirectory[categoryNumber].displayName
            categoryOptions.push(option)
            if (category == towerDirectory[categoryNumber].name) {
                categoryPosition = categoryNumber
                option.value = "selected"
            }
        }
        let categoryElement = document.createElement("select")
        categoryElement.id = "categorySelect"
        for (let objectIndex in categoryOptions) {
            categoryElement.insertAdjacentElement("beforeend", categoryOptions[objectIndex])
        }

        let towerOptions = []
        for (let towerNumber in towerDirectory[categoryPosition].data) {
            let option = document.createElement("option")
            let displayName = towerData[category][towerDirectory[categoryPosition].data[towerNumber].name].displayName
            option.textContent = displayName
            if (displayName == undefined) {
                option.textContent = towerDirectory[categoryPosition].data[towerNumber].name
            }
            towerOptions.push(option)
            if (category == towerDirectory[categoryPosition].data[towerNumber].name) {
                categoryPosition = categoryNumber
                option.value = "selected"
            }
        }
        let towerElement = document.createElement("select")
        towerElement.id = "pageSelect"
        for (let objectIndex in towerOptions) {
            towerElement.insertAdjacentElement("beforeend", towerOptions[objectIndex])
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

        let pathSelectElement = document.createElement("div")
        pathSelectElement.classList.add("configPathContainer")
        for (let pathNumber in config.pathConfig.pathNames) {
            let pathName = config.pathConfig.pathNames[pathNumber]
            let thisPathElement = document.createElement("div")
            thisPathElement.classList.add("configSinglePathContainer")
            for (let i = 0; i <= config.pathConfig.upgrades; i++) {
                let thisButton = document.createElement("button")
                switch (i) {
                    case 0:                             thisButton.classList.add("pathStart");  break
                    case config.pathConfig.upgrades:    thisButton.classList.add("pathEnd");    break
                }
                thisButton.id = `${pathName}Path${i}`
                let thisText = document.createElement("h6")
                thisText.textContent = i
                thisButton.insertAdjacentElement("beforeend", thisText)
                thisPathElement.insertAdjacentElement("beforeend", thisButton)
            }
            pathSelectElement.insertAdjacentElement("beforeend", thisPathElement)
        }

        let settingsButton = document.createElement("button")
        settingsButton.id = "settings"
        settingsButton.classList.add("iconButton")
        let settingsIcon = document.createElement("span")
        settingsIcon.classList.add("material-symbols-outlined")
        settingsIcon.textContent = "tune"
        settingsButton.insertAdjacentElement("beforeend", settingsIcon)

        PopologyHTML.addToConfigurationBar(
            [
                ["Category", categoryElement],
                ["Tower", towerElement],
                ["Path", pathSelectElement],
                [null, settingsButton, "push"],
            ]
        )
        for (let pathNumber in config.pathConfig.pathNames) {
            let pathName = config.pathConfig.pathNames[pathNumber]
            document.getElementById(`${pathName}Path${crosspath[pathNumber]}`).classList.add("selected")
        }
    }
    
    static addConfigurationBarEventListeners() {
        document.getElementById("categorySelect").addEventListener("change", function() {
            category = document.getElementById("categorySelect").value
            updatePage("category")
        })
        document.getElementById("pageSelect").addEventListener("change", function() {
            page = document.getElementById("pageSelect").value
            updatePage("page")
        })
        if (towerData[category][page].data != false && !towerData[category][page].error) {
            for (let pathNumber in config.pathConfig.pathNames) {
                let pathName = config.pathConfig.pathNames[pathNumber]
                for (let i = 0; i <= config.pathConfig.upgrades; i++) {
                    document.getElementById(`${pathName}Path${i}`).addEventListener("click", function() {
                        crosspath[pathNumber] = i
                        updatePage("crosspath")
                    })
                }
            }
        }
        document.getElementById("settings").addEventListener("click", function() {
            document.getElementById("settingsDialog").showModal()
        })
        document.getElementById("settingsClose").addEventListener("click", function() {
            document.getElementById("settingsDialog").close()
        })
    }
    static updateCostStats() {
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

    static updateTowerStats() {
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
        towerStatsHTML = PopologyHTML.getStatSectionHTML(
            {
                "title": "Tower Stats",
                "contentHTML": propertiesHTML,
                "mainGlobalAttributes": [["class", "standardTowerStatsContainer"]]
            }
        )
        
        let statsHTML = ``
        for (let module in moduleSet) {
            let propertyTypesHTMLData = {}
            let details = ""

            for (let groupNumber in config.HTMLGroups) {
                propertyTypesHTMLData[config.HTMLGroups[groupNumber]] = ``
            }
            for (let property in config.properties) {
                if (config.properties[property].name == "mainAttack" && moduleSet [module] [config.properties[property].name] == true) {
                    console.log(moduleSet [module] [config.properties[property].name])
                    details = "<h6>main attack</h6>"
                } else {
                    if (moduleSet [module] [config.properties[property].name] != undefined) {
                        PopologyHTML.propertyTypeSwitch(moduleSet, module, config.properties[property], propertyTypesHTMLData)
                    }
                }
            }
            for (let HTMLGroupName in propertyTypesHTMLData) {
                switch (HTMLGroupName) {
                    default:
                        propertyTypesHTMLData[HTMLGroupName] = propertyTypesHTMLData[HTMLGroupName]
                        break
                }
            }

            let typeString
            if (moduleSet[module].ability != undefined) {
                switch (moduleSet[module].moduleType[0]) {
                    case "transform": 
                        typeString = `${moduleSet[module].moduleType[0]} ability`
                        break
                    default:
                        typeString = "ability"
                        break
                }
            } else {
                typeString = moduleSet[module].moduleType[0]
            }
            
            let contentHTML = ``
            for (let key in propertyTypesHTMLData) {
                if (propertyTypesHTMLData[key] != ``) {
                    contentHTML += `<div class="standardTowerStatsContainer">${propertyTypesHTMLData[key]}</div>`
                }
            }
            
            statsHTML += PopologyHTML.getStatSectionHTML(
                {
                    "title": `<span class="slightTextEmphasis italicEmphasis">${moduleSet[module].name}</span> ${typeString}`,
                    "details": details,
                    "contentHTML": contentHTML,
                    "mainGlobalAttributes": [["class", "moduleTowerStats"]]
                }
            )
        }
        document.getElementById("coreTowerStats").insertAdjacentHTML("beforeend", towerStatsHTML)
        document.getElementById("mainStatsSection").insertAdjacentHTML("beforeend", statsHTML)
    }

    static conditionString(condition) {
        if (typeof condition == "object") {
            switch (condition[0]) {
                case "pierceUsed": return `${Tower.sayCalculation(condition[1])} pierce used`
            }
        }
        switch (condition) {
            case "expire": return condition
        }
    }

    static propertyTypeSwitch(moduleSet, module, propertyData, propertyTypesHTMLData) {
        switch (propertyData.type) {
            case "simpleValue":
                propertyTypesHTMLData.simple += PopologyHTML.getSimplePropertyHTML(propertyData, moduleSet[module])
                for (let subvalueNumber in propertyData.subvalues) {
                    if (moduleSet [module] [propertyData.subvalues[subvalueNumber].name] != undefined) {
                        propertyTypesHTMLData.simple += PopologyHTML.getSimplePropertyHTML(
                            propertyData.subvalues[subvalueNumber],
                            moduleSet[module],
                            propertyData
                        )
                    }
                }
                break
            case "effect":
                for (let effectNumber in moduleSet [module] [propertyData.name]) {
                    let conditionString = ``
                    for (let conditionNumber in moduleSet [module] [propertyData.name][effectNumber].condition.data) {
                        if (conditionString == ``) {
                            conditionString += PopologyHTML.conditionString(moduleSet [module] [propertyData.name][effectNumber].condition.data[conditionNumber])
                        } else {
                            conditionString += " or " + PopologyHTML.conditionString(moduleSet [module] [propertyData.name][effectNumber].condition.data[conditionNumber])
                        }
                    }
                    let emittedProjectileString = moduleSet [module] [propertyData.name][effectNumber].result
                    propertyTypesHTMLData.effects += `
                        <div class="infoBox">
                            <p>On ${conditionString}:</p>
                            <h6>emit <span class="slightTextEmphasis italicEmphasis">${emittedProjectileString}</span></h6>
                        </div>
                    `
                }
                break
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
}

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

    PopologyHTML.updateTopBanner()

    if (!towerData[category][page].error) {
        PopologyHTML.updateCostStats()
        PopologyHTML.updateTowerStats()
    }

    PopologyHTML.addConfigurationBarEventListeners()
}

let category = "primary"; let page = "dartMonkey"; let crosspath = [0, 0, 0]

async function main() {
    await getConfigJSON()
    await getTowerDirectoryJSON()
    await getTowerJSON()
    console.log(towerData)
    updatePage("initial")
}

main()