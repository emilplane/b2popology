import { Attack } from '../attack.js';
import { DoT } from '../dot.js';
import { PropertyAlternateAttack } from './property-alternate-attack.js';
import { PropertyAttributed } from './property-attributed.js'
import { PropertyBasic } from './property-basic.js';
import { PropertyBattleReady } from './property-battle-ready.js';
import { PropertyBonusDamage } from './property-bonus-damage.js';
import { PropertyCamo } from './property-camo.js';
import { PropertyCantTarget } from './property-cant-target.js';
import { PropertyCrit } from './property-crit.js';
import { PropertyDamageType } from './property-damage-type.js';
import { PropertyDebuff } from './property-debuff.js';
import { PropertyDoT } from './property-dot.js';
import { PropertyExternalBuff } from './property-external-buff.js';
import { PropertyFootnote } from './property-footnote.js';
import { PropertyFreeze } from './property-freeze.js';
import { PropertyHidden } from './property-hidden.js';
import { PropertyIconed } from './property-iconed.js';
import { PropertyIgnoreObstacle } from './property-ignore-obstacle.js';
import { PropertyKnockback } from './property-knockback.js';
import { PropertyPercentage } from './property-percentage.js';
import { PropertyProjectiles } from './property-projectiles.js';
import { PropertyStun } from './property-stun.js';
import { PropertySummonAttack } from './property-summon-attack.js';
import { PropertyTime } from './property-time.js';
import { PropertyUnkeyed } from './property-unkeyed.js';

export class PropertiesManager {

  static propertyMap = {
    "bonusDamage": PropertyBonusDamage,

    "range": PropertyAttributed,
    "blastRadius": PropertyAttributed,
    "pierce": PropertyAttributed,

    "camo": PropertyCamo,
    "crit": PropertyCrit,

    "notes": PropertyFootnote,
    "desc": PropertyFootnote,

    "cost": PropertyIconed,
    "unlockCost": PropertyIconed,
    "size": PropertyIconed,
    "placement": PropertyIconed,
    "intelRange": PropertyIconed,

    "battleReady": PropertyBattleReady,
    "projectiles": PropertyProjectiles,

    "cooldown": PropertyTime,
    "initialCooldown" : PropertyTime,
    "duration": PropertyTime,
    "durationWeak": PropertyTime,
    "tickDuration": PropertyTime,
    "totalDuration": PropertyTime,
    "domStun": PropertyTime,
    "rehit": PropertyTime,

    "damageType": PropertyDamageType,
    "knockback": PropertyKnockback,
    "cantTarget": PropertyCantTarget,
    "alternateAttack": PropertyAlternateAttack,
    "stun": PropertyStun,
    "ignoreObstacle": PropertyIgnoreObstacle,
    "freeze": PropertyFreeze,

    "permaSlow": PropertyPercentage,
    "permaSlowBlimps": PropertyPercentage,
    "areaSlow": PropertyPercentage,

    "debuff": PropertyDebuff,

    "externalBuff" : PropertyExternalBuff,
  };

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
    const PropertyClass = PropertiesManager.propertyMap[key];
    if (PropertyClass != null) return new PropertyClass(key, val);
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
    if (key == 'summonAttack') return new PropertySummonAttack(key, val);
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

  static sortProperties(properties, group) {
    const majorProperties = [];
    const minorProperties = [];
    const unkeyProperties = [];

    properties.forEach((property) => {
      if (
        ['notes', 'desc', 'summonAttack', 'knockback', 'debuff', 'stun'].includes(property.key) ||
        property instanceof PropertyDoT
      ) majorProperties.push(property);
      else if (property instanceof PropertyUnkeyed) unkeyProperties.push(property);
      else minorProperties.push(property);
    });

    switch (group) {
      case 'minor':
        return minorProperties;
      case 'major':
        return majorProperties;
      case 'unkey':
        return unkeyProperties;
    }
  }

}
