// pages/mainIndex/mainIndex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [],
    productList: [],
  },

  getNavList: function () {
    let that = this
    wx.request({
      url: 'http://www.hengyishun.cn/login/navlist',
      success(res) {
        console.log(res),
          that.setData({
            navList: res.data
          })
      }
    })
  },

  getProductList: function () {
    let that = this
    wx.request({
      url: 'http://www.hengyishun.cn/login/getProductList',
      success(res) {
        console.log(res),
          that.setData({
            productList: res.data
          })
      }
    })
  },

  go(){
    wx.switchTab({
      url: '/pages/classtype/classtype',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavList();
    this.getProductList();
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
    //下拉刷新
    console.log("下拉控制")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //上拉加载  分页
    console.log("滑动触底")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("点击分享")
  }
})