$(document).ready(function(){
    $("button").addClass("animated");
    $(".btn").addClass("shake");
    $("#target1").addClass("btn-primary");
    $("button").removeClass("btn-default"); 
    $("#target1").css("color","red"); //change the css of an element using jQuery
    $("#target1").prop("disabled", true); // disable to target1
})