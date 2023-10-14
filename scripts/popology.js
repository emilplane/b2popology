const towerDirectory = [
    {
        "name": "primary", 
        "displayName": "Primary",
        "type": "tower", 
        "data": [
            {
                "name": "dartMonkey", 
                "displayName": "Dart Monkey",
                "enabled": true
            },
            {
                "name": "boomerangMonkey",
                "displayName": "Boomerang Monkey",
                "enabled": true
            },
            {
                "name": "bombShooter",
                "displayName": "Bomb Shooter",
                "enabled": true
            },
            {
                "name": "tackShooter",
                "displayName": "Tack Shooter",
                "enabled": true
            },
            {
                "name": "iceMonkey",
                "displayName": "Ice Monkey",
                "enabled": true
            },
            {
                "name": "glueGunner",
                "displayName": "Glue Gunner",
                "enabled": true
            }
        ]
    },
    {
        "name": "military", 
        "displayName": "Military",
        "type": "tower", 
        "data": [
            {
                "name": "sniperMonkey",
                "displayName": "Sniper Monkey",
                "enabled": true
            },
            {
                "name": "monkeySub",
                "displayName": "Monkey Sub",
                "enabled": true
            },
            {
                "name": "monkeyBuccaneer",
                "displayName": "Monkey Buccaneer",
                "enabled": true
            },
            {
                "name": "monkeyAce",
                "displayName": "Monkey Ace",
                "enabled": true
            },
            {
                "name": "heliPilot",
                "displayName": "Heli Pilot",
                "enabled": true
            },
            {
                "name": "mortarMonkey",
                "displayName": "Mortar Monkey",
                "enabled": true
            },
            {
                "name": "dartlingGunner",
                "displayName": "Dartling Gunner",
                "enabled": true
            }
        ]
    }
]

function updatePage() {
    let categoryHTML = ``;
    let categoryPosition;
    for (categoryNumber in towerDirectory) {
        if (category == towerDirectory[categoryNumber].name) {
            categoryPosition = categoryNumber
            categoryHTML = categoryHTML + `<option value="${towerDirectory[categoryNumber].name}" selected>${towerDirectory[categoryNumber].displayName}</option>`
        } else {
            categoryHTML = categoryHTML + `<option value="${towerDirectory[categoryNumber].name}">${towerDirectory[categoryNumber].displayName}</option>`
        }
    }

    let towerHTML = ``;
    for (towerNumber in towerDirectory[categoryPosition].data) {
        towerHTML = towerHTML + `<option value="${towerDirectory[categoryPosition].data[towerNumber].name}">${towerDirectory[categoryPosition].data[towerNumber].displayName}</option>`
    }

    document.getElementById("configurationBar").innerHTML = (`
        <div class="configurationBarTextSelectorWrapper">
            <h5>Category:</h5>
            <select id="categorySelect">
                ${categoryHTML}
            </select>
        </div>
        <div class="configurationBarTextSelectorWrapper">
            <h5>Tower:</h5>
            <select id="pageSelect">
                ${towerHTML}
            </select>
        </div>
        <div class="configurationBarTextSelectorWrapper">
            <h5>Type:</h5>
            <button>Full Tower</button>
        </div>
        <div class="configurationBarTextSelectorWrapper">
            <h5>Path:</h5>
            <select id="categorySelect">
                <option value="primary">0</option>
                <option value="primary">1</option>
                <option value="primary">2</option>
                <option value="primary">3</option>
                <option value="primary">4</option>
                <option value="primary">5</option>
            </select>
            <select id="categorySelect">
                <option value="primary">0</option>
                <option value="primary">1</option>
                <option value="primary">2</option>
                <option value="primary">3</option>
                <option value="primary">4</option>
                <option value="primary">5</option>
            </select>
            <select id="categorySelect">
                <option value="primary">0</option>
                <option value="primary">1</option>
                <option value="primary">2</option>
                <option value="primary">3</option>
                <option value="primary">4</option>
                <option value="primary">5</option>
            </select>
        </div>
    `)

    document.getElementById("categorySelect").addEventListener("change", function() {
        category = document.getElementById("categorySelect").value
        updatePage()
    });
    document.getElementById("pageSelect").addEventListener("change", function() {
        page = document.getElementById("pageSelect").value
        updatePage()
    });

    document.getElementById("coverImageStyle").outerHTML = (`
        <style id="coverImageStyle">
            .coverImage {
                background-image: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), url('media/Tower Banners/dartMonkey/banner1Original.png');
                @media (prefers-color-scheme: dark) {
                    background-image: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url('media/Tower Banners/dartMonkey/banner1Original.png');
                }
            }
        </style>
    `)
}

let category = "primary"; let page = "dartMonkey"; let type = "fullTower"; let crosspath = [0, 0, 0]

updatePage()