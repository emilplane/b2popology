import { PropertiesManager } from './properties/properties-manager.js';
import { PropertiesContainer } from '../ui/properties-container.js';
import { DoT } from './dot.js';

export class Attack {

  constructor(id, name, overwrites, dots, properties) {
    this.id = id;
    this.name = name;
    this.overwrites = overwrites;
    this.dots = dots;
    this.properties = properties;
  }

  static fromData(data) {
    const dots = [];
    const properties = PropertiesManager.propertiesFromData(data.properties);
    if (data.dots != null) {
      data.dots.forEach((dot) => {
        dots.push(DoT.fromData(dot));
      });
    }
    return new Attack(data.id, data.name, data.overwrites, dots, properties);
  }

  clone() {
    const dots = [];
    const properties = [];
    this.dots.forEach((dot) => {
      dots.push(dot.clone());
    });
    this.properties.forEach((property) => {
      properties.push(property.clone());
    });

    return new Attack(this.id, this.name, this.overwrites, dots, properties);
  }

  buffedBy(buff) {
    const attack = this.clone();
    if (
      (!buff.affectedAttacks.includes('EX_' + this.id)) &&
      ((buff.affectedAttacks.includes('all')) || (buff.affectedAttacks.includes(this.id)))
    ) {
      let propertyToBuff = attack.properties.find(property => property.key == buff.type);
      if (propertyToBuff == null) {
        if (buff.operation == 'set') {
          propertyToBuff = PropertiesManager.createProperty(buff.type, buff.value);
          attack.properties.push(propertyToBuff);
        }
        else if ((buff.operation == 'add') && (['lead', 'fort', 'moab', 'ceram'].includes(buff.type))) {
          propertyToBuff = PropertiesManager.createProperty(buff.type, 0);
          attack.properties.push(propertyToBuff);
        }
      }
      if (propertyToBuff != null) propertyToBuff.applyBuff(buff);
    }
    if (buff.type == 'damage') {
      const newBuff = buff.clone();
      newBuff.type = 'crit';
      return attack.buffedBy(newBuff);
    }
    if (buff.type == 'range') {
      const newBuff = buff.clone();
      newBuff.type = 'rangeZone';
      return attack.buffedBy(newBuff);
    }
    return attack;
  }

  toHTML() {
    const rootContainer = document.createElement('div');
    const attackName = document.createElement('h4');
    const centerContainer = document.createElement('div');
    const propertiesContainer = new PropertiesContainer(this.properties, this)

    rootContainer.append(attackName, centerContainer);
    centerContainer.append(propertiesContainer.toHTML());

    centerContainer.className = 'center-container';

    attackName.textContent = this.name + ' Attack';

    if (this.dots != null) {
      this.dots.forEach((dot) => {
        rootContainer.append(dot.toHTML());
      });
    }

    return rootContainer;
  }

}
