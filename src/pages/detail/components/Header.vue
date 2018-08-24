<template>
    <div>
        <router-link 
            tag="div"
            to="/"
            class="header-abs"
            v-show="showAbs"    
        >
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div 
            class="header-fixed"
            v-show="!showAbs"
            :style="opacityStyle"
        >
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
        </div>
    </div>
</template>


<script>
export default {
  neme: "DetailHeader",
  data () {
      return {
          showAbs: true,
          opacityStyle: {
              opactiy: 0
          }
      }
  },
  methods: {
      handleScroll () {
          // 滑动距离顶部的距离
          const top = document.documentElement.scrollTop
          console.log(top)
          if (top > 60) {
              let opacity = top / 140
              opacity = opacity > 1 ? 1 : opacity // opacity
              this.opacityStyle = {
                  opacity
              }
              this.showAbs = false
          } else {
              this.showAbs = true
          }
      }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }
};
</script>

<style lang='stylus' scoped>
    .header-abs
        position: absolute
        top: .2rem
        left: .2rem
        width: .8rem
        height: .8rem
        line-height: .8rem
        border-radius: .4rem
        text-align: center
        background: #000
        .header-abs-back
            color: #fff
            font-size: .4rem
    .header-fixed
        position: fixed
        top: 0
        left: 0
        right: 0
        height: .86rem
        line-height: .86rem
        text-align: center
        color: #fff
        background: #00bcd4
        font-size: .32rem
        .header-fixed-back
            position: absolute
            top: 0
            left: 0
            width: .64rem
            margin-left: .1rem
            color: #fff
</style>

