//index.js
Page({
  data: {
    inputVal:'',
    msgData:[
      // {msg:'xxxxx'},
      // {msg:'xxxxx'},
      // {msg:'xxxxx'}
    ]

  },
  changeInputVal(ev){  //这里和页面input输入框绑定了value值
    // console.log(ev)
    this.setData({
      inputVal:ev.detail.value
    })
  },
  addmsg(){
    // console.log(this.data.inputVal)  拿到输入框的值
    var list=this.data.msgData;
    list.push({
      msg:this.data.inputVal
    })
    this.setData({
      msgData:list,
      inputVal:''
    })
  },
  // 重点删的是谁
  delmsg(ev) {//dataset.index自定义属性的获取方法
    console.log(ev.target.dataset.index)
    var n = ev.target.dataset.index;
    var list=this.data.msgData;
    list.splice(n,1);

    this.setData({
      msgData:list
    })
  }
})
/**
 * wx.setStorage({
 *    key:'名字'，
 *    data：'值'
 * })
 * 获取 getStorage
 */