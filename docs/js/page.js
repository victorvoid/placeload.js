var app = (function () {
  var navigation = document.querySelector('#header')
  window.addEventListener('scroll', function (event) {
    var top = this.scrollY
    if (top > 600) {
      if (navigation.className !== 'nav-fix') navigation.className = 'nav-fix'
    } else {
      navigation.className = ' '
    }
  }, false)
})()
