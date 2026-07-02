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

  formattedKey() {
    return this.key[0].toUpperCase() + this.key.slice(1);
  }

  formattedValue() {
    return this.val;
  }

}
