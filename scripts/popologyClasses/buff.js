export class Buff {
	constructor(type, operation, value, affectedAttacks) {
		this.type = type;
		this.operation = operation;
		this.value = value;
		this.affectedAttacks = affectedAttacks
	}

	static fromJson(data = {}) {
		let buff = new Buff();
		Object.assign(buff, data);
		return buff;
	}

	clone() {
		return new Buff(this.type, this.operation, this.value, this.affectedAttacks);
	}

}
