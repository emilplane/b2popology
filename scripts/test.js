let initialModule = {
    "moduleType": ["attack", "new"],
    "name": "hit",
    
    "damage": 1, "pierce": 3, "attackCooldown": 0.7, "attackType": "normal"
}

let buffModule = {
    "moduleType": ["attack", "buff"],
    "name": "hit",
    
    "pierce": 5, "attackCooldown": 0.8
}

standardProperties = [
    ["damage", "+"],
    ["pierce", "+"],
    ["range", "+"],
    ["attackCooldown", "*"],
    ["attackType", "boolean"],
]

class Module {
    constructor(module) {
        this.module = module
    }

    standardPropertyNames() {
        let result = [];
        for (let n in standardProperties) {
            result.push(standardProperties[n][0])
        }
        return result
    }

    mergeStandardProperty(propertyName, input) {
        switch (typeof input.module[propertyName]) {
            case "number":
                let operator;
                for (let property in standardProperties) {if (standardProperties[property][0] == propertyName) {operator = standardProperties[property][1]}}
                switch (operator) {
                    case "+":
                        this.module[propertyName] += input.module[propertyName]
                        break;
                    case "*":
                        this.module[propertyName] *= input.module[propertyName]
                        break;
                    case "-":
                        this.module[propertyName] -= input.module[propertyName]
                        break;
                    case "/":
                        this.module[propertyName] /= input.module[propertyName]
                        break;
                }
                break;
        }
    }

    mergeModule(input) {
        for (let propertyName in this.module) {
            if (this.standardPropertyNames().includes(propertyName)){
                this.mergeStandardProperty(propertyName, input)
            }
        }
    }
}

let x = new Module(initialModule)
let y = new Module(buffModule)
x.mergeModule(y)
console.log(x)