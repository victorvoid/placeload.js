var placeload = function(){
	//default options
	var options = {
		backgroundColor: '',
		animationDelay: 300
	};

	function setOptions (customOptions) {
    // Custom options
    for (var key in customOptions) {
      options[key] = customOptions[key];
    }
  }

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
		puts 'draw...';

		var animateContent = document.querySelector('.animated-background');
		var node = document.querySelector(dataComponent.element);
		var parent = node.parentNode;
		var sideSizeX = (parent.offsetWidth - node.offsetWidth)/2;
		var sideSizeY = (parent.offsetHeight - node.offsetHeight)/2;

		var addClass = λ classname -> λ el => { el.className += ' ' + classname; return el};
		var appendIn = λ el -> λ x -> el.appendChild(x);
		var size = λ(width, height) -> λ (el) => {
			el.style.width = width + 'px';
			el.style.height = height + 'px';
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

		var sideLeft = document.createElement('div')
				|> appendIn(animateContent)
				|> addClass('background-masker')
				|> size(dataComponent.width, dataComponent.height)
				|> position({top: heightLastElement, left: 0})

		var sideRight = document.createElement('div')
				|> appendIn(animateContent)
				|> addClass('background-masker')
				|> size(dataComponent.width, dataComponent.height)
				|> position({top: heightLastElement, right: 0});


		getAllElementsWithAttribute('data-active').map(λ x =>{
			x.removeAttribute('data-active');
		});

		sideRight.setAttribute("data-active", "true");
	}

	return {
		draw: draw,
		setOptions: setOptions
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
