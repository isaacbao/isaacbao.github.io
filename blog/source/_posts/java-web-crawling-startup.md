---
title: java 爬虫入门
date: 2016-08-18 22:26:12
tags:
- java
- 爬虫
- 文字图像识别
categories:
- 技术
---



## 前置知识
要学习爬虫，至少需要对http协议和html代码有基本的了解。
<b><a href="https://hit-alibaba.github.io/interview/basic/network/HTTP.html">http协议</a></b>
<b><a href="http://www.w3school.com.cn/html/index.asp">html语言</a></b>

## htmlunit
### htmlunit 简介
htmlunit是一个模拟浏览器的工具。一般的爬虫可以通过httpClient 的get post方法实现，但是有些网站针对爬虫和攻击作了一些限制，他们会通过JS代码生成一些验证参数，如果不想花心思研究这些js代码，最方便的就是模拟浏览器直接点击渲染后的html元素,此外htmlunit也会帮你自动保存cookie。
<b><a href="http://htmlunit.sourceforge.net/">htmlunit官网</a></b>
<b><a href="https://sourceforge.net/projects/htmlunit/files/latest/download">htmlunit下载</a></b>
其实不下载jar也可以，htmlunit，maven找得到。
api文档？不需要这样的东西，intellij + maven，直接就能把文档和源码都弄下来。
htmlunit的核心是一个叫WebClient的东西，基本上我们可以这么理解：一个WebClient实例就是一个浏览器。这意味着如果我们在某个网站拥有多个账号，就可以通过不同的浏览器登录不同的账号，然后一个并发爬取大量信息。

使用WebClient之前，可以通过WebClient.getOption()方法获取浏览器配置，并对配置进行变更，比如：
{% codeblock %}
// 设置请求超时时间
webClient.getOptions().setTimeout(60000);
// 是否允许加载css
webClient.getOptions().setCssEnabled(false);
// response不是200的时候是否抛出异常
webClient.getOptions().setThrowExceptionOnFailingStatusCode(false);
// 是否允许applet应用（比如各种浏览器插件）运行
webClient.getOptions().setAppletEnabled(false);
// 是否使用格林尼治时间
webClient.getOptions().setGeolocationEnabled(false);
// 是否允许弹出alert框框
webClient.getOptions().setPopupBlockerEnabled(false);
// 是否使用不安全的ssl连接（想不装证书访问使用https协议的网站需要把这个设为true）
webClient.getOptions().setUseInsecureSSL(true);
{% endcodeblock %}

WebClient可以通过两种方式请求页面：
①
等效于直接从浏览器地址栏输入一个url，会执行可以执行的js，此外返回的page对象会将html里面的dom元素转换成java对象，可以通过tag，标签等选择。
{% codeblock %}
HtmlPage page = webClient.getPage(targetURL);
{% endcodeblock %}
②
只请求需要的数据，不加载js
{% codeblock %}
WebRequest request;
WebResponse response = null;
try {
  // 这里设定get post
  request = new WebRequest(new URL(url), HttpMethod.GET);
  if (additionalHeaders != null) {
    request.setAdditionalHeaders(additionalHeaders);
  }
  response = webClient.loadWebResponse(request);
} catch (IOException e) {
  e.printStackTrace();
}
return response;
{% endcodeblock %}


## Jsoup
### Jsoup 简介
Jsoup可以将纯文本的html转换成java对象，让用户可以进行诸如CSS Select之类的操作，让爬虫更加方便快捷。
<b><a href="https://jsoup.org/">Jsoup官网</a></b>

比如像这样通过css选择器选择所有class="search_feed"的dom元素
{% codeblock %}
String searchResult = extractSearchResult(scriptStr);
Document searchResultDoc = Jsoup.parse(searchResult);
Elements divSearchFeed = searchResultDoc.select(".search_feed");
{% endcodeblock %}

<b><a href="http://www.w3school.com.cn/cssref/css_selectors.asp">css选择器教学</a></b>

## 正则表达式
有些时候，爬回来的数据会是一个js文件，或者是一段CDATA数据，这个时候就需要通过正则表达式提取自己所需的信息。
<b><a href="http://www.runoob.com/regexp/regexp-tutorial.html">正则表达式教学</a></b>

这里有一个很好使的正则测试网站
<b><a href="http://regexr.com/">regex测试</a></b>
网站左边还有很多很神奇很实用的功能，各位可以自行挖掘
{% asset_img regexr.png %}

## 举个例子
爬虫之前，我们还要分析网站，确认是要向哪个url发什么请求
一个及格的开发者电脑里都应该备一个 <b><a href="https://www.google.com.tw/intl/zh-CN/chrome/browser/desktop/index.html">chrome</a></b>

我们先拿 <b><a href="http://s.weibo.com/weibo/">新浪微博</a></b> 开个刀：
打开浏览器，二话不说先按一下F12，点到network，把preserve log勾上
{% asset_img view.png %}
然后在搜索框随便输点什么东西，把页签切到doc里，从上往下挨个看，就找到搜索的http请求了
{% asset_img find-request.png %}
让我们看看参数长啥样的……握日？？没有参数？嗯？url最后那段看着有点像是被urlencode过啊？
{% asset_img no_param.png %}

> urlencode
> 網路上的定義
> 百分號編碼, 也稱作URL編碼, 是特定上下文的統一資源定位符 的編碼機制. 實際上也適用於統一資源標誌符的編碼。也用於為"application/x-www-form-urlencoded" MIME準備數據, 因為它用於通過HTTP的請求操作提交HTML表單數據。

urldecode一下，确认搜索参数是直接写到请求url中
{% asset_img urldeocde1.png %}
{% asset_img urldeocde2.png %}
{% asset_img urldeocde3.png %}

开始分析页面
点一下审查元素左上角这里
{% asset_img select-dom.png %}
点一下页面里的某一条微博
{% asset_img select-dom2.png %}
element页签里就会传送到这个元素，可以分析元素结构，到时候就可以通过jsoup的css选择器从dom元素中提取自己想要的信息了
{% asset_img select-dom3.png %}

但是，先别急，现在的你看到的页面，未必是你想象的这样子的
在微博搜索页面按一下ctrl+u，发现，页面里的html代码是放在javascript里的，而且unicode编码过，htmlunit还解析不出来
{% asset_img view-source.png %}

  于是，怎么破呢，用文字很难说清，我们用<s>身体</s>实例来体会吧

<b><a href="https://github.com/isaacbao/java_crawling_demo">爬虫demo</a></b>
这个项目里src\main\java\crawlWeibo  这个文件会教你如何处理这个难题



另外爬虫嘛，很多时候需要登录，但是登录又有验证码，于是……
# 外传 验证码识别
## A tesseract ocr
### A-1 tesseract ocr简介
  一句话概括，tesseract ocr（下文简称为tess）是惠普研发的一个文字图像识别组件，原本是用来给识别扫描仪扫出来的图片，后来进化得越来越妖，连一些简单的扭曲验证码图片也能识别成文字了。
比较正规的介绍请看这里↓
<b><a href="https://github.com/tesseract-ocr/tesseract">tess官网</a></b>

### A-2 安装tess
#### A-2-1 安装visual C++ 2013
  windows版的tess需要依赖visual C++ 2013
  <b><a href="https://www.microsoft.com/en-us/download/details.aspx?id=40784">visual C++ 2013下载</a></b>
下载完毕后双击安装

### A-2-2 安装tesseract ocr
  如无意外该步骤全程都需要翻墙

###### <a href="https://sourceforge.net/projects/tesseract-ocr-alt/files/tesseract-ocr-setup-3.02.02.exe/download">下载tess</a>
  双击安装，一些步骤需要注意下

## B tess4j
  让java可以通过JNA调用tess接口，进行图像识别的工具。（不懂JNA是啥的可以问google，实在不行问百度。认不认识JNA对于阅读本文没有影响）
###### <a href="http://tess4j.sourceforge.net/">tess4j官网</a>

### B-1 编译tess4j
  网上并不容易找到预编译好又能用的tess4j，自己动手丰衣足食。（当然用maven也是可以的，但由于tess4j比较依赖本地环境，即使用maven弄下来了也可能会因为环境问题导致各种运行时错误。）

#### B-1-1 安装ant
##### B-1-1-1 下载ant
  tess4j可以通过apache ant来进行编译
<b><a href="http://ant.apache.org/">ant官网</a></b>
<b><a href="http://apache.claz.org//ant/binaries/apache-ant-1.9.7-bin.zip">ant下载</a></b>

##### B-1-1-2 设置环境变量
<b>
      下载完毕后，假设我们把ant解压到了F盘的这个目录 ↓ 
      <br/>
      F:\soft\apache-ant-1.9.7-bin\
    </b>
<b>
      bin文件夹在这里↓ 
      <br/>
      F:\soft\apache-ant-1.9.7-bin\apache-ant-1.9.7\bin\
    </b>
win+r(win就是左下角ctrl隔壁的小旗子)
运行
sysdm.cpl
{% asset_img open_system_varaible.png %}
{% asset_img system_properties.png %}
{% asset_img select-path.png %}

  在最后面添加一条（和其他path之间用英文的;隔开，但是末尾不要加;）
{% codeblock %}
F:\soft\apache-ant-1.9.7-bin\apache-ant-1.9.7\bin
{% endcodeblock %}
{% asset_img edit_system_varaiable1.png %}
  （安利一下WIN10，环境变量的配置十分人性化，长这样的，羡慕吧，还不赶紧升级一起喊微软爸爸）
{% asset_img edit_system_varaiable.png %}

  最后确认一下环境变量到底加上没
win+r
cmd
{% asset_img run_cmd.png %}

{% codeblock %}
ant
{% endcodeblock %}
  结果如图所示，就证明ant可以用了
{% asset_img test_ant.png %}
附录：
<b><a href="https://support.microsoft.com/en-us/kb/149648">各种控制面板的快捷方式</a></b>
  知道了这些，如果被人叫去修电脑，装逼效果奇佳（死屌丝码农就一修电脑的也学别人装逼，怎么装都是那副亏样，交大门口捡汽水瓶子的都比你强）

#### B-1-2 编译tess4j
##### B-1-2-1 下载tess4j
由于tess的window傻瓜安装包只有tess3.02版本，更上面的tess3.03 3.04都需要自己编译，所以这里tess4j的源码我们也选择适应tess3.02的tess4j-2.0，想体验更高版本的新特性的高端用户可以自行编译安装tess
<b><a href="https://sourceforge.net/projects/tess4j/files/tess4j/2.0/Tess4J-2.0-src.zip/download">tess4J 2.0源码</a></b>
下载后，假设tess4J的源码放在了F盘这个目录
<b>F:/tess4j</b>
Win+r
cmd
{% codeblock %}
ant
{% endcodeblock %}
如果出了问题，请检查自己A-2步骤有没有做对，可以重新执行一下A-2
编译完毕后，就可以试用了

{% codeblock %}
//初始化tess实例
public Tesseract initialTesseractInstance() {
  Tesseract instance = new Tesseract();
  URL url = this.getClass().getClassLoader().getResource("/");
  String dir;
  if (null == url) {
    url = this.getClass().getClassLoader().getResource(".");
  }
  dir = url.getPath();
  // String system_name = System.getProperty("os.name");
  if (System.getProperty("os.name").toLowerCase().contains("windows")) {
    dir = dir.substring(1);
  }
  instance.setDatapath(dir + "tessdata");
  return instance;
}
{% endcodeblock %}

<b><a href="https://github.com/isaacbao/captcha-identify-demo">验证码识别DEMO</a></b>

总结：其实这篇外传并没有什么卵用，因为最核心的图像处理算法以及图像识别算法都没写，因为这两种都不是区区博客可以写明白的东西，有兴趣，可以自行找论文
