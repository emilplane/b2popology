let demoTowerObject = {
    "upgrades": {
        "base": [
            {
                "moduleType": ["attack", "new"],
                "name": "forward-energy", "mainAttack": true,
                
                "damage": 1, "pierce": 3, "attackCooldown": 0.7, "attackType": "energy"
            },
            {
                "moduleType": ["attack", "new"],
                "name": "normal-test",
                
                "damage": 1, "pierce": 1, "attackCooldown": 1, "attackType": "normal"
            },
            {
                "moduleType": ["attack", "new"],
                "name": "normal-test",
                
                "damage": 1, "pierce": 1, "attackCooldown": 1, "attackType": "normal"
            }
        ],
        "top": [
            [
                {
                    "moduleType": ["attack", "buff"],
                    "name": "forward-energy",
                    
                    "projectiles": 2, "projectileSpread": 10,

                    "effects": [
                        ["contact", "stun", 0.5]
                    ]
                }
            ],
            [
                {
                    "moduleType": ["attack", "buff"],
                    "name": "forward-energy",
                    
                    "damage": 1, "fortifiedMoabDamage": 2, "camoDamage": 1, "attackType": "normal"
                },
                {
                    "moduleType": ["attack", "new"],
                    "name": "mobe-missile",
                    
                    "damage": 3, "moabDamage": 20, "pierce": 5, "attackCooldown": 2, "attackType": "explosion", "impact": true
                }
            ]
        ]
    }
}

standardProperties = [
    ["damage", "+"], ["moabDamage", "+"], ["fortifiedDamage", "+"], ["fortifiedMoabDamage", "+"], ["ceramicDamage", "+"], ["leadDamage", "+"], ["camoDamage", "+"], ["frozenDamage", "+"], ["stunnedDamage", "+"],
    ["projectiles", "+"], ["projectileSpread", "absolute"],
    ["pierce", "+"], ["impact", "boolean"],
    ["range", "+"], ["zone", "boolean"],
    ["attackCooldown", "*"],
    ["attackType", "string"],
    ["mainAttack", "boolean"]
]

damageBonuses = {
    "moabDamage": {
        "name": "MOAB"
    },
    "fortifiedDamage": {
        "name": "Fortified"
    },
    "fortifiedMoabDamage": {
        "name": "Fortified MOAB"
    },
    "ceramicDamage": {
        "name": "Ceramic"
    },
    "leadDamage": {
        "name": "Lead"
    },
    "camoDamage": {
        "name": "Camo"
    },
    "frozenDamage": {
        "name": "Frozen"
    },
    "stunnedDamage": {
        "name": "Stunned"
    }
}

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

    static retainOnReplacement(module, oldModule) {
        delete module.replacingName
        module.moduleType[1] = "new"
        if (module.attackType == undefined && oldModule.attackType != undefined) { 
            module.attackType = oldModule.attackType
        }
        return module
    }

    static mergeUpgrades(initial, upgrade) {
        let output = []
        let newUpgradesAdded = []
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
                    let moduleAdded = false
                    for (let moduleName in newUpgradesAdded) {
                        if (newUpgradesAdded[moduleName] == upgrade[buffModule].name) {
                            moduleAdded = true
                        }
                    }
                    if (moduleAdded == false) {
                        output.push(upgrade[buffModule])
                        newUpgradesAdded.push(upgrade[buffModule].name)
                    }
                }
                if (upgrade[buffModule].moduleType[1] == "replace") {
                    moduleMatch = true
                    let replacingName = upgrade[buffModule].replacingName
                    let targetExists = false; let initialPosition;
                    for (let replacingModule in initial) {
                        if (initial[replacingModule].name == replacingName) {
                            targetExists = true; initialPosition = replacingModule
                        }
                    }
                    if (targetExists == true) {
                        let replacingModule = upgrade[module]
                        let changedModule = this.retainOnReplacement(replacingModule, initial[initialPosition])
                        output.push(replacingModule)
                    }
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

function basicStatsSection (module) {
    let output = ``

    let damageBonusesHTML = ``
    for (bonus in damageBonuses) {
        if (module[bonus] != undefined) {
            damageBonusesHTML = damageBonusesHTML + `<p style="font-size: 20pt; padding-top: 0">
                <span style="font-size: 12pt; color:var(--secondary6)">+2</span> 4 <span style="font-size: 12pt; color:var(--secondary6)">${damageBonuses[bonus].name}</span>
            </p>`
        }
    }

    if (module.damage != undefined) {output = output + `
        <div>
            <h5>Damage</h5>
            <div style="display: flex; gap: 8px; align-items: end">
                <p style="font-size: 20pt; padding-top: 0">2</p>
                ${damageBonusesHTML}
            </div>
        </div>
    `}

    return output
}

async function getDataJSON() {
    const requestURL =
    "https://raw.githubusercontent.com/emilplane/b2popology/main/json/Towers/dartMonkey.json";
    const request = new Request(requestURL);
	
    const response = await fetch(request);
    data = await response.json();
};

async function main() {
    await getDataJSON()

    const x = Module.getTowerUpgrade(data, [5, 0, 0])
    console.log(x)
};

main()