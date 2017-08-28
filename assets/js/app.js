$(document).ready(function () {
    name = prompt("What's your name?");
    $("h1").html("<i class='fa fa-bars'></i> " + name + "'s To-Do App");
});

$("ul").on("click", "li", function () { 
    $(this).toggleClass("final");
});

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) { 
    if(event.which === 13){
        var text = $(this).val();
        $(this).val("");
        $("ul").append("<li>"+text+" <span><i class='fa fa-minus-circle'></i></span></li>");
    };
});

$("#button").click(function () {
    var text = $("input[type='text']").val();
    $("input[type='text']").val("");
    $("ul").append("<li>"+text+"  <span><i class='fa fa-minus-circle'></i></span></li>");
});

$(document).on("click", ".fa-bars",function(){
    $("#head").fadeToggle();
});