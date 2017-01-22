var /*
⊂_ヽ
　＼＼ Λ＿Λ
　  ＼('ㅅ')  Placeload.js developed by Victor Igor (victorvoid)
　　　>　 ⌒ヽ
*/
placeload$1852 = function () {
    var fullHeight$1855 = 0;
    function draw$1856(dataComponent$1857) {
        var dataDefault$1859 = {
            container: '',
            backgroundColor: '',
            animationDelay: 300,
            width: '',
            height: '',
            marginTop: ''
        };
        for (var key$1861 in dataComponent$1857) {
            dataDefault$1859[key$1861] = dataComponent$1857[key$1861];
        }
        if (dataDefault$1859.container === '') {
            throw new Error('You need to specific container name to draw...');
        }
        console.log('draw...');
        var //helpers λ -> λ -> n
        addClass$1873 = function (classname$1948) {
            return function (el$1949) {
                el$1949.className += ' ' + classname$1948;
                return el$1949;
            }.bind(this);
        };
        var size$1883 = function (width$1950, height$1951) {
            return function (el$1952) {
                el$1952.style.width = width$1950;
                el$1952.style.height = height$1951;
                return el$1952;
            }.bind(this);
        };
        var appendIn$1893 = function (el$1953) {
            return function (x$1954) {
                return el$1953.appendChild(x$1954);
            };
        };
        var removeUnit$1899 = function (st$1955) {
            return st$1955.slice(0, st$1955.indexOf('px'));
        };
        var animateContentEl$1901 = '';
        if (typeof document.querySelector(dataDefault$1859.container + ' .animated-background') !== 'undefined' && document.querySelector(dataDefault$1859.container + ' .animated-background') === null) {
            animateContentEl$1901 = addClass$1873('animated-background')(appendIn$1893(document.querySelector(dataDefault$1859.container))(document.createElement('div')));
        } else {
            animateContentEl$1901 = document.querySelector(dataDefault$1859.container + ' > ' + '.animated-background');
        }
        var animateContentX$1906 = animateContentEl$1901.offsetWidth;
        var marginTopValue$1908 = dataDefault$1859.marginTop.slice(0, dataDefault$1859.marginTop.indexOf('px'));
        marginTopValue$1908 = marginTopValue$1908 === '' ? 0 : parseInt(marginTopValue$1908);
        var topPositionElement$1910 = fullHeight$1855 + marginTopValue$1908;
        var sideInCenterSizeX$1913 = (animateContentX$1906 - parseInt(removeUnit$1899(dataDefault$1859.width))) / 2;
        var sideSizeX$1916 = animateContentX$1906 - parseInt(removeUnit$1899(dataDefault$1859.width));
        var widthElement$1918 = dataDefault$1859.center ? sideInCenterSizeX$1913 : 0;
        var position$1928 = function (obj$1958) {
            return function (el$1959) {
                if (typeof obj$1958.top !== 'undefined')
                    el$1959.style.top = obj$1958.top + 'px';
                if (typeof obj$1958.right !== 'undefined')
                    el$1959.style.right = obj$1958.right + 'px';
                if (typeof obj$1958.bottom !== 'undefined')
                    el$1959.style.bottom = obj$1958.bottom + 'px';
                if (typeof obj$1958.left !== 'undefined')
                    el$1959.style.left = obj$1958.left + 'px';
                return el$1959;
            }.bind(this);
        };
        var marginTopElement$1934 = position$1928({
            top: fullHeight$1855,
            left: 0
        })(size$1883('100%', dataDefault$1859.marginTop)(addClass$1873('background-masker')(appendIn$1893(animateContentEl$1901)(document.createElement('div')))));
        var sideLeftElement$1940 = position$1928({
            top: topPositionElement$1910,
            left: 0
        })(size$1883(widthElement$1918 + 'px', dataDefault$1859.height)(addClass$1873('background-masker')(appendIn$1893(animateContentEl$1901)(document.createElement('div')))));
        var sideRightElement$1946 = position$1928({
            top: topPositionElement$1910,
            right: 0
        })(size$1883(dataDefault$1859.center ? widthElement$1918 + 'px' : sideSizeX$1916 + 'px', dataDefault$1859.height)(addClass$1873('background-masker')(appendIn$1893(animateContentEl$1901)(document.createElement('div')))));
        fullHeight$1855 += parseInt(removeUnit$1899(dataDefault$1859.height)) + marginTopValue$1908;
        animateContentEl$1901.style.height = fullHeight$1855 + 'px';
    }
    return { draw: draw$1856 };
};
if (// Export
    typeof window !== 'undefined' && window) {
    if (typeof module === 'object' && module.exports) {
        module.exports = placeload$1852();
    } else {
        // Browser
        window.placeload = placeload$1852();
    }
}