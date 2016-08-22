---
title: 搭建shadowsocks服务器
date: 2016-08-18 22:48:44
tags:
- 科学上网
categories:
- 技术
---

## 搭建shadowsocks服务器

## 事前准备
###  一张信用卡，支持境外支付
  可以是visa，也可以是mastercard，信用卡的申请不在本教程的范畴内，请自行去找一家离家近的银行咨询

### A 申请服务器
  本文采用的服务器供应商是vultr
  说说本人用vultr的理由：
  1 有日本节点
  2 价格不贵，而且我注册的时候有优惠，进门充10美金就能用10个月
  3 按小时收费，如果发现速度不理想或者不符合要求，可以马上停掉这台机器换一台别的

#### A1 注册账号
    <b><a href="http://www.vultr.com/?ref=6949606-3B">vultr注册地址</a></b>

#### A2 绑定信用卡 
  注册之后进入图中的界面，点add new添加信用卡
{% asset_img bind-credit-card.png %}
{% asset_img bind-credit-card2.png %}

#### A3 充钱
PS. 点完那个按钮钱就直接冲进去了，没有确认键……别手抖连点或者错点啊
{% asset_img charge.png %}

#### A4 挑服务器
    <b><a href="https://www.vultr.com/faq/#downloadspeedtests">获取各个机房的测试节点</a></b>
  挨个点击下图中各个机房的下载文件，找到速度最快的，记下机房所在地区（location）
{% asset_img selectLocation.png %}

  来到这个页面↓ 点加号
{% asset_img selectServer.png %}

  选择对于你来说速度最快的地区的机房
{% asset_img selectLocation2.png %}

  操作系统选ubuntu 最新版本64位，配置根据自己的经济能力选（我是选了最便宜的）
{% asset_img selectServer2.png %}
{% asset_img selectServer3.png %}

  最后点击最下面这个按钮，等几分钟服务器就会部署完毕
{% asset_img selectServer4.png %}

### B 连接服务器
#### B1 下载putty
putty是一个远程连接linux主机的工具，原理可以自行google。
<b><a href="https://the.earth.li/~sgtatham/putty/latest/x86/putty.exe">下载putty</a></b>

#### B2 通过putty连接服务器
回到vultr个人主页，选择刚刚部署的服务器
{% asset_img editServer.png %}
点进去后可以看到服务器ip，用户名和密码（点密码右边的眼睛可以看到密码，眼睛旁边的那两个框框是复制密码到剪切板）
{% asset_img editServer2.png %}
打开putty，在上面那个红框内输入你的服务器ip，中间那个红框里随便填些东西，然后保存
{% asset_img usePutty.png %}
双击刚才保存的配置，进入putty，输入用户名，回车
{% asset_img usePutty2.png %}
输入密码（输入密码的时候，密码是看不见的，连星号都没有，输错了请重新再来，复制密码之后在putty的黑框框里按右键可以直接粘贴），回车
{% asset_img usePutty3.png %}