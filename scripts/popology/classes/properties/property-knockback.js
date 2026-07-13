import { Property } from './property.js';
import { PropertiesContainer } from '../../ui/properties-container.js';
import { PropertyIconed } from './property-iconed.js';

export class PropertyKnockback extends Property {

  clone() {
    return new PropertyKnockback(this.key, this.val);
  }

  toHTML() {
    const properties = [];

    Object.keys(this.val).forEach((key) => {
      const iconedProperty = new PropertyIconed(key, `${this.val[key]} units`);
      properties.push(iconedProperty);
    });

    const rootContainer = document.createElement('div');
    const title = document.createElement('h5');

    const propertiesContainer = new PropertiesContainer(properties);
    const backgroundColorVariable = '--background-thirdary';
    const backgroundColor = window.getComputedStyle(document.body).getPropertyValue(backgroundColorVariable);
    propertiesContainer.setBackgroundColor(backgroundColor);

    rootContainer.append(title, propertiesContainer.toHTML());

    title.textContent = 'Knocks MOAB-Class bloons back';

    return rootContainer;
  }


}
