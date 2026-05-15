import { Tower } from './tower.js';

export class Hero extends Tower {
	constructor(name, cost, unlock_cost, size, placeable_on, intel_range, attack, curve, alt_of) {
		super(name, cost, unlock_cost, size, placeable_on, intel_range, attack);
		this.curve = curve;		// NUMBER Hero leveling curve compared to Quincy
		this.alt_of = alt_of;	// STRING Set to null if this isn't an alt
	}
}
