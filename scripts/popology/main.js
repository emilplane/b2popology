import { Tower } from '/scripts/popology/classes/tower.js';

const towerView = document.getElementById('tower-view');

const params = new URLSearchParams(document.location.search);

main();

async function main() {
  const towerId = (params.get("id") != null) ? params.get("id") : "dartMonkey"
  const towerPath = (params.get("path") != null) ? params.get("path") : "000"

  const tower = await Tower.loadTower(towerId);
  const towerHTML = await tower.toHTML(towerPath, towerView);
  towerView.appendChild(towerHTML);
}

