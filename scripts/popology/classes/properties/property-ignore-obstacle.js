import { PropertyUnkeyed } from './property-unkeyed.js';

export class PropertyIgnoreObstacle extends PropertyUnkeyed {

  clone() {
    return new PropertyIgnoreObstacle(this.key, this.val);
  }

  getFormattedValue() {
    return `Can see past obstacles`;
  }

  getOutlineVariable() {
    return '--outline-purple';
  }

}
