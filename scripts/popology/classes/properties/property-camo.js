import { Property } from './property.js';

export class PropertyCamo extends Property {

  clone() {
    return new PropertyCamo(this.key, this.val);
  }

  applyBuff(buff) {
    this.val = buff.value;
  }

  toHTML() {
    if (!this.key || !this.val) return;

    const container = document.createElement('div');
    const icon = document.createElement('img');

    container.append(icon);

    icon.style = 'height: 54px; width: auto; padding-top: 8px;';

    icon.src = '/media/property-icons/camo.png';

    return container;
  }

}
