export class Buff {

  constructor(type, operation, value, affectedAttacks, affectedAbilities, affectedPaths) {
    this.type = type;
    this.operation = operation;
    this.value = value;
    this.affectedAttacks = affectedAttacks;
    this.affectedAbilities = affectedAbilities;
    this.affectedPaths = affectedPaths;
  }

  static fromData(data) {
    if (data.affectedAbilities == null) data.affectedAbilities = [];
    if (data.affectedAttacks == null) data.affectedAttacks = [];
    return new Buff(data.type, data.operation, data.value, data.affectedAttacks, data.affectedAbilities, data.affectedPaths);
  }

  clone() {
    return new Buff(this.type, this.operation, this.value, this.affectedAttacks, this.affectedAbilities, this.affectedPaths);
  }

  toHTML() {
    const p = document.createElement('p');

    p.className = 'property-footnote';

    let str = '*';
    for (let i = 0; i < this.affectedAttacks.length; i++) {
      str += ' ' + this.affectedAttacks[i]
      if (i != this.affectedAttacks.length - 1) str + ','
    }
    str += ' attack';
    if (this.affectedAttacks.length != 1) str += 's';
    str += ' buffed, ';
    if (this.operation == 'add') str += `+${this.value} ${this.type}`;
    else if (this.operation == 'mul') str += `${this.type} multiplied by ${this.value}`;
    else if (this.operation == 'div') str += `${this.type} divided by ${this.value}`;
    else if (this.operation == 'set') str += `${this.type} set to ${this.value}`;

    p.textContent = str;
    return p;
  }

}
