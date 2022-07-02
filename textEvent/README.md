# Text Event  

---
## 글자수 컨트롤  
```js
  function textLength() {
    $.each($('.o_blog_section .et_pb_post'), function() {
      let count = $(this).find('.post-content p');
      let str = count.text();
      str = str.substring(0, 100) + ' ...'; 
      count.text(str);
    });
  }
  textLength();
```