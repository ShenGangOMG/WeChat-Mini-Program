Page({
  data: {
    background: [
'http://img1.imgtn.bdimg.com/it/u=3413804215,168722730&fm=26&gp=0.jpg', 'http://img1.imgtn.bdimg.com/it/u=3123455496,877084567&fm=26&gp=0.jpg', 'http://img5.imgtn.bdimg.com/it/u=1998869645,792844620&fm=26&gp=0.jpg',
'http://img4.imgtn.bdimg.com/it/u=3111434265,3164031581&fm=26&gp=0.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    // 九宫格菜单数据
    menus:[]
  },
  // 钩子函数-进入页面触发
  onLoad(){
wx.request({
  // 请求类型
  method:'GET',
  // 接口地址(为了安全考虑会存在合法域名校验)
  url:'https://locally.uieee.com/slides',
  // 参数
  data:{},
  // 请求头
  header:{},
  // 成功回调
  success(res){
    // console.log('请求成功:',res)
  },
  // 失败回调
  fail(err){
    // console.log('请求失败:',err)
  },
  // 请求完成回调
  complete(){
  //  console.log('请求已完成')
  }
}),
// 九宫格菜单
wx.request({
  // 请求类型
  method: 'GET',
  // 接口地址(为了安全考虑会存在合法域名校验)
  url: 'https://locally.uieee.com/categories',
  // 参数
  data: {},
  // 请求头
  header: {},
  // 成功回调(此处数据必须使用箭头函数,不绑定this的特性)
  success:(res) => {
    // console.log('九宫格数据成功:', res)
    this.setData({
      menus: res.data
    })
  },
  // 失败回调
  fail(err) {
    // console.log('九宫格数据失败:', err)
  },
  // 请求完成回调
  complete() {
    // console.log('九宫格数据已完成')
  }
})

  }
})