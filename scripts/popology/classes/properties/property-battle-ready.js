import { PropertyUnkeyed } from './property-unkeyed.js';

export class PropertyBattleReady extends PropertyUnkeyed {

  clone() {
    return new PropertyBattleReady(this.key, this.val);
  }

  getFormattedValue() {
    return 'Battle\nReady';
  }

  getOutlineVariable() {
    return '--outline-blue';
  }

}
