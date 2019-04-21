const app = getApp()
Component({
  options: {
    // 引用全局样式
    addGlobalClass: true
  },
  /**
     * 页面的初始数据
     */
  data: {
    // 商品信息
    good: {
      images: [],
      loadingCount: 0
    }
  },
  lifetimes: {
    attached() {
      // 每次页面展示都会触发
      this.loadImages()
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  methods: {
    loadImages: function () {
      let images = [
        {
          goodId: 0,
          name: '泊尔崖蜜蜜光面膜（5片盒装）还记得就会发觉哈弗集合时间撒放寒假胡椒粉撒环境',
          url: 'bill',
          imageurl: 'https://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/21/142/fb2960bf8e074d029c24315279289c19-5_218x274_70.jpg',
          newprice: "86",
          oldprice: "88",
          discount: "8.8",
          sellNum: 213,
          height: 0,
        },
        {
          goodId: 1,
          name: '透无瑕矿物养护两用粉饼#03',
          url: 'bill',
          imageurl: 'https://a.appsimg.com/upload/brand/upcb/2017/10/26/77/ias_150899004322921_604x290_80.jpg!75.webp',
          newprice: "147.00",
          oldprice: "150.00",
          discount: "8.8",
          sellNum: 213,
          height: 0,
        },
        {
          goodId: 2,
          name: '川水水光面膜（5片盒装）',
          url: 'bill',
          imageurl: 'https://a2.vimage1.com/upload/merchandise/pdcvis/2017/08/21/86/7891361fdab348a1bc91aeca31fc77b1-5_218x274_70.jpg',
          newprice: "86.00",
          oldprice: "88.00",
          discount: "8.8",
          sellNum: 213,
          height: 0,
        },
        {
          goodId: 3,
          name: '蜜三色渐变咬唇膏3.2g 03蜜橙动心恋',
          url: 'bill',
          imageurl: 'http://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/21/176/c3b9453a4d7f46c6a8fe78705f77352b-5_218x274_70.jpg',
          newprice: "97.00",
          oldprice: "99.00",
          discount: "8.8",
          sellNum: 213,
          height: 0,
        },
        {
          goodId: 4,
          name: '时焕颜亮采套装',
          url: 'bill',
          imageurl: 'https://a2.vimage1.com/upload/merchandise/pdcvis/2017/08/21/93/69a6bc1c11eb4be184b7dffb43b8565b-5_218x274_70.jpg',
          newprice: "398.00",
          oldprice: "459.00",
          discount: "8.8",
          sellNum: 213,
          height: 0,
        }
      ];
      let baseId = "img-" + (+new Date());

      for (let i = 0; i < images.length; i++) {
        images[i].id = baseId + "-" + i;
      }

      this.setData({
        good: {
          loadingCount: images.length,
          images: images
        }
      })
    }
  }


})