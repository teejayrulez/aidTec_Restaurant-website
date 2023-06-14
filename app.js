//MenuBar responsive and DropDown
$(document).ready(function(){
    $('.menu-bar').click(function(){
        $('nav').toggleClass('active')
    })
    $('ul li').click(function(){
        $(this).toggleClass('active');
    })
})

//slider
var swiper = new Swiper(".home-slide", {
    grabcursor:true,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });