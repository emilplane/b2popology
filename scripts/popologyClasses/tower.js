export class Tower {
	constructor(name, cost, unlock_cost, size, placeable_on, intel_range, attack) {
		this.name = name;					// STRING Human-readable name displayed on the website
		this.cost = cost;					// NUMBER Price in cash to place down
		this.unlock_cost = unlock_cost;		// NUMBER Unlock cost in Monkey Money
		this.size = size;					// NUMBER ARRAY Tower's footprint
											// if array size is 1 then circle radius, if size is 2 then square (NxN)
		this.placeable_on = placeable_on;   // NUMBER Where the tower can be placed (0 is land, 1 is water, 2 is both)
		this.intel_range = intel_range;		// NUMBER Intel range for tower's with unlimited/dynamic attack range (default is 0)
		this.attack = attack;				// DICT dictionary that will hold a bunch of Attack objects
	}
}
