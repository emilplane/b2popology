import { Property } from './property.js';
import { PropertiesContainer } from '../../ui/properties-container.js';
import { PropertiesManager } from './properties-manager.js';

export class PropertyFreeze extends Property {

  clone() {
    return new PropertyFreeze(this.key, structuredClone(this.val));
  }

  toHTML() {
    const properties = PropertiesManager.propertiesFromData(this.val);

    const rootContainer = document.createElement('div');
    const title = document.createElement('h5');

    const propertiesContainer = new PropertiesContainer(properties);
    const backgroundColorVariable = '--background-thirdary';
    const backgroundColor = window.getComputedStyle(document.body).getPropertyValue(backgroundColorVariable);
    propertiesContainer.setBackgroundColor(backgroundColor);

    rootContainer.append(title, propertiesContainer.toHTML());

    title.textContent = 'Applies freeze effect to bloons';

    return rootContainer;
  }

  applyBuff(buff) {
    switch (buff.operation) {
      case 'append':
        this.val = {...this.val, ...buff.value };
        break;
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

}
