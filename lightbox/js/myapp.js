//To create an element using jQuery
//$ in the variable sign just reminds you that it is a jQuery representation
//without the $('string') = the 'string' is just a string
//detached or disembodied overlay div
var $overlay = $('<div id="overlay"></div>');
//create a detached image
var $image = $('<img>');
//create the text
var $caption = $('<p></p>');

//appended the image to the overlay
$overlay.append($image);
//appended the caption to the overlay
$overlay.append($caption);

//appended the image to the body
$("body").append($overlay);


// selecting the element a inside the imageGallery id
// adding a click function incase the user clicks on it
// by adding the preventDefault() - which is the usual way a browser works
// we can pass the object event in the function and call it

// I want to access the alt attribute in the a element use the .attr method 
$("#imageGallery a").click(function(event){
  event.preventDefault();
  //getting the attribute use the attribute function
  var href = $(this).attr("href");
  console.log(href);
  //added an attribute to the image name src and it's value
  $image.attr("src", href);

  //show the overlay
  $overlay.show();

  //imageGallery children
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);

});

//hides the overlay when clicked on it
$overlay.click(function(){
  $(this).hide();
});
