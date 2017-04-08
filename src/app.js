/*
⊂_ヽ
　＼＼ Λ＿Λ
　  ＼('ㅅ')  Placeload.js developed by Victor Igor (victorvoid)
　　　>　 ⌒ヽ
*/

import { merge, compose, curry } from 'ramda';
import { divElement } from './placeDOM.js';

const defaultOptions = {
	backgroundColor: '',
	animationDelay: 300,
	borderRadius: 0
};

const defaultDraw = {
	width: '0',
	height: '0',
	float: false,
	'margin-left': '0',
	'margin-right': '0',
	'margin-top': '0',
	'margin-bottom': '0'
};

const elementPlaceload = divElement({className: 'placeload-background'}); //LAYER 1
const elementDraw      = divElement({className: 'placeload-masker'}); //LAYER 2

class Placeload {
	constructor(container, options){
		this.fullHeight = 0;
		this.defaultOptions = merge(defaultOptions, options);
		this.container = document.querySelector(container);
		this.container.appendChild(elementPlaceload);
	}

	draw(props) {
		const propsDraw = merge(defaultDraw, props);
		const containerX = this.container.offsetWidth;
		const containerY = this.container.offsetHeight;
	}
}

const userPlaceload = new Placeload('.user-placeload', {borderRadius: '10px'});
userPlaceload.draw({width: '100px', height: '100px'});
userPlaceload.hidden();

// Export
if (typeof window !== 'undefined' && window) {
	if (typeof module === 'object' && module.exports) {
	  module.exports = Placeload;
	} else {
	  // Browser
	  window.Placeload = Placeload;
	}
}
