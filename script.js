
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





