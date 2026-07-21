import { Buff } from '../buff.js';
import { Property } from './property.js';

export class PropertyExternalBuff extends Property {

  constructor(key, val) {
    super();
    this.val = {};
    this.val.targets = val.targets;
    this.val.buffs = [];
    val.buffs.forEach((buff) => {
      if (buff instanceof Buff) this.val.buffs.push(buff);
      else this.val.buffs.push(Buff.fromData(buff));
    });
  }

  clone() {
    return new PropertyExternalBuff(this.key, structuredClone(this.val));
  }

  toHTML() {
    const rootContainer = document.createElement('div');
    const header = document.createElement('h5');

    rootContainer.append(header);

    let str = 'Buffs other towers';
    this.val.targets.forEach(target => str += ` ${target}`);
    header.textContent = str;
    this.val.buffs.forEach(buff => rootContainer.append(buff.toHTML()));

    return rootContainer;
  }

}
