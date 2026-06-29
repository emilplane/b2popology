export class PathSelector {
	
	constructor(tower, path) {
		this.tower = tower;
		this.path = path;
		this.setSelected(path);
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
			butt.addEventListener('click', async (event) => {
				const towerHTML = await this.tower.toHTML(upgrade.path, parent);
				parent.replaceChildren(towerHTML);
			});

			const img = document.createElement('img');
			img.src = "/media/upgradeIcons/" + this.tower.id + "/" + upgrade.path + ".png";
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

	combineSelected(path) {
		if (PathSelector.getTier(path) > 2) {
			return path;
		}
	}

	setSelected(path) {
		let found = 0;
		const pathNums = [...path].map(Number);
		for (let i = 0; i < pathNums.length; i++) {
			if (pathNums[i] != 0) {
				if (found == 0) {
					this.selected1 = PathSelector.posAndTierToPath(i, pathNums[i]);
					found++;
				}
				else {
					this.selected2 = PathSelector.posAndTierToPath(i, pathNums[i]);
					found++;
				}
			}
		}
		if (found < 2) this.selected2 = "000";
		if (found < 1) this.selected1 = "000";
	}
	
	static posAndTierToPath(pos, tier) {
		switch (pos) {
			case 0:
				return tier + "00";
			case 1:
				return "0" + tier + "0";
			case 2:
				return "00" + tier;
		}
	}

	static getTier(path) {
		for (let i = 0; i < path.length; i++) {
			if (path[i] != "0") return path[i];
		}
		return "0";
	}


}
