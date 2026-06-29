import { PropertyBasic } from './properties/propertyBasic.js';
import { PropertyCamo } from './properties/propertyCamo.js';
import { PropertyBonusDamage } from './properties/propertyBonusDamage.js';
import { PropertyFootnote } from './properties/propertyFootnote.js';
import { PropertyCrit } from './properties/propertyCrit.js';

export class Attack {

	constructor(id, name, overwrites, properties) {
		this.id = id;
		this.name = name;
		this.overwrites = overwrites;
		this.properties = [];
		if (properties != null) {
			Object.keys(properties).forEach((key) => {
				this.properties.push(...Attack.createProperty(key, properties[key]))
			});
		}
	}
	
	static fromJson(data = {}) {
		return new Attack(data.id, data.name, data.overwrites, data.properties);
	}
	
	static createProperty(key, val) {
		switch (key) {
			case "camo":
				return [new PropertyCamo(key, val)];
			case "bonusDamage":
				const arr = [];
				Object.keys(val).forEach((bkey) => {
					arr.push(new PropertyBonusDamage(bkey, val[bkey]))
				});
				return arr;
			case "notes":
				return [new PropertyFootnote(key, val)];
			case "crit":
				return [new PropertyCrit(key, val)];
			default:
				return [new PropertyBasic(key, val)];
		}
	}

    clone() {
        let attack = new Attack();
		attack.id = this.id;
		attack.name = this.name
		attack.overwrites = this.overwrites;
		this.properties.forEach((property) => {
			attack.properties.push(property.clone());
		});
        return attack;
    }

	buffedBy(buff) {
		let attack = this.clone();
		if (
			(!buff.affectedAttacks.includes("EX_" + this.id)) && 
			((buff.affectedAttacks.includes("all")) || (buff.affectedAttacks.includes(this.id)))
		) {
			let propertyToBuff = attack.properties.find(property => property.key == buff.type);
			if ((buff.operation == "set") && (propertyToBuff == null)) {
				propertyToBuff = Attack.createProperty(buff.type, null)[0];
				attack.properties.push(propertyToBuff);
			}
			if (propertyToBuff != null) propertyToBuff.applyBuff(buff);
		}
		if (buff.type == "damage") {
			let newBuff = buff.clone();
			newBuff.type = "crit";
			return attack.buffedBy(newBuff);
		}
		return attack;
	}

	toHTML() {
		const divMain = document.createElement('div');
		const divGray = document.createElement('div');
		const parName = document.createElement('p');
		const propertyContainer = document.createElement('div');

		parName.className = "attackName";
		parName.textContent = this.name + " Attack";
		divGray.className = "grayBox";

		propertyContainer.className = "attackStatContainer";
		divGray.appendChild(propertyContainer);
	
		this.properties.forEach((property) => {
			if (property instanceof PropertyFootnote) {
				divGray.appendChild(property.toHTML());
			}
			else if (property instanceof PropertyCamo) {
				return
			}
			else {
				let element = property.toHTML(this);
				if (element == null) return;
				propertyContainer.appendChild(element);
			}
		});
		
		const camo = this.properties.find(property => property.key == "camo");
		if ((camo != null) && (camo.val== true)) propertyContainer.appendChild(camo.toHTML());

		divMain.appendChild(parName);
		divMain.appendChild(divGray);

		return divMain;
	}

}
