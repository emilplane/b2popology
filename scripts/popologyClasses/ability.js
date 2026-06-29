import { PropertyBasic } from './properties/propertyBasic.js';
import { PropertyFootnote } from './properties/propertyFootnote.js';

export class Ability {
    
    constructor(id, name, overwrites, properties) {
        this.id = id;
		this.name = name;
		this.overwrites = overwrites;
		this.properties = [];
		if (properties != null) {
			Object.keys(properties).forEach((key) => {
				this.properties.push(...Ability.createProperty(key, properties[key]))
			});
		}
    }

    static fromJson(data = {}) {
        return new Ability(data.id, data.name, data.overwrites, data.properties);
    }
	
	static createProperty(key, val) {
		switch (key) {
			case "desc":
				return [new PropertyFootnote(key, val)];
			default:
				return [new PropertyBasic(key, val)];
		}
	}

	clone() {
		let ability = new Ability();
		ability.id = this.id;
		abliity.name = this.name
		ability.overwrites = this.overwrites;
		this.properties.forEach((property) => {
			ability.properties.push(property.clone());
		});
		return ability;
	}

	toHTML() {
		const divMain = document.createElement('div');
		const divGray = document.createElement('div');
		const parName = document.createElement('p');
		const propertyContainer = document.createElement('div');

		parName.className = "attackName";
		parName.textContent = this.name + " Ability";
		divGray.className = "grayBox";

		if ((this.properties.initial_cooldown == null) || (this.properties.initial_cooldown == 0)) {
			const battleReady = document.createElement('p');
			battleReady.className = "battleReady";
			battleReady.textContent = "Battle Ready";
			divGray.appendChild(battleReady);
		}

		propertyContainer.className = "attackStatContainer";
		divGray.appendChild(propertyContainer);
	
		this.properties.forEach((property) => {
			if (property instanceof PropertyFootnote) {
				divGray.appendChild(property.toHTML());
			}
			else {
				let element = property.toHTML(this);
				if (element == null) return;
				propertyContainer.appendChild(element);
			}
		});

		divMain.appendChild(parName);
		divMain.appendChild(divGray);

		return divMain;
	}

}
