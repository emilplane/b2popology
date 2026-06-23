import { Buff } from './buff.js';
import { Attack } from './attack.js';
import { Upgrade } from './upgrade.js';
import { Tower } from './tower.js';
import { Hero } from './hero.js';

const LAND = 0;
const WATER = 1;
const BOTH = 2;

let dartMonkey = new Tower("dart", "Dart Monkey", 200, 0, [6], LAND, 0, "dartMonkey");
dartMonkey.base_upgrade = new Upgrade(
	"Base",
	0,
	[new Attack("dart", 1, {}, 2, 32, 0.95, "SHARP", false, "none")],
	null
);
dartMonkey.top_upgrades = [
	new Upgrade(
		"Sharp Shots",
		100,
		null,
		[
			new Buff("pierce", "add", 1, ["all", "EX_masterbolt"]),
			new Buff("pierce", "add", 6, ["masterbolt"])
		]
	),
	new Upgrade(
		"Razor Sharp Shots",
		250,
		null,
		[
			new Buff("pierce", "add", 3, ["all", "EX_masterbolt"]),
			new Buff("pierce", "add", 8, ["masterbolt"])
		]
	),
	new Upgrade(
		"Spike-o-pult",
		450,
		[new Attack("spikeball", 1, {"ceram":1}, 26, 37, 1.15, "SHATTER", false, ["dart"])],
		null
	),
	new Upgrade(
		"Juggernaut",
		1800,
		[new Attack("juggernaut", 2, {"ceram":4}, 56, 37, 1.0, "NORMAL", false, ["spikeball"])],
		null
	),
	new Upgrade(
		"Ultra-Juggernaut",
		13500,
		[new Attack("ultrajugg", 5, {"ceram":16, "fort":5, "lead":25}, 196, 37, 1.0, "NORMAL", false, ["juggernaut"])],
		null
	)
];
dartMonkey.mid_upgrades = [
	new Upgrade(
		"Quick Shots",
		100,
		null,
		[new Buff("cooldown", "mul", 0.85, ["all"])]
	),
	new Upgrade(
		"Very Quick Shots",
		100,
		null,
		[new Buff("cooldown", "mul", 0.78, ["all"])]
	),
	new Upgrade(
		"Triple Shot",
		350,
		null,
		[new Buff("projectile_count", "add", 2, ["dart"])]
	),
	new Upgrade(
		"Super Monkey Fan Club",
		9000,
		null,
		[
			new Buff("damage", "add", 2, ["dart"]),
			new Buff("cooldown", "mul", 0.75, ["dart"])
		]
	),
	new Upgrade(
		"Plasma Monkey Fan Club",
		45000,
		null,
		[new Buff("damage", "add", 3, ["dart"])]
	)
];
dartMonkey.bot_upgrades = [
	new Upgrade(
		"Long Range Darts",
		90,
		null,
		[new Buff("range", "add", 8, ["all"])]
	),
	new Upgrade(
		"Enhanced Eyesight",
		200,
		null,
		[
			new Buff("range", "add", 8, ["all"]),
			new Buff("camo", "set", true, ["all"])
		]
	),
	new Upgrade(
		"Crossbow",
		600,
		[new Attack("bolt", 3, {}, 7, 40, 0.95,"SHARP", true, ["dart"])],
		null
	),
	new Upgrade(
		"Sharp Shooter",
		2300,
		[new Attack("sharpbolt", 6, {}, 7, 40, 0.75, "SHARP", true, ["bolt"])],
		null
	),
	new Upgrade(
		"Crossbow Master",
		27000,
		[new Attack("masterbolt", 9, {}, 13, 60, 0.13, "NORMAL", true, ["sharpbolt"])],
		null
	)
];


let quincy = new Hero("quincy", "Quincy", 450, 0, [6], LAND, 0, "quincy", 1, null)

export const towers = [ dartMonkey, quincy ];
