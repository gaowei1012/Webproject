<template>
    <div class="wapper">
        <swiper :options="swiperOption">
        <swiper-slide v-for="item of swiperList" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                loop: true
            },
            swiperList: [
                {
                    id: '001',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1807/e7/d70d0830a9941b02.jpg_750x200_f8c7d2ad.jpg'
                },
                {
                    id: '002',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1808/66/55bc874f100c2d02.jpg_750x200_ac7c05d2.jpg'
                },
                {
                    id: '003',
                    imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/ae/2f9a9f0bbc30e102.jpg_750x200_75b6a866.jpg'
                }
            ]
        }
    }
}
</script>

<style lang="stylus" scoped>
    .wapper >>> .swiper-pagination-bullet-active 
        background: #fff
    .wapper
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 27.5% 
        .swiper-img 
            width: 100%

</style>
