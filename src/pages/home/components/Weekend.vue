<template>
    <div class="wapper">
        <div class='recommend-title'>周末去哪</div>
        <ul>
            <li class="item" v-for="item of weekendList" :key="item.id">
                <div class="item-img-wapper">
                    <img class="img-content" :src="item.imgUrl" alt="">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div> 
</template>

<script>
export default {
  name: "HomeWeekend",
  props: {
    weekendList: Array
  },
  data() {
    return {
      // recommendList: [
      //   {
      //     id: "001",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg",
      //     title: "碧海金沙水上乐园",
      //     desc: "描述"
      //   },
      //   {
      //     id: "002",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg",
      //     title: "碧海金沙水上乐园",
      //     desc: "描述"
      //   },
      //   {
      //     id: "003",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg",
      //     title: "碧海金沙水上乐园",
      //     desc: "描述"
      //   },
      //   {
      //     id: "004",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg",
      //     title: "碧海金沙水上乐园",
      //     desc: "描述"
      //   },
      //   {
      //     id: "005",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg",
      //     title: "碧海金沙水上乐园",
      //     desc: "描述"
      //   }
      // ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import './../../../assets/styles/mixins.styl';
 
    .recommend-title 
        line-height: 0.8rem
        text-align: left
        background: #eee
        padding-left: .2rem
    .item-img-wapper
        overflow: hidden
        height: 0
        padding-bottom: 33.9%
        .img-content 
            width: 100%
    .item-info 
        padding: 0.1rem
        .item-title 
            line-height: 0.54rem
            font-size: 0.32rem
            ellipsis()
        .item-desc 
            line-height: 0.4rem
            color: #ccc
            ellipsis()
</style>