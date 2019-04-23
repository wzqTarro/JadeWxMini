Component({
  options:{
    addGlobalClass:true
  },
  methods:{
    goSearch() {
      getCurrentPages().pop()
      wx.navigateTo({
        url: '/pages/classify/search/search',
      })
    }
  }
})