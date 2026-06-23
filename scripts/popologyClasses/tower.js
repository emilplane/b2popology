import { Attack } from './attack.js';
import { Upgrade } from './upgrade.js';

export class Tower {

	constructor(id, name, unlock_cost, size, placeable_on) {
		this.id = id;						// STRING unique identifier
		this.name = name;					// STRING Human-readable name displayed on the website
		this.unlock_cost = unlock_cost;		// NUMBER Unlock cost in Monkey Money
		this.size = size;					// NUMBER ARRAY Tower's footprint
		this.placeable_on = placeable_on;   // NUMBER Where the tower can be placed
	}

	static fromJson(data = {}) {
		let tower = new Tower();
		Object.assign(tower, data);
		tower.upgrades = (data.upgrades || []).map(upgradeData =>
            Upgrade.fromJson(upgradeData)
        );
		return tower;
	}

	static getTowerById(id, towerArray) {
		for (let i = 0; i < towerArray.length; i++) {
			if (towerArray[i].id == id) { return towerArray[i]; }
		}
		return null;
	}

	formattedUnlockCost() {
		if (this.unlock_cost == 0) return "Unlocked by default";
		return this.unlock_cost + " MM";
	}

	formattedSize() {
		if (this.size.length == 1) return this.size[0].toString() + " radius";
		return this.size[0].toString() + "x" + this.size[1].toString();
	}

	formattedPlacement() {
		const placement = { 0 : "Land", 1 : "Water", 2 : "Amphibious" };
		return placement[this.placeable_on];
	}
	
	getImagePath(path) {
		return "/media/towerPortraits/" + this.id + "/" + Tower.getDominantPath(path) + ".png";
	}

	static getDominantPath(path) {
		const spread = [...path];
		const nums = [];
		for (let i = 0; i < spread.length; i++) nums.push(Number(spread[i]));
		if (Math.max(...nums) == nums[0]) return nums[0] + "00";
		if (Math.max(...nums) == nums[1]) return "0" + nums[1] + "0";
		return "00" + nums[2];
	}

	getAttacks(path) {
		let attacks = [];
		this.upgrades.forEach((upgrade) => {
			if (Tower.isChildUpgrade(path, upgrade.path)) {
				if (!(upgrade.attacks == null)) {
					upgrade.attacks.forEach((attack) => {
						attacks.push(attack);
					});
				}
			}
		});
		let filtered_attacks = [];
		let flag;
		for (let i = 0; i < attacks.length; i++) {
			flag = true;
			for (let j = i + 1; j < attacks.length; j++) {
				if (attacks[j].overwrites == null) continue;
				if (attacks[j].overwrites.includes(attacks[i].name)) {
					flag = false;
					break;
				}
			}
			if (flag) filtered_attacks.push(attacks[i]);
		}
		let buffed_attacks = [];
		let buffs = this.getBuffs(path);
		for (let i = 0; i < filtered_attacks.length; i++) {
			let curr_atk = filtered_attacks[i]
			for (let j = 0; j < buffs.length; j++) {
				curr_atk = Attack.buffedAttack(curr_atk, buffs[j]);
			}
			buffed_attacks.push(curr_atk);
		}
		return buffed_attacks;
	}

	getBuffs(path) {
		let buffs = [];
		this.upgrades.forEach((upgrade) => {
			if (Tower.isChildUpgrade(path, upgrade.path)) {
				if (!(upgrade.buffs == null)) {
					upgrade.buffs.forEach((buff) => {
						buffs.push(buff);
					});
				}
			}
		});
		return buffs;
	}

	getTotalCost(path) {
		let total_cost = 0;
		this.upgrades.forEach((upgrade) => {
			if (Tower.isChildUpgrade(path, upgrade.path)) total_cost += upgrade.cost;
		});
		return total_cost;
	}

	static isChildUpgrade(path, upgrade) {
		const path_nums = [...path].map(Number);
		const upgrade_nums = [...upgrade].map(Number);
		for (let i = 0; i < path_nums.length; i++) {
			if (upgrade_nums[i] > path_nums[i]) return false;
		}
		return true;
	}

	static validPath(path) {
		const path_nums = [...path].map(Number);
		path_nums.forEach((path) => {
			if ((path > 5) || (path < 0)) {
				console.error("Upgrade path outside of allowed range");
				return false;
			}
		});
		return true;
	}
}


