import { PropertyUnkeyed } from './property-unkeyed.js';

export class PropertyAlternateAttack extends PropertyUnkeyed {

  clone() {
    return new PropertyAlternateAttack(this.key, structuredClone(this.val));
  }

  getFormattedValue() {
    if (this.val.frequency == 2) return `Every other attack is replaced with ${this.val.attackId} attack`;
    return `Every ${this.val.frequency}${($this.val.frequency == 3) ? 'rd' : 'th'} attack is replaced with ${this.val.attackId} attack`;
  }

  getOutlineVariable() {
    return '--outline-yellow';
  }

}
