export class PropertyCamo {
	constructor(key, val) {
		this.key = key;
		this.val = val;
	}
	
	clone() {
		return new PropertyCamo(this.key, this.val);
	}
	
	applyBuff(buff) {
		this.val = buff.value;
	}

	toHTML() {
		if ((this.key == null) || (this.val == null)) return;
		if (this.val == false) return null;
		const cont = document.createElement('div');
		const img = document.createElement('img');
		img.src = "/media/propertyIcons/camo.png";
        img.style = "height: 54px; width: auto; padding-top: 8px;";
		cont.appendChild(img);
		return cont;
	
	}

}
