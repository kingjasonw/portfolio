$(document).ready(function() {
	$(function() {
		$('[data-toggle="tooltip"]').tooltip()
	});
	
	$('.fadein').fadeIn(2000);

	$('#showWork').on('click', function() {
		$('#work').fadeToggle('slow');
		$('body').animate( {
    		scrollTop: $("#work").offset().top -20
		}, 1000);
	});

	$('.showDescription').on('click', function() {
		$(this).find('.hiddenDescription').fadeToggle('slow');
	});

	$('.gameDescription').on('click', function() {
		$('.hiddenGameDescription').fadeIn('slow');
	});

	$('#play').on('click', function() {
		$('#gamediv').fadeIn('slow');
	});

});

