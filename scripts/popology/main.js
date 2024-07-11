import PopologyTower from "./popologyTower.js";
import { TEST_CASES, TOWER_JSON_SCHEMA } from "./constants.js";
import validateJson from "./validateJson.js";

const testTower = new PopologyTower(TEST_CASES.TEST_CASE_1)

console.log(testTower)
console.log(testTower.getUpgrade("base"))