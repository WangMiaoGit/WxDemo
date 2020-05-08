// common/cources/list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    listdata:[
      "vue",
      "mina"
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    delCource(e){
      //e.detail  监听子组件 传递过来的值
      console.log("删除了",e.detail)
      let id =e.detail
      this.data.listdata.splice(id,1);
      this.setData({
        listdata:this.data.listdata
      })
    }
  }
})
