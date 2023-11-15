import { Tower } from "/scripts/popology/moduleSystem.js"
import { getPathingData, numberPathNameConversion, getTowerCostData } from "./popology/conversions.js"
import getData from "./request.js"

let towerData = {};
let config;
let towerDirectory;

async function getConfigJSON() {
    let data = await getData(`https://raw.githubusercontent.com/emilplane/b2popology/newpopology/json/config.json`)
    if (data.error == false) {
        config = data.data
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

function placeSkeleton() {
    document.getElementById("main").innerHTML = `
    <div class="coverImage" id="coverImage"></div>
    <style id="coverImageStyle"></style>
    <div class="statsPageWrapper">
        <div style="max-width: 1500px; margin: 0 auto; padding: 16px;">
            <div class="headerStyle">
                <h4 class="luckiestGuy">Battles 2 Popology</h4>
                <div style="display: flex; gap: 16px; margin-left: auto">
                    <h5>Home</h5>
                    <h5 style="text-decoration: underline 2px;text-underline-offset: 2px;">Popology</h5>
                    <h5>Eco Sim</h5>
                    <h5>Credits</h5>
                </div>
            </div>
            <div class="headerStyle configurationBar" id="configurationBar">
                
            </div>
            <section class="baseSection" id="baseSection">
                
            </section>
            <div style="display: flex; flex-direction: column; gap: 16px" id="mainStatsSection">
                <div style="display:flex; gap: 12px; align-items:start">
                    <div class="coreTowerSection" id="coreTowerStats">
                        <section class="roundedBoxSection">
                            <h4>Prices</h4>
                            <div class="horizontalLine"></div>
                            <div class="standardTowerStatsContainer" id="towerCosts"></div>
                        </section>
                    </div>
                    <section class="roundedBoxSection towerSidebar">
                        <div class="towerPortraitWrapper">
                            <img class="towerPortrait" src="/media/Tower Portraits/dartMonkey/base/dartMonkeyPortrait.png"/>
                        </div>
                        <div class="towerSidebarContent">
                            <div class="horizontalLine"></div>
                            <p>Last updated: 11/14/2023</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
    `
}

function updatePage(change) {
    if (change == "category") {
        for (let categoryNumber in towerDirectory) {
            if (category == towerDirectory[categoryNumber].name) {
                page = towerDirectory[categoryNumber].data[0].name
            }
        }
    }

    placeSkeleton()

    updateTopBanner()

    updateConfigurationBar()

    if (!towerData[category][page].error) {
        updateCostStats()
        updateTowerStats()
    }

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
};

function updateTopBanner() {
    if (towerData[category][page].error == true) {
        return
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

    document.getElementById("baseSection").innerHTML = `
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

function updateConfigurationBar() {
    let categoryHTML = ``
    let categoryPosition
    for (let categoryNumber in towerDirectory) {
        if (category == towerDirectory[categoryNumber].name) {
            categoryPosition = categoryNumber
            categoryHTML = categoryHTML + `<option value="${towerDirectory[categoryNumber].name}" selected>${towerDirectory[categoryNumber].displayName}</option>`
        } else {
            categoryHTML = categoryHTML + `<option value="${towerDirectory[categoryNumber].name}">${towerDirectory[categoryNumber].displayName}</option>`
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
        towerHTML = towerHTML + `<option value="${towerDirectory[categoryPosition].data[towerNumber].name}" ${selectedString}>${displayNameString}</option>`
    }

    let pathSelectHTML = `<h5>No Path Data</h5>`;
    if (towerData[category][page].error == false) {
        pathSelectHTML = `<select id="topPathSelect"><option value="0">0</option>`
        for (let upgrade in towerData[category][page].upgrades.top) {
            if (crosspath[0] == Number(upgrade)+1) {
                pathSelectHTML = pathSelectHTML + `<option value="${Number(upgrade)+1}" selected>${Number(upgrade)+1}</option>`
            } else {
                pathSelectHTML = pathSelectHTML + `<option value="${Number(upgrade)+1}">${Number(upgrade)+1}</option>`
            }
        }
        pathSelectHTML = pathSelectHTML + `</select><select id="middlePathSelect"><option value="0">0</option>`
        for (let upgrade in towerData[category][page].upgrades.middle) {
            if (crosspath[1] == Number(upgrade)+1) {
                pathSelectHTML = pathSelectHTML + `<option value="${Number(upgrade)+1}" selected>${Number(upgrade)+1}</option>`
            } else {
                pathSelectHTML = pathSelectHTML + `<option value="${Number(upgrade)+1}">${Number(upgrade)+1}</option>`
            }
        }
        pathSelectHTML = pathSelectHTML + `</select><select id="bottomPathSelect"><option value="0">0</option>`
        for (let upgrade in towerData[category][page].upgrades.bottom) {
            if (crosspath[2] == Number(upgrade)+1) {
                pathSelectHTML = pathSelectHTML + `<option value="${Number(upgrade)+1}" selected>${Number(upgrade)+1}</option>`
            } else {
                pathSelectHTML = pathSelectHTML + `<option value="${Number(upgrade)+1}">${Number(upgrade)+1}</option>`
            }
        }
        pathSelectHTML = pathSelectHTML + `</select>`
    }

    document.getElementById("configurationBar").innerHTML = (`
        <div class="configurationBarTextSelectorWrapper">
            <h6>Category</h6>
            <select id="categorySelect">
                ${categoryHTML}
            </select>
        </div>
        <div class="configurationBarTextSelectorWrapper">
            <h6>Tower</h6>
            <select id="pageSelect">
                ${towerHTML}
            </select>
        </div>
        <div class="configurationBarTextSelectorWrapper">
            <h6>Type</h6>
            <button>Full Tower</button>
        </div>
        <div class="configurationBarTextSelectorWrapper">
            <h6>Path</h6>
            <div style="display:flex;gap:4px">
                ${pathSelectHTML}
            </div>
        </div>
    `)
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
    let towerObject = new Tower(towerData[category][page], crosspath)
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
    towerStatsHTML = `
        <section class="roundedBoxSection">
            <h4>Tower Stats</h4>
            <div class="horizontalLine"></div>
            <div class="standardTowerStatsContainer">
                ${propertiesHTML}
            </div>
        </section>
    `
    let statsHTML = ``
    for (let module in moduleSet) {
        let propertiesHTML = ``
        for (let property in config.properties) {
            if (moduleSet [module] [config.properties[property].name] != undefined) {
                switch (config.properties[property].valueData.valueType) {
                    case "number":
                        propertiesHTML = propertiesHTML + `
                            <div class="infoBox">
                                <h6>${config.properties[property].displayName}</h6>
                                <p>${moduleSet [module] [config.properties[property].name]}</p>
                            </div>
                        `
                        break;
                }
                for (let subvalueNumber in config.properties[property].subvalues) {
                    if (moduleSet [module] [config.properties[property].subvalues[subvalueNumber].name] != undefined) {
                        switch (config.properties[property].valueData.valueType) {
                            case "number":
                                propertiesHTML = propertiesHTML + `
                                    <div class="infoBox">
                                        <h6>${config.properties[property].subvalues[subvalueNumber].displayName}</h6>
                                        <p>${moduleSet [module] [config.properties[property].name]}</p>
                                    </div>
                                `
                                break;
                        }
                    }
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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    await getConfigJSON()
    await getTowerDirectoryJSON()
    await getTowerJSON()
    console.log(towerData)
    updatePage("initial")
}

main()