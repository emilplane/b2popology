import { Property } from './property.js';

export class PropertyFootnote extends Property {

  clone() {
    return new PropertyFootnote(this.key, this.val);
  }

  toHTML() {
    if (!this.key || !this.val) return;

    const p = document.createElement('p');

    p.className = 'property-footnote';

    let str = "";
    for (let i = 0; i < this.val.length; i++) {
      str += "* " + this.val[i];
      if (i != this.val.length - 1) str += "\n";
    }
    p.textContent = str;

    return p;
  }

}
