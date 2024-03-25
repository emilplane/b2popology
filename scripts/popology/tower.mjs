export class TowerBlueprint {
    constructor(blueprint) {
        this.blueprint = blueprint
    }

    getUpgradeStats(upgrade) {
        return this.blueprint.upgrades[upgrade]
    }

    getTowerStats(upgrade) {
        let upgradedTower = new Tower()
        return upgradedTower
    }
}

export class Tower {
    constructor() {
        this.modules = []
    }
}