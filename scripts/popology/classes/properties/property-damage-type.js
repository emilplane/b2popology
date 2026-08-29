import { PropertyIconed } from './property-iconed.js';

export class PropertyDamageType extends PropertyIconed {

  static TYPE_PRIORITY = {
    "normal" : 100,
    "plasma" : 2,
    "fire" : 2,
    "shatter" : 2,
    "glacier" : 2,
    "sharp" : 1,
    "energy" : 1,
    "explosion" : 1,
    "cold" : 0
  }

  clone() {
    return new PropertyDamageType(this.key, this.val);
  }

  formattedValue() {
    return this.val[0].toUpperCase() + this.val.slice(1);
  }

  applyBuff(buff) {
    switch (buff.operation) {
      case 'set':
        this.val = buff.value;
        break;
      case 'upgrade':
        if (PropertyDamageType.TYPE_PRIORITY[buff.value] > PropertyDamageType.TYPE_PRIORITY[this.val]) {
          this.val = buff.value;
        }
        break;
      default:
        console.warn(`Damage Type buff has an invalid operator: ${buff.operator}`);
        break;
    }
  }

}
