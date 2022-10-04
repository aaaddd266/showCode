// pages/stu/stuManaView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    usercode:'',
    username:'',
    operation:'',
    currentDateL:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let data = JSON.parse(options.current)
    this.setData({
      usercode:data.usercode,
      username:data.username,
      operation:data.operation,
      currentDate:''
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    let yy = new Date().getFullYear()
    let mm = new Date().getMonth()+1<10?'0'+(new Date().getMonth()+1):new Date().getMonth()+1
    let dd = new Date().getDate()<10? '0'+(new Date().getDate()): new Date().getDate()
    let hh = new Date().getHours()
    let mf = new Date().getMinutes()<10?'0'+new Date().getMinutes():
    new Date().getMinutes()
    let ss = new Date().getSeconds()<10?'0'+new Date().getSeconds():
    new Date().getSeconds()
    this.currentDate = `${yy}-${mm}-${dd} ${hh}:${mf}:${ss}`;
    this.setData({
      usercode:this.usercode,
      username:this.username,
      operation:this.operation,
      currentDate:this.currentDate
   })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})