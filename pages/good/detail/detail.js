const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    backTop: app.globalData.Custom.top,
    backLeft: app.globalData.windowWidth - app.globalData.Custom.right,
    imageHeight:0,
    good: {
      name:"商品名称",
      sizeUnit:"长*宽*高",
      preferential: false,
      ingetral: 10,
      descList: [{
          'name': "参数",
          'value': "尺寸 重量..."
        },{
          'name': "服务",
          'value': "支持七天无理由退货"
        }],
      param:[{
          name: "种类",
          text: "和田碧玉"
        }, {
          name: "款式",
          text: "玉坠"
        },{
          name: "尺寸",
          text: "1cm*2cm*1cm"
        }, {
          name: "重量",
          text: "30g"
        }],
      serve:[{
          name:""
        }],
      newprice:133,
      oldprice:180,
      sellNum:1000,
      stockNum:1
    },
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
    }, {
      id: 1,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }, {
      id: 3,
      type: 'video',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
    }],
    tempDetailList: [{
      id: 0,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
    }, {
      id: 1,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }, {
      id: 3,
      type: 'video',
      url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
    }],
    detailList:[],
    detailCount: 0,
    modalName: "",// 模态框名称
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      detailCount: this.data.detailList.length,
      imageHeight: app.globalData.windowWidth - 30 + "px"
    })
    this.towerSwiper('swiperList');
  },
  onImageLoad(e) {
    let imageId = e.currentTarget.id
    let currentGoodWidth = e.detail.width
    let currentGoodHeight = e.detail.height
    let width = app.globalData.windowWidth
    let scale = width / currentGoodWidth
    let height = currentGoodHeight * scale

    let images = this.data.tempDetailList 
    let imageObj = null
    for(let i = 0; i < images.length; i++) {
      let image = images[i]
      if (image.id == imageId) {
        imageObj = image
        break
      }
    }

    imageObj.height = height
    let detailList = this.data.detailList
    detailList.push(imageObj)
    let detailCount = this.data.detailCount - 1

    let data = {
      detailCount: detailCount,
      detailList: detailList
    }
    if (detailCount == 0) {
      data.tempDetailList = []
    }
    this.setData(data)
  },
  // 返回上一页
  goBack() {
    wx.navigateBack({
      delta: 1
    })
  },
  //显示底部模态框
  showModal(e) {
    let name = this.data.modalName
    if (name == e.currentTarget.dataset.cur) {
      name = ''
    } else {
      name = e.currentTarget.dataset.cur
    }
    this.setData({
      modalName: name
    })
  },
  hideModal() {
    this.setData({
      modalName: ""
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  }
})