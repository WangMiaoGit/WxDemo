// components/modal/modal.js
Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    isShowModal: { //是否显示整个modal框
      type: Boolean,
      value: false
    },
    isShowTitle: { // 是否显示标题
      type: Boolean,
      value: true
    },
    modalTitle: { // 标题内容
      type: String,
      value: "标题"
    },
    placeholder: { // input框提示文字
      type: String,
      value: "请输入提示文字"
    },
    showDesc: { // 备注文字
      type: String,
      value: ""
    },
    inputType: { // input框类型
      type: String,
      value: 'text'
    },
    isShowInput: { // 是否显示 input框
      type: Boolean,
      value: true
    },
    inputVal: {
      type: [String, Number],
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isfous: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindFous() {
      this.setData({
        isfous: true
      })
    },
    bindBlur() {
      this.setData({
        isfous: false
      })
    },
    _bindInput(e) {
      this.triggerEvent('customBindInput', e.detail.value)
    },
    cancle() {
      this.triggerEvent('cancle')
    },
    _confirm(e) {
      this.triggerEvent("confirm");
    }
  }
})
