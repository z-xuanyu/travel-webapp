<template>
  <div class="swiper">
    <swiper :options="swiperOption" ref="mySwiper" v-if="isShow">
      <swiper-slide v-for="(item,index) in swiperList" :key="index">
          <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import { constants } from 'crypto';
export default {
  props:{
    swiperList:Array,
  },
  name: "HomeSwiper",
  data(){
      return{
          swiperOption:{
              pagination:{
                el:'.swiper-pagination'
              },
              observer:true,
              observeParents:true,
              loop:true,
              autoplay:true
          }
      }
  },
  computed:{
    swiper() {
        return this.$refs.mySwiper.swiper
      },
      isShow(){
        return this.swiperList.length > 0
      }
  }
};
</script>
<style lang="less" scoped>
    .swiper /deep/ .swiper-pagination-bullet-active{background-color: #fff;}
    .swiper{
        .swiper-container{
            height: 0;
            overflow: hidden;
            padding-bottom: 31.25%;
            .swiper-img{
                width: 100%;
            }
        }
    }
</style>
