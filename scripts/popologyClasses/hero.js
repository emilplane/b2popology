import { Tower } from './tower.js';

export class Hero extends Tower {
	constructor(id, name, cost, unlock_cost, size, placeable_on, intel_range, imgsrc, curve, alt_of) {
		super(id, name, cost, unlock_cost, size, placeable_on, intel_range, imgsrc);
		this.curve = curve;		// NUMBER Hero leveling curve compared to Quincy
		this.alt_of = alt_of;	// STRING Set to null if this isn't an alt
	}
}
