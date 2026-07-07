import { PropertiesManager } from "./properties/properties-manager.js";
import { PropertiesContainer } from "../ui/properties-container.js";

export class DoT {

  static COLORS = {
    "burn" : "red",
    "shred" : "purple"
  }

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
    const dotName = document.createElement('h5');
    const centerContainer = document.createElement('div');
    const propertiesContainer = new PropertiesContainer(this.properties, this)
    const backgroundColorVariable = '--background-' + DoT.COLORS[this.name];
    const backgroundColor = window.getComputedStyle(document.body).getPropertyValue(backgroundColorVariable);
    propertiesContainer.setBackgroundColor(backgroundColor);

    rootContainer.append(dotName, centerContainer);
    centerContainer.append(propertiesContainer.toHTML());

    centerContainer.className = 'center-container';
    const textColorVariable = '--text-' + DoT.COLORS[this.name];
    const textColor = window.getComputedStyle(document.body).getPropertyValue(textColorVariable);
    dotName.style.color = textColor

    dotName.textContent = 'Applies ' + this.name + ' effect (damage over time)'

    return rootContainer;
  }

}
