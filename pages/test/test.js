// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },


  showLoading() {
    wx.showLoading({
      title: '加载中'
    });
    //定时取消加载
    setTimeout(() => {
      wx.hideLoading({
        complete: (res) => { },
      })
    }, 2000);
  },


  showToast() {
    wx.showToast({
      title: 'toast',
      icon: 'success',
      duration: 2000,
    })
  },

  showModel() {
    wx.showModal({
      title:'提示',
      content:'model的内容',
      cancelColor: 'cancelColor',
      // success:()=>{
      //   console.log("点击确定")
      // },
      success(res){
        if (res.confirm) {
          console.log("点击确定");
        }else{
          console.log("点击取消");
        }
      }
    })
  },

  clickme: function () {
    console.log("点击")
  },

  longclickme() {
    console.log("长按点击")
  },
  inputchange() {
    console.log("数据改变")
  },
  getUserInfo(e) {
    console.log(e)
  },
  getPhoneNumber(e) {
    console.log(e)
  },
  contact() {
    console.log("联系客服")
  },

  //传递的参数param
  showparam(param) {
    console.log(param.currentTarget.dataset.number);
    console.log(param.currentTarget.dataset.number2);
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 接收跳转传递过来的参数
    console.log(options)
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