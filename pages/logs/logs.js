//logs.js
const util = require('../../utils/util.js')
const app = getApp()
Page({
  data: {
    value:['','','','','','','','','','','','','','']
   
  },
  onLoad: function () {
  },
  //获取点击radio的值 存入value
  radioChange:function(e){
    var value = this.data.value;
    var status = e.detail.value;
    value.splice(0, 1, status);
    //console.log(value)
  },
  radioChange2: function (e) {
    var value = this.data.value;
    var status = e.detail.value;
    value.splice(1, 1, status);
    //console.log(value)
  },
  radioChange3: function (e) {
    var value = this.data.value;
    var status = e.detail.value;
    value.splice(2, 1, status);
    //console.log(value)
  },
  radioChange4: function (e) {
    var value = this.data.value;
    var status = e.detail.value;
    value.splice(3, 1, status);
    //console.log(value)
  },
  radioChange5: function (e) {
    var value = this.data.value;
    var status = e.detail.value;
    value.splice(4, 1, status);
    //console.log(value)
  },
  radioChange6: function (e) {
    var value = this.data.value;
    var status = e.detail.value;
    value.splice(5, 1, status);
    //console.log(value)
  },
  radioChange7: function (e) {
    var value = this.data.value;
    var status = e.detail.value;
    value.splice(6, 1, status);
    //console.log(value)
  },

  radioChange8: function (e) {
    var value = this.data.value;
    var status = e.detail.value;
    value.splice(7, 1, status);
    //console.log(value)
  },
  radioChange9: function (e) {
    var value = this.data.value;
    var status = e.detail.value;
    value.splice(8, 1, status);
    //console.log(value)
  },
  radioChange10: function (e) {
    var value = this.data.value;
    var status = e.detail.value;
    value.splice(9, 1, status);
    //console.log(value)
  },
  radioChange11: function (e) {
    var value = this.data.value;
    var status = e.detail.value;
    value.splice(10, 1, status);
    //console.log(value)
  },
  radioChange12: function (e) {
    var value = this.data.value;
    var status = e.detail.value;
    value.splice(11, 1, status);
    //console.log(value)
  },
  radioChange13: function (e) {
    var value = this.data.value;
    var status = e.detail.value;
    value.splice(12, 1, status);
    //console.log(value)
  },
  radioChange14: function (e) {
    var value = this.data.value;
    var status = e.detail.value;
    value.splice(13, 1, status);
    //console.log(value)
  },
  //点击提交
  addStatus:function(e){
    var that =this;
    var phoneNum = wx.getStorageSync('phone')
    var radioValue =that.data.value;
    //console.log(radioValue)
    wx.request({
      url: app.data.api_host+'voting_info/save_voting',
      data: {
        phoneNum:phoneNum,
        votings : radioValue
      },
      method: app.data.method,
      header: app.data.header,
      success: function (res) {
        //console.log(res);
        if(res.data.code==0){
            wx.showToast({
              title: '提交成功',
              icon:"success",
              duration:1000
            })
        } else if(res.data.code ==500){
          wx.showToast({
            title: '本月投票次数已用尽！',
            icon: "none",
            duration: 1000
          })
        
        }else{
          wx.showToast({
            title: '提交失败！请全部选中',
            icon: "none",
            duration: 1000
          })
        }
      },
      fail: function (res) {

      }
    })
  }
  
})
