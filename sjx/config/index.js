module.exports = {
  appId: 'wx5d749a6607837268',
  businessAppId: 'wjt-wechat-gateway', // 在UCWEB组件后台管理门户配置的隔离代码

  sdpAppId: '79a5908a-96df-4da1-ae23-ec0335165dc4', //'e91708ad-0138-46b6-85d9-c6907db70624',
  orgName: 'EP_1553760669016', // 预生产'ep_1554789677711'

  notice_api: 'http://notice.k8s.sdp.nd',
  notice_app_id: '79a5908a-96df-4da1-ae23-ec0335165dc4', // b29b202b-d09b-4ffe-a6f2-6d569b59c74c
  evaluate_api: 'http://classroom-assessment-test.k8s.sdp.nd',
  gateway: {
    "global": 'http://wjt-wechat-gateway-qa-test.k8s.sdp.nd'
  },
  uc_third_url: 'https://auth-third-beta.101.com',//UC 第三方登录
  uc_url: 'https://ucbetapi.101.com',// UC 接口
  cs_url: 'https://betacs.101.com',// 内容服务接口
  cs_service: 'https://betacs.101.com',
  platCode: 400181020000,
  cache: {
    course: '$$cache_course',
    guideQuestion: '$guide_question',
    guideComplexQuestion: '$guide_complex_question',
    firstUse: '$first_use',
    currentNode: '$current_node',
    nextNodes: '$next_nodes',
    token: '$token',
    coupon: '$coupon',
    role: '$role',
    classes: '$classes',
    selectedClass: '$selectedClass',
    childClasses: '$childClasses',
    selectedChildClass: '$selectedChildClass',
    subjects: '$subjects'
  },
  token: {
    "access_token": "8F0C3D3EB35559D7FA37D5095B4EA2834C4273B1265B4CE11A9CEB49A80A3EEE4A2F7FA5B905B4C1",
    "expires_at": "2019-04-10T16:40:48.087+0800",
    "mac_algorithm": "hmac-sha-256",
    "mac_key": "xZwRKguRmA",
    "passport_id": "2107161672",
    "refresh_token": "787C4E4098494F88D9BEBAEA8DCD7D3E146BDADA9E0B23528BDF033BDE33F852C7F0B33AD06394E64F0B0104F9E39EEDA98B16813D84596C1F7BA9FCE55F9BDE80C84D00C00E87AC892B9E510B229EE759E7F6B5EFB37DFEDE7D26F56365F3745AC2AA385B7D638212575456149C5D0CDE525D9CC66BC2E6AE7B10F06C0AE211",
    "server_time": "2019-04-03T16:40:48.091+0800",
    "user_id": 2107161672
  },
  DEBUG: false,
  homework_url: 'http://esp-homework.debug.web.nd',
  exercise_url: 'http://esp-slides.pre1.web.nd',
  sdp: {
    appId: '79a5908a-96df-4da1-ae23-ec0335165dc4', // 登录组织 nd / a388e49f-b35d-46a3-9d5f-7492fd8ef887
    env: 'wjt' // development, test, preproduction, product, aws, aws-california, wjt, dyejia, hk, snwjt
  },
  
  uc: {
    appId:"wjt-wechat-gateway",//uc的自定义业务ID
    thirdPartyLogin: true, // 是否使用第三方快速登录，涉及UC账户绑定微信账号
    autoRegister:true,
    orgName: 'EP_1553760669016',
    env: "preproduction",
    tips: {
      authUserInfo: '若不授权获得您的公开信息，可能导致无法正常使用小程序。点授权去击允许使用' // 未授权获取用户信息后的提示
    },
  },
  h5: {
    authorize: 'edu',// null uc edu    
    share: {
      enable: true,
      title: '快来加入我们，一起学习佛学知识吧~~~~~~~~~',
      path: '/pages/index/index' // 默认分享页面地址，若不设置将使用分享时 H5 当前地址。支持 string function 两种类型，function 为 function(url)结构，可在内部获取当前加载的h5页面地址，返回对应的分享页面地址
    },
    callback: {
      onWebViewLoad: function (url) {
        wx.setNavigationBarTitle({
          title: '达标作业',
        })
      },
      onWebViewError: function (e) {
      }
    }
  },


  cache: {
    course: '$$cache_course',
    guideQuestion: '$guide_question',
    guideComplexQuestion: '$guide_complex_question',
    firstUse: '$first_use',
    currentNode: '$current_node',
    nextNodes: '$next_nodes',
    userId: '$USER_ID',
    coupon: '$coupon',
    role: '$role',
    classes: '$classes',
    selectedClass: '$selectedClass',
    subjects: '$subjects',
    mobile: '$mobile'
  },

};

