<template>
    <div class="home">
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-popular></home-popular>
        <home-like></home-like>
    </div>
</template>
<script>
import HomeHeader from './base/Header'
import HomeSwiper from './base/Swiper'
import HomeIcons from './base/Icons'
import HomePopular from './base/Popular'
import HomeLike from './base/Like'
export default {
    name:'Home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomePopular,
        HomeLike
    }
}
</script>
<style lang="less">
    
</style>