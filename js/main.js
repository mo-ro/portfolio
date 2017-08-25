
var triggerWork = $(".Works");
var triggerContact = $(".Contact")

$(function(){
var ua = navigator.userAgent.toUpperCase();
if(ua.indexOf('IPHONE') != -1 || (ua.indexOf('ANDROID') != -1 && ua.indexOf('MOBILE') != -1)){

}else{
  skrollr.init();
}
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 100)
    $('.Header-second').addClass('top-in');
  else
    $('.Header-second').removeClass('top-in');
    
  var triggerWorkPosition = $(triggerWork).offset().top + 500 - $(window).height();
  if ($(window).scrollTop() > triggerWorkPosition) {
           // なんらかの命令を実行
           $(".Works").addClass("Works__add");
  } else {
    $(".Works").removeClass("Works__add");
  }
});