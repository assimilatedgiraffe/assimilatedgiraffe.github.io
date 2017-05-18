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

    // nav bar transparency on landing page, desktop only
      if ($(window).width() > 768) {
        $('.navbar').addClass('nav-transparent');
      }

      $(window).scroll(function() {
        if ($(document).scrollTop() < $(window).height() - 60 && $(window).width() > 768) {
          $('.navbar').addClass('nav-transparent');
        } else {
          $('.navbar').removeClass('nav-transparent');
        }
      });

    // autohide mobile nav on click - creates ugly horizontal scrollbar on scroll
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
