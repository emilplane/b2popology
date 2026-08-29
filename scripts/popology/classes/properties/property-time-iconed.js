import { PropertyIconed } from './property-iconed.js';

export class PropertyTimeIconed extends PropertyIconed {

  clone() {
    return new PropertyTimeIconed(this.key, this.val);
  }

  formattedValue() {
    if (this.key == 'initialCooldown' && this.val == 0) return '0s';
    return `${this.val}s`;
  }

}
