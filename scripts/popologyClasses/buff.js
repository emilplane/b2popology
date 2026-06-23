export class Buff {
	constructor(type, operation, value, affected_attacks) {
		this.type = type;
		this.operation = operation;
		this.value = value;
		this.affected_attacks = affected_attacks
	}

	static fromJson(data = {}) {
		let buff = new Buff();
		Object.assign(buff, data);
		return buff;
	}
}
