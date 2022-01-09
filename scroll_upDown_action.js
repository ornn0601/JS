// *********** *********** ***********
// 스크롤에 따른 헤더 up/down
jQuery(document).ready(function ($) {

	var didScroll;
	var lastScrollTop = 50;
	var delta = 5;
	var navbarHeight = $('#main-header').outerHeight();

	$(window).scroll(function (event) {
		didScroll = true;
	});

	setInterval(function () {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 10);

	function hasScrolled() {
		var st = $(this).scrollTop();

		// Make sure they scroll more than delta
		if (Math.abs(lastScrollTop - st) <= delta) return;

		// 스크롤 up/down에 따른 액션 설정
		if (st > lastScrollTop && st > navbarHeight) {
			// Scroll Down
			$('#main-header').removeClass('et-fixed-header_active');
		}
		else {
			// Scroll Up
			if (st + $(window).height() < $(document).height()) {
				$('#main-header').addClass('et-fixed-header_active');
			}
		}
		lastScrollTop = st;
	}
});