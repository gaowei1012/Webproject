<template>
    <div>
        <div class="earch">
            <input class="earch-input" v-model="keyword" type="text" placeholder="请输入城市名或拼音">
        </div>
        <div class="search-content" 
            v-show="keyword" 
            ref="search"
        >
            <ul>
                <li 
                    class="search-item" 
                    v-for="item of list" 
                    :key="item.id"
                    @click="handleCityClick(item.name)"
                >
                    {{item.name}}
                </li>
                <li class="search-item" 
                    v-show="hasNotData"
                >没有找到匹配项</li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'CitySearch',
    props: {
        cities: Object
    },
    data () {
        return {
            keyword: '',
            list: [],
            timer: null
        }
    },
    methods: {
        handleCityClick (city) {
            this.$store.commit('changeCity', city)
            this.$router.push('/') // 跳转到首页
        }
    },
    computed: {
        hasNotData () {
            return !this.list.length
        }
    },
    watch: {
        keyword () {
            // 函数节流
            if (this.timer) {
                clearTimeout(this.timer)
            }
            if (!this.keyword) {
                this.list = []
                return
            }
            // 当timer不存在时
            this.timer = setTimeout(() => {
                const result = []
                for (let i in this.cities) { // 拿到数据
                    this.cities[i].forEach((value) => { 
                        // 截取关键词
                        if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                            result.push(value)
                        }
                    })
                }
                this.list = result
            }, 100)
        }
    },
    mounted () {
        this.scroll = new BScroll(this.$refs.search)
    }
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
    .search-content
        z-index: 1
        overflow: hidden
        position: absolute
        top: 1.58rem
        left: 0
        right: 0
        bottom: 0
        background: #eee
        .search-item
            background: #ffffff
            line-height: .62rem
            padding: .2rem
            color: #666666
            border-bottom: .006rem solid #eee


</style>

