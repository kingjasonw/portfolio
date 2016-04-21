$(document).ready(function() {
	$(function() {
		$('[data-toggle="tooltip"]').tooltip()
	});
	
	$('.fadein').fadeIn(2000);

	$('#game').on('click', function() {
		$('canvas').fadeIn('slow');
	});

	$(document).scroll(function() {
		var y = $(this).scrollTop();
		if (y > 20) {
			$('#work').fadeIn('slow');
		}
	});
});

