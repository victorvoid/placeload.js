var /*
⊂_ヽ
　＼＼ Λ＿Λ
　  ＼('ㅅ')  Placeload.js developed by Victor Igor (victorvoid)
　　　>　 ⌒ヽ
*/
Placeload$1853 = function (containerEl$1854) {
    this.fullHeight = 0;
    this.container = containerEl$1854;
    this.draw = function (dataComponent$1855) {
        var dataDefault$1857 = {
            container: '',
            backgroundColor: '',
            animationDelay: 300,
            width: '',
            height: '',
            marginTop: ''
        };
        for (var key$1859 in dataComponent$1855) {
            dataDefault$1857[key$1859] = dataComponent$1855[key$1859];
        }
        if (this.container === '') {
            throw new Error('You need to specific container name to draw...');
        }
        console.log('draw...');
        var //helpers λ -> λ -> n
        addClass$1871 = function (classname$1946) {
            return function (el$1947) {
                el$1947.className += ' ' + classname$1946;
                return el$1947;
            }.bind(this);
        };
        var size$1881 = function (width$1948, height$1949) {
            return function (el$1950) {
                el$1950.style.width = width$1948;
                el$1950.style.height = height$1949;
                return el$1950;
            }.bind(this);
        };
        var appendIn$1891 = function (el$1951) {
            return function (x$1952) {
                return el$1951.appendChild(x$1952);
            };
        };
        var removeUnit$1897 = function (st$1953) {
            return st$1953.slice(0, st$1953.indexOf('px'));
        };
        var animateContentEl$1899 = '';
        if (typeof document.querySelector(this.container + ' .animated-background') !== 'undefined' && document.querySelector(this.container + ' .animated-background') === null) {
            animateContentEl$1899 = addClass$1871('animated-background')(appendIn$1891(document.querySelector(this.container))(document.createElement('div')));
        } else {
            animateContentEl$1899 = document.querySelector(this.container + ' > ' + '.animated-background');
        }
        var animateContentX$1904 = animateContentEl$1899.offsetWidth;
        var marginTopValue$1906 = dataDefault$1857.marginTop.slice(0, dataDefault$1857.marginTop.indexOf('px'));
        marginTopValue$1906 = marginTopValue$1906 === '' ? 0 : parseInt(marginTopValue$1906);
        var topPositionElement$1908 = this.fullHeight + marginTopValue$1906;
        var sideInCenterSizeX$1911 = (animateContentX$1904 - parseInt(removeUnit$1897(dataDefault$1857.width))) / 2;
        var sideSizeX$1914 = animateContentX$1904 - parseInt(removeUnit$1897(dataDefault$1857.width));
        var widthElement$1916 = dataDefault$1857.center ? sideInCenterSizeX$1911 : 0;
        var position$1926 = function (obj$1956) {
            return function (el$1957) {
                if (typeof obj$1956.top !== 'undefined')
                    el$1957.style.top = obj$1956.top + 'px';
                if (typeof obj$1956.right !== 'undefined')
                    el$1957.style.right = obj$1956.right + 'px';
                if (typeof obj$1956.bottom !== 'undefined')
                    el$1957.style.bottom = obj$1956.bottom + 'px';
                if (typeof obj$1956.left !== 'undefined')
                    el$1957.style.left = obj$1956.left + 'px';
                return el$1957;
            }.bind(this);
        };
        var marginTopElement$1932 = position$1926({
            top: this.fullHeight,
            left: 0
        })(size$1881('100%', dataDefault$1857.marginTop)(addClass$1871('background-masker')(appendIn$1891(animateContentEl$1899)(document.createElement('div')))));
        var sideLeftElement$1938 = position$1926({
            top: topPositionElement$1908,
            left: 0
        })(size$1881(widthElement$1916 + 'px', dataDefault$1857.height)(addClass$1871('background-masker')(appendIn$1891(animateContentEl$1899)(document.createElement('div')))));
        var sideRightElement$1944 = position$1926({
            top: topPositionElement$1908,
            right: 0
        })(size$1881(dataDefault$1857.center ? widthElement$1916 + 'px' : sideSizeX$1914 + 'px', dataDefault$1857.height)(addClass$1871('background-masker')(appendIn$1891(animateContentEl$1899)(document.createElement('div')))));
        this.fullHeight += parseInt(removeUnit$1897(dataDefault$1857.height)) + marginTopValue$1906;
        console.log('-> ', this.fullHeight);
        animateContentEl$1899.style.height = this.fullHeight + 'px';
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