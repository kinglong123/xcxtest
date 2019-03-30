// pages/UI/UI.js

const WXAPI = require('../wxapi/wxapi')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:[18,1,23,5,6,7,78],
    indicatorDots:true,
    vertical:false,
    autoplay:false,
    interval:500,
    duration: 500,
    background:[1,2,3,5,6,7],
    banners: [1, 2, 3, 5, 6, 7],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    /**
      * 示例：
      * 调用接口封装方法
      */
    WXAPI.banners({
      type: 'index'
    }).then(function (res) {
      if (res.code == 700) {
        wx.showModal({
          title: '提示',
          content: '请在后台添加 banner 轮播图片，自定义类型填写 index',
          showCancel: false
        })
      } else {
        that.setData({
          banners: res.data
        });
      }
    }).catch(function (e) {
      wx.showToast({
        title: "错误ss",
        icon: 'none'
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})