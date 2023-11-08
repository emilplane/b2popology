const properties = [
    {"name": "damage",          "displayName": "Damage",                "type": "number",   "defaultOperator": "+"          },
    {"name": "moabDamage",      "displayName": "MOAB Damage",           "type": "number",   "defaultOperator": "+"          },
    {"name": "fortifiedDamage", "displayName": "Fortified Damage",      "type": "number",   "defaultOperator": "+"          },
    {"name": "forfifiedMoabDamage","displayName": "Fortified MOAB Damage","type": "number", "defaultOperator": "+"          },
    {"name": "ceramicDamage",   "displayName": "Ceramic Damage",        "type": "number",   "defaultOperator": "+"          },
    {"name": "leadDamage",      "displayName": "Lead Damage",           "type": "number",   "defaultOperator": "+"          },
    {"name": "camoDamage",      "displayName": "Camo Damage",           "type": "number",   "defaultOperator": "+"          },
    {"name": "frozenDamage",    "displayName": "Frozen Damage",         "type": "number",   "defaultOperator": "+"          },
    {"name": "stunnedBloonDamage","displayName": "Stunned Bloon Damage","type": "number",   "defaultOperator": "+"          },
    {"name": "projectiles",     "displayName": "Projectiles",           "type": "number",   "defaultOperator": "absolute"   },
    {"name": "spread",          "displayName": "Spread",                "type": "number",   "defaultOperator": "absolute"   },
    {"name": "pierce",          "displayName": "Pierce",                "type": "number",   "defaultOperator": "+"          },
    {"name": "impact",          "displayName": "Impact",                "type": "boolean",  "defaultValue": "false"         },
    {"name": "attackCooldown",  "displayName": "Attack Cooldown",       "type": "number",   "defaultOperator": "*"          },
]

const propertyTypes = {
    "number": function(main, buff, property) {
        main.module[property.name] = simpleNumberBuff(
            main.module[property.name],
            buff[property.name], property.defaultOperator
        )
    },
    "boolean": function(main, buff, property) {
        main.module[property.name] = buff[property.name]
    }
}

function simpleNumberBuff(initial, buff, defaultOperator) {
    if (initial == undefined) {initial = 0}
    if (buff == Infinity || buff == "Infinity" || buff == "infinity") {
        return Infinity
    }
    let buffValue = buff; let operator = defaultOperator
    if (typeof buff == "object") {
        buffValue = buff[1]; operator = buff[0]
    }
    switch (operator) {
        case "+": return initial+buffValue;
        case "-": return initial-buffValue;
        case "*": return ((initial*1000)*buffValue)/1000;
        case "/": if(buffValue==0){return 0}; return initial/buffValue;
        case "absolute": return buffValue;
        case Infinity: case "Infinity": case "infinity": return Infinity;
    }
}

export class Module {
    constructor(module) {
        this.module = module;
    }

    merge(buffModule) {
        let buff = buffModule.module
        switch (buff.moduleType[1]) {
            case "buff":
                for (let propertyNumber in properties) {
                    let property = properties[propertyNumber]
                    if (buff[property.name] != undefined) {
                        propertyTypes[property.type](this, buff, property)
                    }
                }
                return this;
            case "replace":
                let previousModule = structuredClone(this.module)
                this.module = structuredClone(buffModule.module)
                this.module.moduleType[1] = "new"
                delete this.module.replacingName
                if (previousModule.previousNames == undefined) {
                    this.module.previousNames = []
                } else {
                    this.module.previousNames = previousModule.previousNames
                }
                this.module.previousNames.push(previousModule.name)
        }   
        return undefined
    }
}