//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // var result = wx.canIUse("openBluetoothAdapter");
    // var result = wx.canIUse('getSystemInfoSync.return.screenWidth');
    // var result = wx.canIUse('getSystemInfo.success.screenWidth');
    // var result = wx.canIUse('showToast.object.image');
    // var result = wx.canIUse('onCompassChange.callback.direction');
    // var result= wx.canIUse('request.object.method.GET');
    // var result = wx.canIUse('live-player');
    // var result = wx.canIUse('text.selectable');
    // var result = wx.canIUse('button.open-type.contact');
    // console.log(1234,result);
    // wx.showActionSheet({
    //   itemList: ['A','B','C'],
    //   success(res){
    //     console.log(123,res);
    //   },
    //   fail(res){
    //     console.log(234,res);
    //   }
    // })
    // wx.getStorageInfo({
    //   success: function(res) {
    //     console.log(res);
    //   },
    //   fail: function(res) {
    //     console.log(res);
    //   }
    // })
    // wx.getLocation({
    //   success: function(res) {
    //     const latitude = res.latitude;
    //     const longitude = res.longitude;
    //     wx.openLocation({
    //       latitude,
    //       longitude,
    //     })
    //   },
    // })

    // wx.updateShareMenu({
    //   withShareTicket : true,
    //   success(res){
    //     console.log(res);
    //   }
    // })
  //  var result = wx.getFileSystemManager();
  //  console.log(result);
  wx.checkSession({
    success(res) {
      console.log(res);
    },
    fail(res){
      console.log(res)
    }
  })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
