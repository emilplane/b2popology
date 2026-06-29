import { Attack } from '/scripts/popologyClasses/attack.js';
import { Tower } from '/scripts/popologyClasses/tower.js';
import { Hero } from '/scripts/popologyClasses/hero.js';

const towerView = document.getElementById('towerView');

main();

async function main() {
	let params = new URLSearchParams(document.location.search);
	let id = params.get("id");
	if (id == null) id = "dartMonkey";
	const tower = await Tower.getTowerById(id);
	let path = params.get("path");
	const towerHTML = await tower.toHTML(path, towerView);
	towerView.appendChild(towerHTML);
}

