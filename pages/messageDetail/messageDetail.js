// pages/messageDetail/messageDetail.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.messageId)
    var that = this;
    wx.request({
      url: app.data.api_host + 'leave_message/list_message',
      data:{
        messageId:that.options.messageId
      },
      method: app.data.method,
      header: app.data.header,
      success: function (res) {
       console.log(res)
        that.setData({
          content:res.data.data
        })
      },
      fail: function (res) {
        wx.showToast({
          title: '请求超时，请确认网络连接',
          icon: 'none',
          duration: 1000
        })
      }
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