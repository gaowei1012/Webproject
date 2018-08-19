<template>
    <ul class="list">
        <li class="item"  
            v-for="item of letters"
            :key="item"
            :ref="item"
            @click="handleLetterClick"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
        >
                {{item}}
            </li>
    </ul>
</template>

<script>
export default {
    name: 'alhabetList',
    props: {
        cities: Object
    },
    computed: {
        letters () {
            const letters = []
            for (let i in this.cities) {
                letters.push(i)
            }
            return letters
        }
    },
    data () {
        return {
            touchStatus: false,
            startY: 0,
            timer: 0
        }
    },
    updated () {
        // 距离输入框下部底部的高度,对于性能优化有好处
        this.startY = this.$refs['A'][0].offsetTop 
    },
    methods: {
        handleLetterClick: function (e) {
            this.$emit('change', e.target.innerText) // 触发事件
        },
        handleTouchStart () {
            this.touchStatus = true
        },
        handleTouchMove (e) {
            if (this.touchStatus) {
                // 函数节流
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                    const touchY = e.touches[0].clientY -79 // 字母距离输入框底部的高度
                    const index = Math.floor((touchY - this.startY) / 20) // 每个字母的高
                    if (index >= 0 && index < this.letters.length) {
                        this.$emit('change', this.letters[index])
                    }
                }, 16)
            }
        },
        handleTouchEnd () {
            this.touchStatus = false
        }
    }
}
</script>

<style lang='stylus' scoped>
    .list
        display: flex
        flex-direction: column
        justify-content: center
        position: absolute
        top: 1.58rem
        right: 0
        bottom: 0
        width: .4rem
        .item
            line-height: .4rem
            text-align: center
            color: #00bcd4

</style>
