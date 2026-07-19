import { Property } from './property.js';

export class PropertySummonAttack extends Property {

  clone() {
    return new PropertySummonAttack(this.key, structuredClone(this.val));
  }

  toHTML(attack) {
    const propertiesHTML = [];
    this.val.forEach((summon) => {
      propertiesHTML.push(this.SummonToHTML(summon, attack));
    });

    return propertiesHTML;
  }

  SummonToHTML(summon, attack) {
    const embeddedAttacks = attack.properties.find(property => property.key == 'embeddedAttacks');
    const targetAttack = embeddedAttacks.val.find(target => target.id == summon.attackId);
    const attackType = targetAttack.properties.find(property => property.key == 'attackType');
    const rootContainer = document.createElement('div');
    const title = document.createElement('h5');

    targetAttack.addFlag('thirdaryBackground');

    rootContainer.append(title, targetAttack.toHTML());

    let str = `Summons ${attackType.val}`;
    for (let i = 0; i < summon.type.length; i++) {
      if (i == 0) str += ' ';
      else if (i == summon.type.length - 1) str += ', or ';
      else str += ', ';
      if (summon.type[i] == 'afterTime') str += `after ${summon.time}s`;
      else str += this.typeToText(summon.type[i]);
    }
    title.textContent = str;

    return rootContainer;
  }

  typeToText(type) {
    switch (type) {
      case 'onContact': return 'on initial contact';
      case 'onPop': return 'on bloon popped';
      case 'onPierce': return 'when all pierce is used up';
      case 'onHalfPierce': return 'when half of its pierce is used up';
      case 'onExpiry': return 'when the attack expires';
    }
  }

  applyBuff(buff) {
    switch (buff.operation) {
      case 'append':
        this.val.push(buff.value);
        break;
      case 'remove':
        let newSummons = [];
        this.val.forEach((summon) => {
          if (summon.attackId != buff.value) newSummons.push(summon);
        });
        this.val = newSummons;
        break;
    }
  }

}
