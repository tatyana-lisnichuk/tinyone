"use strict";
  $(document).ready(function(){
$(".single-item").slick({
  // adaptiveHeight: true,
  // slidesToShow: 3,
  autoplay:false,//автовосроизведение
  autoplaySpeed: 3000,//каждые 3 с
  // arrows:false,
  //  slidesToScroll: 3,
  arrows: false, // не показывать стрелки
  dots: true, // показывать точки индикаторы
  dotsClass: 'slick-dots', // название класса для точек
  
}); 
//чтоб работало меню-бургер
     $('.menu__burger').click(function (event) {
    $('.menu__burger,.menu__navbar').toggleClass('active');
    $('body').toggleClass('lock');//блокирую прокрутку при активном меню
  });

});