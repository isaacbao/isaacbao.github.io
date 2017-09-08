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
#### 环境
CentOS release 6.8 (Final) ,装在vps上，没有gui
2.6.32-642.el6.x86_64 GNU/Linux
<!-- More -->

#### 安装firefox
先确认你服务器的repos里有没有firefox
{% codeblock %}
yum search firefox
{% endcodeblock %}

输出大概会长这样:
{% codeblock %}
============================= N/S Matched: firefox =============================
firefox.i686 : Mozilla Firefox Web browser
firefox.x86_64 : Mozilla Firefox Web browser
{% endcodeblock %}

安装firefox
{% codeblock %}
sudo yum install firefox.x86_64
{% endcodeblock %}

#### 安装Xvfb
xvfb是一个装在linux上的类似windows虚拟机的东西，没有图形界面的linux想要跑浏览器要借助xvfb
先确认你服务器的repos里有没有xvfb
{% codeblock %}
yum search xvfb
{% endcodeblock %}

输出大概会长这样:
{% codeblock %}
============================== N/S Matched: xvfb ===============================
xorg-x11-server-Xvfb.x86_64 : A X Windows System virtual framebuffer X server.
{% endcodeblock %}

安装xvfb
{% codeblock %}
sudo yum install xorg-x11-server-Xvfb.x86_64
{% endcodeblock %}

#### 装完这俩之后

启动xvfb
{% codeblock %}
sudo Xvfb :99 -screen 0 1024x768x24 +extension RANDR &
{% endcodeblock %}
其中 :99 是xvfb启动的端口，
要重启xvfb可以通过 ps -ef |grep xvfb,然后sudo -9 kill

编辑环境变量DISPLAY，让显示设备的变量指向:99端口
{% codeblock %}
sudo vi /etc/profile
{% endcodeblock %}
在最底下加上这句
export DISPLAY=:99

执行一下profile写入环境变量
{% codeblock %}
. /etc/profile
{% endcodeblock %}

尝试启动firefox
{% codeblock %}
firefox
{% endcodeblock %}
Xlib:  extension "RANDR" missing on display ":99".
启动firefox的时候如果报这个错，可以无视，RANDR其实只是用来缩放画面，对于基本功能没啥影响

到这里基本环境就配置完了


#### 番外
selenium启动firefox还需要这个驱动
https://github.com/mozilla/geckodriver/releases
去这里搞一个geckodriver，丢到服务器

然后就可以通过这段代码，用selenium启动firefox访问百毒
{% codeblock %}
//你的geckodriver放在哪这里就写哪
String FIREFOX_DRIVER_PATH = "/home/user/geckodriver.exe";
System.setProperty("webdriver.gecko.driver", FIREFOX_DRIVER_PATH);

WebDriver driver = new FirefoxDriver();
String url = "https://www.baidu.com";

driver.get(url);
{% endcodeblock %}

如果要启动tomcat的话，得先修改bin/catalina.sh
在vi界面里输入
/-D
搜索带有-D的段落
然后在一堆-D最下面加一句-Djava.awt.headless=true \  像这样↓(最后的斜杠不能漏)
{% codeblock %}
-Djava.endorsed.dirs="\"$JAVA_ENDORSED_DIRS\"" -classpath "\"$CLASSPATH\"" \
-Dcatalina.base="\"$CATALINA_BASE\"" \
-Dcatalina.home="\"$CATALINA_HOME\"" \
-Djava.io.tmpdir="\"$CATALINA_TMPDIR\"" \

-Djava.awt.headless=true \  
{% endcodeblock %}
不加的话和imageIO以及awt等与图形相关的类都不能用