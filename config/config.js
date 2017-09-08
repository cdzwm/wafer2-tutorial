const CONF = {
	port : '80',
	rootPathname: '',

	// 微信小程序 App ID
	appId: 'wx8afbcb404a885420',

	   // 微信小程序 App Secret
	appSecret: 'e6647df40ecca5996c77b77d05c96f83',

	   // 是否使用腾讯云代理登录小程序
	useQcloudLogin: false,

   /**
	* MySQL 配置，用来存储 session 和用户信息
	* 若使用了腾讯云微信小程序解决方案
	* 开发环境下，MySQL 的初始密码为您的微信小程序 appid
	*/
	mysql: {
		host: '172.21.0.15',
		port: 3306,
		user: 'root',
		db: 'cAuth',
		pass: 'myroot123',
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
		region: 'cn-north',
		// Bucket 名称
		fileBucket: 'wximg',
		// 文件夹
		uploadFolder: ''
	 },

	qcloudAppId: '1254251189',
	qcloudSecretId: 'AKIDocRdpPezmcq02VEBXrLjrIwovyqr6sfJ',
	qcloudSecretKey: 'lzGPNlFgBXxEbE9Mk2YahCan5Qb92rVy',
	wxMessageToken:'X-WX-Code',

	// 微信登录态有效期
	wxLoginExpires: 5000
}

module.exports = process.env.NODE_ENV === 'local' ? Object.assign({}, CONF, require('./config.local')) : CONF;
