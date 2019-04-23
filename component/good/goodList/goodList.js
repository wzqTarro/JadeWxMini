const app = getApp()
Component({
  properties:{
    loadingCount:{
      type:Number,
      value:0
    },
    images: {
      type:Array
    } // 全部商品
  },
  /**
   * 页面的初始数据
   */
  data: {
    goodWidth:0,
    goodHeight:app.globalData.windowHeight,
    leftCol:[],//左侧列商品
    rightCol:[]//右侧列商品
  },
  lifetimes:{
    attached(){
      // 页面被展示时调用
      this.setData({
        goodWidth: app.globalData.windowWidth * 0.48
      })
    }
  },
  pageLifetimes: {
    // 页面初次展示时调用
    show() {
      
    }
  },
  methods: {
    onImageLoad: function(e) {
      let imageId = e.currentTarget.id; // 当前图片ID
      let oImageWidth = e.detail.width; // 图片原始宽度
      let oImageHeight = e.detail.height; // 图片原始高度
      let width = this.data.goodWidth; // 图片设置宽度
      let scale = width / oImageWidth; // 比例计算
      let height = width; // 设置宽度

      let images = this.data.images
      let imageObj = null;

      for (let i = 0; i < images.length; i++) {
        let img = images[i];
        if (img.id === imageId) {
          imageObj = img;
          break;
        }
      }
      imageObj.height = height

      let leftCol = this.data.leftCol
      let rightCol = this.data.rightCol
      //如果左边列表少就填充右边列表
      if (leftCol.length > rightCol.length) {
        rightCol.push(imageObj)
      } else {
        leftCol.push(imageObj)
      }
      //leftCol.push(imageObj)
      let loadingCount = this.data.loadingCount - 1
      let data = {
        loadindCount: loadingCount,
        leftCol: leftCol,
        rightCol: rightCol
      }
      if (!loadingCount) {
        data.images = []
      }

      this.setData(data)
    },
    goDetail(){
      wx.navigateTo({
        url: '/pages/good/detail/detail',
      })
    }
  }
})