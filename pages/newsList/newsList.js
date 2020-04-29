// pages/newsList/newsList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topBars: [
      { id:1, name:"关注" },
      { id:2, name:"推荐" },
      { id:3, name:"直播" },
      { id:4, name:"影视" },
      { id:5, name:"新闻" }],
    selectBar: 1,
    newsList:[{
      //后台传递的数据
      "id":1,
      "userName":"Max",
      "headUrl":"/resource/images/photo.png",
      "isFocus":true,
      "newsTitle":"只争朝夕 不负韶华",
      "isVideo":true,
      "videoUrl":"https://stream7.iqilu.com/10339/upload_transcode/202002/18/20200218114723HDu3hhxqIT.mp4",
      "newsText":"",
      "newsAbstrcak":null,
      "imageUrls":null,
      "isOriginal":true,
      "createTime":"2020-03-05T15:55:00"
    },
    {
      "id":2,
      "userName":"Max",
      "headUrl":"/resource/images/photo.png",
      "isFocus":false,
      "newsTitle":"特朗普：希望中国购买美国生产的喷气发动机",
      "isVideo":false,
      "videoUrl":null,
      "newsText":"<p><span>【特朗普：希望中国购买美国生产的喷气发动机】</p></span>",
      "newsAbstrcak":"【特朗普：希望中国购买美国生产的喷气发动机】",
      "imageUrls":"/resource/images/photo.png",
      // "imageUrls":null,
      "isOriginal":true,
      "createTime":"2020-03-05T15:55:00"
    }]
  },


  clickType(param){
    this.setData({
      selectBar:param.currentTarget.dataset.id
    })
  },

  getNewsList(){
    var that = this;
    wx.request({
      url: 'url',
      success(res){
        var newslsit = res.data;
        that.setData({
          newsList:newsList
        })
        console.log(newslsit)
      }
      //success 是个属性:方法
      // success:res=>{
      //   var newslsit = res.data;
      //   this.setData({
      //     newsList:newsList
      //   })
      //   console.log(newslsit)
      // }
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