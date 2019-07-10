//MENU

$(".navbar-burger").click(function(){
  $(".nav-mobile").animate({left: '0'}, "slow");
  $("body").addClass("body-lock");
});

$(".close-btn").click(function(){
  $(".nav-mobile").animate({left: '-100vw'}, "slow");
  $("body").removeClass("body-lock");
});