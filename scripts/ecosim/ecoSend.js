export default class EcoSend {
    constructor(bloon, type) {
        this.inputBloon = bloon
        this.type = type
        this.ecoSend;
        if (type == "ecoSimName") {
            if (bloon == "Zero") {
                this.ecoSend = {
                    "name": "zero",
                    "spacing": null
                }
            } else {
                let name
                switch (this.inputBloon.split(" ")[1]) {
                    case "Reds":      name = "red";       break;  case "Blues":    name = "blue";      break;
                    case "Greens":    name = "green";     break;  case "Yellows":  name = "yellow";    break;
                    case "Pinks":     name = "pink";      break;  case "Whites":   name = "white";     break;
                    case "Blacks":    name = "black";     break;  case "Purples":  name = "purple";    break;
                    case "Zebras":    name = "zebra";     break;  case "Leads":    name = "lead";      break;
                    case "Rainbows":  name = "rainbow";   break;  case "Ceramics": name = "ceramic";   break;
                    case "Moabs":     name = "moab";      break;  case "Bfbs":     name = "bfb";       break;
                    case "Zongs":     name = "zomg";      break;  case "dts":     name = "ddt";       break;
                    case "Bads":      name = "bad";       break;  case "Zero": default: name = "zero"; break;
                }
                let spacing = (this.inputBloon.split(" ")[0]).toLowerCase()
                this.ecoSend = {
                    "name": name,
                    "spacing": spacing
                }
            }
        }
    }

    getPortraitFilePath() {
        return `media/bloonIcons/${this.ecoSend.name}/${this.ecoSend.name}.png`
    }

    getEcoSend() {
        return this.ecoSend
    }

    getName() {
        return this.ecoSend.name
    }

    getSpacing() {
        return this.ecoSend.spacing
    }
}