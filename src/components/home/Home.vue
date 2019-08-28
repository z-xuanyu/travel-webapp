<template>
    <div class="home">
        <home-header></home-header>
        <home-swiper :swiperList='swiperList'></home-swiper>
        <home-icons :iconList='iconList'></home-icons>
        <home-popular :recommendList='recommendList'></home-popular>
        <home-like :weekendList='weekendList'></home-like>
        <home-weekend :weekendData='weekendData'></home-weekend>
        <home-footer></home-footer>
    </div>
</template>
<script>
import HomeHeader from './base/Header'
import HomeSwiper from './base/Swiper'
import HomeIcons from './base/Icons'
import HomePopular from './base/Popular'
import HomeLike from './base/Like'
import HomeWeekend from './base/Weekend'
import HomeFooter from './base/Footer'
export default {
    name:'Home',
    data(){
        return {
            swiperList:[],
            iconList:[],
            recommendList:[],
            weekendList:[],
            weekendData:[]
        }
    },
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomePopular,
        HomeLike,
        HomeWeekend,
        HomeFooter
    },
    methods:{
        getIndexInfo(){
            this.$axios.get('/mock/index.json').then((result)=>{
                const swiperList = result.data.data.swiperList
                const iconList = result.data.data.iconList
                const recommendList = result.data.data.recommendList
                const weekendList = result.data.data.weekendList
                const weekendData = result.data.data.weekendData
                this.swiperList = swiperList
                this.recommendList = recommendList
                this.weekendList = weekendList
                this.iconList = iconList
                this.weekendData = weekendData
            })
        }
    },
    mounted(){
        this.getIndexInfo()
    }
}
</script>
<style lang="less">
    
</style>