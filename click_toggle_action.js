// ********** ********** ********** 
// Jquery 토글
jQuery(document).ready(function ($) {

	// 해당 
    let titleBtn = $('버튼');
    let contentBox = $('콘텐츠');	

	// 버튼을 클릭하면
    titleBtn.on('click', function () {
        $(this).toggleClass('active'); // 해당 버튼에 클래스 'active' on/off
        contentBox.slideToggle(); // 콘텐츠 나타나는 액션을 슬라이드 적용, 속도 () 기본값 적용
    })

});