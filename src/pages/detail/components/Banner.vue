<template>
    <div>
        <div class="banner">
            <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1609/80/8092254b7f5f016ea3.water.jpg_600x330_45017f19.jpg" alt="">
            <div class="banner-info">
                <div class="banner-title">大连与欧式讷河纱巾</div>
                <div class="banner-number">
                <span class="iconfont banner-icon">&#xe692;</span>7889</div>
            </div>
        </div>
       <common-gallary></common-gallary>
    </div>
</template>


<script>
import CommonGallary from './../../common/gallary/Gallary'
export default {
    name: 'Banner',
    components: {
        CommonGallary
    }
}
</script>

<style lang='stylus' scoped>
    .banner
        position: relative
        overflow: hidden
        height: 0
        padding-bottom: 55%
        .banner-img
            width: 100%
        .banner-info
            display: flex
            position: absolute
            left: 0
            right: 0
            bottom: 0
            line-height: .6rem
            color: #fff
            background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
            .banner-title
                flex: 1
                padding: 0 .2rem
            .banner-number
                padding: 0 .4rem
                margin-top: .1rem
                height: .4rem
                line-height: .4rem
                margin-right: .09rem
                border-radius: .6rem
                background: rgba(0, 0, 0, .6)
                .banner-icon
                    display: inline-block
                    color: #fff
                    padding-right: .1rem

</style>
