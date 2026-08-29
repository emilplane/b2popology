import { CustomPopup } from '../../ui/custom-popup.js';
import { Property } from './property.js';

export class PropertyBasic extends Property {

  clone() {
    return new PropertyBasic(this.key, this.val);
  }

  toHTML() {
    if (this.key == null || this.val == null) return;

    const container = document.createElement('div');
    const pkey = document.createElement('p');
    const pval = document.createElement('p');

    container.append(pkey, pval);

    pval.className = 'property-basic-value';

    pkey.textContent = this.formattedKey();
    pval.textContent = this.formattedValue();

    container.addEventListener('click', () => {
      const popupHead = document.createElement('h3');
      const popupDesc = document.createElement('p');
      popupHead.textContent = this.formattedKey();
      popupDesc.textContent = this.getDescription();
      const popup = new CustomPopup(popupHead, popupDesc);
      popup.activate();
    });

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

  getDescription() {
    switch (this.key) {
      case 'damage': return 'How much damage the tower does';
      default: return 'ERROR: no description given to this property in website code';
    }
  }

}
