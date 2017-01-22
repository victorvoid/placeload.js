var /*
⊂_ヽ
　＼＼ Λ＿Λ
　  ＼('ㅅ')  Placeload.js developed by Victor Igor (victorvoid)
　　　>　 ⌒ヽ
*/
Placeload$1853 = function () {
    this.fullHeight = 0;
    this.container = '';
    this.draw = function (dataComponent$1854) {
        console.log('---> ', this.fullHeight);
        var dataDefault$1856 = {
            container: '',
            backgroundColor: '',
            animationDelay: 300,
            width: '',
            height: '',
            marginTop: ''
        };
        for (var key$1858 in dataComponent$1854) {
            dataDefault$1856[key$1858] = dataComponent$1854[key$1858];
        }
        if (dataDefault$1856.container === '') {
            throw new Error('You need to specific container name to draw...');
        }
        console.log('draw...');
        var //helpers λ -> λ -> n
        addClass$1870 = function (classname$1945) {
            return function (el$1946) {
                el$1946.className += ' ' + classname$1945;
                return el$1946;
            }.bind(this);
        };
        var size$1880 = function (width$1947, height$1948) {
            return function (el$1949) {
                el$1949.style.width = width$1947;
                el$1949.style.height = height$1948;
                return el$1949;
            }.bind(this);
        };
        var appendIn$1890 = function (el$1950) {
            return function (x$1951) {
                return el$1950.appendChild(x$1951);
            };
        };
        var removeUnit$1896 = function (st$1952) {
            return st$1952.slice(0, st$1952.indexOf('px'));
        };
        var animateContentEl$1898 = '';
        if (typeof document.querySelector(dataDefault$1856.container + ' .animated-background') !== 'undefined' && document.querySelector(dataDefault$1856.container + ' .animated-background') === null) {
            animateContentEl$1898 = addClass$1870('animated-background')(appendIn$1890(document.querySelector(dataDefault$1856.container))(document.createElement('div')));
        } else {
            animateContentEl$1898 = document.querySelector(dataDefault$1856.container + ' > ' + '.animated-background');
        }
        var animateContentX$1903 = animateContentEl$1898.offsetWidth;
        var marginTopValue$1905 = dataDefault$1856.marginTop.slice(0, dataDefault$1856.marginTop.indexOf('px'));
        marginTopValue$1905 = marginTopValue$1905 === '' ? 0 : parseInt(marginTopValue$1905);
        var topPositionElement$1907 = this.fullHeight + marginTopValue$1905;
        var sideInCenterSizeX$1910 = (animateContentX$1903 - parseInt(removeUnit$1896(dataDefault$1856.width))) / 2;
        var sideSizeX$1913 = animateContentX$1903 - parseInt(removeUnit$1896(dataDefault$1856.width));
        var widthElement$1915 = dataDefault$1856.center ? sideInCenterSizeX$1910 : 0;
        var position$1925 = function (obj$1955) {
            return function (el$1956) {
                if (typeof obj$1955.top !== 'undefined')
                    el$1956.style.top = obj$1955.top + 'px';
                if (typeof obj$1955.right !== 'undefined')
                    el$1956.style.right = obj$1955.right + 'px';
                if (typeof obj$1955.bottom !== 'undefined')
                    el$1956.style.bottom = obj$1955.bottom + 'px';
                if (typeof obj$1955.left !== 'undefined')
                    el$1956.style.left = obj$1955.left + 'px';
                return el$1956;
            }.bind(this);
        };
        var marginTopElement$1931 = position$1925({
            top: this.fullHeight,
            left: 0
        })(size$1880('100%', dataDefault$1856.marginTop)(addClass$1870('background-masker')(appendIn$1890(animateContentEl$1898)(document.createElement('div')))));
        var sideLeftElement$1937 = position$1925({
            top: topPositionElement$1907,
            left: 0
        })(size$1880(widthElement$1915 + 'px', dataDefault$1856.height)(addClass$1870('background-masker')(appendIn$1890(animateContentEl$1898)(document.createElement('div')))));
        var sideRightElement$1943 = position$1925({
            top: topPositionElement$1907,
            right: 0
        })(size$1880(dataDefault$1856.center ? widthElement$1915 + 'px' : sideSizeX$1913 + 'px', dataDefault$1856.height)(addClass$1870('background-masker')(appendIn$1890(animateContentEl$1898)(document.createElement('div')))));
        this.fullHeight += parseInt(removeUnit$1896(dataDefault$1856.height)) + marginTopValue$1905;
        console.log('-> ', this.fullHeight);
        animateContentEl$1898.style.height = this.fullHeight + 'px';
    };
};
if (// Export
    typeof window !== 'undefined' && window) {
    if (typeof module === 'object' && module.exports) {
        module.exports = Placeload$1853();
    } else {
        // Browser
        window.Placeload = Placeload$1853;
    }
}