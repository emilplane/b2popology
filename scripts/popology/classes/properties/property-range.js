import { PropertyBasic } from "./property-basic.js";

export class PropertyRange extends PropertyBasic {

  clone() {
    if (!(typeof this.val === 'object')) return new PropertyRange(this.key, this.val);
    if (this.val.attribute == null) {
      const newVal = { "value" : this.val.value };
      return new PropertyRange(this.key, newVal);
    }
    const newVal = { "value" : this.val.value , "attribute" : this.val.attribute};
    return new PropertyRange(this.key, newVal);

  }

  formattedValue() {
    if (this.val.attribute == null) {
      if (this.val.value == null) return this.val;
      return this.val.value;
    }
    if (this.val.attribute == 'infinite') return '∞';
    if (this.val.attribute == 'aoe') return this.val.value + ' (AoE Zone)';
  }

  applyBuff(buff) {
    if (!(typeof this.val === 'object')) {
      super.applyBuff(buff);
      return;
    }
    if (this.val.attribute != null && this.val.attribute == 'infinite') return;
    switch (buff.operation) {
      case 'add':
        this.val.value = this.val.value + buff.value;
        break;
      case 'mul':
        this.val.value = parseFloat((this.val.value * buff.value).toFixed(4));
        break;
      case 'div':
        this.val.value = parseFloat((this.val.value / buff.value).toFixed(4));
      case 'set':
        this.val.value = buff.value;
        break;
    }
  }

}
