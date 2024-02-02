const menuIcon = document.getElementById('menuIcon');
const menuDialog = document.getElementById('menu');

menuIcon.addEventListener('click', function() {
    menuDialog.showModal(); 
});

const menuCloseButton = document.getElementById('menuCloseButton');

menuCloseButton.addEventListener('click', function() {
    // Close the dialog
    menuDialog.close(); 
});

import popologyData from "/scripts/popologyData.js"

const buffData = {
    "favoredTrades": ["sellback", 0.1, 5],
    "monkeyBusiness": ["discount", 0.1, 3],
    "monkeyCommerce1": ["discount", 0.05, 3],
    "monkeyCommerce2": ["discount", 0.05, 3],
    "monkeyCommerce3": ["discount", 0.05, 3],
    "bananaSalvage": ["sellback", 0.1, 5]
}

let compareOn = false

let urlParams = new URLSearchParams(window.location.search);
let urlSection; let urlPage;


runPopology()
if (compareOn) {
    runPopology(true)
}

const compareButton = document.getElementById('compareButton');

compareButton.addEventListener('click', function() {
    compareOn = !compareOn;
    runPopology()
    if (compareOn) {
        runPopology(true)
    }
});

function runPopology(compare) {
    let compareID
    if (compare) {
        compareID = "Compare"
        document.getElementById("compareStyle").innerHTML = `
            .contentSubconatiner {
                height: calc(100vh - 95px);
                overflow-y: scroll;
            }
            .categoryButtonContainer {
                grid-template-columns: repeat(4, 1fr);
                @media screen and (max-width: 900px) {
                    grid-template-columns: repeat(2, 1fr);
                }
            }
            .towerCostSection {
                flex-direction: column;
            }
            .compareStats {
                display: block;
            }
            .statsContainer {
                grid-template-columns: 1fr 1fr;
            }
            .towerCostSection {
                gap: 24px;
            }
            .costsContainer {
                gap: 36px;
                @media screen and (max-width: 1100px) {
                    flex-direction: column;
                    gap: 8px;
                }
            }
            .costsContainer > div {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        `
    } else {
        compareID = ""
        document.getElementById("compareStyle").innerHTML = ""
    }

    let selectedCategory = "primary"
    let selectedPage = "dartMonkey"

    urlSection = urlParams.get('section')
	urlPage = urlParams.get('page')

	if (urlSection != null) {
		selectedCategory = urlSection;
	}
	if (urlPage != null) {
		selectedPage = urlPage;
	}

    let selectedPathForPrice = [0, 0, 0]

    let priceBuffs;

    let styledCategories = ["primary"]
    
    document.getElementById("towerCostButtonContainer" + compareID).innerHTML = `
        <button id="towerCostButton${compareID}" class="towerCostButton">Calculate Tower Cost</button>
    `

    document.getElementById("towerCostButton" + compareID).addEventListener("click", () => {
        console.log("j")
        if (document.getElementById("towerCostContent" + compareID).classList.contains("showCost")) {
            document.getElementById("towerCostContent" + compareID).classList.remove("showCost")
        } else {
            document.getElementById("towerCostContent" + compareID).classList.add("showCost")
        }
    })

    function update() {
        document.getElementById("title" + compareID).innerText = popologyData.stats[selectedCategory].entries[selectedPage].name

        if (
            selectedCategory == "heroes" || 
            selectedCategory == "bloons" || 
            selectedCategory == "accolades"
        ) {
            document.getElementById("towerCostButton" + compareID).classList.add("hide")
            
        } else {
            document.getElementById("towerCostButton" + compareID).classList.remove("hide")
            document.getElementById("towerCostContent" + compareID).classList.remove("showCost")

        }

        updatePageButtons()

        addContent()

        priceBuffs = {
            "favoredTrades": false,
            "monkeyBusiness": false,
            "monkeyCommerce1": false,
            "monkeyCommerce2": false,
            "monkeyCommerce3": false
        }

        if (
            !(selectedCategory == "heroes" || 
            selectedCategory == "bloons" || 
            selectedCategory == "accolades")
        ) {
            selectedPathForPrice = [0, 0, 0]
           
            updateCost()
        }

        urlParams.set('section', selectedCategory);
	    urlParams.set('page', selectedPage);
        history.replaceState(null, null, "?" + urlParams.toString());
    }

    function initializeCategoryButtons() {
        function resetButtons() {
            for (let category in popologyData.stats) {
                if (document.getElementById(category + compareID) != undefined) {
                    document.getElementById(category + compareID).classList.remove("categoryButtonSelected")
                    document.getElementById(category + compareID).classList.remove(`${category}CategoryButtonSelected`)
                }
            }
        }
        for (let category in popologyData.stats) {
            if (document.getElementById(category + compareID) != undefined) {
                function selectButton() {
                    document.getElementById(category + compareID).classList.add(`categoryButtonSelected`)
                    document.getElementById(category + compareID).classList.add(`${category}CategoryButtonSelected`)
                }
                if (category == selectedCategory) {selectButton()}
                document.getElementById(category + compareID).addEventListener("click", () => {
                    resetButtons()
                    selectButton()
                    selectedCategory = category
                    selectedPage = Object.keys(popologyData.stats[selectedCategory].entries)[0]
                    update()
                });
            }
        }
    }

    function updatePageButtons() {
        document.getElementById("pageButtonContainer" + compareID).innerHTML = ""

        if (
            selectedCategory == "heroes" || 
            selectedCategory == "bloons" || 
            selectedCategory == "accolades"
        ) {
            switch (selectedCategory) {
                case "heroes": case "bloons": case "accolades": 
                    document.getElementById("pageButtonContainer" + compareID).innerHTML = `
                        <div>
                            <h5>Select Page</h5>
                            <select id="pageSelect${compareID}"></select>
                        </div>
                    `
                    // for (let level in popologyData.stats[selectedCategory].entries[selectedPage].data) {
                    for (let hero in popologyData.stats[selectedCategory].entries) {
                        let selectedString = ""
                        if (hero == selectedPage) {
                            selectedString = " selected"
                        }
                        document.getElementById("pageSelect" + compareID).insertAdjacentHTML("beforeend", `
                            <option value="${hero}"${selectedString}>${popologyData.stats[selectedCategory].entries[hero].name}</option>
                        `)
                    }
                    document.getElementById("pageSelect" + compareID).addEventListener("change", (x) => {
                        selectedPage = x.target.value
                        update()
                    })
            }
        } else {
            const template = document.getElementById("pageButtonTemplate" + compareID)
            for (let pageIndex in popologyData.stats[selectedCategory].entries) {
                let clone = template.content.cloneNode(true)
                let button = clone.getElementById("pageButton" + compareID)

                if (pageIndex == selectedPage) {
                    button.classList.add("pageButtonSelected")
                }
                for (let categoryIndex in styledCategories) {
                    if (styledCategories[categoryIndex] == selectedCategory) {
                        button.classList.add(`${selectedCategory}TowerPageButton`)
                        if (pageIndex == selectedPage) {
                            button.classList.add(`${selectedCategory}TowerPageButtonSelected`)
                        }
                    }
                }
                
                button.addEventListener("click", () => {
                    selectedPage = pageIndex
                    update()
                });
                
                clone.getElementById("pageButtonImage" + compareID).setAttribute("src", `media/Tower Portraits/${pageIndex}/base/${pageIndex}Portrait.png`)
                document.getElementById("pageButtonContainer" + compareID).appendChild(clone)
            }
        }
    }

    function pathName(pathName) {
        switch (pathName) {
            case "topPath":     return "Top"
            case "middlePath":  return "Middle"
            case "bottomPath":  return "Bottom"
        }
    }

    function addContent() {
        if (
            selectedCategory == "heroes" || 
            selectedCategory == "bloons" || 
            selectedCategory == "accolades"
        ) {
            let contentHTML = ``
            switch (selectedCategory) {
                case "heroes": 
                    for (let level in popologyData.stats[selectedCategory].entries[selectedPage].data) {
                        if (level == 1) {
                            contentHTML += `<h3 class="baseTowerName">Level ${level}</h3>`
                            contentHTML += popologyData.stats[selectedCategory].entries[selectedPage].data[level]
                        } else {
                            contentHTML += `<h3 class="pathName">Level ${level}</h3>`
                            contentHTML += popologyData.stats[selectedCategory].entries[selectedPage].data[level]
                        }
                    }
                    document.getElementById("statsContent" + compareID).innerHTML = contentHTML
                    break
                case "bloons": case "accolades": 
                    contentHTML += popologyData.stats[selectedCategory].entries[selectedPage].data
                    document.getElementById("statsContent" + compareID).innerHTML = contentHTML
                    break
            }
        } else {
            let contentHTML = `<h5 class="baseTowerName">Base Tower</h5>`
            for (let path in popologyData.stats[selectedCategory].entries[selectedPage].data) {
                if (path == "base") {
                    contentHTML += popologyData.stats[selectedCategory].entries[selectedPage].data[path]
                } else {
                    contentHTML += `<h3 class="pathName">${pathName(path)} Path</h3>`
                    for (let upgrade in popologyData.stats[selectedCategory].entries[selectedPage].data[path]) {
                        contentHTML += `<h5 class="upgradeName">${popologyData.stats[selectedCategory].entries[selectedPage].data[path][upgrade].name}</h5>`
                        contentHTML += popologyData.stats[selectedCategory].entries[selectedPage].data[path][upgrade].content
                    }
                }
            }
            document.getElementById("statsContent" + compareID).innerHTML = contentHTML
        }
    }

    function updateCost() {
        let forceBuffs = []
        if (selectedPage == "monkeyBuccaneer" && selectedPathForPrice[2] >= 4) {
            forceBuffs.push("favoredTrades")
        }
        if (selectedPage == "bananaFarm" && selectedPathForPrice[2] >= 2) {
            forceBuffs.push("bananaSalvage")
        }

        document.getElementById("towerCostContent" + compareID).innerHTML = ""

        document.getElementById("towerCostContent" + compareID).innerHTML = `
            <div>
                <h6>Tower Path</h6>
                <div class="configurationBarTextSelectorWrapper">
                    <div class="configPathContainer">
                        <div class="configSinglePathContainer">
                            <button class="pathStart" id="topPath0${compareID}">
                                <h6>0</h6>
                            </button>
                            <button id="topPath1${compareID}">
                                <h6>1</h6>
                            </button><button id="topPath2${compareID}">
                                <h6>2</h6>
                            </button><button id="topPath3${compareID}">
                                <h6>3</h6>
                            </button><button id="topPath4${compareID}">
                                <h6>4</h6>
                            </button><button class="pathEnd" id="topPath5${compareID}">
                                <h6>5</h6>
                            </button>
                        </div>
                        <div class="configSinglePathContainer"><button class="pathStart"
                                id="middlePath0${compareID}">
                                <h6>0</h6>
                            </button><button id="middlePath1${compareID}">
                                <h6>1</h6>
                            </button><button id="middlePath2${compareID}">
                                <h6>2</h6>
                            </button><button id="middlePath3${compareID}">
                                <h6>3</h6>
                            </button><button id="middlePath4${compareID}">
                                <h6>4</h6>
                            </button><button class="pathEnd" id="middlePath5${compareID}">
                                <h6>5</h6>
                            </button>
                        </div>
                        <div class="configSinglePathContainer"><button class="pathStart"
                                id="bottomPath0${compareID}">
                                <h6>0</h6>
                            </button><button id="bottomPath1${compareID}">
                                <h6>1</h6>
                            </button><button id="bottomPath2${compareID}">
                                <h6>2</h6>
                            </button><button id="bottomPath3${compareID}">
                                <h6>3</h6>
                            </button><button id="bottomPath4${compareID}">
                                <h6>4</h6>
                            </button><button class="pathEnd" id="bottomPath5${compareID}">
                                <h6>5</h6>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h6 class="buffText">Buffs</h6>
                <div class="buffIconContainer">
                    <div class="buffIconRow" id="buffs${compareID}">

                    </div>
                    <div class="buffIconRow requiredBuffs" id="requiredBuffs${compareID}">
                        
                    </div>
                </div>
            </div>
            <div class="costsContainer">
                <div>
                    <h6>Total Cost</h6>
                    <h2 id="totalCost${compareID}"></h2>
                </div>
                <div>
                    <h6>Sellback</h6>
                    <h2 id="sellCost${compareID}"></h2>
                </div>
                <div>
                    <h6>Loss on Sell</h6>
                    <h2 class="sellLossText" id="sellLoss${compareID}"></h2>
                </div>
            </div>
        `

        for (let buff in priceBuffs) {
            let src;
            switch (buff) {
                case "favoredTrades":   src = "/media/Tower Portraits/monkeyBuccaneer/bottom/monkeyBuccaneer004Portrait.png";   break
                case "monkeyBusiness":  src = "/media/Tower Portraits/monkeyVillage/bottom/monkeyVillage001Portrait.webp";      break
                case "monkeyCommerce1": case "monkeyCommerce2": case "monkeyCommerce3": 
                                        src = "/media/Tower Portraits/monkeyVillage/bottom/monkeyVillage002Portrait.webp";      break
            }
            let required = false
            for (let requiredBuff in forceBuffs) {
                if (forceBuffs[requiredBuff] == buff) {
                    required = true
                }
            }
            if (required) {
                document.getElementById("requiredBuffs" + compareID).insertAdjacentHTML("beforeend", `
                    <div class="buffIcon" id="${buff}${compareID}">
                        <img class="buffIconImage" src="${src}" />
                    </div>
                `)
            } else {
                document.getElementById("buffs" + compareID).insertAdjacentHTML("beforeend", `
                    <div class="buffIcon" id="${buff}${compareID}">
                        <img class="buffIconImage" src="${src}" />
                    </div>
                `)

                if (priceBuffs[buff]) {
                    document.getElementById(buff + compareID).classList.add("buffIconSelected")
                }
    
                document.getElementById(buff + compareID).addEventListener("click", () => {
                    priceBuffs[buff] = !priceBuffs[buff]
                    switch (buff) {
                        case "monkeyBusiness":
                            if (!priceBuffs[buff]) {
                                priceBuffs.monkeyCommerce1 = false
                                priceBuffs.monkeyCommerce2 = false
                                priceBuffs.monkeyCommerce3 = false
                            }
                            break
                        case "monkeyCommerce1":
                            if (priceBuffs[buff]) {
                                priceBuffs.monkeyBusiness = true
                            } else {
                                priceBuffs.monkeyCommerce2 = false
                                priceBuffs.monkeyCommerce3 = false
                            }
                            break
                        case "monkeyCommerce2":
                            if (priceBuffs[buff]) {
                                priceBuffs.monkeyBusiness = true
                                priceBuffs.monkeyCommerce1 = true
                            } else {
                                priceBuffs.monkeyCommerce3 = false
                            }
                            break
                        case "monkeyCommerce3":
                            if (priceBuffs[buff]) {
                                priceBuffs.monkeyBusiness = true
                                priceBuffs.monkeyCommerce1 = true
                                priceBuffs.monkeyCommerce2 = true
                            }
                            break
                    }
                    updateCost()
                })
            }
        }

        for (let requiredBuff in forceBuffs) {
            let src = "/media/Tower Portraits/bananaFarm/bottom/bananaFarm002Portrait.webp"
            if (forceBuffs[requiredBuff] == "bananaSalvage") {
                document.getElementById("requiredBuffs" + compareID).insertAdjacentHTML("beforeend", `
                    <div class="buffIcon" id="bananaSalvage${compareID}">
                        <img class="buffIconImage" src="${src}" />
                    </div>
                `)
            }
        }
        
        for (let pathIndex in selectedPathForPrice) {
            for (let i=0; i<=5; i++) {
                let button = document.getElementById(`${numberPathNameConversion(Number(pathIndex))}Path${i}` + compareID)
                button.classList.remove("selected")
                button.addEventListener("click", () => {
                    selectedPathForPrice[pathIndex] = i
                    updateCost()
                })
            }
        }
        for (let pathIndex in selectedPathForPrice) {
            document.getElementById(`${numberPathNameConversion(Number(pathIndex))}Path${selectedPathForPrice[pathIndex]}` + compareID)
                .classList.add("selected")
        }
        let costData = popologyData.prices[selectedCategory][selectedPage]

        function discountForTier(tier) {
            let discount = 1
            for (let buff in buffData) {
                if (priceBuffs[buff] == true && buffData[buff][0] == "discount" && buffData[buff][2] >= tier) {
                    discount -= buffData[buff][1]
                }
            }
            return discount;
        }

        function sellbackBonusForTier(tier) {
            let sellbackBonus = 0
            for (let buff in buffData) {
                let required = false;
                for (let index in forceBuffs) {
                    if (buff == forceBuffs[index])
                    required = true
                }
                if ((required || priceBuffs[buff] == true) && buffData[buff][0] == "sellback" && buffData[buff][2] >= tier) {
                    sellbackBonus += buffData[buff][1]
                }
            }
            return sellbackBonus;
        }

        let price = (costData.base*(discountForTier(0)))
        for (let path in selectedPathForPrice) {
            for (let i=0; i<5; i++) {
                if (selectedPathForPrice[path] > i) {
                    price += (popologyData.prices[selectedCategory][selectedPage][numberPathNameConversion(Number(path))][i])*(discountForTier(i+1))
                }
            }
        }
        document.getElementById("totalCost" + compareID).innerText = `$${price.toLocaleString()}`
        document.getElementById("sellCost" + compareID).innerText = `$${(price*(0.7+sellbackBonusForTier(5))).toLocaleString()}`
        document.getElementById("sellLoss" + compareID).innerText = `-$${(price*(1-(0.7+sellbackBonusForTier(5)))).toLocaleString()}`
    }

    initializeCategoryButtons()
    update()
}

export function numberPathNameConversion(data) {
    if (typeof data == "string") {
        if (data == "top") {return 0}
        if (data == "middle") {return 1}
        if (data == "bottom") {return 2}
    } else {
        if (data == 0) {return "top"}
        if (data == 1) {return "middle"}
        if (data == 2) {return "bottom"}
    }
}