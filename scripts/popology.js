const towerDirectory = [
    {
        "name": "primary", 
        "displayName": "Primary",
        "type": "tower", 
        "data": [
            {
                "name": "dartMonkey", 
                "displayName": "Dart Monkey",
                "enabled": true
            },
            {
                "name": "boomerangMonkey",
                "displayName": "Boomerang Monkey",
                "enabled": true
            },
            {
                "name": "bombShooter",
                "displayName": "Bomb Shooter",
                "enabled": true
            },
            {
                "name": "tackShooter",
                "displayName": "Tack Shooter",
                "enabled": true
            },
            {
                "name": "iceMonkey",
                "displayName": "Ice Monkey",
                "enabled": true
            },
            {
                "name": "glueGunner",
                "displayName": "Glue Gunner",
                "enabled": true
            }
        ]
    },
    {
        "name": "military", 
        "displayName": "Military",
        "type": "tower", 
        "data": [
            {
                "name": "sniperMonkey",
                "displayName": "Sniper Monkey",
                "enabled": true
            },
            {
                "name": "monkeySub",
                "displayName": "Monkey Sub",
                "enabled": true
            },
            {
                "name": "monkeyBuccaneer",
                "displayName": "Monkey Buccaneer",
                "enabled": true
            },
            {
                "name": "monkeyAce",
                "displayName": "Monkey Ace",
                "enabled": true
            },
            {
                "name": "heliPilot",
                "displayName": "Heli Pilot",
                "enabled": true
            },
            {
                "name": "mortarMonkey",
                "displayName": "Mortar Monkey",
                "enabled": true
            },
            {
                "name": "dartlingGunner",
                "displayName": "Dartling Gunner",
                "enabled": true
            }
        ]
    }
]

const config = {
    "properties": [
        {
            "name": "damage",
            "displayName": "Damage", 
            "type": ["simple", "number", "+"]
        },
        {
            "name": "ceramicDamage",
            "displayName": "Ceramic Damage", 
            "type": ["simple", "number", "+"]
        },
        {
            "name": "moabDamage",
            "displayName": "MOAB Damage", 
            "type": ["simple", "number", "+"]
        },
        {
            "name": "leadDamage",
            "displayName": "Lead Damage", 
            "type": ["simple", "number", "+"]
        },
        {
            "name": "pierce",
            "displayName": "Pierce", 
            "type": ["simple", "number", "+"]
        },
        {
            "name": "attackCooldown",
            "displayName": "Attack Cooldown", 
            "type": ["simple", "number", "*"]
        }
    ]
}

logErrors = false

const towerData = {};

async function getTowerJSON() {
    for (towerCategory in towerDirectory) {
        towerData[towerDirectory[towerCategory].name] = {}
        for (tower in towerDirectory[towerCategory].data) {
            towerData[towerDirectory[towerCategory].name][towerDirectory[towerCategory].data[tower].name] = {"data": false, "reason": "data not recieved"}
            try {
                const requestURL = `https://raw.githubusercontent.com/emilplane/b2popology/main/json/Towers/${towerDirectory[towerCategory].data[tower].name}.json`;
                const request = new Request(requestURL);
                
                const response = await fetch(request);
                let string = await response.json();
                towerData[towerDirectory[towerCategory].name][towerDirectory[towerCategory].data[tower].name] = string
            } catch (error) {
                if(logErrors==true){console.log(`Data failed to load!\n\nTower: ${towerDirectory[towerCategory].data[tower].displayName}\nError: ${error}`)}
                towerData[towerDirectory[towerCategory].name][towerDirectory[towerCategory].data[tower].name] = {"data": false, "reason": "data could not be fetched"}
            }
            
        }
    }
};

function getPathingData(path) {
    let output = {
        "originalValues": path
    };

    if (path[0] > path[1] && path[0] > path[2]) {
        output.mainPath = 0
        output.mainPathName = "top"
        output.mainPathValue = path[0]
        if (path[1] > path[2]) {
            output.crosspathPath = 1
            output.crosspathPathName = "middle"
            output.crosspathPathValue = path[1]
            output.lastPath = 2
            output.lastPathName = "bottom"
            output.lastPathValue = path[2]
        } else {
            output.crosspathPath = 2
            output.crosspathPathName = "bottom"
            output.crosspathPathValue = path[2]
            output.lastPath = 1
            output.lastPathName = "middle"
            output.lastPathValue = path[1]
        }
    } else if (path[1] > path[2]) {
        output.mainPath = 1
        output.mainPathName = "middle"
        output.mainPathValue = path[1]
        if (path[0] > path[2]) {
            output.crosspathPath = 0
            output.crosspathPathName = "top"
            output.crosspathPathValue = path[0]
            output.lastPath = 2
            output.lastPathName = "bottom"
            output.lastPathValue = path[2]
        } else {
            output.crosspathPath = 2
            output.crosspathPathName = "bottom"
            output.crosspathPathValue = path[2]
            output.lastPath = 0
            output.lastPathName = "top"
            output.lastPathValue = path[0]
        }
    } else {
        output.mainPath = 2
        output.mainPathName = "bottom"
        output.mainPathValue = path[2]
        if (path[0] > path[1]) {
            output.crosspathPath = 0
            output.crosspathPathName = "top"
            output.crosspathPathValue = path[0]
            output.lastPath = 1
            output.lastPathName = "middle"
            output.lastPathValue = path[1]
        } else {
            output.crosspathPath = 1
            output.crosspathPathName = "middle"
            output.crosspathPathValue = path[1]
            output.lastPath = 0
            output.lastPathName = "top"
            output.lastPathValue = path[0]
        }
    }

    if (output.mainPathValue == 0) {
        output.hasMainPath = false
    } else {
        output.hasMainPath = true
    }

    if (output.crosspathPathValue == 0) {
        output.hasCrosspath = false
    } else {
        output.hasCrosspath = true
    }

    if (output.crosspathPathValue == 0) {
        output.hasLastPath = false
    } else {
        output.hasLastPath = true
    }

    return output
}

function numberPathNameConversion(data) {
    if (typeof data == "string") {
        if (data == "top") {return 0}
        if (data == "middle") {return 1}
        if (data == "bottom") {return 2}
    } else {
        if (data == 0) {return "top"}
        if (data == 1) {return "middle"}
        if (data == 2) {return "bottom"}
    }
}

function getTowerCostData(tower, crosspath, sellModifier) {
    let output = {};

    output.upgradeCost = tower.costs[getPathingData(crosspath).mainPathName][getPathingData(crosspath).mainPathValue-1]
    if (getPathingData(crosspath).hasMainPath == false) {
        output.upgradeCost = tower.costs.base
    }

    output.totalCost = tower.costs.base
    for (let i = 0; i < getPathingData(crosspath).mainPathValue; i++) {
        output.totalCost = output.totalCost + tower.costs[getPathingData(crosspath).mainPathName][i]
    }
    for (let i = 0; i < getPathingData(crosspath).crosspathPathValue; i++) {
        output.totalCost = output.totalCost + tower.costs[getPathingData(crosspath).crosspathPathName][i]
    }
    for (let i = 0; i < getPathingData(crosspath).lastPathValue; i++) {
        output.totalCost = output.totalCost + tower.costs[getPathingData(crosspath).lastPathName][i]
    }

    if (sellModifier == undefined) {
        output.sellCost = (output.totalCost*100 *0.7 /100); output.sellCostLoss = (output.totalCost*100 *0.3 /100)
    }

    return output
}

class Tower {
    constructor(towerObject) {
        this.tower = structuredClone(towerObject);
    }

    getFullTower(crosspath) {
        let initialModuleSet = new ModuleSet(this.tower.upgrades.base)
        for (let i = 0; i < getPathingData(crosspath).mainPathValue; i++) {
            let upgradeModuleSet = new ModuleSet(structuredClone(towerData.primary.dartMonkey.upgrades[getPathingData(crosspath).mainPathName][i]))
            initialModuleSet.mergeSet(upgradeModuleSet)
        }
        for (let i = 0; i < getPathingData(crosspath).crosspathPathValue; i++) {
            let upgradeModuleSet = new ModuleSet(structuredClone(towerData.primary.dartMonkey.upgrades[getPathingData(crosspath).crosspathPathName][i]))
            initialModuleSet.mergeSet(upgradeModuleSet)
        }
        return initialModuleSet
    }
}

class ModuleSet {
    constructor(moduleSet) {
        this.moduleSet = moduleSet;
    }

    mergeSet(buffModuleSetData) {
        for (let buffModuleNumber in buffModuleSetData.moduleSet) {
            for (let initialModuleNumber in this.moduleSet) {
                console.log(buffModuleSetData.moduleSet[buffModuleNumber])
                console.log(this.moduleSet[initialModuleNumber])
                let moduleMatch = false
                if (this.moduleSet[initialModuleNumber].name == buffModuleSetData.moduleSet[buffModuleNumber].name) {moduleMatch = true}
                if (this.moduleSet[initialModuleNumber].name == buffModuleSetData.moduleSet[buffModuleNumber].replacingName) {moduleMatch = true}
                if (!(this.moduleSet[initialModuleNumber].previousNames == [] || this.moduleSet[initialModuleNumber].previousNames == undefined)) {
                    for (let previousName in this.moduleSet[initialModuleNumber].previousNames) {
                        if (this.moduleSet[initialModuleNumber].previousNames[previousName] == buffModuleSetData.moduleSet[buffModuleNumber].name) {moduleMatch = true}
                    }
                }   
                if (moduleMatch == true) {
                    let initialModule = new Module(this.moduleSet[initialModuleNumber])
                    let buffModule = new Module(buffModuleSetData.moduleSet[buffModuleNumber])
                    initialModule.merge(buffModule)
                    this.moduleSet[initialModuleNumber] = initialModule.module
                }
            }
            if (buffModuleSetData.moduleSet[buffModuleNumber].moduleType[1] == "new") {
                this.moduleSet.push(buffModuleSetData.moduleSet[buffModuleNumber])
            }
        }
    }
}

function simpleNumberBuff(initial, buff, defaultOperator) {
    if (initial == undefined) {initial = 0}
    if (buff == Infinity || buff == "Infinity" || buff == "infinity") {
        return Infinity
    }
    let buffValue = buff; let operator = defaultOperator
    if (typeof buff == "object") {
        buffValue = buff[1]; operator = buff[0]
    }
    switch (operator) {
        case "+": return initial+buffValue;
        case "-": return initial-buffValue;
        case "*": return ((initial*1000)*buffValue)/1000;
        case "/": if(buffValue==0){return 0}; return initial/buffValue;
        case "absolute": return buffValue;
        case Infinity: case "Infinity": case "infinity": return Infinity;
    }
}

const properties = [
    {"name": "damage",          "displayName": "Damage",                "type": "number",   "defaultOperator": "+"          },
    {"name": "moabDamage",      "displayName": "MOAB Damage",           "type": "number",   "defaultOperator": "+"          },
    {"name": "fortifiedDamage", "displayName": "Fortified Damage",      "type": "number",   "defaultOperator": "+"          },
    {"name": "forfifiedMoabDamage","displayName": "Fortified MOAB Damage","type": "number", "defaultOperator": "+"          },
    {"name": "ceramicDamage",   "displayName": "Ceramic Damage",        "type": "number",   "defaultOperator": "+"          },
    {"name": "leadDamage",      "displayName": "Lead Damage",           "type": "number",   "defaultOperator": "+"          },
    {"name": "camoDamage",      "displayName": "Camo Damage",           "type": "number",   "defaultOperator": "+"          },
    {"name": "frozenDamage",    "displayName": "Frozen Damage",         "type": "number",   "defaultOperator": "+"          },
    {"name": "stunnedBloonDamage","displayName": "Stunned Bloon Damage","type": "number",   "defaultOperator": "+"          },
    {"name": "projectiles",     "displayName": "Projectiles",           "type": "number",   "defaultOperator": "absolute"   },
    {"name": "spread",          "displayName": "Spread",                "type": "number",   "defaultOperator": "absolute"   },
    {"name": "pierce",          "displayName": "Pierce",                "type": "number",   "defaultOperator": "+"          },
    {"name": "impact",          "displayName": "Impact",                "type": "boolean",  "defaultValue": "false"         },
    {"name": "attackCooldown",  "displayName": "Attack Cooldown",       "type": "number",   "defaultOperator": "*"          },
]

const propertyTypes = {
    "number": function(main, buff, property) {
        main.module[property.name] = simpleNumberBuff(
            main.module[property.name],
            buff[property.name], property.defaultOperator
        )
    },
    "boolean": function(main, buff, property) {
        main.module[property.name] = buff[property.name]
    }
}

class Module {
    constructor(module) {
        this.module = module;
    }

    merge(buffModule) {
        let buff = buffModule.module
        switch (buff.moduleType[1]) {
            case "buff":
                for (let propertyNumber in properties) {
                    let property = properties[propertyNumber]
                    if (buff[property.name] != undefined) {
                        propertyTypes[property.type](this, buff, property)
                    }
                }
                return this;
            case "replace":
                let previousModule = structuredClone(this.module)
                this.module = structuredClone(buffModule.module)
                this.module.moduleType[1] = "new"
                delete this.module.replacingName
                if (previousModule.previousNames == undefined) {
                    this.module.previousNames = []
                } else {
                    this.module.previousNames = previousModule.previousNames
                }
                this.module.previousNames.push(previousModule.name)
        }   
        return undefined
    }
}

function placeSkeleton() {
    document.getElementById("main").innerHTML = `
    <div class="coverImage" id="coverImage"></div>
    <style id="coverImageStyle"></style>
    <div class="statsPageWrapper">
        <div style="max-width: 1500px; margin: 0 auto; padding: 16px;">
            <section class="baseSection" id="baseSection">
                
            </section>
            <div class="configurationBar" id="configurationBar">
                
            </div>
            <div style="display: flex; flex-direction: column; gap: 16px" id="mainStatsSection">
                <section class="roundedBoxSection">
                    <div>
                        <h3 class="luckiestGuy">Tower Costs</h3>
                        <div class="horizontalLine"></div>
                        <div style="display: flex; gap: 32px" id="towerCosts">
                            
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
    `
}

function updatePage(change) {
    if (change == "category") {
        for (categoryNumber in towerDirectory) {
            if (category == towerDirectory[categoryNumber].name) {
                page = towerDirectory[categoryNumber].data[0].name
            }
        }
    }

    placeSkeleton()

    updateTopBanner()

    updateConfigurationBar()

    updateCostStats()

    updateTowerStats()

    document.getElementById("categorySelect").addEventListener("change", function() {
        category = document.getElementById("categorySelect").value
        updatePage("category")
    });
    document.getElementById("pageSelect").addEventListener("change", function() {
        page = document.getElementById("pageSelect").value
        updatePage("page")
    });
    if (towerData[category][page].data != false) {
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
    for (categoryNumber in towerDirectory) {
        if (category == towerDirectory[categoryNumber].name) {
            categoryPosition = categoryNumber
            categoryHTML = categoryHTML + `<option value="${towerDirectory[categoryNumber].name}" selected>${towerDirectory[categoryNumber].displayName}</option>`
        } else {
            categoryHTML = categoryHTML + `<option value="${towerDirectory[categoryNumber].name}">${towerDirectory[categoryNumber].displayName}</option>`
        }
    }

    let towerHTML = ``
    for (towerNumber in towerDirectory[categoryPosition].data) {
        if (page == towerDirectory[categoryPosition].data[towerNumber].name) {
            towerHTML = towerHTML + `<option value="${towerDirectory[categoryPosition].data[towerNumber].name}" selected>${towerDirectory[categoryPosition].data[towerNumber].displayName}</option>`
        } else {
            towerHTML = towerHTML + `<option value="${towerDirectory[categoryPosition].data[towerNumber].name}">${towerDirectory[categoryPosition].data[towerNumber].displayName}</option>`
        }
    }

    let pathSelectHTML = `<h5>No Path Data</h5>`;
    if (towerData[category][page].data != false) {
        pathSelectHTML = `<h5>Path:</h5><select id="topPathSelect"><option value="0">0</option>`
        for (upgrade in towerData[category][page].upgrades.top) {
            if (crosspath[0] == Number(upgrade)+1) {
                pathSelectHTML = pathSelectHTML + `<option value="${Number(upgrade)+1}" selected>${Number(upgrade)+1}</option>`
            } else {
                pathSelectHTML = pathSelectHTML + `<option value="${Number(upgrade)+1}">${Number(upgrade)+1}</option>`
            }
        }
        pathSelectHTML = pathSelectHTML + `</select><select id="middlePathSelect"><option value="0">0</option>`
        for (upgrade in towerData[category][page].upgrades.middle) {
            if (crosspath[1] == Number(upgrade)+1) {
                pathSelectHTML = pathSelectHTML + `<option value="${Number(upgrade)+1}" selected>${Number(upgrade)+1}</option>`
            } else {
                pathSelectHTML = pathSelectHTML + `<option value="${Number(upgrade)+1}">${Number(upgrade)+1}</option>`
            }
        }
        pathSelectHTML = pathSelectHTML + `</select><select id="bottomPathSelect"><option value="0">0</option>`
        for (upgrade in towerData[category][page].upgrades.bottom) {
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
            <h5>Category:</h5>
            <select id="categorySelect">
                ${categoryHTML}
            </select>
        </div>
        <div class="configurationBarTextSelectorWrapper">
            <h5>Tower:</h5>
            <select id="pageSelect">
                ${towerHTML}
            </select>
        </div>
        <div class="configurationBarTextSelectorWrapper">
            <h5>Type:</h5>
            <button>Upgrade Info</button>
        </div>
        <div class="configurationBarTextSelectorWrapper">
            ${pathSelectHTML}
        </div>
    `)
}

function updateCostStats() {
    document.getElementById("towerCosts").innerHTML = `
        <div>
            <h5>Upgrade Cost</h5>
            <p>$${getTowerCostData(towerData.primary[page], crosspath).upgradeCost}</p>
        </div>
        <div>
            <h5>Total Cost</h5>
            <p>$${getTowerCostData(towerData.primary[page], crosspath).totalCost}</p>
        </div>
        <div>
            <h5>Sell Cost</h5>
            <p>$${getTowerCostData(towerData.primary[page], crosspath).sellCost}</p>
        </div>
        <div>
            <h5>Loss on Sell</h5>
            <p>$${getTowerCostData(towerData.primary[page], crosspath).sellCostLoss}</p>
        </div> 
    `
}

function updateTowerStats() {
    let towerObject = new Tower(towerData[category][page]).getFullTower(crosspath)
    console.log(towerObject)
    let statsHTML = ``
    for (module in towerObject.moduleSet) {
        let propertiesHTML = ``
        for (property in config.properties) {
            if (towerObject.moduleSet [module] [config.properties[property].name] != undefined) {
                switch (config.properties[property].type[1]) {
                    case "number":
                        propertiesHTML = propertiesHTML + `
                            <div>
                                <h5>${config.properties[property].displayName}</h5>
                                <p>${towerObject.moduleSet [module] [config.properties[property].name]}</p>
                            </div>
                        `
                        break;
                }
            }
        }
        statsHTML = statsHTML + `
            <section class="roundedBoxSection">
                <h3 class="luckiestGuy"><span class="slightTextEmphasis">${towerObject.moduleSet[module].name}</span> attack</h3>
                <div class="horizontalLine"></div>
                <div style="display: flex; gap: 32px">
                    ${propertiesHTML}
                </div>
            </section>
        `
    }

    document.getElementById("mainStatsSection").insertAdjacentHTML("beforeend", statsHTML)
}

let category = "primary"; let page = "dartMonkey"; let type = "fullTower"; let crosspath = [0, 0, 0]

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    await getTowerJSON()
    console.log(towerData)
    updatePage("initial")
}

main()