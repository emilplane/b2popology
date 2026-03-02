export interface PropertyCategorizationType {
    nestedProperties: {
        name: string;
        subProperties: string[];
        displaySeperatelyWhenNested: boolean;
    }[];
    standard: string[];
}

export interface PopologyConfigType {
    propertyCategorization: PropertyCategorizationType,
    propertyDisplayNames: object;
}

export const popologyConfig: PopologyConfigType = {
    propertyCategorization: {
        nestedProperties: [
            {
                name: "damage",
                subProperties: [
                    "ceramic_damage",
                    "fortified_damage"
                ],
                displaySeperatelyWhenNested: true,
            },
            {
                name: "attack_cooldown",
                subProperties: [
                    "attack_type"
                ],
                displaySeperatelyWhenNested: false,
            }
        ],
        standard: [
            "range",
            "size",
            "pierce",
            "attack_cooldown",
            "attack_type"
        ]
    },
    propertyDisplayNames: {
        "damage": "damage",
        "pierce": "pierce",
        "attack_cooldown": "attack cooldown",
        "attack_type": "attack type",
        "range": "range",
        "size": "size",
        "ceramic_damage": "ceramic",
        "fortified_damage": "fortified",
    }
}