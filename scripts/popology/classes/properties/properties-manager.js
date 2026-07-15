import { Attack } from '../attack.js';
import { DoT } from '../dot.js';
import { PropertyBasic } from './property-basic.js';
import { PropertyBattleReady } from './property-battle-ready.js';
import { PropertyBonusDamage } from './property-bonus-damage.js';
import { PropertyCamo } from './property-camo.js';
import { PropertyCantTarget } from './property-cant-target.js';
import { PropertyCrit } from './property-crit.js';
import { PropertyDamageType } from './property-damage-type.js';
import { PropertyDoT } from './property-dot.js';
import { PropertyFootnote } from './property-footnote.js';
import { PropertyHidden } from './property-hidden.js';
import { PropertyIconed } from './property-iconed.js';
import { PropertyKnockback } from './property-knockback.js';
import { PropertyProjectiles } from './property-projectiles.js';
import { PropertyRange } from './property-range.js';
import { PropertySummonAttack } from './property-summon-attack.js';
import { PropertyTime } from './property-time.js';

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
        propertyArray.push(new PropertyBonusDamage(bkey, bval));
      });
      return propertyArray;
    }
    if (['lead', 'fort', 'moab', 'ceram'].includes(key)) return new PropertyBonusDamage(key, val);
    if (key == 'range') return new PropertyRange(key, val);
    if (key == 'camo') return new PropertyCamo(key, val);
    if (key =='crit') return new PropertyCrit(key, val);
    if (key == 'notes' || key == 'desc') return new PropertyFootnote(key, val);
    if (['cost', 'unlockCost', 'size', 'placement'].includes(key)) return new PropertyIconed(key, val);
    if (key == 'battleReady') return new PropertyBattleReady(key, val);
    if (key == 'projectiles') return new PropertyProjectiles(key, val);
    if (['cooldown', 'duration', 'tickDuration', 'totalDuration', 'stun', 'rehit'].includes(key)) return new PropertyTime(key, val);
    if (key == 'damageType') return new PropertyDamageType(key, val);
    if (key == 'knockback') return new PropertyKnockback(key, val);
    if (key == 'cantTarget') return new PropertyCantTarget(key, val);
    if (key == 'dots') {
      const propertyArray = [];
      let i = 0;
      val.forEach((dot) => {
        let dotObject;
        if (dot instanceof DoT) dotObject = dot;
        else dotObject = DoT.fromData(dot);
        propertyArray.push(new PropertyDoT('dot' + i, dotObject));
        i++;
      });
      return propertyArray;
    }
    if (key == 'dot') {
      let dotObject;
      if (val instanceof DoT) dotObject = val;
      else dotObject = DoT.fromData(val);
      return new PropertyDoT('dot', dotObject);
    }
    if (key == 'summonAttack')  return new PropertySummonAttack(key, val);
    if (['attackType'].includes(key)) return new PropertyHidden(key, val);
    if (key == 'embeddedAttacks') {
      const embeddedAttacks = [];
      val.forEach((attack) => {
        if (attack instanceof Attack) embeddedAttacks.push(attack.clone());
        else embeddedAttacks.push(Attack.fromData(attack));
      });
      return new PropertyHidden(key, embeddedAttacks);
    }
    return new PropertyBasic(key, val);
  }

  static getContainerProperties(properties) {
    const containerProperties = [];

    properties.forEach((property) => {
      if (!['notes', 'desc', 'summonAttack', 'knockback'].includes(property.key) && (!(property instanceof PropertyDoT))) {
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

  static getDotProperties(properties) {
    const dotProperties = [];

    properties.forEach((property) => {
      if (property instanceof PropertyDoT) {
        dotProperties.push(property);
      }
    });

    return dotProperties;
  }

  static getSummonAttackProperties(properties) {
    const summonAttackProperties = [];

    properties.forEach((property) => {
      if (property.key == 'summonAttack') {
        summonAttackProperties.push(property);
      }
    });

    return summonAttackProperties;
  }

  static getKnockbackProperties(properties) {
    const knockbackProperties = [];

    properties.forEach((property) => {
      if (property.key == 'knockback') {
        knockbackProperties.push(property);
      }
    });

    return knockbackProperties;
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
