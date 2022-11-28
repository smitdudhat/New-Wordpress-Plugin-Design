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
	$('.cp_accodian_tab_toogle_btn input').on('click', function () {
		if($(this).is(':checked')){
			$('.cp_accodian_main_tab_content').slideUp();
			$('.cp_accodian_tab .accodian_tab_main_title').removeClass('open_slide').addClass('close_slide');
			$('.cp_accodian_main_tab_content').removeClass('open_slide').addClass('close_slide');

			$(this).parents('.cp_accodian_tabs').removeClass('disable').addClass('active');

			$(this).parents('.cp_accodian_tabs').find('.accodian_tab_main_title').removeClass('close_slide').addClass('open_slide');
			$(this).parents('.cp_accodian_tabs').find('.cp_accodian_main_tab_content').removeClass('close_slide').addClass('open_slide');

			$(this).parents('.cp_accodian_tabs').find('.cp_sub_accodian_tabs .cp_accodian_tab').removeClass('close_slide').addClass('open_slide');
			$(this).parents('.cp_accodian_tabs').find('.cp_sub_accodian_tab_content').removeClass('close_slide').addClass('open_slide');

			$(this).parents('.cp_accodian_tabs').find('.cp_accodian_main_tab_content').slideDown();

			$(this).parents('.cp_accodian_tabs').find('.cp_sub_accodian_tab_content').slideDown();
		} else {

			$('.cp_accodian_tab .accodian_tab_main_title').removeClass('open_slide').addClass('close_slide');
			$('.cp_accodian_main_tab_content').removeClass('open_slide').addClass('close_slide');

			$(this).parents('.cp_accodian_tabs').find('.cp_sub_accodian_tabs .cp_accodian_tab').removeClass('close_slide').addClass('open_slide');
			$(this).parents('.cp_accodian_tabs').find('.cp_sub_accodian_tab_content').removeClass('close_slide').addClass('open_slide');
			$(this).parents('.cp_accodian_tabs').find('.cp_sub_accodian_tab_content').slideDown();

			$(this).parents('.cp_accodian_tabs').removeClass('active').addClass('disable');
			$(this).parents('.cp_accodian_tabs').find('.cp_accodian_main_tab_content').slideUp();
		}
		// Toggle BTN CLick To Sound Effect Add
		var audio = new Audio('./images/sound_track/lock_unlock.mp3');
		audio.oncanplay = function () {
			this.play()
		}
	});
	// Toggle Main Accodian 
	$('.cp_accodian_tab .accodian_tab_main_title').on('click', function () {
		if($(this).parents('.cp_accodian_tabs').hasClass('active')){
			if($(this).parents('.cp_accodian_tabs').find('.cp_accodian_main_tab_content').hasClass('open_slide')){
				$(this).removeClass('open_slide').addClass('close_slide');
				$(this).parents('.cp_accodian_tabs').find('.cp_accodian_main_tab_content').removeClass('open_slide').addClass('close_slide');
				$(this).parents('.cp_accodian_tabs').find('.cp_accodian_main_tab_content').slideUp();
			} else {
				$('.cp_accodian_tab .accodian_tab_main_title').removeClass('open_slide').addClass('close_slide');
				$('.cp_accodian_main_tab_content').removeClass('open_slide').addClass('close_slide').slideUp();
				$(this).removeClass('close_slide').addClass('open_slide');
				$(this).parents('.cp_accodian_tabs').find('.cp_accodian_main_tab_content').removeClass('close_slide').addClass('open_slide');
				$(this).parents('.cp_accodian_tabs').find('.cp_accodian_main_tab_content').slideDown();
			}
		}
	});
	// Toggle Sub Accodian
	$('.cp_sub_accodian_tabs .cp_accodian_tab').on('click', function () {
		if($(this).parents('.cp_sub_accodian_tabs').find('.cp_sub_accodian_tab_content').hasClass('open_slide')){
			$(this).removeClass('open_slide').addClass('close_slide');
			$(this).parents('.cp_sub_accodian_tabs').find('.cp_sub_accodian_tab_content').removeClass('open_slide').addClass('close_slide');
			$(this).parents('.cp_sub_accodian_tabs').find('.cp_sub_accodian_tab_content').slideUp();
		} else {
			$(this).removeClass('close_slide').addClass('open_slide');
			$(this).parents('.cp_sub_accodian_tabs').find('.cp_sub_accodian_tab_content').removeClass('close_slide').addClass('open_slide');
			$(this).parents('.cp_sub_accodian_tabs').find('.cp_sub_accodian_tab_content').slideDown();
		}
	});
	// Bottom Bar Width Set
	function bottom_bar() {
		var left_column_width_get = $('.custom_permalinks .cp_left_column').width();
		var left_column_left_pos_get = $('.custom_permalinks .cp_left_column').position();
		var left_column_width = left_column_width_get + 15 + 'px';
		var left_column_left_pos = left_column_left_pos_get.left  + 'px';
		$('.custom_permalinks .cp_bottom_bar').css({"width": left_column_width, "left": left_column_left_pos});
	}

	$(window).on('load', function () {
		setTimeout(function () {
			bottom_bar();
		}, 100);
		$(window).resize(function () {
			setTimeout(function () {
				bottom_bar();
			}, 100);
		});
	});
});