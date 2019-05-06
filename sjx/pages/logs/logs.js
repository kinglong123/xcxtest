//logs.js
const util = require('../../utils/util.js')
let app = getApp();
let counter = 0;
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  doSomething: function () {
    app.pubSub.emit('hello', ++counter);
  }
})
