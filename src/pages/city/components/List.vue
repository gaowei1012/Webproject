<template>
    <div class="list" ref="wapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wapper">
                        <div class="button">
                            北京
                        </div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wapper">
                        <div class="button">
                            北京
                        </div>
                    </div>
                    <div class="button-wapper">
                        <div class="button">
                            北京
                        </div>
                    </div>
                    <div class="button-wapper">
                        <div class="button">
                            北京
                        </div>
                    </div>
                    <div class="button-wapper">
                        <div class="button">
                            北京
                        </div>
                    </div>
                    <div class="button-wapper">
                        <div class="button">
                            北京
                        </div>
                    </div>
                    <div class="button-wapper">
                        <div class="button">
                            北京
                        </div>
                    </div>
                    <div class="button-wapper">
                        <div class="button">
                            北京
                        </div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item">西安</div>
                    <div class="item">西安</div>
                    <div class="item">西安</div>
                    <div class="item">西安</div>
                    <div class="item">西安</div>
                    <div class="item">西安</div>
                    <div class="item">西安</div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item">西安</div>
                    <div class="item">西安</div>
                    <div class="item">西安</div>
                    <div class="item">西安</div>
                    <div class="item">西安</div>
                    <div class="item">西安</div>
                    <div class="item">西安</div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item">西安</div>
                    <div class="item">西安</div>
                    <div class="item">西安</div>
                    <div class="item">西安</div>
                    <div class="item">西安</div>
                    <div class="item">西安</div>
                    <div class="item">西安</div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item">西安</div>
                    <div class="item">西安</div>
                    <div class="item">西安</div>
                    <div class="item">西安</div>
                    <div class="item">西安</div>
                    <div class="item">西安</div>
                    <div class="item">西安</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'CityList',
    mounted () {
        this.scroll = new BScroll(this.$refs.wapper) // 页面滚动效果
    }
}
</script>


<style lang='stylus' scoped>
@import './../../../assets/styles/varibles.styl'
    .border-topbottom
        &:before
            border-color: #ccc
        &:after
            border-color: #ccc
    .list
        overflow: hidden
        position: absolute
        top: 1.58 rem
        left: 0
        right: 0
        bottom: 0
        .title
            line-height: .54rem
            background: #eee
            padding-left: .26rem
            color: #666 
        .button-list
            padding: .1rem .6rem .1rem .1rem
            overflow: hidden
            .button-wapper
                float: left
                margin-right: .19rem
                width: 30.33%
                .button
                    padding: .1rem
                    margin: .1rem 0
                    text-align: center
                    border: .02rem solid #ccc
                    border-radius: .06rem
        .item-list
            .item
                line-height: .76rem
                color: #666
                padding-left: .2rem
                border-bottom: .01rem solid #eee    

</style>

