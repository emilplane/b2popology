import { PropertiesManager } from './properties/properties-manager.js';
import { PropertiesContainer } from '../ui/properties-container.js';
import { Attack } from './attack.js';
import { Buff } from './buff.js';
import { PropertyHeader } from '../ui/property-header.js';

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
    const attacks = [];
    const buffs = [];
    const properties = [];
    this.attacks.forEach((attack) => {
      attacks.push(attack.clone());
    });
    this.buffs.forEach((buff) => {
      buffs.push(buff.clone());
    });
    this.properties.forEach((property) => {
      properties.push(property.clone());
    });
    return new Ability(this.id, this.name, this.overwrites, attacks, buffs, properties);
  }

  toHTML() {
    const properties = Array.from(this.properties);
    const initialCooldown = properties.find(property => property.key == 'initialCooldown');
    if (initialCooldown == null || initialCooldown.val == 0) {
      properties.push(PropertiesManager.createProperty('battleReady', true));
    }

    const rootContainer = document.createElement('div');
    const abilityName = document.createElement('h4');
    const centerContainer = document.createElement('div');
    const propertiesContainer = new PropertiesContainer(properties)

    propertiesContainer.addChildren(this.buffs);
    this.attacks.forEach((attack) => {
      attack.addFlag('noHeader');
      attack.addFlag('thirdaryBackground')
      const attackHeader = new PropertyHeader(`Activates ${attack.name} attack for the duration of the ability`);
      propertiesContainer.addChildren(attackHeader, attack);
    });

    rootContainer.append(abilityName, centerContainer);
    centerContainer.append(propertiesContainer.toHTML());

    centerContainer.className = 'center-container';

    abilityName.textContent = this.name + ' Ability';

    return rootContainer;
  }

}
