  $(document).ready(function() {
    $("#heading1").animate({opacity:1}, 3000);
    $("#heading2").delay(2000).animate({opacity:1}, 3000);
    $("#subtitle1").delay(4000).animate({opacity:1}, 3000);
    $("#subtitle2").delay(6000).animate({opacity:1}, 3000);
    $("#subtitle1").delay(0000).animate({opacity:0.5}, 1000);
    $("#heading1").delay(4000).animate({opacity:0.5}, 1000);
    $("#heading2").delay(2000).animate({opacity:0.5}, 1000);
    $("nav").delay(6000).animate({opacity:1}, 3000);
    $("#down-arrow").delay(6000).animate({opacity:1}, 3000);
    $("#home").delay(1000).removeClass('darken');
  });

  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('.navbar').addClass('nav-scrolled');
    } else {
      $('.navbar').removeClass('nav-scrolled');
    }
  });

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
