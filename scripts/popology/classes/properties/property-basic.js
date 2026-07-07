import { Property } from './property.js';

export class PropertyBasic extends Property {

  clone() {
    return new PropertyBasic(this.key, this.val);
  }

  toHTML() {
    if (!this.key || !this.val) return;

    const container = document.createElement('div');
    const pkey = document.createElement('p');
    const pval = document.createElement('p');

    container.append(pkey, pval);

    pval.className = 'property-basic-value';

    pkey.textContent = this.formattedKey();
    pval.textContent = this.formattedValue();

    return container;
  }

  formattedKey() { // Converts from camelCase to readable text
    return this.key
      .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
      .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
      .replace(/^./, c => c.toUpperCase());
  }

  formattedValue() {
    return this.val;
  }

}
