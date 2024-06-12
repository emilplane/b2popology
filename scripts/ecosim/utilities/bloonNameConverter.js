import { BLOON_NAME_CONVERSION_VALUES } from "../constants/constants.js";

/**
 * Converts a name from the ecosim to a normalized name or vice versa.
 * @param {string} name 
 * The name to be converted
 * @param {string} type
 * "ecoSimName" for a bloon name from the ecosim, "bloonName" for a bloon 
 * name from the game (not implemented yet)
 * @returns {string}
 * The converted name
 */
export default function bloonNameConverter(name, type) {
    if (type == "ecoSimName") {
        return BLOON_NAME_CONVERSION_VALUES[name]
    }
}