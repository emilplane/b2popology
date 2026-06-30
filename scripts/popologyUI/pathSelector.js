import { Tower } from '/scripts/popologyClasses/tower.js';

export class PathSelector {
	
	constructor(tower, path) {
		this.tower = tower;
		this.path = path
		this.selected = [...path].map(Number);
	}
	
	async toHTML(parent) {
		const mainCont = document.createElement('div');
		mainCont.className = "pathSelectorContainer";

		const topCont = document.createElement('div');
		const midCont = document.createElement('div');
		const botCont = document.createElement('div');

		if (this.tower.upgrades == null) return;
		this.tower.upgrades.forEach((upgrade) => {
			if (upgrade.path == "000") return;

			const butt = document.createElement("button");
			const pathNums = [...upgrade.path].map(Number);
			for (let i = 0; i < pathNums.length; i++) {
				if (pathNums[i] == 0) continue;
				if (pathNums[i] < this.selected[i]) butt.className = "pathSelectorButtonSub";
				else if (pathNums[i] == this.selected[i]) butt.className = "pathSelectorButtonDom";
				else butt.className = "pathSelectorButtonReg";
			}

			butt.addEventListener('click', async (event) => {
				const towerHTML = await this.tower.toHTML(this.combineSelected(upgrade.path), parent);
				parent.replaceChildren(towerHTML);
			});

			const img = document.createElement('img');
			img.src = this.getUpgradeIconSource(upgrade.path);

			butt.appendChild(img);

			if (upgrade.path[0] != "0") topCont.appendChild(butt);
			else if (upgrade.path[1] != "0") midCont.appendChild(butt);
			else botCont.appendChild(butt);
		});

		mainCont.appendChild(topCont);
		mainCont.appendChild(midCont);
		mainCont.appendChild(botCont);

		return mainCont;
	}

	getUpgradeIconSource(path) {
		const domPath = Tower.getDominantPath(path);
		const upgrade = this.tower.upgrades.find(upgrade => upgrade.path == domPath);
		if ((upgrade != null) && (upgrade.iconSource != null)) return upgrade.iconSource;
		return "/media/upgradeIcons/" + this.tower.id + "/" + domPath + ".png";
	}

	combineSelected(path) {
		const pathNums = [...path].map(Number);
		for (let i = 0; i < pathNums.length; i++) {
			if (pathNums[i] == this.selected[i]) this.selected[i] = 0;
			else if (pathNums[i] != 0) {
				if (pathNums[i] > 2) {
					for (let j = 0; j < this.selected.length; j++) {
						if (this.selected[j] > 2) this.selected[j] = 0;
					}
				}
				for (let j = 0; j < this.selected.length; j++) {
					if (this.selected[j] <= 2) this.selected[j] = 0;
				}
				this.selected[i] = pathNums[i];
			}
		}
		return this.selected.join("");
	}

}
