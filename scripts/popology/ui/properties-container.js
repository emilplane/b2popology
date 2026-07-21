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
    const minorProperties = PropertiesManager.getProperties(this.properties, true);
    const majorProperties  = PropertiesManager.getProperties(this.properties, false);

    const rootContainer = document.createElement('div');
    const propertiesContainer = document.createElement('div');

    rootContainer.classList.add('properties-container-styler');
    rootContainer.style.backgroundColor = this.backgroundColor;
    propertiesContainer.classList.add('properties-container');

    rootContainer.append(propertiesContainer);

    minorProperties.forEach((property) => {
      const propertyHTML = property.toHTML(this.attack);
      if (propertyHTML == null) return;
      if (Array.isArray(propertyHTML)) propertiesContainer.append(...propertyHTML);
      else propertiesContainer.append(propertyHTML);
    });

    majorProperties.forEach((property) => {
      if (property == null) return;
      const propertiesHTML = property.toHTML(this.attack);
      if (propertiesHTML == null) return;

      if (Array.isArray(propertiesHTML)) propertiesHTML.forEach(propertyHTML => styleAndAppend(propertyHTML));
      else styleAndAppend(propertiesHTML);

      function styleAndAppend(propertyHTML) {
        const stylerContainer = propertyHTML.querySelector('.properties-container-styler');
        if (stylerContainer != null) stylerContainer.classList.add('inner-container');
        rootContainer.append(propertyHTML);
      }
    });

    return rootContainer;
  }
}
