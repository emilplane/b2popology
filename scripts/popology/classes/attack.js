import { PropertiesManager } from './properties/properties-manager.js';
import { PropertiesContainer } from '../ui/properties-container.js';

export class Attack {

  static ATTACKTYPE = {
    "explosion" : "Explosion"
  }

  constructor(id, name, overwrites, properties) {
    this.id = id;
    this.name = name;
    this.overwrites = overwrites;
    this.properties = properties;
  }

  static fromData(data) {
    const properties = PropertiesManager.propertiesFromData(data.properties);
    return new Attack(data.id, data.name, data.overwrites, properties);
  }

  clone() {
    const properties = [];
    this.properties.forEach((property) => {
      properties.push(property.clone());
    });

    return new Attack(this.id, this.name, this.overwrites, properties);
  }

  addFlag(flag) {
    if (this.properties.flags == null) this.properties.flags = [];
    this.properties.flags.push(flag);
  }

  buffedBy(buff) {
    const attack = this.clone();
    // buff the embedded attacks before anything else
    {
      let embeddedAttacks = attack.properties.find(property => property.key == 'embeddedAttacks');
      if (embeddedAttacks != null) {
        const buffedAttacks = [];
        embeddedAttacks.val.forEach((embeddedAttack) => {
          buffedAttacks.push(embeddedAttack.buffedBy(buff));
        });
        embeddedAttacks.val = buffedAttacks;
      }
    }
    if (
      (!buff.affectedAttacks.includes('EX_' + this.id)) &&
      ((buff.affectedAttacks.includes('all')) || (buff.affectedAttacks.includes(this.id)))
    ) {
      // handle special buffs that append some embedded object
      if (buff.type == 'appendDoT') {
        if (attack.properties.dots == null) attack.properties.dots = [];
        attack.properties.push(PropertiesManager.createProperty('dot', buff.value));
        return attack;
      }
      if (buff.type == 'appendAttack') {
        let embeddedAttacks = attack.properties.find(property => property.key == 'embeddedAttacks');
        if (embeddedAttacks == null) {
          embeddedAttacks = PropertiesManager.createProperty('embeddedAttacks', [])
          attack.properties.push(embeddedAttacks);
        }
        embeddedAttacks.val.push(Attack.fromData(buff.value));
        return attack;
      }
      // apply property buffs, if buff doesn't exist but has the operator 'set', then create the property
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
    // damage buffs also buff crits
    if (buff.type == 'damage') {
      const newBuff = buff.clone();
      newBuff.type = 'crit';
      return attack.buffedBy(newBuff);
    }
    return attack;
  }

  toHTML() {
    const rootContainer = document.createElement('div');

    if (this.name != null && (this.properties.flags == null || !this.properties.flags.includes('noHeader')) ) {
      const attackName = document.createElement('h4');
      rootContainer.append(attackName)
      attackName.textContent = `${this.name} Attack`;
    }

    const centerContainer = document.createElement('div');
    const propertiesContainer = new PropertiesContainer(this.properties, this)
    propertiesContainer.addChildren(this.dots);

    if (this.properties.flags != null && this.properties.flags.includes('thirdaryBackground')) {
      const backgroundColorVariable = '--background-thirdary';
      const backgroundColor = window.getComputedStyle(document.body).getPropertyValue(backgroundColorVariable);
      propertiesContainer.setBackgroundColor(backgroundColor);
    }

    rootContainer.append(centerContainer);
    centerContainer.append(propertiesContainer.toHTML());

    centerContainer.classList.add('center-container');

    return rootContainer;
  }

}
