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
      if (this.flags.includes(flag)) return;
      this.flags.push(flag);
    });
  }

  setBackgroundColor(color) {
    this.backgroundColor = color;
  }

  toHTML() {
    const mainProperties = PropertiesManager.sortedContainerProperties(this.properties);
    const noteProperties = PropertiesManager.getNoteProperties(this.properties)
    const dotProperties = PropertiesManager.getDotProperties(this.properties);

    const rootContainer = document.createElement('div');
    const propertiesContainer = document.createElement('div');

    rootContainer.classList.add('properties-container-styler');

    rootContainer.style.backgroundColor = this.backgroundColor;

    propertiesContainer.className = 'properties-container';

    rootContainer.append(propertiesContainer);

    mainProperties.forEach((property) => {
      const propertyHTML = property.toHTML(this.attack);
      if (propertyHTML != null) propertiesContainer.append(propertyHTML);
    });

    dotProperties.forEach((property) => {
      const propertyHTML = property.toHTML(this.attack);
      if (propertyHTML != null) {
      const stylerContainer = propertyHTML.querySelector('.properties-container-styler');
      if (stylerContainer != null) stylerContainer.classList.add('inner-container');
        rootContainer.append(propertyHTML);
      }
    });

    this.children.forEach((child) => {
      if (child == null) return;
      const childRootContainer = child.toHTML();
      const stylerContainer = childRootContainer.querySelector('.properties-container-styler');
      if (stylerContainer != null) stylerContainer.classList.add('inner-container');
      rootContainer.append(childRootContainer);
    });

    noteProperties.forEach((property) => {
      const propertyHTML = property.toHTML()
      if (propertyHTML != null) rootContainer.append(propertyHTML);
    });

    return rootContainer;
  }
}
