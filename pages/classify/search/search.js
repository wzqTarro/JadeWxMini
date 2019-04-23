const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    CustomBar: app.globalData.CustomBar,
    searchText: "",
    historyList:["玉坠","手镯","观音"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  /**
   * 输入框输入时绑定数据
   */
  bindSearchText(e){
    this.setData({
      searchText: e.detail.value
    })
  },
  searchGood(){
    if (this.data.searchText !== ""){
      let historyList = this.data.historyList;
      // 头部添加
      historyList.unshift(this.data.searchText)
      this.setData({
        historyList: historyList
      })
    }
  },
  back(){
    wx.navigateBack()
  }
})