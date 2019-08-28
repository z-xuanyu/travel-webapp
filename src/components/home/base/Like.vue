<template>
    <div class="like">
        <div class="like-title">
            <div class="like-title-content">
                <i class="iconfont icon-aixin"></i>
                <span>猜你喜欢</span>
            </div>
        </div>
        <ul class="like-lists">
            <router-link to="/detail" tag="li" class="like-item" v-for="(item,index) in weekendList" :key="index">
                <a href="#">
                    <div class="like-item-img">
                        <img :src="item.imgUrl">
                        <div class="like-item-tag"></div>
                    </div>
                    <div class="like-item-info">
                        <div class="like-item-title">
                            {{item.title}}
                        </div>
                        <div class="like-item-comment">
                            <span class="star">
                                <i class="iconfont icon-star_full"></i>
                                <i class="iconfont icon-star_full"></i>
                                <i class="iconfont icon-star_full"></i>
                                <i class="iconfont icon-star_full"></i>
                                <i class="iconfont icon-star_full"></i>
                            </span>
                            <span class="comment">115482条评论</span>
                        </div>
                        <div class="like-item-price">
                            <div class="price">¥<em>266</em><i>起</i></div>
                            <span class="like-item-address">广州长隆...</span>
                        </div>
                        <div class="like-item-feature">
                            {{item.desc}}
                        </div>
                    </div>
                </a>
            </router-link>
            <a href="#" class="more-product">查看所有的产品</a>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        weekendList:Array
    },
    name:'HomeLike'
}
</script>
<style lang="less" scoped>
    .like{
        margin-top: .2rem;
        background-color: #fff;
        .like-title{
            padding: .24rem .2rem .26rem;
            i{
                color: #f60;
            }
            span{
                font-size: .32rem;
                margin-left: .08rem;
            }
        }
        .like-lists{
            margin-left: .24rem;
            .like-item{
                overflow: hidden;
                padding: .2rem 0;
                box-sizing: border-box;
                border-bottom: 1px solid #ddd;
                a{
                    width: 100%;
                    height: 100%;
                    display: flex;
                }
                .like-item-img{
                    img{
                        height: 2rem;
                        width: 2rem;
                    }
                }
                .like-item-info{
                    padding-left: .22rem;
                    overflow: hidden;
                    width: 100%;
                    .like-item-title{
                        margin-top: .26rem;
                        height: .44rem;
                        color: #212121;
                        font-size: .32rem;
                        line-height: .44rem;                        
                    }
                    .like-item-comment{
                        margin-top: .14rem;
                        height: .34rem;
                        .star{
                            height: .28rem;
                            i{
                                font-size: .28rem;
                                color: #ffb436;
                            }
                        }
                        .comment{
                            color: #616161;
                            font-size: .24rem;
                            margin-left: .2rem;
                        }
                    }
                    .like-item-price{
                        margin-top: .22rem;
                        line-height: .4rem;
                        color: #616161;
                        font-size: .24rem;
                        display: flex;
                        justify-content: space-between;
                        .price{
                            color: #ff8300;
                            i{
                                color: #616161;
                            }
                            em{
                                font-size: .4rem;
                            }
                        }
                        .like-item-address{
                            padding-right: .24rem;
                        }
                    }
                    .like-item-feature{
                        margin-top: .48rem;
                        color: #f55;
                        font-size: .24rem;
                        padding: .04rem .1rem;
                        margin-right: .24rem;
                        line-height: .34rem;
                        display: -webkit-box;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                }
            }
            .more-product{
                display: block;
                padding: .2rem 0;
                background-color: #fff;
                text-align: center;
                color: #00afc7;
                font-size: .28rem;
                line-height: .4rem;

            }
        }
    }
</style>
