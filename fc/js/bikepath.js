/* including js for accordian and image click listeners - only needed on this page*/	
$(document).ready(function() {
	$("#accordion").accordion();
});

/* added js for gallery effects */
/* listener for image 1 */
$(function() {
	$(".image1").click(function() {
		var image = $(this).attr("rel");
		$('#image1').hide();
		$('#image1').fadeIn('slow');
		$('#image1').html('<img src="' + image + '" alt="Charles River Image"/>');
		return false;
	});
});

/* listener for image 2 */
$(function() {
	$(".image2").click(function() {
		var image = $(this).attr("rel");
		$('#image2').hide();
		$('#image2').fadeIn('slow');
		$('#image2').html('<img src="' + image + '" alt="Jamaica Pond Image"/>');
		return false;
	});
});

/* listener for image 3 */
$(function() {
	$(".image3").click(function() {
		var image = $(this).attr("rel");
		$('#image3').hide();
		$('#image3').fadeIn('slow');
		$('#image3').html('<img src="' + image + '" alt="Arnold Arboretum Image"/>');
		return false;
	});
});

/* listener for image 4 */
$(function() {
	$(".image4").click(function() {
		var image = $(this).attr("rel");
		$('#image4').hide();
		$('#image4').fadeIn('slow');
		$('#image4').html('<img src="' + image + '" alt="Carson Beach Image"/>');
		return false;
	});
});