import switchBetweenOperators from "../utilities/switchBetweenOperators.mjs";

export default class PopologyText {
    constructor(type, data, propertyList) {
        this.type = type
        this.data = data
        this.propertyList = propertyList
        this.upgradeStrings
    }

    plainText(stringArray) {
        stringArray = this.upgradeStrings
        let text = ""
        let indent = -1
        function evaluateArray(array) {
            indent++
            for (let i in array) {
                if (typeof array[i] == "string") {
                    text += indentedSpaces(indent) + "- " + array[i] + "\n"
                } else {
                    evaluateArray(array[i])
                }
            }
            indent--
        }
        function indentedSpaces(indention) {
            let spaceString = ""
            for (let i = 0; i < indention; i++) {
                spaceString += "  "
            }
            return spaceString
        }
        evaluateArray(stringArray)
        return text
    }

    getUpgradeText() {
        this.upgradeStrings = []
        for (let moduleIndex in this.data) {
            let moduleStats = this.data[moduleIndex]
            switch (moduleStats.action) {
                case "new":
                    this.upgradeStrings.push(`${moduleStats.name} ${moduleStats.type}`)
                    this.upgradeStrings.push(this.getUpgradeModuleBuffs(moduleStats))
                    break
                case "buff":
                    this.upgradeStrings.push(`${moduleStats.name} buffed`)
                    this.upgradeStrings.push(this.getUpgradeModuleBuffs(moduleStats))
                    break
            }
        }
        return this
    }

    

    getUpgradeModuleBuffs(moduleStats) {
        let moduleStrings = []
        let mainStatsListString = ""
        for (let property in this.propertyList) {
            const propertyData = this.propertyList[property]
            if (moduleStats[property] != undefined) {
                if (propertyData.mainStatsList == true) {
                    if (mainStatsListString != "") {
                        mainStatsListString += ", "
                    }
                    let propertyUnit = " " + property
                    if (propertyData.shorthand != undefined) {
                        propertyUnit = propertyData.shorthand
                    }
                    switchBetweenOperators(moduleStats[property][0],
                        () => {mainStatsListString += 
                            `+${moduleStats[property][1]}${propertyUnit}`
                        },
                        () => {mainStatsListString += 
                            `+${moduleStats[property][1]*100}%${propertyUnit}`
                        },
                        () => {mainStatsListString += 
                            `x${moduleStats[property][1]}${propertyUnit}`
                        },
                    )
                } else {
                    switch (propertyData.type) {
                        case "boolean":
                            if (moduleStats[property] == true) {
                                moduleStrings.push(propertyData.trueText)
                            }
                    }
                }
            }
        }
        moduleStrings.unshift(mainStatsListString)
        return moduleStrings
    }
}