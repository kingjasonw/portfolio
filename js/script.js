$(document).ready(function() {
	$(function() {
		$('[data-toggle="tooltip"]').tooltip()
	});
	
	// fade in on load
	$('.fadein').fadeIn(2000);

	// flashing glyphicon
	setInterval(function() {
		$('.glyphicon-hand-down').toggleClass("blueGlyphicon");
		$('.glyphicon-cloud-download').toggleClass("blueGlyphicon");
	}, 1000);

	// glyphicon stay blue on hover
	$('#resume').hover(function() {
		$('.glyphicon-cloud-download').css('color', 'blue');
	}, function() {
		$('.glyphicon-cloud-download').css('color', '');
	});

});

