$(function(){
  var ua = navigator.userAgent.toUpperCase();
  if(ua.indexOf('IPHONE') != -1 || (ua.indexOf('ANDROID') != -1 && ua.indexOf('MOBILE') != -1)){

  }else{
    skrollr.init();
  }

  $(".Skill__topic").on("click", function() {
    var num = 0;
    var moveX = $(window).width() / 2 - $(this).offset().left -$(this).width() / 2 + "px";
    var classVal = $(this).attr('class'); // classの値を取得
    var classVals = classVal.split(' '); // 取得した値を分割
    var index = $(".Skill__topic").index(this);

    // $(this).addClass("Skill__topic-hover-add Skill__topic-expand-add");
    // // $(".Skill__icon").css("display", "none");
    // $("*").not(this).removeClass("Skill__topic-expand-add Skill__topic-hover-add");
    if($(this).css("transform") == "none") {
      $(this).css("transform", "translate(" + moveX + ", 440px)").addClass("Skill__topic-hover-add").find("svg").addClass("Skill__icon-add");
      $("html,body").animate({scrollTop:$(this).offset().top + 440}, 680);
      // console.log(index);
      $(".Skill__back").css("display", "none");
      $(".Skill__back").eq(index).css('display','block');  
      
      
    }
    $(".Skill__topic").not(this).on("click", function() {
          $("." + classVals[1]).css("transform", "none").removeClass("Skill__topic-hover-add").find("svg").removeClass("Skill__icon-add");
        // num++;
    });
  });
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 100)
    $('.Header-second').addClass('top-in');
  else
    $('.Header-second').removeClass('top-in');
});