import { Attack } from './attack.js';
import { Buff } from './buff.js';
import { Ability } from './ability.js';
import { PropertiesManager } from './properties/properties-manager.js';

export class Upgrade {

  constructor(path, name, cost, attacks, buffs, abilities, subtowers, externalBuffs, metadata) {
    this.path = path;
    this.name = name;
    this.cost = cost;
    this.attacks = attacks;
    this.buffs = buffs;
    this.abilities = abilities;
    this.subtowers = subtowers;
    this.externalBuffs = externalBuffs;
    this.metadata = metadata
  }

  static fromData(data) {
    const attacks = (data.attacks || []).map(Attack.fromData);
    const buffs = (data.buffs || []).map(Buff.fromData);
    const abilities = (data.abilities || []).map(Ability.fromData);
    const ebs = [];

    if (data.externalBuffs == null);
    else data.externalBuffs.forEach(eb => ebs.push(PropertiesManager.createProperty('externalBuff', eb)));

    return new Upgrade(data.path, data.name, data.cost, attacks, buffs, abilities, data.subtowers, ebs, data.metadata);
  }

}
