import { Property } from './property.js';

export class PropertyBonusDamage extends Property {

  static FORMATTED_TYPES = {
    ceram : "Ceramic",
    lead : "Lead",
    fort : "Fortified",
    moab : "Moab"
  }

  clone() {
    return new PropertyBonusDamage(this.key, this.val);
  }

  toHTML(attack) {
    if (!this.key || !this.val || !attack) return;

    const container = document.createElement('div');
    const pkey = document.createElement('p');
    const pval = document.createElement('p');

    container.append(pkey, pval);

    pval.className = 'property-basic-value';

    pkey.textContent = PropertyBonusDamage.FORMATTED_TYPES[this.key] +' Damage';

    const damage_property = attack.properties.find(property => property.key == 'damage');
    pval.textContent = (damage_property.val + this.val) + ' (+' + this.val + ')';

    return container;
  }

}
