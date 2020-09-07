if(jQuery(window).width() > 767) {
	/******** GRID *********/
	jQuery('.grid .section').hover(function() {
		// Fade in this sections 'smaller-copy'
		jQuery(this).find('.faux-button').addClass('visible')
			
		jQuery('.grid .section').not(this).find('.faux-button').removeClass('visible');
		
		jQuery(this).find('.plus-icon').addClass('hover');
		jQuery('.grid .section').not(this).find('.plus-icon').removeClass('hover');
	}, function() {
		// Fade out all sections 'smaller-copy'
		jQuery('.grid .section').find('.faux-button').removeClass('visible');
		
		jQuery('.grid .section').find('.plus-icon').removeClass('hover');
	});
}

jQuery('.grid .section').click(function() {
	if(jQuery(this).hasClass('larger')) {		
		
		// Fade 'copy' out
		jQuery(this).find('.copy').stop(true,true).animate({
			opacity: '0',
			zIndex: 0
		}, 0, function() {
	
		});

		// Make this section appear below of other sections
		jQuery('.grid .section').stop(true,true).delay(500).animate({
			zIndex: '1'
		}, 0, function() {
	
		});
		
		// Make this section smaller
		jQuery('.grid .section').removeClass('larger').removeClass('smaller');

		// Fade in 'text'
		jQuery(this).find('.text').stop(true,true).delay(100).animate({
			opacity: '1'
		}, 100, function() {
	
		});
		
	} else {		
		// Make this section bigger, other sections smaller
		jQuery(this).addClass('larger').removeClass('smaller');
		jQuery('.grid .section').not(this).addClass('smaller').removeClass('larger');
		
		// Fade 'copy' in
		jQuery(this).find('.copy').stop(true,true).delay(100).animate({
			opacity: '1',
			zIndex: 3
		}, 300, function() {
	
		});
		
		// Fade out other 'copy'
		jQuery('.grid .section').not(this).find('.copy').stop(true,true).animate({
			opacity: '0',
			zIndex: 0
		}, 0, function() {
	
		});
		
		// Fade out 'text'
		jQuery(this).find('.text').stop(true,true).animate({
			opacity: '0'
		}, 0, function() {
	
		});
		
		// Fade other 'text' in
		jQuery('.grid .section').not(this).find('.text').stop(true,true).delay(100).animate({
			opacity: '1',
		}, 100, function() {
	
		});
		
		// Make this section appear on top of other sections
		jQuery(this).stop(true,true).animate({
			zIndex: '3'
		}, 0, function() {
	
		});
		
		// Make other sections appear below this sections
		jQuery('.grid .section').not(this).stop(true,true).delay(500).animate({
			zIndex: '1'
		}, 0, function() {
	
		});
	}
});