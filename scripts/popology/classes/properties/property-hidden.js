import { Property } from './property.js';

export class PropertyHidden extends Property {

  clone() {
    return new PropertyHidden(this.key, this.val);
  }

  toHTML() {
    return null;
  }

}
