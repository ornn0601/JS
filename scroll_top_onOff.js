// **********************************
// 스크롤 on / off
jQuery(document).ready(function ($) {

    $(window).scroll(function () {
        
        var height = $(document).scrollTop();
        var contactFormPopup = $('.콘텐츠');

		if (height > 300) {
			contactFormPopup .addClass('active');
		}
		else if (height <= 300) {
			contactFormPopup .removeClass('active');
		}
	});

});