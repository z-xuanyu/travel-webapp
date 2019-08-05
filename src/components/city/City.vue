<template>
    <div class="city">
        <city-header></city-header>
        <city-search :cities='cities'></city-search>
        <city-list :cities='cities' :hot='hotCities' :letter='letter'></city-list>
        <city-alphabet :cities='cities' @change='handleLetterChange'></city-alphabet>
    </div>
</template>
<script>
import CityHeader from './base/Header'
import CitySearch from './base/Search'
import CityList from './base/List'
import CityAlphabet from './base/Alphabet'
import axios from 'axios'
import { constants } from 'crypto';
export default {
    name:"City",
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data(){
        return {
            cities:{},
            hotCities:[],
            letter:''
        }
    },
    methods:{
        getCityInfo(){
            this.$axios.get('/mock/city.json').then((res)=>{
                res = res.data
                if(res.ret && res.data){
                    const data = res.data
                    this.cities = data.cities
                    this.hotCities = data.hotCities
                }
            })
        },
        handleLetterChange(letter){
            this.letter = letter
        }
    },
    mounted(){
        this.getCityInfo()
    }
}
</script>
<style lang="less" scoped>

</style>
