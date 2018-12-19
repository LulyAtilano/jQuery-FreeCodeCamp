$(document).ready(function(){
    $("button").addClass("animated");
    $(".btn").addClass("shake");
    $("#target1").addClass("btn-primary");
    $("button").removeClass("btn-primary"); 
    $("#target1").css("color","red"); //change the css of an element using jQuery
    $("#target1").prop("disabled", true); // disable to target1
    $("#target4").html("<em>#target4</em>"); //Change Text Inside an Element
    $("#target4").remove(); // delete an element
    $("#target2").appendTo("#right-well"); // move an element from a place to another
})