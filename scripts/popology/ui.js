import { UI_CONSTANTS } from "./constants.js"

export class PopologyUi {
    static createConfigPanel() {
        if (UI_CONSTANTS.CONFIG_PANEL.SHOW) {
            UI_CONSTANTS.CONFIG_PANEL.ELEMENT.innerHTML = 
                PopologyUi.Elements.towerUpgradeSelector()
        } else {
            UI_CONSTANTS.CONFIG_PANEL.ELEMENT.classList.add("hide")
        }
    }

    static updateBanner(name, crosspath) {
        const BANNER = UI_CONSTANTS.BANNER
        BANNER.ELEMENT.innerHTML = ""
        BANNER.ELEMENT.insertAdjacentElement("beforeend",
            new Element(BANNER.TITLE_TEXT_SIZE)
                .class("luckiestGuy").text(name).element
        )
        if (crosspath != undefined) {
            BANNER.ELEMENT.insertAdjacentElement("beforeend",
                new Element(BANNER.CROSSPATH_TEXT_SIZE)
                    .class("luckiestGuy")
                    .text(BANNER.CROSSPATH_PREFIX + crosspath)
                    .element
            )
        }
    }

    static Elements = class {
        static towerUpgradeSelector() {
            return `
                <div class="towerUpgradeSelector">
                    <div class="pathTrackContainer">
                        <div class="pathTrack"></div>
                        <div class="pathTrack"></div>
                        <div class="pathTrack"></div>
                    </div>
                    <div class="upgradeSelectorVisual">
                        <div id="path0" class="path position0"></div>
                        <div id="path1" class="path position0"></div>
                        <div id="path2" class="path position0"></div>
                    </div>
                    <div class="numberOverlay">
                        <div class="path">
                            <div class="upgradeNode selectedNode" id="upgradeNode_0_0">0</div>
                            <div class="upgradeNode" id="upgradeNode_0_1">1</div>
                            <div class="upgradeNode" id="upgradeNode_0_2">2</div>
                            <div class="upgradeNode" id="upgradeNode_0_3">3</div>
                            <div class="upgradeNode" id="upgradeNode_0_4">4</div>
                            <div class="upgradeNode" id="upgradeNode_0_5">5</div>
                        </div>
                        <div class="path">
                            <div class="upgradeNode selectedNode" id="upgradeNode_1_0">0</div>
                            <div class="upgradeNode" id="upgradeNode_1_1">1</div>
                            <div class="upgradeNode" id="upgradeNode_1_2">2</div>
                            <div class="upgradeNode" id="upgradeNode_1_3">3</div>
                            <div class="upgradeNode" id="upgradeNode_1_4">4</div>
                            <div class="upgradeNode" id="upgradeNode_1_5">5</div>
                        </div>
                        <div class="path">
                            <div class="upgradeNode selectedNode" id="upgradeNode_2_0">0</div>
                            <div class="upgradeNode" id="upgradeNode_2_1">1</div>
                            <div class="upgradeNode" id="upgradeNode_2_2">2</div>
                            <div class="upgradeNode" id="upgradeNode_2_3">3</div>
                            <div class="upgradeNode" id="upgradeNode_2_4">4</div>
                            <div class="upgradeNode" id="upgradeNode_2_5">5</div>
                        </div>
                    </div>
                </div>
            `
        }
    }
}

class Element {
    constructor(tagName) {
        this.element = document.createElement(tagName)
    }

    class() {
        for (const className of arguments) {
            this.element.classList.add(className)
        }
        return this
    }

    children() {
        for (const child of arguments) {
            if (child instanceof Element) {
                this.element.appendChild(
                    child.element
                )
            } else {
                this.element.appendChild(child)
            }
        }
        return this
    }

    text(text) {
        this.element.innerText = text
        return this
    }

    id(id) {
        this.element.id = id
        return this
    }

    setProperty(key, value) {
        this.element[key] = value
        return this
    }
}