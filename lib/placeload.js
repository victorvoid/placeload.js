function Placeload$1852(containerEl$1853) {
    this.fullHeight = 0;
    //container complete
    this.fullHeightSide = 0;
    //container right complete
    this.container = containerEl$1853;
    this.wasRight = false;
    // if you have already painted the right side
    this.widthRight = '';
    this.marginLeftOfSide = '';
    /**
	* @description Represents a pincel of the Placeload.
	* @param {Object} with paint's data
	*/
    this.draw = function (dataComponent$1854) {
        var dataDefault$1856 = {
            backgroundColor: '',
            animationDelay: 300,
            width: '',
            height: '',
            marginTop: '',
            marginLeft: '',
            marginBottom: '',
            right: false
        };
        for (var key$1858 in dataComponent$1854) {
            dataDefault$1856[key$1858] = dataComponent$1854[key$1858];
        }
        if (this.container === '') {
            throw new Error('You need to specific container name to draw...');
        }
        console.log('draw...');
        var /**
		* @description Set a size of the Element
		* @param {String} - Width
		* @param {String} - Height
		*/
        size$1870 = function (width$1933, height$1934) {
            return function (el$1935) {
                el$1935.style.width = width$1933;
                el$1935.style.height = height$1934;
                return el$1935;
            }.bind(this);
        };
        var addClass$1880 = function (classname$1936) {
            return function (el$1937) {
                el$1937.className += ' ' + classname$1936;
                return el$1937;
            }.bind(this);
        };
        var appendIn$1890 = function (el$1938) {
            return function (x$1939) {
                return el$1938.appendChild(x$1939);
            };
        };
        var removeUnit$1896 = function (st$1940) {
            return st$1940.slice(0, st$1940.indexOf('px'));
        };
        var removeUnitInt$1902 = function (st$1941) {
            return parseInt(removeUnit$1896(st$1941));
        };
        var animateContentEl$1904 = //remove Unit and return int
        '';
        if (typeof document.querySelector(this.container + ' .animated-background') !== 'undefined' && document.querySelector(this.container + ' .animated-background') === null) {
            animateContentEl$1904 = addClass$1880('animated-background')(appendIn$1890(document.querySelector(this.container))(document.createElement('div')));
        } else {
            animateContentEl$1904 = document.querySelector(this.container + ' > ' + '.animated-background');
        }
        var animateContentX$1909 = animateContentEl$1904.offsetWidth;
        var marginTopValue$1911 = dataDefault$1856.marginTop.slice(0, dataDefault$1856.marginTop.indexOf('px'));
        marginTopValue$1911 = marginTopValue$1911 === '' ? 0 : parseInt(marginTopValue$1911);
        var topPositionElement$1913 = this.fullHeight + marginTopValue$1911;
        var sideInCenterSizeX$1916 = animateContentX$1909 - removeUnitInt$1902(dataDefault$1856.width) / 2;
        var sideSizeX$1919 = animateContentX$1909 - parseInt(removeUnit$1896(dataDefault$1856.width));
        var widthElement$1921 = dataDefault$1856.center ? sideInCenterSizeX$1916 : 0;
        var position$1931 = function (obj$1944) {
            return function (el$1945) {
                if (typeof obj$1944.top !== 'undefined')
                    el$1945.style.top = obj$1944.top;
                if (typeof obj$1944.right !== 'undefined')
                    el$1945.style.right = obj$1944.right;
                if (typeof obj$1944.bottom !== 'undefined')
                    el$1945.style.bottom = obj$1944.bottom;
                if (typeof obj$1944.left !== 'undefined')
                    el$1945.style.left = obj$1944.left;
                return el$1945;
            }.bind(this);
        };
        if (dataDefault$1856.right) {
            var fullHeightSideValue$1956 = dataDefault$1856.height !== '' ? removeUnitInt$1902(dataDefault$1856.height) : 0;
            this.sideRightElement.style.display = 'none';
            if (//div before, beacause is in bottom.
                //row right
                this.wasRight) {
                this.rowRightlement = position$1931({
                    top: removeUnitInt$1902(dataDefault$1856.height) + this.fullHeightSide * 2 + 'px',
                    left: this.widthRight
                })(size$1870('100%', this.marginLeftOfSide)(addClass$1880('background-masker')(appendIn$1890(animateContentEl$1904)(document.createElement('div')))));
                this.fullHeightSide += fullHeightSideValue$1956;
            } else {
                this.widthRight = removeUnitInt$1902(dataDefault$1856.width) + removeUnitInt$1902(dataDefault$1856.marginLeft) + 'px';
                this.marginLeftOfSide = dataDefault$1856.marginLeft;
                this.paddingLeftlement = position$1931({
                    top: 0,
                    left: dataDefault$1856.width
                })(size$1870(dataDefault$1856.marginLeft, '100%')(addClass$1880('background-masker')(appendIn$1890(animateContentEl$1904)(document.createElement('div')))));
            }
            this.wasRight = true;
        } else {
            this.marginTopElement = position$1931({
                top: this.fullHeight + 'px',
                left: 0
            })(size$1870('100%', dataDefault$1856.marginTop)(addClass$1880('background-masker')(appendIn$1890(animateContentEl$1904)(document.createElement('div')))));
            this.sideLeftElement = position$1931({
                top: topPositionElement$1913 + 'px',
                left: 0
            })(size$1870(widthElement$1921 + 'px', dataDefault$1856.height)(addClass$1880('background-masker')(appendIn$1890(animateContentEl$1904)(document.createElement('div')))));
            this.sideRightElement = position$1931({
                top: topPositionElement$1913 + 'px',
                right: 0
            })(size$1870(dataDefault$1856.center ? widthElement$1921 + 'px' : sideSizeX$1919 + 'px', dataDefault$1856.height)(addClass$1880('background-masker')(appendIn$1890(animateContentEl$1904)(document.createElement('div')))));
            this.fullHeight += removeUnitInt$1902(dataDefault$1856.height) + marginTopValue$1911;
        }
        animateContentEl$1904.style.height = this.fullHeight + 'px';
    };
}
if (// Export
    typeof window !== 'undefined' && window) {
    if (typeof module === 'object' && module.exports) {
        module.exports = Placeload$1852;
    } else {
        // Browser
        window.Placeload = Placeload$1852;
    }
}