import { Property } from './property.js';

export class PropertyOnContact extends Property {

  clone() {
    return new PropertyOnContact(this.key, this.val);
  }

  toHTML(attack) {
    const embeddedAttacks = attack.properties.find(property => property.key == 'embeddedAttacks');
    const targetAttack = embeddedAttacks.val.find(target => target.id == this.val);
    const attackType = targetAttack.properties.find(property => property.key == 'attackType');
    const rootContainer = document.createElement('div');
    const title = document.createElement('h5');

    rootContainer.append(title, targetAttack.toHTML());

    title.textContent = 'Summons ' + attackType.val + ' on first contact';
    return rootContainer;
  }

}
