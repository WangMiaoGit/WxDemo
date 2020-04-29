// pages/detial/detial.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productId: ''
  },

  // 添加到购物车
  addcar() {
    //将数据存储到本地到同步方法
    wx.setStorageSync('id', this.data.productId);
    //模态窗口提示
    wx.showModal({
      title:'购物车提示',
      content:'产品添加成功',

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //options  页面跳转 传递过来的信息
    // this.data.productId=options.id;
    this.setData({
      productId:options.id,
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