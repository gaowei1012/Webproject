<template>
    <div class="earch">
       <input class="earch-input" type="text" placeholder="请输入城市名或拼音">
    </div>
</template>

<script>
export default {
    name: 'CitySearch'
}
</script>


<style lang='stylus' scoped>
@import './../../../assets/styles/varibles.styl'
    .earch
        height: .72rem
        padding: 0 .1rem
        background: $bgColor
        .earch-input
            box-sizing: border-box
            width: 100%
            height: .62rem
            padding: 0 .1rem
            line-height: .62rem
            border-radius: .06rem
            text-align: center

</style>

