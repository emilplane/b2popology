import { Attack } from '/scripts/popologyClasses/attack.js';
import { Tower } from '/scripts/popologyClasses/tower.js';
import { Hero } from '/scripts/popologyClasses/hero.js';

const dataPath = '/scripts/popologyClasses/data.json';

const towerName = document.getElementById("towerName");
const upgradeName = document.getElementById("upgradeName");
const towerImg = document.getElementById("towerImg")

const baseStatTemplate = document.getElementById("baseStatTemplate");
const iconedStats = document.getElementById("iconedStats");

const attack = document.getElementById("attack");
const attackTemplate = document.getElementById("attackTemplate");
const attacksContainer = document.getElementById("attacksContainer");

main();

async function main() {
	const data = await loadData();
	let towers = [];
	for (let i = 0; i < data["towers"].length; i++) {
		towers.push(Tower.fromJson(data["towers"][i]));
	}

	let params = new URLSearchParams(document.location.search);
	let id = params.get("id");
	if (id == null) id = "dartMonkey";
	let tower = Tower.getTowerById(id, towers);
	console.log(tower);
	let path = params.get("path");
	if (path == null) path = "000";
	renderMainInfo(tower, path);
}

async function loadData() {
	try {
		const response = await fetch(dataPath);
		if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
		const data = await response.json();
		return data;
	}
	catch (error) {
		console.error("Failed to load JSON:", error);
	}
}

function renderMainInfo(tower, path) {
	towerName.textContent = tower.name + " " + pathFormatted(path);
    upgradeName.textContent = tower.getUpgradeName(path);
	towerImg.src = tower.getImagePath(path);
	createBaseStatBox("/media/Icons/monkeyMoney.png", tower.formattedUnlockCost());
	createBaseStatBox("/media/Icons/cash.png", "$" + tower.getTotalCost(path));
	createBaseStatBox("/media/Icons/size.png", tower.formattedSize());
	createBaseStatBox("/media/Icons/placement.png", tower.formattedPlacement());
	createBaseStatBox("/media/Icons/advIntel.png", tower.intel_range)
	tower.getAttacks(path).forEach((attack) => {
        renderAttack(attack);
    });
   tower.getAbilities(path).forEach((ability) => {
        renderAbility(ability);
    });
     
}

function createBaseStatBox(imagePath, text) {
	if (text == null) return;
	const clone = baseStatTemplate.content.cloneNode(true);
	clone.querySelector('p').textContent = text;
	clone.querySelector('img').src = imagePath;
	iconedStats.appendChild(clone);
}

function createAttackBox(topText, bottomText, parent) {
	if ((topText == null) || (bottomText == null)) return;
	const attackBoxTemplate = parent.querySelector('#attackBoxTemplate');
	const clone = attackBoxTemplate.content.cloneNode(true);
	clone.querySelectorAll('p')[0].textContent = topText;
	clone.querySelectorAll('p')[1].textContent = bottomText;
	parent.appendChild(clone);
}

function renderAttack(attack) {
	const clone = attackTemplate.content.cloneNode(true);
	const attackStatContainer = clone.querySelector('.attackStatContainer');
    const grayBox = clone.querySelector('.grayBox');
	clone.getElementById("attackId").textContent = attack.name + " attack";
	createAttackBox("Damage", attack.damage, attackStatContainer);
	createAttackBox("Pierce", attack.pierce, attackStatContainer);
	createAttackBox("Range", attack.formattedRange(), attackStatContainer);
	createAttackBox("Cooldown", attack.formattedCooldown(), attackStatContainer);
	createAttackBox("Type", attack.type, attackStatContainer);
	createAttackBox("Projectiles", attack.projectile_count, attackStatContainer);
	if (attack.camo) {
        const camoimg = document.createElement('img');
        camoimg.src = "/media/propertyIcons/camo.png";
        camoimg.style = "height: 54px; width: auto; padding-top: 8px;";
        attackStatContainer.appendChild(camoimg);
    }
	if (!(attack.bonus_damage == null)) {
		Object.keys(attack.bonus_damage).forEach((bonus) => {
			createAttackBox(Attack.formattedBonus(bonus), Attack.formattedBonusDamage(attack.bonus_damage[bonus], attack.damage), attackStatContainer);
		});
	}
    if (!(attack.notes == null)) {
        attack.notes.forEach((note) => {
            addFootnote(note, grayBox);
        });
    }
	attacksContainer.appendChild(clone);
}

function renderAbility(ability) {
	const clone = attackTemplate.content.cloneNode(true);
	const attackStatContainer = clone.querySelector('.attackStatContainer');
    const grayBox = clone.querySelector('.grayBox');
	clone.getElementById("attackId").textContent = ability.name + " ability";
	createAttackBox("Cooldown", ability.cooldown, attackStatContainer);
	createAttackBox("Duration", ability.duration, attackStatContainer);
	createAttackBox("Battle-Ready", ability.battle_ready, attackStatContainer);
    if (!(ability.desc == null)) {
        ability.desc.forEach((note) => {
            addFootnote(note, grayBox);
        });
    }
	attacksContainer.appendChild(clone);
}

function addFootnote(text, parent) {
    if (text == null) return;
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "* " + text;
    newParagraph.className = "footnote";
    parent.appendChild(newParagraph);
}

function strPathToNum(str) {
	if (!/^\d{3}$/.test(str)) {
		if (!/^\d+$/.test(str)) {
			console.error(`"${str}" is not a number`);
		}
		else {
			console.error(`"${str}" must be exactly 3 digits long`);
		}
    return null;
  }
  return str.split("").map(Number);
}

function pathToDir(top, mid, bot) {
	if ((top >= mid) && (top >= bot)) return "topPath";
	if ((mid >= top) && (mid >= bot)) return "middlePath";
	return "bottomPath";
}


function getDominantUpgrade(top, mid, bot, tower) {
	if (Math.max(top, mid, bot) == top) {
		if ((tower.top_upgrades == null) || (tower.top_upgrades.length < top)) return null;
		return tower.top_upgrades[top - 1];
	}
	if (Math.max(top, mid, bot) == mid) {
		if ((tower.mid_upgrades == null) || (tower.mid_upgrades.length < mid)) return null;
		return tower.mid_upgrades[mid - 1];
	}
	if ((tower.bot_upgrades == null) || (tower.bot_upgrades.length < bot)) return null;
	return tower.bot_upgrades[bot - 1];
}

function handleBonusDamage(attack, type, element) {
	if (type in attack.bonus_damage) {
		const secondP = element.querySelectorAll("p")[1];
		secondP.textContent = (attack.bonus_damage[type] + attack.damage) + " (+" + attack.bonus_damage[type]  + ")";
	}
	else element.remove();
}

function isObjectEmpty(obj) {
	return obj && Object.keys(obj).length === 0 && obj.constructor === Object;
}

function pathFormatted(path) {
	return "(" + path[0] + "-" + path[1] + "-" + path[2] + ")";
}
