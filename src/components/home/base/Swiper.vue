<template>
  <div class="swiper">
    <swiper :options="swiperOption" ref="mySwiper" v-if="isShow">
      <swiper-slide v-for="(item,index) in swiperdata" :key="index">
          <img class="swiper-img" :src="item.imgurl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
// import { constants } from 'crypto';
export default {
  name: "HomeSwiper",
  data(){
      return{
          swiperOption:{
              pagination:{
                el:'.swiper-pagination'
              },
              loop:true,
              autoplay:true
          },
          swiperdata:[
              {
                id:'001',
                imgurl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/818f6cc784ae6669b74bbbb255414a53.jpg_750x200_66ca5873.jpg'
              },
              {
                id:'002',
                imgurl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/ae8987bff39ff10e82675a3643154e66.jpg_750x200_0f187b2e.jpg'
              },
              {
                id:'003',
                imgurl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/d29ef69dc471bf49b4313e7132970cd7.jpg_750x200_df10a1da.jpg'
              },
          ],
      }
  },
  computed:{
    swiper() {
        return this.$refs.mySwiper.swiper
      },
      isShow(){
        return this.swiperdata.length > 0
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
            padding-bottom: 26.67%;
            .swiper-img{
                width: 100%;
            }
        }
    }
</style>
