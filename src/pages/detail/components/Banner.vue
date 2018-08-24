<template>
    <div>
        <div class="banner" @click="handleClickGallary">
            <img class="banner-img" :src="bannerImg" alt="">
            <div class="banner-info">
                <div class="banner-title">{{sightName}}</div>
                <div class="banner-number">
                <span class="iconfont banner-icon">&#xe692;</span>
                    {{this.bannerImg.length}}
                </div>
            </div>
        </div>
       <common-gallary 
            :imgs='gallaryImgs'
            v-show="showGallary"
            @close='handleGallaryClose'
        ></common-gallary>
    </div>
</template>


<script>
import CommonGallary from './../../common/gallary/Gallary'
export default {
    name: 'Banner',
    props: {
        sightName: String,
        bannerImg: String,
        gallaryImgs: Array
    },
    components: {
        CommonGallary
    },
    data () {
        return {
            imgs: [
                'https://imgs.qunarzz.com/piao/fusion/1801/67/22e3d30fd0e29f02.jpg',
                'https://imgs.qunarzz.com/piao/fusion/1801/d8/78e5faab6122c902.jpg'
            ],
            showGallary: false
        }
    },
    methods: {
        handleClickGallary () {
            this.showGallary = true
        },
        handleGallaryClose () {
            this.showGallary = false
        }

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
