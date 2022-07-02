# JS

---
## 클래스 여부 체크 하는 방법  
- 원하는 클래스의 길이를 여부를 체크한다.  
- 길이가 1 이상이면 화면에 존재한다는 것.  
- 길이가 0이면 fals가 되어 해당 코드 미실행으로 오류 차단  
  
```js
let stickyOffsetTop;
if (stickySection.length){
  stickyOffsetTop = stickySection.offset().top;
}
```
  
---
## Table 번호 넣기    
```js  
let tableNum = $(".table_num");
for (let i = 0; i <= tableNum.length; i++) {
    tableNum.text(tableNum[i - 1] = i + 1);
}
```  
  
---  
## 주소 복사  
```js
클릭버튼.on('click', function () {
  navigator.clipboard.writeText('복사될 주소').then(funct() {
    alert('URL 주소가 복사 되었습니다. 이제 지인에게 혜택을 공유하세요!')
  });
});
```  
  
---
## 콘텐츠 순차적으로 나타나기  
```js
$(function() {
  let idx = 0; // 인덱스
	setInterval(time, 500); // 실행

	function time(){ 
		brandText.eq(idx).addClass('active'); // active 클래스 삽입
		idx++;

		if(idx >= brandText.length) { // 완료되면 인덱스 초기화
      idx = 0;
	  }
  }
});
```

---
## 클릭 스크롤 탑  
```js
$('#scrollTop').on('click', function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});
``` 

