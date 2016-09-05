---
title: 通过intellij导入maven工程
date: 2016-09-03 19:09:17
tags:
- java
categories:
- 技术
- 新手教学
---
首先打开intellij，然后import new project
{% asset_img intellij_start.png %}
如果之前已经打开过其他intelliJ项目的话，就直接
{% asset_img new_project_from.png %}
点中对应项目的pom.xml文件（maven通过pom.xml来管理项目的依赖关系）
{% asset_img select_project.png %}
一路next到这里，选择jdk的路径
{% asset_img select_jdk.png %}
如果没有装jdk，去 <b><a href="http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html">这里</a></b>  下一个
下载完之后安装，然后再选择jdk路径即可