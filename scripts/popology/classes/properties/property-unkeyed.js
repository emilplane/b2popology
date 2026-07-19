import { Property } from './property.js';

export class PropertyUnkeyed extends Property {

  clone() {
    return new PropertyUnkeyed(this.key, this.val);
  }

  toHTML(attack) {
    if (!this.key || !this.val) return;

    const container = document.createElement('div');
    const p = document.createElement('p');

    container.append(p);

    container.classList.add('property-unkeyed-container');
    const outlineVariable = this.getOutlineVariable();
    const outlineColor = window.getComputedStyle(document.body).getPropertyValue(outlineVariable);
    container.style.outlineColor = outlineColor;

    p.textContent = this.getFormattedValue(attack);

    return container;
  }

  getFormattedValue() {
    return this.val;
  }

  getOutlineVariable() {
    return '--outline-default';
  }

}
