
function main() {

(function () {
   'use strict';
    $('#ticker_1').cryptoticker();
    $('#ticker_2').cryptoticker({
      startIndex:5,
      getTopCoins:20,
      speed:22000,
      nameColor:'yellow',
      separatorColor:'#ddd',
      separatorWidth:10,
      priceColor:'orange'
    });
    $('#ticker_3').cryptoticker({
      startIndex:39,
      getTopCoins:14,
      speed:10000,
      nameColor:'#44aa33',
      separatorColor:'red',
      separatorWidth:10,
      priceColor:'orange',
      resetSpeed:500
  });
  $('#ticker_4').cryptoticker({
    nameColor:'orange',
    capColor:'white',
    priceColor:'orange'
  });

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });


    // Show Menu on Book
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 500;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({
        target: '.navbar-default',
        offset: 80
    });

	// Hide nav on click
  $(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });

  	// Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });

    // Nivo Lightbox
    $('.portfolio-item a').nivoLightbox({
            effect: 'slideDown',
            keyboardNav: true,
        });

}());


}
main();
