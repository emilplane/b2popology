import { PropertiesManager } from "./properties/properties-manager.js";
import { PropertiesContainer } from "../ui/properties-container.js";

export class DoT {

  constructor(name, properties, metadata) {
    this.name = name
    this.properties = properties;
    this.metadata = metadata;
  }

  static fromData(data) {
    const properties = PropertiesManager.propertiesFromData(data.properties);
    return new DoT(data.name, properties, data.metadata);
  }

  clone() {
    const properties = [];
    this.properties.forEach((property) => {
      properties.push(property.clone());
    });
    return new DoT(this.name, properties, this.metadata);
  }

  toHTML() {
    const rootContainer = document.createElement('div');
    const dotName = document.createElement('h4');
    const centerContainer = document.createElement('div');
    const propertiesContainer = new PropertiesContainer(this.properties, this)

    rootContainer.append(dotName, centerContainer);
    centerContainer.append(propertiesContainer.toHTML());

    centerContainer.className = 'center-container';

    dotName.textContent = 'Applies ' + this.name + ' effect (damage over time)'

    return rootContainer;
  }

}
