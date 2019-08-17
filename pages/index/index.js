Page({

  /**
   * 页面的初始数据
   */
  data: {
    //首页导航中被点击的索引
    currentIndexNav:0,
    //首页导航数据
    navList:[],
    //轮播图数据
    swiperList:[],
    //视频数据
    videosList:[]
  },
  getVideosList() {
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
      success(res) {
      //  console.log(res);
        //表示成功收到后台发送的数据 code==0
        if (res.data.code == 0) {
          that.setData({
            videosList: res.data.data.videosList,
          })
        }
      }
    })
  },
  // 得到轮播图列表
  getSwiperList(){
    let that=this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
      success(res) {
        //  console.log(res);
        //表示成功收到后台发送的数据 code==0
        if (res.data.code == 0) {
          that.setData({
            swiperList: res.data.data.swiperList,
          })
        }
      }
    })
  },
   /**
   * 点击首页导航按钮
   */
  activeNav(e){
    // console.log(123);
    this.setData({
      currentIndexNav:e.target.dataset.index   //不太懂哟
    })
  },
  /**
   * 获取首页导航数据
   */
  getNavList(){
    let that = this;
    //利用小程序内置发送请求的方法
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
      success(res){
        // console.log(res);
        //表示成功收到后台发送的数据 code==0
        if(res.data.code==0){
          that.setData({
            navList:res.data.data.navList,
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1.获取首页导航栏的数据
    this.getNavList();
    //2.获取轮播图数据
    this.getSwiperList();
    //3.获取视频数据
    this.getVideosList();
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

// //index.js
// //获取应用实例
// const app = getApp()

// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo')
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//   },
//   getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// })
