import { PropertyBasic } from './property-basic.js';

export class PropertyInfiniteRange extends PropertyBasic {

  clone() {
    return new PropertyInfiniteRange(this.key, this.val);
  }

  formattedKey() {
    return 'Range';
  }

  formattedValue() {
    return '∞';
  }

}
