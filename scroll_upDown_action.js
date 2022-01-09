// *********** *********** ***********
// 스크롤에 따른 헤더 up/down
jQuery(document).ready(function ($) {

	var didScroll; //스크롤을 하는 행위 체크
	var lastScrollTop = 50; // 마지막 스크롤 위치 기본 값 설정
	var delta = 5; // 스크롤 이동 기준 값
	var navbarHeight = $('#main-header').outerHeight(); // 움직일 요소 높이 체크

	// 스크롤 이동 확인
	$(window).scroll(function (event) {
		didScroll = true;
	});

	// 스크롤 이동을 확인했으면 hasScrolled() 함수 실행 (실행시간 : 10)
	setInterval(function () {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 10);

	// 스크롤 액션 함수
	function hasScrolled() {

		// 현재 스크롤 위치 확인
		var st = $(this).scrollTop();

		// Math.abs() : 지정된 숫자의 절대 값을 반환합니다.(양수)
		// 스크롤값을 받아서 리턴한다.
		if (Math.abs(lastScrollTop - st) <= delta) return;

		// 스크롤 up/down에 따른 액션 설정
		// 만약 현재 위치가 라스크 스크롤 위치보다 크거가 네브하이트 보다 아래에 위치했을때 = 스크롤 값이 아래로 내려갔을때
		// $(window).height() : 보여지는 창의 크기 (화면)
		// $(document).height() : 문서의 전체 크기
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

		// 현재 스크롤 위치를 마지막 스크롤 위치와 동기화
		lastScrollTop = st;
	}
});