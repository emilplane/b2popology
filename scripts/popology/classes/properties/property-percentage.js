import { PropertyBasic } from './property-basic.js';

export class PropertyPercentage extends PropertyBasic {

  clone() {
    return new PropertyPercentage(this.key, this.val);
  }

  formattedValue() {
    return this.val * 100 + '%';
  }

}
