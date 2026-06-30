import { Property } from './property.js';

export class PropertyCrit extends Property {

  clone() {
    return new PropertyCrit(this.key, this.val);
  }

  toHTML() {
    if (!this.key || !this.val) return;

    const container = document.createElement('div');
    const p = document.createElement('p');

    container.append(p);

    container.classList.add('property-unkeyed-container', 'outline-orange');

    p.textContent = 'Crits every ' + this.val[0] + ' attacks, dealing ' + this.val[1] + ' damage';

    return container;
  }

}
