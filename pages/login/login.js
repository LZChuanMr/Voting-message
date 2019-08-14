//index.js

//获取应用实例
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    phoneNum: '',//手机号
    password:''//密码
   
  },
  //获取input输入框的值
  getPhoneNumValue: function (e) {
    this.setData({
      phoneNum: e.detail.value,
    })
  },
  getPasswordValue: function (e) {
    this.setData({
      password: e.detail.value
    })

  },
  //提交表单信息
  save: function () {
    var myreg = /^((0\d{2,3}-\d{7,8})|(1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}))$/;
    if (this.data.phoneNum == "") {
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none',
        duration: 1000
      })
      return false;
    } else if (!myreg.test(this.data.phoneNum)) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none',
        duration: 1000
      })
      return false;
    };
    wx.login({
      success:res=>{
        let phoneNum =this.data.phoneNum;
        let password= this.data.password;
        //console.log(phoneNum)
        wx.request({
          url: app.data.api_host+'department_score/login_gemp', 
          data: {
            phoneNum:phoneNum,
            password:password,
          },
          method: app.data.method,
          header: app.data.header,
          success: function (res) {
            //console.log(res);
            if (res.data.code == 0) {
              wx.setStorageSync('phone', phoneNum);
              wx.navigateTo({
                url: '../index/index',
              })
            }else{
              wx.showToast({
                title: '用户名密码错误',
                icon: 'none',
                duration: 1000
              })
            }
          },
          fail: function (res) {
            wx.showToast({
              title: '请求超时，请确认网络连接',
              icon: 'none',
              duration: 1000
            })
          }
        })
     
      }
    })
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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