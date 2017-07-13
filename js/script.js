$(document).ready(function() {
  $("#heading1").animate({opacity:1}, 2000);
  // $("#heading2").delay(2000).animate({opacity:1}, 3000);
  // $("#subtitle1").delay(4000).animate({opacity:1}, 3000);
  // $("#subtitle2").delay(6000).animate({opacity:1}, 3000);
  // $("#subtitle1").delay(0000).animate({opacity:0.5}, 1000);
  $("#heading1").delay(6000).animate({opacity:0.5}, 3000);
  // $("#heading2").delay(2000).animate({opacity:0.5}, 1000);
  $("nav").delay(6000).animate({opacity:1}, 3000);
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
    $("#subtitle" + i).delay(i * 650 + 2000).animate({opacity:1}, 400);
  };

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
    if ($(document).scrollTop() < $(window).height() - 60 && !isMobile) {
      $('.navbar').addClass('nav-transparent');
    } else {
      $('.navbar').removeClass('nav-transparent');
    }

  });

  // autohide mobile nav on click
  $('.navbar-collapse a').click(function (e) {
    if ($('.navbar-collapse.in').is(':visible')) {
      $('.navbar-collapse').collapse('toggle');
    };
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
          scrollTop: target.offset().top - 50
        }, 600);
        return false;
      }
    }
  });
});
