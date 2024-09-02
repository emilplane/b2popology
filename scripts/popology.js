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
    "favoredTrades": ["sellback", 0.1, 0, 5],
    "monkeyBusiness": ["discount", 0.1, 0, 3],
    "monkeyCommerce1": ["discount", 0.05, 0, 3],
    "monkeyCommerce2": ["discount", 0.05, 0, 3],
    "monkeyCommerce3": ["discount", 0.05, 0, 3],
    "bananaSalvage": ["sellback", 0.1, 0, 5],
    "sunTemple": ["discount", 0.05, 0, 5],
    "trueSunGod": ["discount", 0.05, 0, 5],
    "obynLevel12": ["discount", 0.1, 5, 5, "magic"],
}

const wideModeIDs = [
    "configButtonsContainer",
    "categoryButtonContainer",
    "pageButtonContainer",
    "contentContainer"
]
let compare = false
let advancedMode = false

let urlParams = new URLSearchParams(window.location.search);
let urlSection; let urlPage;


runPopology()
if (compare) {
    runPopology(true)
}

const versionHistoryButton = document.getElementById('versionHistoryButton');
const compareButton = document.getElementById('compareButton');
const advancedButton = document.getElementById('advancedButton');

const buttonHelperText = document.getElementById("cornerButtonPreviewText");

versionHistoryButton.addEventListener('mouseover', function() {
    buttonHelperText.classList.add("cornerButtonPreviewText")
    buttonHelperText.innerText = "Version history"
});

versionHistoryButton.addEventListener('mouseout', function() {
    buttonHelperText.classList.remove("cornerButtonPreviewText")
    buttonHelperText.innerText = ""
});

compareButton.addEventListener('click', function() {
    compare = !compare;
    run()
});

compareButton.addEventListener('mouseover', function() {
    buttonHelperText.classList.add("cornerButtonPreviewText")
    buttonHelperText.innerText = "Compare mode"
});

compareButton.addEventListener('mouseout', function() {
    buttonHelperText.classList.remove("cornerButtonPreviewText")
    buttonHelperText.innerText = ""
});

advancedButton.addEventListener('click', function() {
    advancedMode = !advancedMode;
    run()
});

advancedButton.addEventListener('mouseover', function() {
    buttonHelperText.classList.add("cornerButtonPreviewText")
    buttonHelperText.classList.add("dangerPreviewText")
    buttonHelperText.innerText = "Experiments"
});

advancedButton.addEventListener('mouseout', function() {
    buttonHelperText.classList.remove("cornerButtonPreviewText")
    buttonHelperText.classList.remove("dangerPreviewText")
    buttonHelperText.innerText = ""
});

// Create a media query for viewport widths smaller than 700px
const mediaQuery = window.matchMedia('(max-width: 700px)');

// Function to handle changes in viewport size
const handleViewportChange = (mq) => {
  if (mq.matches && compare) {
    compare = !compare;
    run()
  }
};

mediaQuery.addListener(handleViewportChange);

function run() {
    runPopology()
    if (compare) {
        runPopology(true)
    }
}

function runPopology(compare) {
    let compareID
    if (compare) {
        compareID = "Compare"
        wideModeIDs.forEach(className => {
            document.getElementById(className).classList.remove(`${className}WideMode`)
        });
        document.getElementById("compareStyle").innerHTML = `
            .contentContainer {
                height: calc(100vh - 95px);
                overflow-y: scroll;
            }
            .categoryButtonContainer {
                grid-template-columns: repeat(4, 1fr);
                @media screen and (max-width: 1000px) {
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
        wideModeIDs.forEach(className => {console.log(className)
            document.getElementById(className).classList.add(`${className}WideMode`)
        });
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
            "monkeyCommerce3": false,
            "sunTemple": false,
            "trueSunGod": false,
            "obynLevel12": false
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

        document.getElementById("towerCostContent" + compareID).classList.remove("showCost")
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
        document.getElementById("dropdownContainer" + compareID).innerHTML = ""

        if (
            selectedCategory == "bloons" || 
            selectedCategory == "accolades"
        ) {
            switch (selectedCategory) {
                case "heroes": case "bloons": case "accolades": 
                    document.getElementById("dropdownContainer" + compareID).innerHTML = `
                        <div>
                            <h5>Select Page</h5>
                            <select id="pageSelect${compareID}"></select>
                        </div>
                    `
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
                
                button.addEventListener("click", (x) => {
                    selectedPage = pageIndex
                    update()
                });
                
                if (selectedCategory == "heroes") {
                    clone.getElementById("pageButtonImage" + compareID).setAttribute("src", `media/towerPortraits/${pageIndex}/${pageIndex}Portrait.png`)
                } else {
                    clone.getElementById("pageButtonImage" + compareID).setAttribute("src", `media/towerPortraits/${pageIndex}/base/${pageIndex}Portrait.png`)
                }
                document.getElementById("pageButtonContainer" + compareID).appendChild(clone)
                if (selectedCategory == "heroes") {
                    document.getElementById("pageButtonContainer" + compareID).classList.add("heroPageButtonContainer")
                } else {
                    document.getElementById("pageButtonContainer" + compareID).classList.remove("heroPageButtonContainer")
                }
            }
        }
    }

    function pathName(pathName) {
        switch (pathName) {
            case "top":     return "Top"
            case "middle":  return "Middle"
            case "bottom":  return "Bottom"
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
                            contentHTML += nestedArraysToHTML(popologyData.stats[selectedCategory].entries[selectedPage].data[level])
                        } else {
                            contentHTML += `<h3 class="pathName">Level ${level}</h3>`
                            contentHTML += nestedArraysToHTML(popologyData.stats[selectedCategory].entries[selectedPage].data[level])
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
            if (popologyData.stats[selectedCategory].type === "nestedArrays") {
                if (typeof popologyData.stats[selectedCategory].entries[selectedPage].data.base === "string") {
                    console.log("This is a string! Change this to arrays instead!")
                    console.log(objectToArrayFormat(popologyData.stats[selectedCategory].entries[selectedPage].data))
                }

                let contentHTML = `<h5 class="baseTowerName">Base Tower</h5>`
                for (let path in popologyData.stats[selectedCategory].entries[selectedPage].data) {
                    if (path == "base") {
                        contentHTML += nestedArraysToHTML(popologyData.stats[selectedCategory].entries[selectedPage].data[path])
                    } else {
                        contentHTML += `<h3 class="pathName">${pathName(path)} Path</h3>`
                        for (let upgrade in popologyData.stats[selectedCategory].entries[selectedPage].data[path]) {
                            if (popologyData.stats[selectedCategory].entries[selectedPage].data[path][upgrade].name == "005 - Monkeyopolis") {
                                contentHTML += `<h5 class="upgradeName">${popologyData.stats[selectedCategory].entries[selectedPage].data[path][upgrade].name} - $15,000 + $5,000 * Monkey Village</h5>`
                            } else {
                                contentHTML += `<h5 class="upgradeName">${popologyData.stats[selectedCategory].entries[selectedPage].data[path][upgrade].name} - $${popologyData.prices[selectedCategory][selectedPage][path][upgrade-1].toLocaleString()}</h5>`
                            }
                            contentHTML += nestedArraysToHTML(popologyData.stats[selectedCategory].entries[selectedPage].data[path][upgrade].content)
                        }
                    }
                }
                document.getElementById("statsContent" + compareID).innerHTML = contentHTML

            } else {
                let contentHTML = `<h5 class="baseTowerName">Base Tower</h5>`
                for (let path in popologyData.stats[selectedCategory].entries[selectedPage].data) {
                    if (path == "base") {
                        contentHTML += popologyData.stats[selectedCategory].entries[selectedPage].data[path]
                    } else {
                        contentHTML += `<h3 class="pathName">${pathName(path)} Path</h3>`
                        for (let upgrade in popologyData.stats[selectedCategory].entries[selectedPage].data[path]) {
                            if (popologyData.stats[selectedCategory].entries[selectedPage].data[path][upgrade].name == "005 - Monkeyopolis") {
                                contentHTML += `<h5 class="upgradeName">${popologyData.stats[selectedCategory].entries[selectedPage].data[path][upgrade].name} - $15,000 + $5,000 * Monkey Village</h5>`
                            } else {
                                contentHTML += `<h5 class="upgradeName">${popologyData.stats[selectedCategory].entries[selectedPage].data[path][upgrade].name} - $${popologyData.prices[selectedCategory][selectedPage][path][upgrade-1].toLocaleString()}</h5>`
                            }
                            contentHTML += popologyData.stats[selectedCategory].entries[selectedPage].data[path][upgrade].content
                        }
                    }
                }
                document.getElementById("statsContent" + compareID).innerHTML = contentHTML
            }
        }
    }

    function nestedArraysToHTML(array) {
        if (typeof array === "string") {
            return array
        }

        let html = ""
        handleArray(array)
        
        function handleArray(array) {
            html += "<ul>"
            array.forEach(element => {
                let elementContent = element
                console.log(element)
                if (element[0] == "advanced_mode") {
                    elementContent = element[1]
                    if (advancedMode) {
                        segment(elementContent, true)
                    }
                } else if (element[0] == "simple_mode") {
                    elementContent = element[1]
                    if (!advancedMode) {
                        segment(elementContent)
                    }
                } else if (element[0] == "hero_level") {
                    elementContent = `Leveling Rate: ${element[1].multiplier}x w/${element[1].curve} curve`
                    html += `<li>${elementContent}</li>`
                } else {
                    segment(elementContent)
                }
            })
            function segment(element, isAdvanced) {
                if (Array.isArray(element)) {
                    handleArray(element)
                } else {
                    if (isAdvanced) {
                        html += `<li class="experimentsText">${element}</li>`
                    } else {
                        html += `<li>${element}</li>`
                    }
                }
            }
            html += "</ul>"
        }
        return html
    }

    // let clone = structuredClone(popologyData.stats[selectedCategory].entries)
    // for (let key in clone) {
    //     console.log(clone[key])
    //     clone[key].data = objectToArrayFormat(clone[key].data)
    // }

    // console.log(clone)

    // let clone = structuredClone(popologyData.stats[selectedCategory].entries)
    // console.log(clone)

    function objectToArrayFormat(object) {
        let clone = structuredClone(object)
        for (let key in object) {
            clone[key] = htmlStringToArray(clone[key])
        }
        return clone
    }

    function htmlStringToArray(htmlString) {
        const doc = new DOMParser().parseFromString(htmlString, 'text/html');
    
        function extractContent(node) {
            const result = [];
    
            Array.from(node.childNodes).forEach(child => {
                if (child.nodeType === Node.TEXT_NODE) {
                    const text = child.textContent.trim();
                    if (text) result.push(text);
                } else if (child.nodeType === Node.ELEMENT_NODE) {
                    if (child.nodeName === 'UL') {
                        // For <ul> elements, process each <li> child
                        const ulContent = [];
                        Array.from(child.children).forEach(li => {
                            ulContent.push(...extractContent(li));
                        });
                        result.push(ulContent.length > 0 ? ulContent : '');
                    } else if (child.nodeName === 'LI') {
                        // For <li> elements, handle nested content
                        const liContent = extractContent(child);
                        if (liContent.length === 1 && typeof liContent[0] === 'string') {
                            result.push(liContent[0]);
                        } else if (liContent.length > 0) {
                            result.push(liContent);
                        }
                    } else {
                        // Handle other elements
                        result.push(...extractContent(child));
                    }
                }
            });
    
            return result;
        }
    
        // Extract content from the body
        const content = extractContent(doc.body);
    
        // Flatten the result if it's a single wrapped array
        return content.length === 1 && Array.isArray(content[0]) ? content[0] : content;
    }

    const htmlString = `
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
    `;
    
    const nestedArray = htmlStringToArray(htmlString);

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
                            <button class="pathStart" id="top0${compareID}">
                                <h6>0</h6>
                            </button>
                            <button id="top1${compareID}">
                                <h6>1</h6>
                            </button><button id="top2${compareID}">
                                <h6>2</h6>
                            </button><button id="top3${compareID}">
                                <h6>3</h6>
                            </button><button id="top4${compareID}">
                                <h6>4</h6>
                            </button><button class="pathEnd" id="top5${compareID}">
                                <h6>5</h6>
                            </button>
                        </div>
                        <div class="configSinglePathContainer"><button class="pathStart"
                                id="middle0${compareID}">
                                <h6>0</h6>
                            </button><button id="middle1${compareID}">
                                <h6>1</h6>
                            </button><button id="middle2${compareID}">
                                <h6>2</h6>
                            </button><button id="middle3${compareID}">
                                <h6>3</h6>
                            </button><button id="middle4${compareID}">
                                <h6>4</h6>
                            </button><button class="pathEnd" id="middle5${compareID}">
                                <h6>5</h6>
                            </button>
                        </div>
                        <div class="configSinglePathContainer"><button class="pathStart"
                                id="bottom0${compareID}">
                                <h6>0</h6>
                            </button><button id="bottom1${compareID}">
                                <h6>1</h6>
                            </button><button id="bottom2${compareID}">
                                <h6>2</h6>
                            </button><button id="bottom3${compareID}">
                                <h6>3</h6>
                            </button><button id="bottom4${compareID}">
                                <h6>4</h6>
                            </button><button class="pathEnd" id="bottom5${compareID}">
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
                case "favoredTrades":   src = "/media/towerPortraits/monkeyBuccaneer/bottom/monkeyBuccaneer004Portrait.png";   break
                case "monkeyBusiness":  src = "/media/towerPortraits/monkeyVillage/bottom/monkeyVillage001Portrait.webp";      break
                case "monkeyCommerce1": case "monkeyCommerce2": case "monkeyCommerce3": 
                                        src = "/media/towerPortraits/monkeyVillage/bottom/monkeyVillage002Portrait.webp";      break
                case "sunTemple":       src = "/media/towerPortraits/superMonkey/top/superMonkey400Portrait.webp";             break
                case "trueSunGod":      src = "/media/towerPortraits/superMonkey/top/superMonkey500Portrait.webp";             break
                case "obynLevel12":      src = "/media/towerPortraits/obyn/obynPortrait.png";                                  break
            }
            let required = false
            for (let requiredBuff in forceBuffs) {
                if (forceBuffs[requiredBuff] == buff) {
                    required = true
                }
            }
            if (required) {
                document.getElementById("requiredBuffs" + compareID).insertAdjacentHTML("beforeend", `
                    <button class="buffIcon" id="${buff}${compareID}">
                        <img class="buffIconImage" src="${src}" />
                    </button>
                `)
            } else {
                if (
                    (
                        buff == "obynLevel12" && selectedCategory == "magic" && (
                            selectedPathForPrice[0] == 5 ||
                            selectedPathForPrice[1] == 5 ||
                            selectedPathForPrice[2] == 5
                        )
                    ) 
                    || buff != "obynLevel12"
                ) 
                {
                    document.getElementById("buffs" + compareID).insertAdjacentHTML("beforeend", `
                        <button class="buffIcon" id="${buff}${compareID}">
                            <img class="buffIconImage" src="${src}" />
                        </button>
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
                            case "sunTemple": 
                                if (!priceBuffs[buff]) {
                                    priceBuffs.trueSunGod = false
                                }
                                break
                            case "trueSunGod": 
                                if (priceBuffs[buff]) {
                                    priceBuffs.sunTemple = true
                                }
                                break
                        }
                        updateCost()
                    })
                }
            }
        }

        for (let requiredBuff in forceBuffs) {
            let src = "/media/towerPortraits/bananaFarm/bottom/bananaFarm002Portrait.webp"
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
                let button = document.getElementById(`${numberPathNameConversion(Number(pathIndex))}${i}` + compareID)
                button.classList.remove("selected")
                button.addEventListener("click", () => {
                    selectedPathForPrice[pathIndex] = i
                    ensureValidPath(pathIndex)
                    updateCost()
                })
            }
        }

        for (let pathIndex in selectedPathForPrice) {
            document.getElementById(`${numberPathNameConversion(Number(pathIndex))}${selectedPathForPrice[pathIndex]}` + compareID)
                .classList.add("selected")
        }
        let costData = popologyData.prices[selectedCategory][selectedPage]

        function discountForTier(tier) {
            let discount = 1
            for (let buff in buffData) {
                if (priceBuffs[buff] == true && buffData[buff][0] == "discount" && buffData[buff][2] <= tier && buffData[buff][3] >= tier) {
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
                if ((required || priceBuffs[buff] == true) && buffData[buff][0] == "sellback" && buffData[buff][3] >= tier) {
                    sellbackBonus += buffData[buff][1]
                }
            }
            return sellbackBonus;
        }

        let price = (costData.base*(discountForTier(0)))
        for (let path in selectedPathForPrice) {
            for (let i = 0; i < 5; i++) {
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

    function ensureValidPath(selectedPathIndex) {
        let path = selectedPathForPrice; let selectedValue = selectedPathForPrice[selectedPathIndex]
        if (selectedValue > 2) {
            for (let pathIndex in path) {
                if (pathIndex != selectedPathIndex && path[pathIndex] > 2) {
                    selectedPathForPrice[pathIndex] = 2
                }
            }
        }
        let numberOfUpgradedPathsBesidesSelectedPath = 0
        let highestValueUnselectedPath;
        for (let pathIndex in path) {
            if (pathIndex != selectedPathIndex) {
                highestValueUnselectedPath = pathIndex
                if (path[pathIndex] != 0) {numberOfUpgradedPathsBesidesSelectedPath++}
            }
        }
        if (numberOfUpgradedPathsBesidesSelectedPath >= 2) {
            selectedPathForPrice[highestValueUnselectedPath] = 0
        }
        console.log(highestValueUnselectedPath)
    }
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