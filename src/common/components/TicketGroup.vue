<template>
    <div class="ticket-group">
        <!-- 购票组件标题部分 开始 -->
        <div class="ticket-group-title">
            <span></span>
            <h3>{{title}}</h3>
        </div>
        <!-- 购票组件标题部分 结束 -->
        <!-- 购票组件列表 开始 -->
        <ul class="ticket-list">
            <li v-for="(item,index) in ticketDataone" :key="item.id">
                <div class="ticket-list-item" @click="handleBuyShow(index)">
                    <div class="ticket-name">
                        <h5>{{item.title}}</h5>
                    </div>
                    <div class="ticket-price">
                        <div class="price">
                            <em>¥</em>
                            <span>{{item.price}}</span>
                            <em>起</em>
                        </div>
                        <i class="iconfont icon-jiantou8"></i>
                    </div>
                </div>
                <!-- 引入公共的购票列表组件 -->
                <div class="buy-ticket" v-show="item.BuyShow">
                    <fade>
                        <buy-list :buydata='buydata' slot="buydata" @changeOrderShow='changeOrderShow'></buy-list>
                    </fade>
                </div>
            </li>
            <!-- 更多产品隐藏部分 -->
            <li v-for="(item,index) in ticketDatatwo" :key="item.id" v-show="TicketShow">
                <div class="ticket-list-item" @click="handleBuyShow(index)">
                    <div class="ticket-name">
                        <h5>{{item.title}}</h5>
                    </div>
                    <div class="ticket-price">
                        <div class="price">
                            <em>¥</em>
                            <span>{{item.price}}</span>
                            <em>起</em>
                        </div>
                        <i class="iconfont icon-jiantou8"></i>
                    </div>
                </div>
                <!-- 引入公共的购票列表组件 -->
                <div class="buy-ticket" v-show="item.BuyShow">
                    <fade>
                        <buy-list :buydata='buydata' slot="buydata" @changeOrderShow='changeOrderShow'></buy-list>
                    </fade>
                </div>
            </li>
        </ul>
        <!-- 购票组件列表 结束 -->
        <div class="more" @click="handleTicketShow" v-show="moreShow">
            <span>查看剩余产品</span>
            <i class="iconfont icon-jiantou8"></i>
        </div>
        <!-- 预订下单组件 -->
        <ticket-order v-show="OrderShow" @handleOrderClose='handleOrderClose' ></ticket-order>
    </div>
</template>
<script>
import { constants } from 'crypto';
import BuyList from '@/common/components/BuyList'
import Fade from '@/common/components/Fade'
import TicketOrder from '@/common/components/TicketOrder'
import { filter } from 'minimatch';

export default {
    props:{
        title:String,
        buydata:Array,
        ticketList:Array
    },
    name:'TicketGroup',
    components:{
        BuyList,
        Fade,
        TicketOrder
    },
    data(){
        return{
            TicketShow:false, //剩余产品默认隐藏
            OrderShow:false,//预订下单默认隐藏
        }
    },
    methods: {
        handleTicketShow(){  //处理剩余产品组件的显示隐藏
            this.TicketShow = !this.TicketShow

        },
        handleBuyShow(index){  //处理预定票组件的显示与隐藏
            this.ticketList[index].BuyShow = !this.ticketList[index].BuyShow
        },
        changeOrderShow(){ //预订下单组件显示
            this.OrderShow = true
        },
        handleOrderClose(){ //接受预订下单传过来的事件改变预订下单组件的显示与隐藏
            this.OrderShow = false
        }
    },
    computed:{
        moreShow(){  //如果购票组件的列表项大于2就显示剩余产品，否则就不显示
            return this.ticketList.length > 2? true : false
        },
        ticketDataone(){
            return this.ticketList.filter((item,index)=>{
                return index <= 1
            })
        },
        ticketDatatwo(){
            return this.ticketList.filter((item,index)=>{
                return index > 1
            })
        }
    }
}
</script>
<style lang="less" scoped>
    .ticket-group{
        background-color: #fff;
        margin-bottom: .2rem;
        .ticket-group-title{
            display: flex;
            height: .88rem;
            color: #333;
            font-size: .32rem;
            line-height: .88rem;
            align-items: center;
            padding: 0 .2rem;
            span{
                display: inline-block;
                height: .36rem;
                width: .36rem;
                margin-right: .1rem;
                background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) no-repeat 0 -.45rem;
                background-size: .4rem 3rem;
            }
        }
        .ticket-list{
            .ticket-list-item{
                padding: .24rem .2rem;
                border-top: 1px solid #ddd;
                display: flex;
                justify-content: space-between;
                .ticket-name{
                    font-size: .3rem;
                }
                .ticket-price{
                    display: flex;
                    align-items: center;
                    .price{
                        color: #ff9800;
                        span{
                            font-size: .4rem;
                            margin-left: .04rem;
                        }
                        em{
                            &:last-child{
                                font-size: .24rem;
                                color: #9e9e9e;
                            }
                        }
                    }
                    i{
                        font-size: .24rem;
                        color: #9e9e9e;
                        margin-left: .02rem;
                    }
                }
            }
            .buy-ticket{
                padding: 0 .2rem;
                background-color: #f5f5f5;
            }
        }
        .more{
            height: .8rem;
            line-height: .8rem;
            border-top: 1px solid #ddd;
            display: flex;
            justify-content: center;
        }
    }
</style>
