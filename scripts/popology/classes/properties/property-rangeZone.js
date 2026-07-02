import { PropertyBasic } from './property-basic.js';

export class PropertyRangeZone extends PropertyBasic {

  clone() {
    return new PropertyRangeZone(this.key, this.val);
  }

  formattedKey() {
    return 'Range';
  }

  formattedValue() {
    return this.val + ' (AoE zone)';
  }

}
