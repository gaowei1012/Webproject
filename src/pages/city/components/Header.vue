<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <span class="iconfont city-back-icon">&#xe624;</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'CityHeader'
}
</script>


<style lang='stylus' scoped>
@import './../../../assets/styles/varibles.styl'
    .header
        position: relative
        overflow: hidden
        height: .86rem
        display: block
        line-height: .86rem
        text-align: center
        background: @bgColor
        font-size: .4rem
        color: #fff
        .city-back-icon
            position: absolute
            top: 0
            left: 0
            text-align: center
            font-size: .4rem
            margin-left: .1rem
            color: #fff
</style>

