export class PropertyCrit {

	constructor(key, val) {
		this.key = key;
		this.val = val;
	}

	clone() {
		return new PropertyCrit(this.key, this.val);
	}

	toHTML(attack) {
		if ((this.key == null) || (this.val == null)) return;

		const cont = document.createElement('div');
		const p = document.createElement('p');

		let str = "Crits once every " + this.val[0] + " attacks\n";
		str += "dealing " + this.val[1] + " damage";
		p.textContent = str;
		cont.className = "propertyCont";

		cont.appendChild(p);

		return cont;
	}

	applyBuff(buff) {
		switch (buff.operation) {
			case "add":
				this.val[1] = this.val[1] + buff.value;
				break;
			case "mul":
				this.val[1] = (this.val[1] * buff.value);
				break;
			case "set":
				this.val[1] = buff.value;
		}
	}

}
