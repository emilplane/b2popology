let data = {
    "primary": {
        "type": "legacy",
        "entries": {
            "dartMonkey": {
                "name": "Dart Monkey",
                "data": {
                    "base": `
                        <ul>
                            <li>$200 (0 MM)</li>
                            <li>size: 6 radius</li>
                            <li>placeable on: land</li>
                            <li>dart attack
                                <ul>
                                    <li>1d, 2p, 32r, 0.95s, sharp type</li>
                                </ul>
                            </li>
                        </ul>
                    `,
                    "topPath": {
                        "1": {
                            "name": "100 - Sharp Shots - $100",
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
                            "name": "200 - Razor Sharp Shots - $250",
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
                            "name": "300 - Spike-o-pult - $300",
                            "content": `
                                <ul>
                                    <li>dart attack replaced by spikeball
                                        <ul>
                                            <li>1d, 1cd (2cd), 22p, 32r, 1.15s, shatter type</li>
                                            <li>can rebound off of walls</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "4": {
                            "name": "400 - Juggernaut - $1,800",
                            "content": `
                                <ul>
                                    <li>spikeball attack replaced by juggernaut
                                        <ul>
                                            <li>2d, 4cd (6cd), 50p, 36.8r, 1.0s, normal type</li>
                                            <li>can rebound off of walls</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "5": {
                            "name": "500 - Ultra-Juggernaut - $13,500",
                            "content": `
                                <ul>
                                    <li>juggernaut attack replaced by ultrajugg
                                        <ul>
                                            <li>4d, 16cd (20cd), 5fd (9fd), 6x ld (24ld), 200p, 36.8r, 1.0s, normal type</li>
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
                                            <li>1d, 2cd (3cd), 6x ld (6ld), 2fd (3fd), 6j 360&deg spread, 100p, normal type</li>
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
                    "middlePath": {
                        "1": {
                            "name": "010 - Quick Shots - $100",
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
                            "name": "020 - Very Quick Shots - $150",
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
                            "name": "030 - Triple Shot - $300",
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
                            "name": "040 - Super Monkey Fan Club - $8,000",
                            "content": `
                                <ul>
                                    <li>dart attack buffed
                                        <ul>
                                            <li>75%s (0.477375s)</li>
                                        </ul>
                                    </li>
                                    <li>gains fan-club ability (50s cooldown, 15s duration, battle ready)
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
                            "name": "050 - Plasma Monkey Fan Club - $45,000",
                            "content": `
                                <ul>
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
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        }
                    },
                    "bottomPath": {
                        "1": {
                            "name": "001 - Long Range Darts - $90",
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
                            "name": "002 - Enhanced Eyesight - $200",
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
                            "name": "003 - Crossbow - $475",
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
                            "name": "004 - Sharp Shooter - $2,000",
                            "content": `
                                <ul>
                                    <li>bolt attack buffed
                                        <ul>
                                            <li>+3d (6d), 0.75s, increased projectile speed</li>
                                            <li>50d crit every 7 shots</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "5": {
                            "name": "005 - Crossbow Master - $25,000",
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
                                    <li>follows an anticlockwise arc instead of a straight line</li>
                                </ul>
                            </li>
                        </ul>
                    `,
                    "topPath": {
                        "1": {
                            "name": "100 - Improved Rangs - $200",
                            "content": `
                                <ul>
                                    <li>boomerang attack buffed
                                        <ul>
                                            <li>+4p (8p)</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "2": {
                            "name": "200 - Glaives - $280",
                            "content": `
                                <ul>
                                    <li>boomerang attack buffed
                                        <ul>
                                            <li>+5p (13p)</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "3": {
                            "name": "300 - Glaive Ricochet - $1,300",
                            "content": `
                                <ul>
                                    <li>boomerang replaced by glaive
                                        <ul>
                                            <li>1d, 40p, 43r, 1.2s, sharp type</li>
                                            <li>jumps to a nearby (62.5 units) target after hitting</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "4": {
                            "name": "400 - M.O.A.R Glaives - $3,400",
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
                            "name": "500 - Glaive Lord - $30,000",
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
                    "middlePath": {
                        "1": {
                            "name": "010 - Faster Throwing - $175",
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
                            "name": "020 - Faster Rangs - $250",
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
                            "name": "030 - Bionic Boomerang - $1,100",
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
                            "name": "040 - Turbo Charge - $4,350",
                            "content": `
                                <ul>
                                    <li>gains turbocharge ability (45s cooldown, 10s duration, battle ready)
                                        <ul>
                                            <li>+1d, 14.2857%s (0.034s)</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "5": {
                            "name": "050 - Perma Charge - $35,000",
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
                    "bottomPath": {
                        "1": {
                            "name": "001 - Long Range Rangs - $100",
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
                            "name": "002 - Red Hot Rangs - $300",
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
                            "name": "003 - Kylie Boomerang - $1,300",
                            "content": `
                                <ul>
                                    <li>boomerang replaced by kylie
                                        <ul>
                                            <li>2d, 24p, 49.45r, 1.2s, normal type</li>
                                            <li>can rehit bloons after 0.3s</li>
                                            <li>travels in a straight line then returns</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "4": {
                            "name": "004 - MOAB Press - $3,200",
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
                            "name": "005 - MOAB Domination - $55,000",
                            "content": `
                                <ul>
                                    <li>kylie buffed
                                        <ul>
                                            <li>+10d (12d), 50%s (0.6s)</li>
                                        </ul>
                                    </li>
                                    <li>press buffed
                                        <ul>
                                            <li>+35md (40md), +100p (300p), 100r, 50%s (5.0s)</li>
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
                    "topPath": {
                        "1": {
                            "name": "100 - Bigger Bombs - $350",
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
                            "name": "200 - Heavy Bombs - $650",
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
                            "name": "300 - Really Big Bombs - $1,200",
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
                            "name": "400 - Bloon Impact - $3,600",
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
                            "name": "500 - Bloon Crush - $55,000",
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
                    "middlePath": {
                        "1": {
                            "name": "010 - Faster Reload - $250",
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
                            "name": "020 - Missile Launcher - $400",
                            "content": `
                                ul>
                                    <li>bomb buffed
                                        <ul>
                                            <li>73.33%s (0.825s), +4r (44r), increased projectile speed</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "3": {
                            "name": "030 - MOAB Mauler - $900",
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
                            "name": "040 - MOAB Assassin - $3,200",
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
                            "name": "050 - MOAB Eliminator - $25,000",
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
                    "bottomPath": {
                        "1": {
                            "name": "001 - Extra Range - $200",
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
                            "name": "002 - Frag Bombs - $300",
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
                            "name": "003 - Cluster Bombs - $900",
                            "content": `
                                <ul>
                                    <li>frags replaced by cluster
                                        <ul>
                                            <li>1d, 8j 360&deg spread, 8p, 15r blast, normal type</li>
                                            <li>note: any given bloon may only be hit by one cluster projectile, so the cluster attack can only do 1 damage on a single target (or 2 with 203)</li>
                                        </ul>
                                    </li>
                                    <li>crosspath
                                        <ul>
                                            <li>103: cluster +6p (14p)</li>
                                            <li>203: cluster +1d (2d), +10p (24p)</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "4": {
                            "name": "004 - Recursive Cluster - $3,200",
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
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>note: any given bloon may only be hit by one supercluster projectile, so the supercluster attack can only do 1 damage on a single target (or 2 with 204)</li>
                                        </ul>
                                    </li>
                                    <li>crosspath
                                        <ul>
                                            <li>104: superbomb +0p, subcluster +36p (96p), all other explosions +6p</li>
                                            <li>104: subcluster +3.5r (37.5), all other explosions +50%r</li>
                                            <li>204: superbomb +0p, subcluster +60p (156p), all other explosions +10p</li>
                                            <li>204: all explosions +1d (as expected)</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "5": {
                            "name": "005 - Bomb Blitz - $35,000",
                            "content": `
                               <ul>
                                    <li>all attacks
                                        <ul>
                                            <li>+4d (5d)</li>
                                            <li>all bombs replaced by superbombs</li>
                                        </ul>
                                    </li>
                                    <li>gains bomb-blitz ability (40s cooldown, triggered just before leak)
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
                    "topPath": {
                        "1": {
                            "name": "100 - Faster Shooting - $150",
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
                            "name": "200 - Even Faster Shooting - $400",
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
                            "name": "300 - Hot Shots - $600",
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
                            "name": "400 - Ring of Fire - $3,300",
                            "content": `
                                <ul>
                                    <li>tacks replaced by ring-of-fire
                                        <ul>
                                            <li>3d, 60p, 23r zone, 0.47s, fire type</li>
                                        </ul>
                                    </li>
                                    <li>crosspath
                                        <ul>
                                            <li>410: +10p (70p)</li>
                                            <li>420: +10p (80p)</li>
                                            <li>401: +1d (4d)</li>
                                            <li>402: +1d (5d)</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "5": {
                            "name": "500 - Inferno Ring - $45,500",
                            "content": `
                                <ul>
                                    <li>ring-of-fire buffed
                                        <ul>
                                            <li>+5d (8d), +4md (12md), +11.5r (34.5r), 0.1s</li>
                                        </ul>
                                    </li>
                                    <li>gains meteor attack
                                        <ul>
                                            <li>700d, 1p, &#8734;r, 4.0s, fire type, camo, strong priority</li>
                                            <li>can see past obstacles</li>
                                            <li>weak homing (100 turn rate)</li>
                                            <li>applies burn status 
                                                <ul>
                                                    <li>50d/1.0s, fire type, 4.1s duration</li>
                                                </ul>
                                            </li>
                                            <li>on contact: explosion
                                                <ul>
                                                    <li>50d single-layer, 10p, 18r blast, explosion type</li>
                                                    <li>note: no camo</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>crosspath
                                        <ul>
                                            <li>520: meteor +1p (2p)</li>
                                            <li>502: meteor +300d (1,000d)</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        }
                    },
                    "middlePath": {
                        "1": {
                            "name": "010 - Long Range Tacks - $100",
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
                            "name": "020 - Super Range Tacks - $225",
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
                            "name": "030 - Blade Shooter - $700",
                            "content": `
                                <ul>
                                    <li>tacks replaced by blades 
                                        <ul>
                                            <li>1d, 6p, 31r, 1.19s, sharp type</li>
                                        </ul>
                                    </li>
                                    <li>crosspath
                                        <ul>
                                            <li>032: +1p (7p)</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "4": {
                            "name": "040 - Blade Maelstrom - $3,000",
                            "content": `
                                <ul>
                                    <li>gains maelstrom ability (20s cooldown, 3s duration, battle ready)
                                        <ul>
                                            <li>1d, 2j 360&deg spread, 200p, 0.0333s, sharp type</li>
                                            <li>attack rotates clockwise at a constant speed</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "5": {
                            "name": "050 - Super Maelstrom - $15,000",
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
                    "bottomPath": {
                        "1": {
                            "name": "001 - More Tacks - $100",
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
                            "name": "002 - Even More Tacks - $100",
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
                            "name": "003 - Tack Sprayer - $450",
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
                            "name": "004 - Overdrive - $3,200",
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
                            "name": "005 - The Tack Zone - $24,000",
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
                            <li>$500 (150 MM)</li>
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
                    "topPath": {
                        "1": {
                            "name": "100 - Permafrost - $100",
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
                            "name": "200 - Cold Snap - $350",
                            "content": `
                                <ul>
                                    <li>can pop lead</li>
                                    <li>gains camo detection</li>
                                </ul>
                            `
                        },
                        "3": {
                            "name": "300 - Ice Shards - $2,000",
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
                            "name": "400 - Embrittlement - $3,000",
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
                            "name": "500 - Super Brittle - $34,000",
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
                    "middlePath": {
                        "1": {
                            "name": "010 - Enhanced Freeze - $225",
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
                            "name": "020 - Deep Freeze - $350",
                            "content": `
                                <ul>
                                    <li>frozen status buffed
                                        <ul>
                                            <li>soaks through 1 layer</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "3": {
                            "name": "030 - Arctic Wind - $2,900",
                            "content": `
                                <ul>
                                    <li>freeze attack buffed
                                        <ul>
                                            <li>+60p (100p)</li>
                                        </ul>
                                    </li>
                                    <li>gains slow attack
                                        <ul>
                                            <li>60% slow, cannot affect white/lead/blimp</li>
                                            <li>land towers are placeable on any water in range</li>
                                        </ul>
                                    </li>
                                    <li>crosspath
                                        <ul>
                                            <li>230: slow can affect lead</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "4": {
                            "name": "040 - Snowstorm - $3,000",
                            "content": `
                                <ul>
                                    <li>freeze attack buffed
                                        <ul>
                                            <li>+10r (30r)</li>
                                        </ul>
                                    </li>
                                    <li>frozen status buffed
                                        <ul>
                                            <li>3s duration</li>
                                        </ul>
                                    </li>
                                    <li>gains snowstorm ability (30s cooldown, battle ready)
                                        <ul>
                                            <li>1d, &#8734;p, &#8734;r, shatter type, camo applies frozen status (6s duration, or 3s for camo/white/blimp)</li>
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
                            "name": "050 - Absolute Zero - $20,000",
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
                                            <li>1d, &#8734;p, &#8734;r, normal type, camo applies frozen status (10s duration) all ice towers gain 66.66%s buff for 10s</li>
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
                    "bottomPath": {
                        "1": {
                            "name": "001 - Larger Radius - $100",
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
                            "name": "002 - Re-Freeze - $200",
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
                            "name": "003 - Cryo Cannon - $1,750",
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
                            "name": "004 - Icicles - $2,400",
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
                            "name": "005 - Icicle Impale - $32,000",
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
                            <li>$200 (150 MM)</li>
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
                    "topPath": {
                        "1": {
                            "name": "100 - Glue Soak - $200",
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
                            "name": "200 - Corrosive Glue - $300",
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
                            "name": "300 - Bloon Dissolver - $2,300",
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
                            "name": "400 - Bloon Liquefier -$4,500",
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
                            "name": "500 - The Bloon Solver - $19,000",
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
                                            <li>6cd/0.1s, 9md/0.1s</li>
                                            <li>does single-layer damage to ceramics</li>
                                        </ul>
                                    </li>
                                    <li>crosspath
                                        <ul>
                                            <li>510: splat +1p (6)</li>
                                            <li>520: splat +4p (10), +13r (25)</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        }
                    },
                    "middlePath": {
                        "1": {
                            "name": "010 - Bigger Globs - $100",
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
                            "name": "020 - Glue Splatter - $700",
                            "content": `
                                <ul>
                                    <li>glue replaced by glue-bomb
                                        <ul>
                                            <li>46r, 0.9s, applies glued status</li>
                                            <li>on contact: splat
                                                <ul>
                                                    <li>5p, 13r blast, applies glued status</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "3": {
                            "name": "030 - Glue Hose - $2,000",
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
                            "name": "040 - Glue Strike - $4,000",
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
                            "name": "050 - Glue Storm - $14,000",
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
                    "bottomPath": {
                        "1": {
                            "name": "001 - Stickier Glue - $120",
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
                            "name": "002 - Stronger Glue - $400",
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
                            "name": "003 - MOAB Glue - $3,200",
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
                            "name": "004 - Relentless Glue - $2,400",
                            "content": `
                                <ul>
                                    <li>gains camo detection</li>
                                    <li>glued bloons drop glue on the track when fully popped
                                        <ul>
                                            <li>1p, 5s lifetime, applies glued status</li>
                                            <li>glue can be dropped again, but not a 3rd time</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "5": {
                            "name": "005 - Super Glue - $28,000",
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
                                            <li>025: splat 10p</li>
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
                            <li>$350 (500 MM)</li>
                            <li>size: 6 radius</li>
                            <li>placeable on: land</li>
                            <li>20r</li>
                            <li>bullet attack</li>
                            <ul>
                                <li>2d, 1i, ∞r, 1.59s, sharp type</li>
                            </ul>
                        </ul>
                    `,
                    "topPath": {
                        "1": {
                            "name": "100 - Full Metal Jacket - $300",
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
                            "name": "200 - Large Calibre - $1,000",
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
                            "name": "300 - Deadly Precision - $2,800",
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
                            "name": "400 - Maim MOAB - $5,000",
                            "content": `
                                <ul>
                                    <li>bullet buffed
                                        <ul>
                                            <li>+10d (30d, 45cd)</li>
                                            <li>applies stun
                                                <ul>
                                                    <li>2s duration for MOABs, BFBs 1s, DDTs 0.5s, ZOMGs 0.3s</li>
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
                            "name": "500 - Cripple MOAB - $34,000",
                            "content": `
                                <ul>
                                    <li>bullet buffed
                                        <ul>
                                            <li>+50d (80d, 95cd)</li>
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
                    "middlePath": {
                        "1": {
                            "name": "010 - Night Vision Goggles - $300",
                            "content": `
                                <ul>
                                    <li>gains camo detection</li>
                                    <li>bullet buffed
                                        <ul>
                                            <li>+2cmd</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "2": {
                            "name": "020 - Shrapnel Shot - $400",
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
                            "name": "030 - Bouncing Bullet - $3,000",
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
                            "name": "040 - Supply Drop - $5,600",
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
                            "name": "050 - Elite Sniper - $14,000",
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
                                    <li>supply-drop replaced by elite-supplies (40s cooldown, 20s initial)
                                        <ul>
                                            <li>drops a crate worth $5000</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        }
                    },
                    "bottomPath": {
                        "1": {
                            "name": "001 - Fast Firing - $350",
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
                            "name": "002 - Even Faster Firing - $350",
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
                            "name": "003 - Semi-Automatic - $3,000",
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
                            "name": "004 - Full Auto Rifle - $4,600",
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
                            "name": "005 - Elite Defender - $16,000",
                            "content": `
                                <ul>
                                    <li>bullet buffed
                                        <ul>
                                            <li>50%s (0.064925s)</li>
                                            <li>additionally shoots x% faster, where x% is how far along the track the furthest forward bloon is</li>
                                        </ul>
                                    </li>
                                    <li>gains retaliation ability (10s cooldown, 7s duration, triggered bloons coming close to the exit)
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
                    "topPath": {
                        "1": {
                            "name": "100 - Longer Range - $130",
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
                            "name": "200 - Advanced Intel - $500",
                            "content": `
                                <ul>
                                    <li>uses shared range
                                        <ul>
                                            <li>can target anything in the visible range circle of any tower - usually the range of the primary attack</li>
                                            <li>a projectile can see camo if aiming at the range of a tower that can see camo with its primary attack, so, any tower that "gains camo detection"</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "3": {
                            "name": "300 - Submerge and Support - $950",
                            "content": `
                                <ul>
                                    <li>gains submerge targeting option
                                        <ul>
                                            <li>while submerged, dart is replaced by sonar
                                                <ul>
                                                    <li>&#8734;p, 52r zone, 1.5s passive, decamo</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>crosspath
                                        <ul>
                                            <li>301: sonar 85%s (1.275s)</li>
                                            <li>302: sonar 75%s (0.95625s)</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "4": {
                            "name": "400 - Bloontonium Reactor - $2,600",
                            "content": `
                                <ul>
                                    <li>sonar buffed
                                        <ul>
                                            <li>0.4s</li>
                                        </ul>
                                    </li>
                                    <li>while submerged, gains radioactive attack
                                        <ul>
                                            <li>1d, 26p, 52r zone, 0.4s passive, shatter type</li>
                                        </ul>
                                    </li>
                                    <li>while submerged, abilities of water towers in range -15% cooldown time</li>
                                    <li>crosspath
                                        <ul>
                                            <li>410: radioactive +9p (35p)</li>
                                            <li>420: radioactive +1ld, +15p (50), normal type</li>
                                            <li>401: radioactive 85%s (0.34s)</li>
                                            <li>402: radioactive 75%s (0.255s)</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "5": {
                            "name": "500 - Energizer - $32,000",
                            "content": `
                                <ul>
                                    <li>radioactive buffed
                                        <ul>
                                            <li>5d, 10cd (15cd), 1000p</li>
                                        </ul>
                                    </li>
                                    <li>while submerged, abilities of water towers in range have -50% cooldown time, all other abilities have -20% cooldown time</li>
                                    <li>hero in range gains +75% XP</li>
                                    <li>hero upgrade cost reduced by ?</li>
                                </ul>
                            `
                        }
                    },
                    "middlePath": {
                        "1": {
                            "name": "010 - Barbed Darts - $450",
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
                            "name": "020 - Heat-tipped Darts - $300",
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
                            "name": "030 - Ballistic Missile - $1,600",
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
                            "name": "040 - First Strike Capability - $14,000",
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
                            "name": "050 - Pre-emptive Strike - $32,000",
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
                    "bottomPath": {
                        "1": {
                            "name": "001 - Twin Guns - $350",
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
                            "name": "002 - Airburst Darts - $800",
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
                            "name": "003 - Triple Guns - $800",
                            "content": `
                                <ul>
                                    <li>67%s (0.25125s)</li>
                                </ul>
                            `
                        },
                        "4": {
                            "name": "004 - Armor Piercing Darts - $2,800",
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
                            "name": "005 - Sub Commander - $25,000",
                            "content": `
                               <ul>
                                    <li>airburst buffed
                                        <ul>
                                            <li>50%s (0.125625s)</li>
                                        </ul>
                                    </li>
                                    <li>gains command buff
                                        <ul>
                                            <li>affects subs in range, including self</li>
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
                    "topPath": {
                        "1": {
                            "name": "100 - Faster Shooting - $350",
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
                            "name": "200 - Double Shot - $550",
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
                            "name": "300 - Destroyer - $2,850",
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
                            "name": "400 - Aircraft Carrier - $7,200",
                            "content": `
                                <ul>
                                    <li>spawns three permanent plane subtowers
                                        <ul>
                                            <li>forward-dart attack
                                                <ul>
                                                    <li>1d, 2j, 9p, 0.15s, sharp type</li>
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
                            "name": "500 - Carrier Flagship - $25,000",
                            "content": `
                                <ul>
                                    <li>dart buffed
                                        <ul>
                                            <li>normal type</li>
                                        </ul>
                                    </li>
                                    <li>plane forward-dart buffed
                                        <ul>
                                            <li>+1d (2d), 1j, +3cd (5cd), +5p (14p), &#8734;r, normal type</li>
                                            <li>aimed according to the main tower's targeting instead of straight forward</li>
                                        </ul>
                                    </li>
                                    <li>plane radial-dart buffed
                                        <ul>
                                            <li>+1d (2d), +3cd (5cd), +5p (14p), normal type</li>
                                        </ul>
                                    </li>
                                    <li>plane moab-missile buffed
                                        <ul>
                                            <li>50%s (1.5s)</li>
                                        </ul>
                                    </li>
                                    <li>plane moab-missile explosion buffed
                                        <ul>
                                            <li>+40d (60d), +1p (4p), normal type</li>
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
                                        </ul>
                                    </li>
                                </ul>
                            `
                        }
                    },
                    "middlePath": {
                        "1": {
                            "name": "010 - Grape Shot - $550",
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
                            "name": "020 - Hot Shot - $500",
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
                            "name": "030 - Cannon Ship - $900",
                            "content": `
                                <ul>
                                    <li>gains cannonball attack
                                        <ul>
                                            <li>1.2s
                                                <ul>
                                                    <li>on contact: explosion</li>
                                                    <li>1d, 28p, 40r blast, explosion type</li>
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
                                </ul>
                            `
                        },
                        "4": {
                            "name": "040 - Monkey Pirates - $5,250",
                            "content": `
                                <ul>
                                    <li>cannonball buffed
                                        <ul>
                                            <li>+2j (3j ? spread), 1.3s</li>
                                        </ul>
                                    </li>
                                    <li>explosion buffed: +1d (2d)</li>
                                    <li>gains takedown ability (50s cooldown, battle ready)
                                        <ul>
                                            <li>targets the strongest "small" blimp (not ZOMG or BAD), immediately removing it</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "5": {
                            "name": "050 - Pirate Lord - $21,000",
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
                    "bottomPath": {
                        "1": {
                            "name": "001 - Long Range - $300",
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
                            "name": "002 - Crow's Nest - $400",
                            "content": `
                                <ul>
                                    <li>gains camo detection</li>
                                </ul>
                            `
                        },
                        "3": {
                            "name": "003 - Merchantman - $1,600",
                            "content": `
                                <ul>
                                    <li>$300 end of round income</li>
                                </ul>
                            `
                        },
                        "4": {
                            "name": "004 - Favored Trades - $5,400",
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
                            "name": "005 - Trade Empire - $19,000",
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
                    "topPath": {
                        "1": {
                            "name": "100 - Rapid Fire - $550",
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
                            "name": "200 - Lots More Darts - $650",
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
                            "name": "300 - Fighter Plane - $1,000",
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
                            "name": "400 - Operation: Dart Storm - $3,000",
                            "content": `
                                <ul>
                                    <li>radial-dart buffed
                                        <ul>
                                            <li>+4j (16j), +2p (7p), 48%s (0.54s)</li>
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
                            "name": "500 - Sky Shredder - $40,000",
                            "content": `
                                <ul>
                                    <li>radial-dart buffed
                                        <ul>
                                            <li>+2d (3d), +2cd (5cd), +16j (32j), +3p (10p), 50%s (0.27s), normal type</li>
                                            <li>much faster projectile speed</li>
                                        </ul>
                                    </li>
                                    <li>explosion buffed
                                        <ul>
                                            <li>180d, +1p (5p)</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        }
                    },
                    "middlePath": {
                        "1": {
                            "name": "010 - Exploding Pineapple - $200",
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
                            "name": "020 - Spy Plane - $350",
                            "content": `
                                <ul>
                                    <li>gains camo detection</li>
                                    <li>all attacks buffed: +1cad (2cad)</li>
                                </ul>
                            `
                        },
                        "3": {
                            "name": "030 - Bomber Ace - $900",
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
                            "name": "040 - Ground Zero - $14,000",
                            "content": `
                               <ul>
                                    <li>bombing-run buffed
                                        <ul>
                                            <li>+7d (10d, 11cad), +20p (40p)</li>
                                        </ul>
                                    </li>
                                    <li>gains ground-zero ability (45s cooldown, battle ready)
                                        <ul>
                                            <li>700d, 1000p, normal type</li>
                                        </ul>
                                    </li>
                                </ul> 
                            `
                        },
                        "5": {
                            "name": "050 - Tsar Bomba - $30,000",
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
                    "bottomPath": {
                        "1": {
                            "name": "001 - Sharper Darts - $450",
                            "content": `
                                <ul>
                                    <li>radial-dart buffed
                                        <ul>
                                            <li>+3p (8p)</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "2": {
                            "name": "002 - Centered Path - $300",
                            "content": `
                                <ul>
                                    <li>gains centered path targeting
                                        <ul>
                                            <li>fly on a circular path around a chosen point with radius 90</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "3": {
                            "name": "003 - Neva-Miss Targeting - $2,200",
                            "content": `
                               <ul>
                                    <li>radial-dart buffed
                                        <ul>
                                            <li>+4p (12p), moderate homing (360 turn rate), increased projectile speed</li>
                                        </ul>
                                    </li>
                                </ul> 
                            `
                        },
                        "4": {
                            "name": "004 - Spectre - $20,000",
                            "content": `
                                <ul>
                                    <li>radial-dart replaced by barrage
                                        <ul>
                                            <li>&#8734;r, 0.05s</li>
                                            <li>always targets first</li>
                                            <li>alternately fires dart and bomb</li>
                                        </ul>
                                    </li>
                                    <li>dart projectile
                                        <ul>
                                            <li>2d, 2cd (4cd), 15p, sharp type</li>
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
                            "name": "005 - Flying Fortress - $75,000",
                            "content": `
                                <ul>
                                    <li>barrage buffed
                                        <ul>
                                            <li>60%s (0.03s)</li>
                                        </ul>
                                    </li>
                                    <li>dart buffed
                                        <ul>
                                            <li>+2d (4d), +10md (14md), normal type</li>
                                        </ul>
                                    </li>
                                    <li>bomb buffed
                                        <ul>
                                            <li>+3d (6d), normal type</li>
                                        </ul>
                                    </li>
                                    <li>gains 2 more copies of barrage, which target last and close</li>
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
                    "topPath": {
                        "1": {
                            "name": "100 - Quad Darts - $600",
                            "content": `
                                <ul>
                                    <li>gains a second dart attack</li>
                                    <li>note: this means that alchemist buffs are used up twice as fast</li>
                                </ul>
                            `
                        },
                        "2": {
                            "name": "200 - Pursuit - $400",
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
                            "name": "300 - Razor Rotors - $1,750",
                            "content": `
                                <ul>
                                    <li>gains rotor attack
                                        <ul>
                                            <li>2d, 13p, 35r zone, 0.55s, normal type</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "4": {
                            "name": "400 - Apache Dartship - $19,600",
                            "content": `
                                <ul>
                                    <li>dart buffed
                                        <ul>
                                            <li>75%s (0.3975s)</li>
                                        </ul>
                                    </li>
                                    <li>rotor buffed
                                        <ul>
                                            <li>+2d (4d), +7p (20p)</li>
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
                                                    <li>2d, 3cd (5cd), 3md (5cd), 40p, 25r blast, explosion type</li>
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
                            "name": "500 - Apache Prime - $45,000",
                            "content": `
                                <ul>
                                    <li>dart buffed: +5d (6), +20p (23), energy type</li>
                                    <li>rotor buffed: +4d (8d), +20p (40p)</li>
                                    <li>machinegun buffed: +4d (5d), +6p (15p), plasma type</li>
                                    <li>rocket buffed: +12cd (17cd), +12md (17md)</li>
                                </ul>
                            `
                        }
                    },
                    "middlePath": {
                        "1": {
                            "name": "010 - Bigger Jets - $300",
                            "content": `
                                <ul>
                                    <li>flies faster</li>
                                </ul>
                            `
                        },
                        "2": {
                            "name": "020 - IFR - $450",
                            "content": `
                                <ul>
                                    <li>gains camo detection</li>
                                </ul>
                            `
                        },
                        "3": {
                            "name": "030 - Downdraft - $3,000",
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
                            "name": "040 - Support Chinook - $7,500",
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
                            "name": "050 - Special Poperations - $30,000",
                            "content": `
                                <ul>
                                    <li>supplies ability buffed
                                        <ul>
                                            <li>$8000 and 15 lives</li>
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
                    "bottomPath": {
                        "1": {
                            "name": "001 - Faster Darts - $250",
                            "content": `
                                <ul>
                                    <li>dart buffed
                                        <ul>
                                            <li>increased projectile speed, increased projectile lifespan</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "2": {
                            "name": "002 - Faster Firing - $350",
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
                            "name": "003 - MOAB Shove - $3,50",
                            "content": `
                                <ul>
                                    <li>gains shove attack
                                        <ul>
                                            <li>1p</li>
                                            <li>slows MOABs to - 33% normal speed, BFBs to 0%, DDTs and ZOMGs to 33%</li>
                                        </ul>
                                    </li>
                                    <li>crosspath
                                        <ul>
                                            <li>013: shove pushes back more (MOABs - 44%, BFBs - 11%, ZOMGs and DDTs 22%)</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "4": {
                            "name": "004 - Comanche Defense - $8,500",
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
                                                            <li>1d, 3j, 34p, 42r, 0.15s, sharp type</li>
                                                        </ul>
                                                    </li>
                                                    <li>rocket attack
                                                        <ul>
                                                            <li>&#8734;r, 3.0s</li>
                                                            <li>moderate homing (250 turn rate)</li>
                                                            <li>on contact: explosion
                                                                <ul>
                                                                    <li>1d, 2cd (3cd), 2md (3md), 100p, 18r blast, normal type</li>
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
                            "name": "005 - Comanche Commander - $35,000",
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
                                    <li>targets randomly within 18 units of selected point</li>
                                    <li>on expire (0.5s): explosion
                                        <ul>
                                            <li>1d, 40p, 20r blast, explosion type</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    `,
                    "topPath": {
                        "1": {
                            "name": "100 - Bigger Blast - $350",
                            "content": `
                                <ul>
                                    <li>explosion buffed
                                        <ul>
                                            <li>+5p (45p), +8r (28r)</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "2": {
                            "name": "200 - Bloon Buster - $500",
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
                            "name": "300 - Shell Shock - $950",
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
                                                    <li>applies stun status: 0.5s duration</li>
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
                            "name": "400 - The Big One - $7,500",
                            "content": `
                                <ul>
                                    <li>explosion buffed
                                        <ul>
                                            <li>+5d (7d), +40p (85p), +20r (58r), normal type</li>
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
                            "name": "500 - The Biggest One - $28,000",
                            "content": `
                                <ul>
                                    <li>explosion buffed
                                        <ul>
                                            <li>+18d (25d), +25cd (50cd), 35md (60md), +115p (200p), +16r (74r), normal type</li>
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
                    "middlePath": {
                        "1": {
                            "name": "010 - Faster Reload - $300",
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
                            "name": "020 - Rapid Reload - $500",
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
                            "name": "030 - Heavy Shells - $900",
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
                            "name": "040 - Artillery Battery - $7.300",
                            "content": `
                                <ul>
                                    <li>25%s (0.27s), +4 BAD damage (6 BAD damage)</li>
                                    <li>gains bombardment ability (60s cooldown, 8s duration, battle ready)
                                        <ul>
                                            <li>25%s (0.0675)</li>
                                            <li>explosion +15%r (23)</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "5": {
                            "name": "050 - Pop and Awe - $27,000",
                            "content": `
                                <ul>
                                    <li>explosion buffed
                                        <ul>
                                            <li>+9cd (13cd), +6md (7md), +3fd (4fd), +6 BAD damage (17 BAD damage), +3ld (4ld), +8 sd (10sd)</li>
                                        </ul>
                                    </li>
                                    <li>gains pop-and-awe ability (45s cooldown, 10s duration, battle ready)
                                        <ul>
                                            <li>20d, &#8734;p, &#8734;r, 1.0s, normal type</li>
                                            <li>applies stun status: 1s duration</li>
                                            <li>gains artillery-buff
                                                <ul>
                                                    <li>all x4x mortars get +6 BAD damage</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        }
                    },
                    "bottomPath": {
                        "1": {
                            "name": "001 - Increased Accuracy - $200",
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
                            "name": "002 - Burny Stuff - $500",
                            "content": `
                                <ul>
                                    <li>explosion buffed
                                        <ul>
                                            <li>on contact: applies burn status
                                                <ul>
                                                    <li>1d/1.25s, fire type, 3.75s duration</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "3": {
                            "name": "003 - Signal Flare - $700",
                            "content": `
                                <ul>
                                    <li>gains camo detection</li>
                                    <li>shell buffed
                                        <ul>
                                            <li>on expire: flare
                                                <ul>
                                                    <li>80p, 50r blast</li>
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
                            "name": "004 - Shattering Shells - $8.500",
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
                                                    <li>on hit: degrow, defortify, removes lead from DDTs
                                                        <ul>
                                                            <li>note: cannot defortify DDTs</li>
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
                            "name": "005 - Blooncineration - $40,000",
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
                                            <li>can affect DDTs and ZOMGs</li>
                                        </ul>
                                    </li>
                                    <li>crosspath
                                        <ul>
                                            <li>105: wall-of-fire +5p (25), +6r (21)</li>
                                            <li>205: burn +50d (150d), wall-of-fire +1d (5)</li>
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
                            <li>$800 (500 MM</li>
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
                    "topPath": {
                        "1": {
                            "name": "100 - Focused Firing - $250",
                            "content": `
                                <ul>
                                    <li>random targeting spread reduced by 60% (9.2&deg)</li>
                                </ul>
                            `
                        },
                        "2": {
                            "name": "200 - Laser Shock - $750",
                            "content": `
                                <ul>
                                    <li>dart buffed
                                        <ul>
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
                            "name": "300 - Laser Cannon - $3,000",
                            "content": `
                                <ul>
                                    <li>dart replaced by laser
                                        <ul>
                                            <li>2d, 1 shocked2 damage (2 shocked2 damage), 5p, 0.2s passive, plasma type</li>
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
                            "name": "400 - Plasma Accelerator - $11,000",
                            "content": `
                                <ul>
                                    <li>laser replaced with beam
                                        <ul>
                                            <li>1d, +1 shocked3 damage (2 shocked3 damage), 50p, 0.2s passive, plasma type</li>
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
                                            <li>402: +25p (75p)</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "5": {
                            "name": "500 - Ray of Doom - $80,000",
                            "content": `
                                <ul>
                                    <li>beam replaced by full-beam
                                        <ul>
                                            <li>25d, +15 shocked4 damage (45 shocked4 damage), 1000p, 0.2s passive, normal type</li>
                                            <li>one solid beam to the edge of the screen</li>
                                            <li>applies shocked4 status
                                                <ul>
                                                    <li>20d/0.95s, 5s duration</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        }
                    },
                    "middlePath": {
                        "1": {
                            "name": "010 - Advanced Targeting - $250",
                            "content": `
                                <ul>
                                    <li>gains camo detection</li>
                                </ul>
                            `
                        },
                        "2": {
                            "name": "020 - Faster Barrel Spin - $500",
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
                            "name": "030 - Hydra Rocket Pods - $5,600",
                            "content": `
                                <ul>
                                    <li>dart replaced by rocket
                                        <ul>
                                            <li>7p, 0.132s</li>
                                            <li>uses 2 pierce per hit (4 total explosions)</li>
                                            <li>on contact: explosion
                                                <ul>
                                                    <li>1d, 6p, 8r blast, normal type</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>crosspath:
                                        <ul>
                                            <li>032: rocket gets +3p (5 total explosions), explosion gets +3p (9p)</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "4": {
                            "name": "040 - Rocket Storm - $5,100",
                            "content": `
                                <ul>
                                    <li>gains rocket-storm ability (40s cooldown, 8s duration, battle ready)
                                        <ul>
                                            <li>1i, 10j, 0.5s passive</li>
                                            <li>120&deg random spread</li>
                                            <li>on contact: explosion
                                                <ul>
                                                    <li>4d, 6p, 8r blast, normal type</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>crosspath:
                                        <ul>
                                            <li>140: rocket-storm ability random spread decreased to 48&deg </li>
                                            <li>042: rocket-storm ability explosion gets +2p (10p)</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "5": {
                            "name": "050 - M.A.D - $68,000",
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
                    "bottomPath": {
                        "1": {
                            "name": "001 - Faster Swivel - $150",
                            "content": `
                                <ul>
                                    <li>rotates twice as fast (360&deg/s)</li>
                                </ul>
                            `
                        },
                        "2": {
                            "name": "002 - Powerful Darts - $800",
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
                            "name": "003 - Buckshot - $3,400",
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
                            "name": "004 - Bloon Area Denial System - $14,500",
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
                            "name": "005 - Bloon Exclusion Zone - $53,000",
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
            },
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
                            <li>$400 (750 MM)</li>
                            <li>size: 7 radius</li>
                            <li>placeable on: land</li>
                            <li>magic-bolt attack
                                <ul>
                                    <li>1d, 3p, 40r, 1.1s, energy type</li>
                                </ul>
                            </li>
                        </ul>
                    `,
                    "topPath": {
                        "1": {
                            "name": "100 - Guided Magic - $150",
                            "content": `
                                <ul>
                                    <li>magic-bolt buffed
                                        <ul>
                                            <li>moderate homing (360 turn rate)</li>
                                            <li>can see past obstacles</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "2": {
                            "name": "200 - Arcane Blast - $350",
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
                            "name": "300 - Arcane Mastery - $1,200",
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
                            "name": "400 - Arcane Spike - $9,000",
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
                            "name": "500 - Archmage - $32,000",
                            "content": `
                                <ul>
                                    <li>magic-bolt buffed
                                        <ul>
                                            <li>+2d (10d), +15md (35md), +4ld(+8ld), +4p (11p), 50%s (0.1375s)</li>
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
                                            <li>510: fireball 50%s (1.3s), +6d (9d), +9md (18md)</li>
                                            <li>520: wall-of-fire 50%s (2.75s), +1md (2md)</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        }
                    },
                    "middlePath": {
                        "1": {
                            "name": "010 - Fireball - $300",
                            "content": `
                                <ul>
                                    <li>gains fireball attack
                                        <ul>
                                            <li>2.6s</li>
                                            <li>on damage: explosion
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
                            "name": "020 - Wall of Fire - $900",
                            "content": `
                                <ul>
                                    <li>gains place-fire attack
                                        <ul>
                                            <li>5.5s passive, 1.0s initial cooldown</li>
                                            <li>places wall-of-fire on the closest track
                                                <ul>
                                                    <li>1d, 15p, 15r zone, 0.15s, fire type</li>
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
                            "name": "030 - Dragon's Breath - $3,000",
                            "content": `
                                <ul>
                                    <li>fireball buffed
                                        <ul>
                                            <li>explosion +6d (9d)</li>
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
                            "name": "040 - Summon Phoenix - $4,000",
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
                            "name": "050 - Wizard Lord Phoenix - $50,000",
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
                                                            <li>30d, 50p, &#8734;r, 0.1s, normal type, camo</li>
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
                    "bottomPath": {
                        "1": {
                            "name": "001 - Intense Magic - $300",
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
                            "name": "002 - Monkey Sense - $300",
                            "content": `
                                <ul>
                                    <li>gains camo detection</li>
                                </ul>
                            `
                        },
                        "3": {
                            "name": "003 - Shimmer - $1,500",
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
                            "name": "004 - Necromancer: Unpopped Army - $2,800",
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
                                            <li>024: wall-of-fire +0d for every 200 graveyard</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "5": {
                            "name": "005 - Prince of Darkness - $24,000",
                            "content": `
                                <ul>
                                    <li>magic-bolt buffed
                                        <ul>
                                            <li>25%s (0.275s)</li>
                                        </ul>
                                    </li>
                                    <li>shimmer buffed
                                        <ul>
                                            <li>50%s (1.25s)</li>
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
                                                    <li>40d, 20p, normal type, 20s lifetime</li>
                                                    <li>travels backwards along the track at 60% red speed</li>
                                                    <li>+1d for every 300 graveyard bloons, stacking additively up to 10 times</li>
                                                </ul>
                                            </li>
                                            <li>if more than 2000 pops in the graveyard, uses 50 to spawn a zbfb
                                                <ul>
                                                    <li>100d, 50p, normal type, 12.5s lifetime</li>
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
                            <li>$2,100 (750 MM)</li>
                            <li>size: 8 radius</li>
                            <li>placeable on: land</li>
                            <li>dart attack
                                <ul>
                                    <li>1d, 1p, 50r, 0.06s, sharp type</li>
                                </ul>
                            </li>
                        </ul>
                    `,
                    "topPath": {
                        "1": {
                            "name": "100 - Laser Blasts - $2,300",
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
                            "name": "200 - Plasma Blasts - $4,500",
                            "content": `
                                <ul>
                                    <li>laser replaced by plasma
                                        <ul>
                                            <li>50%s (0.03s), +1p (3p), plasma type</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "3": {
                            "name": "300 - Sun Avatar - $13,000",
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
                            "name": "400 - Sun Temple - $100,000",
                            "content": `
                                <ul>
                                    <li>size: 20 radius</li>
                                    <li>sunbeam replaced by sunblast
                                        <ul>
                                            <li>6d, 30p, 65r, 0.06s, normal type</li>
                                            <li>cannot see past obstacles unlike its BTD6 counterpart</li>
                                        </ul>
                                    </li>
                                    <li>when upgraded
                                        <ul>
                                            <li>all towers in range are sacrificed to the temple</li>
                                            <li>gains buffs and additional attacks from up to three categories of tower, depending on the total cost (amount spent) of the sacrifices</li>
                                            <li>NOTE: $20,000 spent in each category gives the max temple</li>
                                            <li>detailed sacrifice info is unavailable</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "5": {
                            "name": "500 - True Sun God - $400,000",
                            "content": `
                                <ul>
                                    <li>size: 25 radius</li>
                                    <li>sunblast buffed
                                        <ul>
                                            <li>+14d (20d)</li>
                                        </ul>
                                    </li>
                                    <li>when upgraded, absorbs all towers in range for even more power (same $20,000 threshold as the Sun Temple)</li>
                                    <li>detailed sacrifice info is unavailable</li>
                                </ul>
                            `
                        }
                    },
                    "middlePath": {
                        "1": {
                            "name": "010 - Super Range - $1,000",
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
                            "name": "020 - Epic Range - $1,400",
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
                            "name": "030 - Robo Monkey - $7,000",
                            "content": `
                                <ul>
                                    <li>dart buffed
                                        <ul>
                                            <li>+3p (7p)</li>
                                            <li>10d crit every 15-20 shots</li>
                                        </ul>
                                    </li>
                                    <li>gains a second attack, which is a copy of the first, with independent choice of targeting priority</li>
                                    <li>note: this means that an alchemist buff is used up twice as fast</li>
                                </ul>
                            `
                        },
                        "4": {
                            "name": "040 - Tech Terror - $20,000",
                            "content": `
                                <ul>
                                    <li>dart replaced by plasma
                                        <ul>
                                            <li>1d, 9p, 72r, 0.048s, plasma type</li>
                                        </ul>
                                    </li>
                                    <li>gains annihilate ability (45s cooldown, battle ready)
                                        <ul>
                                            <li>2500d, 2000p, 70r blast, normal type, camo</li>
                                            <li>penetrates blimp layers</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "5": {
                            "name": "050 - The Anti-Bloon - $90,000",
                            "content": `
                                <ul>
                                    <li>plasma buffed
                                        <ul>
                                            <li>+4d (5d), +5p (14p), +10r (82r), normal type</li>
                                            <li>50d crit every 13-17 shots</li>
                                        </ul>
                                    </li>
                                    <li>annihilate replaced by anti-bloon (45s cooldown, battle ready)
                                        <ul>
                                            <li>5000d, 10000p, 120r blast, normal type, camo</li>
                                            <li>penetrates blimp layers</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        }
                    },
                    "bottomPath": {
                        "1": {
                            "name": "001 - Knockback - $3,000",
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
                            "name": "002 - Ultravision - $1,200",
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
                            "name": "003 - Dark Knight - $5,600",
                            "content": `
                                <ul>
                                    <li>dart replaced by monkeyrang
                                        <ul>
                                            <li>1d, 2md (3md), 5p, 53r, 0.06s, sharp type</li>
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
                            "name": "004 - Dark Champion - $55,000",
                            "content": `
                                <ul>
                                    <li>monkeyrang buffed
                                        <ul>
                                            <li>+1d (2d), +2cd (4cd), +1md (5md), +2p (7p), 50%s (0.03s), normal type</li>
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
                            "name": "005 - Legend of the Night - $240,000",
                            "content": `
                                <ul>
                                    <li>monkeyrang buffed
                                        <ul>
                                            <li>+8d (10), +4cd (16), +5md (18md), +15p (22p), +4r (57r)</li>
                                        </ul>
                                    </li>
                                    <li>gains black-hole ability (120s cooldown, 8s duration, battle ready, triggered by something about to leak)
                                        <ul>
                                            <li>anything about to leak is deleted instead</li>
                                            <li>deleted bloons give no cash and do not add to any damage counter</li>
                                            <li>cooldown persists after selling</li>
                                            <li>does not work during sudden death</li>
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
                            <li>$450 (750 MM)</li>
                            <li>size: 6 radius</li>
                            <li>placeable on: land</li>
                            <li>gains camo detection</li>
                            <li>shuriken attack
                                <ul>
                                    <li>1d, 2p, 40r, 0.7s, sharp type</li>
                                </ul>
                            </li>
                        </ul>
                    `,
                    "topPath": {
                        "1": {
                            "name": "100 - Ninja Discipline - $250",
                            "content": `
                                <ul>
                                    <li>all attacks buffed
                                        <ul>
                                            <li>+17.5%r (47r), 62%s (0.434s)</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "2": {
                            "name": "200 - Sharp Shurikens - $300",
                            "content": `
                                <ul>
                                    <li>shuriken buffed
                                        <ul>
                                            <li>+2p (4p)</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "3": {
                            "name": "300 - Double Shot - $650",
                            "content": `
                                <ul>
                                    <li>shuriken buffed
                                        <ul>
                                            <li>+1j 30&deg spread (2j)</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "4": {
                            "name": "400 - Bloonjitsu - $2,750",
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
                            "name": "500 - Grandmaster Ninja - $35,000",
                            "content": `
                                <ul>
                                    <li>shuriken buffed
                                        <ul>
                                            <li>+1d (2d), +10r (57), 50%s (0.217s), +3j 60&deg spread (8j)</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        }
                    },
                    "middlePath": {
                        "1": {
                            "name": "010 - Distraction - $300",
                            "content": `
                                <ul>
                                    <li>all attacks buffed
                                        <ul>
                                            <li>on damage: 15% chance to send bloons 10-300 units back</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "2": {
                            "name": "020 - Counter-Espionage - $375",
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
                            "name": "030 - Shinobi Tactics - $2,000",
                            "content": `
                                <ul>
                                    <li>gains shinobi buff
                                        <ul>
                                            <li>affects ninjas in range</li>
                                            <li>stacks up to 10 times</li>
                                            <li>85%s, stacking multiplicatively</li>
                                            <li>+15%p, stacking multiplicatively</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "4": {
                            "name": "040 - Bloon Sabotage - $4,500",
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
                            "name": "050 - Grand Saboteur - $25,000",
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
                                            <li>25%d to new blimps entering the map</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        }
                    },
                    "bottomPath": {
                        "1": {
                            "name": "001 - Seeking Shuriken - $200",
                            "content": `
                                <ul>
                                    <li>shuriken buffed: strong homing (instant turn rate, 144&deg fov)</li>
                                </ul>
                            `
                        },
                        "2": {
                            "name": "002 - Caltrops - $300",
                            "content": `
                                <ul>
                                    <li>gains caltrop attack
                                        <ul>
                                            <li>40r, 4.4s passive, places caltrop randomly on path
                                                <ul>
                                                    <li>1d, 6p, sharp type, 25s lifetime</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "3": {
                            "name": "003 - Flash Bomb - $2,000",
                            "content": `
                                <ul>
                                    <li>every 4th shuriken replaced by flash-bomb
                                        <ul>
                                            <li>1d, 60p, 40r blast, normal type</li>
                                            <li>applies stun (1s duration) to bloons</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "4": {
                            "name": "004 - Sticky Bomb - $4,500",
                            "content": `
                                <ul>
                                    <li>gains sticky-bomb attack
                                        <ul>
                                            <li>60r, 5.0s</li>
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
                            "name": "005 - Master Bomber - $40,000",
                            "content": `
                                <ul>
                                    <li>flash-bomb buffed
                                        <ul>
                                            <li>+9d (10d), applies stun (0.25s duration) to blimps</li>
                                        </ul>
                                    </li>
                                    <li>sticky-bomb buffed
                                        <ul>
                                            <li>&#8734;r, 40%s (2.0s), applies stun (1s duration)</li>
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
                                            <li>1d single-layer, 14p, 14r blast, acid type</li>
                                            <li>applies acid status: 1d/2.0s, 4.05s duration</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    `,
                    "topPath": {
                        "1": {
                            "name": "100 - Larger Potions - $250",
                            "content": `
                                <ul>
                                    <li>splash buffed
                                        <ul>
                                            <li>+6p (20p), +7r (21r)</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "2": {
                            "name": "200 - Acidic Mixture Dip - $350",
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
                            "name": "300 - Berserker Brew - $1,500",
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
                                            <li>320: berserk +1s duration (6.0s duration), +15 shot limit (lasts 40 shots), -1s reapplication cooldown (4.0s)</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "4": {
                            "name": "400 - Stronger Stimulant - $2,800",
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
                                            <li>420: berserk +1s duration (13.0s duration), -1s reapplication cooldown (4.0s)</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "5": {
                            "name": "500 - Permanent Brew - $55,000",
                            "content": `
                                <ul>
                                    <li>acidified and brew buffs are permanent (unless this alchemist is sold)</li>
                                </ul>
                            `
                        }
                    },
                    "middlePath": {
                        "1": {
                            "name": "010 - Stronger Acid - $250",
                            "content": `
                                <ul>
                                    <li>acid status buffed
                                        <ul>
                                            <li>1d/1s, 3s duration</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "2": {
                            "name": "020 - Perishing Potions - $475",
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
                            "name": "030 - Unstable Concoction - $4,000",
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
                            "name": "040 - Transforming Tonic - $4,500",
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
                            "name": "050 - Total Transformation - $45,000",
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
                    "bottomPath": {
                        "1": {
                            "name": "001 - Faster Throwing - $550",
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
                            "name": "002 - Acid Pool - $450",
                            "content": `
                                <ul>
                                    <li>potion buffed
                                        <ul>
                                            <li>targets track if no bloons in range, creating a puddle
                                                <ul>
                                                    <li>7s lifetime</li>
                                                    <li>1d, 5p, applies acid status</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "3": {
                            "name": "003 - Lead to Gold - $1,000",
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
                            "name": "004 - Rubber to Gold - $2,500",
                            "content": `
                                <ul>
                                    <li>gains gold-potion attack
                                        <ul>
                                            <li>45r, 3.8s</li>
                                            <li>cannot target BADs</li>
                                            <li>on contact: gold-splash
                                                <ul>
                                                    <li>15p, 14r blast</li>
                                                    <li>applies golden status</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>golden status
                                        <ul>
                                            <li>affected bloons give $1 per layer popped</li>
                                        </ul>
                                    </li>
                                    <li>crosspath
                                        <ul>
                                            <li>104: gold-splash +8p (23p)</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "5": {
                            "name": "005 - Bloon Master Alchemist - $40,000",
                            "content": `
                                <ul>
                                    <li>gains shrink-potion attack
                                        <ul>
                                            <li>&#8734;r, 8.5s</li>
                                            <li>cannot target BADs</li>
                                            <li>on contact: shrink-splash
                                                <ul>
                                                    <li>200p</li>
                                                    <li>MOABs use 20p, BFBs and DDTs use 50p, and ZOMGs use 100p</li>
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
                    "topPath": {
                        "1": {
                            "name": "100 - Hard Thorns - $250",
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
                            "name": "200 - Heart of Thunder - $1,000",
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
                            "name": "300 - Druid of the Storm - $1,650",
                            "content": `
                                <ul>
                                    <li>gains tornado attack
                                        <ul>
                                            <li>0d, 30p, 2.5s, normal type</li>
                                            <li>cannot target blimps or lead</li>
                                            <li>sends back 100-200 units</li>
                                            <li>removes glue and frozen status</li>
                                            <li>note: damage can be buffed</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "4": {
                            "name": "400 - Ball Lightning - $4,500",
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
                            "name": "500 - Superstorm - $65,000",
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
                    "middlePath": {
                        "1": {
                            "name": "010 - Thorn Swarm - $250",
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
                            "name": "020 - Heart of Oak - $350",
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
                            "name": "030 - Druid of the Jungle - $850",
                            "content": `
                                <ul>
                                    <li>gains vine-grab attack
                                        <ul>
                                            <li>&#8734;r, 1.4s, targets strongest bloon</li>
                                            <li>can see past obstacles</li>
                                            <li>applies snared status
                                                <ul>
                                                    <li>1d + 13%d per 0.2s</li>
                                                    <li>fully pops the bloon</li>
                                                </ul>
                                            </li>
                                            <li>attack cooldown does not start until the previous target has been popped</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "4": {
                            "name": "040 - Jungle's Bounty - $2,800",
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
                            "name": "050 - Spirit of the Forest - $35,000",
                            "content": `
                                <ul>
                                    <li>thorn buffed
                                        <ul>
                                            <li>+13d (14d)</li>
                                        </ul>
                                    </li>
                                    <li>+$3,000 end of round income</li>
                                    <li>vine-grab buffed
                                        <ul>
                                            <li>time between grabs 0.3s, damages per 0.15s</li>
                                        </ul>
                                    </li>
                                    <li>gains brambles attack
                                        <ul>
                                            <li>&#8734;p, 55r zone, camo</li>
                                            <li>range increases by 6 units every 2s until the map is covered</li>
                                            <li>anywhere in range: 2d/0.5s, 10cd/0.5s, 10md/0.5s, sharp type</li>
                                            <li>within 100r: +1d (3d), +4cd (15cd), +4md (15md), sharp type</li>
                                            <li>within 50r: +1d (4d), +4cd (20cd), +4md (20md), sharp type</li>
                                            <li>note: as a damage-over-time, the damage cannot be buffed</li>
                                        </ul>
                                    </li>
                                    <li>gains jungle-lives ability (40s cooldown, 15s initial)
                                        <ul>
                                            <li>+25 lives</li>
                                        </ul>
                                    </li>
                                    <li>crosspath
                                        <ul>
                                            <li>150: brambles attack becomes normal type</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        }
                    },
                    "bottomPath": {
                        "1": {
                            "name": "001 - Druidic Reach - $100",
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
                            "name": "002 - Heart of Vengeance - $400",
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
                            "name": "003 - Druid of Wrath - $750",
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
                            "name": "004 - Poplust - $2,500",
                            "content": `
                                <ul>
                                    <li>gains poplust buff
                                        <ul>
                                            <li>affects druids in range, excluding self</li>
                                            <li>+15%p, +15% speed</li>
                                            <li>can stack (additively) up to 5 times total</li>
                                            <li>note that this is yet another speed buff, which also stacks multiplicatively with tiers 2 and 3</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "5": {
                            "name": "005 - Avatar of Wrath - $45,000",
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
                            <li>$1,200 (1,000 MM)</li>
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
                    "topPath": {
                        "1": {
                            "name": "100 - Bigger Radius - $400",
                            "content": `
                                <ul>
                                    <li>+8r (48r)</li>
                                </ul>
                            `
                        },
                        "2": {
                            "name": "200 - Jungle Drums - $1,500",
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
                            "name": "300 - Primary Training - $80",
                            "content": `
                                <ul>
                                    <li>gains primary-support
                                        <ul>
                                            <li>affects primary towers in range</li>
                                            <li>+1p, +10%r, increased projectile speed</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "4": {
                            "name": "400 - Primary Mentoring - $2,500",
                            "content": `
                                <ul>
                                    <li>primary-support buffed
                                        <ul>
                                            <li>+5r, free tier 1 upgrades, -10% ability cooldown time</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "5": {
                            "name": "500 - Primary Expertise - $25,000",
                            "content": `
                                <ul>
                                    <li>+7r (55r)</li>
                                    <li>primary-support buffed
                                        <ul>
                                            <li>+2p (+3 overall), free tier 2 upgrades, -10% ability cooldown time (-20% overall)</li>
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
                    "middlePath": {
                        "1": {
                            "name": "010 - Grow Blocker - $250",
                            "content": `
                                <ul>
                                    <li>applies antigrow status (cannot regrow) to bloons in range
                                        <ul>
                                            <li>&#8734;p</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "2": {
                            "name": "020 - Radar Scanner - $1,700",
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
                            "name": "030 - Monkey Intelligence Bureau - $7,000",
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
                            "name": "040 - Call to Arms - $21,500",
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
                            "name": "050 - Homeland Defense - $45,000",
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
                    "bottomPath": {
                        "1": {
                            "name": "001 - Monkey Business - $500",
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
                            "name": "002 - Monkey Commerce - $500",
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
                            "name": "003 - Monkey Town - $5,000",
                            "content": `
                                <ul>
                                    <li>gains bonus-eco buff
                                        <ul>
                                            <li>+10% bloon eco from bloon sends with positive eco, and -10% eco loss from bloon sends with negative eco</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "4": {
                            "name": "004 - Monkey City - $7,000",
                            "content": `
                                <ul>
                                    <li>+10r (50r)</li>
                                    <li>bonus-eco buffed
                                        <ul>
                                            <li>+20% eco gain / -20% eco loss</li>
                                        </ul>
                                    </li>
                                    <li>gains auto-collect: automatically collects all collectable items dropped within range</li>
                                </ul>
                            `
                        },
                        "5": {
                            "name": "005 - Monkeyopolis - $20,000 + $5,000 * Banana Farm",
                            "content": `
                                <ul>
                                    <li>farms in range are sacrificed to the village when upgraded</li>
                                    <li>gains income
                                        <ul>
                                            <li>$2400 + $600 per $2,000 spent on sacrifices per round</li>
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
                    "topPath": {
                        "1": {
                            "name": "100 - Increased Production - $550",
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
                            "name": "200 - Greater Production - $550",
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
                            "name": "300 - Banana Plantation - $2,600",
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
                            "name": "400 - Banana Research Facility - $16,000",
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
                            "name": "500 - Banana Central - $66,000",
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
                    "middlePath": {
                        "1": {
                            "name": "010 - Long Life Bananas - $200",
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
                            "name": "020 - Valuable Bananas - $700",
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
                            "name": "030 - Monkey Bank - $5,100",
                            "content": `
                                <ul>
                                    <li>banana attack buffed
                                        <ul>
                                            <li>+$50 income ($150)</li>
                                            <li>money is held in the bank instead of being emitted as bananas, to be collected at any time</li>
                                            <li>$400 end of round income</li>
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
                            "name": "040 - IMF loan - $7,500",
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
                            "name": "050 - Monkey-Nomics - $45,000",
                            "content": `
                                <ul>
                                    <li>banana attack buffed
                                        <ul>
                                            <li>+$10,000 capacity ($30,000)</li>
                                        </ul>
                                    </li>
                                    <li>loan replaced by grant (60s cooldown, 20s initial)
                                        <ul>
                                            <li>gain $20k, which does not need to be repaid</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        }
                    },
                    "bottomPath": {
                        "1": {
                            "name": "001 - EZ Collect - $250",
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
                            "name": "002 - Banana Salvage - $200",
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
                            "name": "003 - Marketplace - $2,800",
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
                            "name": "004 - Central Market - $13,000",
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
                            "name": "005 - Monkey Wall Street - $46,000",
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
                            <li>$800 (1,000 MM)</li>
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
                    "topPath": {
                        "1": {
                            "name": "100 - Bigger Stacks - $700",
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
                            "name": "200 - White Hot Spikes - $600",
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
                            "name": "300 - Spiked Balls - $2,500",
                            "content": `
                                <ul>
                                    <li>spikes buffed
                                        <ul>
                                            <li>+1d (2d), +6cd (8cd), +1fd (+3fd), +4p (14p)
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
                            "name": "400 - Spiked Mines - $9,500",
                            "content": `
                                <ul>
                                    <li>spikes buffed
                                        <ul>
                                            <li>at 100%p and on expire: explosion
                                                <ul>
                                                    <li>10d, 2cd (12cd), 1fd, 40p, 19r blast, explosion type</li>
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
                            "name": "500 - Super Mines - $110,000",
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
                    "middlePath": {
                        "1": {
                            "name": "010 - Faster Production - $600",
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
                            "name": "020 - Even Faster Production - $700",
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
                            "name": "030 - MOAB SHREDR - $2,500",
                            "content": `
                                <ul>
                                    <li>spikes buffed
                                        <ul>
                                            <li>+4md (5md)
                                                <ul>
                                                    <li>total: 25 moab damage per spike
                                                        <ul>
                                                            <li>103: 50 moab damage per spike</li>
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
                            "name": "040 - Spike Storm - $5,000",
                            "content": `
                                <ul>
                                    <li>gains spike-storm ability (40s cooldown, 1s duration, battle ready)
                                        <ul>
                                            <li>&#8734;r, 0.005s
                                                <ul>
                                                    <li>note: this can be buffed by the xx2 passive ability</li>
                                                </ul>
                                            </li>
                                            <li>places storm-spikes randomly on track
                                                <ul>
                                                    <li>1d, 4md (5md), 5p, sharp type
                                                        <ul>
                                                            <li>total: 25md per spike</li>
                                                        </ul>
                                                    </li>
                                                    <li>10-13s lifetime</li>
                                                    <li>not affected by external pierce buffs</li>
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
                            "name": "050 - Carpet of Spikes - $40,000",
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
                                                    <li>total: 30 damage per spike, 45 moab
                                                        <ul>
                                                            <li>150: 60 damage per spike, 80 moab</li>
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
                    "bottomPath": {
                        "1": {
                            "name": "001 - Long Reach - $150",
                            "content": `
                                <ul>
                                    <li>spikes buffed
                                        <ul>
                                            <li>+8r (42r), 100s lifetime</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "2": {
                            "name": "002 - Smart Spikes - $400",
                            "content": `
                                <ul>
                                    <li>gains extra targeting options
                                        <ul>
                                            <li>close: closest point to the tower in range</li>
                                            <li>far: furthest point from the tower in range
                                                <ul>
                                                    <li>note: the track has discrete points so there is usually only one furthest point; it is impossible to tell in advance whether it will be at the "start" or "end" of the visible range</li>
                                                </ul>
                                            </li>
                                            <li>smart: point closest to the exit, on active paths only</li>
                                        </ul>
                                    </li>
                                    <li>passive ability (1 round cooldown): 4x faster (0.4375s) for 2.5s</li>
                                </ul>
                            `
                        },
                        "3": {
                            "name": "003 - Long Life Spikes - $1,00",
                            "content": `
                                <ul>
                                    <li>spikes buffed
                                        <ul>
                                            <li>170s lifetime</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "4": {
                            "name": "004 - Deadly Spikes - $3,500",
                            "content": `
                                <ul>
                                    <li>spikes buffed
                                        <ul>
                                            <li>+1d (2d), 240s lifetime
                                                <ul>
                                                    <li>total: 10 damage per spike
                                                        <ul>
                                                            <li>104: 20 damage per spike</li>
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
                            "name": "005 - Perma-Spike - $30,000",
                            "content": `
                                <ul>
                                    <li>spikes buffed
                                        <ul>
                                            <li>+8d (10d), +45p (50p), 3.0s, 300s lifetime
                                                <ul>
                                                    <li>total: 500 damage per spike</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>crosspath
                                        <ul>
                                            <li>105: +40p (90p)
                                                <ul>
                                                    <li>total: 900 damage per spike</li>
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
                            <li>$450 (1,000 MM)</li>
                            <li>size: 7 radius</li>
                            <li>placeable on: land</li>
                            <li>nail attack
                                <ul>
                                    <li>1d, 3p, 40r, 0.7s, sharp type</li>
                                </ul>
                            </li>
                        </ul>
                    `,
                    "topPath": {
                        "1": {
                            "name": "100 - Sentry Gun - $500",
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
                            "name": "200 - Faster Engineering - $400",
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
                            "name": "300 - Sprockets - $525",
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
                            "name": "400 - Sentry Expert - $2,500",
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
                            "name": "500 - Sentry Champion - $32,000",
                            "content": `
                                <ul>
                                    <li>build-sentry buffed: places champion-sentry
                                        <ul>
                                            <li>plasma attack
                                                <ul>
                                                    <li>2d, 5p, 50r, 0.044s, plasma type</li>
                                                    <li>on expire: selfdestruct attack
                                                        <ul>
                                                            <li>200d, 100p, 45r blast, plasma type</li>
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
                    "middlePath": {
                        "1": {
                            "name": "010 - Larger Service Area - $250",
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
                            "name": "020 - Deconstruction - $350",
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
                            "name": "030 - Cleansing Foam - $800",
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
                            "name": "040 - Overclock - $13,500",
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
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "5": {
                            "name": "050 - Ultraboost - $100,000",
                            "content": `
                                <ul>
                                    <li>nail buffed
                                        <ul>
                                            <li>+15p (30p)</li>
                                        </ul>
                                    </li>
                                    <li>overclock replaced by ultraboost (20s cooldown, battle ready)
                                        <ul>
                                            <li>applies overclock buff as before</li>
                                            <li>additionally applies a permanent 8% reload buff, which stacks additively up to 5 times</li>
                                            <li>this means that after the first ultraboost, the tower has a 92% reload multiplier, after the second it is replaced by 84%, and so on down to 60% (1.667x faster)</li>
                                            <li>in the case of villages, this is +2.5% to range, then 5%, etc, up to +25%r</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        }
                    },
                    "bottomPath": {
                        "1": {
                            "name": "001 - Oversize Nails - $450",
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
                            "name": "002 - Pin - $220",
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
                            "name": "003 - Double Gun - $500",
                            "content": `
                                <ul>
                                    <li>nail buffed
                                        <ul>
                                            <li>50%s (0.35s), -3p (5p) [BUG]</li>
                                        </ul>
                                    </li>
                                </ul>
                            `
                        },
                        "4": {
                            "name": "004 - Bloon Trap - $3,500",
                            "content": `
                                <ul>
                                    <li>gains build-trap attack
                                        <ul>
                                            <li>places a trap on the closest point of track in range
                                                <ul>
                                                    <li>1200p, 9.0s</li>
                                                    <li>can only place a trap after a deploy time of 2.1s of collecting the previous trap
                                                        <ul>
                                                            <li>note: the first trap is placed immediately</li>
                                                        </ul>
                                                    </li>
                                                    <li>pops any visible non-MOAB-class bloon up to its pierce limit</li>
                                                    <li>once full, can be collected manually (100r) or automatically (5s)
                                                        <ul>
                                                            <li>when collected, gives $2 times the amount of natural RBE collected</li>
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
                            "name": "005 - XXXL Trap - $54,000",
                            "content": `
                                <ul>
                                    <li>trap buffed
                                        <ul>
                                            <li>10,000p, 1.5s</li>
                                            <li>deploy time 1.5s</li>
                                            <li>cash per trap increased to natural bloon RBE captured*0.75</li>
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
                        <li>gains rapid-shot ability (45s cooldown, 6.2s duration, 11.25s initial)
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
                                <li>+2md (3ms)</li>
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
                    "1": undefined,
                    "2": ``,
                    "3": ``,
                    "4": ``,
                    "5": ``,
                    "6": ``,
                    "7": ``,
                    "8": ``,
                    "9": ``,
                    "10": ``,
                    "11": ``,
                    "12": ``,
                    "13": ``,
                    "14": ``,
                    "15": ``,
                    "16": ``,
                    "17": ``,
                    "18": ``,
                    "19": ``,
                    "20": ``
                }
            },
            "gwendolyn": {
                "name": "gwendolyn",
                "data": {
                    "1": undefined,
                    "2": ``,
                    "3": ``,
                    "4": ``,
                    "5": ``,
                    "6": ``,
                    "7": ``,
                    "8": ``,
                    "9": ``,
                    "10": ``,
                    "11": ``,
                    "12": ``,
                    "13": ``,
                    "14": ``,
                    "15": ``,
                    "16": ``,
                    "17": ``,
                    "18": ``,
                    "19": ``,
                    "20": ``
                }
            },
            "scientistGwendolyn": {
                "name": "Scientist Gwendolyn",
                "data": {
                    "1": undefined,
                    "2": ``,
                    "3": ``,
                    "4": ``,
                    "5": ``,
                    "6": ``,
                    "7": ``,
                    "8": ``,
                    "9": ``,
                    "10": ``,
                    "11": ``,
                    "12": ``,
                    "13": ``,
                    "14": ``,
                    "15": ``,
                    "16": ``,
                    "17": ``,
                    "18": ``,
                    "19": ``,
                    "20": ``
                }
            },
            "obyn": {
                "name": "Obyn Greenfoot",
                "data": {
                    "1": undefined,
                    "2": ``,
                    "3": ``,
                    "4": ``,
                    "5": ``,
                    "6": ``,
                    "7": ``,
                    "8": ``,
                    "9": ``,
                    "10": ``,
                    "11": ``,
                    "12": ``,
                    "13": ``,
                    "14": ``,
                    "15": ``,
                    "16": ``,
                    "17": ``,
                    "18": ``,
                    "19": ``,
                    "20": ``
                }
            },
            "oceanObyn": {
                "name": "Ocean Obyn",
                "data": {
                    "1": undefined,
                    "2": ``,
                    "3": ``,
                    "4": ``,
                    "5": ``,
                    "6": ``,
                    "7": ``,
                    "8": ``,
                    "9": ``,
                    "10": ``,
                    "11": ``,
                    "12": ``,
                    "13": ``,
                    "14": ``,
                    "15": ``,
                    "16": ``,
                    "17": ``,
                    "18": ``,
                    "19": ``,
                    "20": ``
                }
            },
        }
    }
};

async function getDataJSON() {
    /*const requestURL =
    "https://raw.githubusercontent.com/emilplane/b2popology/main/json/data.json";
    const request = new Request(requestURL);
	
    const response = await fetch(request);
    data = await response.json();*/
};

let urlParams = new URLSearchParams(window.location.search);

const buttons = {
    "primary": {
        "selector": document.querySelector(".primaryButton"),
        "defaultStyle": "color:black; background-color:var(--primaryColorLight3);",
        "selectedStyle": "color:white; background-color:var(--primaryColorMain);",
        "towerBar": document.querySelector(".primaryTowerBar"),
    },
    "military": {
        "selector": document.querySelector(".militaryButton"),
        "defaultStyle": "color:black; background-color:var(--militaryColorLight3);",
        "selectedStyle": "color:white; background-color:var(--militaryColorMain);",
        "towerBar": document.querySelector(".militaryTowerBar"),
    },
    "magic": {
        "selector": document.querySelector(".magicButton"),
        "defaultStyle": "color:black; background-color:var(--magicColorLight3);",
        "selectedStyle": "color:white; background-color:var(--magicColorMain);",
        "towerBar": document.querySelector(".magicTowerBar"),
    },
    "support": {
        "selector": document.querySelector(".supportButton"),
        "defaultStyle": "color:black; background-color:var(--supportColorLight3);",
        "selectedStyle": "color:white; background-color:var(--supportColorMain);",
        "towerBar": document.querySelector(".supportTowerBar"),
    },
    "heroes": {
        "selector": document.querySelector(".heroesButton"),
        "defaultStyle": "color:black; background-color:var(--heroesColorLight3);",
        "selectedStyle": "color:white; background-color:var(--heroesColorMain);",
        "towerBar": document.querySelector(".heroesTowerBar"),
    }
}

//Tower Buttons
const dartMonkeyButton = document.querySelector(".dartMonkeyButton")
const boomerangMonkeyButton = document.querySelector(".boomerangMonkeyButton")
const bombShooterButton = document.querySelector(".bombShooterButton")
const tackShooterButton = document.querySelector(".tackShooterButton")
const iceMonkeyButton = document.querySelector(".iceMonkeyButton")
const glueGunnerButton = document.querySelector(".glueGunnerButton")

const sniperMonkeyButton = document.querySelector(".sniperMonkeyButton")
const monkeySubButton = document.querySelector(".monkeySubButton")
const monkeyBuccaneerButton = document.querySelector(".monkeyBuccaneerButton")
const monkeyAceButton = document.querySelector(".monkeyAceButton")
const heliPilotButton = document.querySelector(".heliPilotButton")
const mortarMonkeyButton = document.querySelector(".mortarMonkeyButton")
const dartlingGunnerButton = document.querySelector(".dartlingGunnerButton")

const wizardMonkeyButton = document.querySelector(".wizardMonkeyButton")
const superMonkeyButton = document.querySelector(".superMonkeyButton")
const ninjaMonkeyButton = document.querySelector(".ninjaMonkeyButton")
const alchemistButton = document.querySelector(".alchemistButton")
const druidButton = document.querySelector(".druidButton")

const monkeyVillageButton = document.querySelector(".monkeyVillageButton")
const bananaFarmButton = document.querySelector(".bananaFarmButton")
const spikeFactoryButton = document.querySelector(".spikeFactoryButton")
const engineerMonkeyButton = document.querySelector(".engineerMonkeyButton")

const quincyButton = document.querySelector(".quincyButton")
const cyberQuincyButton = document.querySelector(".cyberQuincyButton")
const gwendolynButton = document.querySelector(".gwendolynButton")
const scientistGwendolynButton = document.querySelector(".scientistGwendolynButton")
const obynButton = document.querySelector(".obynButton")
const oceanObynButton = document.querySelector(".oceanObynButton")

let selectedButtons = {};

let selectedCategory = "primary";
let selectedPrimaryCategory = "dartMonkey"
let selectedMilitaryCategory = "sniperMonkey"
let selectedMagicCategory = "wizardMonkey"
let selectedSupportCategory = "monkeyVillage"
let selectedHeroesCategory = "quincy"

let initialized = false;

let urlSection; let urlEntry;

const towerAttributeNames = {
	unlockCost: "Unlock Cost",
	towerCost: "Tower Cost", 
	placements: "Placeable on",
	footprint: "Tower Footprint"
}

let nkapiHoms;
async function getNkapiHomsJSON() {
	const requestURL = "https://data.ninjakiwi.com/battles2/homs?";
	const request = new Request(requestURL);
	
	const response = await fetch(request);
	nkapiHoms = await response.json();
};

let HTMLLocation; let IDName;



function generateHTMLFromData() {
	for (const section in data) {
		for (const entry in data[section]["entries"]) {
			//Create divs for entries
			HTMLLocation = document.getElementById("statsSection");
			IDName = entry + "Stats";
			HTMLLocation.insertAdjacentHTML("beforeend", "<div id=" + IDName + "></div>");

            let tierHTML;
			switch (data[section]["type"]) {   
                case "legacy":
                    for (const path in data[section].entries[entry].data)
                        if (path != "base") {
                            for (const tier in data[section].entries[entry].data[path]) {
                                HTMLString = `
                                    <h3>${data[section].entries[entry].data[path][tier].name}</h3>
                                    <div class='${section}Section' style='display:flex;flex-wrap:wrap'>
                                        <div style='flex-basis:200px;flex-grow:1'>
                                            <div>${data[section].entries[entry].data[path][tier].content}</div>
                                        </div>
                                    </div>
                                `
                                if (tierHTML == undefined) {
                                    tierHTML = HTMLString
                                } else {
                                    tierHTML = tierHTML + HTMLString
                                }
                            }
                        }
                    
                    document.getElementById(IDName).insertAdjacentHTML("beforeend", `
                        <h1>${data[section]["entries"][entry]["name"]}</h1>
                        <div class='${section}Section' style='display:flex;flex-wrap:wrap'>
                            <div style='flex-basis:200px;flex-grow:1'>
                                <div>${data[section].entries[entry].data.base}</div>
                            </div>
                            <div class='towerPortraitContainer' id='${entry}item2' class='towerPortrait' style='flex-grow:0;padding:0 20px'>
                                <input class='towerPortrait' type='image' alt='${data[section]["entries"][entry]["name"]} Image' 
                                    src='media/Tower Portraits/${entry}/base/${entry}Portrait.png'>
                            </div>
                        </div>
                        ${tierHTML}
                    `)
                    break;
                case "legacy-heroes": 
                    let level = 0;
                        for (const tier in data[section].entries[entry].data) {
                            level = level + 1
                            if (level != 1) {
                                HTMLString = `
                                <h3>Level ${level}</h3>
                                <div class='${section}Section' style='display:flex;flex-wrap:wrap'>
                                    <div style='flex-basis:200px;flex-grow:1'>
                                        <div>${data[section].entries[entry].data[tier]}</div>
                                    </div>
                                </div>
                            `
                                if (tierHTML == undefined) {
                                    tierHTML = HTMLString
                                } else {
                                    tierHTML = tierHTML + HTMLString
                                }
                            }
                        }
                    if (tierHTML == undefined) {
                        tierHTML = ``
                    }
                    let firstLevelHTML;
                    if (data[section].entries[entry].data[1] == undefined) {
                        firstLevelHTML = `<h4>Coming Soon!</h4>`
                    } else {
                        firstLevelHTML = data[section].entries[entry].data[1]
                    }
                    document.getElementById(IDName).insertAdjacentHTML("beforeend", `
                        <h1>${data[section]["entries"][entry]["name"]}</h1>
                        <div class='${section}Section' style='display:flex;flex-wrap:wrap'>
                            <div style='flex-basis:200px;flex-grow:1'>
                                <div>${firstLevelHTML}</div>
                            </div>
                            <div class='towerPortraitContainer' id='${entry}item2' class='towerPortrait' style='flex-grow:0;padding:0 20px'>
                                <input class='towerPortrait' type='image' alt='${data[section]["entries"][entry]["name"]} Image' 
                                    src='media/Placeholder/placeholder.png'>
                            </div>
                        </div>
                        ${tierHTML}
                    `)
                    break;
            }
		}
	}
}

function changeCategoryButtons() {
    for (category in data) {
        buttons[category].selector.setAttribute("style", buttons[category].defaultStyle)
        buttons[category].towerBar.setAttribute("style", "display:none");
        for (tower in data[category].entries) {
            document.querySelector(`.${tower}Button`).setAttribute("style", buttons[category].defaultStyle);
        }
    }

	for (const section in data) {
		for (const entry in data[section]["entries"]) {
			document.getElementById(entry + "Stats").style.display = "none";
		}
	}

	let element = document.querySelector(".categoryBar");
	element.setAttribute("style", "display:flex");
	element = document.querySelector(".selectTower");
	element.setAttribute("style", "display:flex");

    buttons[selectedCategory].selector.setAttribute("style", buttons[selectedCategory].selectedStyle);
    buttons[selectedCategory].towerBar.setAttribute("style", "display:flex");
    
    let selectedTower;
    switch (selectedCategory) {
        case "primary": selectedTower = selectedPrimaryCategory; break
        case "military": selectedTower = selectedMilitaryCategory; break
        case "magic": selectedTower = selectedMagicCategory; break
        case "support": selectedTower = selectedSupportCategory; break
        case "heroes": selectedTower = selectedHeroesCategory; break
    }
    document.querySelector(`.${selectedTower}Button`).setAttribute("style", buttons[selectedCategory].selectedStyle)
    element = document.getElementById(selectedTower + "Stats");
    element.style.display = "block";

	urlParams.set('section', selectedCategory);
	urlParams.set('primary', selectedPrimaryCategory);
	urlParams.set('military', selectedMilitaryCategory);
	urlParams.set('magic', selectedMagicCategory);
	urlParams.set('support', selectedSupportCategory);
    urlParams.set('heroes', selectedHeroesCategory);
	history.replaceState(null, null, "?" + urlParams.toString());
};

function createButtonListeners() {
	//Tower Category Button Listeners

	buttons.primary.selector.addEventListener("click", () => {
		selectedCategory = "primary";
		changeCategoryButtons();
	})

	buttons.military.selector.addEventListener("click", () => {
		selectedCategory = "military"
		changeCategoryButtons();
	})

	buttons.magic.selector.addEventListener("click", () => {
		selectedCategory = "magic"
		changeCategoryButtons();
	})

	buttons.support.selector.addEventListener("click", () => {
		selectedCategory = "support"
		changeCategoryButtons();
	})

    buttons.heroes.selector.addEventListener("click", () => {
        selectedCategory = "heroes"
        changeCategoryButtons();
    })

	//Primary Button Listeners
	dartMonkeyButton.addEventListener("click", () => {
		selectedPrimaryCategory = "dartMonkey";
		changeCategoryButtons();
	})

	boomerangMonkeyButton.addEventListener("click", () => {
		selectedPrimaryCategory = "boomerangMonkey";
		changeCategoryButtons();
	})

	bombShooterButton.addEventListener("click", () => {
		selectedPrimaryCategory = "bombShooter";
		changeCategoryButtons();
	})

	tackShooterButton.addEventListener("click", () => {
		selectedPrimaryCategory = "tackShooter";
		changeCategoryButtons();
	})

	iceMonkeyButton.addEventListener("click", () => {
		selectedPrimaryCategory = "iceMonkey";
		changeCategoryButtons();
	})

	glueGunnerButton.addEventListener("click", () => {
		selectedPrimaryCategory = "glueGunner";
		changeCategoryButtons();
	})

	//Military Button Listeners
	sniperMonkeyButton.addEventListener("click", () => {
		selectedMilitaryCategory = "sniperMonkey";
		changeCategoryButtons();
	})

	monkeySubButton.addEventListener("click", () => {
		selectedMilitaryCategory = "monkeySub";
		changeCategoryButtons();
	})

	monkeyBuccaneerButton.addEventListener("click", () => {
		selectedMilitaryCategory = "monkeyBuccaneer";
		changeCategoryButtons();
	})

	monkeyAceButton.addEventListener("click", () => {
		selectedMilitaryCategory = "monkeyAce";
		changeCategoryButtons();
	})

	heliPilotButton.addEventListener("click", () => {
		selectedMilitaryCategory = "heliPilot";
		changeCategoryButtons();
	})

	mortarMonkeyButton.addEventListener("click", () => {
		selectedMilitaryCategory = "mortarMonkey";
		changeCategoryButtons();
	})

	dartlingGunnerButton.addEventListener("click", () => {
		selectedMilitaryCategory = "dartlingGunner";
		changeCategoryButtons();
	})

	//Magic Button Listeners
	wizardMonkeyButton.addEventListener("click", () => {
		selectedMagicCategory = "wizardMonkey";
		changeCategoryButtons();
	})

	superMonkeyButton.addEventListener("click", () => {
		selectedMagicCategory = "superMonkey";
		changeCategoryButtons();
	})

	ninjaMonkeyButton.addEventListener("click", () => {
		selectedMagicCategory = "ninjaMonkey";
		changeCategoryButtons();
	})

	alchemistButton.addEventListener("click", () => {
		selectedMagicCategory = "alchemist";
		changeCategoryButtons();
	})

	druidButton.addEventListener("click", () => {
		selectedMagicCategory = "druid";
		changeCategoryButtons();
	})

	//Support Button Listeners
	monkeyVillageButton.addEventListener("click", () => {
		selectedSupportCategory = "monkeyVillage";
		changeCategoryButtons();
	})

	bananaFarmButton.addEventListener("click", () => {
		selectedSupportCategory = "bananaFarm";
		changeCategoryButtons();
	})

	spikeFactoryButton.addEventListener("click", () => {
		selectedSupportCategory = "spikeFactory";
		changeCategoryButtons();
	})

	engineerMonkeyButton.addEventListener("click", () => {
		selectedSupportCategory = "engineerMonkey";
		changeCategoryButtons();
	})

    quincyButton.addEventListener("click", () => {
        selectedHeroesCategory = "quincy";
        changeCategoryButtons();
    })

    cyberQuincyButton.addEventListener("click", () => {
        selectedHeroesCategory = "cyberQuincy";
        changeCategoryButtons();
    })

    gwendolynButton.addEventListener("click", () => {
        selectedHeroesCategory = "gwendolyn";
        changeCategoryButtons();
    })

    scientistGwendolynButton.addEventListener("click", () => {
        selectedHeroesCategory = "scientistGwendolyn";
        changeCategoryButtons();
    })

    obynButton.addEventListener("click", () => {
        selectedHeroesCategory = "obyn";
        changeCategoryButtons();
    })

    oceanObynButton.addEventListener("click", () => {
        selectedHeroesCategory = "oceanObyn";
        changeCategoryButtons();
    })
};

async function main() {
	//Get Values
	urlSection = urlParams.get('section')
	urlPrimary = urlParams.get('primary')
	urlMilitary = urlParams.get('military')
	urlMagic = urlParams.get('magic')
	urlSupport = urlParams.get('support')
    urlHeroes = urlParams.get('heroes')

	if (urlSection != null) {
		selectedCategory = urlSection;
	}
	if (urlPrimary != null) {
		selectedPrimaryCategory = urlPrimary;
	}
	if (urlMilitary != null) {
		selectedMilitaryCategory = urlMilitary;
	}
	if (urlMagic != null) {
		selectedMagicCategory = urlMagic;
	}
	if (urlSupport != null) {
		selectedSupportCategory = urlSupport;
	}
    if (urlHeroes != null) {
        selectedHeroesCategory = urlHeroes;
    }

	await getDataJSON();

	generateHTMLFromData();

	changeCategoryButtons();

	createButtonListeners();

	await getNkapiHomsJSON();
};

main();