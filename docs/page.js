var app = (function(){
    var navigation = document.querySelector('#navigation__menu');
    window.addEventListener("scroll", function(event) {
      var top = this.scrollY;
      if(top > 900){
        if(navigation.className !== 'nav-fix') navigation.className = 'nav-fix'
      }else{
        navigation.className = ' '
      }
  }, false);
})();
