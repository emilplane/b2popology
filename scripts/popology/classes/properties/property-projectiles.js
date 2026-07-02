import { PropertyBasic } from './property-basic.js';

export class PropertyProjectiles extends PropertyBasic {

  clone() {
    if (Array.isArray(this.val)) return new PropertyProjectiles(this.key, Array.from(this.val));
    return new PropertyProjectiles(this.key, this.val);
  }

  formattedValue() {
    if (!Array.isArray(this.val)) return this.val;
    else if (this.val.length == 1) return this.val[0];
    return `${this.val[0]} (${this.val[1]}° spread)`;
  }

  applyBuff(buff) {
    if (Array.isArray(buff.value)) this.applyBuffArray(buff);
    else this.applyBuffNormal(buff);
  }

  applyBuffArray(buff) {
    switch (buff.operation) {
      case 'add':
        if (!Array.isArray(this.val)) this.val = this.val + buff.value[0];
        else console.warn('Buff object tried to add spread, try setting spread instead');
        break;
      case 'set':
        this.val = buff.value;
        break;
    }
  }

  applyBuffNormal(buff) {
    switch (buff.operation) {
      case 'add':
        if (!Array.isArray(this.val)) this.val = this.val + buff.value;
        else this.val[0] = this.val[0] + buff.value;
        break;
      case 'set':
        if (!Array.isArray(this.val)) this.val = buff.value;
        else this.val[0] = buff.value;
        break;
    }
  }

}
