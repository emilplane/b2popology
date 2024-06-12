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
        "time": ["round", 12],
        "ecoSend": {
            "name": "rainbow",
            "spacing": "spaced"
        }
    },
    {
        "time": ["round", 12],
        "ecoSend": {
            "name": "rainbow",
            "spacing": "spaced"
        }
    },
    {
        "time": ["round", 12],
        "ecoSend": {
            "name": "rainbow",
            "spacing": "spaced"
        }
    },
    {
        "time": ["round", 12],
        "ecoSend": {
            "name": "rainbow",
            "spacing": "spaced"
        }
    },
    {
        "time": ["round", 12],
        "ecoSend": {
            "name": "rainbow",
            "spacing": "spaced"
        }
    },
    {
        "time": ["round", 12],
        "ecoSend": {
            "name": "rainbow",
            "spacing": "spaced"
        }
    },
    {
        "time": ["round", 12],
        "ecoSend": {
            "name": "rainbow",
            "spacing": "spaced"
        }
    },
    {
        "time": ["round", 12],
        "ecoSend": {
            "name": "rainbow",
            "spacing": "spaced"
        }
    },
    {
        "time": ["round", 12],
        "ecoSend": {
            "name": "rainbow",
            "spacing": "spaced"
        }
    },
    {
        "time": ["round", 12],
        "ecoSend": {
            "name": "rainbow",
            "spacing": "spaced"
        }
    },
    {
        "time": ["round", 12],
        "ecoSend": {
            "name": "rainbow",
            "spacing": "spaced"
        }
    },
    {
        "time": ["round", 12],
        "ecoSend": {
            "name": "rainbow",
            "spacing": "spaced"
        }
    },
    {
        "time": ["round", 12],
        "ecoSend": {
            "name": "rainbow",
            "spacing": "spaced"
        }
    },
    {
        "time": ["round", 12],
        "ecoSend": {
            "name": "rainbow",
            "spacing": "spaced"
        }
    },
    {
        "time": ["round", 12],
        "ecoSend": {
            "name": "rainbow",
            "spacing": "spaced"
        }
    },
    {
        "time": ["round", 12],
        "ecoSend": {
            "name": "rainbow",
            "spacing": "spaced"
        }
    },
    {
        "time": ["round", 12],
        "ecoSend": {
            "name": "rainbow",
            "spacing": "spaced"
        }
    },
    {
        "time": ["round", 12],
        "ecoSend": {
            "name": "rainbow",
            "spacing": "spaced"
        }
    },
    {
        "time": ["round", 12],
        "ecoSend": {
            "name": "rainbow",
            "spacing": "spaced"
        }
    },
    {
        "time": ["round", 12],
        "ecoSend": {
            "name": "rainbow",
            "spacing": "spaced"
        }
    },
    {
        "time": ["round", 12],
        "ecoSend": {
            "name": "rainbow",
            "spacing": "spaced"
        }
    },
    {
        "time": ["round", 12],
        "ecoSend": {
            "name": "rainbow",
            "spacing": "spaced"
        }
    },
    {
        "time": ["round", 12],
        "ecoSend": {
            "name": "rainbow",
            "spacing": "spaced"
        }
    },
    {
        "time": ["round", 12],
        "ecoSend": {
            "name": "rainbow",
            "spacing": "spaced"
        }
    },
    {
        "time": ["round", 12],
        "ecoSend": {
            "name": "rainbow",
            "spacing": "spaced"
        }
    },
    {
        "time": ["round", 12],
        "ecoSend": {
            "name": "rainbow",
            "spacing": "spaced"
        }
    },
    {
        "time": ["round", 12],
        "ecoSend": {
            "name": "rainbow",
            "spacing": "spaced"
        }
    },
    {
        "time": ["round", 12],
        "ecoSend": {
            "name": "rainbow",
            "spacing": "spaced"
        }
    },
    {
        "time": ["round", 12],
        "ecoSend": {
            "name": "rainbow",
            "spacing": "spaced"
        }
    },
    {
        "time": ["round", 17],
        "ecoSend": {
            "name": "pink",
            "spacing": "grouped"
        }
    },
    {
        "time": ["round", 16],
        "ecoSend": {
            "name": "black",
            "spacing": "grouped"
        }
    }
]

export const BLOON_NAME_CONVERSION_VALUES = {
    "Reds": "red",
    "Blues": "blue",
    "Greens": "green",
    "Yellows": "yellow",
    "Pinks": "pink",
    "Whites": "white",
    "Blacks": "black",
    "Purples": "purple",
    "Zebras": "zebra",
    "Leads": "lead",
    "Rainbows": "rainbow",
    "Ceramics": "ceramic",
    "Moabs": "moab",
    "Bfbs": "bfb",
    "Zongs": "zomg",
    "dts": "ddt",
    "Bads": "bad",
    "Zero": "zero"
}

/** Constants for eco queue UI elements */
export class ECO_QUEUE_UI_ELEMENTS {
    /** Eco queue container */
    static ECO_QUEUE_CONTAINER = document.getElementById("ecoQueueContainer")

    /** Eco queue template card */
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
    static BLOON_SEND_BUTTON_IMAGE(ecoSend) {
        const img = document.createElement('img');
        img.className = "ecoBloonGridImage";
        img.src = ecoSend.getPortraitFilePath();
        return img
    }

    static ZERO_SEND_IMAGE() {
        const zeroSendContainer = document.createElement("div");
        zeroSendContainer.className = 
            "material-symbols-outlined imageIconSmall ecoBloonIcon zeroSendSymbol";
        zeroSendContainer.innerText = "block";
        return zeroSendContainer
    }

    static SINGLE_SEND_BLOON_IMAGE(path) {
        var imgElement = document.createElement('img');
        imgElement.classList.add('imageIconSmall', 'ecoBloonIcon');
        imgElement.src = path;

        return imgElement
    }

    static DOUBLE_SEND_BLOON_IMAGE(path) {
        var containerDiv = document.createElement('div');
        containerDiv.classList.add('doubleBloonSmall');
        
        var firstImg = document.createElement('img');
        firstImg.classList.add('imageIconSmall', 'ecoBloonIcon');
        firstImg.src = path;

        var secondImg = document.createElement('img');
        secondImg.classList.add('imageIconSmall', 'ecoBloonIcon');
        secondImg.src = path;

        containerDiv.appendChild(firstImg);
        containerDiv.appendChild(secondImg);

        return containerDiv
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

    /** Element to change the round of an eco send */
    static CHANGE_ROUND_BUTTON(currentValue) {
        const div = document.createElement('div');
        div.classList.add('changeEcoSendRoundContainer');

        const input = document.createElement('input');
        input.setAttribute('type', 'number');
        input.classList.add('changeEcoSendRoundInput');
        input.value = currentValue;

        const cancelButton = document.createElement('button');
        cancelButton.classList.add('material-symbols-outlined', 'iconButton', 'cancel');
        cancelButton.textContent = 'close';

        const confirmButton = document.createElement('button');
        confirmButton.classList.add('material-symbols-outlined', 'iconButton', 'confirm');
        confirmButton.textContent = 'check';

        div.appendChild(input);
        div.appendChild(cancelButton);
        div.appendChild(confirmButton);

        return div
    }
}

export const MAIN_ELEMENT = document.querySelector(".main")
export const TAB_CONTAINER_ELEMENT = document.getElementById("tabContainer")