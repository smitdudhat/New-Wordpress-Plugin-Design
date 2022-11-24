// JavaScript Document
jQuery(document).ready(function ($) {
	// Tabbing Panel
	$('.tab_link').on('click', function (e) {
		e.preventDefault();
		var tab_content = $(this).attr('href');
		$('.tab_link').removeClass('active');
		$(this).addClass('active');
		$('.cp_tabs_content_box').css('display', 'none');
		$(tab_content).css('display', 'block');
	});
	// Toggle BTN Click Events
	$('.cp_accodian_tab_toogle_btn input').on('click', function (e) {
		if($(this).is(':checked')){
			$(this).parents('.cp_accodian_tabs').removeClass('disable').addClass('active');
			$(this).parents('.cp_accodian_tabs').find('.cp_accodian_tab_content').slideDown('400');
		} else{
			$(this).parents('.cp_accodian_tabs').removeClass('active').addClass('disable');
			$(this).parents('.cp_accodian_tabs').find('.cp_accodian_tab_content').slideUp();
		}
		// Toggle BTN CLick To Sound Effect Add
		var audio = new Audio('./images/sound_track/lock_unlock.mp3');
		audio.oncanplay = function () {
			this.play()
		}
	});
});