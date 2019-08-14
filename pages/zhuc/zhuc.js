//index.js

//获取应用实例
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    fullName: '',//姓名
    phoneNum: '',//手机号
    department: '',//部门
    password:''//密码
  },
  //获取input输入框的值
  getFullNameValue: function (e) {
    this.setData({
      fullName: e.detail.value
      
    })
  },
  getPhoneNumValue: function (e) {
    this.setData({
      phoneNum: e.detail.value
    })
  },
  getPasswordValue: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  getDepartmentValue: function (e) {
    this.setData({
      department: e.detail.value
    })
  },
  goTologin:function(){
    wx.navigateTo({
      url: '../login/login',
    })
  },
  
  //提交表单信息
  save: function () {
    var myreg = /^((0\d{2,3}-\d{7,8})|(1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}))$/;
    if (this.data.fullName == "") {
      wx.showToast({
        title: '姓名不能为空',
        icon: 'none',
        duration: 1000
      })
      return false;
    }
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
      success: res => {
        let fullName = this.data.fullName
        let phoneNum = this.data.phoneNum
        let password = this.data.password
        let department = this.data.department
        //console.log(this.data.fullName)
        //console.log(this.data.phoneNum)
        //console.log(this.data.password)
        //console.log(this.data.department)
        wx.request({
          url: app.data.api_host+'department_score/regist_gemp', //本地服务器地址
          data: {
            fullName: fullName,
            phoneNum: phoneNum,
            department: department,
            password: password
          },
          method: app.data.method,
          header:app.data.header,
          success: function (res) {
            console.log(res);
            if (res.data.code == 0){
              wx.navigateTo({
                url: '../login/login',
              })
            } else if (res.data.code == 500){
              wx.showToast({
                title: '此用户已注册',
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