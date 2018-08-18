<template>
    <div class="wapper">
        <div class='recommend-title'>热销推荐</div>
        <ul>
            <li class="item" v-for="item of recommendList" :key="item.id">
                <img class="img-content" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button type="button" class="item-btn">查看详情</button>
                </div>
            </li>
        </ul>
    </div> 
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommendList: Array
  },
  data() {
    return {
      // recommendList: [
      //   {
      //     id: "001",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/p0/1505/a1/a1950d296c2d10ca.water.jpg_200x200_86b5ff02.jpg",
      //     title: "碧海金沙水上乐园",
      //     desc: "描述"
      //   },
      //   {
      //     id: "002",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/p0/1505/a1/a1950d296c2d10ca.water.jpg_200x200_86b5ff02.jpg",
      //     title: "碧海金沙水上乐园",
      //     desc: "描述"
      //   },
      //   {
      //     id: "003",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/p0/1505/a1/a1950d296c2d10ca.water.jpg_200x200_86b5ff02.jpg",
      //     title: "碧海金沙水上乐园",
      //     desc: "描述"
      //   },
      //   {
      //     id: "004",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/p0/1505/a1/a1950d296c2d10ca.water.jpg_200x200_86b5ff02.jpg",
      //     title: "碧海金沙水上乐园",
      //     desc: "描述"
      //   },
      //   {
      //     id: "005",
      //     imgUrl:
      //       "http://img1.qunarzz.com/sight/p0/1505/a1/a1950d296c2d10ca.water.jpg_200x200_86b5ff02.jpg",
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

.wapper {
    .recommend-title {
        line-height: 0.8rem;
        text-align: left
        background: #eee
        padding-left: 0.2rem
    }

    .item {
        overflow: hidden;
        display: flex;
        height: 1.9rem;
        border-bottom: .001rem solid #eee

        .img-content {
            width: 1.7rem;
            height: 1.7rem;
            padding: 0.1rem;
        }

        .item-info {
            flex: 1;
            padding: 0.1rem;
            min-width: 0;

            .item-title {
                line-height: 0.54rem;
                font-size: 0.32rem;
                ellipsis();
            }

            .item-desc {
                line-height: 0.4rem;
                color: #ccc;
                ellipsis();
            }

            .item-btn {
                line-height: 0.44rem;
                margin-top: 0.16rem;
                background: #ff9300;
                padding: 0 0.2rem;
                border-radius: 0.06rem;
                color: #fff;
            }
        }
    }
}
</style>