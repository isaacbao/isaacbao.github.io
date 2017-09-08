---
title: js奇技淫巧
date: 2017-03-09 18:03:00
tags:
- 搬运
- js
categories:
- 技术
---

## js奇技淫巧

###  注：本文高达八成搬运自stackoverflow

### 在for循环中间添加停顿，一般用于防止一些异步IO过高地并发执行
出处：http://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop

<!-- More -->

一个长成这样的for循环
{% codeblock %}
for(var i = 1;i < 10;i++){
	alert(i);
}
{% endcodeblock %}  

改写成这样就能实现阻塞
{% codeblock %}

var i = 1;                      //  初始化条件
var interval = 3000;            //  循环之间的时间间隔，单位毫秒

function myLoop () {           
   setTimeout(function () {    
      alert(i);             
      i++;                   
      if (i < 10) {            
         myLoop();             
      }                        
   }, )
}

myLoop();                      //  start the loop
{% endcodeblock %}  
也能写成这样
{% codeblock %}
(function myLoop (i) {          
   setTimeout(function () {   
      alert('hello');          //  your code here                
      if (--i) myLoop(i);      //  decrement i and call myLoop again if i > 0
   }, 3000)
})(10);                        //  pass the number of iterations as an argument
{% endcodeblock %}  