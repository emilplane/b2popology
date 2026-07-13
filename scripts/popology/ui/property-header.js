export class PropertyHeader {

  constructor(text) {
    this.text = text;
  }

  toHTML() {
    const header = document.createElement('h5');
    header.textContent = this.text;
    return header;
  }

}
