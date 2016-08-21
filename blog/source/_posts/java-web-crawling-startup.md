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
<b><a href="TODO">DEMO</a></b>

## htmlunit
### htmlunit 简介
htmlunit是一个模拟浏览器的工具。一般的爬虫可以通过httpClient 的get post方法实现，但是有些网站针对爬虫和攻击作了一些限制，他们会通过JS代码生成一些验证参数，如果不想花心思研究这些js代码，最方便的就是模拟浏览器直接点击渲染后的html元素。
    <b><a href="http://htmlunit.sourceforge.net/">htmlunit官网</a></b>
    <b><a href="https://sourceforge.net/projects/htmlunit/files/latest/download">htmlunit下载</a></b>
<b><a href="TODO">DEMO</a></b>

## Jsoup
### Jsoup 简介
Jsoup可以将纯文本的html转换成java对象，让用户可以进行诸如CSS Select之类的操作，让爬虫更加方便快捷。
    <b><a href="https://jsoup.org/">Jsoup官网</a></b>
<b><a href="TODO">DEMO</a></b>
