

if(jQuery(window).width() >= 800) {
	jQuery('.grid-item').hover(function() {
		/*jQuery(this).find('.overlay').css('background', 'rgba(255,196,37,0.3)');*/
		jQuery(this).find('.grid-item-label').stop().animate({
			bottom: 'unset',
			top: '0',
			height: '100%'
		}, 100, function(){	
		});
		jQuery(this).find('.excerpt').show();
		jQuery(this).find('.continue-block').stop().show();
	}, function() {
		/*jQuery(this).find('.overlay').css('background', 'transparent');*/
		jQuery(this).find('.grid-item-label').stop().css('bottom', '0');
		jQuery(this).find('.grid-item-label').stop().css('top', 'unset');
		jQuery(this).find('.grid-item-label').stop().css('height', 'auto');
		jQuery(this).find('.continue-block').stop().hide();
		jQuery(this).find('.excerpt').hide();
	});
}

// Making appropriate state/territory/province fields required on initial page load 
if(jQuery('#state-div').hasClass('make-required')) {
	jQuery('#state').attr('required', 'required');
} else if(jQuery('#province-ca-div').hasClass('make-required')) {
	jQuery('#province').attr('required', 'required');
} else if(jQuery('#territory-au-div').hasClass('make-required')) {
	jQuery('#territory').attr('required', 'required');
}

jQuery(".list-accordion > li > div").click(function(){
	if(false == jQuery(this).next().is(':visible')) {
		jQuery('.list-accordion ul').slideUp(300);
		jQuery('.list-accordion .plus-minus').html('+');
	}
	jQuery(this).next().slideToggle(300);
	
	var plusMinus = jQuery(this).find('.plus-minus');
	jQuery(plusMinus).html(jQuery(plusMinus).html() == '-' ? '+' : '-');
});

jQuery(document).ready(function(){
	jQuery(".breadcrumbs.sticky").stick_in_parent({parent: 'html'});
	
	jQuery('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var target = jQuery(target);

	    jQuery('html, body').stop().animate({
		'scrollTop': target.offset().top
	    }, 300, 'swing');
	});
	
	jQuery('.breadcrumbs.sticky .links a[href="#documents"]').click(function() {
		jQuery('#documents-div').slideDown();
		jQuery('#documents-trigger').hide();
	});
});

jQuery('#documents-trigger').click(function() {
	jQuery('#documents-div').slideToggle();
	jQuery(this).hide();
});

jQuery('#close-documents').click(function() {
	jQuery('#documents-div').slideToggle();
	jQuery('#documents-trigger').show();
});

/* HORIZONTAL IMAGE ACCORDION */
jQuery('.horizontal-accordion .close-icon').click(function() {
	
	// Make all sections go back to normal
	jQuery('.horizontal-accordion .section').not(this).removeClass('smaller').removeClass('larger');
		
	// Show all 'smaller-copy'
	jQuery('.horizontal-accordion .section .smaller-copy').show(0);

	// Fade in all sections 'smaller-copy
	jQuery('.horizontal-accordion .section .smaller-copy').stop(true,true).delay(500).animate({
		opacity: 1
	}, 500, function() {
	
	});
		
	// Hide all sections 'larger copy'
	jQuery('.horizontal-accordion .section').find('.larger-copy').hide();
	
	// Fade out all sections label
	jQuery('.horizontal-accordion .section').find('.label').animate({
		opacity: 0
	}, 0, function() {

	});
		
	// Change background image
	jQuery('.horizontal-accordion .accordion-background[target="start-background"]').css('opacity', '1');
	jQuery('.horizontal-accordion .accordion-background').not('.horizontal-accordion .accordion-background[target="start-background"]').css('opacity', '0');
	
	// Fade out close icon
	jQuery('.horizontal-accordion .close-icon').removeClass('visible');
});

jQuery('.horizontal-accordion .section').click(function() {
	var target = jQuery(this).attr('target');
	
	if(jQuery(this).hasClass('larger')) {
		if(jQuery(window).width() <= 1000) {
			// Make all sections go back to normal
			jQuery('.horizontal-accordion .section').removeClass('smaller').removeClass('larger');
				
			// Show all 'smaller-copy'
			jQuery('.horizontal-accordion .section .smaller-copy').show(0);

			// Fade in all sections 'smaller-copy
			jQuery('.horizontal-accordion .section .smaller-copy').stop(true,true).delay(500).animate({
				opacity: 1
			}, 500, function() {
			
			});
				
			// Hide all sections 'larger copy'
			jQuery('.horizontal-accordion .section').find('.larger-copy').hide();
			
			// Fade out all sections label
			jQuery('.horizontal-accordion .section').find('.label').animate({
				opacity: 0
			}, 0, function() {

			});
				
			// Change background image
			jQuery('.horizontal-accordion .accordion-background[target="start-background"]').css('opacity', '1');
			jQuery('.horizontal-accordion .accordion-background').not('.horizontal-accordion .accordion-background[target="start-background"]').css('opacity', '0');
		}
	} else {
		// Make this section bigger, other sections smaller
		jQuery(this).addClass('larger').removeClass('smaller');
		jQuery('.horizontal-accordion .section').not(this).addClass('smaller').removeClass('larger');
			
		// Hide all 'smaller copy'
		jQuery('.horizontal-accordion .section .smaller-copy').hide();
		
		// Fade out all 'smaller-copy' label
		jQuery('.horizontal-accordion .section .smaller-copy').animate({
			opacity: 0
		}, 0, function() {
	
		});
		
		// Show this sections 'larger copy', hide other sections 'larger copy'
		jQuery(this).find('.larger-copy').hide(0).delay(100).show(0);
		jQuery('.horizontal-accordion .section').not(this).find('.larger-copy').hide();
		
		// Fade in this sections 'larger copy' h3 and p
		jQuery(this).find('.larger-copy h3, .larger-copy p').stop(true,true).delay(500).animate({
			opacity: 1
		}, 1000, function() {
	
		});
			
		// Fade out other sections 'larger copy' h3 and p 
		jQuery('.horizontal-accordion .section').not(this).find('.larger-copy h3, .larger-copy p').animate({
			opacity: 0
		}, 0, function() {
	
		});
		
		// Fade in other sections label
		jQuery('.horizontal-accordion .section').not(this).find('.label').animate({
			opacity: 1
		}, 1000, function() {
	
		});
		
		// Fade out this sections label
		jQuery(this).find('.label').animate({
			opacity: 0
		}, 0, function() {
	
		});
		
		// Change background image
		jQuery('.horizontal-accordion .accordion-background[target="'+target+'-background"]').css('opacity', '1');
		jQuery('.horizontal-accordion .accordion-background').not('.horizontal-accordion .accordion-background[target="'+target+'-background"]').css('opacity', '0');
		
		// Fade in close icon
		jQuery('.horizontal-accordion .close-icon').addClass('visible');
	}
});

if(jQuery(window).width() > 999) {
	jQuery('.horizontal-accordion .section').hover(function() {
		if(!jQuery(this).hasClass('smaller') && !jQuery(this).hasClass('larger')) {
			
			// Fade in this sections 'smaller-copy'
			jQuery(this).find('.smaller-copy p').addClass('visible')
			
			jQuery('.horizontal-accordion .section').not(this).find('.smaller-copy p').removeClass('visible');
			
			// Hide all sections 'larger copy'
			jQuery('.horizontal-accordion .section').find('.larger-copy').hide();
		
			// Fade out all sections label
			jQuery('.horizontal-accordion .section').find('.label').animate({
				opacity: 0
			}, 0, function() {
		
			});
		
			jQuery(this).find('.plus-icon').addClass('hover');
			jQuery('.horizontal-accordion .section').not(this).find('.plus-icon').removeClass('hover');
		}
	}, function() {
		// Fade out all sections 'smaller-copy'
		jQuery('.horizontal-accordion .section').find('.smaller-copy p').removeClass('visible');
		
		jQuery('.horizontal-accordion .section').find('.plus-icon').removeClass('hover');
	});
}

/* VERTICAL ACCORDION WITH BACKGROUND IMAGE */
jQuery('.vertical-accordion .section').click(function() {
	var target = jQuery(this).attr('target');
	
	/* Show Copy for this section; hide for other sections */
	jQuery(this).find('.copy').slideDown();
	jQuery('.vertical-accordion .section').not(this).find('.copy').slideUp();
	
	/* Change background color of this section */
	jQuery(this).addClass('larger').removeClass('smaller');
	jQuery('.vertical-accordion .section').not(this).removeClass('larger').addClass('smaller');
	
	// Fade out this sections plus icon
	jQuery(this).find('.plus-icon').addClass('invisible');
	jQuery('.vertical-accordion .section').not(this).find('.plus-icon').removeClass('invisible');
	
	// Change background image
	jQuery('.vertical-accordion .accordion-background[target="'+target+'-background"]').css('opacity', '1');
	jQuery('.vertical-accordion .accordion-background').not('.vertical-accordion .accordion-background[target="'+target+'-background"]').css('opacity', '0');
		
});



