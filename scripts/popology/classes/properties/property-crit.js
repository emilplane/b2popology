import { PropertyUnkeyed } from './property-unkeyed.js';

export class PropertyCrit extends PropertyUnkeyed {

  clone() {
    return new PropertyCrit(this.key, this.val);
  }

  getFormattedValue() {
    return 'Crits every ' + this.val[0] + ' attacks, dealing ' + this.val[1] + ' damage';
  }

  getOutlineVariable() {
    return '--outline-orange';
  }

}
