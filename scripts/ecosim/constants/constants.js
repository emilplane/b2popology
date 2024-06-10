/** The default eco send queue */
export const DEFAULT_ECO_QUEUE = [
    {
        "time": ["round", 12],
        "ecoSend": {
            "name": "rainbow",
            "spacing": "spaced"
        }
    },
    {
        "time": ["round", 16],
        "ecoSend": {
            "name": "black",
            "spacing": "grouped"
        }
    },
    {
        "time": ["round", 17],
        "ecoSend": {
            "name": "pink",
            "spacing": "grouped"
        }
    }
]

/** Constants for eco queue UI elements */
export class ECO_QUEUE_UI_ELEMENTS {
    /** Eco queue container */
    static ECO_QUEUE_CONTAINER = document.getElementById("ecoQueueContainer")
    /** Eco queue template */
    static ECO_QUEUE_TEMPLATE = document.getElementById("ecoQueueTemplate")

    /** Zero send button for an eco queue entry */
    static ZERO_SEND_BUTTON() {
        const zeroSendButton = document.createElement('button');
        zeroSendButton.id = "newEcoBloonButton";
        zeroSendButton.className = 
            "material-symbols-outlined ecoBloonGridItem zeroSendSymbol";
        zeroSendButton.textContent = "block";
        return zeroSendButton
    }

    /** Button for an eco send for an eco queue entry. */
    static BLOON_SEND_BUTTON() {
        const bloonSendButton = document.createElement('button');
        bloonSendButton.id = "newEcoBloonButton";
        bloonSendButton.className = "ecoBloonGridItem";
        return bloonSendButton
    }

    /** Create an image element for an eco send. */
    static BLOON_SEND_IMAGE(ecoSend) {
        const img = document.createElement('img');
        img.className = "ecoBloonGridImage";
        img.src = ecoSend.getPortraitFilePath();
        return img
    }

    /** Container and contents of the bloon modifier buttons for each bloon send entry */
    static BLOON_MODIFIER_CONTAINER() {
        const bloonModifierContainer = document.createElement('div');
        bloonModifierContainer.className = "bloonModifierContainer";
        
        const regrowButton = document.createElement('button');
        regrowButton.className = "buttonDark regrow";
        regrowButton.textContent = "Regrow";
        bloonModifierContainer.appendChild(regrowButton);
        
        const camoButton = document.createElement('button');
        camoButton.className = "buttonDark camo";
        camoButton.textContent = "Camo";
        bloonModifierContainer.appendChild(camoButton);
        
        const fortifiedButton = document.createElement('button');
        fortifiedButton.className = "buttonDark fortified";
        fortifiedButton.textContent = "Fortified";
        bloonModifierContainer.appendChild(fortifiedButton);
        
        return bloonModifierContainer
    }
}