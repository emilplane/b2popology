import { Property } from './property.js';

export class PropertySummonAttack extends Property {

  clone() {
    return new PropertySummonAttack(this.key, Array.from(this.val));
  }

  toHTML(attack) {
    const embeddedAttacks = attack.properties.find(property => property.key == 'embeddedAttacks');
    const targetAttack = embeddedAttacks.val.find(target => target.id == this.val.attackId);
    const attackType = targetAttack.properties.find(property => property.key == 'attackType');
    const rootContainer = document.createElement('div');
    const title = document.createElement('h5');

    targetAttack.addFlag('thirdaryBackground');

    rootContainer.append(title, targetAttack.toHTML());

    let str = `Summons ${attackType.val}`;
    for (let i = 0; i < this.val.type.length; i++) {
      if (i == 0) str += ' ';
      else if (i == this.val.type.length - 1) str += ', or ';
      else str += ', ';
      str += this.typeToText(this.val.type[i]);
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

}
