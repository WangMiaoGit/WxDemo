// common/cources/item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String
    },
    idx:{
      type:Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    delItem(){
      console.log(this.data.idx);
      // 第一个参数  父类的  binddel  自定义名字后缀
      this.triggerEvent("del",{x:this.data.idx},{})
    }
  }
})
