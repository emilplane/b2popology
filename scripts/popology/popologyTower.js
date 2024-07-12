import { SETTINGS, TOWER_JSON_SCHEMA } from "./constants.js"
import { Tower, Upgrade } from "./modulesHiearchy.js"
import validateJson from "./validateJson.js"

export default class PopologyTower {
    constructor(towerBlueprint) {
        this.blueprint = towerBlueprint

        this.blueprintValidation = 
            validateJson(TOWER_JSON_SCHEMA, towerBlueprint)
        if (SETTINGS.STOP_IF_INVALID_TOWER_JSON && !this.blueprintValidation.valid) {
            throw new Error("Tower JSON is not valid!")
        }

        this.name = this.blueprint.name
        this.displayName = this.blueprint.displayName
    }

    getUpgrade(path, upgrade) {
        if (path == "base") {
            return new Upgrade(this.blueprint.upgrades.base)
        } else {
            return new Upgrade(this.blueprint.upgrades.paths[path][upgrade])
        }
    }

    getTower(path1, path2, path3) {
        const tower = new Tower()
        tower.addUpgrade(this.blueprint.upgrades.base)
        if (path1 >= path2 && path1 >= path3) {
            for (let i = 0; i < path1; i++) {
                tower.addUpgrade(this.blueprint.upgrades.paths[0][i])
            }
        } else if (path2 >= path3) {

        } else {

        }
        tower.constructTower()
        
        return tower
    }
}