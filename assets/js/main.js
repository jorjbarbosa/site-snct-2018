let countDownDate = new Date('Oct 15, 2018 00:00:00').getTime();

// Update the count down every 1 second
let x = setInterval(function() {
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distancia = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  var horas = Math.floor(
    (distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById('timer').innerHTML =
    'Faltam ' +
    dias +
    ' dias ' +
    horas +
    ' horas ' +
    minutos +
    ' minutos e ' +
    segundos +
    ' segundos ';

  // If the count down is finished, write some text
  if (distancia < 0) {
    clearInterval(x);
    document.getElementById('timer').innerHTML = 'O Evento Já Começou!';
  }
}, 1000);

// Menu Scroll
$(document).ready(() => {
  if ($(window).width() > 768) {
    $(window).scroll(() => {
      if ($(document).scrollTop() > 10) {
        $('#nav').removeClass('bg-transparent');
        $('#nav').removeClass('navbar-dark');
        $('#nav').addClass('fixed-top');
        $('#nav').addClass('bg-light');
        $('#nav').addClass('navbar-light');
      } else {
        $('#nav').removeClass('fixed-top, bg-light, navbar-light');
        $('#nav').addClass('bg-transparent');
        $('#nav').addClass('navbar-dark');
      }
    });
  } else {
    if ($(window).width() < 600) {
      $('#nav').removeClass('bg-transparent');
      $('#nav').removeClass('navbar-dark');
      $('#nav').addClass('fixed-top');
      $('#nav').addClass('bg-light');
      $('#nav').addClass('navbar-light');
    }
  }
});
//
(function($) {
  'use strict'; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.scroll[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top - 54
          },
          1000,
          'easeInOutExpo'
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.scroll').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#nav',
    offset: 54
  });
})(jQuery); // End of use

// (function($) {
//   var $window = $(window);

//   function resize() {
//     if ($window.width() < 600) {
//       $('#nav').removeClass('bg-transparent');
//       $('#nav').removeClass('navbar-dark');
//       $('#nav').addClass('fixed-top');
//       $('#nav').addClass('bg-light');
//       $('#nav').addClass('navbar-light');
//     }
//   }

//   $window.resize(resize).trigger('resize');
// })(jQuery);
