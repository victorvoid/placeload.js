var placeload = function(){
	//default options
	var dataDefault = {
		backgroundColor: '',
		animationDelay: 300,
		width: '',
		height: '',
		marginTop: ''
	};

	function getAllElementsWithAttribute(attribute)
	{
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

		for (var key in dataComponent) {
			dataDefault[key] = dataComponent[key];
		}

		puts 'draw...';

		var animateContent = document.querySelector('.animated-background');
		var node = document.querySelector(dataComponent.element);
		var parent = node.parentNode;
		var sideSizeX = (parent.offsetWidth - node.offsetWidth)/2;
		var sideSizeY = (parent.offsetHeight - node.offsetHeight)/2;

		//helpers /o/
		var addClass = λ classname -> λ el => { el.className += ' ' + classname; return el};
		var appendIn = λ el -> λ x -> el.appendChild(x);
		var size = λ(width, height) -> λ (el) => {
			el.style.width = width;
			el.style.height = height;
			return el;
		};


		var position = λ (obj) -> λ el => {
			if(obj.top != 'undefined') el.style.top = obj.top + 'px';
			if(obj.right != 'undefined') el.style.right = obj.right + 'px';
			if(obj.bottom != 'undefined') el.style.bottom = obj.bottom + 'px';
			if(obj.left != 'undefined') el.style.left = obj.left + 'px';

			return el;
		};


		var heightLastElement = getAllElementsWithAttribute('data-active').map(λ x -> x.offsetHeight)[0];
		var marginTopValue = dataDefault.marginTop.slice(0, dataDefault.marginTop.indexOf('px'));
		marginTopValue = marginTopValue === '' ? marginTopValue : parseInt(marginTopValue);
		var marginTopElement = document.createElement('div')
				|> appendIn(animateContent)
				|> addClass('background-masker')
				|> size('100%', dataDefault.marginTop)
				|> position({top: heightLastElement, left: 0});

		var sideLeftElement = document.createElement('div')
				|> appendIn(animateContent)
				|> addClass('background-masker')
				|> size(dataDefault.width, dataDefault.height)
				|> position({top: heightLastElement+marginTopValue, left: 0});

		var sideRightElement = document.createElement('div')
				|> appendIn(animateContent)
				|> addClass('background-masker')
				|> size(dataDefault.width, dataDefault.height)
				|> position({top: heightLastElement+marginTopValue, right: 0});

		getAllElementsWithAttribute('data-active').map(λ x =>{
			x.removeAttribute('data-active');
		});

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
