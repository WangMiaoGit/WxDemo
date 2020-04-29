// pages/wxfor/wxfor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    users: [
      {
        id: 1,
        name: "one",
      },
      {
        id: 2,
        name: "two",
      },
      {
        id: 3,
        name: "three",
      }
    ]
  },

  addData() {
    //加到数组后面
    // this.data.users.push({ id: 4, name: "four" });
    //加到数组头部
    //这种添加会引起  wx：for  数组索引问题  所以需要加上  wx：key
    this.data.users.unshift({id:4,name:"first"});
    this.setData({
      users: this.data.users
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