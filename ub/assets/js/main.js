(function($){

    "use strict";

    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        initialSlide: 1,
		
		// autoplay: {
        // delay: 2500,
        // disableOnInteraction: false,
		// },
    
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });

    var mySwiper = new Swiper ('.swiper-container-2', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        initialSlide: 1,
		
		autoplay: {
        delay: 2500,
        disableOnInteraction: false,
		},
        // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        //   type: 'bullets'
        // },
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
    var mySwiper = new Swiper ('.swiper-container-3', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        initialSlide: 1,
    
        // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        //   type: 'bullets'
        // },
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });

      $(".our-team-carousel").owlCarousel({
        loop   : true,
        margin : 15,
        nav    : true,
        navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        responsive:{
    
            0 : {
    
                items:1
            },
    
            480 : {
    
                items: 1
            },
    
            768 : {
    
                items : 2
            },
            992 : {
                items : 3
            },
            1200 : {
                items : 4
            }
        }
     });
      $(".our-team-carousel-2").owlCarousel({
        loop   : true,
        margin : 30,
        nav    : false,
        responsive:{
    
            0 : {
    
                items:1
            },
    
            480 : {
    
                items: 1
            },
    
            768 : {
    
                items : 2
            },
            992 : {
                items : 4
            },
            1200 : {
                items : 4
            }
        }
     });
      $(".our-team-carousel-3").owlCarousel({
        loop   : true,
        margin : 30,
        nav    : true,
        responsive:{
    
            0 : {
    
                items:1
            },
    
            480 : {
    
                items: 1
            },
    
            768 : {
    
                items : 2
            },
            992 : {
                items : 3
            }
        }
     });
      $(".our-team-carousel-4").owlCarousel({
        loop   : true,
        margin : 30,
        nav    : false,
        responsive:{
    
            0 : {
    
                items:1
            },
    
            480 : {
    
                items: 1
            },
    
            768 : {
    
                items : 3
            },
            992 : {
                items : 3
            }
        }
     });
      $(".testimonials-wrapper").owlCarousel({
        loop   : true,
        margin : 15,
        nav    : false,
        dots: true,
        dotsEach: false,
        responsive:{
    
            0 : {
    
                items:1
            },
    
            480 : {
    
                items: 1
            },
    
            768 : {
    
                items : 2
            },
            992 : {
                items : 3
            }
        }
     });
      $(".testimonials-wrapper-2").owlCarousel({
        loop   : true,
        margin : 15,
        nav    : false,
        dots: true,
        dotsEach: false,
        responsive:{
    
            0 : {
    
                items:1
            },
    
            480 : {
    
                items: 1
            },
    
            768 : {
    
                items : 2
            },
            992 : {
                items : 2
            }
        }
     });
      $(".testimonials-wrapper-3").owlCarousel({
        loop   : true,
        margin : 15,
        nav    : false,
        dots: true,
        dotsEach: false,
        responsive:{
    
            0 : {
    
                items:1
            },
    
            480 : {
    
                items: 1
            },
    
            768 : {
    
                items : 1
            },
            992 : {
                items : 1
            }
        }
     });
      $(".testimonials-wrapper-4").owlCarousel({
        loop   : true,
        margin : 15,
        nav    : false,
        dots: true,
        dotsEach: false,
        responsive:{
    
            0 : {
    
                items:1
            },
    
            480 : {
    
                items: 1
            },
    
            768 : {
    
                items : 1
            },
            992 : {
                items : 1
            }
        }
     });
      $(".testimonials-wrapper-6").owlCarousel({
        loop   : true,
        margin : 30,
        nav    : false,
        dots: true,
        dotsEach: false,
        responsive:{
    
            0 : {
    
                items:1
            },
    
            480 : {
    
                items: 1
            },
    
            768 : {
    
                items : 1
            },
            992 : {
                items : 2
            }
        }
     });
      $(".featured-carousel").owlCarousel({
        loop   : true,
        margin : 15,
        nav    : true,
        navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        dots: true,
        dotsEach: false,
        responsive:{
    
            0 : {
    
                items:1
            },
    
            480 : {
    
                items: 1
            },
    
            768 : {
    
                items : 2
            },
            992 : {
                items : 3
            }
        }
     });
      $(".events-carousel").owlCarousel({
        loop   : true,
        margin : 15,
        nav    : false,
        dots: false,
        dotsEach: false,
        responsive:{
    
            0 : {
    
                items:1
            },
    
            480 : {
    
                items: 1
            },
    
            768 : {
    
                items : 2
            },
            992 : {
                items : 3
            }
        }
     });
      $(".image-gallery").owlCarousel({
        loop   : true,
        nav    : false,
        dots: true,
        dotsEach: true,
        center:true,
        responsive:{
    
            0 : {
    
                items: 2
            },
    
            580 : {
    
                items: 3
            },
    
            768 : {
    
                items : 4
            },
            992 : {
                items : 2
            },
            1100 : {
                items : 3
            }
        }
     });
      $(".latest-blogs-area").owlCarousel({
        loop   : true,
        nav    : true,
        margin: 15,
        dots: false,
        responsive:{
    
            0 : {
    
                items:1
            },
    
            480 : {
    
                items: 1
            },
    
            768 : {
    
                items : 2
            },
            992 : {
                items : 2
            }
        }
     });
      $(".brands-area").owlCarousel({
        loop   : true,
        nav    : false,
        margin: 15,
        responsive:{
    
            0 : {
    
                items: 2
            },
    
            480 : {
    
                items: 2
            },
    
            768 : {
    
                items : 3
            },
            992 : {
                items : 4
            }
        }
     });

     function scrolltop(){

            
        var wind = $(window);
    
        wind.on("scroll" ,function(){
    
            var scrollTop = wind.scrollTop();
    
            if(scrollTop >=500) {
    
                $(".scroll-top").fadeIn("slow");
    
            } else {
            
                $(".scroll-top").fadeOut("slow");
            }
            
    });

    $(".scroll-top").on("click", function(){

        var bodyTop =  $("html, body");
   
          bodyTop.animate({scrollTop: 0},800,"easeOutCubic");
    });
   
    }


scrolltop();

if($(".equal-height").length >0){
    $('.equal-height').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
    });
}



$(".filter-button").on("click", function() {
    var value = $(this).attr('data-filter');

    if (value == "all") {
        //$('.filter').removeClass('hidden');
        $('.filter').show('1000');
    } else {
        $('.filter[filter-item="' + value + '"]').removeClass('hidden');
        $(".filter").not('.filter[filter-item="' + value + '"]').addClass('hidden');
        $(".filter").not('.' + value).hide('3000');
        $('.filter').filter('.' + value).show('3000');
    }
    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

});

 if($(".counter").length >0){
    $('.counter').counterUp({
        delay: 10,
        time: 900
    });
 }

 $('#main_navbar').bootnavbar();

 AOS.init({
    once: true
  });


})(jQuery);