<template>
    <div>
        <div 
            class="item"    
            v-for="(item, index) of list"  
            :key="index"
        >
            <div class="list-title">
                <span class="list-title-icon">
                    {{item.title}}
                </span>
            </div>
            <!-- 组件的递归实现 -->
            <div class="item-children" v-if="item.children">
                <detail-list :list='item.children'></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailList',
    props: {
        list: Array
    }
}
</script>

<style lang='stylus' scoped>
    .item 
        margin-top: .3rem
    .list-title
        height: .8rem
        font-size: .32rem
        padding: .03rem .3rem
        .list-title-icon
            position: relative
            left: .06rem
            top: .06rem
            display: inline-block
            width: 100%
            height: .36rem
            background: url(https://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
            margin-right: .1rem
            background-size: .4rem 3rem
            padding-left: .6rem
    .item-children
        padding: 0 .2rem    


</style>


