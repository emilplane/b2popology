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

export default class ConstructedTower {
    constructor() { 
        this.modules = []
    }

    addUpgrade(upgradeData) {
        for (let moduleIndex in upgradeData) {
            this.addModule(upgradeData[moduleIndex])
        }
    }

    addModule(moduleData) {
        let targetModule;
        let moduleList = this.modules
        switch (moduleData.action) {
            case "new":
                // Check to make sure that there is not already a module with the same name
                for (let moduleIndex in this.modules) {
                    if (this.modules[moduleIndex].name == moduleData.name) {
                        throw new Error("testError")
                    }
                }

                let newModuleObject = {
                    "name": moduleData.name,
                    "originalName": moduleData.name,
                    "initialProperties": {},
                    "buffs": [],
                    "properties": {}
                }
                
                iterateThroughProperties((propertyName) => {
                    newModuleObject.initialProperties[propertyName] = 
                        moduleData[propertyName]
                })
                
                this.modules.push(newModuleObject)
                break
            case "buff":
                setTargetModule(moduleData.name)
                iterateThroughProperties((propertyName) => {
                    targetModule.buffs.push([propertyName, moduleData[propertyName]])
                })
                break
            case "replace":
                setTargetModule(moduleData.replacing)
                let replaceData = {
                    "properties": [],
                    "newName": moduleData.name
                }
                iterateThroughProperties((propertyName) => {
                    replaceData.properties.push([propertyName, moduleData[propertyName]])
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
                throw new Error(`The module named ${moduleData.name} does not exist`)
            }
        }
        
        function iterateThroughProperties(callbackFunction) {
            for (let propertyName in propertyList) {
                if (moduleData[propertyName] != undefined) {
                    callbackFunction(propertyName)
                }
            }
        }
    }

    calculateBuffs() {
        for (let moduleIndex in this.modules) {
            this.calculateModule(moduleIndex)
        }
    }

    calculateModule(moduleIndex) {
        let buffSections = []
        for (let buffIndex in this.modules[moduleIndex].buffs) {
            switch (this.modules[moduleIndex].buffs[buffIndex][0]) {
                case "replace":
                    buffSections.push(this.modules[moduleIndex].buffs[buffIndex])
                    break
                default:
                    if (
                        buffSections.length == 0 ||
                        buffSections[buffSections.length-1][0] == "replace"
                    ) {
                        buffSections.push([])
                    }
                    buffSections[buffSections.length-1].push(
                        this.modules[moduleIndex].buffs[buffIndex]
                    )
                    break
            }
        }

        this.modules[moduleIndex].properties = 
            structuredClone(this.modules[moduleIndex].initialProperties)
        
        let module = this.modules[moduleIndex]

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