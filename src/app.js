/*
⊂_ヽ
　＼＼ Λ＿Λ
　  ＼('ㅅ')  Placeload.js developed by Victor Igor (victorvoid)
　　　>　 ⌒ヽ
*/

var placeload = function(){
	var fullHeight = 0;
	function draw(dataComponent){

		var dataDefault = {
			container: '',
			backgroundColor: '',
			animationDelay: 300,
			width: '',
			height: '',
			marginTop: ''
		};

		for (var key in dataComponent) {
			dataDefault[key] = dataComponent[key];
		}

		if(dataDefault.container === ''){
			throw new Error('You need to specific container name to draw...')
		}
		puts 'draw...';
		//helpers λ -> λ -> n
		var addClass  /* |o\ */= λ classname -> λ el => {
			el.className += ' ' + classname;
			return el;
		};
		var size = λ(width, height) -> λ (el) => {
			el.style.width = width;
			el.style.height = height;
			return el;
		};
		var appendIn           = λ el -> λ x -> el.appendChild(x);
		var removeUnit         = λ st -> st.slice(0, st.indexOf('px'));

		var animateContentEl   = '';
		if(isNull$(document.querySelector(dataDefault.container + ' .animated-background'))){
			animateContentEl = document.createElement('div')
					|> appendIn(document.querySelector(dataDefault.container))
					|> addClass('animated-background');
	  }else{
			animateContentEl = document.querySelector(dataDefault.container + ' > '+ '.animated-background');
		}
		var animateContentX = animateContentEl.offsetWidth;

		var marginTopValue     = dataDefault.marginTop.slice(0, dataDefault.marginTop.indexOf('px'));
		marginTopValue         = marginTopValue === '' ? 0 : parseInt(marginTopValue);
		var topPositionElement = fullHeight + marginTopValue;
		var sideInCenterSizeX  = (animateContentX - parseInt(dataDefault.width
															|> removeUnit))/2;
		var sideSizeX          = (animateContentX - parseInt(dataDefault.width
															|> removeUnit));

		var widthElement       = dataDefault.center ? sideInCenterSizeX: 0;
		var position = λ (obj) -> λ el => {
			if(isNotUndef$(obj.top))    el.style.top    = obj.top    + 'px';
			if(isNotUndef$(obj.right))  el.style.right  = obj.right  + 'px';
			if(isNotUndef$(obj.bottom)) el.style.bottom = obj.bottom + 'px';
			if(isNotUndef$(obj.left))   el.style.left   = obj.left   + 'px';
			return el;
		};

		var marginTopElement = document.createElement('div')
				|> appendIn(animateContentEl)
				|> addClass('background-masker')
				|> size('100%', dataDefault.marginTop)
				|> position({top: fullHeight, left: 0});

		var sideLeftElement = document.createElement('div')
				|> appendIn(animateContentEl)
				|> addClass('background-masker')
				|> size(widthElement+'px', dataDefault.height)
				|> position({top: topPositionElement, left: 0});

		var sideRightElement = document.createElement('div')
				|> appendIn(animateContentEl)
				|> addClass('background-masker')
				|> size(dataDefault.center ? widthElement+'px': sideSizeX+'px', dataDefault.height)
				|> position({top: topPositionElement, right: 0});

		fullHeight += parseInt(dataDefault.height |> removeUnit) + marginTopValue;
		animateContentEl.style.height = fullHeight + 'px';
	}
	return {
		draw: draw
	};
};
// Export
if (typeof window !== 'undefined' && window) {
  if (typeof module === 'object' && module.exports) {
    	module.exports = placeload();
  } else {
    // Browser
    window.placeload = placeload();
  }
}
