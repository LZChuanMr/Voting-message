//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    flag: 1 ,
    you: [],
    cha: []
  },
  //swiper切换时会调用
  pagechange: function (e) {
    if ("touch" === e.detail.source) {
      let currentPageIndex = this.data.currentIndex
      currentPageIndex = (currentPageIndex + 1) % 2
      this.setData({
        currentIndex: currentPageIndex
      })
    }
  },
  //用户点击tab时调用
  titleClick: function (e) {
    let currentPageIndex =
      this.setData({
        //拿到当前索引并动态改变
        currentIndex: e.currentTarget.dataset.idx
      })
  },
  //历史投票
  history:function(e){
    var that =this
    var flag =2
    wx.request({
      url: app.data.api_host+'voting_info/max_min',
      data:{ flag:flag },
      method: app.data.method,
      header: app.data.header,
      success: function (res) {
        //console.log(res);
        that.setData({
          you: res.data.data,
          cha: res.data.data
        })
      },
      fail: function (res) {
      }
    })
   
  },
  onLoad: function () {
    var that =this
    var flag =that.data.flag
    //console.log(flag)
    wx.request({
      url: app.data.api_host + 'voting_info/max_min',
      data:{flag:flag},
      method: app.data.method,
      header: app.data.header,
      success: function (res) {
        //console.log(res)
        //console.log(res.statusCode)
        if (res.statusCode==500) {
          wx.showToast({
            title: '本月尚未投票!',
            icon: 'none',
            duration: 500,
          })
        }
        that.setData({
          you: res.data.data,
          cha: res.data.data
        })
      
      },
      fail: function (res) {
      }
    })
  },
 
})
