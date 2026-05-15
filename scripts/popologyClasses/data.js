import { Tower } from './tower.js';
import { Hero } from './hero.js';

const LAND = 0;
const WATER = 1;
const BOTH = 2;
export let towers = [
	new Tower("Dart Monkey", 200, 0, [6], LAND, 0, null),
	new Hero("Quincy", 450, 0, [6], LAND, 0, null, 1, null)
]
