import { Attack } from './attack.js';
import { Buff } from './buff.js';

export class Upgrade {
	constructor(path, name, cost, attacks, buffs) {
		this.path = path;
		this.name = name;
		this.cost = cost;
		this.attacks = attacks;
		this.buffs = buffs;
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

		return upgrade;
	}
}
