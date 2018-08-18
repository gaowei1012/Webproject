<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
    </div>    
</template>

<script>
import CityHeader from './../city/components/Header'
import CitySearch from './../city/components/CitySearch'
import CityList from './../city/components/List'

export default {
    name: 'City',
    components: {
        CityHeader,
        CitySearch,
        CityList
    }
}
</script>


<style lang='stylus' scoped>

</style>

