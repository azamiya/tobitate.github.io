
$(document).ready(function() {
	$('#icon').on('click', function(e) {
		// Prevent link from jumping to the top of the page
		e.preventDefault();
		//If menu is already showing, slide it up. Otherwise, slide it down.
		$('.hamburger').toggleClass('slide-down');
		$('.fa-bars').toggleClass('.fa-times');
	});
});
