import { Property } from './property.js';

export class PropertyFootnote extends Property {

  clone() {
    return new PropertyFootnote(this.key, structuredClone(this.val));
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

  applyBuff(buff) {
    switch (buff.operation) {
      case 'add':
        console.log(this.val);
        if (Array.isArray(buff.value)) this.val = [...this.val, ...buff.value];
        else this.val.push(buff.value);
        break;
      case 'set':
        if (Array.isArray(buff.value)) this.val = buff.value;
        else this.val = [buff.value];
        break;
    }
  }

}
