<template>
    <div class="popular">
        <div class="popular-title">
            <div class="popular-title-left">
                <i class="iconfont icon-huo"></i>
                <span>本周热门榜单</span>
            </div>
            <div class="popular-title-right">
                <span>全部榜单</span>
                <i class="iconfont icon-youjiantou"></i>
            </div>
        </div>
        <ul class="popular-lists">
            <li class="popular-item" v-for="(item,index) in recommendList" :key="index">
                <a href="#">
                    <div class="item-img">
                        <img :src="item.imgUrl">
                    </div>
                    <div class="item-desc">{{item.title}}</div>
                    <div class="item-price">
                        <span>¥<em>266</em></span>
                        起
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        recommendList:Array
    },
    name:'HomePopular',
}
</script>
<style lang="less" scoped>
    .popular{
        margin-top: .2rem;
        background-color: #fff;
        .popular-title{
            display: flex;
            justify-content: space-between;
            padding: .24rem .1rem .26rem;
            .popular-title-left{
                i{
                    font-size: .3rem;
                    color: #f60;
                }
            }
        }
        .popular-lists{
            padding: 0 .24rem;
            overflow-x: scroll;
            white-space: nowrap;
            display: flex;
            .popular-item{
                width: 2rem;
                padding: .06rem 0 .2rem;
                margin-right: .1rem;
                .item-img{
                    overflow: hidden;
                    width: 2rem;
                    height: 0;
                    padding-bottom: 100%;
                    img{
                        width: 100%;
                    }
                }
                .item-desc{
                    margin-top: .12rem;
                    color: #212121;
                    font-size: .24rem;
                    text-align: center;
                    line-height: .36rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                .item-price{
                    color: #616161;
                    font-size: .24rem;
                    text-align: center;
                    line-height: .36rem;
                    span{
                        color: #ff8300;
                    }
                }
            }
        }
    }
</style>
