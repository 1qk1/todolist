$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});
$("input").on("keypress", function(event){
    var todo = $(this).val();
    if (event.which === 13 && todo){
            $(this).val("");
            $("ul").append("<li><span>X</span> " + todo + "</li>");
        $(this).focusout();
    }
});
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
    event.stopPropagation();
});
$(".fa-plus").on("click", function(){
    $("input").fadeToggle();
});