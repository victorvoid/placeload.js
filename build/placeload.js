function Placeload$1497(containerEl$1498, options$1499) {
    this.fullHeight = 0;
    //container complete
    this.fullHeightSide = 0;
    //container right complete
    this.container = containerEl$1498;
    this.wasRight = false;
    // if you have already painted the right side
    this.widthRight = '';
    this.marginLeftOfSide = '';
    var /**
	* @description Options of the container background to customize.
	*/
    backOptions$1500 = {
        backgroundColor: '',
        animationDelay: 300,
        borderRadius: ''
    };
    for (var key$1501 in options$1499) {
        backOptions$1500[key$1501] = options$1499[key$1501];
    }
    var /**************** HELPERS **************/
    /**
	* @description Set a size of the Element
	* @param {String} - Width
	* @param {String} - Height
	*/
    size$1510 = function (width$1554, height$1555) {
        return function (el$1556) {
            el$1556.style.width = width$1554;
            el$1556.style.height = height$1555;
            return el$1556;
        }.bind(this);
    };
    var /**
	* @description Add class in Element
	* @param {String} - Class name
	* @return {Function} - Waiting for element to put class
	*/
    addClass$1519 = function (classname$1557) {
        return function (el$1558) {
            el$1558.className += ' ' + classname$1557;
            return el$1558;
        }.bind(this);
    };
    var /**
	* @description Append element in element
	* @param {Element} - Element to append
	* @return {Function} - Waiting for element by parameter to append {Element}
	*/
    appendIn$1528 = function (el$1559) {
        return function (x$1560) {
            return el$1559.appendChild(x$1560);
        };
    };
    var /**
	* @description Remove unit(px, %, rem, em) of String
	* @param {String}
	* @return {String} removed unit
	*/
    removeUnit$1533 = function (st$1561) {
        return st$1561.slice(0, st$1561.indexOf('px'));
    };
    var /**
	* @description Remove unit(px, %, rem, em) of String AND parse number to Integer
	* @param {String}
	* @return {Integer}
	*/
    removeUnitInt$1538 = function (st$1562) {
        return parseInt(removeUnit$1533(st$1562));
    };
    var /**
	* @description Get obj width data and styling el
	* @param {Object}
	* @return {Function} Function waiting parameter with {Element} to stylize
	*/
    position$1547 = function (obj$1563) {
        return function (el$1564) {
            if (typeof obj$1563.top !== 'undefined')
                el$1564.style.top = obj$1563.top;
            if (typeof obj$1563.right !== 'undefined')
                el$1564.style.right = obj$1563.right;
            if (typeof obj$1563.bottom !== 'undefined')
                el$1564.style.bottom = obj$1563.bottom;
            if (typeof obj$1563.left !== 'undefined')
                el$1564.style.left = obj$1563.left;
            return el$1564;
        }.bind(this);
    };
    /* Create the background animation */
    var animateContentEl$1548 = '';
    if (typeof document.querySelector(this.container + ' .placeload-background') !== 'undefined' && document.querySelector(this.container + ' .placeload-background') === null) {
        animateContentEl$1548 = addClass$1519('placeload-background')(appendIn$1528(document.querySelector(this.container))(document.createElement('div')));
    } else {
        animateContentEl$1548 = document.querySelector(this.container + ' > ' + '.placeload-background');
    }
    var animateContentX$1552 = animateContentEl$1548.offsetWidth;
    if (/******** Customize background ********/
        backOptions$1500.borderRadius !== '') {
        var containerBackground$1575 = document.querySelector(this.container + ' .placeload-background');
        containerBackground$1575.style.borderRadius = backOptions$1500.borderRadius;
    }
    /**
	* @description Represents a pincel of the Placeload.
	* @param {Object} Paint's data
	*/
    this.draw = function (dataComponent$1576) {
        var dataDefault$1577 = {
            width: '',
            height: '',
            marginTop: '',
            marginLeft: '',
            marginBottom: '',
            right: false
        };
        for (var key$1578 in dataComponent$1576) {
            dataDefault$1577[key$1578] = dataComponent$1576[key$1578];
        }
        if (this.container === '') {
            throw new Error('You need to specific container name to draw...');
        }
        var marginTopValue$1580 = dataDefault$1577.marginTop.slice(0, dataDefault$1577.marginTop.indexOf('px'));
        marginTopValue$1580 = marginTopValue$1580 === '' ? 0 : parseInt(marginTopValue$1580);
        var topPositionElement$1581 = this.fullHeight + marginTopValue$1580;
        var sideInCenterSizeX$1583 = (animateContentX$1552 - removeUnitInt$1538(dataDefault$1577.width)) / 2;
        var sideSizeX$1585 = animateContentX$1552 - removeUnitInt$1538(dataDefault$1577.width);
        var widthElement$1586 = dataDefault$1577.center ? sideInCenterSizeX$1583 : 0;
        if (dataDefault$1577.right) {
            var fullHeightSideValue$1589 = dataDefault$1577.height !== '' ? removeUnitInt$1538(dataDefault$1577.height) : 0;
            this.sideRightElement.style.display = 'none';
            if (//div before, beacause is in bottom.
                //row right
                this.wasRight) {
                this.rowRightlement = position$1547({
                    top: removeUnitInt$1538(dataDefault$1577.height) + this.fullHeightSide * 2 + 'px',
                    left: this.widthRight
                })(size$1510('100%', this.marginLeftOfSide)(addClass$1519('placeload-masker')(appendIn$1528(animateContentEl$1548)(document.createElement('div')))));
                this.fullHeightSide += fullHeightSideValue$1589;
            } else {
                this.widthRight = removeUnitInt$1538(dataDefault$1577.width) + removeUnitInt$1538(dataDefault$1577.marginLeft) + 'px';
                this.marginLeftOfSide = dataDefault$1577.marginLeft;
                this.paddingLeftlement = position$1547({
                    top: 0,
                    left: dataDefault$1577.width
                })(size$1510(dataDefault$1577.marginLeft, '100%')(addClass$1519('placeload-masker')(appendIn$1528(animateContentEl$1548)(document.createElement('div')))));
            }
            this.wasRight = true;
        } else {
            this.marginTopElement = position$1547({
                top: this.fullHeight + 'px',
                left: 0
            })(size$1510('100%', dataDefault$1577.marginTop)(addClass$1519('placeload-masker')(appendIn$1528(animateContentEl$1548)(document.createElement('div')))));
            this.sideLeftElement = position$1547({
                top: topPositionElement$1581 + 'px',
                left: 0
            })(size$1510(widthElement$1586 + 'px', dataDefault$1577.height)(addClass$1519('placeload-masker')(appendIn$1528(animateContentEl$1548)(document.createElement('div')))));
            this.sideRightElement = position$1547({
                top: topPositionElement$1581 + 'px',
                right: 0
            })(size$1510(dataDefault$1577.center ? widthElement$1586 + 'px' : sideSizeX$1585 + 'px', dataDefault$1577.height)(addClass$1519('placeload-masker')(appendIn$1528(animateContentEl$1548)(document.createElement('div')))));
            this.fullHeight += removeUnitInt$1538(dataDefault$1577.height) + marginTopValue$1580;
        }
        animateContentEl$1548.style.height = this.fullHeight + 'px';
    };
}
if (// Export
    typeof window !== 'undefined' && window) {
    if (typeof module === 'object' && module.exports) {
        module.exports = Placeload$1497;
    } else {
        // Browser
        window.Placeload = Placeload$1497;
    }
}