const propertyList = {
    "damage": {
        "type": "number"
    },
    "pierce": {
        "type": "number"
    },
    "impact": {
        "type": "boolean"
    },
    "attackCooldown": {
        "type": "number"
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
        // currentConstructedTower.addUpgrade(this.getTowerUpgrade(false, 0, 0))
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
                        "initialProperties": {},
                        "buffs": [],
                        "properties": {}
                    }
                    
                    iterateThroughProperties((propertyName) => {
                        newModuleObject.initialProperties[propertyName] = incomingModuleData[propertyName]
                    })
                    
                    this.moduleList.push(newModuleObject)
                    this.calculateBuffs()
                    break
                case "buff": 
                    let targetModule;
                    for (let moduleIndex in this.moduleList) {
                        if (this.moduleList[moduleIndex].name == incomingModuleData.name) {
                           targetModule = this.moduleList[moduleIndex]
                        }
                    }
                    if (targetModule == undefined) {throw new Error(`The module named ${incomingModuleData.name} does not exist`)}
                    iterateThroughProperties((propertyName) => {
                        targetModule.buffs.push([propertyName, incomingModuleData[propertyName]])
                    })
                    this.calculateBuffs()
            }
            
            function iterateThroughProperties(addBuff) {
                for (let propertyName in propertyList) {
                    if (incomingModuleData[propertyName] != undefined) {
                        addBuff(propertyName)
                    }
                }
            }
        }

        calculateBuffs() {
            for (let moduleIndex in this.moduleList) {
                this.moduleList[moduleIndex].properties = 
                    structuredClone(this.moduleList[moduleIndex].initialProperties)

                let buffListObject = {}
                for (let buffIndex in this.moduleList[moduleIndex].buffs) {
                    let propertyName = this.moduleList[moduleIndex].buffs[buffIndex][0]
                    let buffData = this.moduleList[moduleIndex].buffs[buffIndex][1]

                    if (buffListObject[propertyName] == undefined) {
                        buffListObject[propertyName] = { "+": [], "%": [], "*": [] }
                    }
                    buffListObject[propertyName][buffData[0]].push(buffData)
                }

                for (let propertyName in buffListObject) {
                    let propertyValue = this.moduleList[moduleIndex].properties[propertyName]

                    let multiplier = 1
                    let percentage = 1
                    let additive = 0
                    
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
                    this.moduleList[moduleIndex].properties[propertyName] = propertyValue
                }
            }
        }
    }
}