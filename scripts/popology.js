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

logErrors = false

let towerData = {};

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
        } else {
            output.crosspathPath = 2
            output.crosspathPathName = "bottom"
            output.crosspathPathValue = path[2]
        }
    } else if (path[1] > path[2]) {
        output.mainPath = 1
        output.mainPathName = "middle"
        output.mainPathValue = path[1]
        if (path[0] > path[2]) {
            output.crosspathPath = 0
            output.crosspathPathName = "top"
            output.crosspathPathValue = path[0]
        } else {
            output.crosspathPath = 2
            output.crosspathPathName = "bottom"
            output.crosspathPathValue = path[2]
        }
    } else {
        output.mainPath = 2
        output.mainPathName = "bottom"
        output.mainPathValue = path[2]
        if (path[0] > path[1]) {
            output.crosspathPath = 0
            output.crosspathPathName = "top"
            output.crosspathPathValue = path[0]
        } else {
            output.crosspathPath = 1
            output.crosspathPathName = "middle"
            output.crosspathPathValue = path[1]
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

class Tower {
    constructor(towerObject) {
        this.tower = towerObject;
    }

    getFullTower(crosspath) {
        let generatedTower = {
            "modules": [],
            "otherData": undefined
        };
        let initialModuleSet = new ModuleSet(this.tower.upgrades.base)
        for (let i = 0; i < getPathingData(crosspath).mainPathValue; i++) {
            initialModuleSet.mergeSet(new ModuleSet(towerData.primary.dartMonkey.upgrades.top[1]))
            initialModuleSet.mergeSet(new ModuleSet(towerData.primary.dartMonkey.upgrades.middle[1]))
        }
        console.log(initialModuleSet)
    }
}

class ModuleSet {
    constructor(moduleSet) {
        this.moduleSet = moduleSet;
    }

    mergeSet(buffModuleSetData) {
        for (let buffModuleNumber in buffModuleSetData.moduleSet) {
            for (let initialModuleNumber in this.moduleSet) {
                if (
                    this.moduleSet[initialModuleNumber].name == buffModuleSetData.moduleSet[buffModuleNumber].name 
                    || this.moduleSet[initialModuleNumber].name == buffModuleSetData.moduleSet[buffModuleNumber].replacingName
                ) {
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
                let previousModule = this.module
                this.module = structuredClone(buffModule.module)
                this.module.moduleType[1] = "new"
                delete this.module.replacingName
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
            <div style="display: flex; flex-direction: column; gap: 16px">
                <section class="roundedBoxSection">
                    <div>
                        <h3 class="luckiestGuy">Tower Costs</h3>
                        <div class="horizontalLine"></div>
                        <div style="display: flex; gap: 32px">
                            <div>
                                <h5>Upgrade Cost</h5>
                                <p>$999,999</p>
                            </div>
                            <div>
                                <h5>Total Cost</h5>
                                <p>$999,999</p>
                            </div>
                            <div>
                                <h5>Sell Cost</h5>
                                <p>$999,999</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="roundedBoxSection">
                    <div>
                        <h3 class="luckiestGuy"><span class="slightTextEmphasis">Ultrajugg</span> attack</h3>
                        <div class="horizontalLine"></div>
                        <div style="display: flex; gap: 32px">
                            <div>
                                <h5>Upgrade Cost</h5>
                                <p>$999,999</p>
                            </div>
                            <div>
                                <h5>Total Cost</h5>
                                <p>$999,999</p>
                            </div>
                            <div>
                                <h5>Sell Cost</h5>
                                <p>$999,999</p>
                            </div>
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

    updateTopBanner()

    updateConfigurationBar()

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
                background-image: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), url('media/Tower Banners/dartMonkey/banner1Original.png');
                @media (prefers-color-scheme: dark) {
                    background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url('media/Tower Banners/dartMonkey/banner1Original.png');
                }
            }
        </style>
    `)

    let towerNameHTML = `No Tower Name`
    if (towerData[category][page].data != false && typeof towerData[category][page].displayName == "string") {
        towerNameHTML = towerData[category][page].displayName
    }

    console.log(crosspath)
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

let category = "primary"; let page = "dartMonkey"; let type = "fullTower"; let crosspath = [0, 0, 0]

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    await getTowerJSON()
    console.log(towerData)
    let tower = new Tower(towerData.primary.dartMonkey)
    console.log(tower.getFullTower([2, 0, 0]))
    //placeSkeleton()
    //updatePage("initial")
}

main()