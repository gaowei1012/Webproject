<template>
    <div class="wapper-icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icons" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      IconsList: [
        {
          id: "001",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc: "热门景点"
        },
        {
          id: "002",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          desc: "一日游"
        },
        {
          id: "003",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          desc: "上海必玩"
        },
        {
          id: "004",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
          desc: "游乐场"
        },
        {
          id: "005",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png",
          desc: "夏日玩水"
        },
        {
          id: "006",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1805/57/1e29afd06f881102.png",
          desc: "普陀山"
        },
        {
          id: "007",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png",
          desc: "上海欢乐谷"
        },
        {
          id: "008",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/95/8d02011d149bdb02.png",
          desc: "汽车票"
        },
        {
          id: "009",
          imgUrl:
            "http://img1.qunarzz.com/piao/fusion/1804/95/8d02011d149bdb02.png",
          desc: "汽车票"
        }
      ],
      swiperOption: {
          loop: false
      }
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.IconsList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      });
      return pages
    }
  }
};
</script>

<style lang="stylus" scoped>
@import './../../../assets/styles/mixins.styl';
.wapper-icons {
    width: 100%;
    height: 0;
    margin-top: 0.1rem;
    padding-bottom: 50%;

    .icons {
        position: relative;
        overflow: hidden;
        float: left;
        width: 25%;
        padding-bottom: 25%;

        .icon-img {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0.44rem;
            box-sizing: border-box;

            .icon-img-content {
                display: block;
                margin: 0 auto;
                height: 100%;
            }
        }

        .icon-desc {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 0.44rem
            line-height: 0.44rem
            text-align: center
            color: #333
            ellipsis()
        }
    }
}
</style>
