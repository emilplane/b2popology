import { Property } from './property.js';
import { PropertiesContainer } from '../../ui/properties-container.js';
import { PropertyIconed } from './property-iconed.js';

export class PropertyKnockback extends Property {

  clone() {
    return new PropertyKnockback(this.key, structuredClone(this.val));
  }

  toHTML() {
    const properties = [];

    Object.keys(this.val).forEach((key) => {
      const rounded = Math.round(this.val[key] * 100) / 100;
      const iconedProperty = new PropertyIconed(key, `${rounded} units`);
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

  applyBuff(buff) {
    if (Object.keys(buff.value).find(key => key == 'all') != null) {
      this.applyBuffAll(buff);
      return;
    }
    switch (buff.operation) {
      case 'add':
        Object.keys(buff.value).forEach((key) => {
          if (this.val[key] == null) this.val[key] = 0.0;
          this.val[key] += buff.value[key];
        });
        break;
      case 'mul':
        Object.keys(buff.value).forEach((key) => {
          if (this.val[key] == null) return;
          this.val[key] = this.val[key] * buff.value[key];
        });
        break;
      case 'set':
        Object.keys(buff.value).forEach((key) => {
          this.val[key] = buff.value[key];
        });
        break;
    }
  }

  applyBuffAll(buff) {
    switch (buff.operation) {
      case 'add':
        Object.keys(this.val).forEach((key) => {
          this.val[key] += buff.value['all'];
        });
        break;
      case 'mul':
        Object.keys(this.val).forEach((key) => {
          this.val[key] = this.val[key] * buff.value['all'];
        });
        break;
      case 'set':
        console.warn('Attempted to set knockback all value, set each entry manually');
        break;
    }
  }

}
