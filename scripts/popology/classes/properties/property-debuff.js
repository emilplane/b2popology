import { Property } from './property.js'

export class PropertyDebuff extends Property {

  clone() {
    return new PropertyDebuff(this.key, structuredClone(this.val));
  }

  toHTML() {
    const rootContainer = document.createElement('div');
    const debuffHeader = document.createElement('h5');
    const debuffInfo = document.createElement('p');

    rootContainer.append(debuffHeader, debuffInfo);

    debuffHeader.textContent = 'Applies the following debuffs to affected bloons:';

    this.val.forEach((debuff) => {
      debuffInfo.textContent += this.debuffToText(debuff);
    });

    return rootContainer;
  }

  debuffToText(debuff) {
    let str = '';
    if (debuff.debuffType != null) str += debuff.debuffType;
    if (debuff.debuffValue != null) str += ` (${debuff.debuffValue})`;
    if (debuff.debuffDuration != null) str += ` for ${debuff.debuffDuration}s`;
    if (debuff.cantStack != null) {
      str += ' can\'t stack with: ';
      debuff.cantStack.forEach(stack => str += stack);
    }
    return str + ', ';
  }

  applyBuff(buff) {
    switch (buff.operation) {
      case 'append':
        this.val.push(buff.value);
        break;
      case 'remove':
        const newVal = [];
        this.val.forEach((debuff) => {
          if (debuff.id == null || debuff.id != buff.value) newVal.push(debuff);
        });
        this.val = newVal;
        break;
    }
  }

}
