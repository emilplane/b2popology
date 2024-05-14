import popologyText from "./popologyText.mjs";
import switchBetweenOperators from "./utilities/switchBetweenOperators.mjs";

const propertyList = {
    "damage": {
        "type": "number",
        "shorthand": "d",
        "mainStatsList": true
    },
    "pierce": {
        "type": "number",
        "shorthand": "p",
        "mainStatsList": true
    },
    "impact": {
        "type": "boolean",
    },
    "attackCooldown": {
        "type": "number",
        "shorthand": "s",
        "mainStatsList": true
    },
    "rebound": {
        "type": "boolean",
        "trueText": "can rebound off of walls"
    }
}

export class Tower {
    constructor(towerData) {
        this.towerData = towerData
    }

    /**
     * Get the internal name of this tower. 
     * If you want the name that should be displayed to the user, use 
     * getDisplayName().
     * @returns the internal name of the tower.
     */
    getName() {
        return this.towerData.name
    }

    /**
     * Get the display name of the tower - the name that is displayed to the 
     * user. 
     * @returns the display name.
     */
    getDisplayName() {
        return this.towerData.displayName
    }

    getUpgradeText(isBaseUpgrade, path, upgrade) {
        return new popologyText(
            "upgrade",
            this.getTowerUpgrade(isBaseUpgrade, path, upgrade), propertyList
        ).getUpgradeText().plainText()
    }

    getConstructedTowerText() {

    }

    /**
     * Returns the stats of a specific tower upgrade, including the base tower 
     * "upgrade".
     * @param {boolean} isBaseUpgrade
     * True to return the base tower upgrade, otherwise false. 
     * @param {number} path
     * The path of the desired upgrade, 0-indexed (0 for top path, 1 for middle 
     * path, 2 for bottom path). Optional if the base upgrade is being requested
     * instead.
     * @param {number} upgrade 
     * The upgrade tier, 0-indexed (0 for tier 1, 1 for tier 2, etc.). Optional 
     * if the base upgrade is being requested instead.
     * @returns 
     */
    getTowerUpgrade(isBaseUpgrade, path, upgrade) {
        if (isBaseUpgrade) { return this.towerData.upgrades.base }
        return this.towerData.upgrades.paths[path][upgrade]
    }

    /**
     * Returns a tower with upgrades applied to it.
     * @param {array} fullPath 
     * The upgrades of the tower, formatted as: [2, 3, 0]
     * @returns 
     */
    getConstructedTower(fullPath) {
        let currentConstructedTower = new Tower.ConstructedTower(this.towerData.upgrades)
        currentConstructedTower.addUpgrade(this.getTowerUpgrade(true))
        this.addFullPathUpgradesInOrder(fullPath, (path, upgrade) => {
            currentConstructedTower.addUpgrade(this.getTowerUpgrade(false, path, upgrade))
        })
        return currentConstructedTower
    }

    addFullPathUpgradesInOrder(fullPath, addUpgrade) {
        if (!Array.isArray(fullPath)) {return false}
        if (fullPath[0] > fullPath[1] || fullPath[0] > fullPath[2]) {
            for (let i = 0; i < fullPath[0]; i++) {
                addUpgrade(0, i)
            }
        } else if (fullPath[1] > fullPath[2]) {
            for (let i = 0; i < fullPath[1]; i++) {
                addUpgrade(1, i)
            }
        } else {
            for (let i = 0; i < fullPath[2]; i++) {
                addUpgrade(2, i)
            }
        }
    }

    static ConstructedTower = class {
        constructor() {
            this.modules = new Tower.TowerModules()
        }

        addUpgrade(upgradeData) {
            for (let moduleIndex in upgradeData) {
                this.modules.addModule(upgradeData[moduleIndex])
            }
        }
    }

    static TowerModules = class {
        constructor () {
            this.moduleList = []
        }

        addModule(incomingModuleData) {
            let targetModule;
            let moduleList = this.moduleList
            switch (incomingModuleData.action) {
                case "new":
                    // Check to make sure that there is not already a module with the same name
                    for (let moduleIndex in this.moduleList) {
                        if (this.moduleList[moduleIndex].name == incomingModuleData.name) {
                            throw new Error("testError")
                        }
                    }

                    let newModuleObject = {
                        "name": incomingModuleData.name,
                        "originalName": incomingModuleData.name,
                        "initialProperties": {},
                        "buffs": [],
                        "properties": {}
                    }
                    
                    iterateThroughProperties((propertyName) => {
                        newModuleObject.initialProperties[propertyName] = 
                            incomingModuleData[propertyName]
                    })
                    
                    this.moduleList.push(newModuleObject)
                    break
                case "buff":
                    setTargetModule(incomingModuleData.name)
                    iterateThroughProperties((propertyName) => {
                        targetModule.buffs.push([propertyName, incomingModuleData[propertyName]])
                    })
                    break
                case "replace":
                    setTargetModule(incomingModuleData.replacing)
                    let replaceData = {
                        "properties": [],
                        "newName": incomingModuleData.name
                    }
                    iterateThroughProperties((propertyName) => {
                        replaceData.properties.push([propertyName, incomingModuleData[propertyName]])
                    })
                    targetModule.buffs.push(["replace", replaceData])
                    break
            }
            this.calculateBuffs()

            function setTargetModule(moduleName) {
                for (let moduleIndex in moduleList) {
                    if (moduleList[moduleIndex].name == moduleName) {
                        targetModule = moduleList[moduleIndex]
                    }
                }
                if (targetModule == undefined) {
                    throw new Error(`The module named ${incomingModuleData.name} does not exist`)
                }
            }
            
            function iterateThroughProperties(callbackFunction) {
                for (let propertyName in propertyList) {
                    if (incomingModuleData[propertyName] != undefined) {
                        callbackFunction(propertyName)
                    }
                }
            }
        }

        calculateBuffs() {
            for (let moduleIndex in this.moduleList) {
                let buffSections = []
                for (let buffIndex in this.moduleList[moduleIndex].buffs) {
                    switch (this.moduleList[moduleIndex].buffs[buffIndex][0]) {
                        case "replace":
                            buffSections.push(this.moduleList[moduleIndex].buffs[buffIndex])
                            break
                        default:
                            if (
                                buffSections.length == 0 ||
                                buffSections[buffSections.length-1][0] == "replace"
                            ) {
                                buffSections.push([])
                            }
                            buffSections[buffSections.length-1].push(
                                this.moduleList[moduleIndex].buffs[buffIndex]
                            )
                            break
                    }
                }

                this.moduleList[moduleIndex].properties = 
                    structuredClone(this.moduleList[moduleIndex].initialProperties)
                
                let module = this.moduleList[moduleIndex]

                for (let buffSectionIndex in buffSections) {
                    switch (buffSections[buffSectionIndex][0]) {
                        case "replace": replace(buffSections[buffSectionIndex][1]); break
                        default: buff(buffSections[buffSectionIndex]); break
                    }
                }

                function replace(replacementData) {
                    let replacementProperties = {}
                    for (let replacementPropertyIndex in replacementData.properties) {
                        replacementProperties[replacementData.properties[replacementPropertyIndex][0]] = 
                            replacementData.properties[replacementPropertyIndex][1]
                    }
                    module.name = replacementData.newName
                    module.properties = replacementProperties
                }
                
                function buff(setOfBuffs) {
                    let properties = module.properties
                    let buffListObject = {}
                    for (let buffIndex in setOfBuffs) {
                        const buff = setOfBuffs
                        let propertyName = buff[buffIndex][0]
                        let buffData = buff[buffIndex][1]
                        if (buffListObject[propertyName] == undefined) {
                            let temp = { "type": propertyList[propertyName].type }
                            switch (propertyList[propertyName].type) {
                                case "number": 
                                    temp["+"] = []; temp["%"] = []; temp["*"] = []; break
                                case "boolean":
                                    temp.changes = []; break
                            }
                            buffListObject[propertyName] = temp
                        }
                        switch (propertyList[propertyName].type) {
                            case "number": 
                                buffListObject[propertyName][buffData[0]].push(buffData); break
                            case "boolean":
                                buffListObject[propertyName].changes.push(buffData); break
                        }
                    }
    
                    for (let propertyName in buffListObject) {
                        let propertyValue = properties[propertyName]
                        switch (propertyList[propertyName].type) {
                            case "number": 
                                let multiplier = 1, percentage = 1, additive = 0
                                
                                for (let i in buffListObject[propertyName]["*"]) {
                                    multiplier = multiplier * buffListObject[propertyName]["*"][i][1]
                                }
                                for (let i in buffListObject[propertyName]["%"]) {
                                    percentage += buffListObject[propertyName]["%"][i][1]
                                }
                                for (let i in buffListObject[propertyName]["+"]) {
                                    additive += buffListObject[propertyName]["+"][i][1]
                                }
                                propertyValue = propertyValue * multiplier
                                propertyValue = propertyValue * percentage
                                propertyValue += additive
                                properties[propertyName] = propertyValue
                                break
                            case "boolean": 
                                for (let i in buffListObject[propertyName].changes) {
                                    if (buffListObject[propertyName].changes[i] = "invert") {
                                        propertyValue = !propertyValue
                                    } else {
                                        propertyValue = buffListObject[propertyName].changes[i]
                                    }
                                }
                                properties[propertyName] = propertyValue
                        }
                    }
                }
            }
        }
    }
}