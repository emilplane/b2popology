import { getPathingData } from "/scripts/popology/conversions.js"
import getData from "/scripts/request.js"

async function getConfigJSON() {
    let data = await getData(`https://raw.githubusercontent.com/emilplane/b2popology/newpopology/json/config.json`)
    if (data.error == false) {
        config = data.data
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

function simpleNumberBuff(initial, buff, defaultOperator) {
    if (initial == undefined) {initial = 0}
    if (buff == Infinity || buff == "Infinity" || buff == "infinity") {
        return Infinity
    }
    let buffValue = buff; let operator = defaultOperator
    if (defaultOperator == undefined) {defaultOperator = "absolute"}
    if (typeof buff == "object") {
        buffValue = buff[1]; operator = buff[0]
    }
    switch (operator) {
        case "+": return initial+buffValue;
        case "-": return initial-buffValue;
        case "*": return ((initial*1000)*buffValue)/1000;
        case "%": return ((initial*1000)*(buffValue+1))/1000;
        case "/": if(buffValue==0){return 0}; return initial/buffValue;
        case "absolute": return buffValue;
        case Infinity: case "Infinity": case "infinity": return Infinity;
    }
}

export class Tower {
    constructor(allTowersData, category, page) {
        this.allTowersData = structuredClone(allTowersData);
        this.tower = structuredClone(allTowersData[category][page]);
        this.category = category; this.page = page
    }

    getFullTower(crosspath, fullTowerSet) {
        if (this.tower.error) {return {"error": true}}
        let towerStats = []
        let initialModuleSet = new ModuleSet(this.tower.upgrades.base)
        for (let i = 0; i < getPathingData(crosspath).mainPathValue; i++) {
            let upgradeModuleSet = new ModuleSet(structuredClone(fullTowerSet[this.category][this.page].upgrades[getPathingData(crosspath).mainPathName][i]))
            initialModuleSet.mergeSet(upgradeModuleSet)
            for (let dataNumber in initialModuleSet.towerStatsOut) {
                towerStats.push(initialModuleSet.towerStatsOut[dataNumber])
            }
        }
        for (let i = 0; i < getPathingData(crosspath).crosspathPathValue; i++) {
            let upgradeModuleSet = new ModuleSet(structuredClone(fullTowerSet[this.category][this.page].upgrades[getPathingData(crosspath).crosspathPathName][i]))
            initialModuleSet.mergeSet(upgradeModuleSet)
            for (let dataNumber in initialModuleSet.towerStatsOut) {
                towerStats.push(initialModuleSet.towerStatsOut[dataNumber])
            }
        }
        let output = {
            "range": this.tower.range,
            "size": this.tower.size,
            "modules": initialModuleSet.moduleSet
        }
        for (let dataNumber in towerStats) {
            if (towerStats[dataNumber].moduleType[0] == "rangeBuff") {
                output.range = simpleNumberBuff(output.range, towerStats[dataNumber].value)
            }
        }
        return output
    }
}

export class ModuleSet {
    constructor(moduleSet) {
        this.moduleSet = moduleSet;
    }

    mergeSet(buffModuleSetData) {
        this.towerStatsOut = []
        for (let buffModuleNumber in buffModuleSetData.moduleSet) {
            if (buffModuleSetData.moduleSet[buffModuleNumber].moduleType[0] == "rangeBuff") {
                this.towerStatsOut.push(buffModuleSetData.moduleSet[buffModuleNumber])
            } else {
                for (let initialModuleNumber in this.moduleSet) {
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
                    console.log(buffModuleSetData.moduleSet[buffModuleNumber])
                }
            }
        }
    }
}

export class Module {
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