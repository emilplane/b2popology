import { Property } from './property.js';

export class PropertyIconed extends Property {

  static PLACEMENT = ["Land", "Water", "Amphibious"];

  clone() {
    return new PropertyIconed(this.key, this.val);
  }

  toHTML() {

    function toFileName(id) {
      return id.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }

    if (!this.key || this.val == null) return;

    const mainContainer = document.createElement('div');
    const p = document.createElement('p');
    const pContainer =document.createElement('div');
    const icon = document.createElement('img');

    pContainer.append(p);
    mainContainer.append(icon, pContainer);

    mainContainer.className = 'property-iconed-container';

    icon.src = '/media/property-icons/' + toFileName(this.key) + '.png';
    p.textContent = this.formattedValue();

    return mainContainer;
  }

  formattedValue() {
    switch (this.key) {
      case 'placement':
        return PropertyIconed.PLACEMENT[this.val];
      case 'size':
        if (this.val.length == 1) return this.val[0] + ' radius';
        else if (this.val.length == 2) return this.val[0] + 'x' + this.val[1];
        return;
      case 'unlockCost':
        if (this.val == 0) return 'Free';
        return this.val.toLocaleString() + ' MM';
      case 'cost':
        return '$' + this.val.toLocaleString();
      default:
        return this.val;
    }
  }

}
