<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hot="hotCities"></city-list>
        <alhabet-list :cities="cities"></alhabet-list>
    </div>    
</template>

<script>
import CityHeader from './../city/components/Header'
import CitySearch from './../city/components/CitySearch'
import CityList from './../city/components/List'
import AlhabetList from './../city/components/Alphabet'
import axios from 'axios'

export default {
    name: 'City',
    components: {
        CityHeader,
        CitySearch,
        CityList,
        AlhabetList
    },
    data () {
        return {
            cities: {},
            hotCities: []
        }
    },
    methods: {
        getCityInfo () {
            axios.get('/api/city.json')
                .then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc (res) {
            res = res.data;
            if (res.ret && res.data) {
                this.cities = res.data.cities
                this.hotCities = res.data.hotCities
            }   
        }    
    },
    mounted () {
        this.getCityInfo()
    }
}
</script>


<style lang='stylus' scoped>

</style>

