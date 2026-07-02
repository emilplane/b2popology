export class Buff {

  constructor(type, operation, value, affectedAttacks) {
    this.type = type;
    this.operation = operation;
    this.value = value;
    this.affectedAttacks = affectedAttacks
  }

  static fromData(data) {
    return new Buff(data.type, data.operation, data.value, data.affectedAttacks);
  }

  clone() {
    return new Buff(this.type, this.operation, this.value, this.affectedAttacks);
  }

  toHTML() {
    const p = document.createElement('p');
    let str = '';
    for (let i = 0; i < this.affectedAttacks.length; i++) {
      if (i != 0) str += ' ';
      str += this.affectedAttacks[i]
      if (i != this.affectedAttacks.length - 1) str + ','
    }
    str += ' attack';
    if (this.affectedAttacks.length == 1) str += 's';
    str += ' buffed.\n';
    if (this.operation == 'add') str += `+${this.value} ${this.type}.`;
    else if (this.operation == 'mul') str += `${this.type} multiplied by ${this.value}.`;
    else str += `${this.type} set to ${this.value}.`;
    return p;
  }

}
