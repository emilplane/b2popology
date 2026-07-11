import { Property } from './property.js';

export class PropertyKnockback extends Property {

  clone() {
    return new PropertyKnockback(this.key, this.val);
  }

  toHTML() {
    const rootContainer = document.createElement('div');
    const title = document.createElement('h5');

    rootContainer.append(title);

    title.textContent = 'Knocksback MOAB-Class bloons';

    Object.keys(this.val).forEach((key) => {
      const stuff = document.createElement('p');
      stuff.textContent = key + ': ' + this.val[key] + ' units';
      rootContainer.append(stuff);
    });

    return rootContainer;
  }


}
