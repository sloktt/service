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

$('.menu__link').click(function(event){
  $('.header__btn-menu,.header__menu').removeClass('active');
  $('body').removeClass('lock');
});



/**********************************************/



let map_container = document.getElementById('map_container');
    let options_map = {
        once: true,//запуск один раз, и удаление наблюдателя сразу
        passive: true,
        capture: true
    };
    map_container.addEventListener('click', start_lazy_map, options_map);
    map_container.addEventListener('mouseover', start_lazy_map, options_map);
    map_container.addEventListener('touchstart', start_lazy_map, options_map);
    map_container.addEventListener('touchmove', start_lazy_map, options_map);

    let map_loaded = false;
    function start_lazy_map() {
        if (!map_loaded) {
            let map_block = document.getElementById('ymap_lazy');
            map_loaded = true;
            map_block.setAttribute('src', map_block.getAttribute('data-src'));
            map_block.removeAttribute('data_src');
            console.log('YMAP LOADED');
        }
    }


