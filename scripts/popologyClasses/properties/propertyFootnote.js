export class PropertyFootnote {

	constructor(key, val) {
		this.key = key;
		this.val = val;
	}
	
	clone() {
		return new PropertyFootnote(this.key, this.val);
	}
	
	toHTML() {
		if ((this.key == null) || (this.val == null)) return null;
		const p = document.createElement('p');
		p.className = "footnote";
		let str = "";
		for (let i = 0; i < this.val.length; i++) {
			str += "* " + this.val[i];
			if (i != this.val.length - 1) str += "\n";
		}
		p.textContent = str;
		return p;
	}

}
