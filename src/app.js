/*
⊂_ヽ
　＼＼ Λ＿Λ
　  ＼('ㅅ')  Placeload.js developed by Victor Igor (victorvoid)
　　　>　 ⌒ヽ
*/

/**
	* @constructor
	* @param {String} Placeload - Component selector
	*/
function Placeload(containerEl){
	this.fullHeight = 0; //container complete
	this.fullHeightSide = 0; //container right complete
	this.container = containerEl;
	this.wasRight = false; // if you have already painted the right side
	this.widthRight = '';
	this.marginLeftOfSide = '';

/**
	* @description Represents a pincel of the Placeload.
	* @param {Object} with paint's data
	*/
	this.draw = function (dataComponent){
		var dataDefault = {
			backgroundColor: '',
			animationDelay: 300,
			width: '',
			height: '',
			marginTop: '',
			marginLeft: '',
			marginBottom: '',
			right: false
		};

		for (var key in dataComponent) {
			dataDefault[key] = dataComponent[key];
		}

		if(this.container === ''){
			throw new Error('You need to specific container name to draw...')
		}
		puts 'draw...';

		/**
		* @description Set a size of the Element
		* @param {String} - Width
		* @param {String} - Height
		*/
		var size = λ(width, height) -> λ (el) => {
			el.style.width = width;
			el.style.height = height;
			return el;
		};

		/**
		* @description Add class in Element
		* @param {String} - Class name
		* @return {Function} - Waiting for element to put class
		*/
		var addClass  /* |o\ */= λ classname -> λ el => {
			el.className += ' ' + classname;
			return el;
		};

		/**
		* @description Append element in element
		* @param {Element} - Element to append
		* @return {Function} - Waiting for element by parameter to append {Element}
		*/
		var appendIn           = λ el -> λ x -> el.appendChild(x);

		var removeUnit         = λ st -> st.slice(0, st.indexOf('px'));
		var removeUnitInt   = λ st -> parseInt(removeUnit(st)); //remove Unit and return int

		var animateContentEl   = '';
		if(isNull$(document.querySelector(this.container + ' .animated-background'))){
			animateContentEl = document.createElement('div')
					|> appendIn(document.querySelector(this.container))
					|> addClass('animated-background');
	  }else{
			animateContentEl = document.querySelector(this.container + ' > '+ '.animated-background');
		}
		var animateContentX = animateContentEl.offsetWidth;
		var marginTopValue     = dataDefault.marginTop.slice(0, dataDefault.marginTop.indexOf('px'));
		marginTopValue         = marginTopValue === '' ? 0 : parseInt(marginTopValue);
		var topPositionElement = this.fullHeight + marginTopValue;
		var sideInCenterSizeX  = animateContentX - (dataDefault.width |> removeUnitInt)/2;
		var sideSizeX          = (animateContentX - parseInt(dataDefault.width
																|> removeUnit));

		var widthElement       = dataDefault.center ? sideInCenterSizeX: 0;
		var position = λ (obj) -> λ el => {
			if(isNotUndef$(obj.top))    el.style.top    = obj.top;
			if(isNotUndef$(obj.right))  el.style.right  = obj.right;
			if(isNotUndef$(obj.bottom)) el.style.bottom = obj.bottom;
			if(isNotUndef$(obj.left))   el.style.left   = obj.left;
			return el;
		};

		if(dataDefault.right){
			var fullHeightSideValue = dataDefault.height !== '' ? (dataDefault.height |> removeUnitInt) : 0;
			this.sideRightElement.style.display = 'none'; //div before, beacause is in bottom.
			//row right
			if(this.wasRight){
				this.rowRightlement = document.createElement('div')
						|> appendIn(animateContentEl)
						|> addClass('background-masker')
						|> size('100%', this.marginLeftOfSide)
						|> position(
							{
								top: ((dataDefault.height|> removeUnitInt) + (this.fullHeightSide*2)) + 'px',
								left: this.widthRight
							});

			this.fullHeightSide += fullHeightSideValue;
			//content right
			}else{
				this.widthRight = ((dataDefault.width |> removeUnitInt) + (dataDefault.marginLeft |> removeUnitInt)) + 'px';
				this.marginLeftOfSide = dataDefault.marginLeft;
				this.paddingLeftlement = document.createElement('div')
						|> appendIn(animateContentEl)
						|> addClass('background-masker')
						|> size(dataDefault.marginLeft, '100%')
						|> position({top: 0, left: dataDefault.width});
			}
			this.wasRight = true; //get future element
		}else{
			this.marginTopElement = document.createElement('div')
					|> appendIn(animateContentEl)
					|> addClass('background-masker')
					|> size('100%', dataDefault.marginTop)
					|> position({top: this.fullHeight+'px', left: 0});

			this.sideLeftElement = document.createElement('div')
					|> appendIn(animateContentEl)
					|> addClass('background-masker')
					|> size(widthElement+'px', dataDefault.height)
					|> position({top: topPositionElement+'px', left: 0});

			this.sideRightElement = document.createElement('div')
					|> appendIn(animateContentEl)
					|> addClass('background-masker')
					|> size(dataDefault.center ? widthElement+'px': sideSizeX+'px', dataDefault.height)
					|> position({top: topPositionElement+'px', right: 0});
			this.fullHeight += (dataDefault.height |> removeUnitInt) + marginTopValue;
		 }
		animateContentEl.style.height = this.fullHeight + 'px';
	}
}

// Export
if (typeof window !== 'undefined' && window) {
  if (typeof module === 'object' && module.exports) {
    	module.exports = Placeload;
  } else {
    // Browser
	    window.Placeload = Placeload;
  }
}
