import { CreateProperty } from './properties/create-property.js';
import { Attack } from './attack.js';
import { Buff } from './buff.js';

export class Ability {

  constructor(id, name, overwrites, attacks, buffs, properties) {
    this.id = id;
    this.name = name;
    this.overwrites = overwrites;
    this.attacks = attacks;
    this.buffs = buffs;
    this.properties = properties;

  }

  static fromData(data = {}) {
    const ability = new Ability();
    ability.id = data.id;
    ability.name = data.name;
    ability.overwrites = data.overwrites;
    ability.attacks = (data.attacks || []).map(attackData =>
    Attack.fromData(attackData)
    );
    ability.buffs = (data.buffs || []).map(buffData =>
    Buff.fromData(buffData)
    );
    const properties = [];
    Object.entries(data.properties).forEach(([key, value]) => {
      const property = CreateProperty.create(key, value);
      if (Array.isArray(property)) properties.push(...property);
      else properties.push(property);
    });
      ability.properties = properties
      return ability;
  }

  clone() {
    const ability = new Ability();
    ability.id = this.id;
    ability.name = this.name
    ability.overwrites = this.overwrites;
    this.properties.forEach((property) => {
      ability.properties.push(property.clone());
    });
    return ability;
  }

  toHTML() {
    const divMain = document.createElement('div');
    const divCenterGray = document.createElement('div');
    divCenterGray.className = "center-container";

    const divGray = document.createElement('div');
    const parName = document.createElement('h4');
    const propertyContainer = document.createElement('div');

    parName.textContent = this.name + " Ability";
    divGray.className = "properties-container-styler";

    if ((this.properties.initialCooldown == null) || (this.properties.initialCooldown == 0)) {
      const p = document.createElement('p');
      p.textContent = 'Battle\nReady';

      const battleReadyCont = document.createElement('div');
      battleReadyCont.classList.add('property-basic-value', 'outline-blue');

      battleReadyCont.append(p);
      propertyContainer.append(battleReadyCont);
    }

    propertyContainer.className = "properties-container";
    divGray.append(propertyContainer);

    this.properties.forEach((property) => {
      if (property.key == 'notes') {
        divGray.append(property.toHTML());
      }
      else {
        let element = property.toHTML(this);
        if (element == null) return;
        propertyContainer.append(element);
      }
    });

    divCenterGray.append(divGray);

    divMain.append(parName);
    divMain.append(divCenterGray);

    return divMain;
  }

}
