/*
⊂_ヽ
　＼＼ Λ＿Λ
　  ＼('ㅅ')  Placeload.js developed by Victor Igor (victorvoid)
　　　>　 ⌒ヽ
*/

import { merge, compose, curry } from 'ramda';
import { divElement, position, size } from './placeDOM';
import { defaultOptions, defaultDraw } from './config';

const getUnit = str => str.replace(/[0-9]/g, '');
const isPorcent = str => getUnit(str) === '%';
const isPixel = str => getUnit(str) === 'px';
const toPorcent = str => `${str}%`;
const toPixel = str => `${str}px`;

const elementPlaceload = divElement({className: 'placeload-background'}); //LAYER 1

class Placeload {
	constructor(container, options){
		this.fullHeight = 0;
		this.defaultOptions = merge(defaultOptions, options);
		this.container = document.querySelector(container);
		this.container.appendChild(elementPlaceload);
	}

	draw(props) {
		const elementDraw  = divElement({className: 'placeload-masker'}); //LAYER 2
		const propsDraw = merge(defaultDraw, props);
		const containerSizeX = this.container.offsetWidth;
		const getSizeSide = size => isPorcent(propsDraw[size]) ?
						toPorcent(100 - parseInt(propsDraw[size]))   /* other unit */
					: toPixel(containerSizeX - parseInt(propsDraw[size]));

		const sideSizeX = getSizeSide('width');
		const sideSizeY = getSizeSide('height');
		const pMaskerSize = size({width: sideSizeX, height: sideSizeY});
		const pMaskerPosition = position({left: propsDraw.width});
		const sideRigtLeft = compose(pMaskerSize, pMaskerPosition);
		elementPlaceload.appendChild(sideRigtLeft(elementDraw));
	}
}

const userPlaceload = new Placeload('.user-placeload', {borderRadius: '10px'});
userPlaceload.draw({width: '100%', height: '10%'});

// Export
if (typeof window !== 'undefined' && window) {
	if (typeof module === 'object' && module.exports) {
	  module.exports = Placeload;
	} else {
	  // Browser
	  window.Placeload = Placeload;
	}
}
