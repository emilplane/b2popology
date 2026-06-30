import { PropertyBasic } from './property-basic.js';
import { PropertyBonusDamage } from './property-bonus-damage.js';
import { PropertyCamo } from './property-camo.js';
import { PropertyCrit } from './property-crit.js';
import { PropertyFootnote } from './property-footnote.js';
import { PropertyIconed } from './property-iconed.js';

export class CreateProperty {

  static create(key, val) {
    if (key == 'bonusDamage') {
      const propertyArray = [];
      Object.entries(val).forEach(([bkey, bval]) => {
        propertyArray.push(new PropertyBonusDamage(bkey,bval));
      });
      return propertyArray;
    }
    if (key == 'camo') return new PropertyCamo(key, val);
    if (key =='crit') return new PropertyCrit(key, val);
    if (key == 'notes') return new PropertyFootnote(key, val);
    if (['cost', 'unlockCost', 'size', 'placement'].includes(key)) return new PropertyIconed(key, val);
    return new PropertyBasic(key, val);
  }

}
