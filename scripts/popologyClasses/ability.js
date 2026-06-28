export class Ability {
    
    constructor(id, name, cooldown, duration, battle_ready, desc, overwrites) {
        this.id = id;
        this.name = name;
        this.cooldown = cooldown;
        this.duration = duration;
        this.battle_ready = battle_ready;
        this.desc = desc;
        this.overwrites = overwrites;
    }

    static fromJson(data = {}) {
        let ability = new Ability()
        Object.assign(ability, data);
        return ability
    }
}
