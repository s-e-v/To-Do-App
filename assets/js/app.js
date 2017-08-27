$("li").click(function () { 
    $(this).toggleClass("final");
});


$("span").click(function(){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
})