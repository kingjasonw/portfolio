$(document).ready(function() {
	$(function() {
		$('[data-toggle="tooltip"]').tooltip()
	});
	
	// fade in on load
	$('.fadein').fadeIn(2000);

	// flashing glyphicon
	setInterval(function() {
		$('.glyphicon-hand-down').toggleClass("blueGlyphicon");
	}, 1000);

	// glyphicon stay blue on hover
	$('#showWork').hover(function() {
		$('.glyphicon-hand-down').css('color', 'blue');
	}, function() {
		$('.glyphicon-hand-down').css('color', '');
	});

	// fade in work section and scroll
	$('#showWork').on('click', function() {
		$('#work').fadeToggle('slow');
		$('body').animate({ scrollTop: $('#work').offset().top -20 }, 1000);
		
	});

	// image overlay on hover
	$('.projectImg').hover(function() {
		$(this).find('.overlay').fadeIn(400);
	},
	function() {
		$(this).find('.overlay').fadeOut(400);
	});

	// fade in project descriptions and scroll
	$('.showDescription').on('click', function() {
		$(this).find('.hiddenDescription').fadeIn('slow');
		$('body').animate({ scrollTop: $(this).offset().top -20}, 1000);
	});

});

