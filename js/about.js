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
});