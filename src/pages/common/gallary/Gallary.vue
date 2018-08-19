<template>
    <div class="container">
        <div class="wapper">
            <swiper>
                <swiper-slide :options="gallaryOption">
                    <img class="gallary-img" src="http://img1.qunarzz.com/sight/p0/1609/80/8092254b7f5f016ea3.water.jpg_600x330_45017f19.jpg">
                </swiper-slide>
                <swiper-slide >
                    <img class="gallary-img" src="http://img1.qunarzz.com/sight/p0/1803/1a/1aac2b1dd96b36ba3.water.jpg_r_800x800_545e2646.jpg">
                </swiper-slide>
                <swiper-slide >
                    <img class="gallary-img" src="http://img1.qunarzz.com/sight/p0/1803/b0/b0e8dff00c973855a3.water.jpg_r_800x800_ac9662e5.jpg">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommonGallary',
    data () {
        return {
            gallaryOption: {
                pagination: '.swiper-pagination',
                paginationType: 'fraction'
            }
        }
    }
}
</script>


<style lang="stylus" scoped>
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
        .wapper
            overflow: hidden
            height: 0
            width: 100%
            padding-bottom: 75%
            .gallary-img
                width: 100%
        .swiper-pagination
               color: #fff   
</style>
