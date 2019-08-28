<template>
    <div class="detail">
        <detail-header></detail-header>
        <fade>
            <carousel v-show="isShow" @change='change' slot="carousel"></carousel>
        </fade>
        <detail-banner @handleCarousel='handleCarousel'></detail-banner>
        <detail-baseinfo></detail-baseinfo>
        <detail-recommend @changeOrderShow='changeOrderShow'></detail-recommend>
        <ticket></ticket>
        <ticket-order v-show="OrderShow" @handleOrderClose='handleOrderClose'></ticket-order>
    </div>
</template>
<script>
import DetailHeader from './base/Header'
import DetailBanner from './base/Banner'
import DetailBaseinfo from './base/Baseinfo'
import DetailRecommend from './base/Recommend'
import Carousel from '@/common/components/Carousel'
import Ticket from './base/Ticket'
import Fade from '@/common/components/Fade'
import TicketOrder from '@/common/components/TicketOrder'
export default {
    name:'Detail',
    data(){
        return{
            isShow:false,
            OrderShow:false,
        }
    },
    components:{
        DetailBanner,
        DetailBaseinfo,
        DetailRecommend,
        Carousel,
        Ticket,
        Fade,
        TicketOrder,
        DetailHeader
    },
    methods:{
        handleCarousel(){
            this.isShow = true
        },
        change(){
            this.isShow = false
        },
        changeOrderShow(){ //显示预订订单状态
            console.log('已经执行到这行了')
            this.OrderShow = true
        },
        handleOrderClose(){ //关闭预订订单状态
            this.OrderShow = false
        }
    }
}
</script>
<style lang="less" scoped>
    
</style>
