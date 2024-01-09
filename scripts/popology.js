import popologyData from "/scripts/popologyData.js"

let compareOn = false

let urlParams = new URLSearchParams(window.location.search);
let urlSection; let urlPage;


runPopology()
if (compareOn) {
    runPopology(true)
}



// document.getElementById("compareButtonDialog").show()

function runPopology(compare) {
    let compareID
    if (compare) {
        compareID = "Compare"
    } else {
        compareID = ""
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

    let styledCategories = ["primary"]
    

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
            document.getElementById("towerCostContent").classList.remove("showCost")

        }

        updatePageButtons()

        addContent()

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
            if (document.getElementById(category) != undefined) {
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
                            <select id="pageSelect"></select>
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
                    document.getElementById("pageSelect").addEventListener("change", (x) => {
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
        document.getElementById("towerCostContent").innerHTML = ""

        document.getElementById("towerCostContent").innerHTML = `
            <div class="configurationBarTextSelectorWrapper">
                <div class="configPathContainer">
                    <div class="configSinglePathContainer">
                        <button class="pathStart" id="topPath0">
                            <h6>0</h6>
                        </button>
                        <button id="topPath1">
                            <h6>1</h6>
                        </button><button id="topPath2">
                            <h6>2</h6>
                        </button><button id="topPath3">
                            <h6>3</h6>
                        </button><button id="topPath4">
                            <h6>4</h6>
                        </button><button class="pathEnd" id="topPath5">
                            <h6>5</h6>
                        </button>
                    </div>
                    <div class="configSinglePathContainer"><button class="pathStart"
                            id="middlePath0">
                            <h6>0</h6>
                        </button><button id="middlePath1">
                            <h6>1</h6>
                        </button><button id="middlePath2">
                            <h6>2</h6>
                        </button><button id="middlePath3">
                            <h6>3</h6>
                        </button><button id="middlePath4">
                            <h6>4</h6>
                        </button><button class="pathEnd" id="middlePath5">
                            <h6>5</h6>
                        </button>
                    </div>
                    <div class="configSinglePathContainer"><button class="pathStart"
                            id="bottomPath0">
                            <h6>0</h6>
                        </button><button id="bottomPath1">
                            <h6>1</h6>
                        </button><button id="bottomPath2">
                            <h6>2</h6>
                        </button><button id="bottomPath3">
                            <h6>3</h6>
                        </button><button id="bottomPath4">
                            <h6>4</h6>
                        </button><button class="pathEnd" id="bottomPath5">
                            <h6>5</h6>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <h6>Total Cost</h6>
                <h2 id="totalCost"></h2>
            </div>
            <div>
                <h6>Sellback</h6>
                <h2 id="sellCost"></h2>
            </div>
            <div>
                <h6>Loss on Sell</h6>
                <h2 class="sellLossText" id="sellLoss"></h2>
            </div>
        `

        for (let pathIndex in selectedPathForPrice) {
            for (let i=0; i<=5; i++) {
                let button = document.getElementById(`${numberPathNameConversion(Number(pathIndex))}Path${i}`)
                button.classList.remove("selected")
                button.addEventListener("click", () => {
                    selectedPathForPrice[pathIndex] = i
                    updateCost()
                })
            }
        }
        for (let pathIndex in selectedPathForPrice) {
            document.getElementById(`${numberPathNameConversion(Number(pathIndex))}Path${selectedPathForPrice[pathIndex]}`)
                .classList.add("selected")
        }
        let costData = popologyData.prices[selectedCategory][selectedPage]
        let price = costData.base
        for (let path in selectedPathForPrice) {
            for (let i=0; i<5; i++) {
                if (selectedPathForPrice[path] > i) {
                    price += popologyData.prices[selectedCategory][selectedPage][numberPathNameConversion(Number(path))][i]
                }
            }
        }
        document.getElementById("totalCost").innerText = `$${price.toLocaleString()}`
        if (
            (selectedPage == "monkeyBuccaneer" && selectedPathForPrice[2] >= 4) || 
            (selectedPage == "bananaFarm" && selectedPathForPrice[2] >= 2)
        ) {
            document.getElementById("sellCost").innerText = `$${(price*0.8).toLocaleString()}`
            document.getElementById("sellLoss").innerText = `-$${(price*0.2).toLocaleString()}`
        } else {
            document.getElementById("sellCost").innerText = `$${(price*0.7).toLocaleString()}`
            document.getElementById("sellLoss").innerText = `-$${(price*0.3).toLocaleString()}`
        }
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