import {HSL} from "../utilities.js";

export const magicTowers = {
    "wizardMonkey": {
        "name": "wizardMonkey", "displayName": "Wizard Monkey",
        "nameSplit": [
            {"name": "Wizard", "prioritize": true},
            {"name": "Monkey", "prioritize": false}
        ],

        "aliases": ["lizard", "lizardmonkey", "wiz", "apprentice"],

        "upgradeNames": [
            [
                {
                    "name": "guidedMagic", "displayName": "Guided Magic",
                    "aliases": ["gmagic", "guided"]
                },
                {
                    "name": "arcaneBlast", "displayName": "Arcane Blast",
                    "aliases": ["ablast"]
                },
                {
                    "name": "arcaneMastery", "displayName": "Arcane Mastery",
                    "aliases": ["amastery", "mastery"]
                },
                {
                    "name": "arcaneSpike", "displayName": "Arcane Spike",
                    "aliases": ["aspike"]
                },
                {
                    "name": "archmage", "displayName": "Archmage",
                    "aliases": ["arch"]
                }
            ],
            [
                {
                    "name": "fireball", "displayName": "Fireball",
                    "aliases": []
                },
                {
                    "name": "wallOfFire", "displayName": "Wall Of Fire",
                    "aliases": ["wof"]
                },
                {
                    "name": "dragonsBreath", "displayName": "Dragon's Breath",
                    "aliases": ["dbreath", "dragon", "breath"]
                },
                {
                    "name": "summonPhoenix", "displayName": "Summon Phoenix",
                    "aliases": ["phoenix", "summon"]
                },
                {
                    "name": "wizardLordPhoenix",
                    "displayName": "Wizard Lord Phoenix",
                    "aliases": ["wlp"]
                }
            ],
            [
                {
                    "name": "intenseMagic", "displayName": "Intense Magic",
                    "aliases": ["intense", "imagic"]
                },
                {
                    "name": "monkeySense", "displayName": "Monkey Sense",
                    "aliases": ["msense"]
                },
                {
                    "name": "shimmer", "displayName": "Shimmer",
                    "aliases": []
                },
                {
                    "name": "necromancerUnpoppedArmy",
                    "displayName": "Necromancer: Unpopped Army",
                    "aliases": ["necro"]
                },
                {
                    "name": "princeOfDarkness",
                    "displayName": "Prince Of Darkness",
                    "aliases": ["pod"]
                }
            ]
        ],

        "colors": {
            "base": {
                "backgroundGradient": {
                    "start": new HSL(0, 0, 0),
                    "end": new HSL(0, 0, 0)
                }
            },
            "upgrades": [
                [
                    {
                        // "backgroundGradient": new BackgroundGradient(
                        //     new HSL(18, 90, 38), new HSL(73, 100, 30), 90)
                    }
                ],
            ],
        },

        // An attempt to identify which properties are shown as a summary on the upgrade selection
        // screen.
        // "summaryProperties": {
        //     "base": [
        //         []
        //     ],
        //     "paths": [
        //         [
        //             [], [["magic-bolt", "damage"]], [], [], [],
        //         ],
        //         [
        //             [], [], [], [], [],
        //         ],
        //         [
        //             [], [], [], [], [],
        //         ]
        //     ]
        // },

        "towerProperties": {
            "range": 40,
            "towerCamo": true
        },

        "properties": {
            "range": 40
        },

        "upgrades": {
            "base": [
                {
                    "name": "magic-bolt",
                    "action": "new", "type": "attack",

                    "properties": {
                        "damage": 1,
                        "pierce": 3,
                        "attackCooldown": 1.1,
                        "attackType": "energy",
                        // "impact": true
                    }
                }
            ],
            "paths": [
                [
                    [
                        {
                            "name": "magic-bolt",
                            "action": "buff", "type": "attack",

                            "properties": {
                                "canSeePastObstacles": true,
                                "homingTurnRate": ["set", 720],
                            }
                        }
                    ],
                    [
                        {
                            "name": "magic-bolt",
                            "action": "buff", "type": "attack",

                            "properties": {
                                "damage": ["+", 1],
                            }
                        }
                    ],
                    [
                        {
                            "name": "magic-bolt",
                            "action": "buff", "type": "attack",

                            "properties": {
                                "damage": ["+", 1],
                                "pierce": ["+", 4],
                                "attackCooldown": ["*", 0.5],
                                "attackType": "plasma"
                            }
                        }
                    ],
                    [
                        {
                            "name": "magic-bolt",
                            "action": "buff", "type": "attack",

                            "properties": {
                                "damage": ["+", 5],
                                "moabDamageBonus": ["+", 10],
                                "leadDamageBonus": ["+", 4],
                                "attackCooldown": ["*", 0.5]
                            }
                        }
                    ],
                    [
                        {
                            "name": "magic-bolt",
                            "action": "buff", "type": "attack",

                            "properties": {
                                "damage": ["+", 2],
                                "moabDamageBonus": ["+", 15],
                                "leadDamageBonus": ["+", 4],
                                "pierce": ["+", 6],
                                "attackCooldown": ["*", 0.5]
                            }
                        },
                        {
                            "name": "flame",
                            "action": "new", "type": "attack",

                            "properties": {
                                "damage": 1,
                                "ceramicDamageBonus": 1,
                                "moabDamageBonus": 1,
                                "pierce": 4,
                                "attackCooldown": 0.05,
                                "attackType": "fire",
                                "canSeePastObstacles": true,
                                "collidesWithObstacles": true,
                                "onContact": ["burn"],
                            }
                        },
                        {
                            "name": "burn",
                            "action": "new", "type": "status",

                            "properties": {
                                "damage": 1,
                                "tick": 1.5,
                                "duration": 3.1,
                            }
                        }
                    ]
                ],
                [
                    [
                        {
                            "name": "fireball",
                            "action": "new", "type": "attack",

                            "properties": {
                                "attackCooldown": 2.6,
                                "onContact": ["explosion"]
                            }
                        },
                        {
                            "name": "explosion",
                            "action": "new", "type": "subattack",

                            "properties": {
                                "damage": 2,
                                "pierce": 15,
                                "attackType": "explosion",
                            }
                        }
                    ],
                    [
                        {
                            "name": "place-fire",
                            "action": "new", "type": "attack",

                            "properties": {
                                "attackCooldown": 5.5,
                                "places": ["wall-of-fire"],
                            }
                        },
                        {
                            "name": "wall-of-fire",
                            "action": "new", "type": "trackItem",

                            "properties": {
                                "damage": 1,
                                "pierce": 15,
                                "attackCooldown": 0.15,
                                "attackType": "fire",
                                "duration": 5.5,
                                "onContact": ["vuldora"],
                            }
                        }
                    ],
                    [
                        {
                            "name": "explosion",
                            "action": "buff", "type": "subattack",

                            "properties": {
                                "damage": ["+", 7],
                            }
                        },
                        {
                            "name": "place-fire",
                            "action": "buff", "type": "attack",

                            "properties": {
                                "attackCooldown": ["set", 4.5],
                            }
                        }
                    ],
                    [],
                    []
                ],
                [
                    [],
                    [],
                    [],
                    [],
                    []
                ]
            ]
        }
    }
}