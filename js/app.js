//jquery like a function
//jQuery(); 
//shorthand method - $();

//to get the element - pass in the element as an argument (use the css selector)
//jQuery(".warning");

//result is you got that element
//then to access it or do something to it, use the dot notation
//then the function

//documentation - api.jquery.com

//pass the css selector you want to manipulate
//this jquery function returns a jquery representation of those matched elements
//since we got the elements now
//we can add interactivity by calling additional methods

/*
	//Hide Warning
	jQuery(".warning").hide();


	//Show warning slowly
	$(".warning").show("slow");
*/

/*
method chaining
example

*/

$(".warning").hide().show("slow");

