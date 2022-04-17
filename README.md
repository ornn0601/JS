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