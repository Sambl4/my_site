Drupal.behaviors.to_top_example = {
  attach: function(context) {
  /**
   * Кнопка наверх для сайта на Drupal 7
   */
  
	//jQuery("#to_top").hide();

	jQuery(function () {
		jQuery(window).scroll(function () {
			if (jQuery(this).scrollTop() > 100) {
				jQuery('#to_top').fadeIn(); 
			} else {
				jQuery("#to_top").hide();	
			}
		});
 
		
		jQuery('#to_top').click(function () {
			jQuery('body,html').animate({
				scrollTop: 0
			}, 800);
			
			return false;
		});
	});
	  
  }
};
