import { Property } from './property.js';
import { PropertiesContainer } from '../../ui/properties-container.js';
import { PropertyIconed } from './property-iconed.js';
import { PropertyUnkeyed } from './property-unkeyed.js';

export class PropertyStun extends Property {

  clone() {
    return new PropertyStun(this.key, structuredClone(this.val));
  }

  toHTML() {
    const properties = [];

    Object.keys(this.val.stunDurations).forEach((key) => {
      const iconedProperty = new PropertyIconed(key, `${parseFloat(this.val.stunDurations[key]).toFixed(1)}s`);
      properties.push(iconedProperty);
    });

    if (this.val.canReapply != null && this.val.canReapply == true) {
      const property = new PropertyUnkeyed('canReapply', 'Stun refreshes to max duration when attacking already stunned bloons');
      properties.push(property);
    }

    const rootContainer = document.createElement('div');
    const title = document.createElement('h5');

    const propertiesContainer = new PropertiesContainer(properties);
    const backgroundColorVariable = '--background-thirdary';
    const backgroundColor = window.getComputedStyle(document.body).getPropertyValue(backgroundColorVariable);
    propertiesContainer.setBackgroundColor(backgroundColor);

    rootContainer.append(title, propertiesContainer.toHTML());

    title.textContent = 'Applies stun effect';

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
          if (this.val.stunDurations[key] == null) this.val.stunDurations[key] = 0.0;
          this.val.stunDurations[key] += buff.value[key];
        });
        break;
      case 'mul':
        Object.keys(buff.value).forEach((key) => {
          if (this.val.stunDurations[key] == null) return;
          this.val.stunDurations[key] = this.val.stunDurations[key] * buff.value[key];
        });
        break;
      case 'set':
        this.val = buff.value;
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
        console.warn('Attempted to set stun all value, set each entry manually');
        break;
    }
  }

}
