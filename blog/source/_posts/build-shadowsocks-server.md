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
