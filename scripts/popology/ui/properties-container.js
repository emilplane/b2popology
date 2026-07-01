import { PropertiesManager } from "../classes/properties/properties-manager.js";

export class PropertiesContainer {

  constructor(properties, attack) {
    this.properties = properties;
    this.attack = attack;
  }

  toHTML() {
    const mainProperties = PropertiesManager.sortedContainerProperties(this.properties);
    const noteProperties = PropertiesManager.getNoteProperties(this.properties)

    const propertiesContainerStyler = document.createElement('div');
    const propertiesContainer = document.createElement('div');

    propertiesContainerStyler.className = 'properties-container-styler';
    propertiesContainer.className = 'properties-container';

    propertiesContainerStyler.append(propertiesContainer);

    mainProperties.forEach((property) => {
      const propertyHTML = property.toHTML(this.attack)
      if (propertyHTML != null) propertiesContainer.append(propertyHTML);
    });

    noteProperties.forEach((property) => {
      const propertyHTML = property.toHTML()
      if (propertyHTML != null) propertiesContainerStyler.append(propertyHTML);
    });

    return propertiesContainerStyler;
  }
}
