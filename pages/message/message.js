//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
    msgData: []
  },
  onLoad: function() {
    var that = this;
    var messageId = 0;
    wx.request({
      url: app.data.api_host+'leave_message/list_message',
      data:{
         messageId:messageId 
      },
      method: app.data.method,
      header: app.data.header,
      success:function(res){
        var list = res.data.data; 
        console.log(list)
        that.setData({
          msgData: list
        })
        //console.log(that.data.msgData)
      
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
  changeInputValue(e) {
    this.setData({
      inputVal: e.detail.value
    })
    // console.log(e.data.value)
  },
  //添加留言
  addMsg() {
    var list = this.data.msgData;
    if (this.data.inputVal != null && this.data.inputVal != ''){
      list.push({
        msg: this.data.inputVal
      });
    }else{
      wx.showToast({
        title: '请输入内容',
        icon: 'none',
        duration: 1000
      })
    }
    var phoneNum = wx.getStorageSync('phone')
    var content = this.data.inputVal;
    //console.log(phoneNum)
    //console.log(content)
    var that = this;
    wx.request({
      url: app.data.api_host+'leave_message/save_message',
      data: {
        phoneNum: phoneNum,
        content: content
      },
      method: app.data.method,
      header: app.data.header,
      success: function(res) {
        //console.log(res);
        that.onLoad();
      },
      fail: function(res) {
        wx.showToast({
          title: '请求超时，请确认网络连接',
          icon: 'none',
          duration: 1000
        })
      }
    })
    //更新
    this.setData({
      msgData:list,
      inputVal: ''
    })
   
  },
  goTodetail:function(e){
    wx.navigateTo({
      url: '../messageDetail/messageDetail?messageId=' + e.currentTarget.id
    })
    //console.log(e.currentTarget.id)

  }


})