// The element for the side panel container
const sidePanel = document.getElementById("sidePanelContainer")

function create(name) {
    return document.createElement(name)
}

function get(id) {
    return document.getElementById(id)
}

function insert(element, ...items) {
    for (let itemIndex in items) {
        element.insertAdjacentElement("beforeend", items[itemIndex])
    }
}

export default class SidePanel {
    /**
     * Creates a new SidePanel.
     * @constructor
     */
    constructor(simConfig) {
        this.simConfig = simConfig
        this.tabNumber = 0
    }

    /**
     * Creates the sidebar UI.
     */
    fullUpdate() {
        sidePanel.innerHTML = ""
        sidePanel.insertAdjacentHTML("beforeend", `
            <div class="configTabs" id="sidebarTabs"></div>
        `)
        this.tabContainer = get("sidebarTabs")
        this.createTabs()
        this.sidebarContent(this.simConfig.tabs[this.tabNumber])
    }

    sidebarContent(content) {
        for (let sectionIndex in content.sections) {
            console.log(content.sections[sectionIndex])
            insert(sidePanel, this.section(content.sections[sectionIndex]))
        }
    }

    section(content) {
        console.log(content)

        let section = create("div")
        section.className = "simConfigSection"
        sectionTitle()
        for (let settingIndex in content.settings) {
            setting(content.settings[settingIndex])
        }

        return section

        function sectionTitle() {
            let titleContainer = create("div")
            titleContainer.className = "configTitle"

            let title = create("h4")
            title.innerText = content.displayName

            let line = create("div")
            line.classList.add("horizontalLine", "strongLineStyle")

            insert(titleContainer, title, line)
            insert(section, titleContainer)
        }

        function setting(config) {
            let settingContainer = create("div")
            settingContainer.className = "setting"

            let leftSide = create("div")
            let rightSide = create("div")

            let settingName = create("h5")
            settingName.innerText = config.displayName
            insert(leftSide, settingName)

            insert(rightSide, create("input"))
            
            insert(settingContainer, leftSide, rightSide)
            insert(section, settingContainer)
        }
    }

    /**
     * Creates the tabs on the top of the sidebar.
     */
    createTabs() {
        this.tabContainer.innerHTML = ""
        let style = create("style")
        style.innerText = `
            .configTabs {grid-template-columns: repeat(${this.simConfig.tabs.length}, 1fr)}`
        this.tabContainer.insertAdjacentElement("beforeend", style)
        for (let tabIndex in this.simConfig.tabs) {
            this.tabContainer.insertAdjacentElement("beforeend", this.tab(
                tabIndex,
                tabIndex == this.tabNumber,
                this.simConfig.tabs[tabIndex].icon
            ))
        }
    }

    /**
     * Updates the tabs on the top of the sidebar.
     */
    updateTabs() {
        for (let tabIndex in this.simConfig.tabs) {
            let tab = get("tab" + tabIndex)
            if (
                this.tabNumber == tabIndex && 
                tab.className != "activeTab"
            ) {
                tab.className = "activeTab"
            } else if (
                this.tabNumber != tabIndex && 
                tab.className == "activeTab"
            ) {
                tab.className = ""
            }
        }
    }

    /**
     * Returns a tab.
     * @param {*} tabIndex - the index of the tab
     * @param {*} isActive - whether the tab is selected or not
     * @param {*} iconSrc - the location of the image to use as the tab's icon
     * @returns - an HTML element for the requested tab
     */
    tab(tabIndex, isActive, iconSrc) {
        let tab = create("div")
        if (isActive) {tab.classList.add("activeTab")}
        tab.id = "tab" + tabIndex
        
        let icon = create("img")
        icon.src = iconSrc

        tab.insertAdjacentElement("beforeend", icon)

        tab.addEventListener("click", (e) => {
            this.tabNumber = tabIndex
            this.updateTabs()
        })

        return tab
    }
}