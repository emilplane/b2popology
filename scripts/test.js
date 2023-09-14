let demoTowerObject = {
    "upgrades": {
        "base": [
            {
                "moduleType": ["attack", "new"],
                "name": "forward-energy",
                
                "damage": 1, "pierce": 3, "attackCooldown": 0.7, "attackType": "energy"
            },
        ],
        "top": [
            [
                {
                    "moduleType": ["attack", "buff"],
                    "name": "forward-energy",
                    
                    "projectiles": 2, "spread": 45
                }
            ],
            [
                {
                    "moduleType": ["attack", "buff"],
                    "name": "forward-energy",
                    
                    "damage": 1, "moabDamage": 2, "attackType": "normal"
                },
                {
                    "moduleType": ["attack", "new"],
                    "name": "mobe-missile",
                    
                    "moabDamage": 20, "pierce": 5, "attackCooldown": 2, "attackType": "explosion", "impact": true
                }
            ]
        ]
    }
}

standardProperties = [
    ["damage", "+"], ["moabDamage", "+"], ["fortifiedDamage", "+"], ["fortifiedMoabDamage", "+"], ["ceramicDamage", "+"], ["leadDamage", "+"], ["camoDamage", "+"], ["frozenDamage", "+"], ["stunnedDamage", "+"],
    ["projectiles", "+"], ["spread", "absolute"],
    ["pierce", "+"], ["impact", "boolean"],
    ["range", "+"], ["zone", "boolean"],
    ["attackCooldown", "*"],
    ["attackType", "string"]
]

class Module {
    constructor(module) {
        this.module = module
    }

    static getTowerUpgrade(tower, crosspath) {
        if (crosspath[0] == 0 && crosspath[1] == 0 && crosspath[2] == 0) {
            return tower.upgrades.base
        }
    
        let output = tower.upgrades.base
    
        let mainPath; let mainPathNumber;
        if (crosspath[0] >= crosspath[1] && crosspath[0] >= crosspath[2]) {
            mainPath = "top";
            mainPathNumber = 0;
        } else if (crosspath[1] >= crosspath[0] && crosspath[1] >= crosspath[2]) {
            mainPath = "middle";
            mainPathNumber = 1;
        } else {
            mainPath = "bottom";
            mainPathNumber = 2;
        }
        
        let crosspathName; let crosspathNumber;
        if (crosspath[0] >= crosspath[1] && crosspath[0] >= crosspath[2]) {
            if (crosspath[1] >= crosspath[2]) {
                crosspathName = "middle";
                crosspathNumber = 1;
            } else {
                crosspathName = "bottom";
                crosspathNumber = 2;
            }
        } else if (crosspath[1] >= crosspath[0] && crosspath[1] >= crosspath[2]) {
            if (crosspath[0] >= crosspath[2]) {
                crosspathName = "top";
                crosspathNumber = 0;
            } else {
                crosspathName = "bottom";
                crosspathNumber = 2;
            }
        } else {
            if (crosspath[1] >= crosspath[2]) {
                crosspathName = "middle";
                crosspathNumber = 1;
            } else {
                crosspathName = "bottom";
                crosspathNumber = 2;
            }
        }
        
        //output = new Module(initialModule)

        const upgradeCounter = crosspath[mainPathNumber];
        for (let i = 0; i < upgradeCounter; i++) {
            output = Module.mergeUpgrades(output, tower.upgrades[mainPath][i])
        }
    
        /*if (crosspath[crosspathNumber] != 0) {
            const upgradeCounter = crosspath[crosspathNumber];
            for (let i = 0; i < upgradeCounter; i++) {
                output = buffTower(output, tower.upgrades[crosspathName][i])
            }
        }*/
    
        return output
    }

    static mergeUpgrades(initial, upgrade) {
        let output = []
        for (let module in initial) {
            let moduleMatch = false
            for (let buffModule in upgrade) {
                
                if (initial[module].name == upgrade[buffModule].name) {
                    moduleMatch = true
                    if (initial[module].moduleType[1] == "new" && upgrade[buffModule].moduleType[1] == "buff") {
                        let initialModuleObject = new Module(initial[module]); let buffModuleObject = new Module(upgrade[buffModule])
                        initialModuleObject.mergeModule(buffModuleObject)
                        output.push(initialModuleObject.module)
                    }
                }
                if (upgrade[buffModule].moduleType[1] == "new") {
                    output.push(upgrade[buffModule])
                }
            }
            if (moduleMatch == false) {
                output.push(initial[module])
            }
        }
        return output
    }

    standardPropertyNames() {
        let result = [];
        for (let n in standardProperties) {
            result.push(standardProperties[n][0])
        }
        return result
    }

    switchOperator(propertyName, input, operator) {
        if (this.module[propertyName] == undefined) {this.module[propertyName] = 0}
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
            case "absolute":
                this.module[propertyName] = input
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
                this.module[propertyName] = input.module[propertyName]
                break;
            case "string":
                this.module[propertyName] = input.module[propertyName]
                break;
        }
    }

    mergeModule(input) {
        for (let propertyName in input.module) {
            if (this.standardPropertyNames().includes(propertyName)){
                this.mergeStandardProperty(propertyName, input)
            }
        }
    }
}

console.log(Module.getTowerUpgrade(demoTowerObject, [3, 0, 0]))