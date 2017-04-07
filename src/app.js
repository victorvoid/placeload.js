/*
⊂_ヽ
　＼＼ Λ＿Λ
　  ＼('ㅅ')  Placeload.js developed by Victor Igor (victorvoid)
　　　>　 ⌒ヽ
*/

import { merge, compose, curry } from 'ramda';
import { addClass, divElement } from './placeDOM.js';

const defaultOptions = {
	backgroundColor: '',
	animationDelay: 300,
	borderRadius: 0
};

const elementPlaceload = addClass(divElement, '.placeload-background');

class Placeload {
	constructor(container, options){
		this.fullHeight = 0;
		this.container = document.querySelector(container);
		this.options = merge(defaultOptions, options);
		this.container.appendChild(elementPlaceload);
	}
}

const UserPlaceload = new Placeload('.user-placeload', {borderRadius: '10px'});

// Export
if (typeof window !== 'undefined' && window) {
	if (typeof module === 'object' && module.exports) {
	  module.exports = Placeload;
	} else {
	  // Browser
	  window.Placeload = Placeload;
	}
}
