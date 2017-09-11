const CONF = {
	port : '80',
	rootPathname: '',

	// 微信小程序 App ID
	appId: 'wx8afbcb404a881234', //* 你的AppID

	   // 微信小程序 App Secret
	appSecret: 'e6647df40ecca5996c77b77d05c91234', //* 你的appSecret

	   // 是否使用腾讯云代理登录小程序
	useQcloudLogin: false,

   /**
	* MySQL 配置，用来存储 session 和用户信息
	* 若使用了腾讯云微信小程序解决方案
	* 开发环境下，MySQL 的初始密码为您的微信小程序 appid
	*/
	mysql: {
		host: '172.211.0.105', // * 数据库服务器的内网IP
		port: 3306,
		user: 'root', //* mysql数据库的用户名
		db: 'cAuth',
		pass: 'mysqlpass', //* mysql 数据库的密码
		char: 'utf8mb4'
	},

	cos: {
		 /**
		  * 区域
		  * 华北：cn-north
		  * 华东：cn-east
		  * 华南：cn-south
		  * 西南：cn-southwest
		  * 新加坡：sg
		  * @see https://www.qcloud.com/document/product/436/6224
		  */
		region: 'cn-north', //* 这个根据实际情况选择
		// Bucket 名称
		fileBucket: 'wximg',
		// 文件夹
		uploadFolder: ''
	 },

	// 以下内容可以在如下网址中找到：https://console.qcloud.com/capi	

	qcloudAppId: '12541234', //* APPID
	qcloudSecretId: 'AKIDocRdpPezmcq02VEBXrLjrIwovyqr1234', //* SecretId
	qcloudSecretKey: 'lzGPNlFgBXxEbE9Mk2YahCan5Qb91234', //* SecretKey
	wxMessageToken:'X-WX-Code', 

	// 微信登录态有效期
	wxLoginExpires: 5000
}

module.exports = process.env.NODE_ENV === 'local' ? Object.assign({}, CONF, require('./config.local')) : CONF;
