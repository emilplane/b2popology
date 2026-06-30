import { Attack } from './attack.js';
import { Upgrade } from './upgrade.js';
import { PropertyIconed } from './properties/propertyIconed.js';
import { PathSelector } from '/scripts/popologyUI/pathSelector.js';


export class Tower {

	constructor(id, name, properties, upgrades) {
		this.id = id;
		this.name = name;
		this.properties = properties;
		this.upgrades = upgrades;
	}

	static fromJson(data = {}) {
		let tower = new Tower();
		tower.name = data.name;
		tower.id = data.id;
		tower.properties = [];
		if (data.properties != null) {
			Object.keys(data.properties).forEach((key) => {
				tower.properties.push(new PropertyIconed(key, data.properties[key]));
			});
		}
		if (data.upgrades != null) {
			tower.upgrades = (data.upgrades || []).map(upgradeData =>
				Upgrade.fromJson(upgradeData)
			);
		}
		return tower;
	}
	
	async toHTML(path, parent) {
		if (path == null) path = "000";

		const rootDiv = document.createElement('div');

		const towerCont = document.createElement('div');
		towerCont.className = "towerContainer";
		
		const pathSelector = new PathSelector(this, path);
		const pathSelectorHTML = await pathSelector.toHTML(parent);
		towerCont.append(pathSelectorHTML);

		const towerName = document.createElement('p');
		towerName.className = "towerName";
		towerCont.appendChild(towerName);

		const upgradeName = document.createElement('p');
		upgradeName.className = "upgradeName";
		towerCont.appendChild(upgradeName);

		const imgCont = document.createElement('div');
		imgCont.className = "towerImgContainer";
		towerCont.appendChild(imgCont);

		const towerImg = document.createElement('img');
		imgCont.appendChild(towerImg);

		const statsCont = document.createElement('div');
		statsCont.className = "iconedStatsContainer";
		towerCont.appendChild(statsCont);

		

		towerName.textContent = this.name + " (" + path[0] + "-" + path[1] + "-" + path[2] + ")";
		upgradeName.textContent = this.getUpgradeName(path);
		towerImg.src = this.getImagePath(path);

		this.properties.forEach((property) => {
			if (property.key == "size") {
				if (this.getTotalCost(path) != 0) {
					const cashProperty = new PropertyIconed("cost", this.getTotalCost(path));
					statsCont.appendChild(cashProperty.toHTML());
				}
			}
			statsCont.appendChild(property.toHTML());
		});

		if ((this.getAttacks(path) != null) && (this.getAttacks(path).length > 0)) {
			const attacksHeader = document.createElement('p');
			attacksHeader.className = "attacksHeader";
			towerCont.appendChild(attacksHeader);

			const attacksCont = document.createElement('div');
			attacksCont.className = "attacksContainer";
			towerCont.appendChild(attacksCont);	
			attacksHeader.textContent = "Attacks";

			this.getAttacks(path).forEach((attack) => {
				attacksCont.appendChild(attack.toHTML());
			});
		}
		
		if ((this.getAbilities(path) != null) && (this.getAbilities(path).length > 0)) {
			const abilitiesHeader = document.createElement('p');
			abilitiesHeader.className = "attacksHeader";
			towerCont.appendChild(abilitiesHeader);

			const abilitiesCont = document.createElement('div');
			abilitiesCont.className = "attacksContainer";
			towerCont.appendChild(abilitiesCont);


			abilitiesHeader.textContent = "Abilities";
			this.getAbilities(path).forEach((ability) => {
				abilitiesCont.appendChild(ability.toHTML());
			});
		}
		
		rootDiv.appendChild(towerCont);
		const subtowers	= this.getSubtowers(path);
		for (let i = 0; i < subtowers.length; i++) {
			const subParent = document.createElement('div');
			const subtower = await Tower.getTowerById(subtowers[i]);
			const subtowerHTML = await subtower.toHTML("000", subParent);
			subParent.appendChild(subtowerHTML);
			rootDiv.appendChild(subParent);
		}

		return rootDiv;
	}

	static async getTowerById(id) {
		let dataPath = '/data/' + id + '.json';
		const data = await Tower.loadData(dataPath);
		return Tower.fromJson(data);
		
	}
	
	static async loadData(dataPath) {
		try {
			const response = await fetch(dataPath);
			if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
			const data = await response.json();
			return data;
		}
		catch (error) {
			console.error("Failed to load JSON:", error);
		}
	}

	getImagePath(path) {
		const domPath = Tower.getDominantPath(path);
		const upgrade = this.upgrades.find(upgrade => upgrade.path == domPath);
		if ((upgrade != null) && (upgrade.portraitSource != null)) return upgrade.portraitSource;
		return "/media/towerPortraits/" + this.id + "/" + domPath + ".png";
	}

    getUpgradeName(path) {
        let dpath = Tower.getDominantPath(path);
        for (let i = 0; i < this.upgrades.length; i++) {
            if (this.upgrades[i].path == dpath) return this.upgrades[i].name; 
        }
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
		const attacks = [];
		this.upgrades.forEach((upgrade) => {
			if (Tower.isChildUpgrade(path, upgrade.path)) {
				if (upgrade.attacks != null) {
					upgrade.attacks.forEach((attack) => {
						attacks.push(attack);
					});
				}
			}
		});
		const filteredAttacks = [];
		let flag;
		for (let i = 0; i < attacks.length; i++) {
			flag = true;
			for (let j = i + 1; j < attacks.length; j++) {
				if (attacks[j].overwrites == null) continue;
				if (attacks[j].overwrites.includes(attacks[i].id)) {
					flag = false;
					break;
				}
			}
			if (flag) filteredAttacks.push(attacks[i]);
		}
		const buffedAttacks = [];
		let buffs = this.getBuffs(path);
		for (let i = 0; i < filteredAttacks.length; i++) {
			let currentAttack = filteredAttacks[i]
			for (let j = 0; j < buffs.length; j++) {
				currentAttack = currentAttack.buffedBy(buffs[j]);
			}
			buffedAttacks.push(currentAttack);
		}
		return buffedAttacks;
	}

	getBuffs(path) {
		let buffs = [];
		this.upgrades.forEach((upgrade) => {
			if (Tower.isChildUpgrade(path, upgrade.path)) {
				if (upgrade.buffs != null) {
					upgrade.buffs.forEach((buff) => {
						buffs.push(buff);
					});
				}
			}
		});
		return buffs;
	}

    getAbilities(path) {
		const abilities = [];
		this.upgrades.forEach((upgrade) => {
			if (Tower.isChildUpgrade(path, upgrade.path)) {
				if (upgrade.abilities != null) {
					upgrade.abilities.forEach((ability) => {
						abilities.push(ability);
					});
				}
			}
		});
		const filteredAbilities = [];
		let flag;
		for (let i = 0; i < abilities.length; i++) {
			flag = true;
			for (let j = i + 1; j < abilities.length; j++) {
				if (abilities[j].overwrites == null) continue;
				if (abilities[j].overwrites.includes(abilities[i].id)) {
					flag = false;
					break;
				}
			}
			if (flag) filteredAbilities.push(abilities[i]);
		}
		return filteredAbilities;
	}

	getSubtowers(path) {
		const overwrites = [];
		this.upgrades.forEach((upgrade) => {
			if (Tower.isChildUpgrade(path, upgrade.path)) {
				if (upgrade.overwrites_subtowers != null) {
					upgrade.overwrites_subtowers.forEach((overwrite) => {
						overwrites.push(overwrite);
					});
				}
			}
		});
		const subtowers = [];
		this.upgrades.forEach((upgrade) => {
			if (Tower.isChildUpgrade(path, upgrade.path)) {
				if (upgrade.subtowers != null) {
					upgrade.subtowers.forEach((subtower) => {
						if (!overwrites.includes(subtower)) subtowers.push(subtower);
					});
				}
			}
		});
		return subtowers
	}

	getTotalCost(path) {
		let totalCost = 0;
		this.upgrades.forEach((upgrade) => {
			if (Tower.isChildUpgrade(path, upgrade.path)) totalCost += upgrade.cost;
		});
		return totalCost;
	}

	static isChildUpgrade(path, upgrade) {
		const pathNums = [...path].map(Number);
		const upgradeNums = [...upgrade].map(Number);
		for (let i = 0; i < pathNums.length; i++) {
			if (upgradeNums[i] > pathNums[i]) return false;
		}
		return true;
	}

	static validPath(path) {
		const pathNums = [...path].map(Number);
		pathNums.forEach((path) => {
			if ((path > 5) || (path < 0)) {
				console.error("Upgrade path outside of allowed range");
				return false;
			}
		});
		return true;
	}

}


