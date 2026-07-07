export class ChildHeader {

  constructor(text) {
    this.text = text;
  }

  toHTML() {
    const header = document.createElement('h5');
    header.textContent = 'Activates ' + this.text + ' attack for the duration of the ability';
    return header;
  }

}
