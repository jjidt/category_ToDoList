$(document).ready(function() {
  var itemTime;
  $("form#create-list").submit(function(event) {
    event.preventDefault();

    var categoryItem = $("input#category").val();

    var timeNow = $.now().toString();

    $("ul#category-list").append("<li class='clickItem'>" + categoryItem + "</li>");
    $("ul#category-list").children("li").last().data("time-stamp", timeNow);

    $("div.new-list").append("<div class=" + timeNow + " style='display: none;'' ><h2 id='category-header'>"+ categoryItem +"</h2><ul class ='items'></ul></div>").children("div").last().data("time-stamp", timeNow);;

      $(".clickItem").click(function(){
        itemTime = $(this).data("time-stamp");
        $("div.new-list").children("div").hide();
        $("."+itemTime).show();
      });
  });
  $("form#new-task").submit(function(event){
    event.preventDefault();
    var todoItem = $("input#add-task").val();
    $("."+itemTime).children("ul").append("<li>"+ todoItem +"</li>");
  });
});
