//Prevent spoilerphobes from seeing spoilers
//Solution: Hide spoilers and reveal them through user interaction

//1, Hide spoiler
$(".spoiler span").hide();

/*
spoiler - classname - CSS Selector
space - means the elements inside the selector
span - the element we want
*/


//2, Add a button
$(".spoiler").append("<button>Reveal Spoiler!</button>");

/*
we chose the classname spoiler only because we want to target that not the span anymore
Take Note: String format
*/


//3, When button pressed
$("button").click(function(){
  //3.1, Show spoiler next to the button clicked
  //$(".spoiler span").show();
  $(this).prev().show();
  //3.2, Get rid of button
  $(this).remove();
});

//selecting all the buttons in the page hmmmmm interesting
//$("span") - all the spans in the page

//class = .idName
//id = #idName
//element = just type the element name


//Psuedo-code - term use for an informal high-level description of a computer program