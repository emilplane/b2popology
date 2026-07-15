import { PropertyUnkeyed } from './property-unkeyed.js';

export class PropertyCrit extends PropertyUnkeyed {

  clone() {
    return new PropertyCrit(this.key, this.val);
  }

  getFormattedValue() {
    return `Crits every ${this.val[0]} attacks, dealing ${this.val[1]} damage`;
  }

  getOutlineVariable() {
    return '--outline-orange';
  }

  applyBuff(buff) {
    switch (buff.operation) {
      case 'add':
        this.val[1] = this.val[1] + buff.value;
        break;
      case 'mul':
        this.val[1] = parseFloat((this.val[1] * buff.value).toFixed(4));
        break;
      case 'div':
        this.val[1] = parseFloat((this.val[1] / buff.value).toFixed(4));
      case 'set':
        this.val[1] = buff.value;
        break;
    }
  }

}
