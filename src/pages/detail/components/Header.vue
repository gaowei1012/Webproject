<template>
    <div>
        <router-link tag="div" to="/" class="header-abs">
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div class="header-flexd"></div>
    </div>
</template>


<script>
export default {
  neme: "DetailHeader"
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

</style>

