
var triggerWork = $(".Works");
var triggerContact = $(".Contact")
var triggerWorkPosition;
var triggerContactPosition;
var triggerAbout = $(".About");
var triggerBlog = $(".Blog")
var triggerAboutPosition;
var triggerBlogPosition;

$(function(){
  var ua = navigator.userAgent.toUpperCase();
  if(ua.indexOf('IPHONE') != -1 || (ua.indexOf('ANDROID') != -1 && ua.indexOf('MOBILE') != -1)){
    $(window).scroll(function() {
      triggerWorkPosition = $(triggerWork).offset().top - 600 - $(window).height();
      triggerContactPosition = $(triggerContact).offset().top - 600 - $(window).height();
      });

  }else{
    skrollr.init();
    $(window).scroll(function() {
      triggerWorkPosition = $(triggerWork).offset().top + 200 - $(window).height();
      triggerContactPosition = $(triggerContact).offset().top + 200 - $(window).height();
      triggerAboutPosition = $(triggerAbout).offset().top + 200 - $(window).height();
      triggerBlogPosition = $(triggerBlog).offset().top + 200 - $(window).height();
      });
  }

  $(window).scroll(function() {
    var scrl = $(window).scrollTop();
    if (scrl > triggerWorkPosition) {
             $(".Works").addClass("Works__add");
    } else {
      // $(".Works").removeClass("Works__add");
    }
    
    if (scrl > triggerContactPosition) {
             $(".Contact").addClass("Contact__add");
    } else {
      // $(".Contact").removeClass("Contact__add");
    }
    
    if (scrl > triggerAboutPosition) {
             $(".About").addClass("About__add");
    } else {
      // $(".About").removeClass("About__add");
    }
    
    if (scrl > triggerBlogPosition) {
             $(".Blog").addClass("Blog__add");
    } else {
      // $(".Blog").removeClass("Blog__add");
    }
    
    if (scrl < $(window).height() - 300) {
      $(".Side-navigation__circle--top").addClass("circle-color-change");
    }else{
      $(".Side-navigation__circle--top").removeClass("circle-color-change");
    }
    
    if (scrl > 500 && scrl < 1300) {
      $(".Side-navigation__circle--about").addClass("circle-color-change");
    }else {
      $(".Side-navigation__circle--about").removeClass("circle-color-change");
    }
    if (scrl > 1300 && scrl < 2100) {
      $(".Side-navigation__circle--works").addClass("circle-color-change");
    }else {
      $(".Side-navigation__circle--works").removeClass("circle-color-change");
    }
    if (scrl > 2100 && scrl < 2900) {
      $(".Side-navigation__circle--blog").addClass("circle-color-change");
    }else {
      $(".Side-navigation__circle--blog").removeClass("circle-color-change");
    }
    if (scrl > 2900) {
      $(".Side-navigation__circle--contact").addClass("circle-color-change");
    }else {
      $(".Side-navigation__circle--contact").removeClass("circle-color-change");
    }
  });
  
  $('a[href^="."]').click(function() {
     var href= $(this).attr("href");
     var target = $(href == "" ? 'html' : href);
     var position = target.offset().top;
     $('body,html').animate({scrollTop:position}, 450, 'swing');
     return false;
  });
  
   $("body").shards(
  	[255,255,255,.01],
	[119,119,119,.01],
	[0,0,0,.1],
	5,
	10,
	3,
	.01,
	false
  );
});



// $(function(){
//    // #で始まるアンカーをクリックした場合に処理
//    
// });
