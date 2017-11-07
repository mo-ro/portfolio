$(function() {
  
  $(".Sidemenu__list:not(:first)").on("click", function() {
    var index = $(".Sidemenu__list").index(this) - 1;
    
    $(".Sidemenu__list").removeClass("Sidemenu__list-add");
    $(this).addClass("Sidemenu__list-add");

    $(".Main__category").hide();
    $(".Main__category").eq(index).show()
  });
});