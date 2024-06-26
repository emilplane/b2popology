import BuffList from "./buffList.mjs";
import propertyList from "./data/propertyList.mjs";

class ConstructedModule {
    constructor(name, initialProperties) {
        this.name = name; this.originalName = name;
    }
}

export default class Tower {
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
            if (this.modules[moduleIndex].buffs[buffIndex][0] == "replace") {
                buffSections.push(this.modules[moduleIndex].buffs[buffIndex])
            // } else if (typeof this.modules[moduleIndex].buffs[buffIndex][1] == "number") {

            } else {
                if (
                    buffSections.length == 0 ||
                    buffSections[buffSections.length-1][0] == "replace"
                ) {
                    buffSections.push([])
                }
                buffSections[buffSections.length-1].push(
                    this.modules[moduleIndex].buffs[buffIndex]
                )
            }
        }

        console.log(buffSections)

        this.modules[moduleIndex].properties = 
            structuredClone(this.modules[moduleIndex].initialProperties)
        
        for (let buffSectionIndex in buffSections) {
            switch (buffSections[buffSectionIndex][0]) {
                case "replace": 
                    this.replace(buffSections[buffSectionIndex][1], moduleIndex)
                    break
                case "buff": default: 
                    this.buff(buffSections[buffSectionIndex], moduleIndex)
                    break
            }
        }
    }

    replace(replacementData, moduleIndex) {
        let module = this.modules[moduleIndex]
        let replacementProperties = {}
        for (let replacementPropertyIndex in replacementData.properties) {
            replacementProperties[replacementData.properties[replacementPropertyIndex][0]] = 
                replacementData.properties[replacementPropertyIndex][1]
        }
        module.name = replacementData.newName
        module.properties = replacementProperties
    }

    buff(setOfBuffs, moduleIndex) {
        let properties = this.modules[moduleIndex].properties
        let buffListObject = new BuffList()
        for (let buffIndex in setOfBuffs) {
            buffListObject.addBuff(setOfBuffs[buffIndex])
        }

        for (let propertyName in buffListObject.properties) {
            let propertyValue = properties[propertyName]
            switch (propertyList[propertyName].type) {
                case "number": 
                    let multiplier = 1, percentage = 1, additive = 0
                    
                    for (let i in buffListObject.properties[propertyName]["*"]) {
                        multiplier = multiplier * buffListObject.properties[propertyName]["*"][i][1]
                    }
                    for (let i in buffListObject.properties[propertyName]["%"]) {
                        percentage += buffListObject.properties[propertyName]["%"][i][1]
                    }
                    for (let i in buffListObject.properties[propertyName]["+"]) {
                        additive += buffListObject.properties[propertyName]["+"][i][1]
                    }
                    propertyValue = propertyValue * multiplier
                    propertyValue = propertyValue * percentage
                    propertyValue += additive
                    properties[propertyName] = propertyValue
                    break
                case "boolean": 
                    for (let i in buffListObject.properties[propertyName].changes) {
                        if (buffListObject.properties[propertyName].changes[i] = "invert") {
                            propertyValue = !propertyValue
                        } else {
                            propertyValue = buffListObject.properties[propertyName].changes[i]
                        }
                    }
                    properties[propertyName] = propertyValue
            }
        }
    }
}