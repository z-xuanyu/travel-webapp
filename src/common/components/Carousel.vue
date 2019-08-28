<template>
    <div class="carousel" @click="change">
        <div class="carousel-img">
            <swiper :options="swiperOption">
                <swiper-slide>
                    <img src="http://mp-commentcp.qunarzz.com/mp_comment_mp_comment/1559762321457100815000000xbjkvD26E_D_640_10000.jpg">
                </swiper-slide>
                <swiper-slide>
                    <img src="http://mp-commentcp.qunarzz.com/mp_comment_mp_comment/1559762321763100615000000xbyy3D992_D_640_10000.jpg">
                </swiper-slide>
                <swiper-slide>
                    <img src="http://mp-commentcp.qunarzz.com/mp_comment_mp_comment/1559762321888100h15000000xcx5lD843_D_640_10000.jpg">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
import { type } from 'os';
export default {
    name:'Carousel',
    props:{
        carouselData:Array,
    },
    data(){
        return{
            swiperOption:{
                pagination:{
                el:'.swiper-pagination', 
                type: 'fraction',              
              },
              
              observer:true,
              observeParents:true,
            }
        }
    },
    methods:{
       change(){
           this.$emit('change')
       }
    }
}
</script>
<style lang="less" scoped>
    .carousel{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
        background-color: #000;
        .carousel-img{
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            transform: translateY(-50%);
            .swiper-container{
                width: 100%;
                height: 0;
                padding-bottom: 100%;
                img{
                    width: 100%;
                }
            }
        }
        .swiper-pagination{
            position: fixed;
            color: #fff;
            bottom: -2rem;
            right: 0;
            left: 0;
        }
    }
</style>
