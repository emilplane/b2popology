export interface PropertyCategorizationType {
    nestedProperties: {
        name: string;
        subProperties: string[];
        displayAsNested: boolean;
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
                displayAsNested: true,
                displaySeperatelyWhenNested: true,
            },
            {
                name: "attack_cooldown",
                subProperties: [
                    "attack_type"
                ],
                displayAsNested: true,
                displaySeperatelyWhenNested: true,
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