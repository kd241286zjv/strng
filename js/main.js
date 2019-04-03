$(document).ready(function(){
  var swiper = new Swiper('.swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
    });
    $('#countdown').countdown('2020/01/01', function(event) {
      $(this).html(event.strftime('<p class="countdown__days">%d</p><p>:</p><p class="countdown__hours">%H</p><p>:</p><p class="countdown__minutes">%M</p><p>:</p><p class="countdown__seconds">%S</p>'));
    });
});
