// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //视频详情
    videoInfo:null
  },
  /**
   * 根据视频id 获取视频详情 
   */
  getCurrentVideo(videoId){
    let that=this;
    wx.request({
      url: "https://easy-mock.com/mock/5ccc2cc89e5cbc7d96b29785/bili/videoDetail?id=" + videoId,
      success(res) {
          // console.log(res);
        //表示成功收到后台发送的数据 code==0
        if (res.data.code == 0) {
          that.setData({
            videoInfo: res.data.data.videosInfo,
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    let videoId=options.id;
    // 1.获取视频详情
    this.getCurrentVideo(videoId);
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