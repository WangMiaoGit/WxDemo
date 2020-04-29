// pages/test2/test2.js
Page({

  //MVVM  M:model(data) V:view(wxml) VM:viewmodel(page.js)
  /**
   * 页面的初始数据
   */
  data: {
    msg: "<b class='msg-style'>hello world</b>"
  },

  changeMsg() {
    console.log(this.data.msg)

    // 修改数据刷新页面 wx:if wx:for
    this.setData({
      msg: "is changed"
    })
  },

  toast() {
    // wx.showToast({
    //   title: '成功',
    //   icon:'success',
    //   duration:2000
    // })

    //  wx.showToast({
    //   title: '成功',
    //   icon:'loading',
    //   duration:2000
    // })

    // wx.showLoading({
    //   title:'加载中。。。',
    // })
    // setTimeout(function(){
    //   wx.hideLoading();
    // },2000)

    wx.showModal({
      title: '确定吗',
      content: '确定吗确定吗确定吗确定吗确定吗',
      cancelColor: 'cancelColor',
      // success:function(res){
      //   console.log(res);
      // }
      success(res) {
        if (res.confirm)
          console.log('确定');
        else
          console.log('取消');

      }
    })

  },

  jumpTo() {
    wx.navigateTo({
      url: '/pages/test/test?id=1',
    })
  },


  getData() {
    wx.request({
      url: 'url',
      data: {},
      success(res) {
        console.log(res);
      },
    })
  },

  //模块化 加载 公共的js方法
  showText() {
    var common_show_text = require('../../utils/util.js');
    common_show_text.showText("123")
  },

  // // callback 形式调用 
  // wx.chooseImage({
  //   success(res) {
  //     console.log('res:', res)
  //   }
  // })
  // //  promise 形式调用
  // wx.chooseImage().then(res => console.log('res: ', res))

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