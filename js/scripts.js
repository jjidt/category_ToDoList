$(document).ready(function() {
  var itemTime;
  $("form#create-list").submit(function(event) {
    event.preventDefault();

    var categoryItem = $("input#category").val();

    var timeNow = $.now().toString();

    $("ul#category-list").append("<li class='clickItem clickable'>" + categoryItem + "</li>");
    $("ul#category-list").children("li").last().data("time-stamp", timeNow);

    $("div.new-list").append("<div class=" + timeNow + " style='display: none;'' ><h4 id='category-header'>"+ categoryItem +" List:</h4><ul class ='items'></ul></div>").children("div").last().data("time-stamp", timeNow);;

      $(".clickItem").click(function(){
        itemTime = $(this).data("time-stamp");
        $("div.new-list").children("div").hide();
        $("."+itemTime).show();
      });
    $("#category").val("");
  });
  $("form#new-task").submit(function(event){
    event.preventDefault();
    var todoItem = $("input#add-task").val();
    $("."+itemTime).children("ul").append("<li class='clickable click-delete'>"+ todoItem +"</li>");
    $("#add-task").val("");

      $(".click-delete").last().click(function(){
        var deletedItem = $(this).text();
        $("#complete-list").append("<li class = 'deletes'>"+ deletedItem +"</li>");
        $(this).remove();
      });
  });

});
