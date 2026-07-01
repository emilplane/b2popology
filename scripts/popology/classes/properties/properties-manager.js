import { PropertyBasic } from './property-basic.js';
import { PropertyBattleReady } from './property-battle-ready.js';
import { PropertyBonusDamage } from './property-bonus-damage.js';
import { PropertyCamo } from './property-camo.js';
import { PropertyCrit } from './property-crit.js';
import { PropertyFootnote } from './property-footnote.js';
import { PropertyIconed } from './property-iconed.js';

export class PropertiesManager {

  static propertiesFromData(data) {
    const properties = [];

    Object.entries(data).forEach(([key, value]) => {
      const property = PropertiesManager.createProperty(key, value);
      if (Array.isArray(property)) properties.push(...property);
      else properties.push(property);
    });

    return properties;
  }

  static createProperty(key, val) {
    if (key == 'bonusDamage') {
      const propertyArray = [];
      Object.entries(val).forEach(([bkey, bval]) => {
        propertyArray.push(new PropertyBonusDamage(bkey,bval));
      });
      return propertyArray;
    }
    if (key == 'camo') return new PropertyCamo(key, val);
    if (key =='crit') return new PropertyCrit(key, val);
    if (key == 'notes' || key == 'desc') return new PropertyFootnote(key, val);
    if (['cost', 'unlockCost', 'size', 'placement'].includes(key)) return new PropertyIconed(key, val);
    if (key == 'battleReady') return new PropertyBattleReady(key, val);
    return new PropertyBasic(key, val);
  }

  static getContainerProperties(properties) {
    const containerProperties = [];

    properties.forEach((property) => {
      if (!['notes', 'desc'].includes(property.key)) {
        containerProperties.push(property);
      }
    });

    return containerProperties;
  }

  static getNoteProperties(properties) {
    const noteProperties = [];

    properties.forEach((property) => {
      if (['notes', 'desc'].includes(property.key)) {
        noteProperties.push(property);
      }
    });

    return noteProperties;
  }

  static sortedContainerProperties(properties) {
    const containerProperties = PropertiesManager.getContainerProperties(properties);
    const sortedPropeties = [];

    containerProperties.forEach((property) => {
      if (property.key != 'camo') sortedPropeties.push(property);
    });

    const camoProperty = containerProperties.find(property => property.key == 'camo');
    if (camoProperty != null) sortedPropeties.push(camoProperty);

    return sortedPropeties;
  }

}
