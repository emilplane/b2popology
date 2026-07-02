import { PropertiesManager } from './properties/properties-manager.js';
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
    const attacks = (data.attacks || []).map(attackData =>
    Attack.fromData(attackData)
    );
    const buffs = (data.buffs || []).map(buffData =>
    Buff.fromData(buffData)
    );
    const properties = PropertiesManager.propertiesFromData(data.properties);
    return new Ability(data.id, data.name, data.overwrites, attacks, buffs, properties);
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
    const properties = Array.from(this.properties);

    const rootContainer = document.createElement('div');
    const abilityName = document.createElement('h4');
    const centerContainer = document.createElement('div');
    const propertiesContainerStyler = document.createElement('div');
    const propertiesContainer = document.createElement('div');

    rootContainer.append(abilityName, centerContainer);
    centerContainer.append(propertiesContainerStyler);
    propertiesContainerStyler.append(propertiesContainer);

    centerContainer.className = 'center-container';
    propertiesContainerStyler.className = 'properties-container-styler';
    propertiesContainer.className = 'properties-container';

    abilityName.textContent = this.name + ' Ability';

    const initialCooldown = properties.find(property => property.key == 'initialCooldown');
    if (initialCooldown == null || initialCooldown.val == 0) {
      properties.push(PropertiesManager.createProperty('battleReady', true));
    }

    this.attacks.forEach((attack) => {
      const attackNote = PropertiesManager.createProperty('notes', [String( 'Activates ' + attack.name + ' attack for the duration of the ability')]);
      properties.push(attackNote);
      rootContainer.append(attack.toHTML());
    });

    properties.forEach((property) => {
      if (property.key == 'notes' || property.key == 'desc') {
        propertiesContainerStyler.append(property.toHTML());
      }
      else {
        let element = property.toHTML(this);
        if (element == null) return;
        propertiesContainer.append(element);
      }
    });

    this.buffs.forEach((buff) => {
      propertiesContainerStyler.append(buff.toHTML());
    });

    return rootContainer;
  }

}
