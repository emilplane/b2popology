    const data = {
    "stats": {
        "primary": {
            "type": "nestedArrays",
            "entries": {
                "dartMonkey": {
                    "name": "Dart Monkey",
                    "data": {
                        "base": [
                            "$150 (0 MM)",
                            "size: 6 radius",
                            "placeable on: land",
                            "dart attack",
                            [
                                "1d, 2p, 32r, 0.95s, sharp type",
                                ["advanced_mode", "2jr, 300jsp, 0.25js, 0.14ds"]
                            ]
                        ],
                        "top": {
                            "1": {
                                "name": "100 - Sharp Shots",
                                "content": [
                                    "dart attack buffed",
                                    [
                                        "+1p (3p)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "200 - Razor Sharp Shots",
                                "content": [
                                    "dart attack buffed",
                                    [
                                        "+3p (6p)"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "300 - Spike-o-pult",
                                "content": [
                                    "dart attack replaced by spikeball",
                                    [
                                        "1d, 1cd (2cd), +17p (22p), +15%r (36.8r), 1.15s, shatter type",
                                        ["advanced_mode", "5jr, 150jsp, 1js, 0.15ds"],
                                        "can rebound off of walls",
                                        [
                                            "can rehit bloons after rebounding"
                                        ]
                                    ]
                                ]
                            },
                            "4": {
                                "name": "400 - Juggernaut",
                                "content": [
                                    "spikeball attack replaced by juggernaut",
                                    [
                                        "2d, 4cd (6cd), 50p, 36.8r, 1.0s, normal type",
                                        ["advanced_mode", "7jr"],
                                        "can rebound off of walls",
                                        [
                                            "can rehit bloons after rebounding"
                                        ]
                                    ]
                                ]
                            },
                            "5": {
                                "name": "500 - Ultra-Juggernaut",
                                "content": [
                                    "juggernaut attack replaced by ultrajugg",
                                    [
                                        "5d, 16cd (21cd), 5fd (11fd), 600% ld (30ld), 200p, 36.8r, 1.0s, normal type",
                                        ["advanced_mode", "0.07ds"],
                                        "can rebound off of walls",
                                        [
                                            "can rehit bloons after rebounding"
                                        ],
                                        "at 50%p and 100%p: emits juggernauts",
                                        [
                                            "note: both sets of juggernauts can also be emitted by the projectile expiring"
                                        ]
                                    ],
                                    "juggernauts attack",
                                    [
                                        "1d, 2cd (3cd), 600% ld (6ld), 2fd (3fd), 6j 360&deg spread, 50%p (100p), normal type",
                                        ["advanced_mode", "70%js? (0.7js?)"],
                                        "can rebound off of walls",
                                        [
                                            "can rehit bloons after rebounding"
                                        ]
                                    ]
                                ]
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Quick Shots",
                                "content": [
                                    "dart attack buffed",
                                    [
                                        "85%s (0.8075s)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "020 - Very Quick Shots",
                                "content": [
                                    "dart attack buffed",
                                    [
                                        "78%s (0.6299s)"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "030 - Triple Shot",
                                "content": [
                                    "dart attack buffed",
                                    [
                                        "+2j (3j 30&deg spread)"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "040 - Super Monkey Fan Club",
                                "content": [
                                    "dart attack buffed",
                                    [
                                        "+2d (3d), 75%s (0.4774s)"
                                    ],
                                    "gains fan-club ability (50s cooldown, 12s duration, battle ready)",
                                    [
                                        "transforms 10 nearest untransformed dart monkeys within 50r (up to 2-4-2) into superfans",
                                        [
                                            "if limit isn't reached, also transforms newly placed dart monkeys until reached",
                                            "if sold, monkeys remain transformed",
                                            "if transformed darts are upgraded to a non-2-5-2 dart monkey, they do not acquire those upgrades until end of duration",
                                            "upgrades such as 1xx are inherited"
                                        ]
                                    ],
                                    "superfan subtower",
                                    [
                                        "dart attack",
                                        [
                                            "1d, 2p, 40r, 0.05s, sharp type"
                                        ]
                                    ]
                                ]
                            },
                            "5": {
                                "name": "050 - Plasma Monkey Fan Club",
                                "content": [
                                    "dart attack buffed",
                                    [
                                        "+3d (6d)"
                                    ],
                                    "fan-club ability replaced by plasma-club (50s cooldown, 15s duration, battle ready)",
                                    [
                                        "transforms 20 nearest dart monkeys within 50r (up to 2-5-2) into plasmafans",
                                        [
                                            "if limit isn't reached, also transforms newly placed dart monkeys until reached",
                                            "if sold, monkeys remain transformed",
                                            "if transformed darts are upgraded to a non-2-5-2 dart monkey, they do not acquire those upgrades until end of duration",
                                            "upgrades such as 1xx are inherited"
                                        ]
                                    ],
                                    "plasmafan subtower",
                                    [
                                        "plasma attack",
                                        [
                                            "2d, 5p, 40r, 0.025s, plasma type",
                                            "if transformed tower is an x4x Dart Monkey: 4d",
                                            "if transformed tower is an x5x Dart Monkey: 7d"
                                        ]
                                    ]
                                ]
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Long Range Darts",
                                "content": [
                                    "dart attack buffed",
                                    [
                                        "+8r (40r)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "002 - Enhanced Eyesight",
                                "content": [
                                    "dart attack buffed",
                                    [
                                        "+8r (48r)",
                                        ["simple_mode", "increased projectile speed"],
                                        ["advanced_mode", "+30jsp (330jsp)"]
                                    ],
                                    "gains camo detection"
                                ]
                            },
                            "3": {
                                "name": "003 - Crossbow",
                                "content": [
                                    "dart replaced by bolt",
                                    [
                                        "3d, +5p (7p), +8r (56r), 0.95s, sharp type",
                                        ["advanced_mode", "+30jsp (360jsp)"]
                                    ]
                                ]
                            },
                            "4": {
                                "name": "004 - Sharp Shooter",
                                "content": [
                                    "bolt attack buffed",
                                    [
                                        "+3d (6d), 0.75s",
                                        ["simple_mode", "increased projectile speed"],
                                        ["advanced_mode", "+40jsp (400jsp)"],
                                        "50d crit every 7 shots",
                                        "first attack will always crit"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "005 - Crossbow Master",
                                "content": [
                                    "bolt attack buffed",
                                    [
                                        "+3d (9d), +6p (13p), +20r (76r), 0.13s, normal type",
                                        ["simple_mode", "increased projectile speed"],
                                        ["advanced_mode", "+50jsp (450jsp)"],
                                        "100d crit every 5 shots"
                                    ],
                                    "crosspath",
                                    [
                                        "105: +6p (19p)",
                                        "205: +8p (27p)",
                                    ]
                                ]
                            }
                        }
                    }
                },
                "boomerangMonkey": {
                    "name": "Boomerang Monkey",
                    "data": {
                        "base": [
                            "$325 (150 MM)",
                            "size: 6 radius",
                            "placeable on: land",
                            "boomerang attack",
                            [
                                "1d, 4p, 43r, 1.2s, sharp type",
                                "follows a counterclockwise or clockwise arc instead of a straight line, depending on targeting"
                            ]
                        ],
                        "top": {
                            "1": {
                                "name": "100 - Improved Rangs",
                                "content": [
                                    "boomerang attack buffed",
                                    [
                                        "+3p (7p)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "200 - Glaives",
                                "content": [
                                    "boomerang attack buffed",
                                    [
                                        "+3p (10p)"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "300 - Glaive Ricochet",
                                "content": [
                                    "boomerang replaced by glaive",
                                    [
                                        "1d, 40p, 43r, 1.2s, sharp type",
                                        "jumps to a nearby (62.5 units) target after hitting",
                                        "travels in a straight line"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "400 - M.O.A.R Glaives",
                                "content": [
                                    "glaive buffed",
                                    [
                                        "+40p (80p), 50%s (0.6s), increased projectile speed",
                                        "can jump up to 187.5 units"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "500 - Glaive Lord",
                                "content": [
                                    "glaive buffed",
                                    [
                                        "+7d (8d)",
                                        "first hit applies shred status",
                                        [
                                            "100md/1.0s, 15.1s duration"
                                        ]
                                    ],
                                    "gains orbital-glaive attack",
                                    [
                                        "2d, 5cd (7cd), 5md (7md), +5fd, 1000p, 30r zone, 0.1s, sharp type, camo"
                                    ],
                                    "crosspath",
                                    [
                                        "502: orbital-glaive +1d (3d), +1ld (4ld), normal type"
                                    ]
                                ]
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Faster Throwing",
                                "content": [
                                    "boomerang attack buffed",
                                    [
                                        "75%s (0.9s)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "020 - Faster Rangs",
                                "content": [
                                    "boomerang attack buffed",
                                    [
                                        "75%s (0.675s), increased projectile speed"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "030 - Bionic Boomerang",
                                "content": [
                                    "boomerang attack buffed",
                                    [
                                        "+2md (3md), 0.238s"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "040 - Turbo Charge",
                                "content": [
                                    "gains turbocharge ability (45s cooldown, 8s duration, battle ready)",
                                    [
                                        "+1d (2d), 14.2857%s (0.034s)"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "050 - Perma Charge",
                                "content": [
                                    "boomerang attack buffed",
                                    [
                                        "+3d (4, 6md), 0.034s"
                                    ],
                                    "turbocharge replaced by permacharge (40s cooldown, 15s duration, battle ready)",
                                    [
                                        "+10d (14d, 16md)"
                                    ],
                                    "crosspath",
                                    [
                                        "052: +4d (8d, 10md), permacharge +12d (16d, 18md)"
                                    ]
                                ]
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Long Range Rangs",
                                "content": [
                                    "boomerang attack buffed",
                                    [
                                        "+6.45r (49.45r)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "002 - Red Hot Rangs",
                                "content": [
                                    "boomerang attack buffed",
                                    [
                                        "+1d (2d), +1ld (3ld), normal type"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "003 - Kylie Boomerang",
                                "content": [
                                    "boomerang replaced by kylie",
                                    [
                                        "2d, +20p (24p), 49.45r, 1.2s, normal type",
                                        "can rehit bloons after 0.3s",
                                        "travels in a straight line then returns"
                                    ],
                                    "crosspath",
                                    [
                                        "103: +10p (30p)",
                                        "203: +12p (42p)"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "004 - MOAB Press",
                                "content": [
                                    "gains press attack",
                                    [
                                        "1d, 4md (5md), 200p, 49.45r, 10.0s, normal type",
                                        "can rehit after 0.13s",
                                        "only targets blimps below BAD",
                                        "sends back blimps",
                                        [
                                            "MOABs 2.4 units, BFBs 1 unit, ZOMGs 0.35 units, DDTs 0.5 units"
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "104: press +100p (300p)",
                                        "204: press +120p (420p), +50% knockback distance"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "005 - MOAB Domination",
                                "content": [
                                    "kylie buffed",
                                    [
                                        "+10d (12d), 50%s (0.6s)"
                                    ],
                                    "press buffed",
                                    [
                                        "+45md (50md), +100p (300p), 100r, 50%s (5.0s)",
                                        "can see past obstacles",
                                        "can target BADs",
                                        "0.25s stun",
                                        "lifetime halved, so it expires instead of returning",
                                        "on expire or 100%p: explosion",
                                        [
                                            "100d, 40p, 50r blast, normal type",
                                            "applies burn status",
                                            [
                                                "50d/1s, 4s duration"
                                            ]
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "205: explosion +10p (50p), +25r (75r)"
                                    ]
                                ]
                            }
                        }
                    }
                },
                "bombShooter": {
                    "name": "Bomb Shooter",
                    "data": {
                        "base": [
                            "$525 (0 MM)",
                            "size: 6 radius",
                            "placeable on: land",
                            "bomb attack",
                            [
                                "40r, 1.5s",
                                "on contact: explosion",
                                [
                                    "1d, 14p, 12r blast, explosion type"
                                ]
                            ]
                        ],
                        "top": {
                            "1": {
                                "name": "100 - Bigger Bombs",
                                "content": [
                                    "explosion buffed",
                                    [
                                        "+6p (20), +50%r (18r)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "200 - Heavy Bombs",
                                "content": [
                                    "explosion buffed",
                                    [
                                        "+1d (2d), +10p (30p)"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "300 - Really Big Bombs",
                                "content": [
                                    "explosion buffed",
                                    [
                                        "+1d (3d), +20p (50p), +50%r (27r)"
                                    ],
                                    "crosspath",
                                    [
                                        "302: frags +2d (3d), +1p (2p), +4j (12j)"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "400 - Bloon Impact",
                                "content": [
                                    "bomb buffed",
                                    [
                                        "+3r (43r), normal damage"
                                    ],
                                    "explosion buffed",
                                    [
                                        "applies stun status (1s duration) to bloons"
                                    ],
                                    "crosspath",
                                    [
                                        "402: frags +1p (3p), +4j (16j)"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "500 - Bloon Crush",
                                "content": [
                                    "explosion buffed",
                                    [
                                        "+27d (30), normal type"
                                    ],
                                    "stun buffed",
                                    [
                                        "1.75s duration, can affect blimps"
                                    ],
                                    "crosspath",
                                    [
                                        "502: frags +27d (30d), +18p (20p)"
                                    ]
                                ]
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Faster Reload",
                                "content": [
                                    "bomb buffed",
                                    [
                                        "75%s (1.125s)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "020 - Missile Launcher",
                                "content": [
                                    "bomb buffed",
                                    [
                                        "73.33%s (0.825s), +4r (44r), increased projectile speed"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "030 - MOAB Mauler",
                                "content": [
                                    "bomb buffed",
                                    [
                                        "+5r (49r)"
                                    ],
                                    "explosion buffed",
                                    [
                                        "+18md (19md)"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "040 - MOAB Assassin",
                                "content": [
                                    "bomb buffed",
                                    [
                                        "+5r (54r)"
                                    ],
                                    "explosion buffed",
                                    [
                                        "+3cd (4cd), +12md (31md)"
                                    ],
                                    "gains assassinate ability (30s cooldown, battle ready)",
                                    [
                                        "750d, ∞r",
                                        "targets strongest blimp",
                                        "on contact: assassin-explosion",
                                        [
                                            "3d, 100p, 30r blast, normal type"
                                        ]
                                    ]
                                ]
                            },
                            "5": {
                                "name": "050 - MOAB Eliminator",
                                "content": [
                                    "bomb buffed: +170md (201md), normal type",
                                    "assassinate replaced by eliminate (10s cooldown, battle ready)",
                                    [
                                        "4500d",
                                        "targets strongest blimp",
                                        "on contact: elim-explosion",
                                        [
                                            "3d, 100p, 30r blast, normal type"
                                        ]
                                    ]
                                ]
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Extra Range",
                                "content": [
                                    "bomb buffed",
                                    [
                                        "+7r (47r)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "002 - Frag Bombs",
                                "content": [
                                    "bomb buffed",
                                    [
                                        "+2r (49r), normal type",
                                        "on contact: fragments",
                                        [
                                            "1d, 8j 360° spread, 1i, sharp type"
                                        ]
                                    ]
                                ]
                            },
                            "3": {
                                "name": "003 - Cluster Bombs",
                                "content": [
                                    "frags replaced by cluster",
                                    [
                                        "1d, 8j 360° spread, 8p, 15r blast, normal type",
                                        "note: any given bloon may only be hit by one cluster projectile, so the cluster attack can only do 1 damage on a single target (or 2 with 203)",
                                        "multiple cluster projectiles may hit a bloon when interacting with an obstacle"
                                    ],
                                    "crosspath",
                                    [
                                        "103: cluster +6p (14p)",
                                        "203: cluster +1d (2d), +6p (20p)"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "004 - Recursive Cluster",
                                "content": [
                                    "every other bomb replaced by superbomb",
                                    "on expire: explosion",
                                    [
                                        "1d, 18p, 12r blast, normal type"
                                    ],
                                    "on expire: supercluster",
                                    [
                                        "1d, 8j 360° spread, 8p, 15r blast, normal type",
                                        [
                                            "after 0.45s: subcluster",
                                            [
                                                "1d, 8j 360° spread, 48p, 34r blast, normal type",
                                                "note: any given bloon may only be hit by one subcluster projectile, so the subcluster attack can only do 1 damage on a single target (or 2 with 204)",
                                                "multiple cluster projectiles may hit a bloon when interacting with an obstacle"
                                            ]
                                        ],
                                        "note: any given bloon may only be hit by one supercluster projectile, so the supercluster attack can only do 1 damage on a single target (or 2 with 204)",
                                        "multiple cluster projectiles may hit a bloon when interacting with an obstacle"
                                    ],
                                    "crosspath",
                                    [
                                        "104: superbomb +0p, subcluster +36p (84p), all other explosions +6p",
                                        "104: subcluster +3.5r (37.5), all other explosions +50%r",
                                        "204: superbomb +0p, subcluster +36p (120p), all other explosions +10p",
                                        "204: all explosions +1d (as expected)"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "005 - Bomb Blitz",
                                "content": [
                                    "all attacks",
                                    [
                                        "+4d (5d)",
                                        "all bombs replaced by superbombs"
                                    ],
                                    "gains bomb-blitz ability (40s cooldown, passive: triggered just before leak)",
                                    [
                                        "3000d, ∞p, ∞r, normal type, camo",
                                        "additionally destroys anything remaining below BFB"
                                    ]
                                ]
                            }
                        }
                    }
                },
                "tackShooter": {
                    "name": "Tack Shooter",
                    "data": {
                        "base": [
                            "$280 (0 MM)",
                            "size: 6 radius",
                            "placeable on: land",
                            "tacks attack",
                            [
                                "1d, 8j 360° spread, 1p, 23r, 1.4s, sharp type"
                            ]
                        ],
                        "top": {
                            "1": {
                                "name": "100 - Faster Shooting",
                                "content": [
                                    "tacks attack buffed",
                                    [
                                        "75%s (1.05s)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "200 - Even Faster Shooting",
                                "content": [
                                    "tacks attack buffed",
                                    [
                                        "60%s (0.63s)"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "300 - Hot Shots",
                                "content": [
                                    "tacks attack buffed",
                                    [
                                        "+1d (2d), normal type"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "400 - Ring of Fire",
                                "content": [
                                    "tacks replaced by ring-of-fire",
                                    [
                                        "3d, 45p, 23r zone, 0.47s, fire type"
                                    ],
                                    "crosspath",
                                    [
                                        "410: +10p (55p)",
                                        "420: +5p (60p)",
                                        "401: +1d (4d)",
                                        "402: +1d (5d)"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "500 - Inferno Ring",
                                "content": [
                                    "ring-of-fire buffed",
                                    [
                                        "+8d (11d), +11md (22md), +11.5r (34.5r), 0.1s"
                                    ],
                                    "gains meteor attack",
                                    [
                                        "900d, 1p, ∞r, 4.0s, fire type, camo, follows targeting",
                                        "can see past obstacles",
                                        "weak homing (100 turn rate)",
                                        "applies burn status",
                                        [
                                            "150d/1.0s, fire type, 4.1s duration"
                                        ],
                                        "on contact: explosion",
                                        [
                                            "150d single-layer, 10p, 18r blast, explosion type, no camo"
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "510: meteor +1p (2p)",
                                        "520: meteor +1p (3p)",
                                        "501: meteor +400d (1,300d)",
                                        "502: meteor +400d (1,800d)"
                                    ]
                                ]
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Long Range Tacks",
                                "content": [
                                    "tacks attack buffed",
                                    [
                                        "+4r (27r), increased projectile speed"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "020 - Super Range Tacks",
                                "content": [
                                    "tacks attack buffed",
                                    [
                                        "+1p (2p), +4r (31r)"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "030 - Blade Shooter",
                                "content": [
                                    "tacks replaced by blades",
                                    [
                                        "1d, +2p (4p), 31r, 88%s (1.232s), sharp type, increased projectile size"
                                    ],
                                    "crosspath",
                                    [
                                        "032: +1p (5p)"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "040 - Blade Maelstrom",
                                "content": [
                                    "gains maelstrom ability (20s cooldown, 3s duration, battle ready)",
                                    [
                                        "1d, 2j 360° spread, 200p, 0.0333s, sharp type",
                                        "attack rotates clockwise at a constant speed"
                                    ],
                                    "crosspath",
                                    [
                                        "041: maelstrom rotates counterclockwise at a constant speed"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "050 - Super Maelstrom",
                                "content": [
                                    "blades buffed",
                                    [
                                        "+1d (2d), normal type"
                                    ],
                                    "maelstrom replaced by super-maelstrom (20s cooldown, 9s duration, battle ready)",
                                    [
                                        "2d, 4j, 500p, 0.0333s, normal type"
                                    ]
                                ]
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - More Tacks",
                                "content": [
                                    "tacks attack buffed",
                                    [
                                        "+2j (10j)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "002 - Even More Tacks",
                                "content": [
                                    "tacks attack buffed",
                                    [
                                        "+2j (12j)"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "003 - Tack Sprayer",
                                "content": [
                                    "tacks attack buffed",
                                    [
                                        "+4j (16j), 75%s (1.05s)"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "004 - Overdrive",
                                "content": [
                                    "tacks attack buffed",
                                    [
                                        "+1p (2p), 33.33%s (0.35s)"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "005 - The Tack Zone",
                                "content": [
                                    "tacks attack buffed",
                                    [
                                        "+1d (2d), +16j (32j), +2p (4p), +7r (30r), 75%s (0.2625)"
                                    ],
                                    "crosspath",
                                    [
                                        "025: +6p (10p), +16r (50r)"
                                    ]
                                ]
                            }
                        }
                    }
                },
                "iceMonkey": {
                    "name": "Ice Monkey",
                    "data": {
                        "base": [
                            "$450 (150 MM)",
                            "size: 6 radius",
                            "placeable on: land",
                            "freeze attack",
                            [
                                "1d, 40p, 20r zone, 2.4s, cold type",
                                "cannot target MOAB-class bloons or frozen bloons",
                                "applies frozen status",
                                [
                                    "1.5s duration"
                                ]
                            ]
                        ],
                        "top": {
                            "1": {
                                "name": "100 - Permafrost",
                                "content": [
                                    "applies permafrost status",
                                    [
                                        "50% slow"
                                    ],
                                    "note: if blimps are targetable then they obtain permafrost status, but are affected half as much (25% slow)"
                                ]
                            },
                            "2": {
                                "name": "200 - Cold Snap",
                                "content": [
                                    "can pop lead",
                                    "gains camo detection"
                                ]
                            },
                            "3": {
                                "name": "300 - Ice Shards",
                                "content": [
                                    "frozen bloons emit shards when popped",
                                    [
                                        "1d, 3j, 3i, shatter type",
                                        "damage cannot be buffed"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "400 - Embrittlement",
                                "content": [
                                    "freeze buffed",
                                    [
                                        "+5r (25r), normal type",
                                        "on contact: decamo, degrow",
                                        "applies brittle status",
                                        [
                                            "take +1d, no damage immunity, 2s duration"
                                        ],
                                        "blimps can be targeted: they will take damage and receive permafrost and brittle status, but not frozen"
                                    ],
                                    "shards buffed",
                                    [
                                        "on contact: decamo, degrow"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "500 - Super Brittle",
                                "content": [
                                    "freeze buffed",
                                    [
                                        "90%s (2.16s)"
                                    ],
                                    "brittle status buffed",
                                    [
                                        "take +4d"
                                    ]
                                ]
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Enhanced Freeze",
                                "content": [
                                    "freeze buffed",
                                    [
                                        "75%s (1.8s)"
                                    ],
                                    "frozen status buffed",
                                    [
                                        "2.2s duration"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "020 - Deep Freeze",
                                "content": [
                                    "frozen status buffed",
                                    [
                                        "soaks through 3 layers"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "030 - Arctic Wind",
                                "content": [
                                    "freeze attack buffed",
                                    [
                                        "+60p (100p), +10r (30r)"
                                    ],
                                    "gains slow attack",
                                    [
                                        "35r",
                                        "60% slow, cannot affect blimp",
                                        "land towers are placeable on any water in range"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "040 - Snowstorm",
                                "content": [
                                    "frozen status buffed",
                                    [
                                        "3s duration"
                                    ],
                                    "gains snowstorm ability (8s duration, 30s cooldown, battle ready)",
                                    [
                                        "1d, ∞p, ∞r, shatter type, camo",
                                        "applies frozen status (ability duration, or 3s for camo/white/blimp)",
                                        "slows down blimps to 2.25 speed",
                                        "all Ice Monkeys and Fusty the Snowman gain 50%s buff"
                                    ],
                                    "crosspath",
                                    [
                                        "240: snowstorm damage type changed to normal"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "050 - Absolute Zero",
                                "content": [
                                    "freeze attack buffed",
                                    [
                                        "+200p (300), +10r (40r)"
                                    ],
                                    "slow buffed",
                                    [
                                        "80% slow"
                                    ],
                                    "frozen status buffed",
                                    [
                                        "soaks through 3 layers"
                                    ],
                                    "blimps can be targeted: they will take damage, but cannot be frozen",
                                    "snowstorm replaced by absolute-zero (12s duration, 20s cooldown, battle ready)",
                                    [
                                        "1d, ∞p, ∞r, normal type, camo",
                                        "applies frozen status (ability duration)",
                                        "all Ice Monkeys and Fusty the Snowman gain 50%s buff",
                                        "soaks through blimp layers"
                                    ],
                                    "crosspath",
                                    [
                                        "150: permafrost 50% slow / 25% for blimps"
                                    ]
                                ]
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Larger Radius",
                                "content": [
                                    "freeze attack buffed",
                                    [
                                        "+7r (27r)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "002 - Re-Freeze",
                                "content": [
                                    "freeze attack buffed",
                                    [
                                        "glacier type"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "003 - Cryo Cannon",
                                "content": [
                                    "replaces freeze with ice-bomb",
                                    [
                                        "46r, 1.15s",
                                        "cannot target MOAB-class bloons",
                                        "on contact: freeze",
                                        [
                                            "2d, 30p, 20 blast, glacier type",
                                            "applies frozen status (1.5s duration)"
                                        ]
                                    ]
                                ]
                            },
                            "4": {
                                "name": "004 - Icicles",
                                "content": [
                                    "ice-bomb attack buffed",
                                    [
                                        "can target moab-class bloons"
                                    ],
                                    "frozen bloons have icicles",
                                    [
                                        "2d, +6md (8md), 3p, sharp type",
                                        "does not affect MOAB-class bloons"
                                    ],
                                    "crosspath",
                                    [
                                        "204: icicles can pop lead"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "005 - Icicle Impale",
                                "content": [
                                    "ice-bomb attack buffed",
                                    [
                                        "+68md (70md), 75%s (0.8625s), shatter type"
                                    ],
                                    "icicles buffed",
                                    [
                                        "affects MOAB-class bloons",
                                        "frozen ZOMGs are 50% slower, other frozen blimps move at ZOMGs' original speed (~5 units per second)"
                                    ]
                                ]
                            }
                        }
                    }
                },
                "glueGunner": {
                    "name": "Glue Gunner",
                    "data": {
                        "base": [
                            "$100 (150 MM)",
                            "size: 6 radius",
                            "placeable on: land",
                            "glue attack",
                            [
                                "1p, 46r, 0.9s",
                                "applies glued status",
                                [
                                    "11s duration, 50% slow to bloons, soaks 3 layers",
                                    "note: glued never soaks through blimps"
                                ]
                            ]
                        ],
                        "top": {
                            "1": {
                                "name": "100 - Glue Soak",
                                "content": [
                                    "glued status buffed",
                                    [
                                        "soaks all layers"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "200 - Corrosive Glue",
                                "content": [
                                    "can target blimps, but the glue lasts half as long (5.5s)",
                                    "glued status buffed",
                                    [
                                        "1d/2.0s, normal type"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "300 - Bloon Dissolver",
                                "content": [
                                    "glued status buffed",
                                    [
                                        "1d/0.575s, 2cd/0.575s, 2md/0.575s"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "400 - Bloon Liquefier",
                                "content": [
                                    "glue attack buffed",
                                    [
                                        "+1p (2p), 72.22%s (0.65s)"
                                    ],
                                    "glued status buffed",
                                    [
                                        "1d/0.1s, 2cd/0.1s, 2md/0.1s"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "500 - The Bloon Solver",
                                "content": [
                                    "glue replaced by glue-bomb",
                                    [
                                        "2j, 34.62%s (0.225s), applies glued status",
                                        "on contact: splat",
                                        [
                                            "5p, 12r blast, applies glued status"
                                        ]
                                    ],
                                    "glued status buffed",
                                    [
                                        "6cd/0.1s, 10md/0.1s",
                                        "does single-layer damage to ceramics"
                                    ],
                                    "crosspath",
                                    [
                                        "510: splat +1p (6p)",
                                        "520: splat +4p (15?p), +13r (25)"
                                    ]
                                ]
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Bigger Globs",
                                "content": [
                                    "glue attack buffed",
                                    [
                                        "+1p (2p)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "020 - Glue Splatter",
                                "content": [
                                    "glue replaced by glue-bomb",
                                    [
                                        "46r, 0.9s, applies glued status",
                                        "on contact: splat",
                                        [
                                            "9p, 13r blast, applies glued status"
                                        ]
                                    ]
                                ]
                            },
                            "3": {
                                "name": "030 - Glue Hose",
                                "content": [
                                    "glue-bomb attack buffed",
                                    [
                                        "34%s (0.306s)"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "040 - Glue Strike",
                                "content": [
                                    "gains glue-strike ability (30s cooldown, battle ready)",
                                    [
                                        "∞p, ∞r, camo",
                                        "cannot slow down blimps",
                                        "applies weakening-glue status",
                                        [
                                            "11s duration, 50% slow, take +2d, soaks 6 layers, removes lead property while active"
                                        ],
                                        "crosspath",
                                        [
                                            "240: weakening-glue can be applied to blimps, but will not cause them to slow down",
                                            [
                                                "note: the +2d debuff does not work with this tower's Corrisive Glue"
                                            ]
                                        ]
                                    ]
                                ]
                            },
                            "5": {
                                "name": "050 - Glue Storm",
                                "content": [
                                    "glue-strike replaced by glue-storm (30s cooldown, 20s duration, battle ready)",
                                    [
                                        "∞p, ∞r, 2.0s, camo",
                                        "cannot slow down blimps",
                                        "applies weakening-glue"
                                    ],
                                    "weakening-glue buffed",
                                    [
                                        "22s duration, 75% slow, soaks 9 layers"
                                    ],
                                    "crosspath",
                                    [
                                        "051: weakening-glue 48s duration",
                                        "052: weakening-glue 90% slow"
                                    ]
                                ]
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Stickier Glue",
                                "content": [
                                    "glued status buffed",
                                    [
                                        "+13s duration (24s)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "002 - Stronger Glue",
                                "content": [
                                    "glued status buffed",
                                    [
                                        "75% slow"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "003 - MOAB Glue",
                                "content": [
                                    "can target blimps, but the glue lasts half as long (12s)",
                                    "glued status buffed",
                                    [
                                        "37.5% slow to blimps"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "004 - Relentless Glue",
                                "content": [
                                    "gains camo detection",
                                    "on pop: stun-splat",
                                    [
                                        "6p, 12r, applies stun (1s, MOABs and DDTs for 0.35s, BFBs for 0.2s, ZOMGs for 0.06s)"
                                    ],
                                    "crosspath",
                                    [
                                        "014: stun-splat +1p (7p)",
                                        "024: stun-splat +3p (10p)"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "005 - Super Glue",
                                "content": [
                                    "glue attack buffed",
                                    [
                                        "+5p (6p)"
                                    ],
                                    "glued status buffed:",
                                    [
                                        "1d/2.3s",
                                        "on application: 50md (unbuffable)",
                                        "bloons are slowed 100% for the full 24s",
                                        "MOABs and DDTs are slowed 100% for 5s",
                                        "BFBs are slowed 95% for 2.0s",
                                        "ZOMGs are slowed 90% for 1.0s"
                                    ],
                                    "crosspath",
                                    [
                                        "205: glued 1d/2.0s, level 5",
                                        "025: splat +5p (15p)"
                                    ]
                                ]
                            }
                        }
                    }
                }
            }
        },
        "military": {
            "type": "nestedArrays",
            "entries": {
                "sniperMonkey": {
                    "name": "Sniper Monkey",
                    "data": {
                        "base": [
                            "$300 (500 MM)",
                            "size: 6 radius",
                            "placeable on: land",
                            "20r",
                            "bullet attack",
                            [
                                "2d, 1i, ∞r, 1.59s, sharp type"
                            ]
                        ],
                        "top": {
                            "1": {
                                "name": "100 - Full Metal Jacket",
                                "content": [
                                    "bullet buffed",
                                    [
                                        "+2d (4d), normal type"
                                    ],
                                    "crosspath",
                                    [
                                        "120: normal type"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "200 - Large Calibre",
                                "content": [
                                    "bullet buffed",
                                    [
                                        "+3d (7d)"
                                    ],
                                    "crosspath",
                                    [
                                        "220: shrapnel +1d (2d)"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "300 - Deadly Precision",
                                "content": [
                                    "bullet buffed",
                                    [
                                        "+13d (20d), +15cd (35cd)"
                                    ],
                                    "crosspath",
                                    [
                                        "320: shrapnel +3d (5d)"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "400 - Maim MOAB",
                                "content": [
                                    "bullet buffed",
                                    [
                                        "+10d (30d, 45cd)",
                                        "applies stun",
                                        [
                                            "2s duration for MOABs, BFBs 1s, DDTs 0.5s, ZOMGs 0.45s"
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "420: shrapnel +3d (8d), applies stun"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "500 - Cripple MOAB",
                                "content": [
                                    "bullet buffed",
                                    [
                                        "+250d (280d, 295cd)"
                                    ],
                                    "stun duration buffed",
                                    [
                                        "MOAB 7s, BFB 6s, ZOMG 3s, DDT 4s",
                                        "applies crippled status",
                                        [
                                            "take +5d",
                                            "same durations as stun, or 0.5s for BADs",
                                            "note: applied before the target takes damage"
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "520: shrapnel +4d (12d), applies crippled status"
                                    ]
                                ]
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Night Vision Goggles",
                                "content": [
                                    "gains camo detection",
                                    "bullet buffed",
                                    [
                                        "+2cad"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "020 - Shrapnel Shot",
                                "content": [
                                    "bullet buffed",
                                    [
                                        "on first hit: shrapnel",
                                        [
                                            "1d, +2cad (3cad), 5j 45° spread, 2p, sharp type",
                                            "spread centered around direction fired"
                                        ]
                                    ]
                                ]
                            },
                            "3": {
                                "name": "030 - Bouncing Bullet",
                                "content": [
                                    "bullet buffed",
                                    [
                                        "6i",
                                        "jumps to targets within 50 units"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "040 - Supply Drop",
                                "content": [
                                    "bullet buffed",
                                    [
                                        "normal type"
                                    ],
                                    "gains supply-drop ability (50s cooldown, 15s initial)",
                                    [
                                        "drops a crate worth $2000",
                                        "can only be used 3 times every round"
                                    ],
                                    "shrapnel buffed",
                                    [
                                        "+1p (3p)"
                                    ],
                                    "crosspath",
                                    [
                                        "041: -5s cooldown (45s cooldown)",
                                        "041: -5s cooldown (40s cooldown)"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "050 - Elite Sniper",
                                "content": [
                                    "bullet buffed",
                                    [
                                        "40%s (0.636s)",
                                    ],
                                    "shrapnel buffed",
                                    [
                                        "on contact",
                                    ],
                                    "gains elite buff",
                                    [
                                        "affects all snipers, excluding self",
                                        "80%s",
                                        "enables elite targeting for all snipers",
                                        "prioritizes First if bloons are past 75% of the track, then Ceramics if there are any, otherwise Strong"
                                    ],
                                    "supply-drop replaced by elite-supplies (50s cooldown, inherit cooldown)",
                                    [
                                        "drops a crate worth $5000"
                                    ]
                                ]
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Fast Firing",
                                "content": [
                                    "bullet buffed",
                                    [
                                        "70%s (1.113s)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "002 - Even Faster Firing",
                                "content": [
                                    "bullet buffed",
                                    [
                                        "70%s (0.7791s)"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "003 - Semi-Automatic",
                                "content": [
                                    "bullet buffed",
                                    [
                                        "33.33%s (0.2597s)"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "004 - Full Auto Rifle",
                                "content": [
                                    "bullet buffed",
                                    [
                                        "50%s (0.12985s), +2md (4md), normal type",
                                    ],
                                    "crosspath",
                                    [
                                        "104: +1md (7md)",
                                        "204: +1md (11md)"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "005 - Elite Defender",
                                "content": [
                                    "bullet buffed",
                                    [
                                        "50%s (0.064925s)",
                                        "additionally shoots x% faster, where x% is how far along the track the furthest forward bloon is"
                                    ],
                                    "gains retaliation ability (10s cooldown, 7s duration, passive: triggered bloons coming close to the exit)",
                                    [
                                        "25%s"
                                    ]
                                ]
                            }
                        }
                    }
                },
                "monkeySub": {
                    "name": "Monkey Sub",
                    "data": {
                        "base": [
                            "$325 (500 MM)",
                            "size: 7 radius",
                            "placeable on: water",
                            "dart attack",
                            [
                                "1d, 2p, 42r, 0.75s, sharp type",
                                "moderate homing (360 turn rate)"
                            ]
                        ],
                        "top": {
                            "1": {
                                "name": "100 - Longer Range",
                                "content": [
                                    "dart attack",
                                    [
                                        "+10r (52r)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "200 - Advanced Intel",
                                "content": [
                                    "uses shared range",
                                    [
                                        "can target anything in the visible range circle of any tower - usually the range of the primary attack",
                                        "a projectile can see camo if aiming at the range of a tower that can see camo with its primary attack, so, any tower that \"gains camo detection\""
                                    ]
                                ]
                            },
                            "3": {
                                "name": "300 - Submerge and Support",
                                "content": [
                                    "gains submerge targeting option",
                                    [
                                        "while submerged, dart is replaced by sonar",
                                        [
                                            "75p, 52r zone, 1.5s passive, decamo"
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "301: sonar 85%s (1.275s)",
                                        "302: sonar 75%s (0.95625s)",
                                        "310: sonar +20%p (90p)",
                                        "320: sonar +25%p (102.5?p)"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "400 - Bloontonium Reactor",
                                "content": [
                                    "sonar buffed",
                                    [
                                        "150p, 0.4s"
                                    ],
                                    "while submerged, gains radioactive attack",
                                    [
                                        "1d, 30p, 52r zone, 0.4s passive, shatter type"
                                    ],
                                    "while submerged, abilities of water towers in range -15% cooldown time",
                                    "crosspath",
                                    [
                                        "410: sonar +20%p (180p), radioactive +5p (35p)",
                                        "420: sonar +25%p (225p), radioactive +1ld, +15p (50), normal type",
                                        "401: radioactive 75%s (0.3s)",
                                        "402: radioactive 66.67%s (0.2s)"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "500 - Energizer",
                                "content": [
                                    "sonar buffed",
                                    [
                                        "1000p"
                                    ],
                                    "radioactive buffed",
                                    [
                                        "5d, 10cd (15cd), 1000p"
                                    ],
                                    "while submerged, abilities of water towers in range have -50% cooldown time, all other abilities have -20% cooldown time",
                                    "hero in range gains +75% XP",
                                    "hero upgrade cost reduced by 42.8571%",
                                    "crosspath",
                                    [
                                        "310: sonar +200p (1200p)",
                                        "320: sonar +300p (1500p)"
                                    ]
                                ]
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Barbed Darts",
                                "content": [
                                    "dart attack",
                                    [
                                        "+3p (5p)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "020 - Heat-tipped Darts",
                                "content": [
                                    "dart attack",
                                    [
                                        "normal type"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "030 - Ballistic Missile",
                                "content": [
                                    "dart attack",
                                    [
                                        "+8r (50r)"
                                    ],
                                    "gains missile attack",
                                    [
                                        "50r, 1.105s",
                                        "on expire (0.6s): explosion",
                                        [
                                            "2d, 5cd (7cd), 5md (7md), 50p, 18r blast, explosion type"
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "230: missile shared range",
                                        "031: missile 90%s (0.9945s)",
                                        "032: missile 90%s (0.89505s)"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "040 - First Strike Capability",
                                "content": [
                                    "gains first-strike ability (60s cooldown, battle ready)",
                                    [
                                        "7,000d, ∞r, normal type, camo, strong priority",
                                        "penetrates blimp layers",
                                        "creates explosion",
                                        [
                                            "200d, 80p, 65r blast, normal type",
                                            "penetrates blimp layers"
                                        ]
                                    ]
                                ]
                            },
                            "5": {
                                "name": "050 - Pre-emptive Strike",
                                "content": [
                                    "missile buffed",
                                    [
                                        "0.5s"
                                    ],
                                    "missile explosion buffed",
                                    [
                                        "+8d (10d), +9cd (25cd), +9md (25md)"
                                    ],
                                    "first-strike buffed",
                                    [
                                        "30s cooldown"
                                    ],
                                    "gains pre-emptive-strike ability (triggered by a blimp entering the map)",
                                    [
                                        "800d, normal type, camo",
                                        "targets blimp that triggered the ability"
                                    ]
                                ]
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Twin Guns",
                                "content": [
                                    "dart attack",
                                    [
                                        "50%s (0.375s)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "002 - Airburst Darts",
                                "content": [
                                    "dart replaced by airburst",
                                    [
                                        "1d, 1i, 42r, 0.375s, sharp type",
                                        "on contact or expire: subdart",
                                        [
                                            "1d, 3j 75° spread, 2p, sharp type"
                                        ]
                                    ]
                                ]
                            },
                            "3": {
                                "name": "003 - Triple Guns",
                                "content": [
                                    "67%s (0.25125s)"
                                ]
                            },
                            "4": {
                                "name": "004 - Armor Piercing Darts",
                                "content": [
                                    "airburst buffed",
                                    [
                                        "+2d (3d), +2md (5md)"
                                    ],
                                    "subdart buffed",
                                    [
                                        "+2d (3d), +3p (5p)"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "005 - Sub Commander",
                                "content": [
                                    "airburst buffed",
                                    [
                                        "33.33%s (0.08375s)"
                                    ],
                                    "gains command buff",
                                    [
                                        "affects all sub on screen, including self",
                                        "+20r",
                                        "double damage and +6p to all attacks except for first-strike ability"
                                    ]
                                ]
                            }
                        }
                    }
                },
                "monkeyBuccaneer": {
                    "name": "Monkey Buccaneer",
                    "data": {
                        "base": [
                            "$500 (500 MM)",
                            "size: 8 radius",
                            "placeable on: water",
                            "dart attack",
                            [
                                "1d, 4p, 60r, 1.0s, sharp type"
                            ],
                            "this attack is duplicated in both directions"
                        ],
                        "top": {
                            "1": {
                                "name": "100 - Faster Shooting",
                                "content": [
                                    "dart buffed",
                                    [
                                        "75%s (0.75s)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "200 - Double Shot",
                                "content": [
                                    "dart buffed",
                                    [
                                        "+1j (2j)"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "300 - Destroyer",
                                "content": [
                                    "dart buffed",
                                    [
                                        "20%s (0.15s)"
                                    ],
                                    "crosspath",
                                    [
                                        "310: grape 33.33%s (0.325s)"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "400 - Aircraft Carrier",
                                "content": [
                                    "spawns three permanent plane subtowers",
                                    [
                                        "forward-dart attack",
                                        [
                                            "1d, +3cd (4cd), 2j, 20p, 0.15s, sharp type",
                                            "MOAB-class bloons use 2p",
                                            "can only aim directly in front"
                                        ],
                                        "radial-dart attack",
                                        [
                                            "1d, 8j, 9p, 1.0s passive, sharp type"
                                        ],
                                        "moab-missile attack",
                                        [
                                            "∞r, 3.0s",
                                            "can only affect blimps",
                                            "moderate homing",
                                            "on contact: explosion",
                                            [
                                                "20d, 3p, 30r blast, normal type"
                                            ]
                                        ],
                                        "note: inherits buffs to the buccaneer, except alchemist buffs"
                                    ],
                                    "crosspath",
                                    [
                                        "401: forward-dart +1p (21p), radial-dart +1p (10p)"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "500 - Carrier Flagship",
                                "content": [
                                    "dart buffed",
                                    [
                                        "normal type"
                                    ],
                                    "plane forward-dart buffed",
                                    [
                                        "+1d (2d), 1j, +3cd (8cd), 72p, ∞r, normal type",
                                        "MOAB-class bloons use 4p",
                                        "aimed according to the main tower's targeting instead of straight forward"
                                    ],
                                    "plane radial-dart buffed",
                                    [
                                        "+2d (3d), +3cd (5cd), +5p (14p), normal type"
                                    ],
                                    "plane moab-missile buffed",
                                    [
                                        "50%s (1.5s)"
                                    ],
                                    "plane moab-missile explosion buffed",
                                    [
                                        "+60d (80d), +1p (4p), normal type"
                                    ],
                                    "gains flagship buff",
                                    [
                                        "affects all water towers and aces, including self (which affects the planes)",
                                        "85%s"
                                    ],
                                    "gains 2 small platforms that can be used to place towers",
                                    [
                                        "towers on a platform should see over most obstacles",
                                        "fits up to 7r towers"
                                    ]
                                ]
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Grape Shot",
                                "content": [
                                    "gains grape attack",
                                    [
                                        "1d, 5j 80° spread, 1p, 1.3s, sharp type",
                                        "this attack is duplicated in both directions"
                                    ],
                                    "crosspath",
                                    [
                                        "110: grape 75%s (0.975s)",
                                        "210: grape +5j (10j)",
                                        "011: grape +1p (2p)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "020 - Hot Shot",
                                "content": [
                                    "grape buffed",
                                    [
                                        "fire type",
                                        "applies burn status",
                                        [
                                            "1d/1.5s, fire type, 3.1s duration"
                                        ]
                                    ]
                                ]
                            },
                            "3": {
                                "name": "030 - Cannon Ship",
                                "content": [
                                    "gains cannonball attack",
                                    [
                                        "1.2s",
                                        [
                                            "on contact: explosion",
                                            "1d, 25p, 40r blast, explosion type"
                                        ],
                                        "on contact: frags",
                                        [
                                            "1d, 8j, 1i, sharp type",
                                            "damage cannot be buffed"
                                        ],
                                        "this attack is duplicated in both directions"
                                    ],
                                    "crosspath",
                                    [
                                        "130: cannonball 75%s (0.9s)",
                                        "031: explosion +7p (35p)"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "040 - Monkey Pirates",
                                "content": [
                                    "cannonball buffed",
                                    [
                                        "+2j (3j ? spread), 1.3s"
                                    ],
                                    "explosion buffed: +1d (2d)",
                                    "gains takedown ability (30s cooldown, battle ready)",
                                    [
                                        "targets the strongest \"small\" blimp (not ZOMG or BAD), immediately removing it"
                                    ],
                                    "crosspath",
                                    [
                                        "140: takedown -10s cooldown (20s cooldown)",
                                    ]
                                ]
                            },
                            "5": {
                                "name": "050 - Pirate Lord",
                                "content": [
                                    "dart buffed",
                                    [
                                        "50%s (0.5s)"
                                    ],
                                    "grape buffed",
                                    [
                                        "5d, +5cd (10cd), 50%s (0.65s)"
                                    ],
                                    "takedown replaced by zomg-takedown (30s cooldown, battle ready)",
                                    [
                                        "hooks up to 3 blimps other than BAD",
                                        "ZOMGs use 2 hooks"
                                    ]
                                ]
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Long Range",
                                "content": [
                                    "dart buffed",
                                    [
                                        "+11r (71r), +1p (5p), projectile speed increased"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "002 - Crow's Nest",
                                "content": [
                                    "gains camo detection",
                                    "all attacks buffed",
                                    [
                                        "+2cad"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "003 - Merchantman",
                                "content": [
                                    "$300 end of round income"
                                ]
                            },
                            "4": {
                                "name": "004 - Favored Trades",
                                "content": [
                                    "+$900 end of round income ($1,200)",
                                    "dart buffed",
                                    [
                                        "50%s (0.5s)"
                                    ],
                                    "gains cashback buff",
                                    [
                                        "affects anything in range, including self",
                                        "+10% sellback price"
                                    ],
                                    "crosspath",
                                    [
                                        "014: grape 0.75s"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "005 - Trade Empire",
                                "content": [
                                    "+$1,800 end of round income (3,000$)",
                                    "all attacks buffed: +1d (2d), +1cd (3cd), +1md (3md)",
                                    "gains trade buff",
                                    [
                                        "affects up to 10 xx3 or xx4 buccaneers",
                                        "+1d, +1cd, +1md",
                                        "+10% * n income, where n is the number of buffed towers"
                                    ]
                                ]
                            }
                        }
                    }
                },
                "monkeyAce": {
                    "name": "Monkey Ace",
                    "data": {
                        "base": [
                            "$700 (500 MM)",
                            "size: 28 units * 18 units",
                            "placeable on: land",
                            "22r",
                            "radial-dart attack",
                            [
                                "1d, 8j 360° spread, 5p, 1.5s passive, sharp type"
                            ],
                            "flies on a circular path with radius 80, or a figure 8 or figure infinite with radii 40"
                        ],
                        "top": {
                            "1": {
                                "name": "100 - Rapid Fire",
                                "content": [
                                    "radial-dart buffed",
                                    [
                                        "75%s (1.125s)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "200 - Lots More Darts",
                                "content": [
                                    "radial-dart buffed",
                                    [
                                        "+4j (12j)"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "300 - Fighter Plane",
                                "content": [
                                    "flies 20% faster",
                                    "gains moab-missile attack",
                                    [
                                        "2j, 3.0s",
                                        "can only affect blimps",
                                        "moderate homing (accelerates from a starting turn rate of 25 up to 400, accelerating projectile speed as well)",
                                        "on contact: explosion",
                                        [
                                            "20d, 4p, 30r blast, normal type"
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "310: moab-missile explosion +2p (6p), +4.5r (34.5r)"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "400 - Operation: Dart Storm",
                                "content": [
                                    "radial-dart buffed",
                                    [
                                        "+4j (16j), +4p (9p), 48%s (0.54s)"
                                    ],
                                    "moab-missile buffed:",
                                    [
                                        "50%s (1.5s)"
                                    ],
                                    "explosion buffed",
                                    [
                                        "+6d (26d)"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "500 - Sky Shredder",
                                "content": [
                                    "radial-dart buffed",
                                    [
                                        "+2d (3d), +2cd (5cd), +16j (32j), +5p (14p), 50%s (0.27s), normal type",
                                        "much faster projectile speed"
                                    ],
                                    "explosion buffed",
                                    [
                                        "200d, +1p (5p)"
                                    ]
                                ]
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Exploding Pineapple",
                                "content": [
                                    "gains pineapple attack",
                                    [
                                        "2.0s",
                                        "on expire: explosion",
                                        [
                                            "1d, 20p, 25r blast, 2.0s, explosion type"
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "110: pineapple 60%s (1.2s)",
                                        "011: explosion +12p (32p)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "020 - Spy Plane",
                                "content": [
                                    "gains camo detection",
                                    "all attacks buffed: +1cad (2cad)"
                                ]
                            },
                            "3": {
                                "name": "030 - Bomber Ace",
                                "content": [
                                    "pineapple replaced by bombing-run",
                                    [
                                        "4j, 1.7s",
                                        "can only be used above a path",
                                        "on expire: explosion",
                                        [
                                            "3d, +1cad (4cad), 10p, 35r blast, 1.7s, explosion type"
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "130: bombing-run +7p (17p), 60%s (1.02s)",
                                        "031: bombing-run +12p (24p)"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "040 - Ground Zero",
                                "content": [
                                    "bombing-run buffed",
                                    [
                                        "+7d (10d, 11cad), +20p (30p)"
                                    ],
                                    "gains ground-zero ability (35s cooldown, battle ready)",
                                    [
                                        "700d, 1000p, normal type"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "050 - Tsar Bomba",
                                "content": [
                                    "bombing-run buffed",
                                    [
                                        "normal type"
                                    ],
                                    "ground-zero replaced by tsar-bomba (35s cooldown, battle ready)",
                                    [
                                        "3000d, 5000p, normal type",
                                        "applies stun: 8.2s duration"
                                    ]
                                ]
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Sharper Darts",
                                "content": [
                                    "radial-dart buffed",
                                    [
                                        "+4p (9p)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "002 - Advanced Navigation",
                                "content": [
                                    "gains advanced navigation targeting",
                                    [
                                        "allows any flight path to be placed with a center point anywhere on the map"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "003 - Neva-Miss Targeting",
                                "content": [
                                    "radial-dart buffed",
                                    [
                                        "+4p (13p), moderate homing (360 turn rate), increased projectile speed"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "004 - Spectre",
                                "content": [
                                    "radial-dart replaced by barrage",
                                    [
                                        "∞r, 0.04s",
                                        "always targets first",
                                        "alternately fires dart and bomb"
                                    ],
                                    "dart projectile",
                                    [
                                        "2d, +2cd (4cd), +2md (4md), 15p, sharp type",
                                        "very weak homing (80 turn rate)"
                                    ],
                                    "bomb projectile",
                                    [
                                        "very weak homing (80 turn rate)",
                                        "on contact: explosion",
                                        [
                                            "4d, +2cd (6cd), 30p, 20r blast, explosion type"
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "204: dart +25%p (18.75p)",
                                        "014: bomb explosion +15p (45p), +3r (23r)",
                                        "024: dart +1cad (3cad), bomb +1cad (4cad)"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "005 - Flying Fortress",
                                "content": [
                                    "barrage buffed",
                                    [
                                        "75%s (0.03s)"
                                    ],
                                    "dart buffed",
                                    [
                                        "+10d (12d), normal type"
                                    ],
                                    "bomb buffed",
                                    [
                                        "+2d (6d), normal type"
                                    ],
                                    "gains 2 more copies of barrage, which target last and strong"
                                ]
                            }
                        }
                    }
                },
                "heliPilot": {
                    "name": "Heli Pilot",
                    "data": {
                        "base": [
                            "$800 (500 MM)",
                            "size: 18 units * 18 units",
                            "placeable on: land",
                            "22r",
                            "dart attack",
                            [
                                "1d, 2j, 3p, 42r, 0.53s, sharp type"
                            ]
                        ],
                        "top": {
                            "1": {
                                "name": "100 - Quad Darts",
                                "content": [
                                    "gains a second dart attack",
                                    "note: this means that alchemist buffs are used up twice as fast"
                                ]
                            },
                            "2": {
                                "name": "200 - Pursuit",
                                "content": [
                                    "gains pursuit targeting option",
                                    [
                                        "always flies towards a point slightly ahead of the first bloon"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "300 - Razor Rotors",
                                "content": [
                                    "gains rotor attack",
                                    [
                                        "2d, 13p, 35r zone, 0.55s, normal type"
                                    ],
                                    "crosspath",
                                    [
                                        "301: +3p (16p)"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "400 - Apache Dartship",
                                "content": [
                                    "dart buffed",
                                    [
                                        "75%s (0.3975s)"
                                    ],
                                    "rotor buffed",
                                    [
                                        "+4d (6d), +7p (20p)"
                                    ],
                                    "gains machinegun attack",
                                    [
                                        "1d, 9p, 42r, 0.05s, sharp type"
                                    ],
                                    "gains rocket attack",
                                    [
                                        "4j, 173r, 1.0s",
                                        "moderate homing (? turn rate)",
                                        "on contact: explosion",
                                        [
                                            "3d, +3cd (6cd), +3md (6md), 40p, 25r blast, explosion type"
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "402: machinegun 80%s (0.04s), rocket 80%s (0.8s)"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "500 - Apache Prime",
                                "content": [
                                    "dart buffed: +5d (6), +20p (23), energy type",
                                    "rotor buffed: +4d (10d), +20p (40p)",
                                    "machinegun buffed: +4d (5d), +6p (15p), plasma type",
                                    "rocket explosion buffed: +12cd (18cd), +12md (18md)"
                                ]
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Bigger Jets",
                                "content": [
                                    "flies faster"
                                ]
                            },
                            "2": {
                                "name": "020 - IFR",
                                "content": [
                                    "gains camo detection"
                                ]
                            },
                            "3": {
                                "name": "030 - Downdraft",
                                "content": [
                                    "gains downdraft attack",
                                    [
                                        "1p, 32r zone, 0.15s",
                                        "cannot affect blimps or lead",
                                        "sends bloons 32-300 units back"
                                    ],
                                    "crosspath",
                                    [
                                        "032: downdraft 80%s (0.12s)"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "040 - Support Chinook",
                                "content": [
                                    "gains redeploy ability (60s cooldown, battle ready)",
                                    [
                                        "move a tower, except for: aces, helis, farms, villages, aircraft carriers (4xx or 5xx buccaneers), and temples (4xx or 5xx supers)"
                                    ],
                                    "gains supplies ability (60s cooldown, 20s initial)",
                                    [
                                        "drops $4000 cash and 15 lives"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "050 - Special Poperations",
                                "content": [
                                    "supplies replaced by special-supplies",
                                    [
                                        "drops $8000 and 15 lives",
                                        "activates all supplies abilities",
                                    ],
                                    "gains special-poperations ability (25s cooldown, battle ready)",
                                    [
                                        "deploy a marine subtower",
                                        [
                                            "30s lifetime",
                                            "bullet attack",
                                            [
                                                "6d, 20p, 50r, 0.05s, normal type"
                                            ]
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "052: marine bullet 80%s (0.04s)"
                                    ]
                                ]
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Faster Darts",
                                "content": [
                                    "dart buffed",
                                    [
                                        "+1p, increased projectile speed, increased projectile lifespan"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "002 - Faster Firing",
                                "content": [
                                    "dart buffed",
                                    [
                                        "80%s (0.456s)"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "003 - MOAB Shove",
                                "content": [
                                    "gains shove attack",
                                    [
                                        "1p",
                                        "slows MOABs to -33% normal speed, BFBs to 0%, ZOMGs to 50%, DDTs to 33%"
                                    ],
                                    "crosspath",
                                    [
                                        "013: shove buffed (MOABs to -44%, BFBs to -11%, ZOMGs to 33%, DDTs to 22%)"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "004 - Comanche Defense",
                                "content": [
                                    "dart buffed",
                                    [
                                        "+1d (2)"
                                    ],
                                    "gains comanche-defense ability (triggered by bloon progress)",
                                    [
                                        "summons up to 1 mini-comanche when a bloon crosses 25% of the track, 2 mini-comanches when a bloon crosses 50%, and 3 at 75%",
                                        "mini-comanche subtower",
                                        [
                                            "15s lifetime",
                                            "dart attack",
                                            [
                                                "1d, 3j, 4p, 42r, 0.15s, sharp type"
                                            ],
                                            "rocket attack",
                                            [
                                                "∞r, 2.0s",
                                                "moderate homing (250 turn rate)",
                                                "on contact: explosion",
                                                [
                                                    "1d, +2cd (3cd), +2md (3md), 100p, 25r blast, normal type"
                                                ]
                                            ],
                                            "mini-comanche flight pattern locked on Pursuit"
                                        ],
                                        "only summons enough mini-comanches to reach the target number, existing ones will have their lifetime refreshed"
                                    ],
                                    "crosspath",
                                    [
                                        "104: mini-comanche dart +2j (5j)"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "005 - Comanche Commander",
                                "content": [
                                    "dart buffed",
                                    [
                                        "+1d (3d)"
                                    ],
                                    "mini-comanche buffed:",
                                    [
                                        "∞ lifetime, all 3 mini-comanche subtowers are summoned, +1d"
                                    ],
                                    "rocket buffed",
                                    [
                                        "+12d (15d), +6md (23md)"
                                    ]
                                ]
                            }
                        }
                    }
                },
                "mortarMonkey": {
                    "name": "Mortar Monkey",
                    "data": {
                        "base": [
                            "$700 (500 MM)",
                            "size: 8 radius",
                            "placeable on: land",
                            "30r",
                            "shell attack",
                            [
                                "2.0s passive",
                                "targets randomly within 8 units of selected points",
                                "on expire (0.5s): explosion",
                                [
                                    "1d, 35p, 18r blast, explosion type"
                                ]
                            ]
                        ],
                        "top": {
                            "1": {
                                "name": "100 - Bigger Blast",
                                "content": [
                                    "explosion buffed",
                                    [
                                        "+5p (40p), +8r (26r)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "200 - Bloon Buster",
                                "content": [
                                    "explosion buffed",
                                    [
                                        "+1d (2d)"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "300 - Shell Shock",
                                "content": [
                                    "explosion buffed",
                                    [
                                        "+10r (36r)"
                                    ],
                                    "shell buffed",
                                    [
                                        "on expire: stun-explosion",
                                        [
                                            "45p, 19r blast",
                                            "cannot affect black, zebra, or blimps",
                                            "applies stun status: 0.4s duration"
                                        ],
                                        "on expire: shockwave",
                                        [
                                            "1d, 45p, 57r blast, explosion type",
                                            "additionally ignores anything within half of the blast radius",
                                            "note: blimps are large enough that they won't fully fit in this inner radius and so get hit"
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "302: burn 2d/0.625s, 1.875s duration"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "400 - The Big One",
                                "content": [
                                    "explosion buffed",
                                    [
                                        "+5d (7d), +40p (80p), +20r (56r), normal type"
                                    ],
                                    "stun-explosion buffed",
                                    [
                                        "+40p (85p), +10r (29r)"
                                    ],
                                    "shockwave buffed",
                                    [
                                        "+40p (85p), +30r (87r), normal type"
                                    ],
                                    "crosspath",
                                    [
                                        "402: burn 5d/0.625s"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "500 - The Biggest One",
                                "content": [
                                    "explosion buffed",
                                    [
                                        "+43d (50d), +115p (195p), +16r (72r), normal type"
                                    ],
                                    "stun-explosion buffed",
                                    [
                                        "+115p (200p), +8r (37r), additionally stuns blimps for 0.35s"
                                    ],
                                    "shockwave buffed",
                                    [
                                        "+115p (200p), +20cd (21cd), +24r (111r), normal type"
                                    ],
                                    "crosspath",
                                    [
                                        "502: burn 45d/0.625s"
                                    ]
                                ]
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Faster Reload",
                                "content": [
                                    "shell buffed",
                                    [
                                        "75%s (1.5s)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "020 - Rapid Reload",
                                "content": [
                                    "shell buffed",
                                    [
                                        "72%s (1.08s)"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "030 - Heavy Shells",
                                "content": [
                                    "explosion buffed",
                                    [
                                        "normal type, +3cd (4cd), +1md (2md), +1fd (2fd), +1ld (2ld), +2sd (3sd)"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "040 - Artillery Battery",
                                "content": [
                                    "25%s (0.27s), +3 BAD damage (5 BAD damage)",
                                    "gains bombardment ability (60s cooldown, 7s duration, battle ready)",
                                    [
                                        "25%s (0.0675)"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "050 - Pop and Awe",
                                "content": [
                                    "explosion buffed",
                                    [
                                        "+9cd (13cd), +6md (7md), +3fd (4fd), +6 BAD damage (16 BAD damage), +3ld (4ld), +8 sd (10sd)"
                                    ],
                                    "gains pop-and-awe ability (45s cooldown, 10s duration, battle ready)",
                                    [
                                        "20d, ∞p, ∞r, 1.0s, normal type",
                                        "applies stun status: 1s duration",
                                        "gains artillery-buff",
                                        [
                                            "all x4x mortars get +3 BAD damage"
                                        ]
                                    ]
                                ]
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Dynamic Targeting",
                                "content": [
                                    "gains dynamic-targeting-strong",
                                    [
                                        "automatically targets the strongest bloon",
                                    ],
                                    "gains dynamic-targeting-dense",
                                    [
                                        "automatically targets the densest area of bloons on the track",
                                    ]
                                ]
                            },
                            "2": {
                                "name": "002 - Burny Stuff",
                                "content": [
                                    "explosion buffed",
                                    [
                                        "on contact: applies burn status",
                                        [
                                            "1d/1.4s, fire type, 4.2s duration"
                                        ]
                                    ]
                                ]
                            },
                            "3": {
                                "name": "003 - Signal Flare",
                                "content": [
                                    "gains camo detection",
                                    "shell buffed",
                                    [
                                        "on expire: flare",
                                        [
                                            "0d, 55p, 50r blast",
                                            "on hit: decamo bloons including DDTs"
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "103: flare +20r (70r)"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "004 - Shattering Shells",
                                "content": [
                                    "burn buffed",
                                    [
                                        "+4d (5d)"
                                    ],
                                    "shell buffed",
                                    [
                                        "on expire: strip",
                                        [
                                            "40p, 20r blast",
                                            "cannot affect ZOMG or BAD",
                                            "on hit",
                                            [
                                                "degrow and defortify, besides DDTs",
                                                "delead"
                                            ]
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "104: strip +5p (45p), +8r (28r)",
                                        "204: burn +3d (8d)"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "005 - Blooncineration",
                                "content": [
                                    "shell buffed",
                                    [
                                        "on expire: places wall-of-fire",
                                        [
                                            "4d, 40p, 15r zone, 0.1s, fire type, camo",
                                            "4.5s lifetime"
                                        ]
                                    ],
                                    "explosion buffed",
                                    [
                                        "normal type"
                                    ],
                                    "burn buffed",
                                    [
                                        "5d/0.625s, 100md/0.625s"
                                    ],
                                    "strip buffed",
                                    [
                                        "can affect ZOMGs",
                                        "degrow and defortify can affect DDTs"
                                    ],
                                    "crosspath",
                                    [
                                        "105: wall-of-fire +5p (45), +6r (21)",
                                        "205: burn +3d (8d), +50md (150md), wall-of-fire +1d (5)"
                                    ]
                                ]
                            }
                        }
                    }
                },
                "dartlingGunner": {
                    "name": "Dartling Gunner",
                    "data": {
                        "base": [
                            "$800 (500 MM)",
                            "size: 7 radius",
                            "placeable on: land",
                            "20r",
                            "dart attack",
                            [
                                "1d, 2p, 0.2s passive, sharp type",
                                "targets randomly within 23° of selected point"
                            ],
                            "rotates towards cursor at 180°/s"
                        ],
                        "top": {
                            "1": {
                                "name": "100 - Focused Firing",
                                "content": [
                                    "random targeting spread reduced by 60% (9.2°)"
                                ]
                            },
                            "2": {
                                "name": "200 - Laser Shock",
                                "content": [
                                    "dart buffed",
                                    [
                                        "+1 shocked1 damage (2 shocked1 damage)",
                                        "applies shocked1 status",
                                        [
                                            "1d/0.95s, 1s duration"
                                        ]
                                    ]
                                ]
                            },
                            "3": {
                                "name": "300 - Laser Cannon",
                                "content": [
                                    "dart replaced by laser",
                                    [
                                        "2d, 1 shocked2 damage (3 shocked2 damage), 5p, 0.2s passive, plasma type",
                                        "random targeting spread set to 0°",
                                        "applies shocked2 status",
                                        [
                                            "1d/0.95s, 2s duration"
                                        ]
                                    ]
                                ]
                            },
                            "4": {
                                "name": "400 - Plasma Accelerator",
                                "content": [
                                    "laser replaced with beam",
                                    [
                                        "1d, +1 shocked3 damage (2 shocked3 damage), 40p, 0.2s passive, plasma type",
                                        "one solid beam from the tower to the target (or an obstacle on the way)",
                                        "applies shocked3 status",
                                        [
                                            "1d/0.95s, 5s duration"
                                        ],
                                        "any pierce not used on bloons is used to create a focus at the target",
                                        [
                                            "2d, 10md (12md), +1 shocked3 damage, plasma type",
                                            "applies shocked-3 status"
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "402: +30p (70p)"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "500 - Ray of Doom",
                                "content": [
                                    "beam replaced by full-beam",
                                    [
                                        "35d, +20 shocked4 damage (55 shocked4 damage), 1000p, 0.2s passive, normal type",
                                        "additional +55d to the first target",
                                        "one solid beam to the edge of the screen",
                                        "applies shocked4 status",
                                        [
                                            "20d/0.95s, 5s duration"
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "502: bonus damage applies to first 3 targets"
                                    ]
                                ]
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Advanced Targeting",
                                "content": [
                                    "gains camo detection"
                                ]
                            },
                            "2": {
                                "name": "020 - Faster Barrel Spin",
                                "content": [
                                    "dart buffed",
                                    [
                                        "66%s (0.132s)"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "030 - Hydra Rocket Pods",
                                "content": [
                                    "dart replaced by rocket",
                                    [
                                        "3i, 0.132s",
                                        "on contact: explosion",
                                        [
                                            "1d, 6p, 8r blast, normal type"
                                        ]
                                    ],
                                    "crosspath:",
                                    [
                                        "032: rocket gets +2i, explosion gets +3p (9p)"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "040 - Rocket Storm",
                                "content": [
                                    "gains rocket-storm ability (40s cooldown, 8s duration, battle ready)",
                                    [
                                        "1i, 10j, 0.5s passive",
                                        "75° random spread",
                                        "on contact: explosion",
                                        [
                                            "5d, 8p, 8r blast, normal type"
                                        ]
                                    ],
                                    "crosspath:",
                                    [
                                        "140: rocket-storm ability random spread reduced by 30% (52.5°)",
                                        "042: rocket-storm ability explosion gets +3p (11p)"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "050 - M.A.D",
                                "content": [
                                    "rocket buffed",
                                    [
                                        "3d, +500md (503md), 300%s (0.396s)"
                                    ],
                                    "explosion buffed",
                                    [
                                        "+2d (3d)"
                                    ],
                                    "rocket-storm explosion buffed",
                                    [
                                        "+4cd (9cd), +12md (17md), +10p (18p), +4r (12r)"
                                    ]
                                ]
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Faster Swivel",
                                "content": [
                                    "rotates twice as fast (360°/s)"
                                ]
                            },
                            "2": {
                                "name": "002 - Powerful Darts",
                                "content": [
                                    "dart buffed",
                                    [
                                        "+3p (5p), shatter type, increased projectile speed"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "003 - Buckshot",
                                "content": [
                                    "dart replaced with buckshot",
                                    [
                                        "4d, 6j 23° spread, 7p, 130r, 1.5s passive, shatter type",
                                        [
                                            "applies knockback status",
                                            [
                                                "0.2s duration",
                                                "300% slow for regular bloons, 150% for leads and ceramics"
                                            ]
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "103: +32.5r (162.5r)"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "004 - Bloon Area Denial System",
                                "content": [
                                    "buckshot attack buffed",
                                    [
                                        "+1d (5d)"
                                    ],
                                    "gains 3 more buckshot attacks, which attack in sequence for effectively 0.375s attack cooldown",
                                    "gains independent targeting",
                                    [
                                        "attacks are no longer passive",
                                        "priorities (from top to bottom): first, last, close, strong"
                                    ],
                                    "note: each barrel has a different vertical position, so higher ones may see over obstacles that lower ones do not"
                                ]
                            },
                            "5": {
                                "name": "005 - Bloon Exclusion Zone",
                                "content": [
                                    "gains 2 more buckshot attacks, for effectively 0.25s cooldown",
                                    [
                                        "independent targeting priorities: first, strong"
                                    ],
                                    "all attacks buffed",
                                    [
                                        "+3d (8d), +6j (12j), +2p (9p)"
                                    ]
                                ]
                            }
                        }
                    }
                }
            }
        },
        "magic": {
            "type": "nestedArrays",
            "entries": {
                "wizardMonkey": {
                    "name": "Wizard Monkey",
                    "data": {
                        "base": [
                            "$250 (750 MM)",
                            "size: 7 radius",
                            "placeable on: land",
                            "magic-bolt attack",
                            [
                                "1d, 3p, 40r, 1.1s, energy type"
                            ]
                        ],
                        "top": {
                            "1": {
                                "name": "100 - Guided Magic",
                                "content": [
                                    "magic-bolt buffed",
                                    [
                                        "strong homing (720 turn rate, 360 seeking angle)",
                                        "can see past obstacles"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "200 - Arcane Blast",
                                "content": [
                                    "magic-bolt buffed",
                                    [
                                        "+1d (2d)"
                                    ],
                                    "crosspath",
                                    [
                                        "210: fireball +1d (3d)"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "300 - Arcane Mastery",
                                "content": [
                                    "magic-bolt buffed",
                                    [
                                        "+1d (3d), +4p (7p), +20r (60), 50%s (0.55s), plasma type"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "400 - Arcane Spike",
                                "content": [
                                    "magic-bolt buffed",
                                    [
                                        "+5d (8), +10md (18md), +4ld, 50%s (0.275s)"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "500 - Archmage",
                                "content": [
                                    "magic-bolt buffed",
                                    [
                                        "+2d (10d), +15md (35md), +4ld (+8ld), +6p (13p), 50%s (0.1375s)"
                                    ],
                                    "gains shimmer attack",
                                    [
                                        "200p, 70r zone, 1.25s, camo",
                                        "can see past obstacles",
                                        "decamo"
                                    ],
                                    "gains flame attack",
                                    [
                                        "1d, +1cd (2cd), +1md (2md), 4p, 70r, 0.05s, fire type",
                                        "can see past obstacles, but will collide with them",
                                        "applies burn status",
                                        [
                                            "1d/1.5s, fire type, 3.1s duration"
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "510: fireball 50%s (1.3s), +7d (9d), +9md (18md)",
                                        "520: wall-of-fire 50%s (2.75s), +1md (2md)"
                                    ]
                                ]
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Fireball",
                                "content": [
                                    "gains fireball attack",
                                    [
                                        "2.6s",
                                        "on contact: explosion",
                                        [
                                            "2d, 15p, 20r blast, explosion type"
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "011: fireball +7p (22p), can see past obstacles"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "020 - Wall of Fire",
                                "content": [
                                    "gains place-fire attack",
                                    [
                                        "5.5s passive, 1.0s initial cooldown",
                                        "places wall-of-fire on the closest track",
                                        [
                                            "1d, 15p, 15r zone, 0.15s, fire type",
                                            "100 lifetime pierce",
                                            "4.5s lifetime"
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "120: wall-of-fire can be placed behind walls, and receives manual targeting on any location within range",
                                        "021: wall-of-fire +5p (20p)"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "030 - Dragon's Breath",
                                "content": [
                                    "fireball buffed",
                                    [
                                        "explosion +7d (9d), +4r (24r)"
                                    ],
                                    "place-fire buffed",
                                    [
                                        "4.5s"
                                    ],
                                    "wall-of-fire buffed",
                                    [
                                        "0.1s, +5p (20p)"
                                    ],
                                    "gains flame attack",
                                    [
                                        "1d, +1cd (2cd), 4p, 50r, 0.1s, fire type",
                                        "applies burn status",
                                        [
                                            "1d/1.5s, fire type, 3.1s duration"
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "130: flame can see past obstacles, but will collide with them",
                                        "031: flame +2p (6p)"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "040 - Summon Phoenix",
                                "content": [
                                    "gains summon ability (45s cooldown, 20s duration, battle ready)",
                                    [
                                        "summons phoenix subtower",
                                        [
                                            "flame attack",
                                            [
                                                "6d, 8p, ∞r, 0.1s, fire type, camo",
                                                "can see past walls",
                                                "inherits priority"
                                            ],
                                            "note: does not inherit buffs, but can receive buffs by flying through their range of influence"
                                        ]
                                    ]
                                ]
                            },
                            "5": {
                                "name": "050 - Wizard Lord Phoenix",
                                "content": [
                                    "fireball buffed",
                                    [
                                        "explosion +24d (33d)"
                                    ],
                                    "wall-of-fire buffed",
                                    [
                                        "+4d (5d)"
                                    ],
                                    "flame buffed",
                                    [
                                        "+5d (6d), +46p (50p)"
                                    ],
                                    "has a permanent phoenix subtower",
                                    "summon replaced by transform (45s cooldown, 20s duration, battle ready)",
                                    [
                                        "phoenix transforms into phoenix-lord",
                                        [
                                            "flame attack",
                                            [
                                                "55d, 50p, ∞r, 0.1s, normal type, camo",
                                                "can see past walls"
                                            ],
                                            "meteor attack",
                                            [
                                                "50d, 8j, 255p, ∞r, 1.0s passive, normal type, camo",
                                                "can see past walls"
                                            ],
                                            "note: technically a separate tower so is not affected by buffs to the original wizard"
                                        ],
                                        "while active, doubles all phoenix subtowers' damage"
                                    ]
                                ]
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Intense Magic",
                                "content": [
                                    "magic-bolt buffed",
                                    [
                                        "+5p (8p), double projectile speed"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "002 - Monkey Sense",
                                "content": [
                                    "gains camo detection"
                                ]
                            },
                            "3": {
                                "name": "003 - Shimmer",
                                "content": [
                                    "gains shimmer attack",
                                    [
                                        "200p, 70r zone, 1.5s, camo",
                                        "can see past obstacles",
                                        "decamo"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "004 - Necromancer: Unpopped Army",
                                "content": [
                                    "gains a graveyard",
                                    [
                                        "stores pops (layers not damage) that occur within 70 range, up to a total capacity of 450",
                                        "pops after round 30 are worth 7-13 (at random) in the graveyard, instead of 1",
                                        "each individual pop may only be stored by one wizard"
                                    ],
                                    "gains reanimate attack",
                                    [
                                        "60r, 1.5s",
                                        "spawns 1-5 zombloons, each using 1-10 pops from the graveyard",
                                        [
                                            "2d, 2-10p (pops used +1), normal type, 10s lifetime",
                                            "travels backwards along the track at red bloon speed",
                                            "+1d for every 200 graveyard bloons, stacking additively up to 10 times"
                                        ],
                                        "-10%s for every 100 graveyard bloons, stacking additively up to 5 times (eg 200-299 in the graveyard means 80% = 1.2s)"
                                    ],
                                    "crosspath",
                                    [
                                        "104: zombloons position targetable manually",
                                        "014: fireball +1d for every 200 graveyard"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "005 - Prince of Darkness",
                                "content": [
                                    "magic-bolt buffed",
                                    [
                                        "25%s (0.275s)"
                                    ],
                                    "shimmer buffed",
                                    [
                                        "50%s (0.75s)"
                                    ],
                                    "graveyard buffed",
                                    [
                                        "3000 capacity"
                                    ],
                                    "graveyard damage buff now requires 300 bloons each",
                                    "gains reanimate-blimp attack",
                                    [
                                        "60r, 3s",
                                        "if less than 2000 pops in the graveyard, uses 20 to spawn a zmoab",
                                        [
                                            "25d, 20p, normal type, 20s lifetime",
                                            "travels backwards along the track at 60% red speed",
                                            "+1d for every 300 graveyard bloons, stacking additively up to 10 times"
                                        ],
                                        "if more than 2000 pops in the graveyard, uses 50 to spawn a zbfb",
                                        [
                                            "130d, 50p, normal type, 12.5s lifetime",
                                            "travels backwards along the track at 60% red speed"
                                        ]
                                    ],
                                    "gains buff: +1d and +50% lifetime to all zombloons, zmoabs, and zbfbs from any wizard (including self)"
                                ]
                            }
                        }
                    }
                },
                "superMonkey": {
                    "name": "Super Monkey",
                    "data": {
                        "base": [
                            "$1,800 (750 MM)",
                            "size: 7 radius",
                            "placeable on: land",
                            "dart attack",
                            [
                                "1d, 1p, 50r, 0.045, sharp type"
                            ]
                        ],
                        "top": {
                            "1": {
                                "name": "100 - Laser Blasts",
                                "content": [
                                    "dart replaced by laser",
                                    [
                                        "+1p (2p), energy type"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "200 - Plasma Blasts",
                                "content": [
                                    "laser replaced by plasma",
                                    [
                                        "66.67%s (0.03s), +1p (3p), plasma type"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "300 - Sun Avatar",
                                "content": [
                                    "plasma replaced by sunbeam",
                                    [
                                        "+5p (8p), +2j (3j)"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "400 - Sun Temple",
                                "content": [
                                    "size: 20 radius",
                                    "sunbeam replaced by sunblast",
                                    [
                                        "11d, 30p, 65r, 0.06s, normal type",
                                        "can see past obstacles"
                                    ],
                                    "temple sacrifice on upgrade",
                                    [
                                        "sacrifices towers in range, not heroes",
                                        "on a sacrifice value threshold of $15,000 or greater of primary towers:",
                                        [
                                            "gains temple buff",
                                            [
                                                "90%s, +50% projectile speed"
                                            ],
                                            "gains primary-blades attack",
                                            [
                                                "20d, 8j, 20p, 65r, 1.5s, normal type"
                                            ]
                                        ],
                                        "on a sacrifice value threshold of $15,000 or greater of military towers:",
                                        [
                                            "gains temple buff",
                                            [
                                                "+1md, +5p, +30% projectile size"
                                            ],
                                            "gains missile attack",
                                            [
                                                "∞r, 2.0s",
                                                "can only affect blimps",
                                                "on contact: explosion",
                                                [
                                                    "100d, 50p, 18r blast, normal type"
                                                ]
                                            ]
                                        ],
                                        "on a sacrifice value threshold of $15,000 or greater of magic towers:",
                                        [
                                            "gains magic-tornado attack",
                                            [
                                                "12d, 50p, 10s",
                                                "MOABs use 9p, BFBs 24p, ZOMGs and DDTs 49p",
                                                "sends bloons back 33-10000 distance"
                                            ],
                                            "gains arcane-temple attack",
                                            [
                                                "35d, 6j, 7p, 7s, energy type, moderate homing",
                                                "can see past obstacles"
                                            ],
                                            "gains temple buff",
                                            [
                                                "+2p, +50% projectile lifespan"
                                            ]
                                        ],
                                        "on a sacrifice value threshold of $15,000 or greater of support towers:",
                                        [
                                            "gains temple buff",
                                            [
                                                "+5% discount, +7 range, 85%s, grants camo"
                                            ],
                                            "crate attack",
                                            [
                                                "$2,000 income, produced one time per round",
                                                "15s lifetime"
                                            ],  
                                        ]
                                    ]
                                ]
                            },
                            "5": {
                                "name": "500 - True Sun God",
                                "content": [
                                    "size: 25 radius",
                                    "sunblast buffed",
                                    [
                                        "+19d (30d)"
                                    ],
                                    "temple sacrifice on upgrade",
                                    [
                                        "sacrifices towers in range, not heroes",
                                        "on a sacrifice value threshold of $15,000 or greater of primary towers:",
                                        [
                                            "gains primary-glaives attack",
                                            [
                                                "25d, 40p, 0.5s, sharp type",
                                                "jumps to a nearby target after hitting",
                                            ]
                                        ],
                                        "on a sacrifice value threshold of $15,000 or greater of military towers:",
                                        [
                                            "spawns two golden aircrafts, first after 0.0s, second after 1.2s",
                                            [
                                                "barrage attack",
                                                [
                                                    "∞r, 0.06s",
                                                    "always targets first",
                                                    "alternately fires dart and bomb",
                                                ],
                                                "dart projectile",
                                                [
                                                    "15d, 30p, sharp type",
                                                ],
                                                "bomb projectile",
                                                [
                                                    "on contact: explosion",
                                                    [
                                                        "10d, 60p, 20r blast, explosion type"
                                                    ]
                                                ]
                                            ]
                                        ],
                                        "on a sacrifice value threshold of $15,000 or greater of magic towers:",
                                        [
                                            "spawns a mini sun avatar after 10.0s, then more mini sun avatars at an interval of 30.0s",
                                            "places mini sun avatar between tower footprint and range",
                                            "mini sun avatar",
                                            [
                                                "size: 6 radius",
                                                "footprint ignored by other towers",
                                                "60s liftime",
                                                "can be buffed",
                                                "sunbeam attack",
                                                [
                                                    "1d, 3j, 6p, 40r, 0.03s, plasma Type"
                                                ]
                                            ]
                                        ],
                                        "on a sacrifice value threshold of $15,000 or greater of support towers:",
                                        [
                                            "gains temple-permaspikes attack",
                                            [
                                                "30s",
                                                "places temple-permaspike randomly on track",
                                                [
                                                    "10d, 250p, 300s lifespan, camo",
                                                    [
                                                        "total: 2500 damage per spike"
                                                    ]
                                                ]
                                            ],
                                            "crate attack buffed",
                                            [
                                                "$2,000 income x3, produced twice at the start of round, once at the end of round",
                                                "on expiry, autocollects for 1000$",
                                            ]
                                        ]
                                    ],
                                    "if bought when adora level 20 is in range, transforms into true sun goddess adora",
                                    [
                                        "buffs super monkeys in range",
                                        [
                                            "+2p, +15%r"
                                        ],
                                        "buffs sun avatars in range",
                                        [
                                            "+2d"
                                        ],
                                        "gains sun-bolt attack",
                                        [
                                            "5d, 22p, 0.6s, 8j, normal type"
                                        ],
                                        "gains blood-sacrifice ability",
                                        [
                                            "selected tower gains sacrifice buff",
                                            [
                                                "20%s for 4 seconds",
                                                "when buff ends",
                                                [
                                                    "tower is sold for $0",
                                                    "temporary-blood enabled",
                                                ]
                                            ],
                                            "temporary-blood buff, 20s duration",
                                            [
                                                "+0.08x%r, -0.08x%s",
                                                [
                                                    "where x = dollars sacrificed / 100, and x may not exceed 300",
                                                    "this means that the max buff is +124%r, 76%s at a $30000 sacrifice"
                                                ],
                                            ],
                                        ],
                                        "gains ball-of-light attack (30s cooldown, 10s duration, targets a tower)",
                                        [
                                            "20d, 11p, 0.05s, normal type",
                                            "terminus attack at point of contact",
                                            [
                                                "30d, 1p, 0.05s, normal type"
                                            ]
                                        ],
                                    ]
                                ]
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Super Range",
                                "content": [
                                    "dart buffed",
                                    [
                                        "+1p (2p), +10r (60r)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "020 - Epic Range",
                                "content": [
                                    "dart buffed",
                                    [
                                        "+2p (4p), +12r (72), faster projectile speed"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "030 - Robo Monkey",
                                "content": [
                                    "dart buffed",
                                    [
                                        "+3p (7p)",
                                        "10d crit every 15 shots"
                                    ],
                                    "gains a second attack, which is a copy of the first, with independent choice of targeting priority",
                                    "note: this means that an alchemist buff is used up twice as fast"
                                ]
                            },
                            "4": {
                                "name": "040 - Tech Terror",
                                "content": [
                                    "dart replaced by plasma",
                                    [
                                        "1d, +6p (13p), 72r, 80%s (0.036s), plasma type"
                                    ],
                                    "gains annihilate ability (45s cooldown, battle ready)",
                                    [
                                        "2500d, 2000p, 70r blast, normal type, camo",
                                        "penetrates blimp layers"
                                    ],
                                    "crosspath",
                                    [
                                        "041: surviving targets move backwards at 18x speed for 0.2s"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "050 - The Anti-Bloon",
                                "content": [
                                    "plasma buffed",
                                    [
                                        "+4d (5d), +3p (16p), +10r (82r), normal type",
                                        "50d crit every 15 shots"
                                    ],
                                    "annihilate replaced by anti-bloon (30s cooldown, battle ready)",
                                    [
                                        "5000d, 10000p, 120r blast, normal type, camo",
                                        "penetrates blimp layers"
                                    ],
                                    "crosspath",
                                    [
                                        "051: surviving targets move backwards at 25x speed for 0.2s"
                                    ]
                                ]
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Knockback",
                                "content": [
                                    "applies knockback status",
                                    [
                                        "0.5s duration",
                                        "125% slow for regular bloons, 60% for leads and ceramics, and 30% for blimps"
                                    ],
                                    "note: 125% slow means move backwards at 25% speed"
                                ]
                            },
                            "2": {
                                "name": "002 - Ultravision",
                                "content": [
                                    "dart buffed",
                                    [
                                        "+3r (53r)"
                                    ],
                                    "gains camo detection"
                                ]
                            },
                            "3": {
                                "name": "003 - Dark Knight",
                                "content": [
                                    "dart replaced by monkeyrang",
                                    [
                                        "1d, +2md (3md), 5p, 53r, 0.045s, sharp type"
                                    ],
                                    "knockback buffed",
                                    [
                                        "100% slow to leads and ceramics"
                                    ],
                                    "gains darkshift ability (20s cooldown, battle ready)",
                                    [
                                        "teleport to a chosen point within range"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "004 - Dark Champion",
                                "content": [
                                    "monkeyrang buffed",
                                    [
                                        "+1d (2d), +2md (6md), +2p (7p), +1j (2j), normal type"
                                    ],
                                    "darkshift buffed",
                                    [
                                        "can teleport anywhere"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "005 - Legend of the Night",
                                "content": [
                                    "monkeyrang buffed",
                                    [
                                        "+4d (6d), +4cd (12cd), +4md (14md), +8p (15p), +4r (57r)"
                                    ],
                                    "gains black-hole ability (120s cooldown, 4s duration, battle ready, triggered by something about to leak)",
                                    [
                                        "anything about to leak is deleted instead",
                                        "deleted bloons give no cash and do not add to any damage counter",
                                        "cooldown persists after selling",
                                        "does not work during sudden death",
                                        "ability ends immediately if a BAD is absorbed"
                                    ]
                                ]
                            }
                        }
                    }
                },
                "ninjaMonkey": {
                    "name": "Ninja Monkey",
                    "data": {
                        "base": [
                            "$400 (750 MM)",
                            "size: 6 radius",
                            "placeable on: land",
                            "gains camo detection",
                            "shuriken attack",
                            [
                                "1d, 3p, 40r, 0.62s, sharp type"
                            ]
                        ],
                        "top": {
                            "1": {
                                "name": "100 - Ninja Discipline",
                                "content": [
                                    "all attacks buffed",
                                    [
                                        "+17.5%r (47r), 70%s (0.434s)"
                                    ],
                                    "crosspath",
                                    [
                                        "102: caltrops 5.6s"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "200 - Sharp Shurikens",
                                "content": [
                                    "shuriken buffed",
                                    [
                                        "+1p (4p)"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "300 - Double Shot",
                                "content": [
                                    "shuriken buffed",
                                    [
                                        "+1j 30° spread (2j)"
                                    ],
                                    "crosspath",
                                    [
                                        "302: caltrops +2d (5d)"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "400 - Bloonjitsu",
                                "content": [
                                    "shuriken buffed",
                                    [
                                        "+3j 45° spread (5j)"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "500 - Grandmaster Ninja",
                                "content": [
                                    "shuriken buffed",
                                    [
                                        "+1d (2d), +10r (57), 50%s (0.217s), +3j 60° spread (8j)"
                                    ],
                                    "crosspath",
                                    [
                                        "510: 100% chance to send bloons back; 50% chance to send MOABs, BFBs back 60-100 units",
                                        "502: caltrops 2.8s, caltrop 25d"
                                    ]
                                ]
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Distraction",
                                "content": [
                                    "all attacks buffed",
                                    [
                                        "on damage: 25% chance to send bloons 100-150 units back"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "020 - Counter-Espionage",
                                "content": [
                                    "all attacks buffed",
                                    [
                                        "on damage: decamo"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "030 - Shinobi Tactics",
                                "content": [
                                    "gains shinobi buff",
                                    [
                                        "affects Ninja Monkeys in range",
                                        "stacks up to 10 times",
                                        "85%s",
                                        "+15%p, stacking additively"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "040 - Bloon Sabotage",
                                "content": [
                                    "gains sabotage ability (60s cooldown, 15s duration, battle ready)",
                                    [
                                        "all bloons and blimps move at half speed",
                                        "currently sabotaged blimps will remain slowed for the duration of the ability if this ninja is sold"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "050 - Grand Saboteur",
                                "content": [
                                    "sabotage replaced by grand-sabotage (60s cooldown, 30s duration, battle ready)",
                                    [
                                        "all bloons and blimps move at half speed",
                                        "currently sabotaged blimps will remain slowed for the duration of the ability if this ninja is sold",
                                        "25%d to new blimps entering the map",
                                        [
                                            "does not contribute to tower pop count"
                                        ]
                                    ],
                                    "gains saboteur buff",
                                    [
                                        "affects Ninja Monkeys in range",
                                        "+2md, +10r",
                                    ]
                                ]
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Seeking Shuriken",
                                "content": [
                                    "shuriken buffed: strong homing (instant turn rate, 144° fov)"
                                ]
                            },
                            "2": {
                                "name": "002 - Caltrops",
                                "content": [
                                    "gains caltrops attack",
                                    [
                                        "40r, 8s passive, places caltrop randomly on path",
                                        [
                                            "3d, 6i, sharp type, 25s lifetime"
                                        ]
                                    ]
                                ]
                            },
                            "3": {
                                "name": "003 - Flash Bomb",
                                "content": [
                                    "every 3rd shuriken replaced by flash-bomb",
                                    [
                                        "1d, 75p, 40r blast, normal type",
                                        "applies stun (1s duration) to bloons"
                                    ],
                                    "crosspath",
                                    [
                                        "023: gains decamo-aura attack",
                                        [
                                            "flash-bomb buffed: gains decamo attack",
                                            [
                                                "75p, 65r, camo",
                                                "decamo"
                                            ]
                                        ]
                                    ]
                                ]
                            },
                            "4": {
                                "name": "004 - Sticky Bomb",
                                "content": [
                                    "gains sticky-bomb attack",
                                    [
                                        "60r, 4.5s",
                                        "can only affect blimps",
                                        "applies bombed status",
                                        [
                                            "3s duration",
                                            "on expiry: 450d to affected target",
                                            "on expiry: explosion",
                                            [
                                                "100d, 10p, 40r blast, normal type"
                                            ]
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "104: sticky-bomb +11.5r (70.5r)"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "005 - Master Bomber",
                                "content": [
                                    "flash-bomb buffed",
                                    [
                                        "+9d (10d), applies stun (0.25s duration) to blimps"
                                    ],
                                    "sticky-bomb buffed",
                                    [
                                        "∞r, 1.8s, applies stun (1s duration)"
                                    ],
                                    "bombed buffed",
                                    [
                                        "1000d",
                                        "explosion 200d"
                                    ]
                                ]
                            }
                        }
                    }
                },
                "alchemist": {
                    "name": "Alchemist",
                    "data": {
                        "base": [
                            "$550 (750 MM)",
                            "size: 6 radius",
                            "placeable on: land",
                            "potion attack",
                            [
                                "45r, 1.8s",
                                "can see past obstacles",
                                "on contact: splash",
                                [
                                    "1d single-layer, 12p, 12r blast, acid type",
                                    "applies acid status: 1d/2.0s, 4.05s duration"
                                ]
                            ]
                        ],
                        "top": {
                            "1": {
                                "name": "100 - Larger Potions",
                                "content": [
                                    "splash buffed",
                                    [
                                        "+6p (18p), +6r (18r)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "200 - Acidic Mixture Dip",
                                "content": [
                                    "gains acid-dip attack",
                                    [
                                        "45r, 10.0s",
                                        "targets random towers, prioritizing those not currently buffed",
                                        "does not target towers that do not directly attack (Farm, Village), or only attack by applying a status (Alchemist, Glue Gunner)",
                                        "applies acidified buff",
                                        [
                                            "+1cd, +1md, +1 flead damage, can damage lead",
                                            "lasts 10 shots",
                                            "stacks by adding 10 more shots each time, capped at 200"
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "220: +3 shot limit (lasts 13 shots)"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "300 - Berserker Brew",
                                "content": [
                                    "gains brew attack",
                                    [
                                        "45r, 8.0s",
                                        "targets closest buffable tower in range, except alchemists and towers that don't attack",
                                        [
                                            "applies berserk buff +1d, +2p, 90%s, +10%r",
                                            "lasts 5.0s or 25 shots",
                                            "cannot be reapplied for 5.0s"
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "320: berserk +1s duration (6.0s duration), +5 shot limit (lasts 30 shots), -1s reapplication cooldown (4.0s)"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "400 - Stronger Stimulant",
                                "content": [
                                    "brew buffed",
                                    [
                                        "buff is now +1d, +3p, 85%s, +15%r",
                                        "lasts 12.0s or 40 shots"
                                    ],
                                    "crosspath",
                                    [
                                        "420: berserk +1s duration (13.0s duration), +10 shot limit (lasts 50 shots), -1s reapplication cooldown (4.0s)"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "500 - Permanent Brew",
                                "content": [
                                    "acidified and brew buffs are permanent (unless this alchemist is sold)"
                                ]
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Stronger Acid",
                                "content": [
                                    "acid status buffed",
                                    [
                                        "1d/1.33s, 4s duration"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "020 - Perishing Potions",
                                "content": [
                                    "potion buffed",
                                    [
                                        "+1d (2d), +3md (5md), +7fmd (12fmd), can defortify bloons"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "030 - Unstable Concoction",
                                "content": [
                                    "gains unstable-potion attack",
                                    [
                                        "67.5r, 4.5s, can only target blimps",
                                        "on contact: unstable-splash",
                                        [
                                            "3p, 14r blast",
                                            "applies unstable status"
                                        ]
                                    ],
                                    "unstable status",
                                    [
                                        "when popped, creates an explosion",
                                        "50p, 40r blast, normal type",
                                        "damage to bloons depends on the unstable bloon: 2d from MOABs, 3d from BFBs, 4d from anything else",
                                        "damage to blimps: 20d from MOABs, 70d from BFBs, 40d from DDTs, 400d from ZOMGs and BADs",
                                        "ZOMGs and DDTs use 3p, BADs use 9p"
                                    ],
                                    "crosspath",
                                    [
                                        "130: unstable-splash +7r (21r), +1p (4p)"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "040 - Transforming Tonic",
                                "content": [
                                    "gains transform ability (60s cooldown, 17.5s duration, battle ready)",
                                    [
                                        "transforms into a monster",
                                        [
                                            "2d, 6p, 72r, 0.03s, plasma type",
                                            "can see past obstacles, but will collide with them",
                                            "can hit camos but cannot target them"
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "140: monster +3p (9p)",
                                        "041: monster 0.024s"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "050 - Total Transformation",
                                "content": [
                                    "transform replaced by total-transform (40s cooldown, 17.5s duration, battle ready)",
                                    [
                                        "additionally transforms 5 nearby land-based monkey towers (tier 3 or lower) into monsters",
                                        [
                                            "2d, 10p, 72r, 0.03s, plasma type"
                                        ]
                                    ]
                                ]
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Faster Throwing",
                                "content": [
                                    "all attacks buffed",
                                    [
                                        "60%s (1.08s)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "002 - Acid Pool",
                                "content": [
                                    "potion buffed",
                                    [
                                        "targets track if no bloons in range, creating a puddle",
                                        [
                                            "7s lifetime",
                                            "1d, 5p, camo, applies acid status"
                                        ]
                                    ]
                                ]
                            },
                            "3": {
                                "name": "003 - Lead to Gold",
                                "content": [
                                    "potion buffed",
                                    [
                                        "+18ld (19ld) including DDTs",
                                        "no longer single-layer",
                                        "applies golden-lead status",
                                        [
                                            "gives $50 when the lead layer is popped, unaffected by income cuts or cash modifiers"
                                        ]
                                    ]
                                ]
                            },
                            "4": {
                                "name": "004 - Rubber to Gold",
                                "content": [
                                    "gains gold-potion attack",
                                    [
                                        "45r, 3.8s",
                                        "cannot target BADs",
                                        "on contact: gold-splash",
                                        [
                                            "12p, 12r blast",
                                            "applies golden status"
                                        ]
                                    ],
                                    "golden status",
                                    [
                                        "affected bloons give $1.5 per layer popped"
                                    ],
                                    "crosspath",
                                    [
                                        "104: gold-splash +6p (20p)"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "005 - Bloon Master Alchemist",
                                "content": [
                                    "gains shrink-potion attack",
                                    [
                                        "∞r, 7.5s",
                                        "cannot target BADs",
                                        "on contact: shrink-splash",
                                        [
                                            "200p",
                                            "MOABs use 10p, BFBs use 30p, DDTs use 50p, and ZOMGs use 100p",
                                            "transforms target into a red bloon"
                                        ]
                                    ]
                                ]
                            }
                        }
                    }
                },
                "druid": {
                    "name": "Druid",
                    "data": {
                        "base": [
                            "$425 (750 MM)",
                            "size: 7 radius",
                            "placeable on: land",
                            "thorn attack",
                            [
                                "1d, 5j, 1p, 35r, 1.1s, sharp type",
                                "projectiles have random spread"
                            ]
                        ],
                        "top": {
                            "1": {
                                "name": "100 - Hard Thorns",
                                "content": [
                                    "thorn buffed",
                                    [
                                        "+1p (2p), normal type"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "200 - Heart of Thunder",
                                "content": [
                                    "gains lightning attack",
                                    [
                                        "5i, 35r, 2.2s",
                                        "on contact",
                                        [
                                            "1d, plasma type",
                                            "if any impacts remain, splits into 2",
                                            "both copies jump to a new target within 43 units"
                                        ],
                                        "note: this means up to 31 targets can be hit in total, which can't be increased with pierce buffs"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "300 - Druid of the Storm",
                                "content": [
                                    "gains tornado attack",
                                    [
                                        "0d, 30p, 2.5s, normal type",
                                        "has homing",
                                        "cannot target blimps or lead",
                                        "sends back 250 units",
                                        "removes glue and frozen status",
                                        "note: damage can be buffed"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "400 - Ball Lightning",
                                "content": [
                                    "gains lightball attack",
                                    [
                                        "6.0s",
                                        "5s lifetime",
                                        "has a modified lightning attack (2d, 43r, 0.35s passive)"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "500 - Superstorm",
                                "content": [
                                    "gains camo detection",
                                    "lightning buffed",
                                    [
                                        "+2d (3d)"
                                    ],
                                    "lightball lightning buffed",
                                    [
                                        "+3d (5d)"
                                    ],
                                    "gains superstorm attack",
                                    [
                                        "12d, 150p, 4.0s",
                                        "has homing",
                                        "cannot target BADs",
                                        "MOABs use 5p, BFBs 20p, ZOMGs 50p, and DDTs 30p",
                                        "5.7s lifetime",
                                        "sends bloons back 250 units",
                                        "removes glue and frozen status",
                                        "has a modified lightball attack (1.0s, random spread)"
                                    ]
                                ]
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Thorn Swarm",
                                "content": [
                                    "thorn buffed",
                                    [
                                        "+3j (8j)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "020 - Heart of Oak",
                                "content": [
                                    "all attacks buffed",
                                    [
                                        "on damage: degrow"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "030 - Druid of the Jungle",
                                "content": [
                                    "gains vine-grab attack",
                                    [
                                        "∞r, 1.4s, targets strongest bloon",
                                        "can see past obstacles",
                                        "applies snared status",
                                        [
                                            "1d + 13%d per 0.15s",
                                            "fully pops the bloon"
                                        ],
                                        "attack cooldown does not start until the previous target has been popped"
                                    ],
                                    "gains money-grab attack",
                                    [
                                        "∞r, 14s, targets strongest bloon",
                                        "attack cooldown cannot be buffed",
                                        "can see past obstacles",
                                        "applies money-snared status",
                                        [
                                            "1d + 13%d per 0.15s",
                                            "fully pops the bloon",
                                            "+$100"
                                        ],
                                        "attack cooldown does not start until the previous target has been popped"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "040 - Jungle's Bounty",
                                "content": [
                                    "thorn buffed",
                                    [
                                        "+20r (55r)"
                                    ],
                                    "gains jungle-bounty ability (40s cooldown, 15s initial)",
                                    [
                                        "gain $1,000"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "050 - Spirit of the Forest",
                                "content": [
                                    "thorn buffed",
                                    [
                                        "+13d (14d)"
                                    ],
                                    "jungle-bounty replaced by spirit-bounty",
                                    [
                                        "gain $1,500",
                                        "activates all jungle-bounty abilities"
                                    ],
                                    "+$2,500 end of round income",
                                    "vine-grab buffed",
                                    [
                                        "time between grabs 0.3s, damages per 0.15s"
                                    ],
                                    "gains brambles attack",
                                    [
                                        "∞p, 55r zone, camo",
                                        "range increases by 6 units every 2s until the map is covered",
                                        "anywhere in range: 2d/0.5s, 10cd/0.5s, 10md/0.5s, normal type",
                                        "within 100r: +1d (3d), +4cd (15cd), +4md (15md)",
                                        "within 50r: +1d (4d), +4cd (20cd), +4md (20md)",
                                        "note: as a damage-over-time, the damage cannot be buffed"
                                    ],
                                    "gains jungle-lives ability (40s cooldown, 15s initial)",
                                    [
                                        "+25 lives"
                                    ]
                                ]
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Druidic Reach",
                                "content": [
                                    "thorn buffed",
                                    [
                                        "+10r (45r)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "002 - Heart of Vengeance",
                                "content": [
                                    "all attacks buffed",
                                    [
                                        "+x% speed, capped at +100%, where x is 20 plus the number of lives below the amount when this upgrade was purchased",
                                        "note that this is a buff to attack speed, NOT attack cooldown"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "003 - Druid of Wrath",
                                "content": [
                                    "all attacks buffed",
                                    [
                                        "+5% speed per 10 damage dealt, capped at +100%, reset if this druid is idle for 2s",
                                        "note again that this is a speed buff, and that it stacks multiplicatively with any buff gained from tier 2"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "004 - Poplust",
                                "content": [
                                    "gains poplust buff",
                                    [
                                        "affects Druids in range, including self",
                                        "+15%p, +15% speed",
                                        "can stack (additively) up to 5 times total",
                                        "note that this is yet another speed buff, which also stacks multiplicatively with tiers 2 and 3"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "005 - Avatar of Wrath",
                                "content": [
                                    "thorn buffed",
                                    [
                                        "+3d (4), +5r (50), 50%s (0.55), longer projectile lifespan",
                                        "+1d for every 3000 RBE on screen, capped at +24"
                                    ]
                                ]
                            }
                        }
                    }
                }
            }
        },
        "support": {
            "type": "nestedArrays",
            "entries": {
                "monkeyVillage": {
                    "name": "Monkey Village",
                    "data": {
                        "base": [
                            "$1,000 (1,000 MM)",
                            "size: 11 radius",
                            "placeable on: land",
                            "40r",
                            "support buff",
                            [
                                "affects anything in range, excluding self",
                                "+10%r"
                            ]
                        ],
                        "top": {
                            "1": {
                                "name": "100 - Bigger Radius",
                                "content": [
                                    "+8r (48r)"
                                ]
                            },
                            "2": {
                                "name": "200 - Jungle Drums",
                                "content": [
                                    "support buffed",
                                    [
                                        "85%s"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "300 - Primary Training",
                                "content": [
                                    "gains primary-support",
                                    [
                                        "affects primary towers and Pat Fusty in range",
                                        "+15%p (minimum +1p), +10%r, increased projectile speed"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "400 - Primary Mentoring",
                                "content": [
                                    "primary-support buffed",
                                    [
                                        "+5r, free tier 1 upgrades, -20% ability cooldown time, +40% hero XP"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "500 - Primary Expertise",
                                "content": [
                                    "+7r (55r)",
                                    "primary-support buffed",
                                    [
                                        "+30%p (minimum +3p), free tier 2 upgrades, -10% ability cooldown time (-30% ability cooldown time), +40% hero XP (+80% hero XP)"
                                    ],
                                    "gains catapult attack",
                                    [
                                        "10d, +240cd (250cd), +240md (250md), 100p, ∞r, 2.5s, normal type, camo",
                                        "blimps use 10p",
                                        "jumps to a nearby (90 units) target after hitting",
                                    ]
                                ]
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Grow Blocker",
                                "content": [
                                    "applies antigrow status (cannot regrow) to bloons in range",
                                    [
                                        "200p"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "020 - Radar Scanner",
                                "content": [
                                    "gains camo detection",
                                    "support buffed",
                                    [
                                        "grants camo"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "030 - Monkey Intelligence Bureau",
                                "content": [
                                    "support buffed",
                                    [
                                        "grants normal type damage"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "040 - Call to Arms",
                                "content": [
                                    "gains call-to-arms ability (45s cooldown, 8s duration, battle ready)",
                                    [
                                        "buffs towers in range: +50%p, 66.67%s"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "050 - Homeland Defense",
                                "content": [
                                    "call-to-arms replaced by homeland-defense (45s cooldown, 17s duration, battle ready)",
                                    [
                                        "buffs all towers: +100%p, 50%s"
                                    ]
                                ]
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Monkey Business",
                                "content": [
                                    "support buffed",
                                    [
                                        "+10% discount to base towers and upgrades up to tier 3"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "002 - Monkey Commerce",
                                "content": [
                                    "support buffed",
                                    [
                                        "+5% discount to base towers and upgrades up to tier 3, stackable up to 3 times total",
                                        "Note: this means that the maximum discount from villages is (10+3*5)% = 25%, which stacks additively with support temples"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "003 - Monkeyconomy",
                                "content": [
                                    "crate attack",
                                    [
                                        "$400 income, split between 4 crates throughout the round",
                                        "15?s lifetime"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "004 - Monkey City",
                                "content": [
                                    "crate buffed",
                                    [
                                        "+$1,200 income ($1,600)",
                                        "+5%r"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "005 - Monkeyopolis",
                                "content": [
                                    "gains bonus-eco buff",
                                    [
                                        "+20% bloon eco from bloon sends with positive eco, and -20% eco loss from bloon sends with negative eco"
                                    ],
                                    "xx3+ villages in range are sacrificed to the village when upgraded",
                                    "crate buffed",
                                    [
                                        "$4,200 base + $600 per $2,000 spent on sacrifices per round",
                                        "divided throughout the round into at most 10 crates, but at least 6 crates"
                                    ]
                                ]
                            }
                        }
                    }
                },
                "bananaFarm": {
                    "name": "Banana Farm",
                    "data": {
                        "base": [
                            "$1,000 (1,000 MM)",
                            "size: 27 units*27 units",
                            "placeable on: land",
                            "40r",
                            "banana attack",
                            [
                                "$120 income, split between 3 bananas throughout the round",
                                "15s lifetime"
                            ]
                        ],
                        "top": {
                            "1": {
                                "name": "100 - Increased Production",
                                "content": [
                                    "banana attack buffed",
                                    [
                                        "+2j (5j), +$80 income ($200)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "200 - Greater Production",
                                "content": [
                                    "banana attack buffed",
                                    [
                                        "+2j (7j), +$80 income ($280)"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "300 - Banana Plantation",
                                "content": [
                                    "banana attack buffed",
                                    [
                                        "+9j (16j), +$360 income ($640)"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "400 - Banana Research Facility",
                                "content": [
                                    "banana attack buffed",
                                    [
                                        "5j, $3,000 income"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "500 - Banana Central",
                                "content": [
                                    "banana attack buffed",
                                    [
                                        "+$11,000 income ($14,000)"
                                    ],
                                    "gains productivity buff",
                                    [
                                        "+20% income to all 4xx farms",
                                        "stacks multiplicatively with x2x valuable bananas"
                                    ]
                                ]
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Long Life Bananas",
                                "content": [
                                    "banana attack buffed",
                                    [
                                        "+15s lifetime (30s)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "020 - Valuable Bananas",
                                "content": [
                                    "banana attack buffed",
                                    [
                                        "+25% income"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "030 - Monkey Bank",
                                "content": [
                                    "banana attack buffed",
                                    [
                                        "+$50 income ($150)",
                                        "money is held in the bank instead of being emitted as bananas, to be collected at any time",
                                        "$550 end of round income",
                                        "bank's balance increases by 20% at the end of a round, up to a capacity of $14,000",
                                        [
                                            "this includes the end of round income"
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "130: +$100 income ($250) (adds money 2 more times)",
                                        "230: +$100 income ($350) (adds money 2 more times)",
                                        "032: autocollects if the balance is capped at the end of a round"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "040 - IMF loan",
                                "content": [
                                    "banana attack buffed",
                                    [
                                        "+$6,000 capacity ($20,000)"
                                    ],
                                    "gains loan ability (90s cooldown, 20s initial)",
                                    [
                                        "loan $20,000, to be repaid by taking 50% from all future income",
                                    ]
                                ]
                            },
                            "5": {
                                "name": "050 - Monkey-Nomics",
                                "content": [
                                    "banana attack buffed",
                                    [
                                        "+$10,000 capacity ($30,000)"
                                    ],
                                    "loan replaced by grant (50s cooldown, 25s initial)",
                                    [
                                        "gain $20k, which does not need to be repaid"
                                    ]
                                ]
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Quality Soil",
                                "content": [
                                    "top and middle path upgrades are discounted +20%",
                                ]
                            },
                            "2": {
                                "name": "002 - Banana Salvage",
                                "content": [
                                    "banana attack buffed",
                                    [
                                        "expired bananas are worth 50%"
                                    ],
                                    "+10% sellback (80%)"
                                ]
                            },
                            "3": {
                                "name": "003 - Marketplace",
                                "content": [
                                    "banana attack buffed",
                                    [
                                        "+11j (14j), +$440 income ($560)"
                                    ],
                                    "bananas are automatically collected immediately"
                                ]
                            },
                            "4": {
                                "name": "004 - Central Market",
                                "content": [
                                    "banana attack buffed",
                                    [
                                        "+$1,680 income ($2,240)"
                                    ],
                                    "gains marketplace buff",
                                    [
                                        "+10% end of round income to all xx3+ buccaneers",
                                        "stacks additively up to 10 times (+100%)"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "005 - Monkey Wall Street",
                                "content": [
                                    "$10,000 end of round income"
                                ]
                            }
                        }
                    }
                },
                "spikeFactory": {
                    "name": "Spike Factory",
                    "data": {
                        "base": [
                            "$600 (1,000 MM)",
                            "size: 8 radius",
                            "placeable on: land",
                            "spikes attack",
                            [
                                "34r, 1.75s passive",
                                "places spikes randomly on track",
                                [
                                    "1d, 5p, 40s lifetime, camo"
                                ]
                            ]
                        ],
                        "top": {
                            "1": {
                                "name": "100 - Bigger Stacks",
                                "content": [
                                    "spikes buffed",
                                    [
                                        "+5p (10p)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "200 - White Hot Spikes",
                                "content": [
                                    "spikes buffed",
                                    [
                                        "normal type"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "300 - Spiked Balls",
                                "content": [
                                    "spikes buffed",
                                    [
                                        "+1d (2d), +6cd (8cd), +1fd (3fd), +4p (14p)",
                                        [
                                            "total: 28 damage per spike, 112 ceramic, 42 fortified"
                                        ]
                                    ]
                                ]
                            },
                            "4": {
                                "name": "400 - Spiked Mines",
                                "content": [
                                    "spikes buffed",
                                    [
                                        "at 100%p and on expire: explosion",
                                        [
                                            "10d, +2cd (12cd), +1fd (11fd), 60p, 28r blast, explosion type",
                                            "applies burn status: 1d/2s, 6s duration"
                                        ],
                                        "note: the projectile timing out triggers both explosions, but using up pierce only triggers one"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "500 - Super Mines",
                                "content": [
                                    "spikes buffed",
                                    [
                                        "200%s (3.5s)",
                                        "+40d (50d), +18cd (70cd), +14fd",
                                        "on damage: mini-explosion",
                                        [
                                            "20d, +10cd (30cd), +5fd (25fd), 30p, 20r blast, normal type"
                                        ]
                                    ],
                                    "explosion buffed",
                                    [
                                        "+990d (1000d), +250fd (1251fd), 0cd, +40p (80p), 100r, normal type"
                                    ]
                                ]
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Faster Production",
                                "content": [
                                    "spikes buffed",
                                    [
                                        "80%s (1.4s)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "020 - Even Faster Production",
                                "content": [
                                    "spikes buffed",
                                    [
                                        "70%s (0.98s)"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "030 - MOAB SHREDR",
                                "content": [
                                    "spikes buffed",
                                    [
                                        "+4md (5md)",
                                        [
                                            "total: 25 moab damage per spike",
                                            [
                                                "130: 50 moab damage per spike"
                                            ]
                                        ],
                                        "Bonnie's beast-minecart is not MOAB-class for this attack",
                                    ]
                                ]
                            },
                            "4": {
                                "name": "040 - Spike Storm",
                                "content": [
                                    "gains spike-storm ability (40s cooldown, 1s duration, battle ready)",
                                    [
                                        "∞r, 0.005s",
                                        "not affected by smart-boost",
                                        "places storm-spikes randomly on track",
                                        [
                                            "1d, +4md (5md), 5i, sharp type",
                                            [
                                                "total: 25md per spike"
                                            ],
                                            "10-13s lifetime"
                                        ]
                                    ], 
                                    "crosspath",
                                    [
                                        "140: storm-spikes +5p (10p)",
                                        [
                                            "total: 50md per spike"
                                        ],
                                        "041: storm-spikes +50% lifetime"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "050 - Carpet of Spikes",
                                "content": [
                                    "spikes buffed",
                                    [
                                        "+2d (3d, 7md), 50%s (0.49s)",
                                        [
                                            "total: 15 damage per spike, 35 moab",
                                            [
                                                "150: 30 damage per spike, 70 moab"
                                            ]
                                        ]
                                    ],
                                    "storm-spikes buffed",
                                    [
                                        "+5d (6d), +2md (8md)",
                                        [
                                            "total: 30 damage per spike, 40 moab",
                                            [
                                                "150: 60 damage per spike, 70 moab"
                                            ]
                                        ]
                                    ],
                                    "spike-storm is additionally triggered automatically every 15s"
                                ]
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Long Reach",
                                "content": [
                                    "spikes buffed",
                                    [
                                        "+8r (42r), 75s lifetime"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "002 - Smart Spikes",
                                "content": [
                                    "gains extra targeting options",
                                    [
                                        "close: closest point to the tower in range",
                                        "far: furthest point from the tower in range",
                                        [
                                            "note: the track has discrete points so there is usually only one furthest point; it is impossible to tell in advance whether it will be at the \"start\" or \"end\" of the visible range"
                                        ],
                                        "smart: point closest to the exit, on active paths only"
                                    ],
                                    "smart-boost ability (2.5s duration, passive: triggered by the start of a round)",
                                    [
                                        "25%s (0.4375s)"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "003 - Long Life Spikes",
                                "content": [
                                    "spikes buffed",
                                    [
                                        "170s lifetime"
                                    ],
                                    "smart-boost buffed",
                                    [
                                        "5s duration"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "004 - Deadly Spikes",
                                "content": [
                                    "spikes buffed",
                                    [
                                        "+2d (3d), 240s lifetime",
                                        [
                                            "total: 15 damage per spike",
                                            [
                                                "104: 30 damage per spike"
                                            ]
                                        ]
                                    ]
                                ]
                            },
                            "5": {
                                "name": "005 - Perma-Spike",
                                "content": [
                                    "spikes buffed",
                                    [
                                        "+8d (11d), +45p (50p), 3.0s, 300s lifetime",
                                        [
                                            "total: 550 damage per spike"
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "105: +40p (90p)",
                                        [
                                            "total: 990 damage per spike"
                                        ]
                                    ]
                                ]
                            }
                        }
                    }
                },
                "engineerMonkey": {
                    "name": "Engineer Monkey",
                    "data": {
                        "base": [
                            "$400 (1,000 MM)",
                            "size: 7 radius",
                            "placeable on: land",
                            "nail attack",
                            [
                                "1d, 3p, 40r, 0.7s, sharp type"
                            ]
                        ],
                        "top": {
                            "1": {
                                "name": "100 - Sentry Gun",
                                "content": [
                                    "gains build-sentry attack",
                                    [
                                        "40r, 10.0s",
                                        "cannot be buffed by attack cooldown buffs",
                                        "places a sentry subtower randomly on land",
                                        [
                                            "25s lifetime",
                                            "nail attack",
                                            [
                                                "1d, 2p, 0.98s, 45r, sharp type"
                                            ],
                                            "inherits buffs or can be buffed directly",
                                            "cannot be buffed by alchemist"
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "110: sentry nail +4r (49r)",
                                        "120: sentry nail +1md (2md), +1fd (2fd)",
                                        "101: sentry nail +1p (3p), shatter type",
                                        "102: sentry nail applies pinned status on damage"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "200 - Faster Engineering",
                                "content": [
                                    "build-sentry buffed",
                                    [
                                        "60%s (6.0)"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "300 - Sprockets",
                                "content": [
                                    "nail buffed",
                                    [
                                        "60%s (0.42s)"
                                    ],
                                    "sentry buffed",
                                    [
                                        "nail 60%s (0.59s)"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "400 - Sentry Expert",
                                "content": [
                                    "build-sentry buffed",
                                    [
                                        "places crushing-sentry, boom-sentry, cold-sentry, energy-sentry on a cycle, but sentries may be skipped depending on the bloons on screen",
                                        [
                                            "crushing-sentry",
                                            [
                                                "spiked-ball attack",
                                                [
                                                    "2d, 1cd (3cd), 16p, 50r, 1.1s, sharp type"
                                                ],
                                                "skipped if there are leads (unless black or white are also present), but never skipped if there are ceramics"
                                            ],
                                            "boom-sentry",
                                            [
                                                "bomb attack",
                                                [
                                                    "50r, 0.9s",
                                                    "on contact: explosion",
                                                    [
                                                        "2d, 30p, 18r blast, explosion type"
                                                    ]
                                                ],
                                                "skipped if there are blacks (unless white or lead are also present)"
                                            ],
                                            "cold-sentry",
                                            [
                                                "ice-ball attack",
                                                [
                                                    "50r, 1.5s",
                                                    "on contact: freeze",
                                                    [
                                                        "1d, 15p, 12r blast, cold type",
                                                        "applies frozen status: 1.5s duration",
                                                        "applies permafrost status: 50% slow"
                                                    ]
                                                ],
                                                "skipped if there are whites (unless lead or black are also present)"
                                            ],
                                            "energy-sentry",
                                            [
                                                "laser attack",
                                                [
                                                    "2d, 8p, 50r, 0.57s, energy type"
                                                ],
                                                "skipped if there are leads (unless black or white are also present), and always skipped if there are purples"
                                            ]
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "410: all sentries +4r",
                                        "420: all sentry attacks +1md and +1fd",
                                        "401: spiked-ball 28p, bomb 38p, ice-ball 19p, laser 10p",
                                        "402: all sentry attacks can apply pinned status"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "500 - Sentry Champion",
                                "content": [
                                    "build-sentry buffed: places champion-sentry",
                                    [
                                        "plasma attack",
                                        [
                                            "3d, 5p, 50r, 0.03, plasma type",
                                            "on expire: selfdestruct attack",
                                            [
                                                "260d, 100p, 45r blast, plasma type",
                                                "activates either when sold or 2s after expiring"
                                            ]
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "501: champion-sentry plasma +1p (6p)",
                                        "502: champion-sentry plasma applies pinned status"
                                    ]
                                ]
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Larger Service Area",
                                "content": [
                                    "all attacks buffed",
                                    [
                                        "+20r (60r)"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "020 - Deconstruction",
                                "content": [
                                    "nail buffed",
                                    [
                                        "+1md (2md), +1fd (2fd)"
                                    ]
                                ]
                            },
                            "3": {
                                "name": "030 - Cleansing Foam",
                                "content": [
                                    "gains place-foam attack",
                                    [
                                        "60r, 2s",
                                        "places foam on track based on targeting, defaults on close",
                                        [
                                            "1ld, 20p, normal type",
                                            [
                                                "this means that fortified leads will not be one-shot"
                                            ],
                                            "8.5s lifetime",
                                            "decamo, degrow",
                                            "deleads DDTs",
                                            "note: pierce is used even if a bloon does not have camo or regrow properties to remove"
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "230: place-foam 60%s (1.2s)",
                                        "031: foam +10p (30p)"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "040 - Overclock",
                                "content": [
                                    "nail buffed",
                                    [
                                        "+12p (15p)"
                                    ],
                                    "gains overclock ability (45s cooldown, battle ready)",
                                    [
                                        "chosen tower's reload time is reduced by 40% (attacks 1.667x faster) for the next (105 - 15 tier)s",
                                        "a hero's tier is considered to be floor(level / 4), so level 20 is equivalent to tier 5",
                                        "farms can be overclocked, giving them a +50% income buff",
                                        "villages can be overclocked, even when not upgraded to 5xx: the range is increased by 25%",
                                        "note: affects subtowers"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "050 - Ultraboost",
                                "content": [
                                    "nail buffed",
                                    [
                                        "+15p (30p)"
                                    ],
                                    "overclock replaced by ultraboost (20s cooldown, battle ready)",
                                    [
                                        "applies overclock buff as before",
                                        [
                                            "60s duration on tier 5 towers"
                                        ],
                                        "additionally applies a permanent 8% reload buff, which stacks additively up to 5 times",
                                        "this means that after the first ultraboost, the tower has a 92% reload multiplier, after the second it is replaced by 84%, and so on down to 60% (1.667x faster)",
                                        "in the case of villages, this is +5% to range, then 10%, etc, up to +25%r"
                                    ]
                                ]
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Oversize Nails",
                                "content": [
                                    "nail buffed",
                                    [
                                        "+5p (8p), shatter type"
                                    ]
                                ]
                            },
                            "2": {
                                "name": "002 - Pin",
                                "content": [
                                    "nail buffed",
                                    [
                                        "on damage: applies pinned status",
                                        [
                                            "1s duration, 100% slow, blimps are immune"
                                        ]
                                    ]
                                ]
                            },
                            "3": {
                                "name": "003 - Double Gun",
                                "content": [
                                    "nail buffed",
                                    [
                                        "50%s (0.35s)"
                                    ]
                                ]
                            },
                            "4": {
                                "name": "004 - Bloon Trap",
                                "content": [
                                    "gains build-trap attack",
                                    [
                                        "places a trap on the closest point of track in range",
                                        [
                                            "500i, 9.0s",
                                            "can only place a trap after a deploy time of 2.1s of collecting the previous trap",
                                            [
                                                "note: the first trap is placed immediately"
                                            ],
                                            "pops any visible non-MOAB-class bloon up to its impact limit",
                                            "once full, can be collected manually (100r) or automatically (5s)",
                                            [
                                                "when collected, gives $1.5 times the amount of natural RBE collected",
                                                [
                                                    "does not give money for bloons captured over the impact limit (max $750)"
                                                ]
                                            ],
                                            "attack rate and deploy time can't be buffed"
                                        ]
                                    ],
                                    "crosspath",
                                    [
                                        "204: trap build time 60%s (5.4s)",
                                        "014: allows the build-trap attack to be targeted manually anywhere in range, and retargeting the trap collects the current one"
                                    ]
                                ]
                            },
                            "5": {
                                "name": "005 - XXXL Trap",
                                "content": [
                                    "trap buffed",
                                    [
                                        "10,000i, 1.5s",
                                        "deploy time 1.5s",
                                        "cash per trap is now natural bloon RBE captured*0.75",
                                        "can trap blimps other than BAD",
                                        "can capture blimps beyond the pierce limit"
                                    ]
                                ]
                            }
                        }
                    }
                }
            }
        },
        "heroes": {
            "type": "legacy-heroes",
            "entries": {
                "quincy": {
                    "name": "Quincy",
                    "data": {
                        "1": [
                            "$450",
                            ["hero_level", {"multiplier": 1.0, "curve": "Quincy"}],
                            "Unlock Cost: None",
                            "size: 7 radius",
                            "placeable on: land",
                            "arrow attack",
                            [
                                "1d, 4p, 50r, 0.95s, sharp type",
                                "jumps to nearby (50 units) targets"
                            ]
                        ],
                        "2": [
                            "arrow buffed",
                            [
                                "+2p (6p)"
                            ]
                        ],
                        "3": [
                            "gains rapid-shot ability (45s cooldown, (2 + 0.5l, l = level number)s duration (3.5s this level), battle ready)",
                            [
                                "33.33%s"
                            ]
                        ],
                        "4": [
                            "arrow buffed",
                            [
                                "+2r (52)"
                            ]
                        ],
                        "5": [
                            "gains camo detection"
                        ],
                        "6": [
                            "arrow buffed",
                            [
                                "+1j (2j 10° spread)"
                            ]
                        ],
                        "7": [
                            "every third arrow replaced by bomb-arrow",
                            [
                                "same stats as arrow",
                                "on first hit: explosion",
                                [
                                    "1d, 10p, 25.7r blast, explosion type",
                                    "note: bloons can be hit by both the arrow and the explosion"
                                ]
                            ]
                        ],
                        "8": [
                            "all attacks buffed",
                            [
                                "+2md (3md)"
                            ]
                        ],
                        "9": [
                            "arrow and bomb-arrow buffed",
                            [
                                "+2p (8p)"
                            ]
                        ],
                        "10": [
                            "gains storm-of-arrows ability (60s cooldown, 3s duration, battle ready)",
                            [
                                "6d, 6md (12), ∞p, 100r zone, 0.05s, sharp type",
                                "7.5% chance of hitting (per frame)",
                                "can rehit after 0.05s",
                                "centered according to Quincy's targeting when activated"
                            ]
                        ],
                        "11": [
                            "arrow buffed",
                            [
                                "0.6s"
                            ]
                        ],
                        "12": [
                            "arrow buffed",
                            [
                                "+1p (9p)"
                            ]
                        ],
                        "13": [
                            "arrow buffed",
                            [
                                "+2r (54r)"
                            ]
                        ],
                        "14": [
                            "all attacks buffed",
                            [
                                "+2md (5md)"
                            ]
                        ],
                        "15": [
                            "rapid-shot buffed",
                            [
                                "35s cooldown, is now a 25%s buff"
                            ]
                        ],
                        "16": [
                            "arrow buffed",
                            [
                                "0.4s"
                            ]
                        ],
                        "17": [
                            "arrow buffed",
                            [
                                "+25% lifetime"
                            ],
                            "bomb-arrow buffed",
                            [
                                "every other arrow is replaced by bomb-arrow"
                            ]
                        ],
                        "18": [
                            "arrow buffed",
                            [
                                "0.25s"
                            ],
                            "storm-of-arrows buffed",
                            [
                                "50s cooldown",
                                "10% chance to hit"
                            ]
                        ],
                        "19": [
                            "arrow buffed",
                            [
                                "+1j (3j), +2p (11p)"
                            ]
                        ],
                        "20": [
                            "arrow buffed: 0.2s",
                            "storm-of-arrows buffed",
                            [
                                "+9d (15d), +9md (30md)",
                                "15% chance to hit"
                            ]
                        ]
                    }
                },
                "cyberQuincy": {
                    "name": "Cyber Quincy",
                    "data": {
                        "1": [
                            "$450",
                            ["hero_level", {"multiplier": 1.0, "curve": "Quincy"}],
                            "Unlock Cost: 2,000 MM + 40,000 Quincy Points",
                            "size: 7 radius",
                            "placeable on: land",
                            "arrow attack",
                            [
                                "1d, 4p, 50r, 0.95s, sharp type, 600 projectile speed",
                                "jumps to nearby (50 units) targets",
                                "can see past obstacles"
                            ]
                        ],
                        "2": [
                            "arrow buffed",
                            [
                                "+2p (6p)"
                            ]
                        ],
                        "3": [
                            "gains cyber-shot ability (45s cooldown, (5 + 0.5l, l = level number)s duration (6.5s this level), 11.25s initial)",
                            [
                                "+15p (21p), +5r (55r), 84.75%s?",
                            ]
                        ],
                        "4": [
                            "arrow buffed",
                            [
                                "+2r (52)"
                            ]
                        ],
                        "5": [
                            "gains camo detection"
                        ],
                        "6": [
                            "arrow buffed",
                            [
                                "+1j (2j 10° spread)"
                            ]
                        ],
                        "7": [
                            "every third arrow replaced by bomb-arrow",
                            [
                                "same stats as arrow",
                                "on first hit: emp-blast",
                                [
                                    "300%d, 200%p, 25.7r blast, plasma type",
                                    "note: bloons can be hit by both the arrow and the emp-blast"
                                ]
                            ]
                        ],
                        "8": [
                            "all attacks buffed",
                            [
                                "+2md (3md)"
                            ]
                        ],
                        "9": [
                            "arrow and bomb-arrow buffed",
                            [
                                "+2p (8p)"
                            ]
                        ],
                        "10": [
                            "gains cyber-storm ability (60s cooldown, 1.5s duration, battle ready)",
                            [
                                "25d, 25md (12), ∞p, 50r zone, 0.05s, plasma type",
                                "7.5% chance of hitting (per frame)",
                                "can rehit after 0.05s",
                                "centered according to Quincy's targeting when activated"
                            ]
                        ],
                        "11": [
                            "arrow buffed",
                            [
                                "+2d (3d)"
                            ]
                        ],
                        "12": [
                            "arrow buffed",
                            [
                                "+1p (9p)"
                            ]
                        ],
                        "13": [
                            "arrow buffed",
                            [
                                "+2r (54r)"
                            ]
                        ],
                        "14": [
                            "all attacks buffed",
                            [
                                "+8md (11md)"
                            ]
                        ],
                        "15": [
                            "cyber-shot buffed",
                            [
                                "35s cooldown, is now a +30p (39) buff to arrow and a 500%d buff to emp-blast"
                            ]
                        ],
                        "16": [
                            "arrow buffed",
                            [
                                "+5d (8d)"
                            ]
                        ],
                        "17": [
                            "arrow buffed",
                            [
                                "+25% lifetime"
                            ],
                            "emp-arrow buffed",
                            [
                                "every other arrow is replaced by emp-arrow"
                            ]
                        ],
                        "18": [
                            "arrow buffed",
                            [
                                "+27d (35d)"
                            ],
                            "cyber-storm buffed",
                            [
                                "50s cooldown",
                                "+10d (35), +10md (70)",
                                "10% chance to hit"
                            ]
                        ],
                        "19": [
                            "arrow buffed",
                            [
                                "+1j (3j), +2p (11p)"
                            ]
                        ],
                        "20": [
                            "arrow buffed: 0.2s",
                            "cyber-storm buffed",
                            [
                                "+25d (60d), +25md (120md)",
                                "15% chance to hit"
                            ]
                        ]
                    }
                },
                "gwendolin": {
                    "name": "Gwendolin",
                    "data": {
                        "1": [
                            "$700",
                            ["hero_level", {"multiplier": 1.0, "curve": "Striker Jones"}],
                            "Unlock Cost: Free",
                            "size: 7 radius",
                            "placeable on: land",
                            "fire attack",
                            [
                                "1d, +1ld (2ld), +1frd (2frd), 3p, 38r, 0.5s, fire type"
                            ]
                        ],
                        "2": [
                            "fire buffed",
                            [
                                "+2p (5p)"
                            ]
                        ],
                        "3": [
                            "gains cocktail-of-fire ability (45s cooldown, 7.5s initial)",
                            [
                                "can see past obstacles",
                                "places wall-of-fire on the track, targetable manually anywhere within range",
                                [
                                    "1d, +1ld (2ld), +1frd (2frd), 26p, 15r zone, 0.24s, fire type, camo",
                                    "12s lifetime"
                                ]
                            ]
                        ],
                        "4": [
                            "gains heat-it-up attack",
                            [
                                "3d, ∞p, 38r blast, fire type",
                                "triggered by either the 28th shot or any shot after 4.5s (whichever takes longer)",
                                "applies heat-it-up buff to towers in range",
                                [
                                    "10s duration, +1ld, +1frd, +1p, lead popping"
                                ]
                            ]
                        ],
                        "5": [
                            "fire buffed",
                            [
                                "+2p (7p)"
                            ],
                            "grants pyro-expert buff",
                            [
                                "affects all 4+xx Tack Shooter, xx3+ Mortar Monkey, and x3+x Monkey Wizard",
                                "+10%r, 90%s"
                            ]
                        ],
                        "6": [
                            "fire buffed",
                            [
                                "applies burn status",
                                [
                                    "1d/1.5s, fire type, 3.05s duration"
                                ]
                            ]
                        ],
                        "7": [
                            "heat-it-up buffed",
                            [
                                "+5r (43r)"
                            ]
                        ],
                        "8": [
                            "fire buffed",
                            [
                                "+1j (2j)"
                            ]
                        ],
                        "9": [
                            "fire buffed",
                            [
                                "+1d (2d)"
                            ]
                        ],
                        "10": [
                            "gains firestorm ability (60s cooldown, battle ready)",
                            [
                                "5d, +1ld (7ld), +1frd (7frd), 20md, ∞p, ∞r, fire type",
                                "applies burn status",
                                [
                                    "1d/0.5s or 15md/1s, fire type, 8s duration"
                                ],
                                "applies heat-it-up to all towers on screen, buffed",
                                [
                                    "8s duration, +1d"
                                ]
                            ]
                        ],
                        "11": [
                            "fire buffed",
                            [
                                "+3r (41r)"
                            ],
                            "heat-it-up buffed",
                            [
                                "+3r (46r)"
                            ]
                        ],
                        "12": [
                            "fire buffed",
                            [
                                "0.4s"
                            ],
                            "heat-it-up now triggered by 34 shots"
                        ],
                        "13": [
                            "fire buffed",
                            [
                                "+3p (10p), increased projectile speed"
                            ]
                        ],
                        "14": [
                            "wall-of-fire buffed",
                            [
                                "+1d (2d, 3ld, 3frd)",
                                "applies burn status to blimps",
                                [
                                    "5md/1s, 10s duration"
                                ]
                            ]
                        ],
                        "15": [
                            "fire buffed",
                            [
                                "0.3s",
                            ],
                            "heat-it-up now triggered by 40 shots"
                        ],
                        "16": [
                            "all attacks buffed",
                            [
                                "normal type"
                            ],
                            "firestorm burn buffed",
                            [
                                "10s duration"
                            ]
                        ],
                        "17": [
                            "heat-it-up buffed",
                            [
                                "+1d (3d, 4frd), +1ld (5ld)"
                            ]
                        ],
                        "18": [
                            "fire buffed",
                            [
                                "0.15s"
                            ],
                            "heat-it-up now triggered by 64 shots",
                            "pyro-expert buffed",
                            [
                                "+20%r, 20%s"
                            ]
                        ],
                        "19": [
                            "fire buffed",
                            [
                                "+1j (3j)"
                            ]
                        ],
                        "20": [
                            "firestorm buffed",
                            [
                                "+5d (10d, 12ld, 11frd), +40md (50md); burn 2d/0.5s, 50md/1s"
                            ]
                        ]
                    }
                },
                "scientistGwendolin": {
                    "name": "Scientist Gwendolin",
                    "data": {
                        "1": [
                            "$700",
                            ["hero_level", {"multiplier": 1.0, "curve": "Striker Jones"}],
                            "Unlock Cost: 2,000 MM + 40,000 Gwendolin Points",
                            "size: 7 radius",
                            "placeable on: land",
                            "fire attack",
                            [
                                "1d, +1gld (2gld), +1ad (2ad), 3p, 38r, 0.5s, fire type"
                            ]
                        ],
                        "2": [
                            "fire buffed",
                            [
                                "+2p (5p)"
                            ]
                        ],
                        "3": [
                            "gains chemical-cocktail ability (30s cooldown, 7.5s initial)",
                            [
                                "can see past obstacles",
                                "places wall-of-fire on the track, targetable manually anywhere within range",
                                [
                                    "2d, 40p, 15r zone, 0.24s, fire type, camo",
                                    "6s lifetime",
                                    "deals 4 seconds' worth of acid or glue status on targets each tick and removes the status (minimum 1d)"
                                ]
                            ]
                        ],
                        "4": [
                            "gains heat-it-up attack",
                            [
                                "3d, ∞p, 38r blast, fire type",
                                "triggered by either the 36th shot or any shot after 4.5s (whichever takes longer)",
                                "applies heat-it-up buff to towers in range",
                                [
                                    "8s duration, +1p, +1gld, +1ad lead popping,"
                                ]
                            ]
                        ],
                        "5": [
                            "fire buffed",
                            [
                                "+2p (7p)"
                            ],
                            "grants chemical-expert buff",
                            [
                                "affects all x2+x Glue Gunner and x3+x Alchemist",
                                "90%s",
                                "main projectile buffed",
                                [
                                    "+10%r"
                                ]
                            ]
                        ],
                        "6": [
                            "fire buffed",
                            [
                                "applies burn status",
                                [
                                    "1d/1.5s, fire type, 3.05s duration"
                                ]
                            ]
                        ],
                        "7": [
                            "heat-it-up buffed",
                            [
                                "+5r (43r)"
                            ]
                        ],
                        "8": [
                            "fire buffed",
                            [
                                "+1j (2j)"
                            ]
                        ],
                        "9": [
                            "fire buffed",
                            [
                                "+1d (2d)"
                            ]
                        ],
                        "10": [
                            "gains science-storm ability (60s cooldown, battle ready)",
                            [
                                "5d, 20md, ∞p, ∞r, fire type",
                                "deals 4 seconds' worth of acid or glue status on targets and removes the status (minimum 1d)",
                                "applies burn status",
                                [
                                    "1d/0.25s or 15md/0.5s, fire type, 3s duration"
                                ],
                                "applies heat-it-up to all towers on screen, buffed",
                                [
                                    "+1d"
                                ]
                            ]
                        ],
                        "11": [
                            "fire buffed",
                            [
                                "+3r (41r)"
                            ],
                            "heat-it-up buffed",
                            [
                                "+3r (46r)"
                            ]
                        ],
                        "12": [
                            "fire buffed",
                            [
                                "0.4s"
                            ],
                            "heat-it-up now triggered by 48 shots"
                        ],
                        "13": [
                            "fire buffed",
                            [
                                "+3p (10p), increased projectile speed"
                            ]
                        ],
                        "14": [
                            "wall-of-fire buffed",
                            [
                                "+1d (2d)",
                                "applies burn status to blimps",
                                [
                                    "5md/0.5s, 5s duration"
                                ]
                            ]
                        ],
                        "15": [
                            "fire buffed",
                            [
                                "0.3s",
                            ],
                            "heat-it-up now triggered by 64 shots"
                        ],
                        "16": [
                            "all attacks buffed",
                            [
                                "normal type"
                            ],
                            "firestorm burn buffed",
                            [
                                "4.5s duration"
                            ]
                        ],
                        "17": [
                            "heat-it-up buffed",
                            [
                                "+1d, +1ld (+2ld), +1frd (+2frd)"
                            ]
                        ],
                        "18": [
                            "fire buffed",
                            [
                                "0.15s"
                            ],
                            "heat-it-up now triggered by 70 shots",
                            "chemical-expert buffed",
                            [
                                "80%s",
                                "main projectile buffed",
                                [
                                    "+20%r"
                                ]
                            ]
                        ],
                        "19": [
                            "fire buffed",
                            [
                                "+1j (3j)"
                            ]
                        ],
                        "20": [
                            "science-storm buffed",
                            [
                                "+3d (8d), +20md (30md); burn 2d/0.25s, 50md/0.5s",
                                "deals 12 seconds' worth of acid or glue status on targets",
                            ]
                        ]
                    }
                },
                "obyn": {
                    "name": "Obyn Greenfoot",
                    "data": {
                        "1": [
                            "$650",
                            ["hero_level", {"multiplier": 1.0, "curve": "Striker Jones"}],
                            "Unlock Cost: 3,000 MM",
                            "size: 7 radius",
                            "placeable on: land",
                            "spirit attack",
                            [
                                "2d, 4p, 43r, 1.35s, plasma type",
                                "moderate homing (360 turn rate)",
                                "can see past obstacles"
                            ]
                        ],
                        "2": [
                            "gains natures-wrath buff",
                            [
                                "affects druids in range",
                                "+1p"
                            ]
                        ],
                        "3": [
                            "gains brambles ability (35s cooldown, 10s initial)",
                            [
                                "places brambles on the track",
                                [
                                    "manually placed anywhere within range or defaulting to close",
                                    "1d, 40p, sharp type",
                                    "95s lifetime"
                                ]
                            ]
                        ],
                        "4": [
                            "gains natures-ward attack",
                            [
                                "18s",
                                "places on closest part of the track",
                                "places a ward-totem on the track",
                                [
                                    "28r, 25% slow / 12.5% for blimps, 15s lifetime",
                                    "note: camos can be slowed, but the totem does not allow camos in range to be targeted by subs"
                                ]
                            ]
                        ],
                        "5": [
                            "spirit buffed",
                            [
                                "1.1s"
                            ]
                        ],
                        "6": [
                            "spirit buffed",
                            [
                                "+5p (9p), increased projectile speed"
                            ]
                        ],
                        "7": [
                            "brambles buffed",
                            [
                                "+40p (80p)"
                            ]
                        ],
                        "8": [
                            "ward-totem buffed",
                            [
                                "35% slow / 17.5% for blimps"
                            ]
                        ],
                        "9": [
                            "spirit buffed",
                            [
                                "+3d (5d)"
                            ]
                        ],
                        "10": [
                            "gains wall-of-trees ability (90s cooldown, battle ready)",
                            [
                                "places a tree on the track",
                                [
                                    "manually placed anywhere within range or defaulting to close",
                                    "2,000p",
                                    "pops anything up to its pierce limit and grants ($2 x natural bloon RBE eaten) split across 10 bananas once full",
                                    "note: blimps can only be captured if their remaining RBE doesn't exceed the tree's remaining pierce, however bloons can bypass this"
                                ]
                            ]
                        ],
                        "11": [
                            "natures-wrath buffed",
                            [
                                "affects magic towers in range",
                                "+2p, +5r",
                                "note: stacks with the existing +1p for druids"
                            ]
                        ],
                        "12": [
                            "spirit buffed",
                            [
                                "0.8s"
                            ],
                            "natures-wrath buffed",
                            [
                                "affects druids in range",
                                "+1d"
                            ]
                        ],
                        "13": [
                            "spirit buffed",
                            [
                                "+5p (14p), increased projectile speed"
                            ],
                            "natures-wrath buffed",
                            [
                                "affects druids in range",
                                "+10% discount to tier 5 upgrades"
                            ]
                        ],
                        "14": [
                            "spirit buffed",
                            [
                                "+2d (7d)"
                            ]
                        ],
                        "15": [
                            "natures-ward buffed",
                            [
                                "12s"
                            ],
                            "ward-totem buffed",
                            [
                                "34r, 50% slow / 25% for blimps"
                            ]
                        ],
                        "16": [
                            "brambles buffed",
                            [
                                "+420p (500p), normal type"
                            ]
                        ],
                        "17": [
                            "spirit buffed",
                            [
                                "0.5s"
                            ],
                            "65r"
                        ],
                        "18": [
                            "gains improved-wrath buff",
                            [
                                "affects all xx3+ druids",
                                "whenever a round starts, wrath counter is set to the maximum 200 pops for +100% speed"
                            ]
                        ],
                        "19": [
                            "spirit buffed",
                            [
                                "+4d (10d)"
                            ]
                        ],
                        "20": [
                            "tree buffed",
                            [
                                "+6,000p (8,000p)"
                            ]
                        ]
                    }
                },
                "oceanObyn": {
                    "name": "Ocean Obyn",
                    "data": {
                        "1": [
                            "$650",
                            ["hero_level", {"multiplier": 1.0, "curve": "Striker Jones"}],
                            "Unlock Cost: 2,000 MM + 40,000 Obyn Greenfoot Points",
                            "size: 7 radius",
                            "placeable on: land and water",
                            "spirit attack",
                            [
                                "2d, 4p, 43r, 1.35s, plasma type",
                                "moderate homing (360 turn rate)",
                                "can see past obstacles"
                            ]
                        ],
                        "2": [
                            "gains wrath-of-the-sea buff",
                            [
                                "affects magic monkeys in range",
                                "+1p"
                            ]
                        ],
                        "3": [
                            "gains living-coral ability (35s cooldown, 10s initial)",
                            [
                                "Places living-coral on the track",
                                [
                                    "manually placed anywhere within range or defaulting to close",
                                    "1d, 20p, sharp type",
                                    "can regenerate",
                                    [
                                        "+10p/10s, max 100p"
                                    ],
                                    "95s lifetime"
                                ]
                            ]
                        ],
                        "4": [
                            "gains oceans-ward attack",
                            [
                                "18s",
                                "places on closest part of the track",
                                "places a ward-totem on the track",
                                [
                                    "32r, every 4th unique bloon that passes over is knocked back 50-300 units, 15s lifetime",
                                    "note: camos can be knocked back, but the totem does not allow camos in range to be targeted by subs"
                                ]
                            ]
                        ],
                        "5": [
                            "spirit buffed",
                            [
                                "1.1s"
                            ]
                        ],
                        "6": [
                            "spirit buffed",
                            [
                                "+5p (9p), increased projectile speed"
                            ]
                        ],
                        "7": [
                            "living-coral buffed",
                            [
                                "+20p (40p)"
                            ],
                            "regenerate buffed",
                            [
                                "+20p/10s, max 200p"
                            ]
                        ],
                        "8": [
                            "ward-totem buffed",
                            [
                                "knocks back every 3rd bloon"
                            ]
                        ],
                        "9": [
                            "spirit buffed",
                            [
                                "+3d (5d)"
                            ]
                        ],
                        "10": [
                            "gains unleash-the-krakens ability (90s cooldown, battle ready)",
                            [
                                "places 2 krakens randomly on the track",
                                [
                                    "one kraken favors opponent bloons and one favors natural bloons when it comes to targeting"
                                ],
                                "1,200p each",
                                "pops anything up to its pierce limit and grants ($2 x natural bloon RBE eaten) split across 10 bananas once full",
                                "note: blimps can only be captured if their remaining RBE doesn't exceed the kraken's remaining pierce, however bloons can bypass this"
                            ]
                        ],
                        "11": [
                            "wrath-of-the-sea buffed",
                            [
                                "affects magic towers in range except druids",
                                "+2p, +5r",
                                "note: stacks with the existing +1p for magic monkeys",
                                "note: this means that druids still only get +1p"
                            ]
                        ],
                        "12": [
                            "spirit buffed",
                            [
                                "0.8s"
                            ],
                            "wrath-of-the-sea buffed",
                            [
                                "affects druids in range",
                                "+1d"
                            ]
                        ],
                        "13": [
                            "spirit buffed",
                            [
                                "+5p (14p), increased projectile speed"
                            ],
                            "wrath-of-the-sea buffed",
                            [
                                "affects magic towers in range",
                                "+10% discount to tier 5 upgrades"
                            ]
                        ],
                        "14": [
                            "spirit buffed",
                            [
                                "+4d (9d)"
                            ]
                        ],
                        "15": [
                            "oceans-ward buffed",
                            [
                                "12s"
                            ],
                            "ward-totem buffed",
                            [
                                "knocks back every other bloon",
                                "stuns every 3rd blimp for 0.5s"
                            ]
                        ],
                        "16": [
                            "living-coral buffed",
                            [
                                "+160p (200p), normal type"
                            ],
                            "regenerate buffed",
                            [
                                "+100p/10s, max 800p"
                            ]
                        ],
                        "17": [
                            "spirit buffed",
                            [
                                "0.5s"
                            ],
                            "65r"
                        ],
                        "18": [
                            "gains crystal-clarity buff",
                            [
                                "affects all magic monkeys",
                                "85%s"
                            ]
                        ],
                        "19": [
                            "spirit buffed",
                            [
                                "+5d (14d)"
                            ]
                        ],
                        "20": [
                            "unleash-the-krakens buffed",
                            [
                                "+2,800p (4,000p)"
                            ]
                        ]
                    }
                },
                "strikerJones": {
                    "name": "Striker Jones",
                    "data": {
                        "1": [
                            "$750",
                            ["hero_level", {"multiplier": 1.0, "curve": "Striker Jones"}],
                            "Unlock Cost: 3,000 MM",
                            "size: 6 radius",
                            "placeable on: land",
                            "gains bomb attack",
                            [
                                "55r, 1.2s",
                                "on contact: explosion",
                                [
                                    "1d, 10p, 15r blast, explosion type"
                                ]
                            ]
                        ],
                        "2": [
                            "explosion buffed",
                            [
                                "+4r"
                            ]
                        ],
                        "3": [
                            "gains concussive-shell ability (16s cooldown, 5s initial)",
                            [
                                "∞r, strong priority",
                                "can see past obstacles",
                                "on contact: explosion",
                                [
                                    "2d, 48p, 27r blast, normal type, 1s stun"
                                ]
                            ]
                        ],
                        "4": [
                            "gains explosive-expert buff",
                            [
                                "affects all bomb and mortar towers 90%s"
                            ]
                        ],
                        "5": [
                            "applies blast-weakness status to all bloons",
                            [
                                "black property has a 50% chance of being ignored by explosions"
                            ]
                        ],
                        "6": [
                            "explosion buffed",
                            [
                                "+10p (20p), +50%r (28.5r)"
                            ]
                        ],
                        "7": [
                            "bomb buffed",
                            [
                                "+1d (2d)"
                            ],
                            "gains mortar-expert buff",
                            [
                                "affects all mortars",
                                "+25% blast radius"
                            ]
                        ],
                        "8": [
                            "gains bomb-expert buff",
                            [
                                "affects bomb towers in range",
                                "+40%p, +15%r"
                            ]
                        ],
                        "9": [
                            "bomb buffed",
                            [
                                "0.9s"
                            ],
                            "concussive-shell buffed",
                            [
                                "+10d (12d) +10p (58p)",
                                "stuns bloons for 5s and blimps for 3s"
                            ]
                        ],
                        "10": [
                            "gains artillery-command ability (30s cooldown, battle ready)",
                            [
                                "every bomb and mortar ability is activated without affecting their ability cooldowns"
                            ]
                        ],
                        "11": [
                            "bomb buffed",
                            [
                                "0.65s"
                            ]
                        ],
                        "12": [
                            "bomb buffed",
                            [
                                "+1d (3d), +3r (58r)"
                            ]
                        ],
                        "13": [
                            "bomb buffed",
                            [
                                "0.5s"
                            ]
                        ],
                        "14": [
                            "concussive-shell buffed",
                            [
                                "+50%r (40.5r)",
                                "50% longer stun (7.5s on bloons, 4.5s on blimps)"
                            ]
                        ],
                        "15": [
                            "concussive-shell buffed",
                            [
                                "11s cooldown"
                            ]
                        ],
                        "16": [
                            "bomb buffed",
                            [
                                "0.35s"
                            ]
                        ],
                        "17": [
                            "bomb buffed",
                            [
                                "+1d (4d), +2r (60r)"
                            ]
                        ],
                        "18": [
                            "explosive-expert buffed",
                            [
                                "75%s"
                            ]
                        ],
                        "19": [
                            "bomb buffed",
                            [
                                "0.2s"
                            ],
                            "blast-weakness buffed",
                            [
                                "black property is always ignored by explosives"
                            ]
                        ],
                        "20": [
                            "artillery-command buffed",
                            [
                                "for the next 10s, every bomb and mortar has double damage and double pierce"
                            ]
                        ]
                    }
                },
                "bikerBones": {
                    "name": "Biker Bones",
                    "data": {
                        "1": [
                            "$750",
                            ["hero_level", {"multiplier": 1.0, "curve": "Striker Jones"}],
                            "Unlock Cost: 2,000 MM + 40,000 Striker Jones Points",
                            "size: 6 radius",
                            "placeable on: land",
                            "gains bomb attack",
                            [
                                "55r, 1.2s",
                                "on contact: explosion",
                                [
                                    "1d, 10p, 15r blast, explosion type",
                                    "targets the densest area of bloons on the track",
                                    "50% chance for normal type"
                                ]
                            ]
                        ],
                        "2": [
                            "explosion buffed",
                            [
                                "+4r"
                            ]
                        ],
                        "3": [
                            "gains concussive-fire ability (24s cooldown, 7.5s initial)",
                            [
                                "∞r, strong priority",
                                "can see past obstacles",
                                "on contact: explosion",
                                [
                                    "3d, 72p, 40r blast, normal type, 1s stun",
                                    "on damage: applies burn status",
                                    [
                                        "2d/1.5s, lasts for 4s"
                                    ]
                                ]
                            ]
                        ],
                        "4": [
                            "gains explosive-expert buff",
                            [
                                "affects all bomb and mortar towers",
                                "90%s"
                            ]
                        ],
                        "5": [
                            "applies blast-weakness status to all bloons",
                            [
                                "black property has a 50% chance of being ignored by explosions"
                            ]
                        ],
                        "6": [
                            "explosion buffed",
                            [
                                "+10p (20), +50%r (28.5)"
                            ]
                        ],
                        "7": [
                            "bomb buffed",
                            [
                                "+1d (2d)"
                            ],
                            "gains mortar-expert buff",
                            [
                                "affects all mortars",
                                "+25% blast radius"
                            ]
                        ],
                        "8": [
                            "gains biker-expert buff",
                            [
                                "affects all towers in range, excluding self",
                                "+30%p, +5%r"
                            ]
                        ],
                        "9": [
                            "bomb buffed",
                            [
                                "0.9s"
                            ],
                            "concussive-fire buffed",
                            [
                                "+17d (20d), +10p (82p)",
                                "stuns bloons for 5s and blimps for 3s"
                            ]
                        ],
                        "10": [
                            "gains artillery-fire ability (60s cooldown, 7s duration, battle ready)",
                            [
                                "every bomb and mortar has double damage and applies burn status",
                                [
                                    "2d/1.5s, lasts for 4s"
                                ]
                            ]
                        ],
                        "11": [
                            "bomb buffed",
                            [
                                "0.65s"
                            ]
                        ],
                        "12": [
                            "bomb buffed",
                            [
                                "+1d (3), +3r (58)"
                            ]
                        ],
                        "13": [
                            "bomb buffed",
                            [
                                "0.5s"
                            ]
                        ],
                        "14": [
                            "concussive-fire buffed",
                            [
                                "+50%r (60r)",
                                "50% longer stun (7.5s on bloons, 4.5s on blimps)"
                            ]
                        ],
                        "15": [
                            "concussive-fire buffed",
                            [
                                "16s cooldown"
                            ]
                        ],
                        "16": [
                            "bomb buffed",
                            [
                                "0.35s"
                            ]
                        ],
                        "17": [
                            "bomb buffed",
                            [
                                "+1d (4d), +2r (60r)"
                            ]
                        ],
                        "18": [
                            "explosive-expert buffed",
                            [
                                "81%s"
                            ]
                        ],
                        "19": [
                            "bomb buffed",
                            [
                                "0.2s"
                            ],
                            "blast-weakness buffed",
                            [
                                "black property is always ignored by explosives"
                            ]
                        ],
                        "20": [
                            "artillery-fire buffed",
                            [
                                "now triples damage and pierce of all bombs and mortars"
                            ]
                        ]
                    }
                },
                "captainChurchill": {
                    "name": "Captain Churchill",
                    "data": {
                        "1": [
                            "$1500",
                            ["hero_level", {"multiplier": 1.5, "curve": "Quincy"}],
                            "Unlock Cost: 4,000 MM",
                            "size: 8 radius",
                            "placeable on: land",
                            "shell attack",
                            [
                                "3i, 63r, 0.7s",
                                "on contact: explosion",
                                [
                                    "1d, 15p, 18r blast, explosion type"
                                ]
                            ]
                        ],
                        "2": [
                            "explosion buffed",
                            [
                                "+3p (18)"
                            ]
                        ],
                        "3": [
                            "gains armor-piercing-shells ability (35s cooldown, 9s duration, battle ready)",
                            [
                                "all attacks have normal type",
                                "buffs shell",
                                [
                                    "+4i (7i)"
                                ],
                                "buffs explosion",
                                [
                                    "+3cd (4cd), +3md (4md)"
                                ],
                                "duration increases 0.5s per level (7.5 + 0.5 level)"
                            ]
                        ],
                        "4": [
                            "shell buffed",
                            [
                                "+3r (66r)"
                            ]
                        ],
                        "5": [
                            "gains machine-gun attack",
                            [
                                "1d, 1p, 66r, 0.1s, sharp type, targets first always"
                            ]
                        ],
                        "6": [
                            "gains camo detection"
                        ],
                        "7": [
                            "shell buffed",
                            [
                                "+1i (4i)"
                            ],
                            "explosion buffed",
                            [
                                "+1d (2)"
                            ]
                        ],
                        "8": [
                            "shell buffed",
                            [
                                "0.5s"
                            ]
                        ],
                        "9": [
                            "shell buffed",
                            [
                                "+1i (5i)"
                            ]
                        ],
                        "10": [
                            "gains moab-barrage ability (60s cooldown, battle ready)",
                            [
                                "gains up to 10 barrage attacks, one for each of the 10 strongest blimps",
                                [
                                    "250d, 0.5s, normal type",
                                    "attacks up to 16 times, or until target pops"
                                ]
                            ]
                        ],
                        "11": [
                            "explosion buffed: +5p (23p)"
                        ],
                        "12": [
                            "shell buffed",
                            [
                                "+1i (6i)"
                            ],
                            "explosion buffed",
                            [
                                "+1d (3d)"
                            ]
                        ],
                        "13": [
                            "armor-piercing-shells buffed",
                            [
                                "buffs explosion",
                                [
                                    "+1d (4d), +7cd (11cd), +7md (11md)"
                                ]
                            ]
                        ],
                        "14": [
                            "explosion buffed",
                            [
                                "+1d (4d)"
                            ],
                            "machine-gun buffed",
                            [
                                "+1d (2d)"
                            ]
                        ],
                        "15": [
                            "explosion buffed",
                            [
                                "+1fd"
                            ],
                            "machine-gun buffed",
                            [
                                "+1fd"
                            ]
                        ],
                        "16": [
                            "shell buffed",
                            [
                                "0.3s"
                            ]
                        ],
                        "17": [
                            "armor-piercing-shells buffed",
                            [
                                "buffs explosion",
                                [
                                    "+2d (6d), +12cd (18cd), +12md (18md)"
                                ]
                            ]
                        ],
                        "18": [
                            "explosion buffed",
                            [
                                "+1d (5d)"
                            ]
                        ],
                        "19": [
                            "shell buffed: +1i (7i)"
                        ],
                        "20": [
                            "moab-barrage buffed",
                            [
                                "30s cooldown",
                                "buffs explosion",
                                [
                                    "+3d (8d)"
                                ],
                                "barrage buffed",
                                [
                                    "800d"
                                ]
                            ]
                        ]
                    }
                },
                "sentaiChurchill": {
                    "name": "Sentai Churchill",
                    "data": {
                        "1": [
                            "$1500",
                            ["hero_level", {"multiplier": 1.5, "curve": "Quincy"}],
                            "Unlock Cost: 2,000 MM + 40,000 Captain Churchill Points",
                            "size: 8 radius",
                            "placeable on: land",
                            "shell attack",
                            [
                                "3i, 63r, 0.7s",
                                "shell uses up all impacts upon hitting a purple bloon",
                                "on contact: explosion",
                                [
                                    "1d, 5p, 18r blast, explosion type",
                                    "on damage: applies shock effect",
                                    [
                                        "1d/1s, lasts for 1s"
                                    ]
                                ],
                                "on damage: applies shock effect",
                                [
                                    "1d/1s, lasts for 1s"
                                ]
                            ]
                        ],
                        "2": [
                            "explosion buffed",
                            [
                                "+2p (7p)"
                            ]
                        ],
                        "3": [
                            "gains high-energy-shells ability (45s cooldown, 9s duration, battle ready)",
                            [
                                "all attacks have normal type",
                                "buffs shell: 58%s (0.406s)",
                                "buffs shock: 1d/0.5s, lasts for 1.5s",
                                "duration increases 0.5s per level (7.5 + 0.5 level)"
                            ]
                        ],
                        "4": [
                            "shell buffed",
                            [
                                "+3r (66r)"
                            ]
                        ],
                        "5": [
                            "gains machine-gun attack",
                            [
                                "1d, 1p, 66r, 0.1s, sharp type, targets first always"
                            ]
                        ],
                        "6": [
                            "gains camo detection"
                        ],
                        "7": [
                            "shell buffed",
                            [
                                "+1i (4i)"
                            ],
                            "explosion buffed",
                            [
                                "+1d (2d)"
                            ]
                        ],
                        "8": [
                            "shell buffed",
                            [
                                "0.5s"
                            ]
                        ],
                        "9": [
                            "shell buffed",
                            [
                                "+1i (5i)"
                            ]
                        ],
                        "10": [
                            "gains orbital-barrage ability (60s cooldown, battle ready)",
                            [
                                "gains up to 5 barrage attacks, one for each of the 5 strongest blimps",
                                [
                                    "90d, 0.1s, normal type",
                                    "attacks up to 50 times, and attacks the target's children with remaining shells"
                                ]
                            ]
                        ],
                        "11": [
                            "explosion buffed",
                            [
                                "+2p (10p)"
                            ]
                        ],
                        "12": [
                            "shell buffed",
                            [
                                "+1i (6i)"
                            ],
                            "explosion buffed",
                            [
                                "+1d (3d)"
                            ]
                        ],
                        "13": [
                            "high-energy-shells buffed",
                            [
                                "buffs shock",
                                [
                                    "3d/0.5s"
                                ]
                            ]
                        ],
                        "14": [
                            "explosion buffed",
                            [
                                "+1d (4d)"
                            ],
                            "machine-gun buffed",
                            [
                                "+1d (2d)"
                            ]
                        ],
                        "15": [
                            "explosion buffed",
                            [
                                "+1fd"
                            ],
                            "machine-gun buffed",
                            [
                                "+1fd"
                            ]
                        ],
                        "16": [
                            "shell buffed",
                            [
                                "0.3s"
                            ]
                        ],
                        "17": [
                            "high-energy-shells buffed",
                            [
                                "buffs shock",
                                [
                                    "6d/0.5s"
                                ]
                            ]
                        ],
                        "18": [
                            "explosion buffed",
                            [
                                "+1d (5d)"
                            ]
                        ],
                        "19": [
                            "shell buffed",
                            [
                                "+1i (7i)"
                            ]
                        ],
                        "20": [
                            "orbital-barrage buffed",
                            [
                                "30s cooldown",
                                "buffs explosion",
                                [
                                    "+3d (8d)"
                                ],
                                "buffs machine-gun",
                                [
                                    "+3d (5d)"
                                ]
                            ],
                            "barrage buffed",
                            [
                                "300d"
                            ]
                        ]
                    }
                },
                "benjamin": {
                    "name": "Benjamin",
                    "data": {
                        "1": [
                            "$900",
                            ["hero_level", {"multiplier": 1, "curve": "Striker Jones"}],
                            "Unlock Cost: 5,000 MM",
                            "size: 7 radius",
                            "placeable on: land",
                            "20r",
                            "$100 end of round income"
                        ],
                        "2": [
                            "+$50 end of round income ($150)"
                        ],
                        "3": [
                            "gains biohack ability (45s cooldown, 11.25s initial)",
                            [
                                "applies hacked buff to the nearest 4 towers",
                                [
                                    "6s duration, +1d",
                                    "cannot attack for 2s after the buff expires"
                                ]
                            ]
                        ],
                        "4": [
                            "gains skimming",
                            [
                                "+$1 income for each new natural bloon that spawns"
                            ]
                        ],
                        "5": [
                            "+$100 end of round income ($250)",
                            "gains bank-hack buff",
                            [
                                "affects all x3+x farms",
                                "+12% income during the round"
                            ]
                        ],
                        "6": [
                            "+5 end of round lives",
                            [
                                "note: cannot go above 150 lives"
                            ]
                        ],
                        "7": [
                            "gains trojan attack",
                            [
                                "∞r, 5s-7s randomly",
                                "targets a random bloon with 2+ children up to MOAB",
                                "affected bloon spawns no children"
                            ]
                        ],
                        "8": [
                            "+$150 end of round income ($400)"
                        ],
                        "9": [
                            "bank-hack buffed",
                            [
                                "now +18%"
                            ]
                        ],
                        "10": [
                            "gains syphon-funding ability (65s cooldown, 17s duration, battle ready)",
                            [
                                "all new spawns below a DDT or BAD are downgraded by one layer",
                                "can only downgrade up to 10 ZOMGs in an ability, but still continues to downgrade other bloons after this threshold is reached"
                            ]
                        ],
                        "11": [
                            "+$400 end of round income ($800)"
                        ],
                        "12": [
                            "skimming buffed",
                            [
                                "+$2 income"
                            ]
                        ],
                        "13": [
                            "biohack buffed",
                            [
                                "affects 6 towers, 35s cooldown"
                            ],
                            "hacked buffed",
                            [
                                "now +2d, 8s duration"
                            ]
                        ],
                        "14": [
                            "+5 end of round lives (10)",
                            "can heal to 250 lives"
                        ],
                        "15": [
                            "+$1,200 end of round income ($2,000)"
                        ],
                        "16": [
                            "trojan buffed",
                            [
                                "3s-4s"
                            ]
                        ],
                        "17": [
                            "+$2,000 end of round income ($4,000)"
                        ],
                        "18": [
                            "gains camo detection",
                            "trojan buffed",
                            [
                                "can now target BFBs and DDTs"
                            ]
                        ],
                        "19": [
                            "hacked buffed",
                            [
                                "now +3d, 9s duration"
                            ]
                        ],
                        "20": [
                            "syphon-funding buffed",
                            [
                                "45s cooldown",
                                "can affect DDTs"
                            ]
                        ]
                    }
                },
                "djBenjammin": {
                    "name": "DJ Benjammin'",
                    "data": {
                        "1": [
                            "$900",
                            ["hero_level", {"multiplier": 1, "curve": "Striker Jones"}],
                            "Unlock Cost: 2,000 MM + 40,000 Benjamin Points",
                            "size: 7 radius",
                            "placeable on: land",
                            "20r",
                            "+$75 end of round income"
                        ],
                        "2": [
                            "+$37 end of round income ($112)"
                        ],
                        "3": [
                            "gains good-vibes ability (45s cooldown, 11.25s initial)",
                            "applies party-time buff to the nearest 5 towers",
                            [
                                "6s duration, +1d",
                                "cannot attack for 1s after the buff expires"
                            ]
                        ],
                        "4": [
                            "gains skimming",
                            [
                                "+$1 income for each new natural bloon that spawns"
                            ]
                        ],
                        "5": [
                            "+$75.5 end of round income ($187.5)",
                            "gains bank-hack buff",
                            [
                                "affects all x3+x farms",
                                "+12% income during the round"
                            ]
                        ],
                        "6": [
                            "+5 end of round lives",
                            [
                                "note: cannot go above 150 lives"
                            ]
                        ],
                        "7": [
                            "gains trojan attack",
                            [
                                "∞r, 5s-7s randomly",
                                "targets a random bloon with 2+ children to MOAB",
                                "affected bloon spawns no children"
                            ]
                        ],
                        "8": [
                            "+$112.5 end of round income ($300)"
                        ],
                        "9": [
                            "bank-hack buffed",
                            [
                                "now +18%"
                            ]
                        ],
                        "10": [
                            "gains beatdown ability (65s cooldown, battle ready)",
                            [
                                "12 strongest bloons on screen up to a BFB are downgraded by 1 layer",
                                "can only downgrade up to 3 BFBs in an ability, but can still downgrade other bloons if this threshold is reached"
                            ]
                        ],
                        "11": [
                            "+$300 end of round income ($600)"
                        ],
                        "12": [
                            "skimming buffed",
                            [
                                "+$2 income"
                            ]
                        ],
                        "13": [
                            "good-vibes buffed",
                            [
                                "affects 7 towers, 35s cooldown"
                            ],
                            "party-time buffed",
                            [
                                "now +2d, 8s duration"
                            ]
                        ],
                        "14": [
                            "+5 end of round healing (10)",
                            "can heal to 250 lives"
                        ],
                        "15": [
                            "+$900 end of round income (+$1,500)"
                        ],
                        "16": [
                            "trojan buffed: 3s-4s"
                        ],
                        "17": [
                            "+$1,500 end of round income ($3,000)"
                        ],
                        "18": [
                            "gains camo detection",
                            "trojan buffed",
                            [
                                "can now target BFBs and DDTs"
                            ]
                        ],
                        "19": [
                            "good-vibes buffed",
                            [
                                "affects 8 towers"
                            ],
                            "party-time buffed",
                            [
                                "now +3d, 9s duration, towers now aren't disabled after buff expires"
                            ]
                        ],
                        "20": [
                            "beatdown buffed",
                            [
                                "can affect DDTs",
                                "can affect up to 10 BFBs",
                                "can affect up to 4 ZOMGs"
                            ]
                        ]
                    }
                },
                "ezili": {
                    "name": "Ezili",
                    "data": {
                        "1": [
                            "$600",
                            ["hero_level", {"multiplier": 1.06, "curve": "Striker Jones"}],
                            "Unlock Cost: 5,000 MM",
                            "size: 7 radius",
                            "placeable on: land",
                            "gains camo detection",
                            "curse attack",
                            [
                                "1d, 1i, 40r, 1.2s, plasma type",
                                "can see past obstacles",
                                "applies cursed status",
                                [
                                    "1d/2.5s, 2.6s duration",
                                    "if the target is already cursed, its duration is refreshed"
                                ]
                            ],
                            "splash attack",
                            [
                                "1d, 5p, 8r blast, plasma type",
                                "note: does not affect original target"
                            ]
                        ],
                        "2": [
                            "curse buffed",
                            [
                                "+3r (43r)"
                            ],
                            "wizard-synergy buff",
                            [
                                "affects Wizard Monkeys in range",
                                "+2p"
                            ]
                        ],
                        "3": [
                            "heartstopper ability",
                            [
                                "45s cooldown, 10s duration",
                                "∞p, ∞r, 0.1s",
                                "applies heartstop status: all bloons on screen cannot regrow and lose purple immunities for 10s"
                            ]
                        ],
                        "4": [
                            "splash buffed",
                            [
                                "applies cursed status"
                            ]
                        ],
                        "5": [
                            "curse buffed",
                            [
                                "1s"
                            ]
                        ],
                        "6": [
                            "cursed status buffed",
                            [
                                "1d/1.8s, 5.5s duration"
                            ]
                        ],
                        "7": [
                            "sacrifice ability",
                            [
                                "90s cooldown",
                                "costs 10 lives",
                                "places sacrificial-totem at selected point",
                                [
                                    "20s lifetime",
                                    "78r",
                                    "grants support buff",
                                    [
                                        "affects all towers in range",
                                        "+1p, +20%r, 85%s, camo detection, increased projectile speed",
                                        [
                                            "wizards instead get +2p, +20%r, 66%s, camo detection, increased projectile speed"
                                        ]
                                    ]
                                ],
                                "note: sacrificing lives does trigger effects based on losing lives (xx5 bomb, xx5 sniper, xx2+ druid)"
                            ]
                        ],
                        "8": [
                            "all attacks buffed",
                            [
                                "+19md"
                            ],
                            "cursed status buffed",
                            [
                                "2d/1.8s, 30md/1.8s"
                            ]
                        ],
                        "9": [
                            "all attacks buffed",
                            [
                                "on damage: decamo, degrow, and defortify bloons (not blimps)"
                            ]
                        ],
                        "10": [
                            "moab-hex ability (60s cooldown, 8.5s duration, battle ready)",
                            [
                                "targets one blimp, excluding BADs, according to current priority",
                                "applies hex status",
                                [
                                    "(4%+1)d/1s, max tick 7500d",
                                    "spawns no children",
                                    "may stack",
                                    "transfers to the next target if it pops with time remaining"
                                ]
                            ]
                        ],
                        "11": [
                            "curse attack buffed",
                            [
                                "+2r (45r)"
                            ],
                            "gains buff for all xx4+ wizards: zombloon +1p, zmoab +10p"
                        ],
                        "12": [
                            "all attacks buffed: +10md",
                            "heartstopper ability buffed",
                            [
                                "40s cooldown, 15s duration",
                                "heartstop status buffed: 15s duration, normal damage type to every tower"
                            ]
                        ],
                        "13": [
                            "splash buffed",
                            [
                                "+10p (15p), +3r (11r)"
                            ]
                        ],
                        "14": [
                            "cursed status buffed",
                            [
                                "2d/1s, 30md/1s, 4.05s duration"
                            ]
                        ],
                        "15": [
                            "curse buffed",
                            [
                                "+2r (47r)"
                            ],
                            "cursed status buffed",
                            [
                                "6.05s duration"
                            ]
                        ],
                        "16": [
                            "sacrifice ability buffed",
                            [
                                "costs 1 life"
                            ],
                            "sacrificial-totem subtower buffed",
                            [
                                "60s lifetime"
                            ]
                        ],
                        "17": [
                            "splash buffed",
                            [
                                "+10p (25p), +2r (13r)"
                            ]
                        ],
                        "18": [
                            "curse buffed",
                            [
                                "0.8s"
                            ]
                        ],
                        "19": [
                            "cursed status buffed",
                            [
                                "3d/1s, 31md/1s"
                            ]
                        ],
                        "20": [
                            "all attacks buffed",
                            [
                                "+20md"
                            ],
                            "moab-hex ability buffed",
                            [
                                "40s cooldown"
                            ],
                            "hex status buffed",
                            [
                                "(8%+1)d per tick, has a hard limit of 7500d per tick, can affect BADs",
                                "ticks once every 1s"
                            ]
                        ]
                    }
                },
                "smudgeCattEzili": {
                    "name": "Smudge Catt Ezili",
                    "data": {
                        "1": [
                            "$600",
                            ["hero_level", {"multiplier": 1.06, "curve": "Striker Jones"}],
                            "Unlock Cost: 2,000 MM + 40,000 Ezili Points",
                            "size: 7 radius",
                            "placeable on: land",
                            "gains camo detection",
                            "curse attack",
                            [
                                "1d, 1i, 40r, 1.2s, plasma type",
                                "can see past obstacles",
                                "applies cursed status",
                                [
                                    "1d/2.5s, 2.6s duration",
                                    "if the target is already cursed, its duration is refreshed"
                                ]
                            ],
                            "splash attack",
                            [
                                "1d, 5p, 8r blast, plasma type",
                                "note: does not affect original target"
                            ]
                        ],
                        "2": [
                            "curse buffed",
                            [
                                "+3r (43r)"
                            ],
                            "splash buffed",
                            [
                                "+3p (8p), +3r (11r)"
                            ]
                        ],
                        "3": [
                            "screech ability (45s cooldown, battle ready)",
                            [
                                "∞p, ∞r",
                                "all regrow bloons on screen instantly lose the regrow property",
                                "all purple bloons on screen instantly lose the purple property"
                            ]
                        ],
                        "4": [
                            "splash buffed",
                            [
                                "applies cursed status"
                            ]
                        ],
                        "5": [
                            "curse buffed",
                            [
                                "1s"
                            ]
                        ],
                        "6": [
                            "cursed status buffed",
                            [
                                "1d/1.8s, 5.5s duration"
                            ]
                        ],
                        "7": [
                            "scratch ability (40s cooldown, 11s duration, battle ready)",
                            [
                                "costs 5 lives",
                                "places scratching-post at selected point",
                                [
                                    "78r",
                                    "grants support buff",
                                    [
                                        "affects all towers in range",
                                        "+1p, +20%r, 85%s, camo detection, increased projectile speed",
                                        [
                                            "Smudge Catt Ezili gets an additional 50%s (42.5%s total) and +(6*level)md"
                                        ]
                                    ]
                                ],
                                "note: sacrificing lives does trigger effects based on losing lives (xx5 bomb, xx5 sniper, xx2+ druid)"
                            ]
                        ],
                        "8": [
                            "all attacks buffed",
                            [
                                "+19md"
                            ],
                            "cursed buffed",
                            [
                                "2d/1.8s, 30md/1.8s"
                            ]
                        ],
                        "9": [
                            "all attacks buffed",
                            [
                                "on damage: decamo, degrow, and defortify bloons (not blimps)"
                            ]
                        ],
                        "10": [
                            "go-smudge-go ability (60s cooldown, 5s duration, battle ready)",
                            [
                                "targets the three strongest blimps, excluding BADs",
                                "applies clawed status",
                                [
                                    "(4%+1)d/1s, max tick 5000d",
                                    "spawns no children"
                                ]
                            ]
                        ],
                        "11": [
                            "curse buffed",
                            [
                                "+2r (45r)"
                            ],
                            "+9 end of round lives every other round (does not go above starting lives)",
                            [
                                "the first set of lives is given immediately"
                            ]
                        ],
                        "12": [
                            "all attacks buffed",
                            [
                                "+10md"
                            ],
                            "screech ability buffed",
                            [
                                "40s cooldown, 15s duration",
                                "additionally removes the camo property and all immunities for Bloons on screen"
                            ]
                        ],
                        "13": [
                            "splash buffed",
                            [
                                "+10p (16p), +3r (14r)"
                            ]
                        ],
                        "14": [
                            "cursed status buffed",
                            [
                                "2d/1s, 30md/1s, 4.05s duration"
                            ]
                        ],
                        "15": [
                            "curse buffed",
                            [
                                "+2r (47r)"
                            ],
                            "cursed status buffed",
                            [
                                "6.05s duration"
                            ]
                        ],
                        "16": [
                            "scratch ability buffed: costs 1 life",
                            "scratching-post subtower buffed",
                            [
                                "60s lifetime"
                            ]
                        ],
                        "17": [
                            "splash buffed: +10p (26p), +2r (16r)"
                        ],
                        "18": [
                            "curse buffed: 0.8s"
                        ],
                        "19": [
                            "cursed status buffed: 3d/1s, 31md/1s"
                        ],
                        "20": [
                            "all attacks buffed",
                            [
                                "+20md"
                            ],
                            "go-smudge-go ability buffed",
                            [
                                "40s cooldown"
                            ],
                            "clawed status buffed",
                            [
                                "(4.5%+1)d per tick, has a hard limit of 5000d per tick, can affect BADs",
                                "ticks once every 0.5714s"
                            ]
                        ]
                    }
                },
                "patFusty": {
                    "name": "Pat Fusty",
                    "data": {
                        "1": [
                            "$900",
                            ["hero_level", {"multiplier": 1.15, "curve": "Quincy"}],
                            "Unlock Cost: 5,000 MM",
                            "size: 8 radius",
                            "placeable on: land and water",
                            "slam attack",
                            [
                                "does 3d, +2cd (5cd), 1i, 24r, 1.1s, normal type",
                                "on contact: aoe"
                            ],
                            "aoe attack",
                            [
                                "2d, +2cd (4cd), 8p, 10r blast, 1.1s, normal",
                                "note: can affect the original target"
                            ]
                        ],
                        "2": [
                            "slam buffed",
                            [
                                "+5 blast radius (13 blast radius)"
                            ]
                        ],
                        "3": [
                            "rallying-roar ability (50s cooldown, 7s duration, 12s initial)",
                            [
                                "roar buff",
                                [
                                    "affects self and towers within 35r",
                                    "+1d, ?%s",
                                    "0.8333%s to primary monkeys"
                                ],
                            ]
                        ],
                        "4": [
                            "slam buffed: 81.82%s (0.9s)"
                        ],
                        "5": [
                            "slam buffed",
                            [
                                "every 5 attacks replaced by slap",
                                [
                                    "7p",
                                    "cannot affect BFBs or higher",
                                    "applies knockback status",
                                    [
                                        "move backwards at 2x normal speed, 1s duration"
                                    ]
                                ]
                            ]
                        ],
                        "6": [
                            "slam buffed",
                            [
                                "all normal Bloons are stunned for 0.45s when attacked"
                            ],
                            "aoe buffed",
                            [
                                "+9r blast (19r blast)"
                            ]
                        ],
                        "7": [
                            "slam buffed",
                            [
                                "+1d (4d)"
                            ],
                            "aoe buffed",
                            [
                                "+1d (3d), +4p (12p)"
                            ]
                        ],
                        "8": [
                            "slam buffed",
                            [
                                "+3r (27r)"
                            ],
                            "rallying-roar ability buffed",
                            [
                                "towers granted normal damage"
                            ]
                        ],
                        "9": [
                            "slam buffed",
                            [
                                "83.33%s (0.75s)"
                            ]
                        ],
                        "10": [
                            "big-squeeze ability (30s cooldown, 6s duration, battle ready)",
                            [
                                "grabs the strongest MOAB-class non-BAD bloon in range and spends 4s popping it",
                                "Pat cannot attack during the ability duration",
                                "Pat cannot activate rallying-roar during the ability duration",
                                "once popped, stuns the children for 2s",
                                "squeeze buff",
                                [
                                    "+3d",
                                ],
                            ]
                        ],
                        "11": [
                            "slam buffed",
                            [
                                "+2d (6d)"
                            ],
                            "aoe buffed",
                            [
                                "+2d (5d)"
                            ]
                        ],
                        "12": [
                            "slam buffed",
                            [
                                "86.67%s (0.65s)"
                            ]
                        ],
                        "13": [
                            "slam buffed",
                            [
                                "stuns MOABs for 0.2s",
                                "+0.1s stun duration (0.55s stun duration)"
                            ]
                        ],
                        "14": [
                            "rallying-roar ability buffed:",
                            [
                                "50s cooldown",
                                "12.5s duration",
                                "+15r (50r)",
                                "gives +3d instead of +1"
                            ]
                        ],
                        "15": [
                            "slap buffed",
                            [
                                "+7p (14p)"
                            ]
                        ],
                        "16": [
                            "slam buffed",
                            [
                                "+2r, +5cd (13cd), +5md (13md)"
                            ],
                            "aoe buffed",
                            [
                                "+5cd (12cd), +5md (12md)"
                            ]
                        ],
                        "17": [
                            "slam buffed",
                            [
                                "61.54%s (0.4s)"
                            ]
                        ],
                        "18": [
                            "aoe buffed",
                            [
                                "+10p (22p)"
                            ]
                        ],
                        "19": [
                            "slam buffed",
                            [
                                "+10d (16d)"
                            ],
                            "aoe buffed",
                            [
                                "+5d (10d)"
                            ]
                        ],
                        "20": [
                            "big-squeeze buffed",
                            [
                                "2.5s duration",
                                "affects 6 eligible bloons instead of 1",
                                "spends 2 seconds to pop the bloons instead of 4"
                            ],
                            "squeeze buffed",
                            [
                                "+6d (+9d)",
                            ],
                        ]
                    }
                },
                "fustyTheSnowman": {
                    "name": "Fusty The Snowman",
                    "data": {
                        "1": [
                            "$950",
                            ["hero_level", {"multiplier": 1.15, "curve": "Quincy"}],
                            "Unlock Cost: 5,000 MM + 40,000 Fusty Points",
                            "size: 8 radius",
                            "placeable on: land and water",
                            "slam attack",
                            [
                                "does 3d, +2cd (5cd), 1i, 24r, 1.1s, normal type",
                                "on contact: aoe"
                            ],
                            "aoe attack",
                            [
                                "2d, +2cd (4cd), 8p, 10r blast, 1.1s, normal",
                                "note: can affect the original target"
                            ]
                        ],
                        "2": [
                            "slam buffed",
                            [
                                "+5 blast radius (13 blast radius)"
                            ],
                            "applies frozen-weakness status to frozen bloons",
                            [
                                "frozen bloons can now be hit by all projectiles"
                            ]
                        ],
                        "3": [
                            "chilling-cheer ability (50s cooldown, 7s duration, 12s initial)",
                            [
                                "buffs Ice Monkeys and self in 60r, including self",
                                "+1d",
                                "-15% attack cooldown"
                            ]
                        ],
                        "4": [
                            "slam buffed: 81.82%s (0.9s)"
                        ],
                        "5": [
                            "slam buffed",
                            [
                                "every 5 attacks replaced by slap",
                                [
                                    "7p",
                                    "cannot affect BFBs or higher",
                                    "applies knockback status",
                                    [
                                        "move backwards at 2x normal speed, 1s duration"
                                    ],
                                    "frozen bloons that are hit emit shards when popped",
                                    [
                                        "1d, 6j, 3i?, shatter type"
                                    ]
                                ]
                            ],
                            "pat-ice buff",
                            [
                                "affects all Ice Monkeys",
                                "can pop White and Zebra bloons"
                            ],
                        ],
                        "6": [
                            "slam buffed",
                            [
                                "all normal Bloons are frozen for 0.7s when attacked"
                            ],
                            "aoe buffed",
                            [
                                "+9r blast (19r blast)"
                            ]
                        ],
                        "7": [
                            "slam buffed",
                            [
                                "+1d (4d)"
                            ],
                            "aoe buffed",
                            [
                                "+1d (3d), +4p (12p)"
                            ]
                        ],
                        "8": [
                            "slam buffed",
                            [
                                "+3r (27r)"
                            ],
                            "chilling-cheer buffed",
                            [
                                "Ice Monkeys can now target and inflict 3x damage to MOAB-class bloons but without associated slowing status effects.",
                                "Ice Monkey's Arctic Wind slow attack can affect all non-BAD MOAB-class bloons"
                            ]
                        ],
                        "9": [
                            "slam buffed",
                            [
                                "83.33%s (0.75s)"
                            ]
                        ],
                        "10": [
                            "crushing-ice ability (30s cooldown, 4s duration, battle ready)",
                            [
                                "grabs the strongest MOAB-class non-BAD bloon in range and spends 4s popping it",
                                "Pat cannot attack during the ability duration",
                                "Pat cannot activate rallying-roar during the ability duration",
                                "once popped, creates freeze-bomb",
                                [
                                    "50r blast",
                                    "freezes bloons for 4s, or 2s for non-BAD MOAB-class bloons"
                                ],
                                "crushing-slow effect",
                                [
                                    "50r",
                                    "60% slow"
                                ],
                            ]
                        ],
                        "11": [
                            "slam buffed",
                            [
                                "+2d (6d)"
                            ],
                            "aoe buffed",
                            [
                                "+2d (5d)"
                            ]
                        ],
                        "12": [
                            "slam buffed",
                            [
                                "86.67%s (0.65s)"
                            ]
                        ],
                        "13": [
                            "slam buffed",
                            [
                                "freezes MOABs for ?s",
                                "+?s freeze duration (?s freeze duration)"
                            ]
                        ],
                        "14": [
                            "chilling-cheer ability buffed:",
                            [
                                "9s duration",
                                "+10r",
                                "gives +3d instead of +1",
                                "-50% attack cooldown"
                            ]
                        ],
                        "15": [
                            "slap buffed",
                            [
                                "+7p (14p)"
                            ]
                        ],
                        "16": [
                            "slam buffed",
                            [
                                "+2r, +5cd (13cd), +5md (13md)"
                            ],
                            "aoe buffed",
                            [
                                "+5cd (12cd), +5md (12md)"
                            ]
                        ],
                        "17": [
                            "slam buffed",
                            [
                                "61.54%s (0.4s)"
                            ]
                        ],
                        "18": [
                            "aoe buffed",
                            [
                                "+10p (22p)"
                            ]
                        ],
                        "19": [
                            "slam buffed",
                            [
                                "+10d (15d)"
                            ],
                            "aoe buffed",
                            [
                                "+11d (15d)"
                            ]
                        ],
                        "20": [
                            "crushing-ice buffed:",
                            [
                                "affects 6 eligible bloons instead of 1"
                            ],
                            "crushing-slow buffed",
                            [
                                "80% slow"
                            ],
                            "freeze-bomb buffed",
                            [
                                "50d, +50md (100md), +40r blast (90r blast)",
                                "freezes bloons for 10s, or 5s for non-BAD MOAB-class bloons"
                            ]
                        ]
                    }
                },
                "agentJericho": {
                    "name": "Agent Jericho",
                    "data": {
                        "1": [
                            "$850",
                            ["hero_level", {"multiplier": 1, "curve": "Striker Jones"}],
                            "Unlock Cost: 5,000 MM",
                            "size: 6 radius",
                            "placeable on: land",
                            "bullet attack",
                            [
                                "3d, 1i, 0.9s, 40r, sharp type"
                            ]
                        ],
                        "2": [
                            "bloon-adjustment passive ability",
                            [
                                "every 4th bloon, gives a natural bloon on the opponent's side an extra layer",
                                [
                                    "note: cannot upgrade to a MOAB-class bloon"
                                ]
                            ]
                        ],
                        "3": [
                            "seize-assets ability (70s cooldown, 10s duration, 28s initial cooldown)",
                            [
                                "takes $25 from the opponent every 1s",
                                [
                                    "note: if the opponent does not have enough money, they do not go into debt"
                                ]
                            ]
                        ],
                        "4": [
                            "regrow bloon modifier buffed",
                            [
                                "$-0.2x ($1.4x)"
                            ]
                        ],
                        "5": [
                            "bloon-adjustment buffed",
                            [
                                "adjusted bloons will randomly be either camo, fortified, or regrow",
                                [
                                    "note: can apply fortified property to opponent's natural blimps"
                                ]
                            ]
                        ],
                        "6": [
                            "bullet buffed",
                            [
                                "50%s (0.45s)"
                            ],
                            "seize-assets buffed",
                            [
                                "now takes $65/1s"
                            ]
                        ],
                        "7": [
                            "bullet buffed",
                            [
                                "+2d (5d), +30r (70r), camo"
                            ],
                            "camo bloon modifier buffed",
                            [
                                "-$0.4x ($1.6x)"
                            ]
                        ],
                        "8": [
                            "bloon-adjustment buffed",
                            [
                                "Now applies every other bloon spawned naturally"
                            ]
                        ],
                        "9": [
                            "seize-assets buffed",
                            [
                                "now takes $100/1s"
                            ],
                            "fortified bloon modifier buffed",
                            [
                                "$-0.3x ($1.7x)",
                                "excludes BADs"
                            ]
                        ],
                        "10": [
                            "decoy ability (90s cooldown, battle ready)",
                            [
                                "spawns a decoy-moab on the opponent's track",
                                [
                                    "same properties as a normal MOAB, but with infinite health",
                                    "does not get affected by speed ramping from rounds 25+",
                                    "consumes all pierce on projectiles that hit it",
                                    "disappears when it has reached 66.67% of the track"
                                ],
                                "cooldown persists after selling"
                            ]
                        ],
                        "11": [
                            "seize-assets buffed",
                            [
                                "now takes $130/1s"
                            ]
                        ],
                        "12": [
                            "bullet buffed",
                            [
                                "50%s (0.225s)"
                            ],
                            "decoy-moab buffed",
                            [
                                "now has the same properties as a BFB"
                            ]
                        ],
                        "13": [
                            "bloon-adjustment buffed",
                            [
                                "applies more modifiers to adjusted bloons"
                            ]
                        ],
                        "14": [
                            "seize-assets buffed",
                            [
                                "now takes $250/1s"
                            ]
                        ],
                        "15": [
                            "bloon-adjustment buffed",
                            [
                                "affects your bloon sends as well"
                            ]
                        ],
                        "16": [
                            "bullet buffed",
                            [
                                "66.67%s (0.15), +7d (12d)"
                            ]
                        ],
                        "17": [
                            "decoy-moab buffed",
                            [
                                "now has the same properties as a ZOMG"
                            ]
                        ],
                        "18": [
                            "seize-assets buffed",
                            [
                                "15s duration"
                            ]
                        ],
                        "19": [
                            "bullet buffed",
                            [
                                "+8d (20d)"
                            ]
                        ],
                        "20": [
                            "decoy ability buffed",
                            [
                                "?s cooldown"
                            ],
                            "fortified bloon modifier buffed",
                            [
                                "discount now applies to BADs"
                            ]
                        ]
                    }
                },
                "highwaymanJericho": {
                    "name": "Highwayman Jericho",
                    "data": {
                        "1": [
                            "$850",
                            ["hero_level", {"multiplier": 1, "curve": "Striker Jones"}],
                            "Unlock Cost: 5,000 MM + 40,000 Agent Jericho Points",
                            "size: 6 radius",
                            "placeable on: land",
                            "bullet attack",
                            [
                                "3d, 1i, 0.9s, 40r, sharp type"
                            ]
                        ],
                        "2": [
                            "bloon-adjustment passive ability",
                            [
                                "every 4th bloon, gives a natural bloon on the opponent's side an extra layer",
                                [
                                    "note: cannot upgrade to a MOAB-class bloon"
                                ]
                            ]
                        ],
                        "3": [
                            "stand-and-deliver ability (100s cooldown, 35s initial cooldown)",
                            [
                                "takes $200 from the opponent",
                                [
                                    "if the opponent does not have $200, their cheapest tower that can pay back the debt is sold for 100% sellback to pay"
                                ]
                            ]
                        ],
                        "4": [
                            "regrow bloon modifier buffed",
                            [
                                "$-0.2x ($1.4x)"
                            ]
                        ],
                        "5": [
                            "bloon-adjustment buffed",
                            [
                                "adjusted bloons will randomly be either camo, fortified, or regrow",
                                [
                                    "note: can apply fortified property to opponent's natural blimps"
                                ]
                            ]
                        ],
                        "6": [
                            "bullet buffed",
                            [
                                "50%s (0.45s)"
                            ],
                            "stand-and-deliver buffed",
                            [
                                "now takes $650"
                            ]
                        ],
                        "7": [
                            "bullet buffed",
                            [
                                "+2d (5d), +30r (70r), camo"
                            ],
                            "camo bloon modifier buffed",
                            [
                                "-$0.4x ($1.6x)"
                            ]
                        ],
                        "8": [
                            "bloon-adjustment buffed",
                            [
                                "Now applies every other bloon spawned naturally"
                            ]
                        ],
                        "9": [
                            "fortified bloon modifier buffed",
                            [
                                "$-0.3x ($1.7x)",
                                "excludes BADs"
                            ],
                            "stand-and-deliver buffed",
                            [
                                "now takes $1,000"
                            ]
                        ],
                        "10": [
                            "misdirection ability (? cooldown, ? initial cooldown)",
                            [
                                "takes the strongest MOAB-class bloon up to a BFB and puts it at the opponent's entrance",
                                [
                                    "bloon health is retained"
                                ]
                            ]
                        ],
                        "11": [
                            "stand-and-deliver buffed",
                            [
                                "now takes $1,300"
                            ]
                        ],
                        "12": [
                            "bullet buffed",
                            [
                                "50%s (0.225s)"
                            ],
                            "misdirection buffed",
                            [
                                "now affects DDTs"
                            ]
                        ],
                        "13": [
                            "bloon-adjustment buffed",
                            [
                                "applies more modifiers to adjusted bloons"
                            ]
                        ],
                        "14": [
                            "stand-and-deliver buffed",
                            [
                                "now takes $2500"
                            ]
                        ],
                        "15": [
                            "bloon-adjustment buffed",
                            [
                                "affects your bloon sends as well"
                            ],
                            "misdirection buffed",
                            [
                                "affects ZOMGs"
                            ]
                        ],
                        "16": [
                            "bullet buffed",
                            [
                                "66.67%s (0.15s), +7d (12d)"
                            ]
                        ],
                        "17": [
                            "misdirection buffed",
                            [
                                "fully heals the affected bloon"
                            ]
                        ],
                        "18": [
                            "stand-and-deliver buffed",
                            [
                                "?s cooldown"
                            ]
                        ],
                        "19": [
                            "bullet buffed",
                            [
                                "+8d (20d)"
                            ]
                        ],
                        "20": [
                            "misdirection ability buffed",
                            [
                                "?s cooldown"
                            ],
                            "fortified bloon modifier buffed",
                            [
                                "discount now applies to BADs"
                            ]
                        ]
                    }
                },
                "starCaptainJericho": {
                    "name": "Star Captain Jericho",
                    "data": {
                        "1": [
                            "$850",
                            ["hero_level", {"multiplier": 1, "curve": "Striker Jones"}],
                            "Unlock Cost: 5,000 MM + 40,000 Agent Jericho Points",
                            "size: 6 radius",
                            "placeable on: land",
                            "bullet attack",
                            [
                                "1d, +1 shocked damage, 1i, 0.54s, 40r, plasma type",
                                "applies shocked status",
                                [
                                    "1d/0.95s, 1s duration",
                                    "[BUG] if a bloon with shocked status is hit it removes the status instead (but still deals the bonus damage)"
                                ]
                            ]
                        ],
                        "2": [
                            "bloon-adjustment passive ability",
                            [
                                "every 4th bloon, gives a natural bloon on the opponent's side an extra layer",
                                [
                                    "note: cannot upgrade to a MOAB-class bloon"
                                ]
                            ]
                        ],
                        "3": [
                            "in-it-for-the-money ability (70s cooldown, 28s initial cooldown, 6s duration)",
                            [
                                "applies money-trap status to up to 25 sent bloons within ability duration",
                                [
                                    "gives $7",
                                    [
                                        "gained money is paid out to the player in 1 second intervals",
                                        "total money gain with all 25 bloons: $175"
                                    ],
                                    "opponent debt +$7",
                                    [
                                        "total opponent debt with all 25 bloons: +$175"
                                    ],
                                    "status is not removed from bloons after the in-it-for-the-money runs out"
                                ]
                            ]
                        ],
                        "4": [
                            "regrow rate buffed",
                            [
                                "88%s (2.2s)"
                            ]
                        ],
                        "5": [
                            "bloon-adjustment buffed",
                            [
                                "adjusted bloons will randomly be either camo, fortified, or regrow",
                                [
                                    "note: can apply fortified property to opponent's natural blimps"
                                ]
                            ]
                        ],
                        "6": [
                            "bullet buffed",
                            [
                                "65%s (0.35s)"
                            ],
                            "money-trap buffed",
                            [
                                "gives $14 if the bloon is a purple, lead, or zebra bloon and adds +$14 to opponent debt",
                                [
                                    "total money gain/total debt for this type of bloon: $350",
                                    "net difference: $700"
                                ],
                                "gives $31 if the bloon is a rainbow bloon and adds +$31 to opponent debt",
                                [
                                    "total money gain/total debt for this type of bloon: $775",
                                    "net difference: $1550"
                                ],
                                "gives $60 if the bloon is a ceramic bloon and adds +$60 to opponent debt",
                                [
                                    "total money gain/total debt for this type of bloon: $1500",
                                    "net difference: $3000"
                                ]
                            ]
                        ],
                        "7": [
                            "bullet buffed",
                            [
                                "+2d (3d), +30r (70r), camo"
                            ],
                            "player sent camo bloons buffed",
                            [
                                "+15% speed"
                            ]
                        ],
                        "8": [
                            "bloon-adjustment buffed",
                            [
                                "Now applies every other bloon spawned naturally"
                            ],
                            "in-it-for-the-money buffed",
                            [
                                "+6s (12s) duration"
                            ],
                            "money-trap buffed",
                            [
                                "can affect 1 MOAB-class bloon instead of a normal bloon",
                                [
                                    "gives $300",
                                    "opponent debt +$300"
                                ]
                            ]
                        ],
                        "9": [
                            "money-trap buffed",
                            [
                                "MOAB-class bloons sent with the ability give $600 and add +$600 to opponent debt"
                            ],
                            "sent fortified bloons buffed",
                            [
                                "+12.5%hp",
                                "affects MOAB-class bloons, excluding BADs"
                            ]
                        ],
                        "10": [
                            "smuggle-run ability (80s cooldown, battle ready, 8s duration)",
                            [
                                "stores $5,500 worth of user sent bloons",
                                [
                                    "cannot store bloons over the price limit",
                                    "cannot store BADs",
                                    "after ability duration stored bloons are deposited 25% of the way down the opponent's player sent track"
                                ]
                            ]
                        ],
                        "11": [
                            "money-trap buffed",
                            [
                                "MOAB-class bloons sent with the ability give $1,300 and add +$1,300 to opponent debt"
                            ]
                        ],
                        "12": [
                            "bullet buffed",
                            [
                                "50%s (0.175s)"
                            ],
                            "smuggle-run buffed",
                            [
                                "$8,000 capacity"
                            ]
                        ],
                        "13": [
                            "bloon-adjustment buffed",
                            [
                                "applies more modifiers to adjusted bloons"
                            ]
                        ],
                        "14": [
                            "money-trap buffed",
                            [
                                "MOAB-class bloons sent with the ability give $3,000 and add +$3,000 to opponent debt"
                            ]
                        ],
                        "15": [
                            "bloon-adjustment buffed",
                            [
                                "affects your bloon sends as well"
                            ],
                            "smuggle-run buffed",
                            [
                                "$13,000 capacity"
                            ]
                        ],
                        "16": [
                            "bullet buffed",
                            [
                                "+2d (5d), shocked damage 1 -> 2, 66.67%s (0.117s)"
                            ]
                        ],
                        "17": [
                            "smuggle-run buffed",
                            [
                                "$20,000 capacity"
                            ]
                        ],
                        "18": [
                            "money-trap buffed",
                            [
                                "45s cooldown"
                            ]
                        ],
                        "19": [
                            "bullet buffed",
                            [
                                "+3d (8d), shocked damage 2 -> 4, normal type"
                            ]
                        ],
                        "20": [
                            "smuggle-run buffed",
                            [
                                "40s cooldown",
                                "$25,000 capacity",
                                "affects BAD bloons"
                            ],
                            "sent fortified bloons buffed",
                            [
                                "buff now includes BADs"
                            ]
                        ]
                    }
                },
                "adora": {
                    "name": "Adora",
                    "data": {
                        "1": [
                            "$650",
                            ["hero_level", {"multiplier": 1.5, "curve": "Quincy"}],
                            "Unlock Cost: 5,000 MM",
                            "size: 6 radius",
                            "placeable on: land",
                            "sun-bolt attack",
                            [
                                "1d, 5p, 45r, 1s, plasma type",
                                "can see past obstacles",
                                "homing"
                            ]
                        ],
                        "2": [
                            "sun-bolt buffed",
                            [
                                "+4r (49r)",
                            ],
                            "super-support buff",
                            [
                                "+1p, +15%r to super monkeys in range",
                                "does not stack with other buffs"
                            ]
                        ],
                        "3": [
                            "long-arm-of-light ability (40s cooldown, 10s duration)",
                            [
                                "buffs sun-bolt",
                                [
                                    "+200%r, +240%p, +50% projectile speed, normal type, camo"
                                ]
                            ]
                        ],
                        "4": [
                            "sun-bolt buffed",
                            [
                                "+1j (2j 30° spread)"
                            ]
                        ],
                        "5": [
                            "sun-bolt buffed",
                            [
                                "+3p (8p)"
                            ]
                        ],
                        "6": [
                            "sun-bolt buffed",
                            [
                                "+1j (3j)"
                            ]
                        ],
                        "7": [
                            "blood-sacrifice ability (30s cooldown, 10s initial cooldown, 10s duration, targets a tower)",
                            [
                                "selected tower gains sacrifice buff",
                                [
                                    "20%s for 4 seconds",
                                    "when buff ends",
                                    [
                                        "tower is sold for $0",
                                        "temporary-blood",
                                        "grants $(4*dollars sacrificed) XP"
                                    ]
                                ],
                                "temporary-blood buff",
                                [
                                    "+(10+0.4x)%r, (90-0.4x)%s",
                                    [
                                        "where x = dollars sacrificed / 100, and x may not exceed 100",
                                        "this means that the max buff is +50%r, 50%s at a $10000 sacrifice"
                                    ]
                                ]
                            ]
                        ],
                        "8": [
                            "sun-bolt buffed",
                            [
                                "+1j (4j)"
                            ]
                        ],
                        "9": [
                            "sun-bolt buffed",
                            [
                                "+1fd (2fd), +5r (54r)"
                            ]
                        ],
                        "10": [
                            "ball-of-light ability (60s cooldown, 12s duration)",
                            [
                                "gains beam attack",
                                [
                                    "4d, +4fd (8fd), 1p, ∞r, 0.05s, plasma type",
                                    "can see past obstacles"
                                ]
                            ]
                        ],
                        "11": [
                            "sun-bolt buffed",
                            [
                                "0.8s"
                            ],
                            "super-support buffed",
                            [
                                "+1p (+2p)"
                            ]
                        ],
                        "12": [
                            "sun-bolt buffed",
                            [
                                "+1j (5j)"
                            ] 
                        ],
                        "13": [
                            "sun-bolt buffed",
                            [
                                "+1fd (3fd), +3p (12p)"
                            ],
                            "beam attack buffed",
                            [
                                "+3p (11p)"
                            ]
                        ],
                        "14": [
                            "sun-bolt buffed",
                            [
                                "+1j (6j)"
                            ]
                        ],
                        "15": [
                            "sun-bolt buffed",
                            [
                                "+1d (2d)"
                            ],
                            "beam attack buffed",
                            [
                                "+3d (7d), +3fd (14fd)"
                            ]
                        ],
                        "16": [
                            "long-arm-of-light buffed",
                            [
                                "12s duration",
                                "sun-avatar buff",
                                [
                                    "+2d to 3xx Super Monkeys in range"
                                ]
                            ]
                        ],
                        "17": [
                            "sun-bolt buffed",
                            [
                                "0.6s"
                            ]
                        ],
                        "18": [
                            "sun-bolt buffed",
                            [
                                "+2j (8j)"
                            ]
                        ],
                        "19": [
                            "sun-bolt buffed",
                            [
                                "+1d (3d), +3fd (6fd), +5r (59r)"
                            ]
                        ],
                        "20": [
                            "blood-sacrifice ability buffed",
                            [
                                "60s duration"
                            ],
                            "temporary-blood buffed",
                            [
                                "+(10+0.8x)%r, (90-0.8x)%s",
                                "where x = dollars sacrificed / 100, and may not exceed 50",
                            ],
                            "beam buffed",
                            [
                                "+23d (30d), +23fd (60fd), normal type"
                            ],
                            "if a 5xx Super Monkey is purchased with Adora in range, Adora merges with that Super Monkey to form the True Sun Goddess",
                            [
                                "specifics unconfirmed"
                            ]
                        ]
                    }
                },
                "fateweaverAdora": {
                    "name": "Fateweaver Adora",
                    "data": {
                        "1": [
                            "$700",
                            ["hero_level", {"multiplier": 1.2, "curve": "Striker Jones"}],
                            "Unlock Cost: 5,000 MM",
                            "size: 7 radius",
                            "placeable on: land",
                            "fate-bolt attack",
                            [
                                "1d, 5p, 45r, 1s, plasma type",
                                "can see past obstacles",
                                "homing"
                            ]
                        ],
                        "2": [
                            "bad-luck buff",
                            [
                                "applies to enemy hero",
                                "+5% ability cooldown time"
                            ]
                        ],
                        "3": [
                            "sharp-sting-of-fate ability (50s cooldown)",
                            [
                                "buffs fate-bolt",
                                [
                                    "(d*2)d (2d), (p*j*7)p (35p), normal type",
                                ],
                                "on enemy bloon boost: 18% cooldown (9s cooldown)"
                            ]
                        ],
                        "4": [
                            "fate-bolt buffed",
                            [
                                "+1j (2j 30° spread)"
                            ]
                        ],
                        "5": [
                            "fate-bolt buffed",
                            [
                                "+3p (8p)"
                            ]
                        ],
                        "6": [
                            "fate-bolt buffed",
                            [
                                "+1j (3j)"
                            ]
                        ],
                        "7": [
                            "eye-of-misfortune ability (30s cooldown, (x*0.003)s duration (where x is the sacrifice cost), 50r, targets a tower)", [
                                "selected tower is sacrificed",
                                "misfortune buff",
                                [
                                    "reduces opponent's hero xp by the cost of the sacrificed tower",
                                    "increases speed of bloons in the enemy hero's range by 50%",
                                ]
                            ]
                        ],
                        "8": [
                            "fate-bolt buffed",
                            [
                                "+1j (4j)"
                            ]
                        ],
                        "9": [
                            "fate-bolt buffed",
                            [
                                "+1fd (2fd), +5r (54r)"
                            ]
                        ],
                        "10": [
                            "chains-of-fate ability (60s cooldown, 6s duration, battle ready)",
                            [
                                "places chain-trap based on targeting, defaults on close",
                                [
                                    "(1 + x / 1000)d, 450p, 10r zone, 0.12s, normal type, camo",
                                    "MOABs use 10p, BFBs use 20p, ZOMGs and DDTs use 40p, BADs use 60p",
                                    "x = cost of opponent's most expensive tower",
                                    "slows moab-class bloons"
                                ]
                            ]
                        ],
                        "11": [
                            "fate-bolt buffed",
                            [
                                "0.8s"
                            ],
                            "bad-luck buffed",
                            [
                                "+10% ability cooldown time"
                            ]
                        ],
                        "12": [
                            "fate-bolt buffed",
                            [
                                "+1j (5j)"
                            ]
                        ],
                        "13": [
                            "fate-bolt buffed",
                            [
                                "+1fd (3fd), +3p (12p)"
                            ]
                        ],
                        "14": [
                            "fate-bolt buffed",
                            [
                                "+1j (6j)"
                            ]
                        ],
                        "15": [
                            "fate-bolt buffed",
                            [
                                "+1d (2d)"
                            ],
                            "chains-of-fate buffed",
                            [
                                "+2s (8s) duration"
                            ]
                        ],
                        "16": [
                            "bad-luck buffed",
                            [
                                "now applies to all enemy ability cooldowns"
                            ]
                        ],
                        "17": [
                            "fate-bolt buffed",
                            [
                                "0.6s"
                            ]
                        ],
                        "18": [
                            "fate-bolt buffed",
                            [
                                "+2j (8j)"
                            ]
                        ],
                        "19": [
                            "fate-bolt buffed",
                            [
                                "+1d (3d), +1fd (6fd), +5r (59r)"
                            ]
                        ],
                        "20": [
                            "chains-of-fate ability buffed",
                            [
                                "+4s (12s) duration",
                                "lasts twice as long on MOAB class bloons (24s)",
                            ],
                            "chain-trap buffed",
                            [
                                "200%d and cost of most expensive tower is worth twice as much (2 + x / 500)d"
                            ],
                            "eye-of-misfortune buffed",
                            [
                                "+15r (65r), increases bloon speed by 70%"
                            ]
                        ]
                    }
                },
                "etienne": {
                    "name": "Etienne",
                    "data": {
                        "1": [
                            "$650",
                            ["hero_level", {"multiplier": 1.06, "curve": "Striker Jones"}],
                            "Unlock Cost: 3,000 MM",
                            "size: 6 radius",
                            "placeable on: land",
                            "55r",
                            "spawns two permanent drone subtowers",
                            [
                                "dart attack",
                                [
                                    "1d, 2p, 0.7s, sharp type",
                                    "can see past obstacles"
                                ]
                            ]
                        ],
                        "2": [
                            "+5r (60r)",
                            "gains spy-drone",
                            [
                                "opponent's bloon queue and cash is visible"
                            ]
                        ],
                        "3": [
                            "drone-swarm ability (60s cooldown, (12 + 0.5l, l = level number)s duration (13.5s this level)?)",
                            [
                                "spawns 4 more drone subtowers",
                                "duration increases 0.5s per level"
                            ]
                        ],
                        "4": [
                            "dart buffed",
                            [
                                "+1p (3p)"
                            ]
                        ],
                        "5": [
                            "dart buffed",
                            [
                                "0.55s, camo"
                            ]
                        ],
                        "6": [
                            "uav buff",
                            [
                                "affects all towers",
                                "every attack has a 20% chance to ignore bloon properties"
                            ]
                        ],
                        "7": [
                            "uav buffed",
                            [
                                "grants camo"
                            ]
                        ],
                        "8": [
                            "dart buffed",
                            [
                                "+1d (2d)"
                            ]
                        ],
                        "9": [
                            "uav buffed",
                            [
                                "every attack now has a 50% chance to ignore bloon properties"
                            ]
                        ],
                        "10": [
                            "ucav ability (75s cooldown, 18s duration)",
                            [
                                "uav replaced by ucav-drone-ability subtower",
                                [
                                    "10j/230°, 1 impact, ∞r, 0.6s",
                                    "homing",
                                    "always targets first",
                                    "on contact: explosion",
                                    [
                                        "2d, 25p, 20r blast, explosion type, camo"
                                    ]
                                ]
                            ]
                        ],
                        "11": [
                            "spawns 1 more permanent drone subtower (3)",
                            "gains zone defense targeting"
                        ],
                        "12": [
                            "drone buffed",
                            [
                                "200% flight speed"
                            ],
                            "dart buffed",
                            [
                                "+3p (6p)"
                            ]
                        ],
                        "13": [
                            "ucav buffed",
                            [
                                "60s cooldown"
                            ]
                        ],
                        "14": [
                            "dart buffed",
                            [
                                "+1d (3d)"
                            ]
                        ],
                        "15": [
                            "uav buffed",
                            [
                                "every attack now has a 100% chance to ignore bloon properties"
                            ],
                            "ucav buffed",
                            [
                                "+6s duration (24s)"
                            ],
                            "explosion buffed",
                            [
                                "+2d (4d), +5p (30p)"
                            ]
                        ],
                        "16": [
                            "+20r (80r)",
                            "dart buffed",
                            [
                                "+3p (9p)"
                            ],
                            "drone-swarm buffed",
                            [
                                "-15s cooldown (45s cooldown)"
                            ]
                        ],
                        "17": [
                            "explosion buffed",
                            [
                                "+3d (7d)"
                            ]
                        ],
                        "18": [
                            "dart buffed",
                            [
                                "+1d (4d)"
                            ]
                        ],
                        "19": [
                            "spawns 1 more permanent drone subtower (4)"
                        ],
                        "20": [
                            "uav buffed",
                            [
                                "missile attack",
                                [
                                    "10j 240° spread, 1i, ∞r, 0.6sx, camo",
                                    "homing",
                                    "always targets first"
                                ],
                                "explosion attack",
                                [
                                    "2d, 25p, 20r blast, explosion type, camo"
                                ]
                            ]
                        ]
                    }
                },
                // "beetienne": {
                //     "name": "Beetienne",
                //     "data": {
                //         "1": [
                //             "$650",
                //             ["hero_level", {"multiplier": 1, "curve": "Striker Jones"}],
                //             "Unlock Cost: 3,000 MM",
                //             "size: 6 radius",
                //             "placeable on: land",
                //             "55r",
                //             "spawns two permanent drone subtowers",
                //             [
                //                 "dart attack",
                //                 [
                //                     "1d, 2p, 0.7s, sharp type",
                //                     "can see past obstacles"
                //                 ]
                //             ]
                //         ],
                //         "2": [
                //             "+5r (60r)",
                //             "gains spy-drone",
                //             [
                //                 "opponent's bloon queue and cash is visible"
                //             ]
                //         ],
                //         "3": [
                //             "drone-swarm ability (60s cooldown, (12 + 0.5l, l = level number)s duration (13.5s this level)?)",
                //             [
                //                 "spawns 4 more drone subtowers",
                //                 "duration increases 0.5s per level"
                //             ]
                //         ],
                //         "4": [
                //             "dart buffed",
                //             [
                //                 "+1p (3p)"
                //             ]
                //         ],
                //         "5": [
                //             "dart buffed",
                //             [
                //                 "0.55s, camo"
                //             ]
                //         ],
                //         "6": [
                //             "uav buff",
                //             [
                //                 "affects all towers",
                //                 "every attack has a 20% chance to ignore bloon properties"
                //             ]
                //         ],
                //         "7": [
                //             "uav buffed",
                //             [
                //                 "grants camo"
                //             ]
                //         ],
                //         "8": [
                //             "dart buffed",
                //             [
                //                 "+1d (2d)"
                //             ]
                //         ],
                //         "9": [
                //             "uav buffed",
                //             [
                //                 "every attack now has a 50% chance to ignore bloon properties"
                //             ]
                //         ],
                //         "10": [
                //             "ucav ability (75s cooldown, 18s duration)",
                //             [
                //                 "uav replaced by ucav-drone-ability subtower",
                //                 [
                //                     "10j/230°, 1 impact, ∞r, 0.6s",
                //                     "homing",
                //                     "always targets first",
                //                     "on contact: explosion",
                //                     [
                //                         "2d, 25p, 20r blast, explosion type, camo"
                //                     ]
                //                 ]
                //             ]
                //         ],
                //         "11": [
                //             "spawns 1 more permanent drone subtower (3)",
                //             "gains zone defense targeting"
                //         ],
                //         "12": [
                //             "drone buffed",
                //             [
                //                 "200% flight speed"
                //             ],
                //             "dart buffed",
                //             [
                //                 "+3p (6p)"
                //             ]
                //         ],
                //         "13": [
                //             "ucav buffed",
                //             [
                //                 "60s cooldown"
                //             ]
                //         ],
                //         "14": [
                //             "dart buffed",
                //             [
                //                 "+1d (3d)"
                //             ]
                //         ],
                //         "15": [
                //             "uav buffed",
                //             [
                //                 "every attack now has a 100% chance to ignore bloon properties"
                //             ],
                //             "ucav buffed",
                //             [
                //                 "+6s duration (24s)"
                //             ],
                //             "explosion buffed",
                //             [
                //                 "+2d (4d), +5p (30p)"
                //             ]
                //         ],
                //         "16": [
                //             "+20r (80r)",
                //             "dart buffed",
                //             [
                //                 "+3p (9p)"
                //             ],
                //             "drone-swarm buffed",
                //             [
                //                 "-15s cooldown (45s cooldown)"
                //             ]
                //         ],
                //         "17": [
                //             "explosion buffed",
                //             [
                //                 "+3d (7d)"
                //             ]
                //         ],
                //         "18": [
                //             "dart buffed",
                //             [
                //                 "+1d (4d)"
                //             ]
                //         ],
                //         "19": [
                //             "spawns 1 more permanent drone subtower (4)"
                //         ],
                //         "20": [
                //             "uav buffed",
                //             [
                //                 "missile attack",
                //                 [
                //                     "10j 240° spread, 1i, ∞r, 0.6sx, camo",
                //                     "homing",
                //                     "always targets first"
                //                 ],
                //                 "explosion attack",
                //                 [
                //                     "2d, 25p, 20r blast, explosion type, camo"
                //                 ]
                //             ]
                //         ]
                //     }
                // },
                "bonnie": {
                    "name": "Bonnie",
                    "data": {
                        "1": [
                            "$700",
                            ["hero_level", {"multiplier": "?", "curve": "unknown"}],
                            "Unlock Cost: 5,000 MM",
                            "size: ? radius",
                            "placeable on: land",
                            "?r",
                            "dynamites attack",
                            [
                                "3s passive",
                                "places dynamite randomly on track",
                                [
                                    "10s lifetime",
                                    "on contact or expire: explosion",
                                    [
                                        "1d, 20p, 20r blast, explosion type",
                                    ]
                                ]
                            ]
                        ],
                        "2": [
                            "spawns a minecart track entity every 6 seconds",
                            [
                                "4HP, 25 speed (equivalent to a red bloon)",
                                "ignores status effects",
                                "does not take any lives if it exits the track",
                                "on pop: bloonstone attack",
                                [
                                    "$25 income",
                                ],
                                "can be upgaded",
                                [
                                    "gains set of level-1 upgrades (5 upgrades)",
                                    [
                                        "costs $300/upgrade",
                                        "+1HP (5HP; 6HP; 7HP; 8HP; 9HP)",
                                        "bloonstone buffed",
                                        [
                                            "+$15 income ($40; $55; $70; $85; $100)"
                                        ]
                                    ],
                                    "gains set of level-2 upgrades (5 upgrades)",
                                    [
                                        "costs $1,000/upgrade",
                                        "+2HP (11HP, 13HP, 15HP, 17HP, 19HP)",
                                        "bloonstone buffed",
                                        [
                                            "+$40 income ($140; $180; $220; $260; $300)"
                                        ]
                                    ],
                                    "sets of upgrades must be purchased in order",
                                    "all upgrades may be sold for 70% sellback",
                                    [
                                        "sellback cannot be buffed"
                                    ]
                                ]
                            ]
                        ],
                        "3": [
                            "mass-detonation ability (60s cooldown, 20s initial)",
                            [
                                "places dynamite randomly on track ? times",
                                "gains 1 detonation-dynamite attack per minecart",
                                [
                                    "pops targeted minecart",
                                    "on pop: detonation-explosion",
                                    [
                                        "3d, 80p, 40r blast, normal type, camo",
                                        "on expire: shrapnel",
                                        [
                                            "8d, 8j 360° spread, 1p, normal type"
                                        ]
                                    ]
                                ]
                            ]
                        ],
                        "4": [
                            "dynamites buffed",
                            [
                                "66.67%s (2s)"
                            ],
                            "dynamite buffed",
                            [
                                "20s lifetime"
                            ]
                        ],
                        "5": [
                            "minecart buffed",
                            [
                                "gains set of level-3 upgrades (5 upgrades)",
                                [
                                    "applies to set: +1HP",
                                    "costs $2,700/upgrade",
                                    "+7HP (27HP; 34HP; 41HP; 48HP; 55HP)",
                                    "bloonstone buffed",
                                    [
                                        "+$100 income ($400; $500; $600; $700; $800)"
                                    ]
                                ],
                            ]
                        ],
                        "6": [
                            "explosion buffed",
                            [
                                "+1d (2d)"
                            ],
                            "detonation-explosion buffed",
                            [
                                "+1d (4d)"
                            ],
                            "shrapnel buffed",
                            [
                                "+2d (10d)"
                            ]
                        ],
                        "7": [
                            "explosion buffed",
                            [
                                "+10p (30p), +8r (28r), normal type",
                            ],
                        ],
                        "8": [
                            "dynamite buffed",
                            [
                                "40s lifetime"
                            ],
                            "minecart buffed",
                            [
                                "gains set of level-4 upgrades (5 upgrades)",
                                [
                                    "applies to set: +4HP",
                                    "costs $4,800/upgrade",
                                    "+60HP (119HP; 179HP; 239HP; 299HP; 359HP)",
                                    "bloonstone buffed",
                                    [
                                        "+$160 income ($960; $1,120; $1,280; $1,440; $1,600)"
                                    ]
                                ],
                            ]
                        ],
                        "9": [
                            "explosion buffed",
                            [
                                "+2d (4d)"
                            ],
                            "detonation-explosion buffed",
                            [
                                "+4d (8d)"
                            ],
                            "shrapnel buffed",
                            [
                                "+10d (20d)"
                            ]
                        ],
                        "10": [
                            "beast ability (70s cooldown, battle ready)",
                            [
                                "spawns a beast-minecart track entity",
                                [
                                    "4,000HP, ? speed, MOAB-class",
                                    "does not take any lives if it exits the track",
                                    "every 40 damage: beast-bloonstone attack",
                                    [
                                        "$50 income ($5,000 max)",
                                    ],
                                ]
                            ]
                        ],
                        "11": [
                            "minecart buffed",
                            [
                                "gains set of level-5 upgrades (5 upgrades)",
                                [
                                    "costs $8,800/upgrade",
                                    "+120HP (479HP; 599HP, 719HP; 839HP; 959HP)",
                                    "bloonstone buffed",
                                    [
                                        "+$280 income ($1,880; $2,160; $2,440; $2,720; $3,000)"
                                    ]
                                ],
                            ]
                        ],
                        "12": [
                            "all attacks buffed",
                            [
                                "+400%md"
                            ],

                        ],
                        "13": [
                            "mass-detonation buffed",
                            [
                                "50s cooldown"
                            ],
                            "dynamite buffed",
                            [
                                "80s lifetime"
                            ],
                        ],
                        "14": [
                            "minecart buffed",
                            [
                                "gains set of level-6 upgrades (5 upgrades)",
                                [
                                    "costs $13,000/upgrade",
                                    "+200HP (1159HP; 1359HP; 1559HP; 1759HP; 1959HP)",
                                    "bloonstone buffed",
                                    [
                                        "+$400 income ($3,400; $3,800; $4,200; $4,600; $5,000)"
                                    ]
                                ],
                            ]
                        ],
                        "15": [
                            "explosion buffed",
                            [
                                "+6d (10d, 40md)"
                            ],
                            "detonation-explosion buffed",
                            [
                                "+8d (16d, 160md)"
                            ],
                            "shrapnel buffed",
                            [
                                "+20d (40d, 400md)"
                            ]
                        ],
                        "16": [
                            "beast buffed",
                            [
                                "10,000HP"
                            ],
                            "beast-bloonstone buffed: every 100 damage",
                            [
                                "$100 income ($10,000 max)",
                            ]
                        ],
                        "17": [
                            "minecart buffed",
                            [
                                "gains set of level-7 upgrades (5 upgrades)",
                                [
                                    "costs $21,000/upgrade",
                                    "+400HP (2359HP; 2759HP; 3159HP; 3559HP; 3959HP)",
                                    "bloonstone buffed",
                                    [
                                        "+$600 income ($5,600; $6,200; $6,800; $7,400; $8,000)"
                                    ]
                                ],
                            ]
                        ],
                        "18": [
                            "explosion buffed",
                            [
                                "+70p (30p), +10r (38r)",
                            ],
                            "detonation-explosion buffed",
                            [
                                "+120p (200p), +10r (50r)"
                            ],
                            "shrapnel buffed",
                            [
                                "+2p (3p)"
                            ]
                        ],
                        "19": [
                            "explosion buffed",
                            [
                                "+50d (60d, 600md)"
                            ],
                            "detonation-explosion buffed",
                            [
                                "+84d (100d, 1000md)"
                            ],
                            "shrapnel buffed",
                            [
                                "+210d (250d, 2500md)"
                            ]
                        ],
                        "20": [
                            "minecart buffed",
                            [
                                "gains set of level-8 upgrades (5 upgrades)",
                                [
                                    "costs $29,000/upgrade",
                                    "+600HP (4559HP; 5159HP; 5759HP; 6359HP; 6959HP)",
                                    "bloonstone buffed",
                                    [
                                        "+$800 income ($8,800; $9,600; $10,400; $11,200; $12,000)"
                                    ]
                                ],
                            ],
                            "beast buffed",
                            [
                                "20,000HP"
                            ],
                            "beast-bloonstone buffed: every 200 damage",
                            [
                                "$200 income ($20,000 max)",
                            ]
                        ]
                    }
                }
            }
        },
        "accolades": {
            "type": "legacy-accolades",
            "entries": {
                "winsWithTowerCategory": {
                    "name": "Wins with a tower category",
                    "data": `
                        <ul>
                            <li>Level 1</li>
                            <ul>
                                <li>Win 25 games with (primary/military/magic/support) towers</li>
                            </ul>
                        </ul>
                <ul>
                            <li>Level 2</li>
                            <ul>
                                <li>Win 50 games with (primary/military/magic/support) towers</li>
                            </ul>
                        </ul>
                <ul>
                            <li>Level 3</li>
                            <ul>
                                <li>Win 250 games with (primary/military/magic/support) towers</li>
                            </ul>
                        </ul>
                <ul>
                            <li>Level 4</li>
                            <ul>
                                <li>Win 500 games with (primary/military/magic/support) towers</li>
                            </ul>
                        </ul>
                    `
                },
                "reach1kEco": {
                    "name": "Reach 1k Eco",
                    "data": `
                        <ul>
                            <li>Level 1</li>
                            <ul>
                                <li>Reached 1k eco in 100 games</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 2</li>
                            <ul>
                                <li>Reached 1k eco in 500 games</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 3</li>
                            <ul>
                                <li>Reached 1k eco in 1000 games</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 4</li>
                            <ul>
                                <li>Reached 1k eco in 2000 games</li>
                            </ul>
                        </ul>
                    `
                },
                "completeEvent": {
                    "name": "Complete Events",
                    "data": `
                        <ul>
                            <li>Level 1</li>
                            <ul>
                                <li>Complete (event) 3 times</li>
                            </ul>
                        </ul>
                <ul>
                            <li>Level 2</li>
                            <ul>
                                <li>Complete (event) 10 times</li>
                            </ul>
                        </ul>
                    `
                },
                "winEventGames": {
                    "name": "Win Event Games",
                    "data": `
                        <ul>
                            <li>Level 1</li>
                            <ul>
                                <li>Win a total of 50 (event) games</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 2</li>
                            <ul>
                                <li>Win a total of 100 (event) games</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 3</li>
                            <ul>
                                <li>Win a total of 500 (event) games</li>
                            </ul>
                        </ul>
                <ul>
                            <li>Level 3</li>
                            <ul>
                                <li>Win a total of 1000 (event) games</li>
                            </ul>
                        </ul>
                    `
                },
                "collectFromBananaFarms": {
                    "name": "Collect Money From Farms",
                    "data": `
                        <ul>
                            <li>Level 1</li>
                            <ul>
                                <li>Collect $1,000,000 from banana farms</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 2</li>
                            <ul>
                                <li>Collect $10,000,000 from banana farms</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 3</li>
                            <ul>
                                <li>Collect $100,000,000 from banana farms</li>
                            </ul>
                        </ul>
                <ul>
                            <li>Level 4</li>
                            <ul>
                                <li>Collect $1,000,000,000 from banana farms</li>
                            </ul>
                        </ul>
                    `
                },
                "winWithFirstBlood": {
                    "name": "Win With First Blood",
                    "data": `
                        <ul>
                            <li>Level 1</li>
                            <ul>
                                <li>Win 50 games with first blood</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 2</li>
                            <ul>
                                <li>Win 100 games with first blood</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 3</li>
                            <ul>
                                <li>Win 500 games with first blood</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 4</li>
                            <ul>
                                <li>Win 1000 games with first blood</li>
                            </ul>
                        </ul>
                    `
                },
                "winWithNoLivesLost": {
                    "name": "Win with no lives lost",
                    "data": `
                        <ul>
                            <li>Level 1</li>
                            <ul>
                                <li>Win 25 games with no lives lost</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 2</li>
                            <ul>
                                <li>Win 50 games with no lives lost</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 3</li>
                            <ul>
                                <li>Win 250 games with no lives lost</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 4</li>
                            <ul>
                                <li>Win 500 games with no lives lost</li>
                            </ul>
                        </ul>
                    `
                },
                "firstBloodWinstreak": {
                    "name": "First Blood Winstreak",
                    "data": `
                        <ul>
                            <li>Level 1</li>
                            <ul>
                                <li>Win 5 games in a row with first blood</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 2</li>
                            <ul>
                                <li>Win 10 games in a row with first blood</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 3</li>
                            <ul>
                                <li>Win 20 games in a row with first blood</li>
                            </ul>
                        </ul>
                    `
                },
                "noLivesLostWinstreak": {
                    "name": "No Lives Lost Winstreak",
                    "data": `
                        <ul>
                            <li>Level 1</li>
                            <ul>
                                <li>Win 5 games in a row with no lives lost</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 2</li>
                            <ul>
                                <li>Win 10 games in a row with no lives lost</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 3</li>
                            <ul>
                                <li>Win 20 games in a row with no lives lost</li>
                            </ul>
                        </ul>
                    `
                },
                "heroToLevel20": {
                    "name": "Upgrade Hero to Level 20",
                    "data": `
                        <ul>
                            <li>Level 1</li>
                            <ul>
                                <li>Upgrade (hero) to level 20 50 times</li>
                            </ul>
                        </ul>
                    `
                },
                "winGamesWithHero": {
                    "name": "Win games with a hero",
                    "data": `
                        <ul>
                            <li>Level 1</li>
                            <ul>
                                <li>Win a total of 50 games with (hero)</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 2</li>
                            <ul>
                                <li>Win a total of 100 games with (hero)</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 3</li>
                            <ul>
                                <li>Win a total of 500 games with (hero)</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 4</li>
                            <ul>
                                <li>Win a total of 1000 games with (hero)</li>
                            </ul>
                        </ul>
                    `
                },
                "winGamesWithTower": {
                    "name": "Win games with a tower",
                    "data": `
                <ul>
                            <li>Level 1</li>
                            <ul>
                                <li>Win 50 games with (x) tower</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 2</li>
                            <ul>
                                <li>Win 100 games with (x) tower</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 3</li>
                            <ul>
                                <li>Win 500 games with (x) tower</li>
                            </ul>
                        </ul>
                <ul>
                            <li>Level 4</li>
                            <ul>
                                <li>Win 1000 games with (x) tower</li>
                            </ul>
                        </ul>
                    `
                },
                "winOnMap": {
                    "name": "Win on a Map",
                    "data": `
                        <ul>
                            <li>Level 1</li>
                            <ul>
                                <li>Win a total of 50 games on (map)</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 2</li>
                            <ul>
                                <li>Win a total of 100 games on (map)</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 2</li>
                            <ul>
                                <li>Win a total of 500 games on (map)</li>
                            </ul>
                        </ul>
                    `
                },
                "playEveryDay": {
                    "name": "Play Every Day",
                    "data": `
                        <ul>
                            <li>Level 1</li>
                            <ul>
                                <li>Play a game every day for 30 days in a row</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 2</li>
                            <ul>
                                <li>Play a game every day for 90 days in a row</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 3</li>
                            <ul>
                                <li>Play a game every day for 365 days in a row</li>
                            </ul>
                        </ul>
                    `
                },
                "noPainNoGain10Lives": {
                    "name": "Win No Pain No Gain with 10 or fewer lives",
                    "data": `
                        <ul>
                            <li>Level 1</li>
                            <ul>
                                <li>Win a total of 10 no pain no gain games with 10 or lower lives remaining</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 2</li>
                            <ul>
                                <li>Win a total of 20 no pain no gain games with 10 or lower lives remaining</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 3</li>
                            <ul>
                                <li>Win a total of 50 no pain no gain games with 10 or lower lives remaining</li>
                            </ul>
                        </ul>
                    `
                },
                "sendBloons": {
                    "name": "Send Bloons",
                    "data": `
                        <ul>
                            <li>Level 1</li>
                            <ul>
                                <li>Send 50,000 bloons at your opponent</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 2</li>
                            <ul>
                                <li>Send 100,000 bloons at your opponent</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 3</li>
                            <ul>
                                <li>Send 500,000 bloons at your opponent</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 4</li>
                            <ul>
                                <li>Send 1,000,000 bloons at your opponent</li>
                            </ul>
                        </ul>
                    `
                },
                "sendMobes": {
                    "name": "Send MOABs",
                    "data": `
                        <ul>
                            <li>Level 1</li>
                            <ul>
                                <li>Send 100 (moab-class bloon) at your opponent</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 2</li>
                            <ul>
                                <li>Send 200 (moab-class bloon) at your opponent</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 3</li>
                            <ul>
                                <li>Send 1000 (moab-class bloon) at your opponent</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 4</li>
                            <ul>
                                <li>Send 2000 (moab-class bloon) at your opponent</li>
                            </ul>
                        </ul>
                    `
                },
                "sacrificeMonkeys": {
                    "name": "Sacrifice Monkeys for Temple",
                    "data": `
                        <ul>
                            <li>Level 1</li>
                            <ul>
                                <li>Sacrifice 100 monkeys to a temple</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 2</li>
                            <ul>
                                <li>Sacrifice 200 monkeys to a temple</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 3</li>
                            <ul>
                                <li>Sacrifice 1000 monkeys to a temple</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 4</li>
                            <ul>
                                <li>Sacrifice 2000 monkeys to a temple</li>
                            </ul>
                        </ul>
                    `
                },
                "upgradeToT5": {
                    "name": "Upgrade to Tier 5",
                    "data": `
                        <ul>
                            <li>Level 1</li>
                            <ul>
                                <li>Upgrade (tower) to (5th tier upgrade) 10 times</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 2</li>
                            <ul>
                                <li>Upgrade (tower) to (5th tier upgrade) 50 times</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 3</li>
                            <ul>
                                <li>Upgrade (tower) to (5th tier upgrade) 100 times</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 4</li>
                            <ul>
                                <li>Upgrade (tower) to (5th tier upgrade) 500 times</li>
                            </ul>
                        </ul>
                    `
                },
                "winCasualGames": {
                    "name": "Win Casual Games",
                    "data": `
                        <ul>
                            <li>Level 1</li>
                            <ul>
                                <li>Win 50 casual games</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 2</li>
                            <ul>
                                <li>Win 100 casual games</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 3</li>
                            <ul>
                                <li>Win 500 casual games</li>
                            </ul>
                        </ul>
                <ul>
                            <li>Level 4</li>
                            <ul>
                                <li>Win 1000 casual games</li>
                            </ul>
                        </ul>
                    `
                },
                "winRankedGames": {
                    "name": "Win Ranked Games",
                    "data": `
                        <ul>
                            <li>Level 1</li>
                            <ul>
                                <li>Win 50 ranked games</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 2</li>
                            <ul>
                                <li>Win 100 ranked games</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 3</li>
                            <ul>
                                <li>Win 500 ranked games</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 4</li>
                            <ul>
                                <li>Win 1000 ranked games</li>
                            </ul>
                        </ul>
                    `
                },
                "winStreak": {
                    "name": "Get a Win Streak",
                    "data": `
                        <ul>
                            <li>Level 1</li>
                            <ul>
                                <li>Get a win streak of 5</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 2</li>
                            <ul>
                                <li>Get a win streak of 10</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 3</li>
                            <ul>
                                <li>Get a win streak of 20</li>
                            </ul>
                        </ul>
                    `
                },
                "prestigeLevel1": {
                    "name": "Prestige Level 1",
                    "data": `
                        <ul>
                            <li>Level 1</li>
                            <ul>
                                <li>Reach prestige level 1 with 3 monkeys</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 2</li>
                            <ul>
                                <li>Reach prestige level 1 with 11 monkeys</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 3</li>
                            <ul>
                                <li>Reach prestige level 1 with 22 monkeys</li>
                            </ul>
                        </ul>
                    `
                },
                "prestigeLevel2": {
                    "name": "Prestige Level 2",
                    "data": `
                        <ul>
                            <li>Level 1</li>
                            <ul>
                                <li>Reach prestige level 2 with 3 monkeys</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 2</li>
                            <ul>
                                <li>Reach prestige level 2 with 11 monkeys</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 3</li>
                            <ul>
                                <li>Reach prestige level 2 with 22 monkeys</li>
                            </ul>
                        </ul>
                    `
                },
                "prestigeLevel3": {
                    "name": "Prestige Level 3",
                    "data": `
                        <ul>
                            <li>Level 1</li>
                            <ul>
                                <li>Reach prestige level 3 with 3 monkeys</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 2</li>
                            <ul>
                                <li>Reach prestige level 3 with 11 monkeys</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 3</li>
                            <ul>
                                <li>Reach prestige level 3 with 22 monkeys</li>
                            </ul>
                        </ul>
                    `
                },
                "prestigeLevel4": {
                    "name": "Prestige Level 4",
                    "data": `
                        <ul>
                            <li>Level 1</li>
                            <ul>
                                <li>Reach prestige level 4 with 3 monkeys</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 2</li>
                            <ul>
                                <li>Reach prestige level 4 with 11 monkeys</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 3</li>
                            <ul>
                                <li>Reach prestige level 4 with 22 monkeys</li>
                            </ul>
                        </ul>
                    `
            },
                "completeBlingSeason": {
                    "name": "Complete the bling season",
                    "data": `
                        <ul>
                            <li>Level 1</li>
                            <ul>
                                <li>Complete the bling season 5 times</li>
                            </ul>
                        </ul>
                        <ul>
                            <li>Level 2</li>
                            <ul>
                                <li>Complete the bling season 10 times</li>
                            </ul>
                        </ul>
                        `
            },
                "takePartInClanWarSilver": {
                    "name": "Take a part in a clan war in Silver or higher",
                    "data": `
                        <ul>
                            <li>Level 1</li>
                            <ul>
                                <li>Take a part in a clan war in Silver or higher 25 times</li>
                            </ul>
                        </ul>
                        `
            },
                "takePartInClanWarGold": {
                    "name": "Take a part in a clan war in Gold or higher",
                    "data": `
                        <ul>
                            <li>Level 1</li>
                            <ul>
                                <li>Take a part in a clan war in Gold or higher 25 times</li>
                            </ul>
                        </ul>
                        `
            },
                "takePartInClanWarDiamond": {
                    "name": "Take a part in a clan war in Diamond or higher",
                    "data": `
                        <ul>
                            <li>Level 1</li>
                            <ul>
                                <li>Take a part in a clan war in Diamond or higher 25 times</li>
                            </ul>
                        </ul>
                        `
            },
                "takePartInClanWarRuby": {
                    "name": "Take a part in a clan war in Ruby or higher",
                    "data": `
                        <ul>
                            <li>Level 1</li>
                            <ul>
                                <li>Take a part in a clan war in Ruby or higher 25 times</li>
                            </ul>
                        </ul>
                        `
            },
               "takePartInClanWarBlackDiamond": {
                "name": "Take a part in a clan war in Black Diamond",
                "data": `
                    <ul>
                        <li>Level 1</li>
                        <ul>
                            <li>Take a part in a clan war in Black Diamond 25 times</li>
                        </ul>
                    </ul>
                    `
        },
                "warFinishFirst": {
                "name": "Finish 1st on the clan war leaderboard",
                "data": `
                    <ul>
                        <li>Level 1</li>
                        <ul>
                            <li>Finish 1st on the clan war leaderboard 5 times</li>
                        </ul>
                    </ul>
                    <ul>
                        <li>Level 2</li>
                        <ul>
                            <li>Finish 1st on the clan war leaderboard 25 times</li>
                        </ul>
                    </ul>
                    `
        },
                "warFinishSecond": {
                "name": "Finish 2nd on the clan war leaderboard",
                "data": `
                    <ul>
                        <li>Level 1</li>
                        <ul>
                            <li>Finish 2nd on the clan war leaderboard 5 times</li>
                        </ul>
                    </ul>
                    <ul>
                        <li>Level 2</li>
                        <ul>
                            <li>Finish 2nd on the clan war leaderboard 25 times</li>
                        </ul>
                    </ul>
                    `
        },
                "warFinishThird": {
                "name": "Finish 3rd on the clan war leaderboard",
                "data": `
                    <ul>
                        <li>Level 1</li>
                        <ul>
                            <li>Finish 3rd on the clan war leaderboard 5 times</li>
                        </ul>
                    </ul>
                    <ul>
                        <li>Level 2</li>
                        <ul>
                            <li>Finish 3rd on the clan war leaderboard 25 times</li>
                        </ul>
                    </ul>
                    `
        },
                "contributeTokens": {
                "name": "Contribute tokens to unlocking items in the clan shop",
                "data": `
                    <ul>
                        <li>Level 1</li>
                        <ul>
                            <li>Contribute 5,000 tokens to unlocking items in the clan shop</li>
                        </ul>
                    </ul>
                    <ul>
                        <li>Level 2</li>
                        <ul>
                            <li>Contribute 50,000 tokens to unlocking items in the clan shop</li>
                        </ul>
                    </ul>
                    `
        },
                "winMedallions": {
                "name": "Win medallions during clan wars",
                "data": `
                    <ul>
                        <li>Level 1</li>
                        <ul>
                            <li>Win 500,000 medallions during clan wars</li>
                        </ul>
                    </ul>
                    <ul>
                        <li>Level 2</li>
                        <ul>
                            <li>Win 1,000,000 medallions during clan wars</li>
                        </ul>
                    </ul>
                    `
        },
            }
        },
        "bloons": {
            "type": "legacy-bloons",
            "entries": {
                "red": {
                    "name": "Red Bloons",
                    "data": `
                        <ul>
                            <li>Base Speed: 25 (1.0x)</li>
                            <li>Grouped
                                <ul>
                                    <li>Rounds: 1-11</li>
                                    <li>Count: 8</li>
                                    <li>Total time: 0.8s</li>
                                    <li>Eco: +$1.0</li>
                                    <li>Cost: $20</li>
                                </ul>
                            </li>
                        </ul>
                    `
                },
                "blue": {
                    "name": "Blue Bloons",
                    "data": `
                        <ul>
                            <li>Base Speed: 35 (1.4x)</li>
                            <li>Spaced
                                <ul>
                                    <li>Rounds: 1-2</li>
                                    <li>Count: 5</li>
                                    <li>Total time: 1.5s</li>
                                    <li>Eco: +$0.8</li>
                                    <li>Cost: $15</li>
                                </ul>
                            </li>
                            <li>Grouped
                                <ul>
                                    <li>Rounds: 3-12</li>
                                    <li>Count: 6</li>
                                    <li>Total time: 0.6s</li>
                                    <li>Eco: +$1.1</li>
                                    <li>Cost: $24</li>
                                </ul>
                            </li>
                        </ul>
                    `
                },
                "green": {
                    "name": "Green Bloons",
                    "data": `
                        <ul>
                            <li>Base Speed: 45 (1.8x)</li>
                            <li>Spaced
                                <ul>
                                    <li>Rounds: 2-4</li>
                                    <li>Count: 5</li>
                                    <li>Total time: 1.15s</li>
                                    <li>Eco: +$0.9</li>
                                    <li>Cost: $18</li>
                                </ul>
                            </li>
                            <li>Grouped
                                <ul>
                                    <li>Rounds: 5-16</li>
                                    <li>Count: 5</li>
                                    <li>Total time: 0.4s</li>
                                    <li>Eco: +$1.4</li>
                                    <li>Cost: $35</li>
                                </ul>
                            </li>
                        </ul>
                    `
                },
                "yellow": {
                    "name": "Yellow Bloons",
                    "data": `
                        <ul>
                            <li>Base Speed: 80 (3.2x)</li>
                            <li>Spaced
                                <ul>
                                    <li>Rounds: 3-6</li>
                                    <li>Count: 5</li>
                                    <li>Total time: 1.15s</li>
                                    <li>Eco: +$1.2</li>
                                    <li>Cost: $24</li>
                                </ul>
                            </li>
                            <li>Grouped
                                <ul>
                                    <li>Rounds: 7-19</li>
                                    <li>Count: 4</li>
                                    <li>Total time: 0.24s</li>
                                    <li>Eco: +$1.6</li>
                                    <li>Cost: $40</li>
                                </ul>
                            </li>
                        </ul>
                    `
                },
                "pink": {
                    "name": "Pink Bloons",
                    "data": `
                        <ul>
                            <li>Base Speed: 87.5 (3.5x)</li>
                            <li>Spaced
                                <ul>
                                    <li>Rounds: 4-8</li>
                                    <li>Count: 3</li>
                                    <li>Total time: 0.9s</li>
                                    <li>Eco: +$1.4</li>
                                    <li>Cost: $28</li>
                                </ul>
                            </li>
                            <li>Grouped
                                <ul>
                                    <li>Rounds: 9+</li>
                                    <li>Count: 4</li>
                                    <li>Total time: 0.2s</li>
                                    <li>Eco: +$2.3</li>
                                    <li>Cost: $60</li>
                                </ul>
                            </li>
                        </ul>
                    `
                },
                "white": {
                    "name": "White Bloons",
                    "data": `
                        <ul>
                            <li>Base Speed: 50 (2x)</li>
                            <li>Spaced
                                <ul>
                                    <li>Rounds: 5-9</li>
                                    <li>Count: 3</li>
                                    <li>Total time: 0.84s</li>
                                    <li>Eco: +$1.5</li>
                                    <li>Cost: $30</li>
                                </ul>
                            </li>
                            <li>Grouped
                                <ul>
                                    <li>Rounds: 10-21</li>
                                    <li>Count: 5</li>
                                    <li>Total time: 0.35s</li>
                                    <li>Eco: +$2.5</li>
                                    <li>Cost: $65</li>
                                </ul>
                            </li>
                        </ul>
                    `
                },
                "black": {
                    "name": "Black Bloons",
                    "data": `
                        <ul>
                            <li>Base Speed: 45 (1.8x)</li>
                            <li>Spaced
                                <ul>
                                    <li>Rounds: 6-9</li>
                                    <li>Count: 3</li>
                                    <li>Total time: 0.75s</li>
                                    <li>Eco: +$1.6</li>
                                    <li>Cost: $33</li>
                                </ul>
                            </li>
                            <li>Grouped
                                <ul>
                                    <li>Rounds: 10-25</li>
                                    <li>Count: 4</li>
                                    <li>Total time: 0.32s</li>
                                    <li>Eco: +$2.9</li>
                                    <li>Cost: $75</li>
                                </ul>
                            </li>
                        </ul>
                    `
                },
                "purple": {
                    "name": "Purple Bloons",
                    "data": `
                        <ul>
                            <li>Base Speed: 85 (3.4x)</li>
                            <li>Spaced
                                <ul>
                                    <li>Rounds: 8-10</li>
                                    <li>Count: 4</li>
                                    <li>Total time: 1.2s</li>
                                    <li>Eco: +$3.3</li>
                                    <li>Cost: $70</li>
                                </ul>
                            </li>
                            <li>Grouped
                                <ul>
                                    <li>Rounds: 11+</li>
                                    <li>Count: 5</li>
                                    <li>Total time: 0.175s</li>
                                    <li>Eco: +$2.9</li>
                                    <li>Cost: $115</li>
                                </ul>
                            </li>
                        </ul>
                    `
                },
                "zebra": {
                    "name": "Zebra Bloons",
                    "data": `
                        <ul>
                            <li>Base Speed: 75 (3.0x)</li>
                            <li>Spaced
                                <ul>
                                    <li>Rounds: 9-10</li>
                                    <li>Count: 2</li>
                                    <li>Total time: 0.6s</li>
                                    <li>Eco: +$2.7</li>
                                    <li>Cost: $60</li>
                                </ul>
                            </li>
                            <li>Grouped
                                <ul>
                                    <li>Rounds: 11-29</li>
                                    <li>Count: 3</li>
                                    <li>Total time: 0.24s</li>
                                    <li>Eco: +$3.5</li>
                                    <li>Cost: $120</li>
                                </ul>
                            </li>
                        </ul>
                    `
                },
                "lead": {
                    "name": "Lead Bloons",
                    "data": `
                        <ul>
                            <li>Base Speed: 45 (1.8x)</li>
                            <li>HP (fortified): 6</li>
                            <li>Spaced
                                <ul>
                                    <li>Rounds: 10-11</li>
                                    <li>Count: 2</li>
                                    <li>Total time: 2s</li>
                                    <li>Eco: +$2.8</li>
                                    <li>Cost: $60</li>
                                </ul>
                            </li>
                            <li>Grouped
                                <ul>
                                    <li>Rounds: 12-22</li>
                                    <li>Count: 4</li>
                                    <li>Total time: 0.6s</li>
                                    <li>Eco: +$4.5</li>
                                    <li>Cost: $150</li>
                                </ul>
                            </li>
                            <li>Tight
                                <ul>
                                    <li>Rounds: 23+</li>
                                    <li>Count: 60</li>
                                    <li>Total time: 1s</li>
                                    <li>Eco: +7</li>
                                    <li>Cost: $1,200</li>
                                </ul>
                            </li>
                        </ul>
                    `
                },
                "rainbow": {
                    "name": "Rainbow Bloons",
                    "data": `
                        <ul>
                            <li>Base Speed: 55 (2.2x)</li>
                            <li>Spaced
                                <ul>
                                    <li>Rounds: 12</li>
                                    <li>Count: 1</li>
                                    <li>Total time: 0.35s</li>
                                    <li>Eco: +$2.8</li>
                                    <li>Cost: $70</li>
                                </ul>
                            </li>
                            <li>Grouped
                                <ul>
                                    <li>Rounds: 13+</li>
                                    <li>Count: 4</li>
                                    <li>Total time: 0.4s</li>
                                    <li>Eco: +$6.0</li>
                                    <li>Cost: $250</li>
                                </ul>
                            </li>
                        </ul>
                    `
                },
                "ceramic": {
                    "name": "Ceramic Bloons",
                    "data": `
                        <ul>
                            <li>Base Speed: 62.5 (2.5x)</li>
                            <li>HP (regular): 10</li>
                            <li>HP (fortified): 30</li>
                            <li>Spaced
                                <ul>
                                    <li>Rounds: 13-15</li>
                                    <li>Count: 1</li>
                                    <li>Total time: 0.65s</li>
                                    <li>Eco: +$5.0</li>
                                    <li>Cost: $150</li>
                                </ul>
                            </li>
                            <li>Grouped
                                <ul>
                                    <li>Rounds: 16-27</li>
                                    <li>Count: 2</li>
                                    <li>Total time: 0.22s</li>
                                    <li>Eco: +$5</li>
                                    <li>Cost: $350</li>
                                </ul>
                            </li>
                            <li>Tight
                                <ul>
                                    <li>Rounds: 28+</li>
                                    <li>Count: 40</li>
                                    <li>Total time: 0.8s</li>
                                    <li>Eco: +$0</li>
                                    <li>Cost: $2,800</li>
                                </ul>
                            </li>
                            <li>Super Ceramics
                                <ul>
                                    <li>Round: 30</li>
                                    <li>HP modifier: 6x
                                        <ul>
                                            <li>Regular: 60 HP</li>
                                            <li>Fortified: 180 HP</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    `
                },
                "moab": {
                    "name": "MOABs",
                    "data": `
                        <ul>
                            <li>Base Speed: 25 (1x)</li>
                            <li>Base HP: 200</li>
                            <li>Base HP (fortified): 400</li>
                            <li>Spaced
                                <ul>
                                    <li>Rounds: 17-18</li>
                                    <li>Count: 1</li>
                                    <li>Total time: 3s</li>
                                    <li>Eco: +$0</li>
                                    <li>Cost: $1,000</li>
                                </ul>
                            </li>
                            <li>Grouped
                                <ul>
                                    <li>Rounds: 19-24</li>
                                    <li>Count: 1</li>
                                    <li>Total time: 0.5s</li>
                                    <li>Eco: +$0</li>
                                    <li>Cost: $900</li>
                                </ul>
                            </li>
                            <li>Tight
                                <ul>
                                    <li>Rounds: 25+</li>
                                    <li>Count: 15</li>
                                    <li>Total time: 1s</li>
                                    <li>Eco: -$50</li>
                                    <li>Cost: $4,000</li>
                                </ul>
                            </li>
                        </ul>
                    `
                },
                "bfb": {
                    "name": "BFBs",
                    "data": `
                        <ul>
                            <li>Base Speed: 8.5 (0.34x)</li>
                            <li>Base HP: 700</li>
                            <li>Base HP (fortified): 1,400</li>
                            <li>Spaced
                                <ul>
                                    <li>Rounds: 20-21</li>
                                    <li>Count: 1</li>
                                    <li>Total time: 3.5s</li>
                                    <li>Eco: -$25</li>
                                    <li>Cost: $1,600</li>
                                </ul>
                            </li>
                            <li>Grouped
                                <ul>
                                    <li>Rounds: 22-26</li>
                                    <li>Count: 1</li>
                                    <li>Total time: 0.6s</li>
                                    <li>Eco: -$25</li>
                                    <li>Cost: $1,300</li>
                                </ul>
                            </li>
                            <li>Tight
                                <ul>
                                    <li>Rounds: 27+</li>
                                    <li>Count: 10</li>
                                    <li>Total time: 1.2s</li>
                                    <li>Eco: -$150</li>
                                    <li>Cost: $10,000</li>
                                </ul>
                            </li>
                        </ul>
                    `
                },
                "zomg": {
                    "name": "ZOMGs",
                    "data": `
                        <ul>
                            <li>Base Speed: 7 (0.28x)</li>
                            <li>Base HP: 4,000</li>
                            <li>Base HP (fortified): 8,000</li>
                            <li>Spaced
                                <ul>
                                    <li>Rounds: 22-23</li>
                                    <li>Count: 1</li>
                                    <li>Total time: 6s</li>
                                    <li>Eco: -$100</li>
                                    <li>Cost: $5,500</li>
                                </ul>
                            </li>
                            <li>Grouped
                                <ul>
                                    <li>Rounds: 24-29</li>
                                    <li>Count: 1</li>
                                    <li>Total time: 1s</li>
                                    <li>Eco: -$100</li>
                                    <li>Cost:
                                        <ul>
                                            <li>Rounds 24-25: $5,000</li>
                                            <li>Rounds 26-29: $4,500</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>Tight
                                <ul>
                                    <li>Rounds: 30+</li>
                                    <li>Count: 4</li>
                                    <li>Total time: 1.2s</li>
                                    <li>Eco: -$400</li>
                                    <li>Cost: $12,000</li>
                                </ul>
                            </li>
                        </ul>
                    `
                },
                "ddt": {
                    "name": "DDTs",
                    "data": `
                        <ul>
                            <li>Base Speed: 68.75 (2.75x)</li>
                            <li>Base HP: 400</li>
                            <li>Base HP (fortified): 800</li>
                            <li>Spaced
                                <ul>
                                    <li>Rounds: 26-27</li>
                                    <li>Count: 1</li>
                                    <li>Total time: 1.4s</li>
                                    <li>Eco: -$150</li>
                                    <li>Cost: $2,500</li>
                                </ul>
                            </li>
                            <li>Grouped
                                <ul>
                                    <li>Rounds: 28+</li>
                                    <li>Count: 3</li>
                                    <li>Total time: 0.6s</li>
                                    <li>Eco: -$200</li>
                                    <li>Cost: $6,000</li>
                                </ul>
                            </li>
                        </ul>
                    `
                },
                "bad": {
                    "name": "BADs",
                    "data": `
                        <ul>
                            <li>Base Speed: 4.5 (0.18x)</li>
                            <li>Base HP: 12,500</li>
                            <li>Base HP (fortified): 25,000</li>
                            <li>Spaced
                                <ul>
                                    <li>Rounds: 30-31</li>
                                    <li>Count: 1</li>
                                    <li>Total time: 7s</li>
                                    <li>Eco: -$400</li>
                                    <li>Cost: $15,000</li>
                                </ul>
                            </li>
                            <li>Grouped
                                <ul>
                                    <li>Rounds: 32+</li>
                                    <li>Count: 1</li>
                                    <li>Total time: 1s</li>
                                    <li>Eco: -$400</li>
                                    <li>Cost: $15,000</li>
                                </ul>
                            </li>
                        </ul>
                    `
                },
                "modifiers": {
                    "name": "Bloon Modifiers",
                    "data": `
                        <ul>
                            <li>Regrow
                                <ul>
                                    <li>Unlocked Round 8</li>
                                    <li>Cash modifier: $1.6x</li>
                                    <li>Grows one extra layer every 2.55 seconds, up to their original form.</li>
                                </ul>
                            </li>
                            <li>Camo
                                <ul>
                                    <li>Unlocked Round 12</li>
                                    <li>Cash modifier: $2x</li>
                                </ul>
                            </li>
                            <li>Fortified
                                <ul>
                                    <li>Unlocked Round 18</li>
                                    <li>Cash modifier: $2x</li>
                                    <li>Eco modifier for Blimps only: 2x greater eco loss</li>
                                </ul>
                            </li>
                        </ul>
                    `
                },
                "ramping": {
                    "name": "Health and Speed Ramping",
                    "data": `
                        <ul>
                            <li>Rounds 25-30
                                <ul>
                                    <li>+20% base Blimp HP per round</li>
                                    <li>+10% base speed per round</li>
                                </ul>
                            </li>
                            <li>Rounds 30-40
                                <ul>
                                    <li>+40% base Blimp HP per round</li>
                                    <li>+10% base speed per round</li>
                                </ul>
                            </li>
                            <li>Rounds 40-50
                                <ul>
                                    <li>+80% base Blimp HP per round</li>
                                    <li>+10% base speed per round</li>
                                </ul>
                            </li>
                            <li>Rounds 50-100
                                <ul>
                                    <li>+60% base Blimp HP per round</li>
                                    <li>+10% base speed per round</li>
                                </ul>
                            </li>
                            <li>Notes
                                <ul>
                                    <li>All of this is additive. In other words, the blimp HP/speed increases by a flat amount each round.</li>
                                    <li>Only Blimps are affected by HP scaling, however speed scaling affects all Bloons</li>
                                </ul>
                            </li>
                        </ul>
                    `
                }
            }
        }
    },
    "prices": {
        "primary": {
            "dartMonkey": {
                "base": 150,
                "top": [100, 150, 450, 1800, 13500],
                "middle": [100, 100, 300, 9000, 45000],
                "bottom": [90, 200, 600, 2000, 25000]
            },
            "boomerangMonkey": {
                "base": 325,
                "top": [200, 280, 1300, 3400, 30000],
                "middle": [175, 250, 1100, 4500, 33000],
                "bottom": [100, 300, 1100, 3400, 52000]
            },
            "bombShooter": {
                "base": 525,
                "top": [350, 650, 1200, 3600, 55000],
                "middle": [250, 400, 900, 3200, 25000],
                "bottom": [200, 300, 900, 3200, 38000]
            },
            "tackShooter": {
                "base": 280,
                "top": [150, 400, 700, 3500, 45500],
                "middle": [100, 225, 750, 3000, 15000],
                "bottom": [100, 100, 450, 3400, 24000]
            },
            "iceMonkey": {
                "base": 450,
                "top": [100, 350, 1800, 2700, 34000],
                "middle": [225, 350, 2900, 3000, 18000],
                "bottom": [100, 200, 1300, 2400, 32000]
            },
            "glueGunner": {
                "base": 100,
                "top": [150, 300, 2300, 4500, 19000],
                "middle": [100, 700, 2200, 4000, 14000],
                "bottom": [120, 400, 3200, 2200, 28000]
            }
        },
        "military": {
            "sniperMonkey": {
                "base": 300,
                "top": [250, 750, 2800, 5000, 34000],
                "middle": [200, 250, 3000, 5800, 14000],
                "bottom": [300, 300, 2200, 3800, 14500]
            },
            "monkeySub": {
                "base": 325,
                "top": [130, 500, 950, 2800, 32000],
                "middle": [300, 300, 1600, 15000, 30000],
                "bottom": [300, 800, 800, 2800, 25000]
            },
            "monkeyBuccaneer": {
                "base": 500,
                "top": [350, 550, 2200, 6400, 25000],
                "middle": [550, 500, 900, 5250, 21000],
                "bottom": [300, 400, 1500, 5700, 19000]
            },
            "monkeyAce": {
                "base": 700,
                "top": [550, 600, 1000, 3000, 40000],
                "middle": [200, 350, 900, 15000, 30000],
                "bottom": [450, 300, 2200, 20000, 75000]
            },
            "heliPilot": {
                "base": 800,
                "top": [600, 250, 1800, 17500, 45000],
                "middle": [200, 350, 3200, 7500, 30000],
                "bottom": [350, 250, 3700, 7500, 35000]
            },
            "mortarMonkey": {
                "base": 700,
                "top": [350, 500, 1300, 7300, 28000],
                "middle": [400, 550, 800, 8000, 27000],
                "bottom": [400, 500, 700, 8500, 40000]
            },
            "dartlingGunner": {
                "base": 800,
                "top": [250, 600, 2800, 12000, 80000],
                "middle": [250, 500, 5600, 5100, 68000],
                "bottom": [150, 800, 3400, 16000, 50000]
            }
        },
        "magic": {
            "wizardMonkey": {
                "base": 250,
                "top": [100, 250, 1200, 9000, 32000],
                "middle": [300, 1000, 3000, 4000, 50000],
                "bottom": [300, 300, 1500, 2600, 24000]
            },
            "superMonkey": {
                "base": 2000,
                "top": [1400, 2500, 11500, 80000, 200000],
                "middle": [1000, 1000, 10000, 20000, 90000],
                "bottom": [3000, 1200, 4500, 27000, 100000]
            },
            "ninjaMonkey": {
                "base": 400,
                "top": [150, 200, 700, 2750, 35000],
                "middle": [200, 375, 2100, 4500, 20000],
                "bottom": [200, 250, 1800, 4900, 40000]
            },
            "alchemist": {
                "base": 550,
                "top": [250, 350, 1650, 2800, 55000],
                "middle": [250, 475, 4000, 4500, 45000],
                "bottom": [550, 450, 1000, 2500, 40000]
            },
            "druid": {
                "base": 425,
                "top": [250, 1000, 1500, 4300, 55000],
                "middle": [350, 250, 700, 4200, 35000],
                "bottom": [100, 400, 750, 2500, 45000]
            }
        },
        "support": {
            "monkeyVillage": {
                "base": 1000,
                "top": [400, 1500, 800, 2500, 25000],
                "middle": [250, 1700, 5000, 23500, 45000],
                "bottom": [500, 500, 1500, 7200, 15000]
            },
            "bananaFarm": {
                "base": 1000,
                "top": [550, 550, 2750, 16000, 66000],
                "middle": [200, 700, 4400, 8000, 45000],
                "bottom": [400, 240, 2800, 13000, 46000]
            },
            "spikeFactory": {
                "base": 600,
                "top": [600, 600, 2700, 9500, 90000],
                "middle": [500, 500, 2500, 5200, 40000],
                "bottom": [150, 500, 1200, 3200, 30000]
            },
            "engineerMonkey": {
                "base": 400,
                "top": [400, 350, 500, 2800, 32000],
                "middle": [250, 350, 800, 13500, 100000],
                "bottom": [450, 200, 350, 3600, 54000]
            }
        }
    }
}

export default data;
