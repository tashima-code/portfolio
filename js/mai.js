$(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("active");
    $("#header .nav").toggleClass("active");
    $("#header .nav .menu").toggleClass("active");
  });
});

$(function(){
  $(".nav a").click(function(){
    $(".hamburger").removeClass("active");
    $("#header .nav").removeClass("active");
    $("#header .nav .menu").removeClass("active");
  });
});