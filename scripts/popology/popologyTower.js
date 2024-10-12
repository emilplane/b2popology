import { SETTINGS, TOWER_JSON_SCHEMA } from "./constants.js"
import { Tower, Upgrade } from "./modulesHiearchy/towerLevel.js"
import validateJson from "./validateJson.js"

export default class TowerBlueprint {
    /**
     * Validates the tower blueprint.
     * @param {object} towerBlueprint - JSON data as object
     */
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

    // getUpgrade(path, upgrade) {   
    //     if (path == "base") {
    //         return new Upgrade(this.blueprint.upgrades.base)
    //     } else {
    //         return new Upgrade(this.blueprint.upgrades.paths[path][upgrade])
    //     }
    // }

    // getTower(path1, path2, path3) {
    //     const path = { 0: path1, 1: path2, 2: path3 }
    //     const tower = new Tower()
    //     tower.addUpgrade(this.blueprint.upgrades.base)
        

    //     if (path1 == 0 && path2 == 0 && path3 == 0) {
    //         tower.towerName = this.blueprint.displayName
    //         tower.constructTower()
    //         return tower
    //     }

    //     let mainPathNumber;
    //     let secondaryPathNumber;
    //     if (path1 >= path2 &&
    //         path1 >= path3)         { mainPathNumber = 0
    //         if (path2 >= path3)         { secondaryPathNumber = 1 } 
    //         else                        { secondaryPathNumber = 2 }
    //     } else if (path2 >= path3)  { mainPathNumber = 1
    //         if (path1 >= path3)         { secondaryPathNumber = 0 } 
    //         else                        { secondaryPathNumber = 2 }
    //     } else                      { mainPathNumber = 2 
    //         if (path1 >= path2)         { secondaryPathNumber = 0 } 
    //         else                        { secondaryPathNumber = 1 }
    //     }

    //     tower.towerName = this.blueprint.upgradeNames
    //         [mainPathNumber][path[mainPathNumber]-1].displayName
    //     tower.crosspathName = this.blueprint.upgradeNames
    //         [mainPathNumber][path[mainPathNumber]-1].displayName
    //     for (let i = 0; i < path[mainPathNumber]; i++) {
    //         tower.addUpgrade(this.blueprint.upgrades.paths[mainPathNumber][i])
    //     }
        
    //     tower.constructTower()
        
    //     return tower
    // }
}