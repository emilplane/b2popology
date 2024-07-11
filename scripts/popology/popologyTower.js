import { SETTINGS, TOWER_JSON_SCHEMA } from "./constants.js"
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
            return this.blueprint.upgrades.base
        }
    }
}