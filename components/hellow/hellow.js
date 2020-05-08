// common/hellow/hellow.js
Component({
  behaviors: [require("../my.behavior")],

  data: {
    num: 0
  },
  methods: {
    add() {
      var n = ++this.data.num;
      this.setData({
        num: n
      });
      //控制组件  修改子组件数据
      let node = this.getRelationNodes("world");
      node[0].setData({
        title:"从父节点组件修改子组件内的数据"
      });
      node[1].setData({
        title:"父节点修改第二个子节点组件的数据"
      })
      console.log(node)
      
    },

  },
  // 监听器 监听数据变化
  observers: {
    "num": function (value) {
      // value 就是  num改变后的数据
      console.log(value)
    },
    // 监听所有
    "**": function (value) {
      console.log(value)
    }
  },

  // 组件关系
  relations: {
   "world":{
     type:"child"
   }
  },

  // 实现开启多插槽
  options: {
    multipleSlots: true
  },
  created() {
    console.log("created")
  },
  attached() {
    console.log("attached")
  },
  ready() {
    console.log("ready")
  },
  pageLifetimes: {
    show() {
      console.log("show")
    }
  }
})
