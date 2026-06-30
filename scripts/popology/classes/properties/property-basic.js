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
    let formatted = '';
    switch(this.key) {
      case 'infiniteRange':
        formatted = 'range';
        break;
      default:
        formatted = this.key;
        break;
    }
    const uppercaseKey = formatted[0].toUpperCase() + formatted.slice(1);
    return uppercaseKey
  }

  formattedValue() {
    switch (this.key) {
      case 'cooldown':
        return this.val + 's';
      case 'duration':
        return this.val + 's';
      case 'infiniteRange':
        return '∞';
      case 'type':
        return this.val[0].toUpperCase() + this.val.slice(1);
      default:
        return this.val;
    }
  }

}
