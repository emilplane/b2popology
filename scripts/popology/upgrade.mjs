import propertyList from "./data/propertyList.mjs";

export default class Upgrade {
    constructor() { 
        this.modules = []
    }

    setUpgrade(upgradeData) {
        for (let moduleIndex in upgradeData) {
            this.modules.push(upgradeData[moduleIndex])
        }
    }
}