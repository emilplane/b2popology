let towers = {
    "towers": {
        "primary": {
            "dartMonkey": {
                "displayName": "Dart Monkey"
            },
            "boomerangMonkey": {
                "displayName": "Boomerang Monkey"
            },
            "bombShooter": {
                "displayName": "Bomb Shooter"
            },
            "tackShooter": {
                "displayName": "Tack Shooter"
            },
            "iceMonkey": {
                "displayName": "Ice Monkey"
            },
            "glueGunner": {
                "displayName": "Glue Gunner"
            }
        },
        "military": {
            "sniperMonkey": {
                "displayName": "Sniper Monkey"
            },
            "monkeySub": {
                "displayName": "Monkey Sub"
            },
            "monkeyBuccaneer": {
                "displayName": "Monkey Buccaneer"
            },
            "monkeyAce": {
                "displayName": "Monkey Ace"
            },
            "heliPilot": {
                "displayName": "Heli Pilot"
            },
            "mortarMonkey": {
                "displayName": "Mortar Monkey"
            },
            "dartlingGunner": {
                "displayName": "Dartling Gunner"
            }
        },
        "magic": {
            "ninjaMonkey": {
                "displayName": "Ninja Monkey"
            },
            "superMonkey": {
                "displayName": "Super Monkey"
            },
            "ninjaMonkey": {
                "displayName": "Ninja Monkey"
            },
            "alchemist": {
                "displayName": "Alchemist"
            },
            "druid": {
                "displayName": "Druid"
            }
        },
        "support": {
            "monkeyVillage": {
                "displayName": "Monkey Village"
            },
            "bananaFarm": {
                "displayName": "Banana Farm"
            },
            "spikeFactory": {
                "displayName": "Spike Factory"
            },
            "engineerMonkey": {
                "displayName": "Engineer Monkey"
            }
        }
    },
    "heroes": {
        "quincy": {
            "displayName": "Quincy"
        },
        "cyberQuincy": {
            "displayName": "Cyber Quincy"
        },
        "Gwendolin": {
            "displayName": "Gwendolin"
        },
        "scientistGwendolin": {
            "displayName": "Scientist Gwendolin"
        },
        "obyn": {
            "displayName": "Obyn Greenfoot"
        },
        "oceanObyn": {
            "displayName": "Ocean Obyn"
        },
        "strikerJones": {
            "displayName": "Striker Jones"
        },
        "bikerBones": {
            "displayName": "Biker Bones"
        },
        "captainChurchill": {
            "displayName": "Captain Churchill"
        },
        "sentaiChurchill": {
            "displayName": "Sentai Churchill"
        },
        "benjamin": {
            "displayName": "Benjamin"
        },
        "djBenjammin": {
            "displayName": "DJ Benjammin'"
        },
        "ezili": {
            "displayName": "Ezili"
        },
        "smudgeCattEzili": {
            "displayName": "Smudge Catt Ezili"
        },
        "patFusty": {
            "displayName": "Pat Fusty"
        },
        "fustyTheSnowman": {
            "displayName": "Fusty The Snowman"
        },
        "agentJericho": {
            "displayName": "Agent Jericho"
        },
        "highwaymanJericho": {
            "displayName": "Highwayman Jericho"
        },
        "starCaptainJericho": {
            "displayName": "Star Captain Jericho"
        },
        "adora": {
            "displayName": "Adora"
        },
        "fateweaverAdora": {
            "displayName": "Fateweaver Adora"
        },
    }
}

function weightedRandom(itemsInput, weightsInput) {
    let items = structuredClone(itemsInput)
    let weights = structuredClone(weightsInput)
    let i;

    for (i = 1; i < weights.length; i++) {
        weights[i] += weights[i - 1];
    }

    let random = Math.random() * weights[weights.length - 1];

    for (i = 0; i < weights.length; i++) {
        if (weights[i] >= random) {
            break;
        }
    }

    return items[i];
}

function generateRandomTowers(towerWeightInput) {
    let towerList = []
    let towerWeights = []
    let heroList = []
    let heroWeights = []

    let includeHero = false

    if (Math.random()*3.5 < 1) {
        includeHero = true
    }

    for (let category in towers.towers) {
        for (let tower in towers.towers[category]) {
            towerList.push(tower)
            towerWeights.push(3)
            for (let weight in towerWeightInput) {
                if (towerWeightInput[weight][0] == tower) {
                    towerWeights[towerWeights.length-1] = towerWeightInput[weight][1]
                }
            }
        }
    }

    for (let hero in towers.heroes) {
        heroList.push(hero)
        heroWeights.push(10)
        for (let weight in towerWeightInput) {
            if (towerWeightInput[weight][0] == hero) {
                heroWeights[heroWeights.length-1] = towerWeightInput[weight][1]
            }
        }
    }

    let randomLoadout = {
        "towers": [],
        "heroes": []
    }

    addTower()
    if (includeHero) {
        addHero()
    } else {
        addTower()
    }

    function addTower() {
        let selectedTower = weightedRandom(towerList, towerWeights)
        for (let index in randomLoadout.towers) {
            while (randomLoadout.towers[index] == selectedTower) {
                selectedTower = weightedRandom(towerList, towerWeights)
            }
        }
        randomLoadout.towers.push(selectedTower)
    }

    function addHero() {
        let selectedHero = weightedRandom(heroList, heroWeights)
        for (let index in randomLoadout.towers) {
            while (randomLoadout.heroes[index] == selectedHero) {
                selectedHero = weightedRandom(heroList, heroWeights)
            }
        }
        randomLoadout.heroes.push(selectedHero)
    }

    return randomLoadout
}

function findDisplayName(input) {
    for (let category in towers.towers) {
        for (let tower in towers.towers[category]) {
            if (input == tower) {return towers.towers[category][tower].displayName}
        }
    }
    for (let hero in towers.heroes) {
        if (input == hero) {return towers.heroes[hero].displayName}
    }
    return input
}

function putRandomTowers() {
    let randomLoadout = generateRandomTowers(
        [
            ["dartMonkey", 3], ["boomerangMonkey", 3], ["bombShooter", 3], ["tackShooter", 3], ["iceMonkey", 3], ["glueGunner", 1],
            ["sniperMonkey", 3], ["monkeySub", 4], ["monkeyBuccaneer", 3], ["monkeyAce", 3], ["heliPilot", 3], ["mortarMonkey", 3], ["dartlingGunner", 3],
            ["wizardMonkey", 4], ["superMonkey", 2], ["ninjaMonkey", 3], ["alchemist", 3], ["druid", 3],
            ["monkeyVillage", 1], ["bananaFarm", 5], ["spikeFactory", 3], ["engineerMonkey", 3],
            ["fateweaverAdora", 2], ["starCaptainJericho", 2]
        ]
    )

    let i = 0
    document.getElementById("outputTowers").innerText = ""
    let outputList = []
    for (let hero in randomLoadout.heroes) {
        outputList.push(randomLoadout.heroes[hero])
    }
    for (let tower in randomLoadout.towers) {
        outputList.push(randomLoadout.towers[tower])
    }
    for (let entry in outputList) {
        let afterString = ","
        if (i++ > 1) {
            afterString = ""
        }
        document.getElementById("outputTowers").innerText += ` ${findDisplayName(outputList[entry])}${afterString}`
        i++
    }
}

document.getElementById("button").addEventListener("click", () => {
    putRandomTowers()
})
putRandomTowers()