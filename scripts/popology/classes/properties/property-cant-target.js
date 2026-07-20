import { PropertyUnkeyed } from './property-unkeyed.js';

export class PropertyCantTarget extends PropertyUnkeyed {

  clone() {
    return new PropertyCantTarget(this.key, this.val);
  }

  getFormattedValue() {
    let str = 'Cannot target, damage, or apply effects to:'
    for (let i = 0; i < this.val.length; i++) {
      if (i == 0) str += '\n';
      else if (i == this.val.length - 1) str += ', or ';
      else str += ', ';
      str += this.formattedTarget(this.val[i]);
    }
    return str
  }

  formattedTarget(target) {
    switch (target) {
      case 'bloons':
        return 'Non-blimps';
      case 'blimps':
        return 'MOAB-Class bloons';
      default:
        return target;
    }
  }

  getOutlineVariable() {
    return '--outline-red';
  }

  applyBuff(buff) {
    switch (buff.operation) {
      case 'append':
        if (Array.isArray(buff.value)) {
          const newVal = [...this.val, ...buff.value];
          this.val = newVal;
        }
        else this.val.push(buff.value);
        break;
      case 'remove':
        const newVal = [];
        this.val.forEach((target) => {
          if (Array.isArray(buff.value) && buff.value.includes(target)) return;
          if (!Array.isArray(buff.value) && buff.value == target) return;
          newVal.push(target);
        });
        this.val = newVal;
        break;
    }
  }

}
