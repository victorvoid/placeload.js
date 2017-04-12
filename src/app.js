/*
⊂_ヽ
　＼＼ Λ＿Λ
　  ＼('ㅅ')  Placeload.js developed by Victor Igor (victorvoid)
　　　>　 ⌒ヽ
*/

import { merge, compose } from 'ramda';
import { divElement, position, size } from './placeDOM';
import { defaultOptions, defaultDraw } from './config';
import { isPorcent,
				 isPixel,
				 toPorcent,
				 toPixel } from './placeUNIT';

const elementPlaceload = divElement({className: 'placeload-background'}); //LAYER 1

class Placeload {
	constructor(container, options){
		this.fullHeight = 0;
		this.defaultOptions = merge(defaultOptions, options);
		this.container = document.querySelector(container);
		this.container.appendChild(elementPlaceload);
	}

	//::props -> DOM style
	draw(props) {
		const elementDraw  = divElement({className: 'placeload-masker'}); //LAYER 2
		const propsDraw = merge(defaultDraw, props);
		const containerSizeX = this.container.offsetWidth;

		//::size {width || height} -> Number + UNIT
		const getSizeSide = size => {
			let divIfCenter = propsDraw.center ? 2 : 1 ;
			if(isPorcent(propsDraw[size])){
				return toPorcent((100 - parseInt(propsDraw[size]))/divIfCenter);
			}else{
				return toPixel(containerSizeX - parseInt(propsDraw[size])/divIfCenter);
			}
		};

		//::side-top (margin-top)
		const marginTopSize = size({ width: '100%', height: propsDraw['margin-top'] });
		const marginTopPosition = position({ top: toPixel(this.fullHeight), left: 0});
		const sideTop = compose(marginTopSize, marginTopPosition);

		elementPlaceload.appendChild(sideTop(divElement({className: 'placeload-masker'})));

		//::side
		const sideSizeX = getSizeSide('width');
		const sideSizeY = getSizeSide('height');
		const maskerHeight = parseInt(propsDraw['margin-top']) + this.fullHeight || this.fullHeight;
		const maskerSize = size({ width: sideSizeX, height: propsDraw.height });
		const maskerPosition = position(propsDraw.center ? { right: 0, top: toPixel(maskerHeight) } : { left: propsDraw.width, top: toPixel(maskerHeight) });

		//::side-right
		const sideRigth = compose(maskerSize, maskerPosition);
		elementPlaceload.appendChild(sideRigth(elementDraw));

		//::side-left (center)
		if(propsDraw.center){
			const sideLeft = compose(maskerSize, position({left: 0, top: toPixel(this.fullHeight)}));
			elementPlaceload.appendChild(sideLeft(divElement({className:'placeload-masker center'})));
		}

		this.fullHeight += parseInt(propsDraw.height) + parseInt(propsDraw['margin-top']);
		elementPlaceload.style.height = toPixel(this.fullHeight);
	}
}

const userPlaceload = new Placeload('.user-placeload', {borderRadius: '10px'});
userPlaceload.draw({width: '50%', height: '30px'});
userPlaceload.draw({width: '100px', height: '100px', 'margin-top': '4px'});
userPlaceload.draw({width: '50%', height: '30px'});

// Export
if (typeof window !== 'undefined' && window) {
	if (typeof module === 'object' && module.exports) {
	  module.exports = Placeload;
	} else {
	  // Browser
	  window.Placeload = Placeload;
	}
}
