$(document).ready(function() {
  $("form#create-list").submit(function(event) {
    event.preventDefault();

    var categoryItem = $("input#category").val();

    $("ul#category-list").append("<li class='clickItem'>" + categoryItem + "</li>");

    $("input#category").val("");

    $("ul#category-list").children("li").last().click(function() {
      $(".col-md-5").show();
      $("h2#category-header").show();
      $("div.new-list").append("<h2 id='category-header'>"+ categoryItem +"</h2><ul id ='items'></ul>");
    });

    // $("button#clear").click(function(){
    //   $("ul#list").empty();
    //   $("ul#done").empty();
    //   $("h2#done-header").hide();
    // });
  });
});
