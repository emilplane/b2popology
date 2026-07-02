export class Property {

  constructor(key, val) {
    this.key = key;
    this.val = val;
  }

  clone() {
    return new Property(this.key, this.val);
  }

  applyBuff(buff) {
    switch (buff.operation) {
      case 'add':
        this.val = this.val + buff.value;
        break;
      case 'mul':
        this.val = parseFloat((this.val * buff.value).toFixed(4));
        break;
      case 'div':
        this.val = parseFloat((this.val / buff.value).toFixed(4));
      case 'set':
        this.val = buff.value;
        break;
    }
  }

}
