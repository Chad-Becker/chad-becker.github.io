$(document).ready(function(){

// ---------------------Smooth Scrolling----------------------------------

  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a.scroll, a[href='#aboutMe']").on('click', function(event) {

  // Prevent default anchor click behavior
  event.preventDefault();

  // Store hash
  var hash = this.hash;

  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
  $('html, body').animate({
  	scrollTop: $(hash).offset().top
  }, 2000, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
});
});

// ---------------------Popovers------------------------------------------

$('[data-toggle="popover"]').popover();

// ---------------------Slide-In Animation--------------------------------

$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top - 700;

    var winTop = $(window).scrollTop();
    if (pos < winTop) {
      $(this).addClass("slide");
    }
  });
});

});