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
        $("ul").append("<li>"+text+" <span>X</span></li>");
    };
});

$("#button").click(function () {
    var text = $("input[type='text']").val();
    $("input[type='text']").val("");
    $("ul").append("<li>"+text+" <span>X</span></li>");
});
