const data = {
    "stats": {
        "primary": {
            "type": "legacy",
            "entries": {
                "dartMonkey": {
                    "name": "Dart Monkey",
                    "data": {
                        "base": `
                                <ul>
                                    <li>$150 (0 MM)</li>
                                    <li>size: 6 radius</li>
                                    <li>placeable on: land</li>
                                    <li>dart attack
                                        <ul>
                                            <li>1d, 2p, 32r, 0.95s, sharp type</li>
                                        </ul>
                                    </li>
                                </ul>
                            `,
                        "top": {
                            "1": {
                                "name": "100 - Sharp Shots",
                                "content": `
                                        <ul>
                                            <li>dart attack buffed
                                                <ul>
                                                    <li>+1p (3p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "200 - Razor Sharp Shots",
                                "content": `
                                        <ul>
                                            <li>dart attack buffed
                                                <ul>
                                                    <li>+3p (6p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "300 - Spike-o-pult",
                                "content": `
                                        <ul>
                                            <li>dart attack replaced by spikeball
                                                <ul>
                                                    <li>1d, 1cd (2cd), 22p, 36.8r, 1.15s, shatter type</li>
                                                    <li>can rebound off of walls 
                                                        <ul>
                                                            <li>can rehit bloons after rebounding</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "400 - Juggernaut",
                                "content": `
                                        <ul>
                                            <li>spikeball attack replaced by juggernaut
                                                <ul>
                                                    <li>2d, 4cd (6cd), 50p, 36.8r, 1.0s, normal type</li>
                                                    <li>can rebound off of walls 
                                                        <ul>
                                                            <li>can rehit bloons after rebounding</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "500 - Ultra-Juggernaut",
                                "content": `
                                        <ul>
                                            <li>juggernaut attack replaced by ultrajugg
                                                <ul>
                                                    <li>5d, 16cd (21cd), 5fd (11fd), 600% ld (30ld), 200p, 36.8r, 1.0s, normal type</li>
                                                    <li>can rebound off of walls 
                                                        <ul>
                                                            <li>can rehit bloons after rebounding</li>
                                                        </ul>
                                                    </li>
                                                    <li>at 50%p and 100%p: emits juggernauts
                                                        <ul>
                                                            <li>note: both sets of juggernauts can also be emitted by the projectile expiring</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>juggernauts attack
                                                <ul>
                                                    <li>1d, 2cd (3cd), 600% ld (6ld), 2fd (3fd), 6j 360&deg spread, 100p, normal type</li>
                                                    <li>can rebound off of walls 
                                                        <ul>
                                                            <li>can rehit bloons after rebounding</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Quick Shots",
                                "content": `
                                        <ul>
                                            <li>dart attack buffed
                                                <ul>
                                                    <li>85%s (0.8075s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "020 - Very Quick Shots",
                                "content": `
                                        <ul>
                                            <li>dart attack buffed
                                                <ul>
                                                    <li>78.82%s (0.6365s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "030 - Triple Shot",
                                "content": `
                                        <ul>
                                            <li>dart attack buffed
                                                <ul>
                                                    <li>+2j (3j 30&deg spread)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "040 - Super Monkey Fan Club",
                                "content": `
                                        <ul>
                                            <li>dart attack buffed
                                                <ul>
                                                    <li>+2d (3d), 75%s (0.477375s)</li>
                                                </ul>
                                            </li>
                                            <li>gains fan-club ability (50s cooldown, 12s duration, battle ready)
                                                <ul>
                                                    <li>transforms 10 nearest untransformed dart monkeys within 50r (up to 2-4-2) into superfans
                                                        <ul>
                                                            <li>if limit isn't reached, also transforms newly placed dart monkeys until reached</li>
                                                            <li>if sold, monkeys remain transformed</li>
                                                            <li>if transformed darts are upgraded to a non-2-5-2 dart monkey, they do not acquire those upgrades until end of duration</li>
                                                            <li>upgrades such as 1xx are inherited</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>superfan subtower
                                                <ul>
                                                    <li>dart attack
                                                        <ul>
                                                            <li>1d, 2p, 40r, 0.05s, sharp type</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "050 - Plasma Monkey Fan Club",
                                "content": `
                                        <ul>
                                            <li>dart attack buffed
                                                <ul>
                                                    <li>+3d (6d)</li>
                                                </ul>
                                            </li>
                                            <li>fan-club ability replaced by plasma-club (50s cooldown, 15s duration, battle ready)
                                                <ul>
                                                    <li>transforms 20 nearest dart monkeys within 50r (up to 2-5-2) into plasmafans
                                                        <ul>
                                                            <li>if limit isn't reached, also transforms newly placed dart monkeys until reached</li>
                                                            <li>if sold, monkeys remain transformed</li>
                                                            <li>if transformed darts are upgraded to a non-2-5-2 dart monkey, they do not acquire those upgrades until end of duration</li>
                                                            <li>upgrades such as 1xx are inherited</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>plasmafan subtower 
                                                <ul>
                                                    <li>plasma attack
                                                        <ul>
                                                            <li>2d, 5p, 40r, 0.025s, plasma type</li>
                                                            <li>if transformed tower is an x4x Dart Monkey: 4d</li>
                                                            <li>if transformed tower is an x5x Dart Monkey: 7d</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Long Range Darts",
                                "content": `
                                        <ul>
                                            <li>dart attack buffed
                                                <ul>
                                                    <li>+8r (40r)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "002 - Enhanced Eyesight",
                                "content": `
                                        <ul>
                                            <li>dart attack buffed
                                                <ul>
                                                    <li>+8r (48r), increased projectile speed</li>
                                                </ul>
                                            </li>
                                            <li>gains camo detection</li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "003 - Crossbow",
                                "content": `
                                        <ul>
                                            <li>dart replaced by bolt
                                                <ul>
                                                    <li>3d, 6p, 56r, 0.95s, sharp type</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "004 - Sharp Shooter",
                                "content": `
                                        <ul>
                                            <li>bolt attack buffed
                                                <ul>
                                                    <li>+3d (6d), 0.75s, increased projectile speed</li>
                                                    <li>50d crit every 7 shots</li>
                                                    <li>first attack will always crit</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "005 - Crossbow Master",
                                "content": `
                                        <ul>
                                            <li>bolt attack buffed
                                                <ul>
                                                    <li>+3d (9d), +7p (13p), +20r (76r), 0.13s, normal type, increased projectile speed</li>
                                                    <li>crit now occurs every 5 shots</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>105: +6p (19p)</li>
                                                    <li>205: +8p (27p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        }
                    }
                },
                "boomerangMonkey": {
                    "name": "Boomerang Monkey",
                    "data": {
                        "base": `
                                <ul>
                                    <li>$325 (150 MM)</li>
                                    <li>size: 6 radius</li>
                                    <li>placeable on: land</li>
                                    <li>boomerang attack
                                        <ul>
                                            <li>1d, 4p, 43r, 1.2s, sharp type</li>
                                            <li>follows a counterclockwise or clockwise arc instead of a straight line, depending on targeting</li>
                                        </ul>
                                    </li>
                                </ul>
                            `,
                        "top": {
                            "1": {
                                "name": "100 - Improved Rangs",
                                "content": `
                                        <ul>
                                            <li>boomerang attack buffed
                                                <ul>
                                                    <li>+3p (7p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "200 - Glaives",
                                "content": `
                                        <ul>
                                            <li>boomerang attack buffed
                                                <ul>
                                                    <li>+3p (10p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "300 - Glaive Ricochet",
                                "content": `
                                        <ul>
                                            <li>boomerang replaced by glaive
                                                <ul>
                                                    <li>1d, 40p, 43r, 1.2s, sharp type</li>
                                                    <li>jumps to a nearby (62.5 units) target after hitting</li>
                                                    <li>travels in a straight line</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "400 - M.O.A.R Glaives",
                                "content": `
                                        <ul>
                                            <li>glaive buffed
                                                <ul>
                                                    <li>+40p (80p), 50%s (0.6s), increased projectile speed</li>
                                                    <li>can jump up to 187.5 units</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "500 - Glaive Lord",
                                "content": `
                                        <ul>
                                            <li>glaive buffed
                                                <ul>
                                                    <li>+7d (8d)</li>
                                                    <li>first hit applies shred status
                                                        <ul>
                                                            <li>100md/1.0s, 15.1s duration</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>gains orbital-glaive attack
                                                <ul>
                                                    <li>2d, 5cd (7cd), 5md (7md), +5fd, 1000p, 30r zone, 0.1s, sharp type, camo</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>502: orbital-glaive +1d (3d), +1ld (4ld), normal type</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Faster Throwing",
                                "content": `
                                        <ul>
                                            <li>boomerang attack buffed
                                                <ul>
                                                    <li>75%s (0.9s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "020 - Faster Rangs",
                                "content": `
                                        <ul>
                                            <li>boomerang attack buffed
                                                <ul>
                                                    <li>75%s (0.675s), increased projectile speed</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "030 - Bionic Boomerang",
                                "content": `
                                        <ul>
                                            <li>boomerang attack buffed
                                                <ul>
                                                    <li>+2md (3md), 0.238s</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "040 - Turbo Charge",
                                "content": `
                                        <ul>
                                            <li>gains turbocharge ability (45s cooldown, 8s duration, battle ready)
                                                <ul>
                                                    <li>+1d, 14.2857%s (0.034s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "050 - Perma Charge",
                                "content": `
                                        <ul>
                                            <li>boomerang attack buffed
                                                <ul>
                                                    <li>+3d (4, 6md), 0.034s</li>
                                                </ul>
                                            </li>
                                            <li>turbocharge replaced by permacharge (40s cooldown, 15s duration, battle ready)
                                                <ul>
                                                    <li>+8d (12d)</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>052: +4d (8d, 10md), permacharge grants +10d instead</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Long Range Rangs",
                                "content": `
                                        <ul>
                                            <li>boomerang attack buffed
                                                <ul>
                                                    <li>+6.45r (49.45r)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "002 - Red Hot Rangs",
                                "content": `
                                        <ul>
                                            <li>boomerang attack buffed
                                                <ul>
                                                    <li>+1d (2d), +1ld (3ld), normal type</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "003 - Kylie Boomerang",
                                "content": `
                                        <ul>
                                            <li>boomerang replaced by kylie
                                                <ul>
                                                    <li>2d, +20p (24p), 49.45r, 1.2s, normal type</li>
                                                    <li>can rehit bloons after 0.3s</li>
                                                    <li>travels in a straight line then returns</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>103: +10p (30p)</li>
                                                    <li>203: +12p (42p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "004 - MOAB Press",
                                "content": `
                                        <ul>
                                            <li>gains press attack
                                                <ul>
                                                    <li>1d, 4md (5md), 200p, 49.45r, 10.0s, normal type</li>
                                                    <li>can rehit after 0.1s</li>
                                                    <li>only targets blimps below BAD</li>
                                                    <li>knocks back blimps
                                                        <ul>
                                                            <li>ZOMG knockback is weaker</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>104: press +100p (300p)</li>
                                                    <li>204: press +120p (420p), +50% knockback distance</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "005 - MOAB Domination",
                                "content": `
                                        <ul>
                                            <li>kylie buffed
                                                <ul>
                                                    <li>+10d (12d), 50%s (0.6s)</li>
                                                </ul>
                                            </li>
                                            <li>press buffed
                                                <ul>
                                                    <li>+45md (50md), +100p (300p), 100r, 50%s (5.0s)</li>
                                                    <li>can see past obstacles</li>
                                                    <li>can target BADs</li>
                                                    <li>0.25s stun</li>
                                                    <li>lifetime halved, so it expires instead of returning</li>
                                                    <li>on expire or 100%p: explosion
                                                        <ul>
                                                            <li>100d, 40p, 50r blast, normal type</li>
                                                            <li>applies burn status
                                                                <ul>
                                                                    <li>50d/1s, 4s duration</li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>205: explosion +10p (50p), +25r (75r)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        }
                    }
                },
                "bombShooter": {
                    "name": "Bomb Shooter",
                    "data": {
                        "base": `
                                <ul>
                                    <li>$525 (0 MM)</li>
                                    <li>size: 6 radius</li>
                                    <li>placeable on: land</li>
                                    <li>bomb attack
                                        <ul>
                                            <li>40r, 1.5s</li>
                                            <li>on contact: explosion
                                                <ul>
                                                    <li>1d, 14p, 12r blast, explosion type</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            `,
                        "top": {
                            "1": {
                                "name": "100 - Bigger Bombs",
                                "content": `
                                        <ul>
                                            <li>explosion buffed
                                                <ul>
                                                    <li>+6p (20), +50%r (18r)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "200 - Heavy Bombs",
                                "content": `
                                        <ul>
                                            <li>explosion buffed
                                                <ul>
                                                    <li>+1d (2d), +10p (30p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "300 - Really Big Bombs",
                                "content": `
                                        <ul>
                                            <li>explosion buffed
                                                <ul>
                                                    <li>+1d (3d), +20p (50p), +50%r (27r)</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>302: frags +2d (3d), +1p (2p), +4j (12j)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "400 - Bloon Impact",
                                "content": `
                                        <ul>
                                            <li>bomb buffed
                                                <ul>
                                                    <li>+3r (43r)</li>
                                                </ul>
                                            </li>
                                            <li>explosion buffed
                                                <ul>
                                                    <li>applies stun status (1s duration) to bloons</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>402: frags +1p (3p), +4j (16j)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "500 - Bloon Crush",
                                "content": `
                                        <ul>
                                            <li>explosion buffed
                                                <ul>
                                                    <li>+27d (30), normal type</li>
                                                </ul>
                                            </li>
                                            <li>stun buffed
                                                <ul>
                                                    <li>1.75s duration, can affect blimps</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>502: frags +9d (12d), +12cd (24cd), +18p (20p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Faster Reload",
                                "content": `
                                    <ul>
                                            <li>bomb buffed
                                                <ul>
                                                    <li>75%s (1.125s)</li>
                                                </ul>
                                            </li>
                                        </ul> 
                                    `
                            },
                            "2": {
                                "name": "020 - Missile Launcher",
                                "content": `
                                        <ul>
                                            <li>bomb buffed
                                                <ul>
                                                    <li>73.33%s (0.825s), +4r (44r), increased projectile speed</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "030 - MOAB Mauler",
                                "content": `
                                        <ul>
                                            <li>bomb buffed
                                                <ul>
                                                    <li>+5r (49r)</li>
                                                </ul>
                                            </li>
                                            <li>explosion buffed
                                                <ul>
                                                    <li>+18md (19md)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "040 - MOAB Assassin",
                                "content": `
                                        <ul>
                                            <li>bomb buffed
                                                <ul>
                                                    <li>+5r (54r)</li>
                                                </ul>
                                            </li>
                                            <li>explosion buffed
                                                <ul>
                                                    <li>+3cd (4cd), +12md (31md)</li>
                                                </ul>
                                            </li>
                                            <li>gains assassinate ability (30s cooldown, battle ready)
                                                <ul>
                                                    <li>750d, &#8734;r</li>
                                                    <li>targets strongest blimp</li>
                                                    <li>on contact: assassin-explosion
                                                        <ul>
                                                            <li>3d, 100p, 30r blast, normal type</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "050 - MOAB Eliminator",
                                "content": `
                                        <ul>
                                            <li>bomb buffed: +170md (201md), normal type</li>
                                            <li>assassinate replaced by eliminate (10s cooldown, battle ready)
                                                <ul>
                                                    <li>4500d</li>
                                                    <li>targets strongest blimp</li>
                                                    <li>on contact: elim-explosion
                                                        <ul>
                                                            <li>3d, 100p, 30r blast, normal type</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Extra Range",
                                "content": `
                                        <ul>
                                            <li>bomb buffed
                                                <ul>
                                                    <li>+7r (47r)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "002 - Frag Bombs",
                                "content": `
                                        <ul>
                                            <li>bomb buffed
                                                <ul>
                                                    <li>+2r (49r), normal type</li>
                                                    <li>on contact: fragments 
                                                        <ul>
                                                            <li>1d, 8j 360&deg spread, 1i, sharp type</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "003 - Cluster Bombs",
                                "content": `
                                        <ul>
                                            <li>frags replaced by cluster
                                                <ul>
                                                    <li>1d, 8j 360&deg spread, 8p, 15r blast, normal type</li>
                                                    <li>note: any given bloon may only be hit by one cluster projectile, so the cluster attack can only do 1 damage on a single target (or 2 with 203)</li>
                                                    <ul>
                                                        <li>[BUG] multiple cluster projectiles may hit a bloon when interacting with an obstacle</li>
                                                    </ul>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>103: cluster +6p (14p)</li>
                                                    <li>203: cluster +1d (2d), +6p (20p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "004 - Recursive Cluster",
                                "content": `
                                        <ul>
                                            <li>every other bomb replaced by superbomb</li>
                                            <li>on expire: explosion
                                                <ul>
                                                    <li>1d, 18p, 12r blast, normal type</li>
                                                </ul>
                                            </li>
                                            <li>on expire: supercluster
                                                <ul>
                                                    <li>1d, 8j 360&deg spread, 8p, 15r blast, normal type
                                                        <ul>
                                                            <li>after 0.45s: subcluster
                                                                <ul>
                                                                    <li>1d, 8j 360&deg spread, 48p, 34r blast, normal type</li>
                                                                    <li>note: any given bloon may only be hit by one subcluster projectile, so the subcluster attack can only do 1 damage on a single target (or 2 with 204)</li>
                                                                    <ul>
                                                                        <li>[BUG] multiple cluster projectiles may hit a bloon when interacting with an obstacle</li>
                                                                    </ul>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>note: any given bloon may only be hit by one supercluster projectile, so the supercluster attack can only do 1 damage on a single target (or 2 with 204)</li>
                                                    <ul>
                                                        <li>[BUG] multiple cluster projectiles may hit a bloon when interacting with an obstacle</li>
                                                    </ul>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>104: superbomb +0p, subcluster +36p (84p), all other explosions +6p</li>
                                                    <li>104: subcluster +3.5r (37.5), all other explosions +50%r</li>
                                                    <li>204: superbomb +0p, subcluster +36p (120p), all other explosions +10p</li>
                                                    <li>204: all explosions +1d (as expected)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "005 - Bomb Blitz",
                                "content": `
                                    <ul>
                                            <li>all attacks
                                                <ul>
                                                    <li>+4d (5d)</li>
                                                    <li>all bombs replaced by superbombs</li>
                                                </ul>
                                            </li>
                                            <li>gains bomb-blitz ability (40s cooldown, passive: triggered just before leak)
                                                <ul>
                                                    <li>3000d, &#8734;p, &#8734;r, normal type, camo</li>
                                                    <li>additionally destroys anything remaining below BFB</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        }
                    }
                },
                "tackShooter": {
                    "name": "Tack Shooter",
                    "data": {
                        "base": `
                                <ul>
                                    <li>$280 (0 MM)</li>
                                    <li>size: 6 radius</li>
                                    <li>placeable on: land</li>
                                    <li>tacks attack
                                        <ul>
                                            <li>1d, 8j 360&deg spread, 1p, 23r, 1.4s, sharp type</li>
                                        </ul>
                                    </li>
                                </ul>
                            `,
                        "top": {
                            "1": {
                                "name": "100 - Faster Shooting",
                                "content": `
                                        <ul>
                                            <li>tacks attack buffed
                                                <ul>
                                                    <li>75%s (1.05s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "200 - Even Faster Shooting",
                                "content": `
                                        <ul>
                                            <li>tacks attack buffed
                                                <ul>
                                                    <li>60%s (0.63s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "300 - Hot Shots",
                                "content": `
                                        <ul>
                                            <li>tacks attack buffed
                                                <ul>
                                                    <li>+1d (2d), normal type</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "400 - Ring of Fire",
                                "content": `
                                        <ul>
                                            <li>tacks replaced by ring-of-fire
                                                <ul>
                                                    <li>3d, 45p, 23r zone, 0.47s, fire type</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>410: +10p (55p)</li>
                                                    <li>420: +5p (60p)</li>
                                                    <li>401: +1d (4d)</li>
                                                    <li>402: +1d (5d)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "500 - Inferno Ring",
                                "content": `
                                        <ul>
                                            <li>ring-of-fire buffed
                                                <ul>
                                                    <li>+8d (11d), +11md (22md), +11.5r (34.5r), 0.1s</li>
                                                </ul>
                                            </li>
                                            <li>gains meteor attack
                                                <ul>
                                                    <li>700d, 1p, &#8734;r, 4.0s, fire type, camo, strong priority</li>
                                                    <li>can see past obstacles</li>
                                                    <li>weak homing (100 turn rate)</li>
                                                    <li>applies burn status 
                                                        <ul>
                                                            <li>150d/1.0s, fire type, 4.1s duration</li>
                                                        </ul>
                                                    </li>
                                                    <li>on contact: explosion
                                                        <ul>
                                                            <li>150d single-layer, 10p, 18r blast, explosion type, no camo</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>510: meteor +1p (2p)</lli>
                                                    <li>520: meteor +1p (3p)</li>
                                                    <li>501: meteor +300d (1,000d)</li>
                                                    <li>502: meteor +400d (1,400d)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Long Range Tacks",
                                "content": `
                                        <ul>
                                            <li>tacks attack buffed
                                                <ul>
                                                    <li>+4r (27r), increased projectile speed</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "020 - Super Range Tacks",
                                "content": `
                                        <ul>
                                            <li>tacks attack buffed
                                                <ul>
                                                    <li>+1p (2p), +4r (31r)</li>
                                                </ul>
                                            </li>
                                        </ul>   
                                    `
                            },
                            "3": {
                                "name": "030 - Blade Shooter",
                                "content": `
                                        <ul>
                                            <li>tacks replaced by blades 
                                                <ul>
                                                    <li>1d, +2p (4p), 31r, 88%s (1.232s), sharp type, increased projectile size</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>032: +1p (5p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "040 - Blade Maelstrom",
                                "content": `
                                        <ul>
                                            <li>gains maelstrom ability (20s cooldown, 3s duration, battle ready)
                                                <ul>
                                                    <li>1d, 2j 360&deg spread, 200p, 0.0333s, sharp type</li>
                                                    <li>attack rotates clockwise at a constant speed</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>041: maelstrom rotates counterclockwise at a constant speed</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "050 - Super Maelstrom",
                                "content": `
                                        <ul>
                                            <li>blades buffed
                                                <ul>
                                                    <li>+1d (2d), normal type</li>
                                                </ul>
                                            </li>
                                            <li>maelstrom replaced by super-maelstrom (20s cooldown, 9s duration, battle ready)
                                                <ul>
                                                    <li>2d, 4j, 500p, 0.0333s, normal type</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - More Tacks",
                                "content": `
                                        <ul>
                                            <li>tacks attack buffed
                                                <ul>
                                                    <li>+2j (10j)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "002 - Even More Tacks",
                                "content": `
                                        <ul>
                                            <li>tacks attack buffed
                                                <ul>
                                                    <li>+2j (12j)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "003 - Tack Sprayer",
                                "content": `
                                        <ul>
                                            <li>tacks attack buffed
                                                <ul>
                                                    <li>+4j (16j), 75%s (1.05s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "004 - Overdrive",
                                "content": `
                                        <ul>
                                            <li>tacks attack buffed
                                                <ul>
                                                    <li>+1p (2p), 33.33%s (0.35s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "005 - The Tack Zone",
                                "content": `
                                        <ul>
                                            <li>tacks attack buffed
                                                <ul>
                                                    <li>+1d (2d), +16j (32j), +2p (4p), +7r (30r), 75%s (0.2625)</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>025: +6p (10p), +16r (50r)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        }
                    }
                },
                "iceMonkey": {
                    "name": "Ice Monkey",
                    "data": {
                        "base": `
                                <ul>
                                    <li>$450 (150 MM)</li>
                                    <li>size: 6 radius</li>
                                    <li>placeable on: land</li>
                                    <li>freeze attack
                                        <ul>
                                            <li>1d, 40p, 20r zone, 2.4s, cold type</li>
                                            <li>cannot target blimps or frozen bloons</li>
                                            <li>applies frozen status 
                                                <ul>
                                                    <li>1.5s duration</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            `,
                        "top": {
                            "1": {
                                "name": "100 - Permafrost",
                                "content": `
                                        <ul>
                                            <li>applies permafrost status 
                                                <ul>
                                                    <li>50% slow</li>
                                                </ul>
                                            </li>
                                            <li>note: if blimps are targetable then they obtain permafrost status, but are affected half as much (25% slow)</li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "200 - Cold Snap",
                                "content": `
                                        <ul>
                                            <li>can pop lead</li>
                                            <li>gains camo detection</li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "300 - Ice Shards",
                                "content": `
                                        <ul>
                                            <li>frozen bloons emit shards when popped
                                                <ul>
                                                    <li>1d, 3j, 3i, shatter type</li>
                                                    <li>damage cannot be buffed</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "400 - Embrittlement",
                                "content": `
                                        <ul>
                                            <li>freeze buffed
                                                <ul>
                                                    <li>+5r (25r), normal type</li>
                                                    <li>on contact: decamo, degrow</li>
                                                    <li>applies brittle status
                                                        <ul>
                                                            <li>take +1d, no damage immunity, 2s duration</li>
                                                        </ul>
                                                    </li>
                                                    <li>blimps can be targeted: they will take damage and receive permafrost and brittle status, but not frozen</li>
                                                </ul>
                                            </li>
                                            <li>shards buffed
                                                <ul>
                                                    <li>on contact: decamo, degrow</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "500 - Super Brittle",
                                "content": `
                                        <ul>
                                            <li>freeze buffed
                                                <ul>
                                                    <li>90%s (2.16s)</li>
                                                </ul>
                                            </li>
                                            <li>brittle status buffed
                                                <ul>
                                                    <li>take +4d</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Enhanced Freeze",
                                "content": `
                                        <ul>
                                            <li>freeze buffed
                                                <ul>
                                                    <li>75%s (1.8s)</li>
                                                </ul>
                                            </li>
                                            <li>frozen status buffed
                                                <ul>
                                                    <li>2.2s duration</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "020 - Deep Freeze",
                                "content": `
                                        <ul>
                                            <li>frozen status buffed
                                                <ul>
                                                    <li>soaks through 2 layers</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "030 - Arctic Wind",
                                "content": `
                                        <ul>
                                            <li>freeze attack buffed
                                                <ul>
                                                    <li>+60p (100p), +10r (30r)</li>
                                                </ul>
                                            </li>
                                            <li>gains slow attack
                                                <ul>
                                                    <li>35r</li>
                                                    <li>60% slow, cannot affect blimp</li>
                                                    <li>land towers are placeable on any water in range</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "040 - Snowstorm",
                                "content": `
                                        <ul>
                                            <li>frozen status buffed
                                                <ul>
                                                    <li>3s duration</li>
                                                </ul>
                                            </li>
                                            <li>gains snowstorm ability (30s cooldown, battle ready)
                                                <ul>
                                                    <li>1d, &#8734;p, &#8734;r, shatter type, camo</li>
                                                    <li>applies frozen status (6s duration, or 3s for camo/white/blimp)</li>
                                                    <li>all Ice Monkeys and Fusty the Snowman gain 50%s buff for 6s</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>240: snowstorm damage type changed to normal</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "050 - Absolute Zero",
                                "content": `
                                        <ul>
                                            <li>freeze attack buffed
                                                <ul>
                                                    <li>+200p (300), +10r (40r)</li>
                                                </ul>
                                            </li>
                                            <li>slow buffed
                                                <ul>
                                                    <li>80% slow</li>
                                                </ul>
                                            </li>
                                            <li>frozen status buffed
                                                <ul>
                                                    <li>soaks through 3 layers</li>
                                                </ul>
                                            </li>
                                            <li>blimps can be targeted: they will take damage, but cannot be frozen</li>
                                            <li>snowstorm replaced by absolute-zero (20s cooldown, battle ready)
                                                <ul>
                                                    <li>1d, &#8734;p, &#8734;r, normal type, camo</li>
                                                    <li>applies frozen status (10s duration)</li>
                                                    <li>all Ice Monkeys and Fusty the Snowman gain 50%s buff for 10s</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>150: permafrost 50% slow / 25% for blimps</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Larger Radius",
                                "content": `
                                        <ul>
                                            <li>freeze attack buffed
                                                <ul>
                                                    <li>+7r (27r)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "002 - Re-Freeze",
                                "content": `
                                        <ul>
                                            <li>freeze attack buffed
                                                <ul>
                                                    <li>glacier type</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "003 - Cryo Cannon",
                                "content": `
                                        <ul>
                                            <li>replaces freeze with ice-bomb 
                                                <ul>
                                                    <li>46r, 1.15s</li>
                                                    <li>cannot target blimps</li>
                                                    <li>on contact: freeze
                                                        <ul>
                                                            <li>2d, 30p, 20 blast, glacier type</li>
                                                            <li>applies frozen status (1.5s duration)</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "004 - Icicles",
                                "content": `
                                        <ul>
                                            <li>frozen bloons have icicles
                                                <ul>
                                                    <li>2d, 3p, sharp type</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>204: icicles can pop lead</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "005 - Icicle Impale",
                                "content": `
                                        <ul>
                                            <li>ice-bomb attack buffed
                                                <ul>
                                                    <li>+48md (50md), 75%s (0.8625s), shatter type</li>
                                                </ul>
                                            </li>
                                            <li>blimps can be targeted: frozen ZOMGs are 50% slower, other frozen blimps move at ZOMGs' original speed (~5 units per second)</li>
                                        </ul>
                                    `
                            }
                        }
                    }
                },
                "glueGunner": {
                    "name": "Glue Gunner",
                    "data": {
                        "base": `
                                <ul>
                                    <li>$100 (150 MM)</li>
                                    <li>size: 6 radius</li>
                                    <li>placeable on: land</li>
                                    <li>glue attack
                                        <ul>
                                            <li>1p, 46r, 0.9s</li>
                                            <li>applies glued status
                                                <ul>
                                                    <li>11s duration, 50% slow to bloons, soaks 3 layers</li>
                                                    <li>note: glued never soaks through blimps</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            `,
                        "top": {
                            "1": {
                                "name": "100 - Glue Soak",
                                "content": `
                                        <ul>
                                            <li>glued status buffed
                                                <ul>
                                                    <li>soaks all layers</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "200 - Corrosive Glue",
                                "content": `
                                        <ul>
                                            <li>can target blimps, but the glue lasts half as long (5.5s)</li>
                                            <li>glued status buffed
                                                <ul>
                                                    <li>1d/2.0s, normal type</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "300 - Bloon Dissolver",
                                "content": `
                                        <ul>
                                            <li>glued status buffed
                                                <ul>
                                                    <li>1d/0.575s, 2cd/0.575s, 2md/0.575s</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "400 - Bloon Liquefier",
                                "content": `
                                        <ul>
                                            <li>glue attack buffed
                                                <ul>
                                                    <li>+1p (2p), 72.22%s (0.65s)</li>
                                                </ul>
                                            </li>
                                            <li>glued status buffed
                                                <ul>
                                                    <li>1d/0.1s, 2cd/0.1s, 2md/0.1s</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "500 - The Bloon Solver",
                                "content": `
                                        <ul>
                                            <li>glue replaced by glue-bomb
                                                <ul>
                                                    <li>2j, 34.62%s (0.225s), applies glued status</li>
                                                    <li>on contact: splat
                                                        <ul>
                                                            <li>5p, 12r blast, applies glued status</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>glued status buffed
                                                <ul>
                                                    <li>6cd/0.1s, 10md/0.1s</li>
                                                    <li>does single-layer damage to ceramics</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>510: splat +1p (6p)</li>
                                                    <li>520: splat +4p (15?p), +13r (25)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Bigger Globs",
                                "content": `
                                        <ul>
                                            <li>glue attack buffed
                                                <ul>
                                                    <li>+1p (2p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "020 - Glue Splatter",
                                "content": `
                                        <ul>
                                            <li>glue replaced by glue-bomb
                                                <ul>
                                                    <li>46r, 0.9s, applies glued status</li>
                                                    <li>on contact: splat
                                                        <ul>
                                                            <li>9p, 13r blast, applies glued status</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "030 - Glue Hose",
                                "content": `
                                        <ul>
                                            <li>glue-bomb attack buffed
                                                <ul>
                                                    <li>34%s (0.306s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "040 - Glue Strike",
                                "content": `
                                        <ul>
                                            <li>gains glue-strike ability (30s cooldown, battle ready)
                                                <ul>
                                                    <li>&#8734;p, &#8734;r, camo</li>
                                                    <li>cannot target blimps</li>
                                                    <li>applies weakening-glue status
                                                        <ul>
                                                            <li>11s duration, 50% slow, take +2d, soaks 6 layers, removes lead property while active</li>
                                                        </ul>
                                                    </li>
                                                    <li>crosspath
                                                        <ul>
                                                            <li>240: weakening-glue can be applied to blimps</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "050 - Glue Storm",
                                "content": `
                                        <ul>
                                            <li>glue-strike replaced by glue-storm (30s cooldown, 20s duration, battle ready)
                                                <ul>
                                                    <li>&#8734;p, &#8734;r, 2.0s, camo</li>
                                                    <li>cannot target blimps</li>
                                                    <li>applies weakening-glue</li>
                                                </ul>
                                            </li>
                                            <li>weakening-glue buffed
                                                <ul>
                                                    <li>22s duration, 75% slow, soaks 9 layers</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>051: weakening-glue 48s duration</li>
                                                    <li>052: weakening-glue 90% slow</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Stickier Glue",
                                "content": `
                                        <ul>
                                            <li>glued status buffed
                                                <ul>
                                                    <li>+13s duration (24s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "002 - Stronger Glue",
                                "content": `
                                        <ul>
                                            <li>glued status buffed
                                                <ul>
                                                    <li>75% slow</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "003 - MOAB Glue",
                                "content": `
                                        <ul>
                                            <li>can target blimps, but the glue lasts half as long (12s)</li>
                                            <li>glued status buffed
                                                <ul>
                                                    <li>37.5% slow to blimps</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "004 - Relentless Glue",
                                "content": `
                                        <ul>
                                            <li>gains camo detection</li>
                                            <li>on pop: stun-splat
                                                <ul>
                                                    <li>6p, 12p, applies stun (1s, MOABs and DDTs for 0.35s, BFBs for 0.2s, ZOMGs for 0.1s)</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>014: stun-splat +1p (7p)</li>
                                                    <li>024: stun-splat +3p (10p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "005 - Super Glue",
                                "content": `
                                        <ul>
                                            <li>glue attack buffed
                                                <ul>
                                                    <li>+5p (6p)</li>
                                                </ul>
                                            </li>
                                            <li>glued status buffed:
                                                <ul>
                                                    <li>1d/2.3s</li>
                                                    <li>on application: 50md (unbuffable) </li>
                                                    <li>bloons are slowed 100% for the full 24s</li>
                                                    <li>MOABs and DDTs are slowed 100% for 5s</li>
                                                    <li>BFBs are slowed 95% for 2.0s</li>
                                                    <li>ZOMGs are slowed 90% for 1.0s</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>205: glued 1d/2.0s, level 5</li>
                                                    <li>025: splat +5p (15p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        }
                    }
                }
            }
        },
        "military": {
            "type": "legacy",
            "entries": {
                "sniperMonkey": {
                    "name": "Sniper Monkey",
                    "data": {
                        "base": `
                                <ul>
                                    <li>$250 (500 MM)</li>
                                    <li>size: 6 radius</li>
                                    <li>placeable on: land</li>
                                    <li>20r</li>
                                    <li>bullet attack</li>
                                    <ul>
                                        <li>2d, 1i, ∞r, 1.59s, sharp type</li>
                                    </ul>
                                </ul>
                            `,
                        "top": {
                            "1": {
                                "name": "100 - Full Metal Jacket",
                                "content": `
                                        <ul>
                                            <li>bullet buffed</li>
                                            <ul>
                                                <li>+2d (4d), normal type</li>
                                            </ul>
                                            <li>crosspath</li>
                                            <ul>
                                                <li>120: shrapnel normal type</li>
                                            </ul>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "200 - Large Calibre",
                                "content": `
                                        <ul>
                                            <li>bullet buffed</li>
                                            <ul>
                                                <li>+3d (7d)</li>
                                            </ul>
                                            <li>crosspath</li>
                                            <ul>
                                                <li>220: shrapnel +1d (2d)</li>
                                            </ul>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "300 - Deadly Precision",
                                "content": `
                                    <ul>
                                        <li>bullet buffed</li>
                                            <ul>
                                                <li>+13d (20d), +15cd (35cd)</li>
                                            </ul>
                                        <li>crosspath</li>
                                        <ul>
                                            <li>320: shrapnel +2d (4d)</li>
                                        </ul>
                                    </ul>
                                    `
                            },
                            "4": {
                                "name": "400 - Maim MOAB",
                                "content": `
                                        <ul>
                                            <li>bullet buffed
                                                <ul>
                                                    <li>+10d (30d, 45cd)</li>
                                                    <li>applies stun
                                                        <ul>
                                                            <li>2s duration for MOABs, BFBs 1s, DDTs 0.5s, ZOMGs 0.45s</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>420: shrapnel +2d (6d), applies stun</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "500 - Cripple MOAB",
                                "content": `
                                        <ul>
                                            <li>bullet buffed
                                                <ul>
                                                    <li>+250d (280d, 295cd)</li>
                                                </ul>
                                            </li>
                                            <li>stun duration buffed
                                                <ul>
                                                    <li>MOAB 7s, BFB 6s, ZOMG 3s, DDT 4s</li>
                                                    <li>applies crippled status
                                                        <ul>
                                                            <li>take +5d</li>
                                                            <li>same durations as stun, or 0.5s for BADs</li>
                                                            <li>note: applied before the target takes damage</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>520: shrapnel +6d (12d), applies crippled status</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Night Vision Goggles",
                                "content": `
                                        <ul>
                                            <li>gains camo detection</li>
                                            <li>bullet buffed
                                                <ul>
                                                    <li>+2cad</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "020 - Shrapnel Shot",
                                "content": `
                                        <ul>
                                            <li>bullet buffed
                                                <ul>
                                                    <li>on damage: shrapnel
                                                        <ul>
                                                            <li>1d, 5j 45&deg spread, 2p, sharp type</li>
                                                            <li>spread centered around direction fired</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "030 - Bouncing Bullet",
                                "content": `
                                        <ul>
                                            <li>bullet buffed
                                                <ul>
                                                    <li>4i</li>
                                                    <li>jumps to targets within 50 units</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "040 - Supply Drop",
                                "content": `
                                        <ul>
                                            <li>bullet buffed
                                                <ul>
                                                    <li>normal type</li>
                                                </ul>
                                            </li>
                                            <li>gains supply-drop ability (40s cooldown, 15s initial)
                                                <ul>
                                                    <li>drops a crate worth $2000</li>
                                                </ul>
                                            </li>
                                            <li>shrapnel buffed
                                                <ul>
                                                    <li>+1p (3p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "050 - Elite Sniper",
                                "content": `
                                        <ul>
                                            <li>bullet buffed
                                                <ul>
                                                    <li>40%s (0.636s)</li>
                                                </ul>
                                            </li>
                                            <li>gains elite buff
                                                <ul>
                                                    <li>affects all snipers, excluding self</li>
                                                    <li>75%s</li>
                                                    <li>enables elite targeting for all snipers</li>
                                                    <li>prioritizes First if bloons are past 75% of the track, then Ceramics if there are any, otherwise Strong</li>
                                                </ul>
                                            </li>
                                            <li>supply-drop replaced by elite-supplies (40s cooldown, inherit cooldown)
                                                <ul>
                                                    <li>drops a crate worth $5000</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Fast Firing",
                                "content": `
                                        <ul>
                                            <li>bullet buffed
                                                <ul>
                                                    <li>70%s (1.113s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "002 - Even Faster Firing",
                                "content": `
                                        <ul>
                                            <li>bullet buffed
                                                <ul>
                                                    <li>70%s (0.7791s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "003 - Semi-Automatic",
                                "content": `
                                        <ul>
                                            <li>bullet buffed
                                                <ul>
                                                    <li>33.33%s (0.2597s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "004 - Full Auto Rifle",
                                "content": `
                                        <ul>
                                            <li>bullet buffed
                                                <ul>
                                                    <li>50%s (0.12985s), +2md (4md)</li>
                                                    <li>can pop lead</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>104: +1md (7md)</li>
                                                    <li>204: +1md (11md)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "005 - Elite Defender",
                                "content": `
                                        <ul>
                                            <li>bullet buffed
                                                <ul>
                                                    <li>50%s (0.064925s)</li>
                                                    <li>additionally shoots x% faster, where x% is how far along the track the furthest forward bloon is</li>
                                                </ul>
                                            </li>
                                            <li>gains retaliation ability (10s cooldown, 7s duration, passive: triggered bloons coming close to the exit)
                                                <ul>
                                                    <li>25%s</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        }
                    }
                },
                "monkeySub": {
                    "name": "Monkey Sub",
                    "data": {
                        "base": `
                                <ul>
                                    <li>$325 (500 MM)</li>
                                    <li>size: 7 radius</li>
                                    <li>placeable on: water</li>
                                    <li>dart attack
                                        <ul>
                                            <li>1d, 2p, 42r, 0.75s, sharp type</li>
                                            <li>moderate homing (360 turn rate)</li>
                                        </ul>
                                    </li>
                                </ul>
                            `,
                        "top": {
                            "1": {
                                "name": "100 - Longer Range",
                                "content": `
                                        <ul>
                                            <li>dart attack
                                                <ul>
                                                    <li>+10r (52r)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "200 - Advanced Intel",
                                "content": `
                                        <ul>
                                            <li>uses shared range
                                                <ul>
                                                    <li>can target anything in the visible range circle of any tower - usually the range of the primary attack</li>
                                                    <li>a projectile can see camo if aiming at the range of a tower that can see camo with its primary attack, so, any tower that \"gains camo detection\"</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "300 - Submerge and Support",
                                "content": `
                                        <ul>
                                            <li>gains submerge targeting option
                                                <ul>
                                                    <li>while submerged, dart is replaced by sonar
                                                        <ul>
                                                            <li>75p, 52r zone, 1.5s passive, decamo</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>301: sonar 85%s (1.275s)</li>
                                                    <li>302: sonar 75%s (0.95625s)</li>
                                                    <li>310: sonar +20%p (90p)</li>
                                                    <li>320: sonar +25%p (102.5?p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "400 - Bloontonium Reactor",
                                "content": `
                                        <ul>
                                            <li>sonar buffed
                                                <ul>
                                                    <li>150p, 0.4s</li>
                                                </ul>
                                            </li>
                                            <li>while submerged, gains radioactive attack
                                                <ul>
                                                    <li>1d, 30p, 52r zone, 0.4s passive, shatter type</li>
                                                </ul>
                                            </li>
                                            <li>while submerged, abilities of water towers in range -15% cooldown time</li>
                                            <li>crosspath
                                                <ul>
                                                    <li>410: sonar +20%p (180p), radioactive +5p (35p)</li>
                                                    <li>420: sonar +25%p (225p), radioactive +1ld, +15p (50), normal type</li>
                                                    <li>401: radioactive 75%s (0.3s)</li>
                                                    <li>402: radioactive 66.66%s (0.2s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "500 - Energizer",
                                "content": `
                                        <ul>
                                            <li>sonar buffed
                                                <ul>
                                                    <li>1000p</li>
                                                </ul>
                                            </li>
                                            <li>radioactive buffed
                                                <ul>
                                                    <li>5d, 10cd (15cd), 1000p</li>
                                                </ul>
                                            </li>
                                            <li>while submerged, abilities of water towers in range have -50% cooldown time, all other abilities have -20% cooldown time</li>
                                            <li>hero in range gains +75% XP</li>
                                            <li>hero upgrade cost reduced by 42.8571%</li>
                                            <li>crosspath
                                                <ul>
                                                    <li>310: sonar +200p (1200p)</li>
                                                    <li>320: sonar +300p (1500p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Barbed Darts",
                                "content": `
                                        <ul>
                                            <li>dart attack
                                                <ul>
                                                    <li>+3p (5p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "020 - Heat-tipped Darts",
                                "content": `
                                        <ul>
                                            <li>dart attack
                                                <ul>
                                                    <li>normal type</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "030 - Ballistic Missile",
                                "content": `
                                        <ul>
                                            <li>dart attack
                                                <ul>
                                                    <li>+8r (50r)</li>
                                                </ul>
                                            </li>
                                            <li>gains missile attack
                                                <ul>
                                                    <li>50r, 1.105s</li>
                                                    <li>on expire (0.6s): explosion
                                                        <ul>
                                                            <li>2d, 5cd (7cd), 5md (7md), 50p, 18r blast, explosion type</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>230: missile shared range</li>
                                                    <li>031: missile 90%s (0.9945s)</li>
                                                    <li>032: missile 90%s (0.89505s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "040 - First Strike Capability",
                                "content": `
                                        <ul>
                                            <li>gains first-strike ability (60s cooldown, battle ready)
                                                <ul>
                                                    <li>7,000d, &#8734;r, normal type, camo, strong priority</li>
                                                    <li>penetrates blimp layers</li>
                                                    <li>creates explosion
                                                        <ul>
                                                            <li>200d, 80p, 65r blast, normal type</li>
                                                            <li>penetrates blimp layers</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "050 - Pre-emptive Strike",
                                "content": `
                                        <ul>
                                            <li>missile buffed
                                                <ul>
                                                    <li>0.5s</li>
                                                </ul>
                                            </li>
                                            <li>missile explosion buffed
                                                <ul>
                                                    <li>+8d (10d), +9cd (25cd), +9md (25md)</li>
                                                </ul>
                                            </li>
                                            <li>first-strike buffed
                                                <ul>
                                                    <li>30s cooldown</li>
                                                </ul>
                                            </li>
                                            <li>gains pre-emptive-strike ability (triggered by a blimp entering the map)
                                                <ul>
                                                    <li>800d, normal type, camo</li>
                                                    <li>targets blimp that triggered the ability</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Twin Guns",
                                "content": `
                                        <ul>
                                            <li>dart attack
                                                <ul>
                                                    <li>50%s (0.375s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "002 - Airburst Darts",
                                "content": `
                                        <ul>
                                            <li>dart replaced by airburst
                                                <ul>
                                                    <li>1d, 1i, 42r, 0.375s, sharp type</li>
                                                    <li>on contact or expire: subdart
                                                        <ul>
                                                            <li>1d, 3j 75&deg spread, 2p, sharp type</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "003 - Triple Guns",
                                "content": `
                                        <ul>
                                            <li>67%s (0.25125s)</li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "004 - Armor Piercing Darts",
                                "content": `
                                        <ul>
                                            <li>airburst buffed
                                                <ul>
                                                    <li>+1d (2d), +2md (4md)</li>
                                                </ul>
                                            </li>
                                            <li>subdart buffed
                                                <ul>
                                                    <li>+1md (2md), +3p (5p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "005 - Sub Commander",
                                "content": `
                                    <ul>
                                            <li>airburst buffed
                                                <ul>
                                                    <li>33.33%s (0.08375s)</li>
                                                </ul>
                                            </li>
                                            <li>gains command buff
                                                <ul>
                                                    <li>affects all sub on screen, including self</li>
                                                    <li>+20r</li>
                                                    <li>double damage and +6p to all attacks except for first-strike ability</li>
                                                </ul>
                                            </li>
                                        </ul> 
                                    `
                            }
                        }
                    }
                },
                "monkeyBuccaneer": {
                    "name": "Monkey Buccaneer",
                    "data": {
                        "base": `
                                <ul>
                                    <li>$500 (500 MM)</li>
                                    <li>size: 8 radius</li>
                                    <li>placeable on: water</li>
                                    <li>dart attack
                                        <ul>
                                            <li>1d, 4p, 60r, 1.0s, sharp type</li>
                                        </ul>
                                    </li>
                                    <li>this attack is duplicated in both directions</li>
                                </ul>
                            `,
                        "top": {
                            "1": {
                                "name": "100 - Faster Shooting",
                                "content": `
                                        <ul>
                                            <li>dart buffed
                                                <ul>
                                                    <li>75%s (0.75s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "200 - Double Shot",
                                "content": `
                                        <ul>
                                            <li>dart buffed
                                                <ul>
                                                    <li>+1j (2j)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "300 - Destroyer",
                                "content": `
                                        <ul>
                                            <li>dart buffed
                                                <ul>
                                                    <li>20%s (0.15s)</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>310: grape 33.33%s (0.325s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "400 - Aircraft Carrier",
                                "content": `
                                        <ul>
                                            <li>spawns three permanent plane subtowers
                                                <ul>
                                                    <li>forward-dart attack
                                                        <ul>
                                                            <li>1d, +3cd (4cd), 2j, 13p, 0.15s, sharp type</li>
                                                            <li>can only aim directly in front</li>
                                                        </ul>
                                                    </li>
                                                    <li>radial-dart attack
                                                        <ul>
                                                            <li>1d, 8j, 9p, 1.0s passive, sharp type</li>
                                                        </ul>
                                                    </li>
                                                    <li>moab-missile attack
                                                        <ul>
                                                            <li>&#8734;r, 3.0s</li>
                                                            <li>can only affect blimps</li>
                                                            <li>moderate homing</li>
                                                            <li>on contact: explosion
                                                                <ul>
                                                                    <li>20d, 3p, 30r blast, normal type</li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>note: inherits buffs to the buccaneer, except alchemist buffs</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>401: forward-dart +1p (10p), radial-dart +1p (10p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "500 - Carrier Flagship",
                                "content": `
                                        <ul>
                                            <li>dart buffed
                                                <ul>
                                                    <li>normal type</li>
                                                </ul>
                                            </li>
                                            <li>plane forward-dart buffed
                                                <ul>
                                                    <li>+1d (2d), 1j, +3cd (8cd), +5p (18p), &#8734;r, normal type</li>
                                                    <li>aimed according to the main tower's targeting instead of straight forward</li>
                                                </ul>
                                            </li>
                                            <li>plane radial-dart buffed
                                                <ul>
                                                    <li>+2d (3d), +3cd (5cd), +5p (14p), normal type</li>
                                                </ul>
                                            </li>
                                            <li>plane moab-missile buffed
                                                <ul>
                                                    <li>50%s (1.5s)</li>
                                                </ul>
                                            </li>
                                            <li>plane moab-missile explosion buffed
                                                <ul>
                                                    <li>+60d (80d), +1p (4p), normal type</li>
                                                </ul>
                                            </li>
                                            <li>gains flagship buff
                                                <ul>
                                                    <li>affects all water towers and aces, including self (which affects the planes)</li>
                                                    <li>85%s</li>
                                                </ul>
                                            </li>
                                            <li>gains 2 small platforms that can be used to place towers
                                                <ul>
                                                    <li>towers on a platform should see over most obstacles</li>
                                                    <li>fits up to 7r towers</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Grape Shot",
                                "content": `
                                        <ul>
                                            <li>gains grape attack
                                                <ul>
                                                    <li>1d, 5j 80&deg spread, 1p, 1.3s, sharp type</li>
                                                    <li>this attack is duplicated in both directions</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>110: grape 75%s (0.975s)</li>
                                                    <li>210: grape +5j (10j)</li>
                                                    <li>011: grape +1p (2p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "020 - Hot Shot",
                                "content": `
                                        <ul>
                                            <li>grape buffed
                                                <ul>
                                                    <li>fire type</li>
                                                    <li>applies burn status
                                                        <ul>
                                                            <li>1d/1.5s, fire type, 3.1s duration</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "030 - Cannon Ship",
                                "content": `
                                        <ul>
                                            <li>gains cannonball attack
                                                <ul>
                                                    <li>1.2s
                                                        <ul>
                                                            <li>on contact: explosion</li>
                                                            <li>1d, 25p, 40r blast, explosion type</li>
                                                        </ul>
                                                    </li>
                                                    <li>on contact: frags
                                                        <ul>
                                                            <li>1d, 8j, 1i, sharp type</li>
                                                            <li>damage cannot be buffed</li>
                                                        </ul>
                                                    </li>
                                                    <li>this attack is duplicated in both directions</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>130: cannonball 75%s (0.9s)</li>
                                                    <li>031: explosion +7p (35p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "040 - Monkey Pirates",
                                "content": `
                                        <ul>
                                            <li>cannonball buffed
                                                <ul>
                                                    <li>+2j (3j ? spread), 1.3s</li>
                                                </ul>
                                            </li>
                                            <li>explosion buffed: +1d (2d)</li>
                                            <li>gains takedown ability (30s cooldown, battle ready)
                                                <ul>
                                                    <li>targets the strongest \"small\" blimp (not ZOMG or BAD), immediately removing it</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "050 - Pirate Lord",
                                "content": `
                                        <ul>
                                            <li>dart buffed
                                                <ul>
                                                    <li>50%s (0.5s)</li>
                                                </ul>
                                            </li>
                                            <li>grape buffed
                                                <ul>
                                                    <li>5d, +5cd (10cd), 50%s (0.65s)</li>
                                                </ul>
                                            </li>
                                            <li>takedown replaced by zomg-takedown (30s cooldown, battle ready)
                                                <ul>
                                                    <li>hooks up to 3 blimps other than BAD</li>
                                                    <li>ZOMGs use 2 hooks</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Long Range",
                                "content": `
                                        <ul>
                                            <li>dart buffed
                                                <ul>
                                                    <li>+11r (71r), +1p (5p), projectile speed increased</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "002 - Crow's Nest",
                                "content": `
                                        <ul>
                                            <li>gains camo detection</li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "003 - Merchantman",
                                "content": `
                                        <ul>
                                            <li>$300 end of round income</li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "004 - Favored Trades",
                                "content": `
                                        <ul>
                                            <li>+$700 end of round income ($1,000)</li>
                                            <li>dart buffed
                                                <ul>
                                                    <li>50%s (0.5s)</li>
                                                </ul>
                                            </li>
                                            <li>gains cashback buff
                                                <ul>
                                                    <li>affects anything in range, including self</li>
                                                    <li>+10% sellback price</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>014: grape 0.75s</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "005 - Trade Empire",
                                "content": `
                                        <ul>
                                            <li>+$2,000 end of round income (3,000$)</li>
                                            <li>all attacks buffed: +1d (2d), +1cd (3cd), +1md (3md)</li>
                                            <li>gains trade buff
                                                <ul>
                                                    <li>affects up to 20 xx3 or xx4 buccaneers</li>
                                                    <li>+1d, +1cd, +1md</li>
                                                    <li>+5% * n income, where n is the number of buffed towers</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        }
                    }
                },
                "monkeyAce": {
                    "name": "Monkey Ace",
                    "data": {
                        "base": `
                                <ul>
                                    <li>$700 (500 MM)</li>
                                    <li>size: 28 units * 18 units</li>
                                    <li>placeable on: land</li>
                                    <li>22r</li>
                                    <li>radial-dart attack
                                        <ul>
                                            <li>1d, 8j 360&deg spread, 5p, 1.5s passive, sharp type</li>
                                        </ul>
                                    </li>
                                    <li>flies on a circular path with radius 80, or a figure 8 or figure infinite with radii 40</li>
                                </ul>
                            `,
                        "top": {
                            "1": {
                                "name": "100 - Rapid Fire",
                                "content": `
                                        <ul>
                                            <li>radial-dart buffed
                                                <ul>
                                                    <li>75%s (1.125s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "200 - Lots More Darts",
                                "content": `
                                        <ul>
                                            <li>radial-dart buffed
                                                <ul>
                                                    <li>+4j (12j)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "300 - Fighter Plane",
                                "content": `
                                        <ul>
                                            <li>flies 20% faster</li>
                                            <li>gains moab-missile attack
                                                <ul>
                                                    <li>2j, 3.0s</li>
                                                    <li>can only affect blimps</li>
                                                    <li>moderate homing (accelerates from a starting turn rate of 25 up to 400, accelerating projectile speed as well)</li>
                                                    <li>on contact: explosion
                                                        <ul>
                                                            <li>20d, 4p, 30r blast, normal type</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>310: moab-missile explosion +2p (6p), +4.5r (34.5r)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "400 - Operation: Dart Storm",
                                "content": `
                                        <ul>
                                            <li>radial-dart buffed
                                                <ul>
                                                    <li>+4j (16j), +4p (9p), 48%s (0.54s)</li>
                                                </ul>
                                            </li>
                                            <li>moab-missile buffed:
                                                <ul>
                                                    <li>50%s (1.5s)</li>
                                                </ul>
                                            </li>
                                            <li>explosion buffed
                                                <ul>
                                                    <li>+6d (26d)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "500 - Sky Shredder",
                                "content": `
                                        <ul>
                                            <li>radial-dart buffed
                                                <ul>
                                                    <li>+2d (3d), +2cd (5cd), +16j (32j), +5p (14p), 50%s (0.27s), normal type</li>
                                                    <li>much faster projectile speed</li>
                                                </ul>
                                            </li>
                                            <li>explosion buffed
                                                <ul>
                                                    <li>200d, +1p (5p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Exploding Pineapple",
                                "content": `
                                        <ul>
                                            <li>gains pineapple attack
                                                <ul>
                                                    <li>2.0s</li>
                                                    <li>on expire: explosion
                                                        <ul>
                                                            <li>1d, 20p, 25r blast, 2.0s, explosion type</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>110: pineapple 60%s (1.2s)</li>
                                                    <li>011: explosion +12p (32p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "020 - Spy Plane",
                                "content": `
                                        <ul>
                                            <li>gains camo detection</li>
                                            <li>all attacks buffed: +1cad (2cad)</li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "030 - Bomber Ace",
                                "content": `
                                        <ul>
                                            <li>pineapple replaced by bombing-run
                                                <ul>
                                                    <li>4j, 1.7s</li>
                                                    <li>can only be used above a path</li>
                                                    <li>on expire: explosion
                                                        <ul>
                                                            <li>3d, +1cad (4cad), 12p, 35r blast, 1.7s, explosion type</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>130: bombing-run +8p (20p), 60%s (1.02s)</li>
                                                    <li>031: bombing-run +12p (24p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "040 - Ground Zero",
                                "content": `
                                    <ul>
                                            <li>bombing-run buffed
                                                <ul>
                                                    <li>+7d (10d, 11cad), +20p (40p)</li>
                                                </ul>
                                            </li>
                                            <li>gains ground-zero ability (35s cooldown, battle ready)
                                                <ul>
                                                    <li>700d, 1000p, normal type</li>
                                                </ul>
                                            </li>
                                        </ul> 
                                    `
                            },
                            "5": {
                                "name": "050 - Tsar Bomba",
                                "content": `
                                        <ul>
                                            <li>bombing-run buffed
                                                <ul>
                                                    <li>normal type</li>
                                                </ul>
                                            </li>
                                            <li>ground-zero replaced by tsar-bomba (35s cooldown, battle ready)
                                                <ul>
                                                    <li>3000d, 5000p, normal type</li>
                                                    <li>applies stun: 8.2s duration</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Sharper Darts",
                                "content": `
                                        <ul>
                                            <li>radial-dart buffed
                                                <ul>
                                                    <li>+4p (9p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "002 - Advanced Navigation",
                                "content": `
                                        <ul>
                                            <li>gains advanced navigation targeting
                                                <ul>
                                                    <li>allows any flight path to be placed with a center point anywhere on the map</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "003 - Neva-Miss Targeting",
                                "content": `
                                    <ul>
                                            <li>radial-dart buffed
                                                <ul>
                                                    <li>+4p (13p), moderate homing (360 turn rate), increased projectile speed</li>
                                                </ul>
                                            </li>
                                        </ul> 
                                    `
                            },
                            "4": {
                                "name": "004 - Spectre",
                                "content": `
                                        <ul>
                                            <li>radial-dart replaced by barrage
                                                <ul>
                                                    <li>&#8734;r, 0.04s</li>
                                                    <li>always targets first</li>
                                                    <li>alternately fires dart and bomb</li>
                                                </ul>
                                            </li>
                                            <li>dart projectile
                                                <ul>
                                                    <li>2d, +2cd (4cd), +2md (4md), 15p, sharp type</li>
                                                    <li>very weak homing (80 turn rate)</li>
                                                </ul>
                                            </li>
                                            <li>bomb projectile
                                                <ul>
                                                    <li>very weak homing (80 turn rate)</li>
                                                    <li>on contact: explosion
                                                        <ul>
                                                            <li>4d, +2cd (6cd), 30p, 20r blast, explosion type</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>204: dart +25%p (18.75p)</li>
                                                    <li>014: bomb explosion +15p (45p), +3r (23r)</li>
                                                    <li>024: dart +1cad (3cad), bomb +1cad (4cad)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "005 - Flying Fortress",
                                "content": `
                                        <ul>
                                            <li>barrage buffed
                                                <ul>
                                                    <li>75%s (0.03s)</li>
                                                </ul>
                                            </li>
                                            <li>dart buffed
                                                <ul>
                                                    <li>+2d (4d), +8md (14md), normal type</li>
                                                </ul>
                                            </li>
                                            <li>bomb buffed
                                                <ul>
                                                    <li>+3d (6d), normal type</li>
                                                </ul>
                                            </li>
                                            <li>gains 2 more copies of barrage, which target last and strong</li>
                                        </ul>
                                    `
                            }
                        }
                    }
                },
                "heliPilot": {
                    "name": "Heli Pilot",
                    "data": {
                        "base": `
                                <ul>
                                    <li>$900 (500 MM)</li>
                                    <li>size: 23 units * 23 units</li>
                                    <li>placeable on: land</li>
                                    <li>22r</li>
                                    <li>dart attack
                                        <ul>
                                            <li>1d, 2j, 3p, 42r, 0.53s, sharp type</li>
                                        </ul>
                                    </li>
                                </ul>
                            `,
                        "top": {
                            "1": {
                                "name": "100 - Quad Darts",
                                "content": `
                                        <ul>
                                            <li>gains a second dart attack</li>
                                            <li>note: this means that alchemist buffs are used up twice as fast</li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "200 - Pursuit",
                                "content": `
                                        <ul>
                                            <li>gains pursuit targeting option
                                                <ul>
                                                    <li>always flies towards a point slightly ahead of the first bloon</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "300 - Razor Rotors",
                                "content": `
                                        <ul>
                                            <li>gains rotor attack
                                                <ul>
                                                    <li>2d, 13p, 35r zone, 0.55s, normal type</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>301: +3p (16p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "400 - Apache Dartship",
                                "content": `
                                        <ul>
                                            <li>dart buffed
                                                <ul>
                                                    <li>75%s (0.3975s)</li>
                                                </ul>
                                            </li>
                                            <li>rotor buffed
                                                <ul>
                                                    <li>+4d (6d), +7p (20p)</li>
                                                </ul>
                                            </li>
                                            <li>gains machinegun attack
                                                <ul>
                                                    <li>1d, 9p, 42r, 0.05s, sharp type</li>
                                                </ul>
                                            </li>
                                            <li>gains rocket attack
                                                <ul>
                                                    <li>4j, 173r, 1.0s</li>
                                                    <li>moderate homing (? turn rate)</li>
                                                    <li>on contact: explosion
                                                        <ul>
                                                            <li>3d, 3cd (6cd), 3md (6md), 40p, 25r blast, explosion type</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>402: machinegun 80%s (0.04s), rocket 80%s (0.8s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "500 - Apache Prime",
                                "content": `
                                        <ul>
                                            <li>dart buffed: +5d (6), +20p (23), energy type</li>
                                            <li>rotor buffed: +4d (10d), +20p (40p)</li>
                                            <li>machinegun buffed: +4d (5d), +6p (15p), plasma type</li>
                                            <li>rocket explosion buffed: +12cd (18cd), +12md (18md)</li>
                                        </ul>
                                    `
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Bigger Jets",
                                "content": `
                                        <ul>
                                            <li>flies faster</li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "020 - IFR",
                                "content": `
                                        <ul>
                                            <li>gains camo detection</li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "030 - Downdraft",
                                "content": `
                                        <ul>
                                            <li>gains downdraft attack
                                                <ul>
                                                    <li>1p, 32r zone, 0.15s</li>
                                                    <li>cannot affect blimps or lead</li>
                                                    <li>sends bloons 32-300 units back</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>032: downdraft 80%s (0.12s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "040 - Support Chinook",
                                "content": `
                                        <ul>
                                            <li>gains redeploy ability (60s cooldown, battle ready)
                                                <ul>
                                                    <li>move a tower, except for: aces, helis, farms, villages, aircraft carriers (4xx or 5xx buccaneers), and temples (4xx or 5xx supers)</li>
                                                </ul>
                                            </li>
                                            <li>gains supplies ability (60s cooldown, 20s initial)
                                                <ul>
                                                    <li>drops $4000 cash and 15 lives</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "050 - Special Poperations",
                                "content": `
                                        <ul>
                                            <li>supplies replaced by special-supplies</li>
                                                <ul>
                                                    <li>drops $8000 and 15 lives</li>
                                                    <li>activates all supplies abilities</li>
                                                </ul>
                                            </li>
                                            <li>gains special-poperations ability (25s cooldown, battle ready)
                                                <ul>
                                                    <li>deploy a marine subtower
                                                        <ul>
                                                            <li>30s lifetime</li>
                                                            <li>bullet attack
                                                                <ul>
                                                                    <li>6d, 20p, 50r, 0.05s, normal type</li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>052: marine bullet 80%s (0.04s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Faster Darts",
                                "content": `
                                        <ul>
                                            <li>dart buffed
                                                <ul>
                                                    <li>+1p, increased projectile speed, increased projectile lifespan</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "002 - Faster Firing",
                                "content": `
                                        <ul>
                                            <li>dart buffed
                                                <ul>
                                                    <li>80%s (0.456s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "003 - MOAB Shove",
                                "content": `
                                        <ul>
                                            <li>gains shove attack
                                                <ul>
                                                    <li>1p</li>
                                                    <li>slows MOABs to -33% normal speed, BFBs to 0%, ZOMGs to 50%, DDTs to 33%</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>013: shove buffed (MOABs to -44%, BFBs to -11%,  ZOMGs to 33%, DDTs to 22%)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "004 - Comanche Defense",
                                "content": `
                                        <ul>
                                            <li>dart buffed
                                                <ul>
                                                    <li>+1d (2)</li>
                                                </ul>
                                            </li>
                                            <li>gains comanche-defense ability (triggered by bloon progress)
                                                <ul>
                                                    <li>summons up to 1 mini-comanche when a bloon crosses 25% of the track, 2 mini-comanches when a bloon crosses 50%, and 3 at 75%</li>
                                                    <li>mini-comanche subtower
                                                        <ul>
                                                            <li>15s lifetime</li>
                                                            <li>dart attack
                                                                <ul>
                                                                    <li>1d, 3j, 4p, 42r, 0.15s, sharp type</li>
                                                                </ul>
                                                            </li>
                                                            <li>rocket attack
                                                                <ul>
                                                                    <li>&#8734;r, 2.0s</li>
                                                                    <li>moderate homing (250 turn rate)</li>
                                                                    <li>on contact: explosion
                                                                        <ul>
                                                                            <li>1d, 2cd (3cd), 2md (3md), 100p, 25r blast, normal type</li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                            <li>mini-comanche flight pattern locked on Pursuit</li>
                                                        </ul>
                                                    </li>
                                                    <li>only summons enough mini-comanches to reach the target number, existing ones will have their lifetime refreshed</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>104: mini-comanche dart +2j (5j)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "005 - Comanche Commander",
                                "content": `
                                        <ul>
                                            <li>dart buffed
                                                <ul>
                                                    <li>+1d (3d)</li>
                                                </ul>
                                            </li>       
                                            <li>mini-comanche buffed: 
                                                <ul>
                                                    <li>&#8734; lifetime, all 3 mini-comanche subtowers are summoned, +1d</li>
                                                </ul>
                                            </li>
                                            <li>rocket buffed
                                                <ul>
                                                    <li>+12d (15d), +6md (23md)</li>
                                                </ul>
                                            </li>   
                                        </ul>
                                    `
                            }
                        }
                    }
                },
                "mortarMonkey": {
                    "name": "Mortar Monkey",
                    "data": {
                        "base": `
                                <ul>
                                    <li>$700 (500 MM)</li>
                                    <li>size: 8 radius</li>
                                    <li>placeable on: land</li>
                                    <li>30r</li>
                                    <li>shell attack
                                        <ul>
                                            <li>2.0s passive</li>
                                            <li>targets randomly within 18 units of selected points</li>
                                            <li>on expire (0.5s): explosion
                                                <ul>
                                                    <li>1d, 35p, 20r blast, explosion type</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            `,
                        "top": {
                            "1": {
                                "name": "100 - Bigger Blast",
                                "content": `
                                        <ul>
                                            <li>explosion buffed
                                                <ul>
                                                    <li>+5p (40p), +8r (28r)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "200 - Bloon Buster",
                                "content": `
                                        <ul>
                                            <li>explosion buffed
                                                <ul>
                                                    <li>+1d (2d)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "300 - Shell Shock",
                                "content": `
                                        <ul>
                                            <li>explosion buffed
                                                <ul>
                                                    <li>+10r (38r)</li>
                                                </ul>
                                            </li>
                                            <li>shell buffed
                                                <ul>
                                                    <li>on expire: stun-explosion
                                                        <ul>
                                                            <li>45p, 19r blast</li>
                                                            <li>cannot affect black, zebra, or blimps</li>
                                                            <li>applies stun status: 0.4s duration</li>
                                                        </ul>
                                                    </li>
                                                    <li>on expire: shockwave
                                                        <ul>
                                                            <li>1d, 45p, 57r blast, explosion type</li>
                                                            <li>additionally ignores anything within half of the blast radius</li>
                                                            <li>note: blimps are large enough that they won't fully fit in this inner radius and so get hit</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>302: burn 2d/0.625s, 1.875s duration</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "400 - The Big One",
                                "content": `
                                        <ul>
                                            <li>explosion buffed
                                                <ul>
                                                    <li>+5d (7d), +40p (80p), +20r (58r), normal type</li>
                                                </ul>
                                            </li>
                                            <li>stun-explosion buffed
                                                <ul>
                                                    <li>+40p (85p), +10r (29r)</li>
                                                </ul>
                                            </li>
                                            <li>shockwave buffed
                                                <ul>
                                                    <li>+40p (85p), +30r (87r), normal type</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>402: burn 5d/0.625s</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "500 - The Biggest One",
                                "content": `
                                        <ul>
                                            <li>explosion buffed
                                                <ul>
                                                    <li>+18d (25d), +25cd (50cd), 35md (60md), +115p (195p), +16r (74r), normal type</li>
                                                </ul>
                                            </li>
                                            <li>stun-explosion buffed
                                                <ul>
                                                    <li>+115p (200p), +8r (37r), additionally stuns blimps for 0.35s</li>
                                                </ul>
                                            </li>
                                            <li>shockwave buffed
                                                <ul>
                                                    <li>+115p (200p), +20cd (21cd), +24r (111r), normal type</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>502: burn 45d/0.625s</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Faster Reload",
                                "content": `
                                        <ul>
                                            <li>shell buffed
                                                <ul>
                                                    <li>75%s (1.5s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "020 - Rapid Reload",
                                "content": `
                                        <ul>
                                            <li>shell buffed
                                                <ul>
                                                    <li>72%s (1.08s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "030 - Heavy Shells",
                                "content": `
                                        <ul>
                                            <li>explosion buffed
                                                <ul>
                                                    <li>normal type, +3cd (4cd), +1md (2md), +1fd, +1ld, +2sd</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "040 - Artillery Battery",
                                "content": `
                                        <ul>
                                            <li>25%s (0.27s), +3 BAD damage (5 BAD damage)</li>
                                            <li>gains bombardment ability (60s cooldown, 7s duration, battle ready)
                                                <ul>
                                                    <li>25%s (0.0675)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "050 - Pop and Awe",
                                "content": `
                                        <ul>
                                            <li>explosion buffed
                                                <ul>
                                                    <li>+9cd (13cd), +6md (7md), +3fd (4fd), +6 BAD damage (16 BAD damage), +3ld (4ld), +8 sd (10sd)</li>
                                                </ul>
                                            </li>
                                            <li>gains pop-and-awe ability (45s cooldown, 10s duration, battle ready)
                                                <ul>
                                                    <li>20d, &#8734;p, &#8734;r, 1.0s, normal type</li>
                                                    <li>applies stun status: 1s duration</li>
                                                    <li>gains artillery-buff
                                                        <ul>
                                                            <li>all x4x mortars get +3 BAD damage</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Increased Accuracy",
                                "content": `
                                        <ul>
                                            <li>shell buffed
                                                <ul>
                                                    <li>8 units random target variance</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "002 - Burny Stuff",
                                "content": `
                                        <ul>
                                            <li>explosion buffed
                                                <ul>
                                                    <li>on contact: applies burn status
                                                        <ul>
                                                            <li>1d/1.4s, fire type, 4.2s duration</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "003 - Signal Flare",
                                "content": `
                                        <ul>
                                            <li>gains camo detection</li>
                                            <li>shell buffed
                                                <ul>
                                                    <li>on expire: flare
                                                        <ul>
                                                            <li>0d, 55p, 50r blast</li>
                                                            <li>on hit: decamo bloons including DDTs</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>103: flare +20r (70r)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "004 - Shattering Shells",
                                "content": `
                                        <ul>
                                            <li>burn buffed
                                                <ul>
                                                    <li>+4d (5d)</li>
                                                </ul>
                                            </li>
                                            <li>shell buffed
                                                <ul>
                                                    <li>on expire: strip
                                                        <ul>
                                                            <li>40p, 20r blast</li>
                                                            <li>cannot affect ZOMG or BAD</li>
                                                            <li>on hit
                                                                <ul>
                                                                    <li>degrow and defortify, besides DDTs</li>
                                                                    <li>delead</li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>104: strip +5p (45p), +8r (28r)</li>
                                                    <li>204: burn +3d (8d)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "005 - Blooncineration",
                                "content": `
                                        <ul>
                                            <li>shell buffed
                                                <ul>
                                                    <li>on expire: places wall-of-fire
                                                        <ul>
                                                            <li>4d, 40p, 15r zone, 0.1s, fire type, camo</li>
                                                            <li>4.5s lifetime</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>explosion buffed
                                                <ul>
                                                    <li>normal type</li>
                                                </ul>
                                            </li>
                                            <li>burn buffed
                                                <ul>
                                                    <li>5d/0.625s, 100md/0.625s</li>
                                                </ul>
                                            </li>
                                            <li>strip buffed
                                                <ul>
                                                    <li>can affect ZOMGs</li>
                                                    <li>degrow and defortify can affect DDTs</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>105: wall-of-fire +5p (45), +6r (21)</li>
                                                    <li>205: burn +3d (8d), +50md (150md), wall-of-fire +1d (5)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        }
                    }
                },
                "dartlingGunner": {
                    "name": "Dartling Gunner",
                    "data": {
                        "base": `
                                <ul>
                                    <li>$800 (500 MM)</li>
                                    <li>size: 7 radius</li>
                                    <li>placeable on: land</li>
                                    <li>20r</li>
                                    <li>dart attack
                                        <ul>
                                            <li>1d, 2p, 0.2s passive, sharp type</li>
                                            <li>targets randomly within 23&deg of selected point</li>
                                        </ul>
                                    </li>
                                    <li>rotates towards cursor at 180&deg/s</li>
                                </ul>
                            `,
                        "top": {
                            "1": {
                                "name": "100 - Focused Firing",
                                "content": `
                                        <ul>
                                            <li>random targeting spread reduced by 60% (9.2&deg)</li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "200 - Laser Shock",
                                "content": `
                                        <ul>
                                            <li>dart buffed
                                                <ul>
                                                <li>+1 shocked1 damage (2 shocked1 damage)</li>
                                                    <li>applies shocked1 status
                                                        <ul>
                                                            <li>1d/0.95s, 1s duration</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "300 - Laser Cannon",
                                "content": `
                                        <ul>
                                            <li>dart replaced by laser
                                                <ul>
                                                    <li>2d, 1 shocked2 damage (3 shocked2 damage), 5p, 0.2s passive, plasma type</li>
                                                    <li>random targeting spread set to 0&deg</li>
                                                    <li>applies shocked2 status
                                                        <ul>
                                                            <li>1d/0.95s, 2s duration</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "400 - Plasma Accelerator",
                                "content": `
                                        <ul>
                                            <li>laser replaced with beam
                                                <ul>
                                                    <li>1d, +1 shocked3 damage (2 shocked3 damage), 40p, 0.2s passive, plasma type</li>
                                                    <li>one solid beam from the tower to the target (or an obstacle on the way)</li>
                                                    <li>applies shocked3 status
                                                        <ul>
                                                            <li>1d/0.95s, 5s duration</li>
                                                        </ul>
                                                    </li>
                                                    <li>any pierce not used on bloons is used to create a focus at the target
                                                        <ul>
                                                            <li>2d, 10md (12md), +1 shocked3 damage, plasma type</li>
                                                            <li>applies shocked-3 status</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>402: +30p (70p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "500 - Ray of Doom",
                                "content": `
                                        <ul>
                                            <li>beam replaced by full-beam
                                                <ul>
                                                    <li>30d, +20 shocked4 damage (50 shocked4 damage), 1000p, 0.2s passive, normal type</li>
                                                    <li>additional +55d to the first target</li>
                                                    <li>one solid beam to the edge of the screen</li>
                                                    <li>applies shocked4 status
                                                        <ul>
                                                            <li>20d/0.95s, 5s duration</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>502: bonus damage applies to first 3 targets</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Advanced Targeting",
                                "content": `
                                        <ul>
                                            <li>gains camo detection</li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "020 - Faster Barrel Spin",
                                "content": `
                                        <ul>
                                            <li>dart buffed
                                                <ul>
                                                    <li>66%s (0.132s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "030 - Hydra Rocket Pods",
                                "content": `
                                        <ul>
                                            <li>dart replaced by rocket
                                                <ul>
                                                    <li>3i, 0.132s</li>
                                                    <li>on contact: explosion
                                                        <ul>
                                                            <li>1d, 6p, 8r blast, normal type</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath:
                                                <ul>
                                                    <li>032: rocket gets +2i, explosion gets +3p (9p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "040 - Rocket Storm",
                                "content": `
                                        <ul>
                                            <li>gains rocket-storm ability (40s cooldown, 8s duration, battle ready)
                                                <ul>
                                                    <li>1i, 10j, 0.5s passive</li>
                                                    <li>75&deg random spread</li>
                                                    <li>on contact: explosion
                                                        <ul>
                                                            <li>4d, 8p, 8r blast, normal type</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath:
                                                <ul>
                                                    <li>140: rocket-storm ability random spread reduced by 30% (52.5&deg)</li>
                                                    <li>042: rocket-storm ability explosion gets +3p (11p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "050 - M.A.D",
                                "content": `
                                        <ul>
                                            <li>rocket buffed
                                                <ul>
                                                    <li>3d, 500md, 300%s (0.396)</li>
                                                </ul>
                                            </li>
                                            <li>explosion buffed
                                                <ul>
                                                    <li>+2d (3)</li>
                                                </ul>
                                            </li>
                                            <li>rocket-storm explosion buffed
                                                <ul>
                                                    <li>+5cd (9), +13md (17md), +10p (18p), +4r (12r)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Faster Swivel",
                                "content": `
                                        <ul>
                                            <li>rotates twice as fast (360&deg/s)</li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "002 - Powerful Darts",
                                "content": `
                                        <ul>
                                            <li>dart buffed
                                                <ul>
                                                    <li>+3p (5p), shatter type, increased projectile speed</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "003 - Buckshot",
                                "content": `
                                        <ul>
                                            <li>dart replaced with buckshot
                                                <ul>
                                                    <li>4d, 6j 23&deg spread, 7p, 130r, 1.5s passive, shatter type
                                                        <ul>
                                                            <li>applies knockback status
                                                                <ul>
                                                                    <li>0.2s duration</li>
                                                                    <li>300% slow for regular bloons, 150% for leads and ceramics</li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>103: +32.5r (162.5r)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "004 - Bloon Area Denial System",
                                "content": `
                                        <ul>
                                            <li>gains 3 more buckshot attacks, which attack in sequence for effectively 0.375s attack cooldown</li>
                                            <li>gains independent targeting
                                                <ul>
                                                    <li>attacks are no longer passive</li>
                                                    <li>priorities (from top to bottom): first, last, close, strong</li>
                                                </ul>
                                            </li>
                                            <li>note: each barrel has a different vertical position, so higher ones may see over obstacles that lower ones do not</li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "005 - Bloon Exclusion Zone",
                                "content": `
                                        <ul>
                                            <li>gains 2 more buckshot attacks, for effectively 0.25s cooldown
                                                <ul>
                                                    <li>independent targeting priorities: first, strong</li>
                                                </ul>
                                            </li>
                                            <li>all attacks buffed
                                                <ul>
                                                    <li>+4d (8d), +6j (12j), +2p (9p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        }
                    }
                }
            }
        },
        "magic": {
            "type": "legacy",
            "entries": {
                "wizardMonkey": {
                    "name": "Wizard Monkey",
                    "data": {
                        "base": `
                                <ul>
                                    <li>$250 (750 MM)</li>
                                    <li>size: 7 radius</li>
                                    <li>placeable on: land</li>
                                    <li>magic-bolt attack
                                        <ul>
                                            <li>1d, 3p, 40r, 1.1s, energy type</li>
                                        </ul>
                                    </li>
                                </ul>
                            `,
                        "top": {
                            "1": {
                                "name": "100 - Guided Magic",
                                "content": `
                                        <ul>
                                            <li>magic-bolt buffed
                                                <ul>
                                                    <li>strong homing (720 turn rate, 360 seeking angle)</li>
                                                    <li>can see past obstacles</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "200 - Arcane Blast",
                                "content": `
                                        <ul>
                                            <li>magic-bolt buffed
                                                <ul>
                                                    <li>+1d (2d)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "300 - Arcane Mastery",
                                "content": `
                                        <ul>
                                            <li>magic-bolt buffed
                                                <ul>
                                                    <li>+20r (60)</li>
                                                </ul>
                                            </li>
                                            <li>magic-bolt buffed
                                                <ul>
                                                    <li>+1d (3d), +4p (7p), 50%s (0.55s), plasma type</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "400 - Arcane Spike",
                                "content": `
                                        <ul>
                                            <li>magic-bolt buffed
                                                <ul>
                                                    <li>+5d (8), +10md (18md), +4ld, 50%s (0.275s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "500 - Archmage",
                                "content": `
                                        <ul>
                                            <li>magic-bolt buffed
                                                <ul>
                                                    <li>+2d (10d), +15md (35md), +4ld(+8ld), +6p (13p), 50%s (0.1375s)</li>
                                                </ul>
                                            </li>
                                            <li>gains shimmer attack
                                                <ul>
                                                    <li>200p, 70r zone, 1.25s, camo</li>
                                                    <li>can see past obstacles</li>
                                                    <li>decamo</li>
                                                </ul>
                                            </li>
                                            <li>gains flame attack
                                                <ul>
                                                    <li>1d, 1cd (2cd), 1md (2md), 4p, 70r, 0.05s, fire type</li>
                                                    <li>can see past obstacles, but will collide with them</li>
                                                    <li>applies burn status
                                                        <ul>
                                                            <li>1d/1.5s, fire type, 3.1s duration</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>510: fireball 50%s (1.3s), +7d (9d), +9md (18md)</li>
                                                    <li>520: wall-of-fire 50%s (2.75s), +1md (2md)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Fireball",
                                "content": `
                                        <ul>
                                            <li>gains fireball attack
                                                <ul>
                                                    <li>2.6s</li>
                                                    <li>on contact: explosion
                                                        <ul>
                                                            <li>2d, 15p, 20r blast, explosion type</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>110: fireball can see past obstacles</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "020 - Wall of Fire",
                                "content": `
                                        <ul>
                                            <li>gains place-fire attack
                                                <ul>
                                                    <li>5.5s passive, 1.0s initial cooldown</li>
                                                    <li>places wall-of-fire on the closest track
                                                        <ul>
                                                            <li>1d, 15p, 15r zone, 0.15s, fire type</li>
                                                            <li>100 lifetime pierce</li>
                                                            <li>4.5s lifetime</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>120: wall-of-fire can be placed behind walls, and receives manual targeting on any location within range</li>
                                                    <li>021: wall-of-fire +5p (20p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "030 - Dragon's Breath",
                                "content": `
                                        <ul>
                                            <li>fireball buffed
                                                <ul>
                                                    <li>explosion +7d (9d)</li>
                                                </ul>
                                            </li>
                                            <li>place-fire buffed
                                                <ul>
                                                    <li>4.5s</li>
                                                </ul>
                                            </li>
                                            <li>wall-of-fire buffed
                                                <ul>
                                                    <li>0.1s, +5p (20p)</li>
                                                </ul>
                                            </li>
                                            <li>gains flame attack
                                                <ul>
                                                    <li>1d, 1cd (2), 4p, 50r, 0.1s, fire type</li>
                                                    <li>applies burn status
                                                        <ul>
                                                            <li>1d/1.5s, fire type, 3.1s duration</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>130: flame can see past obstacles, but will collide with them</li>
                                                    <li>031: flame +2p (6p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "040 - Summon Phoenix",
                                "content": `
                                        <ul>
                                            <li>gains summon ability (45s cooldown, 20s duration, battle ready)
                                                <ul>
                                                    <li>summons phoenix subtower
                                                        <ul>
                                                            <li>flame attack
                                                                <ul>
                                                                    <li>6d, 8p, &#8734;r, 0.1s, fire type, camo</li>
                                                                    <li>can see past walls</li>
                                                                    <li>inherits priority</li>
                                                                </ul>
                                                            </li>
                                                            <li>note: does not inherit buffs, but can receive buffs by flying through their range of influence</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "050 - Wizard Lord Phoenix",
                                "content": `
                                        <ul>
                                            <li>fireball buffed
                                                <ul>
                                                    <li>explosion +24d (33d)</li>
                                                </ul>
                                            </li>
                                            <li>wall-of-fire buffed
                                                <ul>
                                                    <li>+2d (3d)</li>
                                                </ul>
                                            </li>
                                            <li>flame buffed
                                                <ul>
                                                    <li>+5d (6d), +46p (50p)</li>
                                                </ul>
                                            </li>
                                            <li>has a permanent phoenix subtower</li>
                                            <li>summon replaced by transform (45s cooldown, 20s duration, battle ready)
                                                <ul>
                                                    <li>phoenix transforms into phoenix-lord
                                                        <ul>
                                                            <li>flame attack
                                                                <ul>
                                                                    <li>55d, 50p, &#8734;r, 0.1s, normal type, camo</li>
                                                                    <li>can see past walls</li>
                                                                </ul>
                                                            </li>
                                                            <li>meteor attack
                                                                <ul>
                                                                    <li>50d, 8j, 255p, &#8734;r, 1.0s passive, normal type, camo</li>
                                                                    <li>can see past walls</li>
                                                                </ul>
                                                            </li>
                                                            <li>note: technically a separate tower so is not affected by buffs to the original wizard</li>
                                                        </ul>
                                                    </li>
                                                    <li>while active, doubles all phoenix subtowers' damage</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Intense Magic",
                                "content": `
                                        <ul>
                                            <li>magic-bolt buffed
                                                <ul>
                                                    <li>+5p (8p), double projectile speed</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "002 - Monkey Sense",
                                "content": `
                                        <ul>
                                            <li>gains camo detection</li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "003 - Shimmer",
                                "content": `
                                        <ul>
                                            <li>gains shimmer attack
                                                <ul>
                                                    <li>200p, 70r zone, 1.5s, camo</li>
                                                    <li>can see past obstacles</li>
                                                    <li>decamo</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "004 - Necromancer: Unpopped Army",
                                "content": `
                                        <ul>
                                            <li>gains a graveyard
                                                <ul>
                                                    <li>stores pops (layers not damage) that occur within 70 range, up to a total capacity of 450</li>
                                                    <li>pops after round 30 are worth 7-13 (at random) in the graveyard, instead of 1</li>
                                                    <li>each individual pop may only be stored by one wizard</li>
                                                </ul>
                                            </li>
                                            <li>gains reanimate attack
                                                <ul>
                                                    <li>60r, 1.5s</li>
                                                    <li>spawns 1-4 zombloons, each using 1-10 pops from the graveyard
                                                        <ul>
                                                            <li>2d, 2-11p (pops used +1), normal type, 10s lifetime</li>
                                                            <li>travels backwards along the track at red bloon speed</li>
                                                            <li>+1d for every 200 graveyard bloons, stacking additively up to 10 times</li>
                                                        </ul>
                                                    </li>
                                                    <li>-10%s for every 100 graveyard bloons, stacking additively up to 5 times (eg 200-299 in the graveyard means 80% = 1.2s)</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>104: zombloons position targetable manually</li>
                                                    <li>014: fireball +1d for every 200 graveyard</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "005 - Prince of Darkness",
                                "content": `
                                        <ul>
                                            <li>magic-bolt buffed
                                                <ul>
                                                    <li>25%s (0.275s)</li>
                                                </ul>
                                            </li>
                                            <li>shimmer buffed
                                                <ul>
                                                    <li>50%s (0.75s)</li>
                                                </ul>
                                            </li>
                                            <li>graveyard buffed
                                                <ul>
                                                    <li>3000 capacity</li>
                                                </ul>
                                            </li>
                                            <li>graveyard damage buff now requires 300 bloons each</li>
                                            <li>gains reanimate-blimp attack
                                                <ul>
                                                    <li>60r, 3s</li>
                                                    <li>if less than 2000 pops in the graveyard, uses 20 to spawn a zmoab
                                                        <ul>
                                                            <li>25d, 20p, normal type, 20s lifetime</li>
                                                            <li>travels backwards along the track at 60% red speed</li>
                                                            <li>+1d for every 300 graveyard bloons, stacking additively up to 10 times</li>
                                                        </ul>
                                                    </li>
                                                    <li>if more than 2000 pops in the graveyard, uses 50 to spawn a zbfb
                                                        <ul>
                                                            <li>130d, 50p, normal type, 12.5s lifetime</li>
                                                            <li>travels backwards along the track at 60% red speed</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>gains buff: +1d and +50% lifetime to all zombloons, zmoabs, and zbfbs from any wizard (including self)</li>
                                        </ul>
                                    `
                            }
                        }
                    }
                },
                "superMonkey": {
                    "name": "Super Monkey",
                    "data": {
                        "base": `
                                <ul>
                                    <li>$1,800 (750 MM)</li>
                                    <li>size: 8 radius</li>
                                    <li>placeable on: land</li>
                                    <li>dart attack
                                        <ul>
                                            <li>1d, 1p, 50r, 0.045, sharp type</li>
                                        </ul>
                                    </li>
                                </ul>
                            `,
                        "top": {
                            "1": {
                                "name": "100 - Laser Blasts",
                                "content": `
                                        <ul>
                                            <li>dart replaced by laser
                                                <ul>
                                                    <li>+1p (2p), energy type</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "200 - Plasma Blasts",
                                "content": `
                                        <ul>
                                            <li>laser replaced by plasma
                                                <ul>
                                                    <li>66.67%s (0.03s), +1p (3p), plasma type</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "300 - Sun Avatar",
                                "content": `
                                        <ul>
                                            <li>plasma replaced by sunbeam
                                                <ul>
                                                    <li>+5p (8p), +2j (3j)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "400 - Sun Temple",
                                "content": `
                                        <ul>
                                            <li>size: 20 radius</li>
                                            <li>sunbeam replaced by sunblast
                                                <ul>
                                                    <li>11d, 30p, 65r, 0.06s, normal type</li>
                                                    <li>can see past obstacles</li>
                                                </ul>
                                            </li>
                                            <li>temple sacrifice on upgrade
                                                <ul>
                                                    <li>sacrifices towers in range, not heroes
                                                    <li>on a sacrifice value threshold of $15,000 or greater of primary towers:
                                                        <ul>
                                                            <li>gains temple buff
                                                                <ul>
                                                                    <li>90%s, +50% projectile speed</li>
                                                                </ul>
                                                            </li>
                                                            <li>gains primary-blades attack
                                                                <ul>
                                                                    <li>30d, 8j, 20p, 65r, 1.5s, normal type</li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>on a sacrifice value threshold of $15,000 or greater of military towers:
                                                        <ul>
                                                            <li>gains temple buff
                                                                <ul>
                                                                    <li>+1md, +5p, +30% projectile size</li>
                                                                </ul>
                                                            </li>
                                                            <li>gains missile attack
                                                                <ul>
                                                                    <li>&#8734;r, 1.0s</li>
                                                                    <li>can only affect blimps</li>
                                                                    <li>on contact: explosion
                                                                        <ul>
                                                                            <li>1d, +99md (100md), 50p, 18r blast, explosion type</li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>on a sacrifice value threshold of $15,000 or greater of magic towers:
                                                        <ul>
                                                            <li>gains magic-tornado attack
                                                                <ul>
                                                                    <li>12d, 50p, 10s</li>
                                                                    <li>MOABs use 9p, BFBs 24p, ZOMGs and DDTs 49p</li>
                                                                </ul>
                                                            </li>
                                                            <li>gains arcane-temple attack
                                                                <ul>
                                                                    <li>35d, 6j, 7p, 7s, normal type, moderate homing</li>
                                                                    <li>can see past obstacles</li>
                                                                </ul>
                                                            </li>
                                                            <li>gains temple buff
                                                                <ul>
                                                                    <li>+2p, +50% projectile lifespan</li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>on a sacrifice value threshold of $15,000 or greater of support towers:
                                                        <ul>
                                                            <li>gains temple buff
                                                                <ul>
                                                                    <li>+5% discount, grants camo</li>
                                                                </ul>
                                                            </li>
                                                            <li>crate attack
                                                                <ul>
                                                                    <li>$4,000 income, produced 3 time per round</li>
                                                                    <li>15s lifetime</li>
                                                                </ul>
                                                            </li>
                                                            <li>gains temple-permaspikes attack
                                                                <ul>
                                                                    <li>30s</li>
                                                                    <li>places temple-permaspike randomly on track
                                                                        <ul>
                                                                            <li>10d, 250p, 300s lifespan, camo
                                                                                <ul>
                                                                                    <li>total: 2500 damage per spike</li>
                                                                                </ul>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "500 - True Sun God",
                                "content": `
                                        <ul>
                                            <li>size: 25 radius</li>
                                            <li>sunblast buffed
                                                <ul>
                                                    <li>+21d (32d)</li>
                                                </ul>
                                            </li>
                                            <li>when upgraded, absorbs all towers in range for even more power (same $15,000 threshold as the Sun Temple)</li>
                                            <li>detailed sacrifice info is undocumented</li>
                                        </ul>
                                    `
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Super Range",
                                "content": `
                                        <ul>
                                            <li>dart buffed
                                                <ul>
                                                    <li>+1p (2p), +10r (60r)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "020 - Epic Range",
                                "content": `
                                        <ul>
                                            <li>dart buffed
                                                <ul>
                                                    <li>+2p (4p), +12r (72), faster projectile speed</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "030 - Robo Monkey",
                                "content": `
                                        <ul>
                                            <li>dart buffed
                                                <ul>
                                                    <li>+3p (7p)</li>
                                                    <li>10d crit every 15 shots</li>
                                                </ul>
                                            </li>
                                            <li>gains a second attack, which is a copy of the first, with independent choice of targeting priority</li>
                                            <li>note: this means that an alchemist buff is used up twice as fast</li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "040 - Tech Terror",
                                "content": `
                                        <ul>
                                            <li>dart replaced by plasma
                                                <ul>
                                                    <li>1d, +6p (13p), 72r, 80%s (0.036s), plasma type</li>
                                                </ul>
                                            </li>
                                            <li>gains annihilate ability (45s cooldown, battle ready)
                                                <ul>
                                                    <li>2500d, 2000p, 70r blast, normal type, camo</li>
                                                    <li>penetrates blimp layers</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>041: surviving targets move backwards at 18x speed for 0.2s</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "050 - The Anti-Bloon",
                                "content": `
                                        <ul>
                                            <li>plasma buffed
                                                <ul>
                                                    <li>+4d (5d), +3p (16p), +10r (82r), normal type</li>
                                                    <li>50d crit every 15 shots</li>
                                                </ul>
                                            </li>
                                            <li>annihilate replaced by anti-bloon (30s cooldown, battle ready)
                                                <ul>
                                                    <li>5000d, 10000p, 120r blast, normal type, camo</li>
                                                    <li>penetrates blimp layers</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>051: surviving targets move backwards at 25x speed for 0.2s</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Knockback",
                                "content": `
                                        <ul>
                                            <li>applies knockback status
                                                <ul>
                                                    <li>0.5s duration</li>
                                                    <li>125% slow for regular bloons, 60% for leads and ceramics, and 30% for blimps</li>
                                                </ul>
                                            </li>
                                            <li>note: 125% slow means move backwards at 25% speed</li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "002 - Ultravision",
                                "content": `
                                        <ul>
                                            <li>dart buffed
                                                <ul>
                                                    <li>+3r (53r)</li>
                                                </ul>
                                            </li>
                                            <li>gains camo detection</li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "003 - Dark Knight",
                                "content": `
                                        <ul>
                                            <li>dart replaced by monkeyrang
                                                <ul>
                                                    <li>1d, +2md (3md), 5p, 53r, 0.045s, sharp type</li>
                                                </ul>
                                            </li>
                                            <li>knockback buffed
                                                <ul>
                                                    <li>100% slow to leads and ceramics</li>
                                                </ul>
                                            </li>
                                            <li>gains darkshift ability (20s cooldown, battle ready)
                                                <ul>
                                                    <li>teleport to a chosen point within range</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "004 - Dark Champion",
                                "content": `
                                        <ul>
                                            <li>monkeyrang buffed
                                                <ul>
                                                    <li>+1d (2d), +2cd (4cd), +2md (6md), +2p (7p), 50%s (0.0225), normal type</li>
                                                </ul>
                                            </li>
                                            <li>darkshift buffed
                                                <ul>
                                                    <li>can teleport anywhere</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "005 - Legend of the Night",
                                "content": `
                                        <ul>
                                            <li>monkeyrang buffed
                                                <ul>
                                                    <li>+4d (6d), +4cd (12cd), +4md (14md), +8p (17p), +4r (57r)</li>
                                                </ul>
                                            </li>
                                            <li>gains black-hole ability (120s cooldown, 4s duration, battle ready, triggered by something about to leak)
                                                <ul>
                                                    <li>anything about to leak is deleted instead</li>
                                                    <li>deleted bloons give no cash and do not add to any damage counter</li>
                                                    <li>cooldown persists after selling</li>
                                                    <li>does not work during sudden death</li>
                                                    <li>ability ends immediately if a BAD is absorbed</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        }
                    }
                },
                "ninjaMonkey": {
                    "name": "Ninja Monkey",
                    "data": {
                        "base": `
                                <ul>
                                    <li>$400 (750 MM)</li>
                                    <li>size: 6 radius</li>
                                    <li>placeable on: land</li>
                                    <li>gains camo detection</li>
                                    <li>shuriken attack
                                        <ul>
                                            <li>1d, 3p, 40r, 0.62s, sharp type</li>
                                        </ul>
                                    </li>
                                </ul>
                            `,
                        "top": {
                            "1": {
                                "name": "100 - Ninja Discipline",
                                "content": `
                                        <ul>
                                            <li>all attacks buffed
                                                <ul>
                                                    <li>+17.5%r (47r), 70%s (0.434s)</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>102: caltrops 5.6s</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "200 - Sharp Shurikens",
                                "content": `
                                        <ul>
                                            <li>shuriken buffed
                                                <ul>
                                                    <li>+1p (4p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "300 - Double Shot",
                                "content": `
                                        <ul>
                                            <li>shuriken buffed
                                                <ul>
                                                    <li>+1j 30&deg spread (2j)</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>302: caltrops +2d (5d)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "400 - Bloonjitsu",
                                "content": `
                                        <ul>
                                            <li>shuriken buffed
                                                <ul>
                                                    <li>+3j 45&deg spread (5j)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "500 - Grandmaster Ninja",
                                "content": `
                                        <ul>
                                            <li>shuriken buffed
                                                <ul>
                                                    <li>+1d (2d), +10r (57), 50%s (0.217s), +3j 60&deg spread (8j)</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>510: 100% chance to send bloons back; 50% chance to send MOABs, BFBs back 60-100 units</li>
                                                    <li>502: caltrops 2.8s, caltrop 25d</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Distraction",
                                "content": `
                                        <ul>
                                            <li>all attacks buffed
                                                <ul>
                                                    <li>on damage: 25% chance to send bloons 100-150 units back</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "020 - Counter-Espionage",
                                "content": `
                                        <ul>
                                            <li>all attacks buffed
                                                <ul>
                                                    <li>on damage: decamo</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "030 - Shinobi Tactics",
                                "content": `
                                        <ul>
                                            <li>gains shinobi buff
                                                <ul>
                                                    <li>affects Ninja Monkeys in range</li>
                                                    <li>stacks up to 10 times</li>
                                                    <li>85%s</li>
                                                    <li>+15%p, stacking additively</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "040 - Bloon Sabotage",
                                "content": `
                                        <ul>
                                            <li>gains sabotage ability (60s cooldown, 15s duration, battle ready)
                                                <ul>
                                                    <li>all bloons and blimps move at half speed
                                                        <ul>
                                                            <li>this does not affect the children of blimps, but it affects the children of bloons</li>
                                                        </ul>
                                                    </li>
                                                    <li>currently sabotaged blimps will remain slowed for the duration of the ability if this ninja is sold</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "050 - Grand Saboteur",
                                "content": `
                                        <ul>
                                            <li>sabotage replaced by grand-sabotage (60s cooldown, 30s duration, battle ready)
                                                <ul>
                                                    <li>all bloons and blimps move at half speed
                                                        <ul>
                                                            <li>this does not affect the children of blimps, but it affects the children of bloons</li>
                                                        </ul>
                                                    </li>
                                                    <li>currently sabotaged blimps will remain slowed for the duration of the ability if this ninja is sold</li>
                                                    <li>25%d to new blimps entering the map
                                                        <ul>
                                                            <li>does not contribute to tower pop count</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Seeking Shuriken",
                                "content": `
                                        <ul>
                                            <li>shuriken buffed: strong homing (instant turn rate, 144&deg fov)</li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "002 - Caltrops",
                                "content": `
                                        <ul>
                                            <li>gains caltrops attack
                                                <ul>
                                                    <li>40r, 8s passive, places caltrop randomly on path
                                                        <ul>
                                                            <li>3d, 6i, sharp type, 25s lifetime</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "003 - Flash Bomb",
                                "content": `
                                        <ul>
                                            <li>every 3rd shuriken replaced by flash-bomb
                                                <ul>
                                                    <li>1d, 75p, 40r blast, normal type</li>
                                                    <li>applies stun (1s duration) to bloons</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>023: gains decamo-aura attack
                                                        <ul>
                                                            <li>flash-bomb buffed: gains decamo attack
                                                                <ul>
                                                                    <li>75p, 65r, camo</li>
                                                                    <li>decamo</li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "004 - Sticky Bomb",
                                "content": `
                                        <ul>
                                            <li>gains sticky-bomb attack
                                                <ul>
                                                    <li>60r, 4.5s</li>
                                                    <li>can only affect blimps</li>
                                                    <li>applies bombed status
                                                        <ul>
                                                            <li>3s duration</li>
                                                            <li>on expiry: 450d to affected target</li>
                                                            <li>on expiry: explosion
                                                                <ul>
                                                                    <li>100d, 10p, 40r blast, normal type</li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>104: sticky-bomb +11.5r (70.5r)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "005 - Master Bomber",
                                "content": `
                                        <ul>
                                            <li>flash-bomb buffed
                                                <ul>
                                                    <li>+9d (10d), applies stun (0.25s duration) to blimps</li>
                                                </ul>
                                            </li>
                                            <li>sticky-bomb buffed
                                                <ul>
                                                    <li>&#8734;r, 0.18s, applies stun (1s duration)</li>
                                                </ul>
                                            </li>
                                            <li>bombed buffed
                                                <ul>
                                                    <li>850d</li>
                                                    <li>explosion 200d</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        }
                    }
                },
                "alchemist": {
                    "name": "Alchemist",
                    "data": {
                        "base": `
                                <ul>
                                    <li>$550 (750 MM)</li>
                                    <li>size: 6 radius</li>
                                    <li>placeable on: land</li>
                                    <li>potion attack
                                        <ul>
                                            <li>45r, 1.8s</li>
                                            <li>can see past obstacles</li>
                                            <li>on contact: splash
                                                <ul>
                                                    <li>1d single-layer, 12p, 12r blast, acid type</li>
                                                    <li>applies acid status: 1d/2.0s, 4.05s duration</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            `,
                        "top": {
                            "1": {
                                "name": "100 - Larger Potions",
                                "content": `
                                        <ul>
                                            <li>splash buffed
                                                <ul>
                                                    <li>+6p (18p), +6r (18r)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "200 - Acidic Mixture Dip",
                                "content": `
                                        <ul>
                                            <li>gains acid-dip attack
                                                <ul>
                                                    <li>45r, 10.0s</li>
                                                    <li>targets random towers, prioritizing those not currently buffed</li>
                                                    <li>does not target towers that do not directly attack (Farm, Village), or only attack by applying a status (Alchemist, Glue Gunner)</li>
                                                    <li>applies acidified buff
                                                        <ul>
                                                            <li>+1cd, +1md, +1 flead damage, can damage lead</li>
                                                            <li>lasts 10 shots</li>
                                                            <li>stacks by adding 10 more shots each time, capped at 200</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>220: +3 shot limit (lasts 13 shots)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "300 - Berserker Brew",
                                "content": `
                                        <ul>
                                            <li>gains brew attack
                                                <ul>
                                                    <li>45r, 8.0s</li>
                                                    <li>targets closest buffable tower in range, except alchemists and towers that don't attack
                                                        <ul>
                                                            <li>applies berserk buff +1d, +2p, 90%s, +10%r</li>
                                                            <li>lasts 5.0s or 25 shots</li>
                                                            <li>cannot be reapplied for 5.0s</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>320: berserk +1s duration (6.0s duration), +5 shot limit (lasts 30 shots), -1s reapplication cooldown (4.0s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "400 - Stronger Stimulant",
                                "content": `
                                        <ul>
                                            <li>brew buffed
                                                <ul>
                                                    <li>buff is now +1d, +3p, 85%s, +15%r</li>
                                                    <li>lasts 12.0s or 40 shots</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>420: berserk +1s duration (13.0s duration), +10 shot limit (lasts 50 shots), -1s reapplication cooldown (4.0s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "500 - Permanent Brew",
                                "content": `
                                        <ul>
                                            <li>acidified and brew buffs are permanent (unless this alchemist is sold)</li>
                                        </ul>
                                    `
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Stronger Acid",
                                "content": `
                                        <ul>
                                            <li>acid status buffed
                                                <ul>
                                                    <li>1d/1.33s, 4s duration</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "020 - Perishing Potions",
                                "content": `
                                        <ul>
                                            <li>potion buffed
                                                <ul>
                                                    <li>+1d (2d), +3md (5md), +7fmd (12fmd), can defortify bloons</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "030 - Unstable Concoction",
                                "content": `
                                        <ul>
                                            <li>gains unstable-potion attack
                                                <ul>
                                                    <li>67.5r, 6.0s, can only target blimps</li>
                                                    <li>on contact: unstable-splash
                                                        <ul>
                                                            <li>3p, 14r blast</li>
                                                            <li>applies unstable status</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>unstable status
                                                <ul>
                                                    <li>when popped, creates an explosion</li>
                                                    <li>50p, 40r blast, normal type</li>
                                                    <li>damage to bloons depends on the unstable bloon: 2d from MOABs, 3d from BFBs, 4d from anything else</li>
                                                    <li>damage to blimps: 20d from MOABs, 70d from BFBs, 40d from DDTs, 400d from ZOMGs and BADs</li>
                                                    <li>ZOMGs and DDTs use 3p, BADs use 9p</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>130: unstable-splash +7r (21r)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "040 - Transforming Tonic",
                                "content": `
                                        <ul>
                                            <li>gains transform ability (60s cooldown, 17.5s duration, battle ready)
                                                <ul>
                                                    <li>transforms into a monster
                                                        <ul>
                                                            <li>2d, 6p, 72r, 0.03s, plasma type</li>
                                                            <li>can see past obstacles, but will collide with them</li>
                                                            <li>can hit camos but cannot target them</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>140: monster +3p (9p)</li>
                                                    <li>041: monster 0.024s</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "050 - Total Transformation",
                                "content": `
                                        <ul>
                                            <li>transform replaced by total-transform (40s cooldown, 17.5s duration, battle ready)
                                                <ul>
                                                    <li>additionally transforms 5 nearby land-based monkey towers (tier 3 or lower) into monsters
                                                        <ul>
                                                            <li>2d, 10p, 72r, 0.03s, plasma type</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Faster Throwing",
                                "content": `
                                        <ul>
                                            <li>all attacks buffed
                                                <ul>
                                                    <li>60%s (1.08s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "002 - Acid Pool",
                                "content": `
                                        <ul>
                                            <li>potion buffed
                                                <ul>
                                                    <li>targets track if no bloons in range, creating a puddle
                                                        <ul>
                                                            <li>7s lifetime</li>
                                                            <li>1d, 5p, camo, applies acid status</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "003 - Lead to Gold",
                                "content": `
                                        <ul>
                                            <li>potion buffed
                                                <ul>
                                                    <li>+18ld (19ld) including DDTs</li>
                                                    <li>no longer single-layer</li>
                                                    <li>applies golden-lead status
                                                        <ul>
                                                            <li>gives $50 when the lead layer is popped, unaffected by income cuts or cash modifiers</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "004 - Rubber to Gold",
                                "content": `
                                        <ul>
                                            <li>gains gold-potion attack
                                                <ul>
                                                    <li>45r, 3.8s</li>
                                                    <li>cannot target BADs</li>
                                                    <li>on contact: gold-splash
                                                        <ul>
                                                            <li>12p, 12r blast</li>
                                                            <li>applies golden status</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>golden status
                                                <ul>
                                                    <li>affected bloons give $1.5 per layer popped</li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>104: gold-splash +6p (20p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "005 - Bloon Master Alchemist",
                                "content": `
                                        <ul>
                                            <li>gains shrink-potion attack
                                                <ul>
                                                    <li>&#8734;r, 7.5s</li>
                                                    <li>cannot target BADs</li>
                                                    <li>on contact: shrink-splash
                                                        <ul>
                                                            <li>200p</li>
                                                            <li>MOABs use 10p, BFBs use 30p, DDTs use 50p, and ZOMGs use 100p</li>
                                                            <li>transforms target into a red bloon</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        }
                    }
                },
                "druid": {
                    "name": "Druid",
                    "data": {
                        "base": `
                                <ul>
                                    <li>$425 (750 MM)</li>
                                    <li>size: 7 radius</li>
                                    <li>placeable on: land</li>
                                    <li>thorn attack
                                        <ul>
                                            <li>1d, 5j, 1p, 35r, 1.1s, sharp type</li>
                                            <li>projectiles have random spread</li>
                                        </ul>
                                    </li>
                                </ul>
                            `,
                        "top": {
                            "1": {
                                "name": "100 - Hard Thorns",
                                "content": `
                                        <ul>
                                            <li>thorn buffed
                                                <ul>
                                                    <li>+1p (2p), normal type</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "200 - Heart of Thunder",
                                "content": `
                                        <ul>
                                            <li>gains lightning attack
                                                <ul>
                                                    <li>5i, 35r, 2.2s</li>
                                                    <li>on contact
                                                        <ul>
                                                            <li>1d, plasma type</li>
                                                            <li>if any impacts remain, splits into 2</li>
                                                            <li>both copies jump to a new target within 43 units</li>
                                                        </ul>
                                                    </li>
                                                    <li>note: this means up to 31 targets can be hit in total, which can't be increased with pierce buffs</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "300 - Druid of the Storm",
                                "content": `
                                        <ul>
                                            <li>gains tornado attack
                                                <ul>
                                                    <li>0d, 30p, 2.5s, normal type</li>
                                                    <li>has homing</li>
                                                    <li>cannot target blimps or lead</li>
                                                    <li>sends back 250 units</li>
                                                    <li>removes glue and frozen status</li>
                                                    <li>note: damage can be buffed</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "400 - Ball Lightning",
                                "content": `
                                        <ul>
                                            <li>gains lightball attack
                                                <ul>
                                                    <li>6.0s</li>
                                                    <li>5s lifetime</li>
                                                    <li>has a modified lightning attack (2d, 43r, 0.35s passive)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "500 - Superstorm",
                                "content": `
                                        <ul>
                                            <li>gains camo detection</li>
                                            <li>lightning buffed
                                                <ul>
                                                    <li>+2d (3d)</li>
                                                </ul>
                                            </li>
                                            <li>lightball lightning buffed
                                                <ul>
                                                    <li>+3d (5d)</li>
                                                </ul>
                                            </li>
                                            <li>gains superstorm attack
                                                <ul>
                                                    <li>12d, 150p, 4.0s</li>
                                                    <li>has homing</li>
                                                    <li>cannot target BADs</li>
                                                    <li>MOABs use 5p, BFBs 20p, ZOMGs 50p, and DDTs 30p</li>
                                                    <li>5.7s lifetime</li>
                                                    <li>sends bloons back 250 units</li>
                                                    <li>removes glue and frozen status</li>
                                                    <li>has a modified lightball attack (1.0s, random spread)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Thorn Swarm",
                                "content": `
                                        <ul>
                                            <li>thorn buffed
                                                <ul>
                                                    <li>+3j (8j)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "020 - Heart of Oak",
                                "content": `
                                        <ul>
                                            <li>all attacks buffed
                                                <ul>
                                                    <li>on damage: degrow</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "030 - Druid of the Jungle",
                                "content": `
                                        <ul>
                                            <li>gains vine-grab attack
                                                <ul>
                                                    <li>&#8734;r, 1.4s, targets strongest bloon</li>
                                                    <li>can see past obstacles</li>
                                                    <li>applies snared status
                                                        <ul>
                                                            <li>1d + 13%d per 0.15s</li>
                                                            <li>fully pops the bloon</li>
                                                        </ul>
                                                    </li>
                                                    <li>attack cooldown does not start until the previous target has been popped</li>
                                                </ul>
                                            </li>
                                            <li>gains money-grab attack
                                                <ul>
                                                    <li>&#8734;r, 11s, targets strongest bloon</li>
                                                    <li>can see past obstacles</li>
                                                    <li>applies money-snared status
                                                        <ul>
                                                            <li>1d + 13%d per 0.15s</li>
                                                            <li>fully pops the bloon</li>
                                                            <li>+$100</li>
                                                        </ul>
                                                    </li>
                                                    <li>attack cooldown does not start until the previous target has been popped</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "040 - Jungle's Bounty",
                                "content": `
                                        <ul>
                                            <li>thorn buffed
                                                <ul>
                                                    <li>+20r (55r)</li>
                                                </ul>
                                            </li>
                                            <li>gains jungle-bounty ability (40s cooldown, 15s initial)
                                                <ul>
                                                    <li>gain $1,000</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "050 - Spirit of the Forest",
                                "content": `
                                        <ul>
                                            <li>thorn buffed
                                                <ul>
                                                    <li>+13d (14d)</li>
                                                </ul>
                                            </li>
                                            <li>jungle-bounty replaced by spirit-bounty
                                                <ul>
                                                    <li>gain $1,500</li>
                                                    <li>activates all jungle-bounty abilities</li>
                                                </ul>
                                            </li>
                                            <li>+$2,500 end of round income</li>
                                            <li>vine-grab buffed
                                                <ul>
                                                    <li>time between grabs 0.3s, damages per 0.15s</li>
                                                </ul>
                                            </li>
                                            <li>gains brambles attack
                                                <ul>
                                                    <li>&#8734;p, 55r zone, camo</li>
                                                    <li>range increases by 6 units every 2s until the map is covered</li>
                                                    <li>anywhere in range: 2d/0.5s, 10cd/0.5s, 10md/0.5s, normal type</li>
                                                    <li>within 100r: +1d (3d), +4cd (15cd), +4md (15md)</li>
                                                    <li>within 50r: +1d (4d), +4cd (20cd), +4md (20md)</li>
                                                    <li>note: as a damage-over-time, the damage cannot be buffed</li>
                                                </ul>
                                            </li>
                                            <li>gains jungle-lives ability (40s cooldown, 15s initial)
                                                <ul>
                                                    <li>+25 lives</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Druidic Reach",
                                "content": `
                                        <ul>
                                            <li>thorn buffed
                                                <ul>
                                                    <li>+10r (45r)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "002 - Heart of Vengeance",
                                "content": `
                                        <ul>
                                            <li>all attacks buffed
                                                <ul>
                                                    <li>+x% speed, capped at +100%, where x is 20 plus the number of lives below the amount when this upgrade was purchased, ignoring any lives above the starting amount for the current mode</li>
                                                    <li>note that this is a buff to speed, NOT reload time</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "003 - Druid of Wrath",
                                "content": `
                                        <ul>
                                            <li>all attacks buffed
                                                <ul>
                                                    <li>+5% speed per 10 damage dealt, capped at +100%, reset if this druid is idle for 2s</li>
                                                    <li>note again that this is a speed buff, and that it stacks multiplicatively with any buff gained from tier 2</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "004 - Poplust",
                                "content": `
                                        <ul>
                                            <li>gains poplust buff
                                                <ul>
                                                    <li>affects Druids in range, including self</li>
                                                    <li>+15%p, +15% speed</li>
                                                    <li>can stack (additively) up to 5 times total</li>
                                                    <li>note that this is yet another speed buff, which also stacks multiplicatively with tiers 2 and 3</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "005 - Avatar of Wrath",
                                "content": `
                                        <ul>
                                            <li>thorn buffed
                                                <ul>
                                                    <li>+3d (4), +5r (50), 50%s (0.55), longer projectile lifespan</li>
                                                    <li>+1d for every 3000 RBE on screen, capped at +24</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        }
                    }
                }
            }
        },
        "support": {
            "type": "legacy",
            "entries": {
                "monkeyVillage": {
                    "name": "Monkey Village",
                    "data": {
                        "base": `
                                <ul>
                                    <li>$1,000 (1,000 MM)</li>
                                    <li>size: 11 radius</li>
                                    <li>placeable on: land</li>
                                    <li>40r</li>
                                    <li>support buff
                                        <ul>
                                            <li>affects anything in range, excluding self</li>
                                            <li>+10%r</li>
                                        </ul>
                                    </li>
                                </ul>
                            `,
                        "top": {
                            "1": {
                                "name": "100 - Bigger Radius",
                                "content": `
                                        <ul>
                                            <li>+8r (48r)</li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "200 - Jungle Drums",
                                "content": `
                                        <ul>
                                            <li>support buffed
                                                <ul>
                                                    <li>85%s</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "300 - Primary Training",
                                "content": `
                                        <ul>
                                            <li>gains primary-support
                                                <ul>
                                                    <li>affects primary towers in range</li>
                                                    <li>+15%p (minimum +1p), +10%r, increased projectile speed</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "400 - Primary Mentoring",
                                "content": `
                                        <ul>
                                            <li>primary-support buffed
                                                <ul>
                                                    <li>+5r, free tier 1 upgrades, -20% ability cooldown time</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "500 - Primary Expertise",
                                "content": `
                                        <ul>
                                            <li>+7r (55r)</li>
                                            <li>primary-support buffed
                                                <ul>
                                                    <li>+30%p (minimum +3p), free tier 2 upgrades, additional -10% ability cooldown time (-30% overall)</li>
                                                </ul>
                                            </li>
                                            <li>gains catapult attack
                                                <ul>
                                                    <li>10d, 190cd (200cd), 190md (200md), 100p, &#8734;r, 2.5s, normal type, camo</li>
                                                    <li>blimps use 10p</li>
                                                    <li>jumps to a nearby target after hitting</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Grow Blocker",
                                "content": `
                                        <ul>
                                            <li>applies antigrow status (cannot regrow) to bloons in range
                                                <ul>
                                                    <li>200p</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "020 - Radar Scanner",
                                "content": `
                                        <ul>
                                            <li>gains camo detection</li>
                                            <li>support buffed
                                                <ul>
                                                    <li>grants camo</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "030 - Monkey Intelligence Bureau",
                                "content": `
                                        <ul>
                                            <li>support buffed
                                                <ul>
                                                    <li>grants normal type damage</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "040 - Call to Arms",
                                "content": `
                                        <ul>
                                            <li>gains call-to-arms ability (45s cooldown, 8s duration, battle ready)
                                                <ul>
                                                    <li>buffs towers in range: +50%p, 66.67%s</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "050 - Homeland Defense",
                                "content": `
                                        <ul>
                                            <li>call-to-arms replaced by homeland-defense (45s cooldown, 17s duration, battle ready)
                                                <ul>
                                                    <li>buffs all towers: +100%p, 50%s</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Monkey Business",
                                "content": `
                                        <ul>
                                            <li>support buffed
                                                <ul>
                                                    <li>+10% discount to base towers and upgrades up to tier 3</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "002 - Monkey Commerce",
                                "content": `
                                        <ul>
                                            <li>support buffed
                                                <ul>
                                                    <li>+5% discount to base towers and upgrades up to tier 3, stackable up to 3 times total</li>
                                                    <li>Note: this means that the maximum discount from villages is (10+3*5)% = 25%, which stacks additively with support temples</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "003 - Monkeyconomy",
                                "content": `
                                        <ul>
                                            <li>crate attack
                                                <ul>
                                                    <li>$400 income, split between 4 crates throughout the round</li>
                                                    <li>15?s lifetime</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "004 - Monkey City",
                                "content": `
                                        <ul>
                                            <li>crate buffed
                                                <ul>
                                                    +$1,200 income ($1,600)
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "005 - Monkeyopolis",
                                "content": `
                                        <ul>
                                            <li>gains bonus-eco buff
                                                <ul>
                                                    <li>+20% bloon eco from bloon sends with positive eco, and -20% eco loss from bloon sends with negative eco</li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>xx3+ villages in range are sacrificed to the village when upgraded</li>
                                            <li>crate buffed
                                                <ul>
                                                    <li>$4,200 base + $600 per $2,000 spent on sacrifices per round</li>
                                                    <li>divided throughout the round into at most 10 crates, but at least 6 crates</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        }
                    }
                },
                "bananaFarm": {
                    "name": "Banana Farm",
                    "data": {
                        "base": `
                                <ul>
                                    <li>$1,000 (1,000 MM)</li>
                                    <li>size: 27 units*27 units</li>
                                    <li>placeable on: land</li>
                                    <li>40r</li>
                                    <li>banana attack
                                        <ul>
                                            <li>$120 income, split between 3 bananas throughout the round</li>
                                            <li>15s lifetime</li>
                                        </ul>
                                    </li>
                                </ul>
                            `,
                        "top": {
                            "1": {
                                "name": "100 - Increased Production",
                                "content": `
                                        <ul>
                                            <li>banana attack buffed
                                                <ul>
                                                    <li>+2j (5j), +$80 income ($200)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "200 - Greater Production",
                                "content": `
                                        <ul>
                                            <li>banana attack buffed
                                                <ul>
                                                    <li>+2j (7j), +$80 income ($280)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "300 - Banana Plantation",
                                "content": `
                                        <ul>
                                            <li>banana attack buffed
                                                <ul>
                                                    <li>+9j (16j), +$360 income ($640)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "400 - Banana Research Facility",
                                "content": `
                                        <ul>
                                            <li>banana attack buffed
                                                <ul>
                                                    <li>5j, $3,000 income</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "500 - Banana Central",
                                "content": `
                                        <ul>
                                            <li>banana attack buffed
                                                <ul>
                                                    <li>+$11,000 income ($14,000)</li>
                                                </ul>
                                            </li>
                                            <li>gains productivity buff
                                                <ul>
                                                    <li>+20% income to all 4xx farms</li>
                                                    <li>stacks multiplicatively with x2x valuable bananas</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Long Life Bananas",
                                "content": `
                                        <ul>
                                            <li>banana attack buffed
                                                <ul>
                                                    <li>+15s lifetime (30s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "020 - Valuable Bananas",
                                "content": `
                                        <ul>
                                            <li>banana attack buffed
                                                <ul>
                                                    <li>+25% income</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "030 - Monkey Bank",
                                "content": `
                                        <ul>
                                            <li>banana attack buffed
                                                <ul>
                                                    <li>+$50 income ($150)</li>
                                                    <li>money is held in the bank instead of being emitted as bananas, to be collected at any time</li>
                                                    <li>$550 end of round income</li>
                                                    <li>bank's balance increases by 20% at the end of a round, up to a capacity of $14,000
                                                        <ul>
                                                            <li>this includes the end of round income</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>130: +$100 income ($250) (adds money 2 more times)</li>
                                                    <li>230: +$100 income ($350) (adds money 2 more times)</li>
                                                    <li>031: has a flashing dollar sign when full</li>
                                                    <li>032: autocollects if the balance is capped at the end of a round</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "040 - IMF loan",
                                "content": `
                                        <ul>
                                            <li>banana attack buffed
                                                <ul>
                                                    <li>+$6,000 capacity ($20,000)</li>
                                                </ul>
                                            </li>
                                            <li>gains loan ability (90s cooldown, 20s initial)
                                                <ul>
                                                    <li>loan $20,000, to be repaid by taking 50% from all future income</li>
                                                    <li>note that only one loan will take repayments at a time, even if enough is gained at once to cover several existing loans</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "050 - Monkey-Nomics",
                                "content": `
                                        <ul>
                                            <li>banana attack buffed
                                                <ul>
                                                    <li>+$10,000 capacity ($30,000)</li>
                                                </ul>
                                            </li>
                                            <li>loan replaced by grant (50s cooldown, 25s initial)
                                                <ul>
                                                    <li>gain $20k, which does not need to be repaid</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - EZ Collect",
                                "content": `
                                        <ul>
                                            <li>banana attack buffed
                                                <ul>
                                                    <li>banana collection radius +50%</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "002 - Banana Salvage",
                                "content": `
                                        <ul>
                                            <li>banana attack buffed
                                                <ul>
                                                    <li>expired bananas are worth 50%</li>
                                                </ul>
                                            </li>
                                            <li>+10% sellback (80%)</li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "003 - Marketplace",
                                "content": `
                                        <ul>
                                            <li>banana attack buffed
                                                <ul>
                                                    <li>+11j (14j), +$440 income ($560)</li>
                                                </ul>
                                            </li>
                                            <li>bananas are automatically collected immediately</li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "004 - Central Market",
                                "content": `
                                        <ul>
                                            <li>banana attack buffed
                                                <ul>
                                                    <li>+$1,680 income ($2,240)</li>
                                                </ul>
                                            </li>
                                            <li>gains marketplace buff
                                                <ul>
                                                    <li>+10% end of round income to all xx3+ buccaneers</li>
                                                    <li>stacks additively up to 10 times (+100%)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "005 - Monkey Wall Street",
                                "content": `
                                        <ul>
                                            <li>$10,000 end of round income</li>
                                        </ul>
                                    `
                            }
                        }
                    }
                },
                "spikeFactory": {
                    "name": "Spike Factory",
                    "data": {
                        "base": `
                                <ul>
                                    <li>$600 (1,000 MM)</li>
                                    <li>size: 8 radius</li>
                                    <li>placeable on: land</li>
                                    <li>spikes attack
                                        <ul>
                                            <li>34r, 1.75s passive</li>
                                            <li>places spikes randomly on track
                                                <ul>
                                                    <li>1d, 5p, 40s lifetime, camo</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            `,
                        "top": {
                            "1": {
                                "name": "100 - Bigger Stacks",
                                "content": `
                                        <ul>
                                            <li>spikes buffed
                                                <ul>
                                                    <li>+5p (10p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "200 - White Hot Spikes",
                                "content": `
                                        <ul>
                                            <li>spikes buffed
                                                <ul>
                                                    <li>normal type</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "300 - Spiked Balls",
                                "content": `
                                        <ul>
                                            <li>spikes buffed
                                                <ul>
                                                    <li>+1d (2d), +6cd (8cd), +1fd (3fd), +4p (14p)
                                                        <ul>
                                                            <li>total: 28 damage per spike, 112 ceramic, 42 fortified</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "400 - Spiked Mines",
                                "content": `
                                        <ul>
                                            <li>spikes buffed
                                                <ul>
                                                    <li>at 100%p and on expire: explosion
                                                        <ul>
                                                            <li>10d, 2cd (12cd), 1fd, 60p, 28r blast, explosion type</li>
                                                            <li>applies burn status: 1d/2s, 6s duration</li>
                                                        </ul>
                                                    </li>
                                                    <li>note: the projectile timing out triggers both explosions, but using up pierce only triggers one</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "500 - Super Mines",
                                "content": `
                                        <ul>
                                            <li>spikes buffed
                                                <ul>
                                                    <li>200%s (3.5s)</li>
                                                    <li>+40d (50d), +18cd (70cd), +14fd</li>
                                                    <li>on damage: mini-explosion
                                                        <ul>
                                                            <li>20d, 10cd (30cd), 5fd, 30p, 20r blast, normal type</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>explosion buffed
                                                <ul>
                                                    <li>+990d (1000d), +250fd, 0cd, +20p (60p), 100r, normal type</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Faster Production",
                                "content": `
                                        <ul>
                                            <li>spikes buffed
                                                <ul>
                                                    <li>80%s (1.4s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "020 - Even Faster Production",
                                "content": `
                                        <ul>
                                            <li>spikes buffed
                                                <ul>
                                                    <li>70%s (0.98s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "030 - MOAB SHREDR",
                                "content": `
                                        <ul>
                                            <li>spikes buffed
                                                <ul>
                                                    <li>+4md (5md)
                                                        <ul>
                                                            <li>total: 25 moab damage per spike
                                                                <ul>
                                                                    <li>130: 50 moab damage per spike</li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "040 - Spike Storm",
                                "content": `
                                        <ul>
                                            <li>gains spike-storm ability (40s cooldown, 1s duration, battle ready)
                                                <ul>
                                                    <li>&#8734;r, 0.005s
                                                        <ul>
                                                            <li>note: this can be buffed by smart-boost</li>
                                                        </ul>
                                                    </li>
                                                    <li>places storm-spikes randomly on track
                                                        <ul>
                                                            <li>1d, 4md (5md), 5i, sharp type
                                                                <ul>
                                                                    <li>total: 25md per spike</li>
                                                                </ul>
                                                            </li>
                                                            <li>10-13s lifetime</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>140: storm-spikes +5p (10p)
                                                        <ul>
                                                            <li>total: 50md per spike</li>
                                                        </ul>
                                                    </li>
                                                    <li>041: storm-spikes +50% lifetime</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "050 - Carpet of Spikes",
                                "content": `
                                        <ul>
                                            <li>spikes buffed
                                                <ul>
                                                    <li>+2d (3d, 7md)
                                                        <ul>
                                                            <li>total: 15 damage per spike, 35 moab
                                                                <ul>
                                                                    <li>150: 30 damage per spike, 70 moab</li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>storm-spikes buffed
                                                <ul>
                                                    <li>+5d (6d), +2md (8md)
                                                        <ul>
                                                            <li>total: 30 damage per spike, 40 moab
                                                                <ul>
                                                                    <li>150: 60 damage per spike, 70 moab</li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>spike-storm is additionally triggered automatically every 15s</li>
                                        </ul>
                                    `
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Long Reach",
                                "content": `
                                        <ul>
                                            <li>spikes buffed
                                                <ul>
                                                    <li>+8r (42r), 75s lifetime</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "002 - Smart Spikes",
                                "content": `
                                        <ul>
                                            <li>gains extra targeting options
                                                <ul>
                                                    <li>close: closest point to the tower in range</li>
                                                    <li>far: furthest point from the tower in range
                                                        <ul>
                                                            <li>note: the track has discrete points so there is usually only one furthest point; it is impossible to tell in advance whether it will be at the \"start\" or \"end\" of the visible range</li>
                                                        </ul>
                                                    </li>
                                                    <li>smart: point closest to the exit, on active paths only</li>
                                                </ul>
                                            </li>
                                            <li>smart-boost ability (2.5s duration, passive: triggered by the start of a round)
                                                <ul>
                                                    <li>0.25%s (0.4375s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "003 - Long Life Spikes",
                                "content": `
                                        <ul>
                                            <li>spikes buffed
                                                <ul>
                                                    <li>170s lifetime</li>
                                                </ul>
                                            </li>
                                            <li>smart-boost buffed
                                                <ul>
                                                    <li>5s duration</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "004 - Deadly Spikes",
                                "content": `
                                        <ul>
                                            <li>spikes buffed
                                                <ul>
                                                    <li>+2d (3d), 240s lifetime
                                                        <ul>
                                                            <li>total: 15 damage per spike
                                                                <ul>
                                                                    <li>104: 30 damage per spike</li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "005 - Perma-Spike",
                                "content": `
                                        <ul>
                                            <li>spikes buffed
                                                <ul>
                                                    <li>+8d (11d), +45p (50p), 3.0s, 300s lifetime
                                                        <ul>
                                                            <li>total: 550 damage per spike</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>105: +40p (90p)
                                                        <ul>
                                                            <li>total: 990 damage per spike</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        }
                    }
                },
                "engineerMonkey": {
                    "name": "Engineer Monkey",
                    "data": {
                        "base": `
                                <ul>
                                    <li>$400 (1,000 MM)</li>
                                    <li>size: 7 radius</li>
                                    <li>placeable on: land</li>
                                    <li>nail attack
                                        <ul>
                                            <li>1d, 3p, 40r, 0.7s, sharp type</li>
                                        </ul>
                                    </li>
                                </ul>
                            `,
                        "top": {
                            "1": {
                                "name": "100 - Sentry Gun",
                                "content": `
                                        <ul>
                                            <li>gains build-sentry attack
                                                <ul>
                                                    <li>40r, 10.0s</li>
                                                    <li>places a sentry subtower randomly on land
                                                        <ul>
                                                            <li>25s lifetime</li>
                                                            <li>nail attack
                                                                <ul>
                                                                    <li>1d, 2p, 0.98s, 45r, sharp type</li>
                                                                </ul>
                                                            </li>
                                                            <li>inherits buffs or can be buffed directly</li>
                                                            <li>cannot be buffed by alchemist</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>110: sentry nail +4r (49r)</li>
                                                    <li>120: sentry nail +1md, +1fd</li>
                                                    <li>101: sentry nail +1p (3p), shatter type</li>
                                                    <li>102: sentry nail applies pinned status on damage</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "200 - Faster Engineering",
                                "content": `
                                        <ul>
                                            <li>build-sentry buffed
                                                <ul>
                                                    <li>60%s (6.0)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "300 - Sprockets",
                                "content": `
                                        <ul>
                                            <li>nail buffed
                                                <ul>
                                                    <li>60%s (0.42s)</li>
                                                </ul>
                                            </li>
                                            <li>sentry buffed
                                                <ul>
                                                    <li>nail 60%s (0.59s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "400 - Sentry Expert",
                                "content": `
                                        <ul>
                                            <li>build-sentry buffed
                                                <ul>
                                                    <li>places crushing-sentry, boom-sentry, cold-sentry, energy-sentry on a cycle, but sentries may be skipped depending on the bloons on screen
                                                        <ul>
                                                            <li>crushing-sentry
                                                                <ul>
                                                                    <li>spiked-ball attack
                                                                        <ul>
                                                                            <li>2d, 1cd (3cd), 16p, 50r, 1.1s, sharp type</li>
                                                                        </ul>
                                                                    </li>
                                                                    <li>skipped if there are leads (unless black and white are also present), but never skipped if there are ceramics</li>
                                                                </ul>
                                                            </li>
                                                            <li>boom-sentry
                                                                <ul>
                                                                    <li>bomb attack
                                                                        <ul>
                                                                            <li>50r, 0.9s</li>
                                                                            <li>on contact: explosion
                                                                                <ul>
                                                                                    <li>2d, 30p, 18r blast, explosion type</li>
                                                                                </ul>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li>skipped if there are blacks (unless white and lead are also present)</li>
                                                                </ul>
                                                            </li>
                                                            <li>cold-sentry
                                                                <ul>
                                                                    <li>ice-ball attack
                                                                        <ul>
                                                                            <li>50r, 1.5s</li>
                                                                            <li>on contact: freeze
                                                                                <ul>
                                                                                    <li>1d, 15p, 12r blast, cold type</li>
                                                                                    <li>applies frozen status: 1.5s duration</li>
                                                                                    <li>applies permafrost status: 50% slow</li>
                                                                                </ul>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li>skipped if there are whites (unless lead and black are also present)</li>
                                                                </ul>
                                                            </li>
                                                            <li>energy-sentry
                                                                <ul>
                                                                    <li>laser attack
                                                                        <ul>
                                                                            <li>2d, 8p, 50r, 0.57s, energy type</li>
                                                                        </ul>
                                                                    </li>
                                                                    <li>skipped if there are leads (unless black and white are also present), and always skipped if there are purples</li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>410: all sentries +4r</li>
                                                    <li>410: all sentry attacks +1md and +1fd</li>
                                                    <li>401: spiked-ball 28p, bomb 38p, ice-ball 19p, laser 10p</li>
                                                    <li>402: all sentry attacks can apply pinned status</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "500 - Sentry Champion",
                                "content": `
                                        <ul>
                                            <li>build-sentry buffed: places champion-sentry
                                                <ul>
                                                    <li>plasma attack
                                                        <ul>
                                                            <li>2d, 5p, 50r, 0.03, plasma type</li>
                                                            <li>on expire: selfdestruct attack
                                                                <ul>
                                                                    <li>260d, 100p, 45r blast, plasma type</li>
                                                                    <li>activates either when sold or 2s after expiring</li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>501: champion-sentry plasma +1p (6p)</li>
                                                    <li>502: champion-sentry plasma applies pinned status</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "middle": {
                            "1": {
                                "name": "010 - Larger Service Area",
                                "content": `
                                        <ul>
                                            <li>all attacks buffed
                                                <ul>
                                                    <li>+20r (60r)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "020 - Deconstruction",
                                "content": `
                                        <ul>
                                            <li>nail buffed
                                                <ul>
                                                    <li>+1md (2md), +1fd</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "030 - Cleansing Foam",
                                "content": `
                                        <ul>
                                            <li>gains place-foam attack
                                                <ul>
                                                    <li>60r, 2s</li>
                                                    <li>places foam on track based on targeting, defaults on close
                                                        <ul>
                                                            <li>1ld, 20p, normal type
                                                                <ul>
                                                                    <li>this means that fortified leads will not be one-shot</li>
                                                                </ul>
                                                            </li>
                                                            <li>8.5s lifetime</li>
                                                            <li>decamo, degrow</li>
                                                            <li>deleads DDTs</li>
                                                            <li>note: pierce is used even if a bloon does not have camo or regrow properties to remove</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>230: place-foam 60%s (1.2s)</li>
                                                    <li>031: foam +10p (30p)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "040 - Overclock",
                                "content": `
                                        <ul>
                                            <li>nail buffed
                                                <ul>
                                                    <li>+12p (15p)</li>
                                                </ul>
                                            </li>
                                            <li>gains overclock ability (45s cooldown, battle ready)
                                                <ul>
                                                    <li>chosen tower's reload time is reduced by 40% (attacks 1.667x faster) for the next (105 - 15 tier)s</li>
                                                    <li>a hero's tier is considered to be floor(level / 4), so level 20 is equivalent to tier 5</li>
                                                    <li>farms can be overclocked, giving them a +50% income buff</li>
                                                    <li>villages can be overclocked, even when not upgraded to 5xx: the range is increased by 25%</li>
                                                    <li>note: affects subtowers</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "050 - Ultraboost",
                                "content": `
                                        <ul>
                                            <li>nail buffed
                                                <ul>
                                                    <li>+15p (30p)</li>
                                                </ul>
                                            </li>
                                            <li>overclock replaced by ultraboost (20s cooldown, battle ready)
                                                <ul>
                                                    <li>applies overclock buff as before
                                                        <ul>
                                                            <li>60s duration on tier 5 towers</li>
                                                        </ul>
                                                    </li>
                                                    <li>additionally applies a permanent 8% reload buff, which stacks additively up to 5 times</li>
                                                    <li>this means that after the first ultraboost, the tower has a 92% reload multiplier, after the second it is replaced by 84%, and so on down to 60% (1.667x faster)</li>
                                                    <li>in the case of villages, this is +2.5% to range, then 5%, etc, up to +25%r</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            }
                        },
                        "bottom": {
                            "1": {
                                "name": "001 - Oversize Nails",
                                "content": `
                                        <ul>
                                            <li>nail buffed
                                                <ul>
                                                    <li>+5p (8p), shatter type</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "2": {
                                "name": "002 - Pin",
                                "content": `
                                        <ul>
                                            <li>nail buffed
                                                <ul>
                                                    <li>on damage: applies pinned status
                                                        <ul>
                                                            <li>1s duration, 100% slow, blimps are immune</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "3": {
                                "name": "003 - Double Gun",
                                "content": `
                                        <ul>
                                            <li>nail buffed
                                                <ul>
                                                    <li>50%s (0.35s)</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "4": {
                                "name": "004 - Bloon Trap",
                                "content": `
                                        <ul>
                                            <li>gains build-trap attack
                                                <ul>
                                                    <li>places a trap on the closest point of track in range
                                                        <ul>
                                                            <li>500i, 9.0s</li>
                                                            <li>can only place a trap after a deploy time of 2.1s of collecting the previous trap
                                                                <ul>
                                                                    <li>note: the first trap is placed immediately</li>
                                                                </ul>
                                                            </li>
                                                            <li>pops any visible non-MOAB-class bloon up to its impact limit</li>
                                                            <li>once full, can be collected manually (100r) or automatically (5s)
                                                                <ul>
                                                                    <li>when collected, gives $1.5 times the amount of natural RBE collected</li>
                                                                    <ul>
                                                                        <li>does not give money for bloons captured over the impact limit (max $750)</li>
                                                                    </ul>
                                                                </ul>
                                                            </li>
                                                            <li>attack rate and deploy time can't be buffed</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>crosspath
                                                <ul>
                                                    <li>204: trap build time 60%s (5.4s)</li>
                                                    <li>014: allows the build-trap attack to be targeted manually anywhere in range, and retargeting the trap collects the current one</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
                            },
                            "5": {
                                "name": "005 - XXXL Trap",
                                "content": `
                                        <ul>
                                            <li>trap buffed
                                                <ul>
                                                    <li>10,000i, 1.5s</li>
                                                    <li>deploy time 1.5s</li>
                                                    <li>cash per trap is now natural bloon RBE captured*0.75</li>
                                                    <li>can trap blimps other than BAD</li>
                                                    <li>can capture blimps beyond the pierce limit</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    `
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
                        "1": `<ul>
                            <li>$450</li>
                            <li>Leveling Rate: 1.0x</li>
                            <li>Unlock Cost: None</li>
                            <li>size: 7 radius</li>
                            <li>placeable on: land</li>
                            <li>arrow attack
                                <ul>
                                    <li>1d, 4p, 50r, 0.95s, sharp type</li>
                                    <li>jumps to nearby (50 units) targets</li>
                                </ul>
                            </li>
                        </ul>`,
                        "2": `<ul>
                            <li>arrow buffed
                                <ul>
                                    <li>+2p (6p)</li>
                                </ul>
                            </li>
                        </ul>`,
                        "3": `<ul>
                            <li>gains rapid-shot ability (45s cooldown, 6.2s duration, battle ready)
                                <ul>
                                    <li>33.33%s</li>
                                    <li>duration increases 0.5s per level (2 + 0.5 level)</li>
                                </ul>
                            </li>
                        </ul>`,
                        "4": `<ul>
                            <li>arrow buffed
                                <ul>
                                    <li>+2r (52)</li>
                                </ul>
                            </li>
                        </ul>`,
                        "5": `<ul>
                            <li>gains camo detection</li>
                        </ul>`,
                        "6": `<ul>
                            <li>arrow buffed
                                <ul>
                                    <li>+1j (2j 10&deg spread)</li>
                                </ul>
                            </li>
                        </ul>`,
                        "7": `<ul>
                            <li>every third arrow replaced by bomb-arrow
                                <ul>
                                    <li>same stats as arrow</li>
                                    <li>on first hit: explosion
                                        <ul>
                                            <li>1d, 10p, 25.7r blast, explosion type</li>
                                            <li>note: bloons can be hit by both the arrow and the explosion</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>`,
                        "8": `<ul>
                            <li>all attacks buffed
                                <ul>
                                    <li>+2md (3md)</li>
                                </ul>
                            </li>
                        </ul>`,
                        "9": `<ul>
                            <li>arrow and bomb-arrow buffed
                                <ul>
                                    <li>+2p (8p)</li>
                                </ul>
                            </li>
                        </ul>`,
                        "10": `<ul>
                            <li>gains storm-of-arrows ability (60s cooldown, 3s duration, battle ready)
                                <ul>
                                    <li>6d, 6md (12), &#8734;p, 100r zone, 0.05s, sharp type</li>
                                    <li>7.5% chance of hitting (per frame)</li>
                                    <li>can rehit after 0.05s</li>
                                    <li>centered according to Quincy's targeting when activated</li>
                                </ul>
                            </li>
                        </ul>`,
                        "11": `<ul>
                            <li>arrow buffed
                                <ul>
                                    <li>0.6s</li>
                                </ul>
                            </li>
                        </ul>`,
                        "12": `<ul>
                            <li>arrow buffed
                                <ul>
                                    <li>+1p (9p)</li>
                                </ul>
                            </li>
                        </ul>`,
                        "13": `<ul>
                            <li>arrow buffed
                                <ul>
                                    <li>+2r (54r)</li>
                                </ul>
                            </li>
                        </ul>`,
                        "14": `<ul>
                            <li>all attacks buffed
                                <ul>
                                    <li>+2md (5md)</li>
                                </ul>
                            </li>
                        </ul>`,
                        "15": `<ul>
                            <li>rapid-shot buffed
                                <ul>
                                    <li>35s cooldown, is now a 25%s buff</li>
                                </ul>
                            </li>
                        </ul>`,
                        "16": `<ul>
                            <li>arrow buffed
                                <ul>
                                    <li>0.4s</li>
                                </ul>
                            </li>
                        </ul>`,
                        "17": `<ul>
                            <li>arrow buffed
                                <ul>
                                    <li>+25% lifetime</li>
                                </ul>
                            </li>
                            <li>bomb-arrow buffed
                                <ul>
                                    <li>every other arrow is replaced by bomb-arrow</li>
                                </ul>
                            </li>
                        </ul>`,
                        "18": `<ul>
                            <li>arrow buffed
                                <ul>
                                    <li>0.25s</li>
                                </ul>
                            </li>
                            <li>storm-of-arrows buffed
                                <ul>
                                    <li>50s cooldown</li>
                                    <li>10% chance to hit</li>
                                </ul>
                            </li>
                        </ul>`,
                        "19": `<ul>
                            <li>arrow buffed
                                <ul>
                                    <li>+1j (3j), +2p (11p)</li>
                                </ul>
                            </li>
                        </ul>`,
                        "20": `<ul>
                            <li>arrow buffed: 0.2s</li>
                            <li>storm-of-arrows buffed
                                <ul>
                                    <li>+9d (15d), +9md (30md)</li>
                                    <li>15% chance to hit</li>
                                </ul>
                            </li>
                        </ul>`
                    }
                },
                "cyberQuincy": { 
                    "name": "Cyber Quincy",
                    "data": {
                        "1": `<ul>
                            <li>$450</li>
                            <li>Leveling Rate: 1.0x</li>
                            <li>Unlock Cost: 2,000 MM + 40,000 Quincy Points</li>
                            <li>size: 7 radius</li>
                            <li>placeable on: land</li>
                            <li>arrow attack
                                <ul>
                                    <li>1d, 4p, 50r, 0.95s, sharp type, 600 projectile speed</li>
                                    <li>jumps to nearby (50 units) targets</li>
                                    <li>can see past obstacles</li>
                                </ul>
                            </li>
                        </ul>`,
                        "2": `<ul>
                            <li>arrow buffed
                                <ul>
                                    <li>+2p (6p)</li>
                                </ul>
                            </li>
                        </ul>`,
                        "3": `<ul>
                            <li>gains cyber-shot ability (45s cooldown, 5s duration, 11.25s initial)
                                <ul>
                                    <li>+15p (21p), +5r (55r)</li>, 84.75%s?</li>
                                    <li>duration increases 0.5s per level (5 + 0.5 level)</li>
                                </ul>
                            </li>
                        </ul>`,
                        "4": `<ul>
                            <li>arrow buffed
                                <ul>
                                    <li>+2r (52)</li>
                                </ul>
                            </li>
                        </ul>`,
                        "5": `<ul>
                            <li>gains camo detection</li>
                        </ul>`,
                        "6": `<ul>
                            <li>arrow buffed
                                <ul>
                                    <li>+1j (2j 10&deg spread)</li>
                                </ul>
                            </li>
                        </ul>`,
                        "7": `<ul>
                            <li>every third arrow replaced by bomb-arrow
                                <ul>
                                    <li>same stats as arrow</li>
                                    <li>on first hit: emp-blast
                                        <ul>
                                            <li>300%d, 200%p, 25.7r blast, plasma type</li>
                                            <li>note: bloons can be hit by both the arrow and the emp-blast</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>`,
                        "8": `<ul>
                            <li>all attacks buffed
                                <ul>
                                    <li>+2md (3md)</li>
                                </ul>
                            </li>
                        </ul>`,
                        "9": `<ul>
                            <li>arrow and bomb-arrow buffed
                                <ul>
                                    <li>+2p (8p)</li>
                                </ul>
                            </li>
                        </ul>`,
                        "10": `<ul>
                            <li>gains cyber-storm ability (60s cooldown, 1.5s duration, battle ready)
                                <ul>
                                    <li>25d, 25md (12), &#8734;p, 50r zone, 0.05s, plasma type</li>
                                    <li>7.5% chance of hitting (per frame)</li>
                                    <li>can rehit after 0.05s</li>
                                    <li>centered according to Quincy's targeting when activated</li>
                                </ul>
                            </li>
                        </ul>`,
                        "11": `<ul>
                            <li>arrow buffed
                                <ul>
                                    <li>+2d (3d)</li>
                                </ul>
                            </li>
                        </ul>`,
                        "12": `<ul>
                            <li>arrow buffed
                                <ul>
                                    <li>+1p (9p)</li>
                                </ul>
                            </li>
                        </ul>`,
                        "13": `<ul>
                            <li>arrow buffed
                                <ul>
                                    <li>+2r (54r)</li>
                                </ul>
                            </li>
                        </ul>`,
                        "14": `<ul>
                            <li>all attacks buffed
                                <ul>
                                    <li>+8md (11md)</li>
                                </ul>
                            </li>
                        </ul>`,
                        "15": `<ul>
                            <li>cyber-shot buffed
                                <ul>
                                    <li>35s cooldown, is now a +30p (39) buff to arrow and a 500%d buff to emp-blast</li>
                                </ul>
                            </li>
                        </ul>`,
                        "16": `<ul>
                            <li>arrow buffed
                                <ul>
                                    <li>+5d (8d)</li>
                                </ul>
                            </li>
                        </ul>`,
                        "17": `<ul>
                            <li>arrow buffed
                                <ul>
                                    <li>+25% lifetime</li>
                                </ul>
                            </li>
                            <li>emp-arrow buffed
                                <ul>
                                    <li>every other arrow is replaced by emp-arrow</li>
                                </ul>
                            </li>
                        </ul>`,
                        "18": `<ul>
                            <li>arrow buffed
                                <ul>
                                    <li>+27d (35d)</li>
                                </ul>
                            </li>
                            <li>cyber-storm buffed
                                <ul>
                                    <li>50s cooldown</li>
                                    <li>+10d (35), +10md (70)</li>
                                    <li>10% chance to hit</li>
                                </ul>
                            </li>
                        </ul>`,
                        "19": `<ul>
                            <li>arrow buffed
                                <ul>
                                    <li>+1j (3j), +2p (11p)</li>
                                </ul>
                            </li>
                        </ul>`,
                        "20": `<ul>
                            <li>arrow buffed: 0.2s</li>
                            <li>cyber-storm buffed
                                <ul>
                                    <li>+25d (60d), +25md (120md)</li>
                                    <li>15% chance to hit</li>
                                </ul>
                            </li>
                        </ul>`
                    }
                },
                "gwendolin": {
                    "name": "Gwendolin",
                    "data": {
                        "1": `<ul>
                        <li>$700</li>
                        <li>Leveling Rate: 1.58823529x</li>
                        <li>Unlock Cost: Complete Training Camp</li>
                        <li>size: 7 radius</li>
                        <li>placeable on: land</li>
                        <li>fire attack
                            <ul>
                                <li>1d, 3p, 38r, 0.5s, fire type</li>
                            </ul>
                        </li>
                        </ul>`,
                        "2": `<ul>
                        <li>fire buffed
                            <ul>
                                <li>+2p (5p)</li>
                            </ul>
                        </ul>`,
                        "3": `<ul>
                        <li>gains cocktail-of-fire ability (45s cooldown, 7.5s initial)
                            <ul>
                                <li>can see past obstacles</li>
                                <li>places wall-of-fire on the track, targetable manually anywhere within range
                                    <ul>
                                        <li>1d, 26p, 15r zone, 0.24s, fire type, camo</li>
                                        <li>12s lifetime</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        </ul>`,
                        "4": `<ul>
                        <li>gains heat-it-up attack
                            <ul>
                                <li>3d, ∞p, 38r blast, fire type</li>
                                <li>triggered by either the 28th shot or any shot after 4.5s (whichever takes longer)</li>
                                <li>applies heat-it-up buff to towers in range
                                    <ul>
                                        <li>10s duration, +1p, lead popping</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        </ul>`,
                        "5": `<ul>
                        <li>fire buffed
                            <ul>
                                <li>+2p (7p)</li>
                            </ul>
                        </li>
                        <li>grants pyro-expert buff
                            <ul>
                                <li>affects all 4xx+ tack, xx3+ mortar, and x3x+ wizard</li>
                                <li>+10%r, 90%s</li>
                            </ul>
                        </li>
                        </ul>`,
                        "6": `<ul>
                        <li>fire buffed
                            <ul>
                                <li>applies burn status
                                    <ul>
                                        <li>1d/1.5s, fire type, 3.05s duration</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        </ul>`,
                        "7": `<ul>
                        <li>heat-it-up buffed
                            <ul>
                                <li>+5r (43r)</li>
                            </ul>
                        </li>
                        </ul>`,
                        "8": `<ul>
                        <li>fire buffed
                            <ul>
                                <li>+1j (2j)</li>
                            </ul>
                        </li>
                        </ul>`,
                        "9": `<ul>
                        <li>fire buffed
                            <ul>
                                <li>+1d (2d)</li>
                            </ul>
                        </li>
                        </ul>`,
                        "10": `<ul>
                        <li>gains firestorm ability (60s cooldown, battle ready)
                            <ul>
                                <li>5d, 20md, ∞p, ∞r, fire type</li>
                                <li>applies burn status
                                    <ul>
                                        <li>1d/0.5s or 15md/1s, fire type, 8s duration</li>
                                    </ul>
                                </li>
                                <li>applies extra-heat-it-up buff to all towers on screen</li>
                                    <ul>
                                        <li>+1d, +1p, lead popping for 8s</li>
                                    </ul>
                                </li>
                            </ul
                        </li>
                        </ul>`,
                        "11": `<ul>
                        <li>fire buffed
                            <ul>
                                <li>+3r (41r)</li>
                            </ul>
                        </li>
                        <li>heat-it-up buffed
                            <ul>
                                <li>+3r (46r)</li>
                            </ul>
                        </li>
                        </ul>`,
                        "12": `<ul>
                        <li>fire buffed
                            <ul>
                                <li>0.4s</li>
                            </ul>
                        </li>
                        <li>heat-it-up now triggered by 34 shots</li>
                        </ul>`,
                        "13": `<ul>
                        <li>fire buffed
                            <ul>
                                <li>+3p (10p), increased projectile speed</li>
                            </ul>
                        </li>
                        </ul>`,
                        "14": `<ul>
                        <li>wall-of-fire buffed
                            <ul>
                                <li>+1d (2d)</li>
                                <li>applies burn status to blimps
                                    <ul>
                                        <li>5md/1s, 10s duration</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        </ul>`,
                        "15": `<ul>
                        <li>fire buffed</li>
                            <ul>
                                <li>0.3s</li>
                            </ul>
                        </li>
                        <li>heat-it-up now triggered by 40 shots</li>
                        </ul>`,
                        "16": `<ul>
                        <li>all attacks buffed
                            <ul>
                                <li>normal type</li>
                            </ul>
                        </li>
                        <li>firestorm burn buffed
                            <ul>
                                <li>10s duration</li>
                            </ul>
                        </li>
                        </ul>`,
                        "17": `<ul>
                        <li>heat-it-up buffed</li>
                            <ul>
                                <li>+1d, +1ld (2ld)</li>
                            </ul>
                        </li>
                        </ul>`,
                        "18": `<ul>
                        <li>fire buffed
                            <ul>
                                <li>0.15s</li>
                            </ul>
                        </li>
                        <li>heat-it-up now triggered by 64 shots</li>
                        <li>pyro-expert buffed
                            <ul>
                                <li>+20%r, 20%s</li>
                            </ul>
                        </li>
                        </ul>`,
                        "19": `<ul>
                        <li>fire buffed
                            <ul>
                                <li>+1j (3j)</li>
                            </ul>
                        </li>
                        </ul>`,
                        "20": `<ul>
                        <li>firestorm buffed
                            <ul>
                                <li>+5d (10d), +40md (50md); burn 2d/0.5s, 50md/1s</li>
                            </ul>
                        </li>
                        </ul>`
                    }
                },
                "scientistGwendolin": {
                    "name": "Scientist Gwendolin",
                    "data": {
                        "1": `<ul>
                        <li>$700</li>
                        <li>Leveling Rate: 1.58823529x</li>
                        <li>Unlock Cost: 2,000 MM + 40,000 Gwendolin Points</li>
                        <li>size: 7 radius</li>
                        <li>placeable on: land</li>
                        <li>fire attack
                            <ul>
                                <li>1d, 1ld (2ld), 1frd (2frd), 3p, 38r, 0.5s, fire type</li>
                            </ul>
                        </li>
                        </ul>`,
                        "2": `<ul>
                        <li>fire buffed
                            <ul>
                                <li>+2p (5p)</li>
                            </ul>
                        </ul>`,
                        "3": `<ul>
                        <li>gains chemical-cocktail ability (30s cooldown, 7.5s initial)
                            <ul>
                                <li>can see past obstacles</li>
                                <li>places wall-of-fire on the track, targetable manually anywhere within range
                                    <ul>
                                        <li>1d, +1ld (2ld), +1 frd (2frd), 40p, 15r zone, 0.18s, fire type, camo</li>
                                        <li>8s lifetime</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        </ul>`,
                        "4": `<ul>
                        <li>gains heat-it-up attack
                            <ul>
                                <li>3d, ∞p, 38r blast, fire type</li>
                                <li>triggered by either the 36th shot or any shot after 4.5s (whichever takes longer)</li>
                                <li>applies heat-it-up buff to towers in range
                                    <ul>
                                        <li>8s duration, +1p, lead popping, +1ld, +1frd</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        </ul>`,
                        "5": `<ul>
                        <li>fire buffed
                            <ul>
                                <li>+2p (7p)</li>
                            </ul>
                        </li>
                        <li>grants pyro-expert buff
                            <ul>
                                <li>affects all 4xx+ tack, xx3+ mortar, and x3x+ wizard</li>
                                <li>+10%r, 90%s</li>
                            </ul>
                        </li>
                        </ul>`,
                        "6": `<ul>
                        <li>fire buffed
                            <ul>
                                <li>applies burn status
                                    <ul>
                                        <li>1d/1.5s, fire type, 3.05s duration</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        </ul>`,
                        "7": `<ul>
                        <li>heat-it-up buffed
                            <ul>
                                <li>+5r (43r)</li>
                            </ul>
                        </li>
                        </ul>`,
                        "8": `<ul>
                        <li>fire buffed
                            <ul>
                                <li>+1j (2j)</li>
                            </ul>
                        </li>
                        </ul>`,
                        "9": `<ul>
                        <li>fire buffed
                            <ul>
                                <li>+1d (2d)</li>
                            </ul>
                        </li>
                        </ul>`,
                        "10": `<ul>
                        <li>gains science-storm ability (60s cooldown, battle ready)
                            <ul>
                                <li>5d, 20md, ∞p, ∞r, fire type</li>
                                <li>applies burn status
                                    <ul>
                                        <li>1d/0.25s or 15md/0.5s, fire type, 3.5s duration</li>
                                    </ul>
                                </li>
                                <li>applies extra-heat-it-up buff to all towers on screen</li>
                                    <ul>
                                        <li>+1d, +1ld (+2ld), +1frd (+2frd), +1p, lead popping for 8s</li>
                                    </ul>
                                </li>
                            </ul
                        </li>
                        </ul>`,
                        "11": `<ul>
                        <li>fire buffed
                            <ul>
                                <li>+3r (41r)</li>
                            </ul>
                        </li>
                        <li>heat-it-up buffed
                            <ul>
                                <li>+3r (46r)</li>
                            </ul>
                        </li>
                        </ul>`,
                        "12": `<ul>
                        <li>fire buffed
                            <ul>
                                <li>0.4s</li>
                            </ul>
                        </li>
                        <li>heat-it-up now triggered by 48 shots</li>
                        </ul>`,
                        "13": `<ul>
                        <li>fire buffed
                            <ul>
                                <li>+3p (10p), increased projectile speed</li>
                            </ul>
                        </li>
                        </ul>`,
                        "14": `<ul>
                        <li>wall-of-fire buffed
                            <ul>
                                <li>+1d (2d)</li>
                                <li>applies burn status to blimps
                                    <ul>
                                        <li>5md/0.5s, 5s duration</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        </ul>`,
                        "15": `<ul>
                        <li>fire buffed</li>
                            <ul>
                                <li>0.3s</li>
                            </ul>
                        </li>
                        <li>heat-it-up now triggered by 64 shots</li>
                        </ul>`,
                        "16": `<ul>
                        <li>all attacks buffed
                            <ul>
                                <li>normal type</li>
                            </ul>
                        </li>
                        <li>firestorm burn buffed
                            <ul>
                                <li>5s duration</li>
                            </ul>
                        </li>
                        </ul>`,
                        "17": `<ul>
                        <li>heat-it-up buffed</li>
                            <ul>
                                <li>+1d, +1ld (+2ld), +1frd (+2frd)</li>
                            </ul>
                        </li>
                        </ul>`,
                        "18": `<ul>
                        <li>fire buffed
                            <ul>
                                <li>0.15s</li>
                            </ul>
                        </li>
                        <li>heat-it-up now triggered by 70 shots</li>
                        <li>pyro-expert buffed
                            <ul>
                                <li>+20%r, 20%s</li>
                            </ul>
                        </li>
                        </ul>`,
                        "19": `<ul>
                        <li>fire buffed
                            <ul>
                                <li>+1j (3j)</li>
                            </ul>
                        </li>
                        </ul>`,
                        "20": `<ul>
                        <li>firestorm buffed
                            <ul>
                                <li>+5d (10d), +40md (50md); burn 2d/0.25s, 50md/0.5s</li>
                            </ul>
                        </li>
                        </ul>`
                    }
                },
                "obyn": {
                    "name": "Obyn Greenfoot",
                    "data": {
                        "1": `<ul>
                        <li>$650</li>
                        <li>Leveling Rate: 1.58823529x</li>
                        <li>Unlock Cost: 3,000 MM</li>
                        <li>size: 7 radius</li>
                        <li>placeable on: land</li>
                        <li>spirit attack
                            <ul>
                                <li>2d, 4p, 43r, 1.35s, plasma type</li>
                                <li>moderate homing (360 turn rate)</li>
                                <li>can see past obstacles</li>
                            </ul>
                        </li>
                        </ul>`,
                        "2": `<ul>
                        <li>gains natures-wrath buff
                            <ul>
                                <li>affects druids in range</li>
                                <li>+1p</li>
                            </ul>
                        </li>
                        </ul>`,
                        "3": `<ul>
                        <li>gains brambles ability (35s cooldown, 10s initial)
                            <ul>
                                <li>places brambles on the track
                                    <ul>
                                        <li>manually placed anywhere within range or defaulting to close</li>
                                        <li>1d, 40p, sharp type</li>
                                        <li>95s lifetime</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        </ul>`,
                        "4": `<ul>
                        <li>gains natures-ward attack
                            <ul>
                                <li>18s</li>
                                <li>places on closest part of the track</li>
                                <li>places a ward-totem on the track
                                    <ul>
                                        <li>28r, 25% slow / 12.5% for blimps, 15s lifetime</li>
                                        <li>note: camos can be slowed, but the totem does not allow camos in range to be targeted by subs</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        </ul>`,
                        "5": `<ul>
                        <li>spirit buffed
                            <ul>
                                <li>1.1s</li>
                            </ul>
                        </li>
                        </ul>`,
                        "6": `<ul>
                        <li>spirit buffed
                            <ul>
                                <li>+5p (9p), increased projectile speed</li>
                            </ul>
                        </li>
                        </ul>`,
                        "7": `<ul>
                        <li>brambles buffed
                            <ul>
                                <li>+40p (80p)</li>
                            </ul>
                        </li>
                        </ul>`,
                        "8": `<ul>
                        <li>ward-totem buffed
                            <ul>
                                <li>35% slow / 17.5% for blimps</li>
                            </ul>
                        </li>
                        </ul>`,
                        "9": `<ul>
                        <li>spirit buffed
                            <ul>
                                <li>+3d (5d)</li>
                            </ul>
                        </li>
                        </ul>`,
                        "10": `<ul>
                        <li>gains wall-of-trees ability (90s cooldown, battle ready)
                            <ul>
                                <li>places a tree on the track
                                    <ul>
                                        <li>manually placed anywhere within range or defaulting to close</li>
                                        <li>2,000p</li>
                                        <li>pops anything up to its pierce limit and grants ($2 x natural bloon RBE eaten) split across 10 bananas once full</li>
                                        <li>note: blimps can only be captured if their remaining RBE doesn't exceed the tree's remaining pierce, however bloons can bypass this</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        </ul>`,
                        "11": `<ul>
                        <li>natures-wrath buffed
                            <ul>
                                <li>affects magic towers in range</li>
                                <li>+2p, +5r</li>
                                <li>note: stacks with the existing +1p for druids</li>
                            </ul>
                        </li>
                        </ul>`,
                        "12": `<ul>
                        <li>spirit buffed
                            <ul>
                                <li>0.8s</li>
                            </ul>
                        </li>
                        <li>natures-wrath buffed
                            <ul>
                                <li>affects druids in range</li>
                                <li>+1d</li>
                            </ul>
                        </li>
                        </ul>`,
                        "13": ` <ul>
                        <li>spirit buffed
                            <ul>
                                <li>+5p (14p), increased projectile speed</li>
                            </ul>
                        </li>
                        <li>natures-wrath buffed
                            <ul>
                                <li>affects druids in range</li>
                                <li>+10% discount to tier 5 upgrades</li>
                            </ul>
                        </li>
                        </ul>`,
                        "14": `<ul>
                        <li>spirit buffed
                            <ul>
                                <li>+2d (7d)</li>
                            </ul>
                        </li>
                        </ul>`,
                        "15": `<ul>
                        <li>natures-ward buffed
                            <ul>
                                <li>12s</li>
                            </ul>
                        </li>
                        <li>ward-totem buffed
                            <ul>
                                <li>34r, 50% slow / 25% for blimps</li>
                            </ul>
                        </li>
                        </ul>`,
                        "16": `<ul>
                        <li>brambles buffed
                            <ul>
                                <li>+420p (500p), normal type</li>
                            </ul>
                        </li>
                        </ul>`,
                        "17": `<ul>
                        <li>spirit buffed
                            <ul>
                                <li>0.5s</li>
                            </ul>
                        </li>
                        <li>65r</li>
                        </ul>`,
                        "18": `<ul>
                        <li>gains improved-wrath buff
                            <ul>
                                <li>affects all xx3+ druids</li>
                                <li>whenever a round starts, wrath counter is set to the maximum 200 pops for +100% speed</li>
                            </ul>
                        </li>
                        </ul>`,
                        "19": `<ul>
                        <li>spirit buffed
                            <ul>
                                <li>+4d (10d)</li>
                            </ul>
                        </li>
                        </ul>`,
                        "20": `<ul>
                        <li>tree buffed
                            <ul>
                                <li>+6,000p (8,000p)</li>
                            </ul>
                        </li>
                        </ul>`
                    }
                },
                "oceanObyn": {
                    "name": "Ocean Obyn",
                    "data": {
                        "1": `<ul>
                        <li>$650</li>
                        <li>Leveling Rate: 1.58823529x</li>
                        <li>Unlock Cost: 2,000 MM + 40,000 Obyn Greenfoot Points</li>
                        <li>size: 7 radius</li>
                        <li>placeable on: land and water</li>
                        <li>spirit attack
                            <ul>
                                <li>2d, 4p, 43r, 1.35s, plasma type</li>
                                <li>moderate homing (360 turn rate)</li>
                                <li>can see past obstacles</li>
                            </ul>
                        </li>
                        </ul>`,
                        "2": `<ul>
                        <li>gains wrath-of-the-sea buff
                            <ul>
                                <li>affects magic monkeys in range</li>
                                <li>+1p</li>
                            </ul>
                        </li>
                        </ul>`,
                        "3": `<ul>
                        <li>gains living-coral ability (35s cooldown, 10s initial)
                            <ul>
                                <li>Places living-coral on the track
                                    <ul>
                                        <li>manually placed anywhere within range or defaulting to close</li>
                                        <li>1d, 20p, sharp type</li>
                                        <li>can regenerate
                                            <ul>
                                                <li>+10p/10s, max 100p</li>
                                            </ul>
                                        </li>
                                        <li>95s lifetime</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "4": `<ul>
                        <li>gains oceans-ward attack
                            <ul>
                                <li>18s</li>
                                <li>places on closest part of the track</li>
                                <li>places a ward-totem on the track
                                    <ul>
                                        <li>32r, every 4th unique bloon that passes over is knocked back 50-300 units, 15s lifetime</li>
                                        <li>note: camos can be knocked back, but the totem does not allow camos in range to be targeted by subs</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "5": `<ul>
                        <li>spirit buffed
                            <ul>
                                <li>1.1s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "6": `<ul>
                        <li>spirit buffed
                            <ul>
                                <li>+5p (9p), increased projectile speed</li>
                            </ul>
                        </li>
                    </ul>`,
                        "7": `<ul>
                        <li>living-coral buffed
                            <ul>
                                <li>+20p (40p)</li>
                            </ul>
                        </li>
                        <li>regenerate buffed
                            <ul>
                                <li>+20p/10s, max 200p</li>
                            </ul>
                        </li>
                    </ul>`,
                        "8": `<ul>
                        <li>ward-totem buffed
                            <ul>
                                <li>knocks back every 3rd bloon</li>
                            </ul>
                        </li>
                    </ul>`,
                        "9": `<ul>
                        <li>spirit buffed
                            <ul>
                                <li>+3d (5d)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "10": `<ul>
                        <li>gains unleash-the-krakens ability (90s cooldown, battle ready)
                            <ul>
                                <li>places 2 krakens randomly on the track
                                    <ul>
                                        <li>one kraken favors opponent bloons and one favors natural bloons when it comes to targeting</li>
                                    </ul>
                                </li>
                                <li>1,200p each</li>
                                <li>pops anything up to its pierce limit and grants ($2 x natural bloon RBE eaten) split across 10 bananas once full</li>
                                <li>note: blimps can only be captured if their remaining RBE doesn't exceed the kraken's remaining pierce, however bloons can bypass this</li>
                            </ul>
                        </li>
                    </ul>`,
                        "11": `<ul>
                        <li>wrath-of-the-sea buffed
                            <ul>
                                <li>affects magic towers in range except druids</li>
                                <li>+2p, +5r</li>
                                <li>note: stacks with the existing +1p for magic monkeys</li>
                                <li>note: this means that druids still only get +1p</li>
                            </ul>
                        </li>
                    </ul>`,
                        "12": `<ul>
                        <li>spirit buffed
                            <ul>
                                <li>0.8s</li>
                            </ul>
                        </li>
                        <li>wrath-of-the-sea buffed
                            <ul>
                                <li>affects druids in range</li>
                                <li>+1d</li>
                            </ul>
                        </li>
                    </ul>`,
                        "13": `<ul>
                        <li>spirit buffed
                            <ul>
                                <li>+5p (14p), increased projectile speed</li>
                            </ul>
                        </li>
                        <li>wrath-of-the-sea buffed
                            <ul>
                                <li>affects magic towers in range</li>
                                <li>+10% discount to tier 5 upgrades</li>
                            </ul>
                        </li>
                    </ul>`,
                        "14": `<ul>
                        <li>spirit buffed
                            <ul>
                                <li>+4d (9d)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "15": `<ul>
                        <li>oceans-ward buffed:
                            <ul>
                                <li>12s</li>
                            </ul>
                        </li>
                        <li>ward-totem buffed
                            <ul>
                                <li>knocks back every other bloon</li>
                                <li>stuns every 3th blimp for 0.5s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "16": `<ul>
                        <li>living-coral buffed
                            <ul>
                                <li>+160p (200p), normal type</li>
                            </ul>
                        </li>
                        <li>regenerate buffed
                            <ul>
                                <li>+100p/10s, max 800p</li>
                            </ul>
                        </li>
                    </ul>`,
                        "17": `<ul>
                        <li>spirit buffed
                            <ul>
                                <li>0.5s</li>
                            </ul>
                        </li>
                        <li>65r</li>
                    </ul>`,
                        "18": `<ul>
                        <li>gains crystal-clarity buff
                            <ul>
                                <li>affects all magic monkeys</li>
                                <li>85%s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "19": `<ul>
                        <li>spirit buffed
                            <ul>
                                <li>+5d (14d)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "20": `<ul>
                        <li>unleash-the-krakens buffed
                            <ul>
                                <li>+2,800p (4,000p)</li>
                            </ul>
                        </li>
                    </ul>`
                    }
                },
                "strikerJones": {
                    "name": "Striker Jones",
                    "data": {
                        "1": `<ul>
                        <li>$750</li>
                        <li>Leveling Rate: 1.58823529x</li>
                        <li>Unlock Cost: 3,000 MM</li>
                        <li>size: 6 radius</li>
                        <li>placeable on: land</li>
                        <li>gains bomb attack
                            <ul>
                                <li>55r, 1.2s</li>
                                <li>on contact: explosion
                                    <ul>
                                        <li>1d, 10p, 15r blast, explosion type</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        </ul>`,
                        "2": `<ul>
                        <li>explosion buffed
                            <ul>
                                <li>+4r</li>
                            </ul>
                        </li>
                    </ul>`,
                        "3": `<ul>
                        <li>gains concussive-shell ability (16s cooldown, 5s initial)
                            <ul>
                                <li>&#8734;r, strong priority</li>
                                <li>can see past obstacles</li>
                                <li>on contact: explosion
                                    <ul>
                                        <li>2d, 48p, 27r blast, normal type, 1s stun</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "4": `<ul>
                        <li>gains explosive-expert buff
                            <ul>
                                <li>affects all bomb and mortar towers 90%s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "5": `<ul>
                        <li>applies blast-weakness status to all bloons
                            <ul>
                                <li>black property has a 50% chance of being ignored by explosions</li>
                            </ul>
                        </li>
                    </ul>`,
                        "6": `<ul>
                        <li>explosion buffed
                            <ul>
                                <li>+10p (20p), +50%r (28.5r)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "7": `<ul>
                        <li>bomb buffed
                            <ul>
                                <li>+1d (2d)</li>
                            </ul>
                        </li>
                        <li>gains mortar-expert buff
                            <ul>
                                <li>affects all mortars</li>
                                <li>+15% blast radius</li>
                            </ul>
                        </li>
                    </ul>`,
                        "8": `<ul>
                        <li>gains bomb-expert buff
                            <ul>
                                <li>affects bomb towers in range</li>
                                <li>+35%p, +5%r</li>
                            </ul>
                        </li>
                    </ul>`,
                        "9": `<ul>
                        <li>bomb buffed
                            <ul>
                                <li>0.9s</li>
                            </ul>
                        </li>
                        <li>concussive-shell buffed
                            <ul>
                                <li>+10d (12d) +10p (58p)</li>
                                <li>stuns bloons for 5s and blimps for 3s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "10": `<ul>
                        <li>gains artillery-command ability (30s cooldown, battle ready)
                            <ul>
                                <li>every bomb and mortar ability is activated without affecting their ability cooldowns</li>
                            </ul>
                        </li>
                    </ul>
                </li>`,
                        "11": `<ul>
                        <li>bomb buffed
                            <ul>
                                <li>0.65s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "12": `<ul>
                        <li>bomb buffed
                            <ul>
                                <li>+1d (3d), +3r (58r)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "13": `<ul>
                        <li>bomb buffed
                            <ul>
                                <li>0.5s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "14": `<ul>
                        <li>concussive-shell buffed
                            <ul>
                                <li>+50%r (40.5r)</li>
                                <li>50% longer stun (7.5s on bloons, 4.5s on blimps)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "15": `<ul>
                        <li>concussive-shell buffed
                            <ul>
                                <li>11s cooldown</li>
                            </ul>
                        </li>
                    </ul>`,
                        "16": `<ul>
                        <li>bomb buffed
                            <ul>
                                <li>0.35s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "17": `<ul>
                        <li>bomb buffed
                            <ul>
                                <li>+1d (4d), +2r (60r)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "18": `<ul>
                        <li>explosive-expert buffed
                            <ul>
                                <li>75%s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "19": `<ul>
                        <li>bomb buffed
                            <ul>
                                <li>0.2s</li>
                            </ul>
                        </li>
                        <li>blast-weakness buffed
                            <ul>
                                <li>black property is always ignored by explosives</li>
                            </ul>
                        </li>
                    </ul>`,
                        "20": `<ul>
                        <li>artillery-command buffed
                            <ul>
                                <li>for the next 10s, every bomb and mortar has double damage and double pierce</li>
                            </ul>
                        </li>
                    </ul>`
                    }
                },
                "bikerBones": {
                    "name": "Biker Bones",
                    "data": {
                        "1": `<ul>
                        <li>$750</li>
                        <li>Leveling Rate: 1.58823529x</li>
                        <li>Unlock Cost: 2,000 MM + 40,000 Striker Jones Points</li>
                        <li>size: 6 radius</li>
                        <li>placeable on: land</li>
                        <li>gains bomb attack
                            <ul>
                                <li>55r, 1.2s</li>
                                <li>on contact: explosion
                                    <ul>
                                        <li>1d, 10p, 15r blast, explosion type</li>
                                        <li>50% chance for normal type</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        </ul>`,
                        "2": `<ul>
                        <li>explosion buffed
                            <ul>
                                <li>+4r</li>
                            </ul>
                        </li>
                    </ul>`,
                        "3": `<ul>
                        <li>gains concussive-fire ability (24s cooldown, 7.5s initial)
                            <ul>
                                <li>&#8734;r, strong priority</li>
                                <li>can see past obstacles</li>
                                <li>on contact: explosion
                                    <ul>
                                        <li>3d, 48p, 27r blast, normal type, 1s stun</li>
                                        <li>on damage: applies burn status
                                            <ul>
                                                <li>2d/1.5s, lasts for 4s</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "4": `<ul>
                        <li>gains explosive-expert buff
                            <ul>
                                <li>affects all bomb and mortar towers</li>
                                <li>90%s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "5": `<ul>
                        <li>applies blast-weakness status to all bloons
                            <ul>
                                <li>black property has a 50% chance of being ignored by explosions</li>
                            </ul>
                        </li>
                    </ul>`,
                        "6": `<ul>
                        <li>explosion buffed
                            <ul>
                                <li>+10p (20), +50%r (28.5)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "7": `<ul>
                        <li>bomb buffed
                            <ul>
                                <li>+1d (2d)</li>
                            </ul>
                        </li>
                        <li>gains mortar-expert buff
                            <ul>
                                <li>affects all mortars</li>
                                <li>+15% blast radius</li>
                            </ul>
                        </li>
                    </ul>`,
                        "8": `<ul>
                        <li>gains biker-expert buff
                            <ul>
                                <li>affects all towers in range, excluding self</li>
                                <li>+25%p, +5%r</li>
                            </ul>
                        </li>
                    </ul>`,
                        "9": `<ul>
                        <li>bomb buffed
                            <ul>
                                <li>0.9s</li>
                            </ul>
                        </li>
                        <li>concussive-fire buffed
                            <ul>
                                <li>+17d (20d), +10p (58p)</li>
                                <li>stuns bloons for 5s and blimps for 3s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "10": `<ul>
                        <li>gains artillery-fire ability (60s cooldown, 7s duration, battle ready)
                            <ul>
                                <li>every bomb and mortar has double damage and applies burn status
                                    <ul>
                                        <li>2d/1.5s, lasts for 4s</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "11": `<ul>
                        <li>bomb buffed
                            <ul>
                                <li>0.65s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "12": `<ul>
                        <li>bomb buffed
                            <ul>
                                <li>+1d (3), +3r (58)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "13": `<ul>
                        <li>bomb buffed
                            <ul>
                                <li>0.5s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "14": `<ul>
                        <li>concussive-fire buffed
                            <ul>
                                <li>+50%r (40.5r)</li>
                                <li>50% longer stun (7.5s on bloons, 4.5s on blimps)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "15": `<ul>
                        <li>concussive-fire buffed
                            <ul>
                                <li>16s cooldown</li>
                            </ul>
                        </li>
                    </ul>`,
                        "16": `<ul>
                        <li>bomb buffed
                            <ul>
                                <li>0.35s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "17": `<ul>
                        <li>bomb buffed
                            <ul>
                                <li>+1d (4d), +2r (60r)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "18": `<ul>
                        <li>explosive-expert buffed
                            <ul>
                                <li>81%s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "19": `<ul>
                        <li>bomb buffed
                            <ul>
                                <li>0.2s</li>
                            </ul>
                        </li>
                        <li>blast-weakness buffed
                            <ul>
                                <li>black property is always ignored by explosives</li>
                            </ul>
                        </li>
                    </ul>`,
                        "20": `<ul>
                        <li>artillery-fire buffed
                            <ul>
                                <li>now triples damage and pierce of all bombs and mortars</li>
                            </ul>
                        </li>
                    </ul>`
                    }
                },
                "captainChurchill": {
                    "name": "Captain Churchill",
                    "data": {
                        "1": `<ul>
                        <li>$1500</li>
                        <li>Leveling Rate: 1.5x</li>
                        <li>Unlock Cost: 4,000 MM</li>
                        <li>size: 8 radius</li>
                        <li>placeable on: land</li>
                        <li>shell attack
                            <ul>
                                <li>3i, 63r, 0.7s</li>
                                <li>on contact: explosion
                                    <ul>
                                        <li>1d, 15p, 18r blast, explosion type</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "2": `<ul>
                        <li>explosion buffed
                            <ul>
                                <li>+3p (18)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "3": `<ul>
                        <li>gains armor-piercing-shells ability (35s cooldown, 9s duration, battle ready)
                            <ul>
                                <li>all attacks have normal type</li>
                                <li>buffs shell
                                    <ul>
                                        <li>+4i (7i)</li>
                                    </ul>
                                </li>
                                <li>buffs explosion
                                    <ul>
                                        <li>+3cd (4cd), +3md (4md)</li>
                                    </ul>
                                </li>
                                <li>duration increases 0.5s per level (7.5 + 0.5 level)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "4": `<ul>
                        <li>shell buffed
                            <ul>
                                <li>+3r (66r)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "5": `<ul>
                        <li>gains machine-gun attack
                            <ul>
                                <li>1d, 1p, 66r, 0.1s, sharp type, targets first always</li>
                            </ul>
                        </li>
                    </ul>`,
                        "6": `<ul>
                        <li>gains camo detection</li>
                    </ul>`,
                        "7": `<ul>
                        <li>explosion buffed
                            <ul>
                                <li>+1i (4i)</li>
                            </ul>
                        </li>
                        <li>explosion buffed
                            <ul>
                                <li>+1d (2)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "8": `<ul>
                        <li>shell buffed
                            <ul>
                                <li>0.5s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "9": `<ul>
                        <li>shell buffed
                            <ul>
                                <li>+1i (5i)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "10": `<ul>
                        <li>gains moab-barrage ability (60s cooldown, battle ready)
                            <ul>
                                <li>gains up to 10 barrage attacks, one for each of the 10 strongest blimps
                                    <ul>
                                        <li>250d, 0.5s, normal type</li>
                                        <li>attacks up to 16 times, or until target pops</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "11": `<ul>
                        <li>explosion buffed: +5p (23p)</li>
                    </ul>`,
                        "12": ` <ul>
                        <li>shell buffed
                            <ul>
                                <li>+1i (6i)</li>
                            </ul>
                        </li>
                        <li>explosion buffed
                            <ul>
                                <li>+1d (3d)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "13": `<ul>
                        <li>armor-piercing-shells buffed
                            <ul>
                                <li>buffs explosion
                                    <ul>
                                        <li>+1d (4d), +7cd (11cd), +7md (11md)</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "14": `<ul>
                        <li>explosion buffed
                            <ul>
                                <li>+1d (4d)</li>
                            </ul>
                        </li>
                        <li>machine-gun buffed
                            <ul>
                                <li>+1d (2d)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "15": `<ul>
                        <li>explosion buffed
                            <ul>
                                <li>+1fd</li>
                            </ul>
                        </li>
                        <li>machine-gun buffed
                            <ul>
                                <li>+1fd</li>
                            </ul>
                        </li>
                    </ul>`,
                        "16": `<ul>
                        <li>shell buffed
                            <ul>
                                <li>0.3s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "17": `<ul>
                        <li>armor-piercing-shells buffed
                            <ul>
                                <li>buffs explosion
                                    <ul>
                                        <li>+2d (6d), +12cd (18cd), +12md (18md)</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "18": `<ul>
                        <li>explosion buffed
                            <ul>
                                <li>+1d (5d)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "19": `<ul>
                        <li>shell buffed: +1i (7i)</li>
                    </ul>`,
                        "20": `<ul>
                        <li>moab-barrage buffed
                            <ul>
                                <li>30s cooldown</li>
                                <li>buffs explosion
                                    <ul>
                                        <li>+3d (8d)</li>
                                    </ul>
                                </li>
                                <li>barrage buffed
                                    <ul>
                                        <li>800d</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`
                    }
                },
                "sentaiChurchill": {
                    "name": "Sentai Churchill",
                    "data": {
                        "1": `<ul>
                        <li>$1500</li>
                        <li>Leveling Rate: 1.5x</li>
                        <li>Unlock Cost: 2,000 MM + 40,000 Captain Churchill Points</li>
                        <li>size: 8 radius</li>
                        <li>placeable on: land</li>
                        <li>shell attack
                            <ul>
                                <li>3i, 63r, 0.7s</li>
                                <li>shell uses up all impacts upon hitting a purple bloon</li>
                                <li>on contact: explosion
                                    <ul>
                                        <li>1d, 5p, 18r blast, explosion type</li>
                                        <li>on damage: applies shock effect
                                            <ul>
                                                <li>1d/1s, lasts for 1s</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>on damage: applies shock effect
                                    <ul>
                                        <li>1d/1s, lasts for 1s</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "2": `<ul>
                        <li>explosion buffed
                            <ul>
                                <li>+2p (7p)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "3": `<ul>
                        <li>gains high-energy-shells ability (45s cooldown, 9s duration, battle ready)
                            <ul>
                                <li>all attacks have normal type</li>
                                <li>buffs shell: 58%s (0.406s)</li>
                                <li>buffs shock: 1d/0.5s, lasts for 1.5s</li>
                                <li>duration increases 0.5s per level (7.5 + 0.5 level)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "4": `<ul>
                        <li>shell buffed
                            <ul>
                                <li>+3r (66r)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "5": `<ul>
                        <li>gains machine-gun attack
                            <ul>
                                <li>1d, 1p, 66r, 0.1s, sharp type, targets first always</li>
                            </ul>
                        </li>
                    </ul>`,
                        "6": `<ul>
                        <li>gains camo detection</li>
                    </ul>`,
                        "7": `<ul>
                        <li>shell buffed
                            <ul>
                                <li>+1i (4i)</li>
                            </ul>
                        </li>
                        <li>explosion buffed
                            <ul>
                                <li>+1d (2d)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "8": `<ul>
                        <li>shell buffed
                            <ul>
                                <li>0.5s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "9": `<ul>
                        <li>shell buffed
                            <ul>
                                <li>+1i (5i)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "10": `<ul>
                        <li>gains orbital-barrage ability (60s cooldown, battle ready)
                            <ul>
                                <li>gains up to 5 barrage attacks, one for each of the 5 strongest blimps
                                    <ul>
                                        <li>90d, 0.1s, normal type</li>
                                        <li>attacks up to 50 times, and attacks the target's children with remaining shells</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "11": `<ul>
                        <li>explosion buffed
                            <ul>
                                <li>+2p (10p)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "12": `<ul>
                        <li>shell buffed
                            <ul>
                                <li>+1i (6i)</li>
                            </ul>
                        </li>
                        <li>explosion buffed
                            <ul>
                                <li>+1d (3d)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "13": `<ul>
                        <li>high-energy-shells buffed
                            <ul>
                                <li>buffs shock
                                    <ul>
                                        <li>3d/0.5s</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "14": `<ul>
                        <li>explosion buffed
                            <ul>
                                <li>+1d (4d)</li>
                            </ul>
                        </li>
                        <li>machine-gun buffed
                            <ul>
                                <li>+1d (2d)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "15": `<ul>
                        <li>explosion buffed
                            <ul>
                                <li>+1fd</li>
                            </ul>
                        </li>
                        <li>machine-gun buffed
                            <ul>
                                <li>+1fd</li>
                            </ul>
                        </li>
                    </ul>`,
                        "16": `<ul>
                        <li>shell buffed
                            <ul>
                                <li>0.3s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "17": `<ul>
                        <li>high-energy-shells buffed
                            <ul>
                                <li>buffs shock
                                    <ul>
                                        <li>6d/0.5s</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "18": `<ul>
                        <li>explosion buffed
                            <ul>
                                <li>+1d (5d)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "19": `<ul>
                        <li>shell buffed
                            <ul>
                                <li>+1i (7i)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "20": `<ul>
                        <li>orbital-barrage buffed
                            <ul>
                                <li>30s cooldown</li>
                                <li>buffs explosion
                                    <ul>
                                        <li>+3d (8d)</li>
                                    </ul>
                                </li>
                                <li>buffs machine-gun
                                    <ul>
                                        <li>+3d (5d)</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>barrage buffed
                            <ul>
                                <li>300d</li>
                            </ul>
                        </li>
                    </ul>`
                    }
                },
                "benjamin": {
                    "name": "Benjamin",
                    "data": {
                        "1": `<ul>
                        <li>$900</li>
                        <li>Leveling Rate: 1.58823529x</li>
                        <li>Unlock Cost: 5,000 MM</li>
                        <li>size: 7 radius</li>
                        <li>placeable on: land</li>
                        <li>20r</li>
                        <li>$100 end of round income</li>
                    </ul>`,
                        "2": `<ul>
                        <li>+$50 end of round income ($150)</li>
                    </ul>`,
                        "3": `<ul>
                        <li>gains biohack ability (45s cooldown, 11.25s initial)
                            <ul>
                                <li>applies hacked buff to the nearest 4 towers
                                    <ul>
                                        <li>6s duration, +1d</li>
                                        <li>cannot attack for 2s after the buff expires</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "4": `<ul>
                        <li>gains skimming
                            <ul>
                                <li>+$1 income for each new natural bloon that spawns</li>
                            </ul>
                        </li>
                    </ul>`,
                        "5": `<ul>
                        <li>+$100 end of round income ($250)</li>
                        <li>gains bank-hack buff
                            <ul>
                                <li>affects all x3+x farms</li>
                                <li>+12% income during the round</li>
                            </ul>
                        </li>
                    </ul>`,
                        "6": `<ul>
                        <li>+5 end of round lives
                            <ul>
                                <li>note: cannot go above 150 lives</li>
                            </ul>
                        </li>
                    </ul>`,
                        "7": `<ul>
                        <li>gains trojan attack
                            <ul>
                                <li>&#8734;r, 5s-7s randomly</li>
                                <li>targets a random bloon with 2+ children up to MOAB</li>
                                <li>affected bloon spawns no children</li>
                            </ul>
                        </li>
                    </ul>`,
                        "8": `<ul>
                        <li>+$150 end of round income ($400)</li>
                    </ul>`,
                        "9": `<ul>
                        <li>bank-hack buffed
                            <ul>
                                <li>now +18%</li>
                            </ul>
                        </li>
                    </ul>`,
                        "10": `<ul>
                        <li>gains syphon-funding ability (65s cooldown, 17s duration, battle ready)
                            <ul>
                                <li>all new spawns below a DDT or BAD are downgraded by one layer</li>
                                <li>can only downgrade up to 10 ZOMGs in an ability, but still continues to downgrade other bloons after this threshold is reached</li>
                            </ul>
                        </li>
                    </ul>`,
                        "11": `<ul>
                        <li>+$400 end of round income ($800)</li>
                    </ul>`,
                        "12": `<ul>
                        <li>skimming buffed
                            <ul>
                                <li>+$2 income</li>
                            </ul>
                        </li>
                    </ul>`,
                        "13": `<ul>
                        <li>biohack buffed
                            <ul>
                                <li>affects 6 towers, 35s cooldown</li>
                            </ul>
                        </li>
                        <li>hacked buffed
                            <ul>
                                <li>now +2d, 8s duration</li>
                            </ul>
                        </li>
                    </ul>`,
                        "14": `<ul>
                        <li>+5 end of round lives (10)</li>
                        <li>can heal to 250 lives</li>
                    </ul>`,
                        "15": `<ul>
                        <li>+$600 end of round income ($1400)</li>
                    </ul>`,
                        "16": `<ul>
                        <li>trojan buffed
                            <ul>
                                <li>3s-4s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "17": `<ul>
                        <li>+$1100 end of round income ($2500)</li>
                    </ul>`,
                        "18": `<ul>
                        <li>gains camo detection</li>
                        <li>trojan buffed
                            <ul>
                                <li>can now target BFBs and DDTs</li>
                            </ul>
                        </li>
                    </ul>`,
                        "19": `<ul>
                        <li>hacked buffed
                            <ul>
                                <li>now +3d, 9s duration</li>
                            </ul>
                        </li>
                    </ul>`,
                        "20": `<ul>
                        <li>syphon-funding buffed
                            <ul>
                                <li>45s cooldown</li>
                                <li>can affect DDTs</li>
                            </ul>
                        </li>
                    </ul>`
                    }
                },
                "djBenjammin": {
                    "name": "DJ Benjammin'",
                    "data": {
                        "1": `<ul>
                        <li>$900</li>
                        <li>Leveling Rate: 1.58823529x</li>
                        <li>Unlock Cost: 2,000 MM + 40,000 Benjamin Points</li>
                        <li>size: 7 radius</li>
                        <li>placeable on: land</li>
                        <li>20r</li>
                        <li>+$75 end of round income</li>
                    </ul>`,
                        "2": `<ul>
                        <li>+$37 end of round income ($112)</li>
                    </ul>`,
                        "3": `<ul>
                        <li>gains good-vibes ability (45s cooldown, 11.25s initial)</li>
                        <li>applies party-time buff to the nearest 5 towers
                            <ul>
                                <li>6s duration, +1d</li>
                                <li>cannot attack for 1s after the buff expires</li>
                            </ul>
                        </li>
                    </ul>`,
                        "4": `<ul>
                        <li>gains skimming
                            <ul>
                                <li>+$1 income for each new natural bloon that spawns</li>
                            </ul>
                        </li>
                    </ul>`,
                        "5": `<ul>
                        <li>+$75.5 end of round income ($187.5)</li>
                        <li>gains bank-hack buff
                            <ul>
                                <li>affects all x3+x farms</li>
                                <li>+12% income during the round</li>
                            </ul>
                        </li>
                    </ul>`,
                        "6": `<ul>
                        <li>+5 end of round lives
                            <ul>
                                <li>note: cannot go above 150 lives</li>
                            </ul>
                        </li>
                    </ul>`,
                        "7": `<ul>
                        <li>gains trojan attack
                            <ul>
                                <li>&#8734;r, 5s-7s randomly</li>
                                <li>targets a random bloon with 2+ children to MOAB</li>
                                <li>affected bloon spawns no children</li>
                            </ul>
                        </li>
                    </ul>`,
                        "8": `<ul>
                        <li>+$112.5 end of round income ($300)</li>
                    </ul>`,
                        "9": `<ul>
                        <li>bank-hack buffed
                            <ul>
                                <li>now +18%</li>
                            </ul>
                        </li>
                    </ul>`,
                        "10": `<ul>
                        <li>gains beatdown ability (65s cooldown, battle ready)
                            <ul>
                                <li>12 strongest bloons on screen up to a BFB are downgraded by 1 layer</li>
                                <li>can only downgrade up to 3 BFBs in an ability, but can still downgrade other bloons if this threshold is reached</li>
                            </ul>
                        </li>
                    </ul>`,
                        "11": `<ul>
                        <li>+$300 end of round income ($600)</li>
                    </ul>`,
                        "12": `<ul>
                        <li>skimming buffed
                            <ul>
                                <li>+$2 income</li>
                            </ul>
                        </li>
                    </ul>`,
                        "13": `<ul>
                        <li>good-vibes buffed
                            <ul>
                                <li>affects 7 towers, 35s cooldown</li>
                            </ul>
                        </li>
                        <li>party-time buffed
                            <ul>
                                <li>now +2d, 8s duration</li>
                            </ul>
                        </li>
                    </ul>`,
                        "14": `<ul>
                        <li>+5 end of round healing (10)</li>
                        <li>can heal to 250 lives</li>
                    </ul>`,
                        "15": `<ul>
                        <li>+$450 end of round income (+$1050)</li>
                    </ul>`,
                        "16": `<ul>
                        <li>trojan buffed: 3s-4s</li>
                    </ul>`,
                        "17": `<ul>
                        <li>+$825 end of round income ($1875)</li>
                    </ul>`,
                        "18": `<ul>
                        <li>gains camo detection</li>
                        <li>trojan buffed
                            <ul>
                                <li>can now target BFBs and DDTs</li>
                            </ul>
                        </li>
                    </ul>`,
                        "19": `<ul>
                        <li>good-vibes buffed
                            <ul>
                                <li>affects 8 towers</li>
                            </ul>
                        </li>
                        <li>party-time buffed
                            <ul>
                                <li>now +3d, 9s duration, towers now aren't disabled after buff expires</li>
                            </ul>
                        </li>
                    </ul>`,
                        "20": `<ul>
                        <li>beatdown buffed
                            <ul>
                                <li>can affect DDTs</li>
                                <li>can affect up to 10 BFBs</li>
                                <li>can affect up to 4 ZOMGs</li>
                            </ul>
                        </li>
                    </ul>`
                    }
                },
                "ezili": {
                    "name": "Ezili",
                    "data": {
                        "1": `<ul>
                        <li>$600</li>
                        <li>Leveling Rate: 1.68352941x (1.06x Striker)</li>
                        <li>Unlock Cost: 5,000 MM</li>
                        <li>size: 7 radius</li>
                        <li>placeable on: land</li>
                        <li>gains camo detection</li>
                        <li>curse attack
                            <ul>
                                <li>1d, 1i, 40r, 1.2s, plasma type</li>
                                <li>can see past obstacles</li>
                                <li>applies cursed status
                                    <ul>
                                        <li>1d/2.5s, 2.6s duration</li>
                                        <li>if the target is already cursed, its duration is refreshed</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>splash attack
                            <ul>
                                <li>1d, 5p, 8r blast, plasma type</li>
                                <li>note: does not affect original target</li>
                            </ul>
                        </li>
                    </ul>`,
                        "2": `<ul>
                        <li>curse buffed
                            <ul>
                                <li>+3r (43r)</li>
                            </ul>
                        </li>
                        <li>wizard-synergy buff
                            <ul>
                                <li>affects Wizard Monkeys in range</li>
                                <li>+2p</li>
                            </ul>
                        </li>
                    </ul>`,
                        "3": `<ul>
                        <li>heartstopper ability
                            <ul>
                                <li>45s cooldown, 10s duration</li>
                                <li>&#8734;p, &#8734;r, 0.1s</li>
                                <li>applies heartstop status: all bloons on screen cannot regrow and lose purple immunities for 10s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "4": `<ul>
                        <li>splash buffed
                            <ul>
                                <li>applies cursed status</li>
                            </ul>
                        </li>
                    </ul>`,
                        "5": `<ul>
                        <li>curse buffed
                            <ul>
                                <li>1s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "6": `<ul>
                        <li>cursed status buffed
                            <ul>
                                <li>1d/1.8s, 5.5s duration</li>
                            </ul>
                        </li>
                    </ul>`,
                        "7": `<ul>
                        <li>sacrifice ability
                            <ul>
                                <li>90s cooldown</li>
                                <li>costs 10 lives</li>
                                <li>places sacrificial-totem at selected point
                                    <ul>
                                        <li>20s lifetime</li>
                                        <li>78r</li>
                                        <li>grants support buff
                                            <ul>
                                                <li>affects all towers in range</li>
                                                <li>+1p, +20%r, 85%s, camo detection, increased projectile speed
                                                    <ul>
                                                        <li>wizards instead get +2p, +20%r, 66%s, camo detection, increased projectile speed</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>note: sacrificing lives does trigger effects based on losing lives (xx5 bomb, xx5 sniper, xx2+ druid)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "8": `<ul>
                        <li>all attacks buffed
                            <ul>
                                <li>+19md</li>
                            </ul>
                        </li>
                        <li>cursed status buffed
                            <ul>
                                <li>2d/1.8s, 30md/1.8s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "9": `<ul>
                        <li>all attacks buffed
                            <ul>
                                <li>on damage: decamo, degrow, and defortify bloons (not blimps)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "10": `<ul>
                        <li>moab-hex ability (60s cooldown, 8.5s duration, battle ready)
                            <ul>
                                <li>targets one blimp, excluding BADs, according to current priority</li>
                                <li>applies hex status
                                    <ul>
                                        <li>(4%+1)d/1s</li>
                                        <li>spawns no children</li>
                                        <li>transfers to the next target if it pops with time remaining</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "11": `<ul>
                        <li>curse attack buffed
                            <ul>
                                <li>+2r (45r)</li>
                            </ul>
                        </li>
                        <li>gains buff for all xx4+ wizards: zombloon +1p, zmoab +10p</li>
                    </ul>`,
                        "12": `<ul>
                        <li>all attacks buffed: +10md</li>
                        <li>heartstopper ability buffed
                            <ul>
                                <li>40s cooldown, 15s duration</li>
                                <li>heartstop status buffed: 15s duration, normal damage type to every tower</li>
                            </ul>
                        </li>
                    </ul>`,
                        "13": `<ul>
                        <li>splash buffed
                            <ul>
                                <li>+10p (15p), +3r (11r)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "14": `<ul>
                        <li>cursed status buffed
                            <ul>
                                <li>2d/1s, 30md/1s, 4.05s duration</li>
                            </ul>
                        </li>
                    </ul>`,
                        "15": `<ul>
                        <li>curse buffed
                            <ul>
                                <li>+2r (47r)</li>
                            </ul>
                        </li>
                        <li>cursed status buffed
                            <ul>
                                <li>6.05s duration</li>
                            </ul>
                        </li>
                    </ul>`,
                        "16": `<ul>
                        <li>sacrifice ability buffed
                            <ul>
                                <li>costs 1 life</li>
                            </ul>
                        </li>
                        <li>sacrificial-totem subtower buffed
                            <ul>
                                <li>60s lifetime</li>
                            </ul>
                        </li>
                    </ul>`,
                        "17": `<ul>
                        <li>splash buffed
                            <ul>
                                <li>+10p (25p), +2r (13r)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "18": `<ul>
                        <li>curse buffed
                            <ul>
                                <li>0.8s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "19": `<ul>
                        <li>cursed status buffed
                            <ul>
                                <li>3d/1s, 31md/1s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "20": `<ul>
                        <li>all attacks buffed
                            <ul>
                                <li>+20md</li>
                            </ul>
                        </li>
                        <li>moab-hex ability buffed
                            <ul>
                                <li>40s cooldown</li>
                            </ul>
                        </li>
                        <li>hex status buffed
                            <ul>
                                <li>(5%+1)d/1s, can affect BADs</li>
                            </ul>
                        </li>
                    </ul>`
                    }
                },
                "smudgeCattEzili": {
                    "name": "Smudge Catt Ezili",
                    "data": {
                        "1": `<ul>
                        <li>$600</li>
                        <li>Leveling Rate: 1.5x</li>
                        <li>Unlock Cost: 2,000 MM + 40,000 Ezili Points</li>
                        <li>size: 7 radius</li>
                        <li>placeable on: land</li>
                        <li>gains camo detection</li>
                        <li>curse attack
                            <ul>
                                <li>1d, 1i, 40r, 1.2s, plasma type</li>
                                <li>can see past obstacles</li>
                                <li>applies cursed status
                                    <ul>
                                        <li>1d/2.5s, 2.6s duration</li>
                                        <li>if the target is already cursed, its duration is refreshed</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>splash attack
                            <ul>
                                <li>1d, 5p, 8r blast, plasma type</li>
                                <li>note: does not affect original target</li>
                            </ul>
                        </li>
                    </ul>`,
                        "2": `<ul>
                        <li>curse buffed
                            <ul>
                                <li>+3r (43r)</li>
                            </ul>
                        </li>
                        <li>splash buffed
                            <ul>
                                <li>+3p (8p), +3r (11r)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "3": `<ul>
                        <li>screech ability (45s cooldown, battle ready)
                            <ul>
                                <li>&#8734;p, &#8734;r</li>
                                <li>all regrow bloons on screen instantly lose the regrow property</li>
                                <li>all purple bloons on screen instantly lose the purple property</li>
                            </ul>
                        </li>
                    </ul>`,
                        "4": `<ul>
                        <li>splash buffed
                            <ul>
                                <li>applies cursed status</li>
                            </ul>
                        </li>
                    </ul>`,
                        "5": `<ul>
                        <li>curse buffed
                            <ul>
                                <li>1s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "6": `<ul>
                        <li>cursed status buffed
                            <ul>
                                <li>1d/1.8s, 5.5s duration</li>
                            </ul>
                        </li>
                    </ul>`,
                        "7": `<ul>
                        <li>scratch ability (40s cooldown, 11s duration, battle ready)
                            <ul>
                                <li>costs 5 lives</li>
                                <li>places scratching-post at selected point
                                    <ul>
                                        <li>78r</li>
                                        <li>grants support buff
                                            <ul>
                                                <li>affects all towers in range</li>
                                                <li>+1p, +20%r, 85%s, camo detection, increased projectile speed
                                                    <ul>
                                                        <li>Smudge Catt Ezili gets an additional 50%s (42.5%s total) and +(6*level)md</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>note: sacrificing lives does trigger effects based on losing lives (xx5 bomb, xx5 sniper, xx2+ druid)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "8": `<ul>
                        <li>all attacks buffed
                            <ul>
                                <li>+19md</li>
                            </ul>
                        </li>
                        <li>cursed buffed
                            <ul>
                                <li>2d/1.8s, 30md/1.8s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "9": `<ul>
                        <li>all attacks buffed
                            <ul>
                                <li>on damage: decamo, degrow, and defortify bloons (not blimps)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "10": `<ul>
                        <li>go-smudge-go ability (60s cooldown, 5s duration, battle ready)
                            <ul>
                                <li>targets the three strongest blimps, excluding BADs</li>
                                <li>applies clawed status
                                    <ul>
                                        <li>(4%+1)d/1s</li>
                                        <li>spawns no children</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "11": `<ul>
                        <li>curse buffed
                            <ul>
                                <li>+2r (45r)</li>
                            </ul>
                        </li>
                        <li>+9 end of round lives every other round (does not go above starting lives)</li>
                            <ul>
                                <li>the first set of lives is given immediately</li>
                            </ul>
                    </ul>`,
                        "12": `<ul>
                        <li>all attacks buffed
                            <ul>
                                <li>+10md</li>
                            </ul>
                        </li>
                        <li>screech ability buffed
                            <ul>
                                <li>40s cooldown, 15s duration</li>
                                <li>additionally removes the camo property and all immunities for Bloons on screen</li>
                            </ul>
                        </li>
                    </ul>`,
                        "13": `<ul>
                        <li>splash buffed
                            <ul>
                                <li>+10p (16p), +3r (14r)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "14": `<ul>
                        <li>cursed status buffed
                            <ul>
                                <li>2d/1s, 30md/1s, 4.05s duration</li>
                            </ul>
                        </li>
                    </ul>`,
                        "15": `<ul>
                        <li>curse buffed
                            <ul>
                                <li>+2r (47r)</li>
                            </ul>
                        </li>
                        <li>cursed status buffed
                            <ul>
                                <li>6.05s duration</li>
                            </ul>
                        </li>
                    </ul>`,
                        "16": `<ul>
                        <li>scratch ability buffed: costs 1 life</li>
                        <li>scratching-post subtower buffed
                            <ul>
                                <li>60s lifetime</li>
                            </ul>
                        </li>
                    </ul>`,
                        "17": `<ul>
                        <li>splash buffed: +10p (26p), +2r (16r)</li>
                    </ul>`,
                        "18": `<ul>
                        <li>curse buffed: 0.8s</li>
                    </ul>`,
                        "19": `<ul>
                        <li>cursed status buffed: 3d/1s, 31md/1s</li>
                    </ul>`,
                        "20": `<ul>
                        <li>all attacks buffed
                            <ul>
                                <li>+20md</li>
                            </ul>
                        </li>
                        <li>go-smudge-go ability buffed
                            <ul>
                                <li>40s cooldown</li>
                                <li>clawed status buffed: (5%+1)d/1s, can affect BADs</li>
                            </ul>
                        </li>
                    </ul>`
                    }
                },
                "patFusty": {
                    "name": "Pat Fusty",
                    "data": {
                        "1": `<ul>
                        <li>$900</li>
                        <li>Leveling Rate: 1.15x</li>
                        <li>Unlock Cost: 5,000 MM</li>
                        <li>size: 8 radius</li>
                        <li>placeable on: land and water</li>
                        <li>slam attack
                            <ul>
                                <li>does 3d, +2cd (5), 1i, 24r, 1.1s, normal type</li>
                                <li>on contact: aoe</li>
                            </ul>
                        </li>
                        <li>aoe attack
                            <ul>
                                <li>2d, +2cd (4cd), 8p, 10r blast, 1.1s, normal</li>
                                <li>note: can affect the original target</li>
                            </ul>
                        </li>
                    </ul>`,
                        "2": `<ul>
                        <li>slam buffed
                            <ul>
                                <li>+5 blast radius (13 blast radius)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "3": `<ul>
                        <li>rallying-roar ability (50s cooldown, 7s duration, 12s initial)
                            <ul>
                                <li>buffs himself and towers in 35r</li>
                                <li>+1d, ?%s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "4": `<ul>
                        <li>slam buffed: 81.82%s (0.9s)</li>
                    </ul>`,
                        "5": `<ul>
                        <li>slam buffed
                            <ul>
                                <li>every 5 attacks replaced by slap
                                    <ul>
                                        <li>7p</li>
                                        <li>cannot affect BFBs or higher</li>
                                        <li>applies knockback status
                                            <ul>
                                                <li>move backwards at 2x normal speed, 1s duration</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "6": `<ul>
                        <li>slam buffed
                            <ul>
                                <li>all normal Bloons are stunned for 0.45s when attacked</li>
                            </ul>
                        </li>
                        <li>aoe buffed
                            <ul>
                                <li>+9r blast (19r blast)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "7": `<ul>
                        <li>slam buffed
                            <ul>
                                <li>+1d (4d)</li>
                            </ul>
                        </li>
                        <li>aoe buffed
                            <ul>
                                <li>+1d (3d), +4p (12p)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "8": `<ul>
                        <li>slam buffed
                            <ul>
                                <li>+3r (27r)</li>
                            </ul>
                        </li>
                        <li>rallying-roar ability buffed 
                            <ul>
                                <li>towers granted normal damage</li>
                            </ul>
                        </li>
                    </ul>`,
                        "9": `<ul>
                        <li>slam buffed
                            <ul>
                                <li>83.33%s (0.75s)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "10": `<ul>
                        <li>big-squeeze ability (30s cooldown, 5s duration, battle ready)
                            <ul>
                                <li>grabs the strongest MOAB-class non-BAD bloon in range and spends 4s popping it </li>
                                <li>Pat cannot attack during the ability duration</li>
                                <li>Pat cannot activate rallying-roar during the ability duration</li>
                                <li>once popped, stuns the children for 2s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "11": `<ul>
                        <li>slam buffed
                            <ul>
                                <li>+1d (5d)</li>
                            </ul>
                        </li>
                        <li>aoe buffed
                            <ul>
                                <li>+1d (4d)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "12": `<ul>
                        <li>slam buffed
                            <ul>
                                <li>86.67%s (0.65s)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "13": `<ul>
                        <li>slam buffed
                            <ul>
                                <li>stuns MOABs for 0.2s</li>
                                <li>+0.1s stun duration (0.55s stun duration)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "14": `<ul>
                        <li>rallying-roar ability buffed:
                            <ul>
                                <li>50s cooldown</li>
                                <li>12.5s duration</li>
                                <li>+15r (50r)</li>
                                <li>gives +3d instead of +1</li>
                            </ul>
                        </li>
                    </ul>`,
                        "15": `<ul>
                        <li>slap buffed
                            <ul>
                                <li>+7p (14p)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "16": `<ul>
                        <li>slam buffed
                            <ul>
                                <li>+2r, +5cd (12cd)</li>
                            </ul>
                        </li>
                        <li>aoe buffed</li>
                        <ul>
                            <li>+6cd (12cd)</li>
                        </ul>
                    </ul>`,
                        "17": `<ul>
                        <li>slam buffed</li>
                        <ul>
                            <li>84.62%s (0.55s)</li>
                        </ul>
                    </ul>`,
                        "18": `<ul>
                        <li>aoe buffed</li>
                        <ul>
                            <li>+10p (22p)</li>
                        </ul>
                    </ul>`,
                        "19": `<ul>
                        <li>slam buffed
                            <ul>
                                <li>+10d (15d)</li>
                            </ul>
                        </li>
                        <li>aoe buffed
                            <ul>
                                <li>+5d (9d)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "20": `<ul>
                        <li>big-squeeze buffed:
                            <ul>
                                <li>2.5s duration</li>
                                <li>affects 6 eligible bloons instead of 1</li>
                                <li>spends 2 seconds to pop the bloons instead of 4</li>
                            </ul>
                        </li>
                    </ul>`
                    }
                },
                "fustyTheSnowman": {
                    "name": "Fusty The Snowman",
                    "data": {
                        "1": `<ul>
                        <li>$950</li>
                        <li>Leveling Rate: 1.15x</li>
                        <li>Unlock Cost: 5,000 MM + 40,000 Fusty Points</li>
                        <li>size: 8 radius</li>
                        <li>placeable on: land and water</li>
                        <li>slam attack
                            <ul>
                                <li>does 3d, +2cd (5), 1i, 24r, 1.1s, normal type</li>
                                <li>on contact: aoe</li>
                            </ul>
                        </li>
                        <li>aoe attack
                            <ul>
                                <li>2d, +2cd (4cd), 8p, 10r blast, 1.1s, normal</li>
                                <li>note: can affect the original target</li>
                            </ul>
                        </li>
                    </ul>`,
                        "2": `<ul>
                        <li>slam buffed
                            <ul>
                                <li>+5 blast radius (13 blast radius)</li>
                            </ul>
                        </li>
                        <li>applies frozen-weakness status to frozen bloons
                        <ul>
                            <li>frozen bloons can now be hit by all projectiles</li>
                        </ul>
                    </li>
                    </ul>`,
                        "3": `<ul>
                        <li>chilling-cheer ability (50s cooldown, 7s duration, 12s initial)
                            <ul>
                                <li>buffs Ice Monkeys and self in 60r, including self</li>
                                <li>+1d</li>
                                <li>-15% attack cooldown</li>
                            </ul>
                        </li>
                    </ul>`,
                        "4": `<ul>
                        <li>slam buffed: 81.82%s (0.9s)</li>
                    </ul>`,
                        "5": ` <ul>
                        <li>slam buffed
                            <ul>
                                <li>every 5 attacks replaced by slap
                                    <ul>
                                        <li>7p</li>
                                        <li>cannot affect BFBs or higher</li>
                                        <li>applies knockback status
                                            <ul>
                                                <li>move backwards at 2x normal speed, 1s duration</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "6": ` <ul>
                        <li>slam buffed
                            <ul>
                                <li>all normal Bloons are frozen for 0.7s when attacked</li>
                            </ul>
                        </li>
                        <li>aoe buffed
                            <ul>
                                <li>+9r blast (19r blast)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "7": `<ul>
                        <li>slam buffed
                            <ul>
                                <li>+1d (4d)</li>
                            </ul>
                        </li>
                        <li>aoe buffed
                            <ul>
                                <li>+1d (3d), +4p (12p)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "8": `<ul>
                        <li>slam buffed
                            <ul>
                                <li>+3r (27r)</li>
                            </ul>
                        </li>
                        <li>chilling-cheer buffed
                            <ul>
                                <li>Ice Monkeys can now target and inflict 3x damage to MOAB-class bloons but without associated slowing status effects.</li>
                                <li>Ice Monkey's Arctic Wind slow attack can affect all non-BAD MOAB-class bloons</li>
                            </ul>
                        </li>
                    </ul>`,
                        "9": `<ul>
                        <li>slam buffed
                            <ul>
                                <li>83.33%s (0.75s)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "10": `<ul>
                        <li>crushing-ice ability (30s cooldown, 5s duration, battle ready)
                            <ul>
                                <li>grabs the strongest MOAB-class non-BAD bloon in range and spends 4s popping it </li>
                                <li>Pat cannot attack during the ability duration</li>
                                <li>Pat cannot activate rallying-roar during the ability duration</li>
                                <li>once popped, creates freeze-bomb
                                    <ul>
                                        <li>50r blast</li>
                                        <li>freezes bloons for 4s, or 2s for non-BAD MOAB-class bloons</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>`,
                        "11": `<ul>
                        <li>slam buffed
                            <ul>
                                <li>+1d (5d)</li>
                            </ul>
                        </li>
                        <li>aoe buffed
                            <ul>
                                <li>+1d (4d)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "12": ` <ul>
                        <li>slam buffed
                            <ul>
                                <li>86.67%s (0.65s)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "13": `<ul>
                        <li>slam buffed
                            <ul>
                                <li>freezes MOABs for ?s</li>
                                <li>+?s freeze duration (?s freeze duration)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "14": `<ul>
                        <li>chilling-cheer ability buffed: 
                            <ul>
                                <li>9s duration</li>
                                <li>+10r</li>
                                <li>gives +3d instead of +1</li>
                                <li>-50% attack cooldown</li>
                            </ul>
                        </li>
                    </ul>`,
                        "15": `<ul>
                        <li>slap buffed
                            <ul>
                                <li>+7p (14p)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "16": `<ul>
                        <li>slam buffed
                            <ul>
                                <li>+2r, +5cd (12cd)</li>
                            </ul>
                        </li>
                        <li>aoe buffed</li>
                        <ul>
                            <li>+6cd (12cd)</li>
                        <ul>
                    </ul>`,
                        "17": `<ul>
                        <li>slam buffed</li>
                        <ul>
                            <li>84.62%s (0.55s)</li>
                        </ul>
                    </ul>`,
                        "18": `<ul>
                        <li>aoe buffed</li>
                        <ul>
                            <li>+10p (22p)</li>
                        </ul>
                    </ul>`,
                        "19": `<ul>
                        <li>slam buffed
                            <ul>
                                <li>+10d (15d)</li>
                            </ul>
                        </li>
                        <li>aoe buffed
                            <ul>
                                <li>+11d (15d)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "20": `<ul>
                        <li>crushing-ice buffed:
                            <ul>
                                <li>affects 6 eligible bloons instead of 1</li>
                            </ul>
                        </li>
                        <li>freeze-bomb buffed
                            <ul>
                                <li>50d, +50md (100md), +40r blast (90r blast)</li>
                                <li>freezes bloons for 10s, or 5s for non-BAD MOAB-class bloons</li>
                            </ul>
                        </li>
                    </ul>`
                    }
                },
                "agentJericho": {
                    "name": "Agent Jericho",
                    "data": {
                        "1": `<ul>
                        <li>$850</li>
                        <li>Leveling Rate: 1.58823529x</li>
                        <li>Unlock Cost: 5,000 MM</li>
                        <li>size: ? radius</li>
                        <li>placeable on: land</li>
                        <li>bullet attack
                            <ul>
                                <li>3d, 1i, 0.9s, ?r, sharp type</li>
                            </ul>
                        </li>
                    </ul>`,
                        "2": `<ul>
                        <li>bloon-adjustment passive ability
                            <ul>
                                <li>every 4th bloon, gives a natural bloon on the opponent's side an extra layer
                                    <ul>
                                        <li>note: cannot upgrade to a MOAB-class bloon</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "3": `<ul>
                        <li>seize-assets ability (70s cooldown, 10s duration, 28s initial cooldown)
                            <ul>
                                <li>takes $25 from the opponent every 1s
                                    <ul>
                                        <li>note: if the opponent does not have enough money, they do not go into debt</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "4": `<ul>
                        <li>regrow bloon modifier buffed
                            <ul>
                                <li>$-0.2x ($1.4x)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "5": `<ul>
                        <li>bloon-adjustment buffed
                            <ul>
                                <li>adjusted bloons will randomly be either camo, fortified, or regrow
                                    <ul>
                                        <li>note: can apply fortified property to opponent's natural blimps</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "6": `<ul>
                        <li>bullet buffed
                            <ul>
                                <li>50%s (0.45s)</li>
                            </ul>
                        </li>
                        <li>seize-assets buffed
                            <ul>
                                <li>now takes $65/1s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "7": `<ul>
                        <li>bullet buffed
                            <ul>
                                <li>+2d (5), +?r (?), camo</li>
                            </ul>
                        </li>
                        <li>camo bloon modifier buffed
                            <ul>
                                <li>-$0.4x ($1.6x)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "8": `<ul>
                        <li>bloon-adjustment buffed
                            <ul>
                                <li>Now applies every other bloon spawned naturally</li>
                            </ul>
                        </li>
                    </ul>`,
                        "9": `<ul>
                        <li>seize-assets buffed
                            <ul>
                                <li>now takes $100/1s</li>
                            </ul>
                        </li>
                        <li>fortified bloon modifier buffed
                            <ul>
                                <li>$-0.3x ($1.7x)</li>
                                <li>excludes BADs</li>
                            </ul>
                        </li>
                    </ul>`,
                        "10": `<ul>
                        <li>decoy ability (90s cooldown, battle ready)
                            <ul>
                                <li>spawns a decoy-moab on the opponent's track
                                    <ul>
                                        <li>same properties as a normal MOAB, but with infinite health</li>
                                        <li>does not get affected by speed ramping from rounds 25+</li>
                                        <li>consumes all pierce on projectiles that hit it</li>
                                        <li>disappears when it has reached 66.67% of the track</li>
                                    </ul>
                                </li>
                                <li>cooldown persists after selling</li>
                            </ul>
                        </li>
                    </ul>`,
                        "11": `<ul>
                        <li>seize-assets buffed
                            <ul>
                                <li>now takes $130/1s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "12": `<ul>
                        <li>bullet buffed
                            <ul>
                                <li>50%s (0.225s)</li>
                            </ul>
                        </li>
                        <li>decoy-moab buffed
                            <ul>
                                <li>now has the same properties as a BFB</li>
                            </ul>
                        </li>
                    </ul>`,
                        "13": `<ul>
                        <li>bloon-adjustment buffed
                            <ul>
                                <li>applies more modifiers to adjusted bloons</li>
                            </ul>
                        </li>
                    </ul>`,
                        "14": `<ul>
                        <li>seize-assets buffed
                            <ul>
                                <li>now takes $250/1s </li>
                            </ul>
                        </li>
                    </ul>`,
                        "15": `<ul>
                        <li>bloon-adjustment buffed
                            <ul>
                                <li>affects your bloon sends as well </li>
                            </ul>
                        </li>
                    </ul>`,
                        "16": `<ul>
                        <li>bullet buffed
                            <ul>
                                <li>66.67%s (0.15), +?d (?)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "17": `<ul>
                        <li>decoy-moab buffed
                            <ul>
                                <li>now has the same properties as a ZOMG</li>
                            </ul>
                        </li>
                    </ul>`,
                        "18": `<ul>
                        <li>seize-assets buffed
                            <ul>
                                <li>15s duration</li>
                            </ul>
                        </li>
                    </ul>`,
                        "19": `<ul>
                        <li>bullet buffed
                            <ul>
                                <li>+?d (?)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "20": `<ul>
                        <li>decoy ability buffed
                            <ul>
                                <li>?s cooldown</li>
                            </ul>
                        </li>
                        <li>fortified bloon modifier buffed
                            <ul>
                                <li>discount now applies to BADs</li>
                            </ul>
                        </li>
                    </ul>`
                    }
                },
                "highwaymanJericho": {
                    "name": "Highwayman Jericho",
                    "data": {
                        "1": `<ul>
                        <li>$850</li>
                        <li>Leveling Rate: 1.58823529x</li>
                        <li>Unlock Cost: 5,000 MM + 40,000 Agent Jericho Points</li>
                        <li>size: ? radius</li>
                        <li>placeable on: land</li>
                        <li>bullet attack
                            <ul>
                                <li>3d, 1i, 0.9s, ?r, sharp type</li>
                            </ul>
                        </li>
                    </ul>`,
                        "2": `<ul>
                        <li>bloon-adjustment passive ability
                            <ul>
                                <li>every 4th bloon, gives a natural bloon on the opponent's side an extra layer
                                    <ul>
                                        <li>note: cannot upgrade to a MOAB-class bloon</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "3": `<ul>
                        <li>stand-and-deliver ability (100s cooldown, 45s initial cooldown)
                            <ul>
                                <li>takes $200 from the opponent
                                    <ul>
                                        <li>if the opponent does not have $200, their cheapest tower that can pay back the debt is sold for 100% sellback to pay</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "4": `<ul>
                        <li>regrow bloon modifier buffed
                            <ul>
                                <li>$-0.2x ($1.4x)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "5": `<ul>
                        <li>bloon-adjustment buffed
                            <ul>
                                <li>adjusted bloons will randomly be either camo, fortified, or regrow
                                    <ul>
                                        <li>note: can apply fortified property to opponent's natural blimps</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "6": `<ul>
                        <li>bullet buffed
                            <ul>
                                <li>50%s (0.45s)</li>
                            </ul>
                        </li>
                        <li>stand-and-deliver buffed
                            <ul>
                                <li>now takes $650</li>
                            </ul>
                        </li>
                    </ul>`,
                        "7": `<ul>
                        <li>bullet buffed
                            <ul>
                                <li>+2d (5), +?r (?), camo</li>
                            </ul>
                        </li>
                        <li>camo bloon modifier buffed
                            <ul>
                                <li>-$0.4x ($1.6x)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "8": `<ul>
                        <li>bloon-adjustment buffed
                            <ul>
                                <li>Now applies every other bloon spawned naturally</li>
                            </ul>
                        </li>
                    </ul>`,
                        "9": `<ul>
                        <li>fortified bloon modifier buffed
                            <ul>
                                <li>$-0.3x ($1.7x)</li>
                                <li>excludes BADs</li>
                            </ul>
                        </li>
                        <li>stand-and-deliver buffed
                            <ul>
                                <li>now takes $1,000</li>
                            </ul>
                        </li>
                    </ul>`,
                        "10": `<ul>
                        <li>misdirection ability (? cooldown, ? initial cooldown)
                            <ul>
                                <li>takes the strongest MOAB-class bloon up to a BFB and puts it at the opponent's entrance 
                                    <ul>
                                        <li>bloon health is retained</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "11": `<ul>
                        <li>stand-and-deliver buffed
                            <ul>
                                <li>now takes $1,300</li>
                            </ul>
                        </li>
                    </ul>`,
                        "12": `<ul>
                        <li>bullet buffed
                            <ul>
                                <li>50%s (0.225s)</li>
                            </ul>
                        </li>
                        <li>misdirection buffed
                            <ul>
                                <li>now affects DDTs</li>
                            </ul>
                        </li>
                    </ul>`,
                        "13": `<ul>
                        <li>bloon-adjustment buffed
                            <ul>
                                <li>applies more modifiers to adjusted bloons</li>
                            </ul>
                        </li>
                    </ul>`,
                        "14": `<ul>
                        <li>stand-and-deliver buffed
                            <ul>
                                <li>now takes $2500</li>
                            </ul>
                        </li>
                    </ul>`,
                        "15": `<ul>
                        <li>bloon-adjustment buffed
                            <ul>
                                <li>affects your bloon sends as well </li>
                            </ul>
                        </li>
                        <li>misdirection buffed
                            <ul>
                                <li>affects ZOMGs</li>
                            </ul>
                        </li>
                    </ul>`,
                        "16": `<ul>
                        <li>bullet buffed
                            <ul>
                                <li>66.67%s (0.15), +?d (?)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "17": `<ul>
                        <li>misdirection buffed
                            <ul>
                                <li>fully heals the affected bloon</li>
                            </ul>
                        </li>
                    </ul>`,
                        "18": `<ul>
                        <li>stand-and-deliver buffed
                            <ul>
                                <li>?s cooldown</li>
                            </ul>
                        </li>
                    </ul>`,
                        "19": `<ul>
                        <li>bullet buffed
                            <ul>
                                <li>+?d (?)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "20": `<ul>
                        <li>misdirection ability buffed
                            <ul>
                                <li>?s cooldown</li>
                            </ul>
                        </li>
                        <li>fortified bloon modifier buffed
                            <ul>
                                <li>discount now applies to BADs</li>
                            </ul>
                        </li>
                    </ul>`
                    }
                },
                "starCaptainJericho": {
                    "name": "Star Captain Jericho",
                    "data": {
                        "1": `<ul>
                        <li>$850</li>
                        <li>Leveling Rate: 1.58823529x</li>
                        <li>Unlock Cost: 5,000 MM + 40,000 Agent Jericho Points</li>
                        <li>size: ? radius</li>
                        <li>placeable on: land</li>
                        <li>bullet attack
                            <ul>
                                <li>1d, +1 shocked damage (2d), 1i, 0.5s, ?r, plasma type</li>
                                <li>applies shocked status
                                    <ul>
                                        <li>1d/0.95s, 1s duration</li>
                                        <li>[BUG] if a bloon with shocked status is hit it removes the status instead (but still deals the bonus damage)</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "2": `<ul>
                        <li>bloon-adjustment passive ability
                            <ul>
                                <li>every 4th bloon, gives a natural bloon on the opponent's side an extra layer
                                    <ul>
                                        <li>note: cannot upgrade to a MOAB-class bloon</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "3": `<ul>
                        <li>in-it-for-the-money ability (70s cooldown, 28s initial cooldown, 6s duration)
                            <ul>
                                <li>applies money-trap status to up to 25 sent bloons within ability duration
                                    <ul>
                                        <li>gives $7
                                            <ul>
                                                <li>gained money is paid out to the player in 1 second intervals</li>
                                                <li>total money gain with all 25 bloons: $175</li>
                                            </ul>
                                        </li>
                                        <li>opponent debt +$7
                                            <ul>
                                                <li>total opponent debt with all 25 bloons: +$175</li>
                                            </ul>
                                        </li>
                                        <li>status is not removed from bloons after the in-it-for-the-money runs out</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "4": `<ul>
                        <li>regrow rate buffed
                            <ul>
                                <li>85%s (2.25s)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "5": `<ul>
                        <li>bloon-adjustment buffed
                            <ul>
                                <li>adjusted bloons will randomly be either camo, fortified, or regrow
                                    <ul>
                                        <li>note: can apply fortified property to opponent's natural blimps</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "6": `<ul>
                        <li>bullet buffed
                            <ul>
                                <li>50%s (0.25s)</li>
                            </ul>
                        </li>
                        <li>money-trap buffed
                            <ul>
                                <li>gives $14 if the bloon is a purple, lead, or zebra bloon and adds +$14 to opponent debt
                                    <ul>
                                        <li>total money gain/total debt for this type of bloon: $350</li>
                                        <li>net difference: $700</li>
                                    </ul>
                                </li>
                                <li>gives $31 if the bloon is a rainbow bloon and adds +$31 to opponent debt
                                    <ul>
                                        <li>total money gain/total debt for this type of bloon: $775</li>
                                        <li>net difference: $1550</li>
                                    </ul>
                                </li>
                                <li>gives $60 if the bloon is a ceramic bloon and adds +$60 to opponent debt
                                    <ul>
                                        <li>total money gain/total debt for this type of bloon: $1500</li>
                                        <li>net difference: $3000</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "7": `<ul>
                        <li>bullet buffed
                            <ul>
                                <li>+2d (3), +?r (?), camo</li>
                            </ul>
                        </li>
                        <li>player sent camo bloons buffed
                            <ul>
                                <li>+15% speed</li>
                            </ul>
                        </li>
                    </ul>`,
                        "8": `<ul>
                        <li>bloon-adjustment buffed
                            <ul>
                                <li>Now applies every other bloon spawned naturally</li>
                            </ul>
                        </li>
                        <li>in-it-for-the-money buffed
                            <ul>
                                <li>+2s (8s) duration</li>
                            </ul>
                        </li>
                        <li>money-trap buffed
                            <ul>
                                <li>can affect 1 MOAB-class bloon instead of a normal bloon
                                    <ul>
                                        <li>gives $300</li>
                                        <li>opponent debt +$300</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "9": `<ul>
                        <li>money-trap buffed
                            <ul>
                                <li>MOAB-class bloons sent with the ability give $600 and add +$600 to opponent debt</li>
                            </ul>
                        </li>
                        <li>sent fortified bloons buffed
                            <ul>
                                <li>+12.5%hp</li>
                                <li>affects MOAB-class bloons, excluding BADs</li>
                            </ul>
                        </li>
                    </ul>`,
                        "10": `<ul>
                        <li>smuggle-run ability (80s cooldown, battle ready, 8s duration)
                            <ul>
                                <li>stores $5,500 worth of user sent bloons
                                    <ul>
                                        <li>cannot store bloons over the price limit</li>
                                        <li>cannot store BADs</li>
                                        <li>after ability duration stored bloons are deposited ?% of the way down the opponent's player sent track</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "11": `<ul>
                        <li>money-trap buffed
                            <ul>
                                <li>MOAB-class bloons sent with the ability give $1,300 and add +$1,300 to opponent debt</li>
                            </ul>
                        </li>
                    </ul>`,
                        "12": `<ul>
                        <li>bullet buffed
                            <ul>
                                <li>50%s (0.125s)</li>
                            </ul>
                        </li>
                        <li>smuggle-run buffed
                            <ul>
                                <li>$8,000 capacity</li>
                            </ul>
                        </li>
                    </ul>`,
                        "13": `<ul>
                        <li>bloon-adjustment buffed
                            <ul>
                                <li>applies more modifiers to adjusted bloons</li>
                            </ul>
                        </li>
                    </ul>`,
                        "14": `<ul>
                        <li>money-trap buffed
                            <ul>
                                <li>MOAB-class bloons sent with the ability give $3,000 and add +$3,000 to opponent debt</li>
                            </ul>
                        </li>
                    </ul>`,
                        "15": `<ul>
                        <li>bloon-adjustment buffed
                            <ul>
                                <li>affects your bloon sends as well </li>
                            </ul>
                        </li>
                        <li>smuggle-run buffed
                            <ul>
                                <li>$13,000 capacity</li>
                            </ul>
                        </li>
                    </ul>`,
                        "16": `<ul>
                        <li>bullet buffed
                            <ul>
                                <li>66.67%s (0.0833)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "17": `<ul>
                        <li>smuggle-run buffed
                            <ul>
                                <li>$20,000 capacity</li>
                            </ul>
                        </li>
                    </ul>`,
                        "18": `<ul>
                        <li>money-trap buffed
                            <ul>
                                <li>?s cooldown</li>
                            </ul>
                        </li>
                    </ul>`,
                        "19": `<ul>
                        <li>bullet buffed
                            <ul>
                                <li>+?d (?), normal type</li>
                            </ul>
                        </li>
                    </ul>`,
                        "20": `<ul>
                        <li>smuggle-run buffed
                            <ul>
                                <li>40s cooldown</li>
                                <li>$25,000 capacity</li>
                                <li>affects BAD bloons</li>
                            </ul>
                        </li>
                        <li>sent fortified bloons buffed
                            <ul>
                                <li>buff now includes BADs</li>
                            </ul>
                        </li>
                    </ul>`
                    }
                },
                "adora": {
                    "name": "Adora",
                    "data": {
                        "1": `<ul>
                        <li>$650</li>
                        <li>Leveling Rate: 1.5x</li>
                        <li>Unlock Cost: 5,000 MM</li>
                        <li>size: 7 radius</li>
                        <li>placeable on: land</li>
                        <li>sun-bolt attack
                            <ul>
                                <li>1d, 5p, 45r, 1s, plasma type</li>
                                <li>can see past obstacles</li>
                                <li>homing</li>
                            </ul>
                        </li>
                    </ul>`,
                        "2": `<ul>
                        <li>sun-bolt buffed</li>
                        <ul>
                            <li>+4r (49r)</li>
                        </ul>
                        <li>super-support buff</li>
                        <ul>
                            <li>+1p, +15%r to super monkeys in range</li>
                            <li>does not stack with other buffs</li>
                        </ul>
                    </ul>`,
                        "3": `<ul>
                        <li>long-arm-of-light ability (35s cooldown, 10s duration)
                            <ul>
                                <li>buffs sun-bolt</li>
                                <ul>
                                    <li>+200%r, +240%p, normal type, camo</li>
                                </ul>
                            </ul>
                        </li>
                    </ul>`,
                        "4": `<ul>
                        <li>sun-bolt buffed
                            <ul>
                                <li>+1j (2j 30&deg spread)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "5": `<ul>
                        <li>sun-bolt buffed
                            <ul>
                                <li>+3p (8p)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "6": `<ul>
                        <li>sun-bolt buffed
                            <ul>
                                <li>+1j (3j)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "7": `<ul>
                        <li>blood-sacrifice ability (10s cooldown, 10s duration, targets a tower)
                            <ul>
                                <li>selected tower gains sacrifice buff
                                    <ul>
                                        <li>20?%s for 4 seconds</li>
                                        <li>when buff ends
                                            <ul>
                                                <li>tower is sold for $0</li>
                                                <li>temporary-blood</li>
                                                <li>grants $(4*dollars sacrificed) XP</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>temporary-blood buff
                                    <ul>
                                        <li>+(10+x)%r, (90-x)%s
                                            <ul>
                                                <li>where x = dollars sacrificed / 100, and x may not exceed 40</li>
                                                <li>this means that the max buff is +50%r, 50%s</li>                                            
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "8": `<ul>
                        <li>sun-bolt buffed
                            <ul>
                                <li>+1j (4j)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "9": `<ul>
                        <li>sun-bolt buffed
                            <ul>
                                <li>+1fd (2fd), +5r (54r)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "10": `<ul>
                        <li>ball-of-light ability (60s cooldown, 12s duration)
                            <ul>
                                <li>gains beam attack</li>
                                <ul>
                                    <li>3d, +3fd (6fd), 8p, &infin;r, 0.05s, plasma type</li>
                                    <li>can see past obstacles</li>
                                </ul>
                            </ul>
                        </li>
                    </ul>`,
                        "11": `<ul>
                        <li>sun-bolt buffed
                            <ul>
                                <li>0.8s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "12": `<ul>
                        <li>sun-bolt buffed
                            <ul>
                                <li>+1j (5j)</li>
                            </ul>
                        </li>
                        <li>super-support buffed</li>
                        <ul>
                            <li>+1p (+2p)</li>
                        </ul>
                    </ul>`,
                        "13": `<ul>
                        <li>sun-bolt buffed
                            <ul>
                                <li>+1fd (3fd), +3p (12p)</li>
                            </ul>
                        </li>
                        <li>beam attack buffed
                            <ul>
                                <li>+5p (13p)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "14": `<ul>
                        <li>sun-bolt buffed
                            <ul>
                                <li>+1j (6j)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "15": `<ul>
                        <li>sun-bolt buffed
                            <ul>
                                <li>+1d (2d)</li>
                            </ul>
                        </li>
                        <li>beam attack buffed
                            <ul>
                                <li>+2d (5d), +2fd (10fd)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "16": `<ul>
                        <li>long-arm-of-light buffed
                            <ul>
                                <li>15s duration</li>
                            </ul>
                            <li>sun-avatar buff
                                <ul>
                                    <li>+2d to 3xx Super Monkeys in range</li>
                                </ul>
                            </li>
                        </li>
                    </ul>`,
                        "17": `<ul>
                        <li>sun-bolt buffed
                            <ul>
                                <li>0.6s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "18": `<ul>
                        <li>sun-bolt buffed
                            <ul>
                                <li>+2j (8j)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "19": `<ul>
                        <li>sun-bolt buffed
                            <ul>
                                <li>+1d (3d), +5r (59r)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "20": `<ul>
                        <li>blood-sacrifice ability buffed
                            <ul>
                                <li>60s duration</li>
                            </ul>
                        </li>
                        <li>temporary-blood buffed
                            <ul>
                                <li>x = dollars sacrificed / 50</li>
                            </ul>
                        </li>
                        <li>ball-of-light buffed
                            <ul>
                                <li>20s duration</li>
                            </ul>
                        </li>
                        <li>beam buffed
                            <ul>
                                <li>20d, +20fd (40fd), normal type</li>
                            </ul>
                        </li>
                        <li>if a 5xx Super Monkey is purchased with Adora in range, Adora merges with that Super Monkey to form the True Sun Goddess
                            <ul>
                                <li>specifics unconfirmed</li>
                            </ul>
                        </li>
                    </ul>`
                    }
                },
                "fateweaverAdora": {
                    "name": "Fateweaver Adora",
                    "data": {
                        "1": `<ul>
                        <li>$650</li>
                        <li>Leveling Rate: 1.5x</li>
                        <li>Unlock Cost: 5,000 MM</li>
                        <li>size: 7 radius</li>
                        <li>placeable on: land</li>
                        <li>fate-bolt attack
                            <ul>
                                <li>1d, 5p, 45r, 1s, plasma type</li>
                                <li>can see past obstacles</li>
                                <li>homing</li>
                            </ul>
                        </li>
                    </ul>`,
                        "2": `<ul>
                        <li>bad-luck buff</li>
                        <ul>
                            <li>applies to enemy hero</li>
                            <li>+5% ability cooldown time</li>
                        </ul>
                    </ul>`,
                        "3": `<ul>
                        <li>sharp-sting-of-fate ability (50s cooldown)
                            <ul>
                                <li>buffs fate-bolt</li>
                                <ul>
                                    <li>+?d, (p*j*7)p (35p)</li>
                                </ul>
                                <li>on enemy bloon boost: 0.18% cooldown (9s cooldown)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "4": `<ul>
                        <li>fate-bolt buffed
                            <ul>
                                <li>+1j (2j 30&deg spread)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "5": `<ul>
                        <li>fate-bolt buffed
                            <ul>
                                <li>+3p (8p)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "6": `<ul>
                        <li>fate-bolt buffed
                            <ul>
                                <li>+1j (3j)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "7": `<ul>
                        <li>eye-of-misfortune ability (?s cooldown, ?s duration, targets a tower)
                            <ul>
                                <li>selected tower is sacrificed</li>
                                <li>misfortune buff
                                    <ul>
                                        <li>reduces opponent's hero xp by the cost of the sacrificed tower</li>
                                        <li>increases speeed of bloons in the enemy hero's range by ?% for 1 + x / 500</li>
                                        <li>x = cost of sacrificed tower</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`,
                        "8": `<ul>
                        <li>fate-bolt buffed
                            <ul>
                                <li>+1j (4j)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "9": `<ul>
                        <li>fate-bolt buffed
                            <ul>
                                <li>+1fd (2fd), +5r (54r)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "10": `<ul>
                        <li>chains-of-fate ability (60s cooldown, 6s duration, battle ready)
                            <ul>
                                <li>places chain-trap based on targeting, defaults on close</li>
                                <ul>
                                    <li>(1 + x / 1000)d, 450p, ?r zone, 0.12s, normal type, camo</li>
                                    <li>MOABs use 10p, BFBs use 20p, ZOMGs and DDTs use 40p, BADs use 60p</li>
                                    <li>x = cost of opponent's most expensive tower</li>
                                    <li>slows moab-class bloons</li>
                                </ul>
                            </ul>
                        </li>
                    </ul>`,
                        "11": `<ul>
                        <li>fate-bolt buffed
                            <ul>
                                <li>0.8s</li>
                            </ul>
                        </li>
                        <li>bad-luck buffed
                            <ul>
                                <li>+10% ability cooldown time</li>
                            </ul>
                        </li>
                    </ul>`,
                        "12": `<ul>
                        <li>fate-bolt buffed
                            <ul>
                                <li>+1j (5j)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "13": `<ul>
                        <li>fate-bolt buffed
                            <ul>
                                <li>+1fd (3fd), +3p (12p)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "14": `<ul>
                        <li>fate-bolt buffed
                            <ul>
                                <li>+1j (6j)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "15": `<ul>
                        <li>fate-bolt buffed
                            <ul>
                                <li>+1d (2d)</li>
                            </ul>
                        </li>
                        <li>chains-of-fate buffed
                            <ul>
                                <li>increased duration</li>
                            </ul>
                        </li>
                    </ul>`,
                        "16": `<ul>
                        <li>bad-luck buffed
                            <ul>
                                <li>now applies to all enemy ability cooldowns</li>
                            </ul>
                        </li>
                    </ul>`,
                        "17": `<ul>
                        <li>fate-bolt buffed
                            <ul>
                                <li>0.6s</li>
                            </ul>
                        </li>
                    </ul>`,
                        "18": `<ul>
                        <li>fate-bolt buffed
                            <ul>
                                <li>+2j (8j)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "19": `<ul>
                        <li>fate-bolt buffed
                            <ul>
                                <li>+1d (3d), +5r (59r)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "20": `<ul>
                        <li>chains-of-fate ability buffed
                            <ul>
                                <li>increased duration</li>
                            </ul>
                        </li>
                        <li>chain-trap buffed
                            <ul>
                                <li>200%d (?d)</li>
                            </ul>
                        </li>
                        <li>eye-of-misfortune buffed
                            <ul>
                                <li>+?r, increased bloon speed</li>
                            </ul>
                        </li>
                    </ul>`
                    }
                },
                "etienne": {
                    "name": "Etienne",
                    "data": {
                        "1": `<ul>
                        <li>$650</li>
                        <li>Leveling Rate: 1.06x</li>
                        <li>Unlock Cost: 3,000 MM</li>
                        <li>size: 6 radius</li>
                        <li>placeable on: land</li>
                        <li>55r</li>
                        <li>spawns two permanent drone subtowers
                            <li>dart attack
                                <ul>
                                    <li>1d, 2p, 0.7s, sharp type</li>
                                    <li>can see past obstacles</li>
                                </ul>
                            </li>
                        </li>
                    </ul>`,
                        "2": `<ul>
                        <li>+5r (60r)</li>
                        <li>gains spy-drone
                            <ul>
                                <li>opponent's bloon queue and cash is visible</li>
                            </ul>
                        </li>
                    </ul>`,
                        "3": `<ul>
                        <li>drone-swarm ability (45s cooldown, 18.5s duration)
                            <ul>
                                <li>spawns 4 more drone subtowers</li>
                                <li>duration increases 0.5s per level</li>
                            </ul>
                        </li>
                    </ul>`,
                        "4": `<ul>
                        <li>dart buffed
                            <ul>
                                <li>+1p (3p)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "5": `<ul>
                        <li>dart buffed
                            <ul>
                                <li>0.55s, camo</li>
                            </ul>
                        </li>
                    </ul>`,
                        "6": `<ul>
                        <li>uav buff
                            <ul>
                                <li>affects all towers</li>
                                <li>all bloon properties have a 20% chance of being ignored</li>
                            </ul>
                        </li>
                    </ul>`,
                        "7": `<ul>
                        <li>uav buffed
                            <ul>
                                <li>grants camo</li>
                            </ul>
                        </li>
                    </ul>`,
                        "8": `<ul>
                        <li>dart buffed
                            <ul>
                                <li>+1d (2d)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "9": `<ul>
                        <li>uav buffed
                            <ul>
                                <li>all bloon properties now have a 50% chance of being ignored</li>
                            </ul>
                        </li>
                    </ul>`,
                        "10": `<ul>
                        <li>ucav ability (75s cooldown, 18s duration)
                            <li>uav replaced by ucav-drone subtower
                                <ul>
                                    <li>10j/230°, 1 impact, ∞r, 0.6s</li>
                                    <li>homing</li>
                                    <li>always targets first</li>
                                    <li>on contact: explosion
                                        <ul>
                                            <li>2d, 25p, 20r blast, explosion type, camo</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </li>
                    </ul>`,
                        "11": `<ul>
                        <li>spawns 1 more permanent drone subtower (3)</li>
                        <li>gains zone defense targeting</li>
                    </ul>`,
                        "12": `<ul>
                        <li>drone buffed
                            <ul>
                                <li>200% flight speed</li>
                            </ul>
                        </li>
                        <li>dart buffed
                            <ul>
                                <li>+3p (6p)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "13": `<ul>
                        <li>ucav buffed
                            <ul>
                                <li>60s cooldown</li>
                            </ul>
                        </li>
                    </ul>`,
                        "14": `<ul>
                        <li>dart buffed
                            <ul>
                                <li>+1d (3d)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "15": `<ul>
                        <li>uav buffed
                            <ul>
                                <li>all bloon properties now have a 100% chance of being ignored</li>
                            </ul>
                        </li>
                        <li>ucav buffed
                            <ul>
                                <li>+6s duration (24s)</li>
                            </ul>
                        </li>
                        <li>explosion buffed
                            <ul>
                                <li>+2d (4d), +5p (30p)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "16": `<ul>
                        <li>+20r (80r)</li>
                        <li>dart buffed
                            <ul>
                                <li>+3p (9p)</li>
                            </ul>
                        </li>
                        <li>drone-swarm buffed
                            <ul>
                                <li>-5s cooldown (40s)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "17": `<ul>
                        <li>explosion buffed
                            <ul>
                                <li>+3d (7d)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "18": `<ul>
                        <li>dart buffed
                            <ul>
                                <li>+1d (4d)</li>
                            </ul>
                        </li>
                    </ul>`,
                        "19": `<ul>
                        <li>spawns 1 more permanent drone subtower (4)</li>
                    </ul>`,
                        "20": `<ul>
                        <li>uav buffed
                            <ul>
                                <li>missile attack
                                    <ul>
                                        <li>10j 240&deg spread, 1i, ∞r, 0.6sx, camo</li>
                                        <li>homing</li>
                                        <li>always targets first</li>
                                    </ul>
                                </li>
                                <li>explosion attack
                                    <ul>
                                        <li>2d, 25p, 20r blast, explosion type, camo</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>`
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
            }
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
                                    <li>Eco: +$1.0</li>
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
                                    <li>Eco: +$2.6</li>
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
                                    <li>Eco: +$3.0</li>
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
                                    <li>Count: 80</li>
                                    <li>Total time: 1s</li>
                                    <li>Eco: +$24</li>
                                    <li>Cost: $1,400</li>
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
                                    <li>Cost: $3,400</li>
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
                                    <li>Cost: $7,000</li>
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
                                    <li>Cost: $5,000</li>
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
                            <li>Starting at Round 25 to Round 30
                                <ul>
                                    <li>+20% base Blimp HP per round</li>
                                    <li>+10% base speed per round</li>
                                </ul>
                            </li>
                            <li>Starting at Round 31+
                                <ul>
                                    <li>+40% base Blimp HP per round</li>
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
                "bottom": [90, 200, 450, 2000, 25000]
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
                "bottom": [200, 300, 900, 3200, 35000]
            },
            "tackShooter": {
                "base": 280,
                "top": [150, 400, 600, 3300, 45500],
                "middle": [100, 225, 750, 3000, 15000],
                "bottom": [100, 100, 450, 3400, 24000]
            },
            "iceMonkey": {
                "base": 450,
                "top": [100, 350, 2000, 2700, 34000],
                "middle": [225, 350, 2900, 3000, 18000],
                "bottom": [100, 200, 1750, 2400, 32000]
            },
            "glueGunner": {
                "base": 100,
                "top": [150, 300, 2300, 4500, 19000],
                "middle": [100, 700, 2200, 4000, 14000],
                "bottom": [120, 400, 3200, 2000, 28000]
            }
        },
        "military": {
            "sniperMonkey": {
                "base": 250,
                "top": [250, 800, 2800, 5000, 34000],
                "middle": [200, 250, 3200, 5600, 14000],
                "bottom": [250, 250, 2300, 3800, 14500]
            },
            "monkeySub": {
                "base": 325,
                "top": [130, 500, 950, 2800, 32000],
                "middle": [300, 300, 1600, 15000, 30000],
                "bottom": [300, 800, 800, 2800, 25000]
            },
            "monkeyBuccaneer": {
                "base": 500,
                "top": [350, 550, 2850, 6400, 25000],
                "middle": [550, 500, 900, 5250, 21000],
                "bottom": [300, 400, 1600, 5400, 19000]
            },
            "monkeyAce": {
                "base": 700,
                "top": [550, 600, 1000, 3000, 40000],
                "middle": [200, 350, 900, 14000, 30000],
                "bottom": [450, 300, 2200, 20000, 75000]
            },
            "heliPilot": {
                "base": 900,
                "top": [600, 250, 1800, 17500, 45000],
                "middle": [200, 350, 3200, 7500, 30000],
                "bottom": [350, 250, 3700, 8500, 35000]
            },
            "mortarMonkey": {
                "base": 700,
                "top": [350, 500, 1300, 7300, 28000],
                "middle": [400, 550, 800, 8000, 27000],
                "bottom": [200, 700, 700, 8500, 40000]
            },
            "dartlingGunner": {
                "base": 800,
                "top": [250, 600, 2800, 12000, 80000],
                "middle": [250, 500, 5600, 5100, 68000],
                "bottom": [150, 800, 3400, 14500, 53000]
            }
        },
        "magic": {
            "wizardMonkey": {
                "base": 250,
                "top": [100, 250, 1200, 9000, 32000],
                "middle": [300, 1000, 3000, 4000, 50000],
                "bottom": [300, 300, 1600, 2600, 24000]
            },
            "superMonkey": {
                "base": 1800,
                "top": [1400, 2500, 11500, 80000, 200000],
                "middle": [1000, 1000, 10000, 20000, 90000],
                "bottom": [3000, 1200, 4500, 27000, 100000]
            },
            "ninjaMonkey": {
                "base": 400,
                "top": [150, 200, 750, 2750, 35000],
                "middle": [200, 375, 2100, 4500, 25000],
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
                "middle": [250, 350, 700, 4200, 35000],
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
                "middle": [200, 700, 4600, 8000, 45000],
                "bottom": [250, 200, 2800, 13000, 46000]
            },
            "spikeFactory": {
                "base": 600,
                "top": [600, 600, 2700, 9500, 110000],
                "middle": [500, 500, 2500, 5200, 40000],
                "bottom": [150, 500, 750, 3200, 30000]
            },
            "engineerMonkey": {
                "base": 400,
                "top": [450, 350, 525, 2800, 32000],
                "middle": [250, 350, 800, 13500, 100000],
                "bottom": [450, 200, 350, 3600, 54000]
            }
        }
    }
}

export default data;
