
    // Type Writer Effect //
    // Start //

    var span, textArr, textIndex, textToShow, textToShowLen, letterIndex, textTimer, letterTimer, textDelay, letterDelay, emptyTimer;

    textArr = [
    "Magnet",
    'Magnet',
    'Magnet',
    'Magnet',
    'Magnet'
    ]

    span = document.getElementsByClassName("type_writer-effect")[0];
    textIndex = 0;
    textDelay= 4200;
    letterDelay = 140;

    function showText() {
    textToShow = textArr[textIndex];
    textToShowLen = textToShow.length;
    letterIndex = 0;

    letterTimer = setInterval(function() {
        span.textContent += textToShow[letterIndex];
        console.log(textToShow[letterIndex]);
        letterIndex++;
        if (letterIndex > textToShowLen-1) {
        clearInterval(letterTimer);
        textTimer = setTimeout(nextText, textDelay)
        }
    } ,letterDelay)

    }

    function nextText() {
    clearTimeout(textTimer);
    textIndex++;
    if (textIndex > textArr.length-1) {
        textIndex = 0;
    }
    emptySpan();

    }

    function emptySpan() {
    emptyTimer = setInterval(removeLetter, letterDelay)
    }


    function removeLetter() {
    if (span.textContent.length != 0) {
        popedSpan = Array.prototype.slice.call(span.textContent).slice(0,span.textContent.length-1).join('');
        span.textContent = popedSpan;
    } else {
        clearInterval(emptyTimer);
        showText();
    }
    }

    emptySpan();
    
// Type Writer Effect //
// End //


    // Custom Page Cursor //
    // Start //
    // Codepen link: https://codepen.io/ig_design/pen/OrLBqO //

    $(window).mousemove(function(e) { 	  
        $(".cursor").css({
            left: e.pageX,
            top: e.pageY
        })	  
    })
    $(".cursor-link")
    .on("mouseenter", function() {	 
    $('.cursor').addClass("active")	  
    })
    .on("mouseleave", function() {	  
    $('.cursor').removeClass("active")	  
    })		

    // Custom Page Cursor //
    // End //    
    
// Falling Cherry Blossoms Click Effect//
// Copied from Codepen: https://codepen.io/internette/pen/OWQOWa //
// Start //

function randNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  _ = self.Flower = function(opts){
    this.left = opts.left;
    this.top = opts.top;
    this.size = randNum(1.5, 6);
    this.drawFlower();
  }
  _.prototype = {
    spinFlower: function(el){
      var r = 0;
      var spd = Math.random() * (3 - 0.05) + 0.05;
      (function spin() {
        if (r === 350){
          r = 0
        } else {
          r += spd
        }
        el.style.transform = 'rotate('+r+'deg)';
        requestAnimationFrame(spin);
      })();
    },
    fall: function(el){
      var _this = this;
      var max_right = _this.left + randNum(20, 50);
      var max_left = _this.left - randNum(20, 50);
      var dir_i = randNum(0,1);
      var directions = ['left', 'right'];
      var direction = directions[dir_i];
      (function fall() {
        if (_this.left === max_left){
          direction = 'right';
          max_left= _this.left - randNum(20, 50);
        }
        if (_this.left === max_right){
          direction = 'left';
          max_right = _this.left + randNum(20, 50);
        }
        if (direction === 'left'){
          _this.left -= 1
        } else {
          _this.left += 1
        }
        _this.top += 2;
        el.style.top = _this.top + 'px';
        el.style.left = _this.left + 'px';
        requestAnimationFrame(fall);
      })();
    },
    fadeOut: function(el){
      el.style.opacity = 1;
  
      (function fade() {
        if ((el.style.opacity -= .007) < 0) {
          el.parentNode.removeChild(el);
        } else {
          requestAnimationFrame(fade);
        }
      })();
    },
    get petal (){
      var petal = document.createElement('div');
      petal.style.userSelect = 'none';
      petal.style.position = 'absolute';
      petal.style.background = 'radial-gradient(white 10%, pink 70%)';
      petal.style.backgroundSize = this.size+'vmin';
      petal.style.backgroundPosition = '-'+this.size/2+'vmin 0';
      petal.style.width = petal.style.height = this.size/2+'vmin';
      petal.style.borderTopLeftRadius = petal.style.borderBottomRightRadius = (42.5 * this.size) / 100 + "vmin";
      return petal;
    },
    get petal_styles(){
      return [
        {
          transform: 'rotate(-47deg)',
          left: '50%',
          marginLeft: '-'+this.size/4+'vmin',
          top: 0
        },{
          transform: 'rotate(15deg)',
          left: '100%',
          marginLeft: '-'+(this.size * 39 /100)+'vmin',
          top: (this.size * 17.5) / 100 + 'vmin'
        },{
          transform: 'rotate(93deg)',
          left: '100%',
          marginLeft: '-'+(this.size * 51) / 100+'vmin',
          top: (this.size * 58) / 100 + 'vmin'
        },{
          transform: 'rotate(175deg)',
          left: '0%',
          marginLeft: (this.size * 5) / 100 +'vmin',
          top: (this.size * 58) / 100 + 'vmin'
        },{
          transform: 'rotate(250deg)',
          left: '0%',
          marginLeft: -(this.size * 8) / 100 +'vmin',
          top: (this.size * 17.5) / 100 + 'vmin'
        }
      ]
    },
    get flower(){
      var flower = document.createElement('div');
      flower.style.userSelect = 'none';
      flower.style.position = 'absolute';
      flower.style.left = this.left + 'px';
      flower.style.top = this.top + 'px';
      flower.style.width = this.size + 'vmin';
      flower.style.height = this.size + 'vmin';
      for (var i = 0; i < 5; i++){
        var petal = this.petal;
        // var styles = this.petal_styles[i];
        petal.style.transform = this.petal_styles[i]['transform'];
        petal.style.top = this.petal_styles[i]['top'];
        petal.style.left = this.petal_styles[i]['left'];
        petal.style.marginLeft = this.petal_styles[i]['marginLeft'];
        flower.appendChild(petal);
      }
      this.fadeOut(flower);
      this.spinFlower(flower);
      this.fall(flower);
      return flower;
    },
    drawFlower: function(){
      document.body.appendChild(this.flower);
    }
  }
  
  window.addEventListener('mousedown', function(e){
    var amt = randNum(1, 5);
    for (var i = 0; i < amt; i++){
      var top = randNum(e.clientY - 30, e.clientY + 30);
      var left = randNum(e.clientX - 30, e.clientX + 10);
      var flower = new Flower({
        top: top,
        left: left
      });
    }
  });

// Falling Cherry Blossoms Click Effect//
// Copied from Codepen: https://codepen.io/internette/pen/OWQOWa //
// End //


