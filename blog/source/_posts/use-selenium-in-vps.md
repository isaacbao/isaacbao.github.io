---
title: 在没有图形界面的vps里使用selenium
date: 2017-03-16 18:13:34
tags:
- 爬虫
- linux
- selenium
categories:
- 技术
---
####环境
CentOS release 6.8 (Final) ,装在vps上，没有gui
2.6.32-642.el6.x86_64 GNU/Linux

####安装firefox
{% codeblock %}
yum search firefox
{% endcodeblock %}

输出大概会长这样
============================= N/S Matched: firefox =============================
firefox.i686 : Mozilla Firefox Web browser
firefox.x86_64 : Mozilla Firefox Web browser

{% codeblock %}
sudo yum install firefox.x86_64
{% endcodeblock %}

####安装Xvfb
xvfb是一个装在linux上的类似windows虚拟机的东西，没有图形界面的linux想要跑浏览器要借助xvfb
{% codeblock %}
yum search xvfb
{% endcodeblock %}

输出大概会长这样
============================== N/S Matched: xvfb ===============================
xorg-x11-server-Xvfb.x86_64 : A X Windows System virtual framebuffer X server.

{% codeblock %}
sudo yum install xorg-x11-server-Xvfb.x86_64
{% endcodeblock %}


####装完这俩之后
{% codeblock %}
sudo Xvfb :99 -screen 0 1024x768x24 +extension RANDR &
export DISPLAY=:99
firefox
{% endcodeblock %}
尝试启动firefox

要重启xvfb可以通过 ps -ef |grep xvfb,然后sudo -9 kill