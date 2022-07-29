$('.slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        }
      }
    ]
});

var activeStep = 4;
$(".videos__nextstep").click(function() {
  $('.videos__item').eq(activeStep++).show();
  $('.videos__item').eq(activeStep++).show();
  $('.videos__item').eq(activeStep++).show();
  $('.videos__item').eq(activeStep++).show();
  if(activeStep == $('.videos__item').length) $(this).hide();
});

$('.header__btn-menu').click(function(event){
  $('.header__btn-menu,.header__menu').toggleClass('active');
  $('body').toggleClass('lock');
});