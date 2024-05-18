import propertyList from "./data/propertyList.mjs";

export default class BuffList {
    constructor () {
        this.properties = []
    }

    addBuff(buffData) {
        let propertyName = buffData[0]
        let propertyData = buffData[1]
        if (this.properties[propertyName] == undefined) {
            let temp = {
                "type": propertyList[propertyName].type,
                "sections": []
            }
            let section = {}
            switch (propertyList[propertyName].type) {
                case "number": 
                    section["+"] = []; section["%"] = []; section["*"] = []; break
                case "boolean":
                    section.changes = []; break
            }
            temp.sections.push(section)
            this.properties[propertyName] = temp
        }

        console.log(this.properties[propertyName])

        switch (propertyList[propertyName].type) {
            case "number": 
                if (typeof propertyData == "number") {
                    // this.properties[propertyName].sections[0][propertyData[0]].push(propertyData); break
                } else {
                    this.properties[propertyName].sections[0][propertyData[0]].push(propertyData[1]); break
                }
            case "boolean":
                this.properties[propertyName].sections[0].changes.push(propertyData); break
        }

        // console.log(this)
    }
}