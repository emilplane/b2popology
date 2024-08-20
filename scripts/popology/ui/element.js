export class Element {
    constructor(tagName) {
        this.element = document.createElement(tagName);
    }

    class() {
        for (const className of arguments) {
            this.element.classList.add(className);
        }
        return this;
    }

    children() {
        for (const child of arguments) {
            if (child instanceof Element) {
                this.element.appendChild(
                    child.element
                );
            } else {
                this.element.appendChild(child);
            }
        }
        
        return this;
    }

    text(text) {
        this.element.innerText = text;
        return this;
    }

    id(id) {
        this.element.id = id;
        return this;
    }

    setProperty(key, value) {
        this.element[key] = value;
        return this;
    }

    clearHTML() {
        this.element.innerHTML = "";
        return this;
    }
}
