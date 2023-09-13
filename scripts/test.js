let initialModule = {
    "moduleType": ["attack", "new"],
    "name": "hit",
    
    "damage": 2, "pierce": 3, "attackCooldown": 1.3, "attackType": "normal",
}

let buffModule = {
    "moduleType": ["attack", "buff"],
    "name": "hit",
    
    "damage": [3, "*"], "pierce": 2, "attackCooldown": 0.8, "impact": true
}

standardProperties = [
    ["damage", "+"],
    ["pierce", "+"],
    ["range", "+"],
    ["attackCooldown", "*"],
    ["impact", "boolean"],
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

    switchOperator(propertyName, input, operator) {
        switch (operator) {
            case "+":
                this.module[propertyName] += input
                break;
            case "*":
                this.module[propertyName] = (this.module[propertyName] * (10000*input))/10000
                break;
            case "-":
                this.module[propertyName] -= input
                break;
            case "/":
                this.module[propertyName] /= input
                break;
        }
    }

    mergeStandardProperty(propertyName, input) {
        switch (typeof input.module[propertyName]) {
            case "number":
                let operator;
                for (let property in standardProperties) {if (standardProperties[property][0] == propertyName) {operator = standardProperties[property][1]}}
                this.switchOperator(propertyName, input.module[propertyName], operator)
                break;
            case "object":
                if (Array.isArray(input.module[propertyName])) {
                    this.switchOperator(propertyName, input.module[propertyName][0], input.module[propertyName][1])
                }
                break;
            case "boolean":
                console.log("j")
                this.module[propertyName] = input.module[propertyName]
                break;
        }
    }

    mergeModule(input) {
        for (let propertyName in input.module) {
            console.log(propertyName)
            if (this.standardPropertyNames().includes(propertyName)){
                this.mergeStandardProperty(propertyName, input)
            }
        }
    }
}

let x = new Module(initialModule)
let y = new Module(buffModule)
x.mergeModule(y)
console.log(x.module)