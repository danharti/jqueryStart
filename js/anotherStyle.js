//Both of this functions are NAMED FUNCTION

function hideShow() {
//Hide and show warning
$(".warning").hide().show("slow");
}

//another style to call the function
/*
var hideShow = function () {
	$(".warning").hide().show("slow");

}

*/

//Instead of calling the function, we need to make sure that the document has loaded or is ready
	//hideShow();
//to do this...

//get the element document
//function .ready - make sure that the document is ready
//instead of hideShow() - we want jQuery to call our function and to do this, just type the function name.

//You do this if you place your jQuery link on top of the page
$(document).ready(hideShow);





/*
Most people use an anonymous function and pass it inside right away

$(document).ready(function () {
	$(".warning").hide().show("slow");
});

Another version: remove the $(document).ready() - it should be understood
$(function () {
 $(".warning").hide().show("slow");
});

*/

