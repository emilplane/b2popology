export class Attack {

	constructor(name, damage, pierce, range, cooldown, type, camo, overwrites) {
		this.name = name;
		this.damage = damage;
		this.pierce = pierce;
		this.range = range;
		this.cooldown = cooldown;
		this.type = type;
		this.camo = camo
		this.overwrites = overwrites;
	}
	
	static fromJson(data = {}) {
		let attack = new Attack();
		Object.assign(attack, data);
		return attack;
	}

    clone() {
        let attack = new Attack(this.name, this.damage, this.pierce, this.range, this.cooldown, this.type, this.camo, this.overwrites);
        if (this.bonus_damage != null) attack.bonus_damage = this.bonus_damage;
        if (this.notes != null) attack.notes = this.notes;
        if (this.projectile_count != null) attack.projectile_count = this.projectile_count;
        return attack;
    }

	static buffedAttack(attack, buff) {
		if (buff.affected_attacks.includes("EX_" + attack.name)) return attack;
		let new_attack = attack.clone();

		if (buff.affected_attacks.includes(new_attack.name) || buff.affected_attacks.includes("all")) {
			new_attack[buff.type] = Attack.applyBuff(new_attack[buff.type], buff.value, buff.operation);
		}
		return new_attack;
	}

	static applyBuff(value, mod, operation) {
		if (operation == "add") return value + mod;
		if (operation == "mul") return value * mod;
		if (operation == "set") return mod;
		return value;
	}

	static formattedBonus(bonus) {
		const bonuses = { "ceram" : "Ceramic", "fort" : "Fortified", "lead" : "Lead" };
		return bonuses[bonus] + " Damage";
	}

	static formattedBonusDamage(bonus, damage) {
		return (damage + bonus) + " (+" + bonus + ")";
	}

    formattedRange() {
        if (this.range == null) return null;
        return this.range + " radius";
    }

    formattedCooldown() {
        if (this.cooldown == null || Number.isNaN(this.cooldown)) return null;
        return this.cooldown + "s";
    }
}
