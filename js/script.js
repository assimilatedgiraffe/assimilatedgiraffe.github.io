$(document).ready(function() {
  $('.sidebar').hide();
  $("#heading1").animate({opacity:1}, 2000);
  // $("#heading2").delay(2000).animate({opacity:1}, 3000);
  // $("#subtitle1").delay(4000).animate({opacity:1}, 3000);
  // $("#subtitle2").delay(6000).animate({opacity:1}, 3000);
  // $("#subtitle1").delay(0000).animate({opacity:0.5}, 1000);
  $("#heading1").delay(6000).animate({opacity:0.5}, 3000);
  // $("#heading2").delay(2000).animate({opacity:0.5}, 1000);
  $("nav").delay(5200).animate({opacity:1}, 3000);
  // $(".down-arrow").delay(3500).animate({opacity:1}, 3000);
  // $("#home").delay(1000).removeClass('darken');
  // var i= 0;
  // var array1 = $("#subtitle").value.split("\n");
  // for ( i = 0; i < array1.length; i++) {
  //   var elem = $("#subtitle");
  //   var newElem = elem.cloneNode(true);
  //   newElem.value = array1[i];
  //   elem.parent.insertBefore(newElem, elem.nextSibling);
  //   newElem.animate({opacity:1}, 1000);
  //
  // }
  for ( i = 0; i < 8; i++) {
    $("#subtitle" + i).delay(i * 450 + 2000).animate({opacity:1}, 400);
  };

  // nav transparent on load desktop only
  if (!window.matchMedia('(max-width: 767px)').matches) {
    $('.navbar').addClass('nav-transparent');
  }


  //---thumbnail hover functionality on scroll for mobile---
  //replicate :hover to aviod CSS code duplication
  $('.thumbnail2').hover(function() {
    $(this).toggleClass('hover');
  });

  $('.thumbnail2').on('HoverIfInViewport', function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    if (elementBottom > viewportTop && elementBottom < viewportBottom) {
      $(this).addClass('hover');
    } else {
      $(this).removeClass('hover');
    }
  });

  $(window).scroll(function() {
    var isMobile = window.matchMedia('(max-width: 767px)').matches;

    if (isMobile) {
      $('.thumbnail2').trigger('HoverIfInViewport');
    }

    // nav bar transparency on landing page, desktop only
    if ($(document).scrollTop() < $(window).height() - 0 && !isMobile) {
      $('.navbar').addClass('nav-transparent');
      // $('.navbar-collapse').collapse();
    } else {
      $('.navbar').removeClass('nav-transparent');
    }

  });

  // autohide mobile nav on click
  $('.sidebar a').click(function (e) {
    var isMobile = window.matchMedia('(max-width: 767px)').matches;
    if (isMobile) {
      $('.sidebar').toggle('slide');
    }
  });
});

// animated scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 0
        }, 600);
        return false;
      }
    }
  });
});

// sidebar
$(function(){
	$('.navbar-toggle').on('click',function(){
        $('.sidebar').toggle('slide');
	})
})
