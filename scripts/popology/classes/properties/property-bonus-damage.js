import { PropertyBasic } from './property-basic.js';
import { Property } from './property.js';

export class PropertyBonusDamage extends Property {

  static FORMATTED_TYPES = {
    ceram : "Ceramic",
    lead : "Lead",
    fort : "Fortified",
    moab : "Moab",
    camo : "Camo",
    stun : "Stunned Bloon",
    bad : "BAD",
    laser : "Lasered Bloon"
  }

  clone() {
    return new PropertyBonusDamage(this.key, structuredClone(this.val));
  }

  toHTML(attack) {
    if (!this.key || !this.val || !attack) return;

    const propertiesHTML = [];
    Object.keys(this.val).forEach((key) => {
      const property = new PropertyBasic(this.formatKey(key),this. formatVal(key, attack));
      propertiesHTML.push(property.toHTML());
    });

    return propertiesHTML;
  }

  toText(attack) {
    let str = '';
    Object.keys(this.val).forEach((key, i, arr) => {
      str += `${this.formatKey(key)} ${this.formatVal(this.val[key], attack)}`;
      if (i != arr.length - 1) str += ', ';
    });
    return str;
  }

  formatKey(key) {
    return `${PropertyBonusDamage.FORMATTED_TYPES[key]} Damage`;
  }

  formatVal(key, attack) {
    let total = this.val[key];
    const damageProperty = attack.properties.find(property => property.key == 'damage');
    if (damageProperty != null) total += damageProperty.val;
    if (key == 'bad' && this.val["moab"] != null) total += this.val["moab"];
    return `+${this.val[key]} (${total} total)`;
  }

  applyBuff(buff) {
    switch (buff.operation) {
      case 'add':
        Object.keys(buff.value).forEach((key) => {
          if (this.val[key] == null) this.val[key] = 0;
          this.val[key] += buff.value[key];
        });
        break;
      case 'mul':
        Object.keys(buff.value).forEach((key) => {
          if (this.val[key] == null) return;
          this.val[key] = parseFloat((this.val[key] * buff.value[key]).toFixed(2));
        });
        break;
      case 'set':
        Object.keys(buff.value).forEach((key) => {
          this.val[key] = buff.value[key];
        });
        break;
    }
  }

}
