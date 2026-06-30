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

}
