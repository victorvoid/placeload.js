var placeload = function(){
	var fullHeight = 0;

	function getAllElementsWithAttribute(attribute) {
		var matchingElements = [];
		var allElements = document.getElementsByTagName('*');
		for (var i = 0, n = allElements.length; i < n; i++)
		{
			if (allElements[i].getAttribute(attribute) !== null)
			{
					// Element exists with attribute. Add to array.
				matchingElements.push(allElements[i]);
			}
		}
		return matchingElements;
	}
	function draw(dataComponent){

		var dataDefault = {
			element: '',
			backgroundColor: '',
			animationDelay: 300,
			width: '',
			height: '',
			marginTop: ''
		};

		for (var key in dataComponent) {
			dataDefault[key] = dataComponent[key];
		}

		puts 'draw...';

		var animateContent = document.querySelector('.animated-background');
		var animateContentX = animateContent.offsetWidth;
		//helpers /o/
		var addClass = λ classname -> λ el => { el.className += ' ' + classname; return el};
		var appendIn = λ el -> λ x -> el.appendChild(x);
		var removeUnit = λ st -> st.slice(0, st.indexOf('px'));
		var sideInCenterSizeX = (animateContentX - parseInt(dataDefault.width |> removeUnit))/2;
		var sideSizeX = (animateContentX - parseInt(dataDefault.width |> removeUnit));
		var size = λ(width, height) -> λ (el) => {
			el.style.width = width;
			el.style.height = height;
			return el;
		};
		var position = λ (obj) -> λ el => {
			if(isNotUndef$(obj.top))    el.style.top    = obj.top    + 'px';
			if(isNotUndef$(obj.right))  el.style.right  = obj.right  + 'px';
			if(isNotUndef$(obj.bottom)) el.style.bottom = obj.bottom + 'px';
			if(isNotUndef$(obj.left))   el.style.left   = obj.left   + 'px';
			return el;
		};

		var heightLastElement = getAllElementsWithAttribute('data-active').map(λ x -> x.offsetHeight)[0];
		var marginTopValue = dataDefault.marginTop.slice(0, dataDefault.marginTop.indexOf('px'));
		marginTopValue = marginTopValue === '' ? 0 : parseInt(marginTopValue)
		console.log(sideInCenterSizeX)
		var topPositionElement = fullHeight + marginTopValue;
		var widthElement = dataDefault.center ? sideInCenterSizeX: 0;
		var marginTopElement = document.createElement('div')
				|> appendIn(animateContent)
				|> addClass('background-masker')
				|> size('100%', dataDefault.marginTop)
				|> position({top: fullHeight, left: 0});

		var sideLeftElement = document.createElement('div')
				|> appendIn(animateContent)
				|> addClass('background-masker')
				|> size(widthElement+'px', dataDefault.height)
				|> position({top: topPositionElement, left: 0});

		var sideRightElement = document.createElement('div')
				|> appendIn(animateContent)
				|> addClass('background-masker')
				|> size(dataDefault.center ? widthElement+'px': sideSizeX+'px', dataDefault.height)
				|> position({top: topPositionElement, right: 0});

		getAllElementsWithAttribute('data-active').map(λ x =>{
			x.removeAttribute('data-active');
		});

		fullHeight += parseInt(dataDefault.height |> removeUnit) + marginTopValue;
		animateContent.style.height = fullHeight + 'px';
		sideRightElement.setAttribute("data-active", "true");
	}

	return {
		draw: draw
	};
};
// Export
if (typeof window !== 'undefined' && window) {
  if (typeof module === 'object' && module.exports) {
    // Node.js module.exports = placeload();
  } else {
    // Browser
    window.placeload = placeload();
  }
}
