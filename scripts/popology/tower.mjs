const propertyList = {
    "damage": {
        "type": "number"
    },
    "pierce": {
        "type": "number"
    },
    "attackCooldown": {
        "type": "number"
    }
}

export class Tower {
    constructor(towerData) {
        this.towerData = towerData
    }

    get name() {
        return this.towerData.name
    }

    get displayName() {
        return this.towerData.displayName
    }

    getTowerUpgrade(isBaseUpgrade, path, upgrade) {
        if (isBaseUpgrade) {
            return this.towerData.upgrades.base
        }
        return this.towerData.upgrades.paths[path][upgrade]
    }

    getConstructedTower(fullPath) {
        let currentConstructedTower = new Tower.ConstructedTower(this.towerData.upgrades)
        currentConstructedTower.addUpgrade(this.getTowerUpgrade(true))
        currentConstructedTower.addUpgrade(this.getTowerUpgrade(false, 0, 0))
        
        return currentConstructedTower
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
                    console.log(incomingModuleData)
            }
            
            function iterateThroughProperties(functionToIterate) {
                for (let propertyName in propertyList) {
                    if (incomingModuleData[propertyName] != undefined) {
                        functionToIterate(propertyName)
                    }
                }
            }
        }

        calculateBuffs() {
            
        }
    }
}