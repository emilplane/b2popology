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
    console.log(module)
    for (bonus in damageBonuses) {
        if (module[bonus] != undefined) {
            console.log(module[bonus])
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

const x = Module.getTowerUpgrade(demoTowerObject, [3, 0, 0])
console.log(x)
for (module in x) {

    let mainAttackHTML = ``
    if (x[module].mainAttack == true) {mainAttackHTML = `<h4 style="margin-left: auto; color: var(--secondary6);">Main</h4>`}

    let basicStatsHTML = basicStatsSection(x[module])

    document.getElementById("moduleSection").insertAdjacentHTML("beforeend", `
        <section style="display: flex; flex-direction: column; gap: 12px;">
            <div style="background-color: var(--primary1); border-radius: 8px; padding: 8px">
                <div style="display: flex; align-items: end;">
                    <h2>${x[module].name} <span style="color: var(--primary7);">attack</span></h2>
                    ${mainAttackHTML}
                </div>
                <div class="horizontalLine" style="background-color: var(--secondary6); height: 2px"></div>
                <div style="display: flex; gap: 16px; flex-wrap: wrap">
                    ${basicStatsHTML}
                </div>
            </div>
        </section>
    `)
}