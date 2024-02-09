
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
    


// About button //
// Start //
const mainButton = document.getElementById("about__button");

mainButton.addEventListener("click", function(event){
    this.remove();
    document.querySelector('main').classList.remove('hidden')
});
// Sourced from "https://stackoverflow.com/questions/70700266/how-can-i-show-page-elements-by-clicking-on-button#:~:text=First%2C%20add%20the%20display%3A%20none%20style%20to%20all,the%20button%20and%20reveals%20all%20previously%20hidden%20elements."//
// About Button //
// End //

// Lazy Loading using lozad.js //
// Source: https://github.com/ApoorvSaxena/lozad.js?tab=readme-ov-file#usage //
// Start //

const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

// Lazy Loading using lozad.js //
// Source: https://github.com/ApoorvSaxena/lozad.js?tab=readme-ov-file#usage //
// End //