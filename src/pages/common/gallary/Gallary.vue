<template>
    <div class="container" @click="handleGallaryClose">
        <div class="wrapper">
            <swiper :options="SwiperOption">
                <swiper-slide 
                    v-for="(item, index) in imgs" 
                    :key="index"
                >
                    <img class="gallary-img" 
                        :src="item"
                    >
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonGallary',
    props: {
        imgs: {
            type: Array,
            default () {
                return [ ]
            }
        }
    },
    data () {
        return {
            SwiperOption: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction',
                autoplay: false, // 关闭自动切换
                observeParents: true, // 检测父级元素DOM结构是否发生变化
                observer: true
            }
        }
    },
    methods: {
        handleGallaryClose () {
            this.$emit('close') // 触发事件给上级
        }
    }
}
</script>


<style lang="stylus" scoped>
    .container >>> .swiper-pagination
        overflow: inherit
    .container
        display: flex
        flex-direction: column
        justify-content: center
        z-index: 99
        position: fixed
        left: 0
        right: 0
        top: 0
        bottom: 0
        background: #000
        .wrapper
            // overflow: hidden
            height: 0
            width: 100%
            padding-bottom: 100%
            .gallary-img
                width: 100%
        .swiper-pagination
            height: .2rem
            width: 100%
            color: #fff!important 
            bottom: -1rem
</style>
