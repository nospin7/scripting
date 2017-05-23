//Toggle list item as Incomplete/Complete with strikethrough
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//Remove selected list item
$("ul").on("click",".delete",function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation()
});

//Add a new list item
$(".txtAddNew").keypress(function(event) {
  if(event.which === 13) {
    //extract user input
    var newItem = $(this).val();
    //clear input value
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span class='delete'><i class='fa fa-trash'></i></span> "+newItem+"</li>");
  }
});

$(".fa-plus").on("click", function(){
  $(".txtAddNew").fadeToggle();
});