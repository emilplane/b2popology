import { CreateProperty } from './properties/create-property.js';

export class Attack {

  constructor(id, name, overwrites, properties) {
    this.id = id;
    this.name = name;
    this.overwrites = overwrites;
    this.properties = properties;
  }

  static fromData(data) {
    const properties = [];
    Object.entries(data.properties).forEach(([key, value]) => {
      const property = CreateProperty.create(key, value);
      if (Array.isArray(property)) properties.push(...property);
      else properties.push(property);
    });
      return new Attack(data.id, data.name, data.overwrites, properties);
  }

  clone() {
    const properties = [];
    this.properties.forEach((property) => {
      properties.push(property.clone());
    });
    return new Attack(this.id, this.name, this.overwrites, properties);
  }

  buffedBy(buff) {
    const attack = this.clone();
    if (
      (!buff.affectedAttacks.includes('EX_' + this.id)) &&
      ((buff.affectedAttacks.includes('all')) || (buff.affectedAttacks.includes(this.id)))
    ) {
      let propertyToBuff = attack.properties.find(property => property.key == buff.type);
      if ((buff.operation == 'set') && (propertyToBuff == null)) {
        propertyToBuff = CreateProperty.create(buff.type, buff.value);
        attack.properties.push(propertyToBuff);
      }
      if (propertyToBuff != null) propertyToBuff.applyBuff(buff);
    }
    if (buff.type == 'damage') {
      const newBuff = buff.clone();
      newBuff.type = 'crit';
      return attack.buffedBy(newBuff);
    }
    return attack;
  }

  toHTML() {
    const divMain = document.createElement('div');
    const divCenterGray = document.createElement('div');
    const divGray = document.createElement('div');
    const attackName = document.createElement('h4');
    const propertiesContainer = document.createElement('div');

    attackName.textContent = this.name + " Attack";
    divCenterGray.className = "center-container";
    divGray.className = "properties-container-styler";

    propertiesContainer.className = 'properties-container';
    divGray.append(propertiesContainer);

    this.properties.forEach((property) => {
      if (property.key == 'notes') {
        divGray.append(property.toHTML());
      }
      else if (property.key == 'camo') {
        return
      }
      else {
        let element = property.toHTML(this);
        if (element == null) return;
        propertiesContainer.append(element);
      }
    });

    const camo = this.properties.find(property => property.key == 'camo');
    if ((camo != null) && (camo.val== true)) propertiesContainer.append(camo.toHTML());

    divCenterGray.append(divGray);

    divMain.append(attackName);
    divMain.append(divCenterGray);

    return divMain;
  }

}
