Page({
  onShareAppMessage() {
    return {
      title: 'form',
      path: 'page/component/pages/form/form'
    }
  },

  data: {
    usercode: '',
    username: '',
    remark: ''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let val = wx.getStorageSync('localInfo');//获取登陆信息的缓存
    if(val){
      console.log(val)
      this.setData({
        usercode:val.usercode,
        username:val.username
      })
    }
  },
   /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
   
  },
  
  pickerConfirm(e) {
  },

  pickerCancel() {
   
  },

  pickerShow() {
    this.setData({
      pickerHidden: false
    })
  },

  formSubmit(e) {
    wx.navigateTo({
      url: '../stu/stuManaView?current=' + JSON.stringify(e.detail.value)
    })
    wx.setStorage({
      key:"localInfo",
      data:e.detail.value
    })
  }

})