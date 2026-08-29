import { Attack } from '../attack.js';
import { DoT } from '../dot.js';
import { ExternalBuff } from '../external-buff.js';

import { PropertyAlternateAttack } from './property-alternate-attack.js';
import { PropertyBasic } from './property-basic.js';
import { PropertyBattleReady } from './property-battle-ready.js';
import { PropertyBonusDamage } from './property-bonus-damage.js';
import { PropertyCamo } from './property-camo.js';
import { PropertyCantTarget } from './property-cant-target.js';
import { PropertyCrit } from './property-crit.js';
import { PropertyDamageType } from './property-damage-type.js';
import { PropertyDebuff } from './property-debuff.js';
import { PropertyDoT } from './property-dot.js';
import { PropertyExternalBuffs } from './property-external-buffs.js';
import { PropertyFootnote } from './property-footnote.js';
import { PropertyFreeze } from './property-freeze.js';
import { PropertyGlue } from './property-glue.js';
import { PropertyHidden } from './property-hidden.js';
import { PropertyIconed } from './property-iconed.js';
import { PropertyIgnoreObstacle } from './property-ignore-obstacle.js';
import { PropertyKnockback } from './property-knockback.js';
import { PropertyPercentage } from './property-percentage.js';
import { PropertyProjectiles } from './property-projectiles.js';
import { PropertySoak } from './property-soak.js';
import { PropertyStun } from './property-stun.js';
import { PropertySummonAttack } from './property-summon-attack.js';
import { PropertyTimeIconed } from './property-time-iconed.js';
import { PropertyTime } from './property-time.js';
import { PropertyUnkeyed } from './property-unkeyed.js';

export class PropertiesManager {

  static propertyMap = {
    "bonusDamage": PropertyBonusDamage,

    "damage" : PropertyIconed,
    "range": PropertyIconed,
    "blastRadius": PropertyIconed,
    "pierce": PropertyIconed,
    "damageType": PropertyDamageType,

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

    "cooldown": PropertyTimeIconed,
    "abilityCooldown" : PropertyTime,
    "initialCooldown" : PropertyTime,
    "duration": PropertyTime,
    "abilityDuration": PropertyTime,
    "durationBlimps" : PropertyTime,
    "durationWeak": PropertyTime,
    "tickDuration": PropertyTime,
    "totalDuration": PropertyTime,
    "domStun": PropertyTime,
    "rehit": PropertyTime,
    "attackFrequency" : PropertyTime,

    "knockback": PropertyKnockback,
    "cantTarget": PropertyCantTarget,
    "alternateAttack": PropertyAlternateAttack,
    "stun": PropertyStun,
    "ignoreObstacle": PropertyIgnoreObstacle,
    "freeze": PropertyFreeze,

    "permaSlow": PropertyPercentage,
    "permaSlowBlimps": PropertyPercentage,
    "areaSlow": PropertyPercentage,
    "slowBloons" : PropertyPercentage,
    "slowBlimps" : PropertyPercentage,

    "debuff": PropertyDebuff,

    "attackType" : PropertyHidden,

    "summonAttack" : PropertySummonAttack,

    "glue" : PropertyGlue,
    "soak" : PropertySoak
  };

  static priority = [
    'abilityCooldown', 'abilityDuration', 'initialCooldown', 'damage', 'pierce', 'impactPierce', 'range', 'cooldown', 'duration', 'blastRadius', 'durationBlimps', , 'projectiles', 'damageType'
  ];

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
    if (key === 'dots') {
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
    if (key === 'dot') {
      let dotObject;
      if (val instanceof DoT) dotObject = val;
      else dotObject = DoT.fromData(val);
      return new PropertyDoT('dot', dotObject);
    }
    if (key == 'externalBuffs') {
      const externalBuffs = val.map(ExternalBuff.fromData);
      return new PropertyExternalBuffs(key, externalBuffs);
    }
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
      if (property instanceof PropertyHidden) return;
      if (
        ['notes', 'desc', 'summonAttack', 'knockback', 'debuff', 'stun', 'freeze', 'externalBuffs', 'glue'].includes(property.key) ||
        property instanceof PropertyDoT
      ) majorProperties.push(property);
      else if (property instanceof PropertyUnkeyed) unkeyProperties.push(property);
      else minorProperties.push(property);
    });

    switch (group) {
      case 'minor':
        return PropertiesManager.sortArray(minorProperties);
      case 'major':
        return PropertiesManager.sortArray(majorProperties);
      case 'unkey':
        return PropertiesManager.sortArray(unkeyProperties);
    }
  }

  static sortArray(array) {
    const newArray = [];
    PropertiesManager.priority.forEach((prio) => {
      array.forEach((property) => {
        if (property.key == prio) newArray.push(property);
      });
    });

    array.forEach((property) => {
      if (!PropertiesManager.priority.includes(property.key)) newArray.push(property);
    });

    return newArray;
  }

}
