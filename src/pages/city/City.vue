<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
        <alhabet-list></alhabet-list>
    </div>    
</template>

<script>
import CityHeader from './../city/components/Header'
import CitySearch from './../city/components/CitySearch'
import CityList from './../city/components/List'
import AlhabetList from './../city/components/Alphabet'

export default {
    name: 'City',
    components: {
        CityHeader,
        CitySearch,
        CityList,
        AlhabetList
    }
}
</script>


<style lang='stylus' scoped>

</style>

