export class PropertyBonusDamage {

	static FORMATTED_TYPES = {
		ceram : "Ceramic",
		lead : "Lead",
		fort : "Fortified",
		moab : "Moab"
	}

	constructor(key, val) {
		this.key = key;
		this.val = val;
	}

	clone() {
		return new PropertyBonusDamage(this.key, this.val);
	}

	toHTML(attack) {
		if ((this.key == null) || (this.val == null)) return;

		const cont = document.createElement('div');
		const pkey = document.createElement('p');
		const pval = document.createElement('p');

		pkey.textContent = PropertyBonusDamage.FORMATTED_TYPES[this.key] + " Damage";

		const damage_property = attack.properties.find(property => property.key === "damage");
		pval.textContent = (damage_property.val + this.val) + " (+" + this.val + ")";
		pval.className = "attackStat";

		cont.appendChild(pkey);
		cont.appendChild(pval);

		return cont;
	}

	applyBuff(buff) {
		switch (buff.operation) {
			case "add":
				this.val = this.val + buff.value;
				break;
			case "mul":
				this.val = this.val * buff.value;
				break;
			case "set":
				this.val = buff.value;
		}
	}

}
