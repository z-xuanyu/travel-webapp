<template>
    <div class="recomend-wrap">
        <div class="recommend">
            <div class="recommend-title">
                <div class="icon">
                    <i class="iconfont icon-aixin"></i>
                </div>
                <h3>旅游推荐</h3>
            </div>
            <buy-list :buydata='recommendList' @changeOrderShow='changeOrderShow'></buy-list>
        </div>
    </div>
</template>
<script>
import BuyList from '@/common/components/BuyList'
export default {
    name:'DetailRecommend',
    components:{
        BuyList,
    },
    data(){
        return{
            recommendList:[
                {
                    titleName:'北京欢乐谷（全天）门票学生票(中高考生专用)',
                    time:'17:00前随买随用',
                    price:'199',
                    tag:{ tag1:'随时退',tag2:'' ,tag3:''}
                },
                {
                    titleName:'七夕活动票北京欢乐谷全天双人票',
                    time:'18:00前随买随用',
                    price:'299',
                    tag:{ tag1:'自营',tag2:'无需换票',tag3:'条件退' }
                },
                {
                    titleName:'北京欢乐谷（全天）门票成人票(6.28-11.17)',
                    time:'16:30前随买随用',
                    price:'295',
                    tag:{ tag1:'随时退',tag2:'',tag3:'' }
                },
            ]
        }
    },
    methods:{
        changeOrderShow(){ //从BuyList组件传过来的事件
            this.$emit('changeOrderShow')
        }
    }
}
</script>
<style lang="less" scoped>
    .recommend{
        background-color: #fff;
        padding-left: .2rem;
        margin-bottom: .2rem;
        .recommend-title{
            padding: .2rem .2rem;
            display: flex;
            align-items: center;
            .icon{
                width: .4rem;
                height: .4rem;
                background-color: deeppink;
                border-radius: 50%;
                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: center;
                color: #fff;
                i{
                    font-size: .24rem;
                }
            }
            h3{
                margin-left: .2rem;
                font-size: .32rem;
                color: #333;
            }
        }
        .recommend-list{
            padding: 0rem .2rem 0 0;
            .recommend-list-item{
                border-top: 1px solid #ddd;
                padding-bottom: .2rem;
                display: flex;
                .recommend-list-left{
                    flex: 2.92;
                    h6{
                        margin-left: .1rem;
                        line-height: .52rem;
                        font-size: .3rem;
                    }
                    .time{
                        height: .32rem;
                        color: #616161;
                        font-size: .24rem;
                        line-height: .32rem;
                        display: flex;
                        align-items: center;
                        .time-icon{
                            height: .2rem;
                            width: .2rem;
                            border-radius: 50%;
                            background-color: #00bcd4;
                            overflow: hidden;
                            i{
                                font-size: .06rem;
                                color: #fff;
                            }
                        }
                    }
                    .tag{
                        margin-top: .08rem;
                        height: .32rem;
                        color: #00afc7;
                        font-size: .2rem;
                        line-height: .32rem;
                       
                        span{
                            border: 1px solid #a5e4ec;
                            border-radius: .06rem;
                            padding: 0 .04rem;
                            margin-right: .1rem;
                        }
                    }
                }
                .recommend-list-right{
                    flex: 1;
                    text-align: center;
                    padding-left: .2rem;
                    margin: auto;
                    .price{
                        color: #ff9800;
                        height: .4rem;
                        span{
                            line-height: .4rem;
                            font-size: .4rem;
                            margin-left: .04rem;
                        }
                    }
                    .destine{
                            height: .6rem;
                            color: #fff;
                            line-height: .6rem;
                            border-radius: .08rem;
                            background-image: linear-gradient(130deg,#ffab1e 37%,#ff8c12 100%);
                        }
                }
            }
        }
    }
</style>
