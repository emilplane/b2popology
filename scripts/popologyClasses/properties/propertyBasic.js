export class PropertyBasic {
	constructor(key, val) {
		this.key = key;
		this.val = val;
	}
	
	clone() {
		return new PropertyBasic(this.key, this.val);
	}

	toHTML() {
		if ((this.key == null) || (this.val == null)) return;

		const cont = document.createElement('div');
		const pkey = document.createElement('p');
		const pval = document.createElement('p');

		const uppercaseKey = this.key ? this.key[0].toUpperCase() + this.key.slice(1) : this.key;
		pkey.textContent = uppercaseKey;
		pval.textContent = this.formattedValue();
		pval.className = "attackStat";

		cont.appendChild(pkey);
		cont.appendChild(pval);

		return cont;
	}

	formattedValue() {
		switch (this.key) {
			case "cooldown":
				return this.val + "s";
			case "duration":
				return this.val + "s";
			default:
				return this.val;
		}
	}

	applyBuff(buff) {
		switch (buff.operation) {
			case "add":
				this.val = this.val + buff.value;
				break;
			case "mul":
				this.val = (this.val * buff.value).toFixed(5);
				break;
			case "set":
				this.val = buff.value;
		}
	}

}
