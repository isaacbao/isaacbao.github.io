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
  网上并不容易找到预编译好又能用的tess4j，自己动手丰衣足食

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


## htmlunit
### htmlunit 简介
    <b><a href="http://htmlunit.sourceforge.net/">htmlunit官网</a></b>


## Jsoup
### Jsoup 简介
    <b><a href="https://jsoup.org/">Jsoup官网</a></b>
