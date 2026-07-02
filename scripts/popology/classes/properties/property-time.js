import { PropertyBasic } from './property-basic.js';

export class PropertyTime extends PropertyBasic {

  clone() {
    return new PropertyTime(this.key, this.val);
  }

  formattedValue() {
    return this.val + 's';
  }

}
