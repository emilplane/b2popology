export class PropertyIconed {

	static PLACEMENT = ["Land", "Water", "Amphibious"];

	constructor(key, val) {
		this.key = key;
		this.val = val;
	}

	clone() {
		return new PropertyIconed(this.key, this.val);
	}
	
	toHTML() {
		const divMain = document.createElement('div');
		const p = document.createElement('p');
		const divBox =document.createElement('div');
		const img = document.createElement('img');

		divBox.className = "iconedStatBox";
		p.textContent = this.formattedValue();
		img.src = "/media/propertyIcons/" + this.key + ".png";

		divBox.appendChild(p);
		divMain.appendChild(img);
		divMain.appendChild(divBox);

		return divMain;
	}
	
	formattedValue() {
		switch (this.key) {
			case "placement":
				return PropertyIconed.PLACEMENT[this.val];
			case "size":
				if (this.val.length == 1) return this.val[0] + " radius";
				else if (this.val.length == 2) return this.val[0] + "x" + this.val[1];
			case "unlockCost":
				if (this.val == 0) return "Free";
				return this.val.toLocaleString() + " MM";
			case "cost":
				return "$" + this.val.toLocaleString();
			default:
				return this.val;
		}
	}

}
