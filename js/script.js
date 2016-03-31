$(document).ready(function() {
	$(function() {
		$('[data-toggle="tooltip"]').tooltip()
	});
	$('.fadein').fadeIn(2000);
	   
	var fadeStart=10,
		fadeUntil=300,
		fadeout = $('.fadeout');

	$(window).bind('scroll', function(){
    	var offset = $(document).scrollTop(),
    	opacity = 0;
    	if (offset <= fadeStart) {
        	opacity = 1;
    	}
    	else if (offset <= fadeUntil) {
        	opacity = 1 - offset/fadeUntil;
    	}
    	fadeout.css('opacity',opacity).html();
	});

	$('.thumbs-img').hover(function() {
		$(this).find('.overlay').fadeIn(400);
	},
	function() {
		$(this).find('.overlay').fadeOut(400);
	});
});