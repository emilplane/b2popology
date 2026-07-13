import { PropertiesManager } from "../classes/properties/properties-manager.js";

export class PropertiesContainer {

  constructor(properties, attack) {
    this.properties = properties;
    this.attack = attack;
    this.flags = [];
    this.children = [];
  }

  addChildren(...children) {
    children.forEach((child) => {
      if (Array.isArray(child)) this.addChildren(...child);
      else this.children.push(child)
    });
  }

  addFlags(...flags) {
    flags.forEach((flag) => {
      if (this.flags.includes(flag) || flag == null) return;
      this.flags.push(flag);
    });
  }

  setBackgroundColor(color) {
    this.backgroundColor = color;
  }

  toHTML() {
    const minorProperties = PropertiesManager.sortedContainerProperties(this.properties);

    const knockbackProperties = PropertiesManager.getKnockbackProperties(this.properties);
    const summonAttackProperties = PropertiesManager.getSummonAttackProperties(this.properties);
    const dotProperties = PropertiesManager.getDotProperties(this.properties);
    const noteProperties = PropertiesManager.getNoteProperties(this.properties);

    const majorProperties  = [...knockbackProperties, ...summonAttackProperties, ...dotProperties, ...noteProperties ,...this.children];

    const rootContainer = document.createElement('div');
    const propertiesContainer = document.createElement('div');

    rootContainer.classList.add('properties-container-styler');
    rootContainer.style.backgroundColor = this.backgroundColor;
    propertiesContainer.classList.add('properties-container');

    rootContainer.append(propertiesContainer);

    minorProperties.forEach((property) => {
      const propertyHTML = property.toHTML(this.attack);
      if (propertyHTML != null) propertiesContainer.append(propertyHTML);
    });

    majorProperties.forEach((property) => {
      if (property == null) return;
      const propertyHTML = property.toHTML(this.attack);
      if (propertyHTML != null) {
      const stylerContainer = propertyHTML.querySelector('.properties-container-styler');
      if (stylerContainer != null) stylerContainer.classList.add('inner-container');
        rootContainer.append(propertyHTML);
      }
    });

    return rootContainer;
  }
}
