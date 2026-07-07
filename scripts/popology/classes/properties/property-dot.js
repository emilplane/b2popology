import { Property } from './property.js';

export class PropertyDoT extends Property {

  clone() {
    return new PropertyDoT(this.key, this.val.clone());
  }

  toHTML() {
    return this.val.toHTML();
  }

}
