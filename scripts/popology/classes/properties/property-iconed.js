import { PropertyAttributed } from './property-attributed.js';

export class PropertyIconed extends PropertyAttributed {

  static PLACEMENT = ["Land", "Water", "Amphibious"];

  static KEY_NAMES = {
    "placement" : "Placable on",
    "unlockCost" : "Unlock Price",
    "cost" : "Total Cost",
    "size" : "Size",
    "intelRange" : "Intel Range"
  }

  clone() {
    return new PropertyIconed(this.key, this.val);
  }

  toHTML() {

    function toFileName(id) {
      return id.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }

    if (!this.key || this.val == null) return;

    const mainContainer = document.createElement('div');
    const topContainer = document.createElement('div');
    const botContainer =document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const icon = document.createElement('img');

    mainContainer.append(topContainer, botContainer);
    topContainer.append(icon, p1);
    botContainer.append(p2);

    mainContainer.className = 'property-iconed-container';
    topContainer.classList.add('property-iconed-top');
    botContainer.classList.add('property-iconed-bottom');

    icon.src = '/media/property-icons/' + toFileName(this.key) + '.png';
    p1.textContent = this.formattedKey();
    p2.textContent = this.formattedValue();

    return mainContainer;
  }

  formattedKey() {
    if (PropertyIconed.KEY_NAMES[this.key] != null) return PropertyIconed.KEY_NAMES[this.key];
    return super.formattedKey();
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
        return super.formattedValue();
    }
  }

}
