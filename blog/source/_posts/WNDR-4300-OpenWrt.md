---
title: WNDR-4300-shadowsock代理路由器搭建
date: 2016-07-02 20:45:01
tags:
- 科学上网
categories:
- 技术
---
## 给路由器刷OpenWrt系统

## 事前准备
###  NETGEAR-WNDR-4300
  淘宝入手，全新250左右，二手150左右，怕风险就多花钱，穷人心大不在意外观的就二手（WNDR4300的穿墙性能不是很强，家里墙多的需可能需要考虑别的方案）
### 牙签（回形针、手机取卡器）
  用来按路由器的重置键，以便刷系统
### 网线，两根
  一根用来连接猫和路由（这根建议尽量长一点，尽量能让路由放在电脑旁边），一根用来连接路由和电脑


### A 
  用网线将PC和路由器的任意一个LAN口连接（路由器有5个口插网线，LAN口用来接上网设备，WAN口接猫，接口下面会写明那个是LAN口那个是WAN口）

### B 设置PC的本地IP（局域网IP）为192.168.1.2
#### B1 
  按win+R(win就是键盘上ctrl隔壁的那个小旗子)
#### B2 
  输入Ncpa.cpl，点击确定
{% asset_img openNcpa.png %}
#### B3
  找到连着路由器的网络连接（用网线的话，就找到图标带网线的那个网络连接，如下图）
{% asset_img selectEtherNet.png %}
#### B4 
右键-属性
{% asset_img property.png %}
#### B5 
选择IPV4-属性
{% asset_img selectIPV4.png %}
#### B6 
如图配置，DNS可不填
{% asset_img setIPV4.png %}
#### B7 
将路由器断电
#### B8 
  用牙签（或其他细长物体）摁一下路由器后面的重置键（ Restore Factory Settings，在电源键附近）
#### B9 
开启路由器
#### B10
按win+R(win就是键盘上ctrl隔壁的那个小旗子) 输入cmd
#### B11 
输入命令
ping 192.168.1.1
  如果ping没有超时则证明已经成功连上路由器
  没ping通则需要检查前面各个步骤，其中B3尤其可能出错，很可能改了无线连接而非有线连接的局域网IP

### C 安装OpenWrt
#### C1
下载OpenWrt
    <b><a href="https://downloads.openwrt.org/latest/ar71xx/nand/openwrt-15.05.1-ar71xx-nand-wndr4300-ubi-factory.img">下载OpenWrt</a></b>
#### C2
  假设openwrt-15.05.1-ar71xx-nand-wndr4300-ubi-factory.img装在F盘的soft文件夹（F:\soft）
  按win+R(win就是键盘上ctrl隔壁的那个小旗子) 输入cmd
{% codeblock %}
F:
{% endcodeblock %}
{% codeblock %}
cd F:\soft
{% endcodeblock %}
{% asset_img cmd.png %}

### D 重启
#### D1 
  完成上述步骤后，等两三分钟，等路由器重启，期间可以做点爱做的事情
#### D2
  路由器重启成功后，电源指示灯亮绿色，这个时候关电源，然后再开机，如果一切正常，开机后路由器的2.4GHz 和 5GHz的等都会亮

  只要出了问题，重启都能解决

### E 配置openwrt
#### E1 下载putty
