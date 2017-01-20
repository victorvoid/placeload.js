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


	function draw(element){
		console.log('draw...');
	}

	return {
		draw: draw
	};
};


// Export
if (typeof window !== 'undefined' && window) {
  if (typeof module === 'object' && module.exports) {
    // Node.js
    module.exports = placeload();
  } else {
    // Browser
    window.placeload = placeload();
  }
}
