/*  ---------------------------------------------------
    Template Name: Dreams
    Description: Dreams wedding template
    Author: Colorib
    Author URI: https://colorlib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Portfolio filter
        --------------------*/
        $('.portfolio__filter li').on('click', function () {
            $('.portfolio__filter li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.portfolio__gallery').length > 0) {
            var containerEl = document.querySelector('.portfolio__gallery');
            var mixer = mixitup(containerEl);
        }
    });


    /*------------------
		Hero Slider
	--------------------*/
    $('.hero__slider').owlCarousel({
        loop: true,
        dots: true,
        mouseDrag: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        margin: 0,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });

    var dot = $('.hero__slider .owl-dot');
    dot.each(function () {
        var index = $(this).index() + 1;
        if (index < 10) {
            $(this).html('0').append(index);
        } else {
            $(this).html(index);
        }
    });

    

    /*------------------
        Latest Slider
    --------------------*/
    $(".latest__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            320: {
                items: 1
            }
        }
    });

    

    /*------------------
        Video Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'inline',
        midClick: true
    });
    

    /*------------------
        Counter
    --------------------*/
    $('.counter_num').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

})(jQuery);



// scroll navbar items
const navLinks = document.querySelectorAll('ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
});


navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(l => l.classList.remove('active')); 
        this.classList.add('active');
    });
});






// Play buttons: open only the targeted sidebar
document.querySelectorAll('.play-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        const targetId = btn.getAttribute('href'); 
        const targetSidebar = document.querySelector(targetId);
        if (targetSidebar) targetSidebar.style.display = 'block';

        $(btn).magnificPopup({
            type: 'inline',
            midClick: true,
            mainClass: 'mfp-mobile',
            closeBtnInside: true, 
            callbacks: {
                close: function() {
                   
                    if (targetSidebar) targetSidebar.style.display = 'none';
                }
            }
        });
    });
});




// JS: place had script f-ta7t dyal body wla f-file .js mtssal
(function () {
  const selector = '.hero__item.set-bg[data-setbg]';
  const mobileBreakpoint = 768; 
  const mobileImage = 'img/hero/c.png'; 
  const desktopImage = null; 



  function applyBackground(el) {
    const src = el.getAttribute('data-setbg');
    if (src) el.style.backgroundImage = `url("${src}")`;
  }

  function updateForWidth(width) {
    document.querySelectorAll(selector).forEach(el => {
      const original = el.dataset.origSetbg ?? el.getAttribute('data-setbg');
      if (!el.dataset.origSetbg) el.dataset.origSetbg = original;

      if (width <= mobileBreakpoint) {
        el.setAttribute('data-setbg', mobileImage);

      } else {
        if (desktopImage) el.setAttribute('data-setbg', desktopImage);
        else el.setAttribute('data-setbg', el.dataset.origSetbg);
      }
      applyBackground(el);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    updateForWidth(window.innerWidth);
  });

  let rezTimer;
  window.addEventListener('resize', () => {
    clearTimeout(rezTimer);
    rezTimer = setTimeout(() => updateForWidth(window.innerWidth), 120);
  });
})();







// NAV BAR MOBAIL

const menu = document.getElementById("icon")
const mobaile = document.querySelector(".mobile-menu")
const x = document.querySelector(".x")
const item = document.querySelector(".mobile-menu ul")

menu.addEventListener('click', ()=>{
    mobaile.classList.add("show")

})

x.addEventListener('click', ()=>{
    mobaile.classList.remove('show')
})

item.addEventListener('click', ()=>{
    mobaile.classList.remove('show')

})





