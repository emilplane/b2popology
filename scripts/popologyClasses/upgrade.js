import { Attack } from './attack.js';
import { Buff } from './buff.js';
import { Ability } from './ability.js'

export class Upgrade {
	constructor(path, name, cost, attacks, buffs, abilities) {
		this.path = path;
		this.name = name;
		this.cost = cost;
		this.attacks = attacks;
		this.buffs = buffs;
        this.abilities = abilities;
	}

	static fromJson(data = {}) {
		let upgrade = new Upgrade();
		Object.assign(upgrade, data);
		upgrade.attacks = (data.attacks || []).map(attackData =>
            Attack.fromJson(attackData)
        );
		upgrade.buffs = (data.buffs || []).map(buffData =>
            Buff.fromJson(buffData)
        );
        upgrade.abilities = (data.abilities || []).map(abilityData =>
            Ability.fromJson(abilityData)
        );
		return upgrade;
	}
}
