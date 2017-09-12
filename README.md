# 自行布署腾讯Wafer2服务器及测试DEMO教程 #


## 一、准备工作 ##

- 已经注册了微信小程序。
- 已经注册了腾讯的域名。
- 已经购买了腾讯云的Wafer服务器。包括:
    - 一台业务服务器(CentOS 7.3 64位)
    - 一台会话服务器CentOS 7.3 64位)
    - 一台MySQL服务器(MySQL5.6)

## 二、收集要用到的配置信息 ##

1. [登录微信公众平台｜小程序]("https://mp.weixin.qq.com")，然后执行如下和：
	- 依次点击"设置->开发者设置"，记录你的AppID。
	- 点击"AppSecret(小程序密钥)"右侧的重置按钮，按提示查看并记录"AppSecret(小程序密钥)"。
		
	例如：
	
			AppID: wx8afbcb404a881234
			AppSecret: e6647df40ecca5996c77b77d05c91234

2. [登录腾讯云]("https://console.qcloud.com/")，分别记录:
	- 业务服务器的公网IP，内网IP
	- 会话服务器的公网IP和内网IP
	- 微信小程序数据库MySQL的内网地址。
	
	例如：

			会话服务器：139.199.119.217(公) 172.215.0.80(内)
			业务服务器：123.207.152.208(公) 172.215.0.110(内)
			数据库服务器：172.21.120.135(内)

## 三、配置服务器 ##
### 1. 业务服务器配置 ###
- 通过腾讯云后台，重新安装操作系统(CentOS 7.3 64位)
- 通过ssh客户端登录业务服务器
- wget https://nodejs.org/dist/v8.4.0/node-v8.4.0-linux-x64.tar.xz # 下载node安装包
- tar zxf node-v8.4.0-linux-x64.tar.xz # 解压node安装包
- mv node-v8.4.0-linux-x64 /opt/node # 移动解压包到node的安装位置
- 编辑/root/.bash_profile,将/opt/node/bin添加到路径中去。
- source /root/.bash_profile
- cd # 切换到/home/root目录
- yum install git # 安装git
- git clone https://github.com/tencentyun/wafer2-startup.git # 下载最新的服务器端软件
- cp -r /root/wafer2-startup/server /data/release # 安装软件到最终位置
- cd /data/release/server
- npm install
- npm install pm2 -g
- node tools/initdb.js # 初始化数据库

__修改这几个配置文件中标注“//**//”的部分。示例文件中有详细注释__

- /data/release/server/config.js [查看示例文件](config/config.js)
- /data/release/sdk.config.json [查看示例文件](config/sdk.config.json)

### 2. 会话服务器配置 ###
-----------------

- 重新安装操作系统
- 通过ssh客户端登录
- cd /opt/lampp/htdocs
- ./update_mina.sh
- /opt/lampp/htdocs/mina_auth/system/db/db.ini [查看示例文件](config/db.ini)

__此db.ini文件，只有如下内容需要根据你的实际值进行修改:__

	host = 172.211.0.105 # 你的mysql服务器内网IP
	user_name = root     # 你的mysql服务器用户名
	pass_wd = mysqlpass  # 你的mysql服务器密码

## 四、下载微信开发者工具软件,进行测试 ##
### 1. 下载DEMO源代码。
	> git clone https://github.com/tencentyun/wafer2-startup.git
### 2. 下载安装开发者工具。
	>根据自己的操作系统下载[微信开发者工具](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html)，然后进行安装。 
### 3. 登录开者工具。
>并运行开发工具，软件会提示用微信扫描登录。使用微信扫描登录后，在接下来的界面中选择小程序项目。
### 4.[修改小程序请求域名](https://mp.weixin.qq.com)
>将你申请的域名添加到小程序的域名信息中。

### 5.修改DEMO小程序客户端代码中的域名配置信息。
>在编辑器中打开 /client/config.js文件。把文件中var host = 'https://xxx.xxx.xxx'行的 xxx.xxx.xxx修改为你申请的域名，然后点编译就可进行DEMO的测试了。

**注意：
成功进行配置并测试的关键是如下三个文件的配置。在示例文件中有详细的说明。请仔细阅读。**

- /data/release/server/config.js 
- /data/release/sdk.config.json
- /opt/lampp/htdocs/mina_auth/system/db/db.ini

## 五、总结 ##
如有问题，请联系QQ: 495720919, 或电邮: <495720919@qq.com>。
