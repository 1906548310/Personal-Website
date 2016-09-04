$(document).ready(function() {
  $('.container01').mouseenter(function() {
    // $('.description01').css("display","block");
    // $('.description01').animate({marginTop:"-150px"},1000);
    $('.description01').slideDown();

  });
  $('.container01').mouseleave(function() {
    // $('.description01').css("display","none");
    // $('.description01').animate({marginTop:"0px"},1000);
    $('.description01').slideUp();


  });
});

$(document).ready(function() {
  $('.container02').mouseenter(function() {
    // $('.description01').css("display","block");
    // $('.description01').animate({marginTop:"-150px"},1000);
    $('.description02').slideDown();

  });
  $('.container02').mouseleave(function() {
    // $('.description01').css("display","none");
    // $('.description01').animate({marginTop:"0px"},1000);
    $('.description02').slideUp();


  });
});