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
            <li class="popular-item">
                <a href="#">
                    <div class="item img">
                        <img src="http://img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_250x250_30e841af.jpg" alt="">
                    </div>
                    <div class="item-desc">长隆野生动物世界</div>
                    <div class="item-price">
                        <span>¥<em>266</em></span>
                        起
                    </div>
                </a>
            </li>
            <li class="popular-item">
                <a href="#">
                    <div class="item img">
                        <img src="http://img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_250x250_30e841af.jpg" alt="">
                    </div>
                    <div class="item-desc">长隆野生动物世界</div>
                    <div class="item-price">
                        <span>¥<em>266</em></span>
                        起
                    </div>
                </a>
            </li>
            <li class="popular-item">
                <a href="#">
                    <div class="item img">
                        <img src="http://img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_250x250_30e841af.jpg" alt="">
                    </div>
                    <div class="item-desc">长隆野生动物世界</div>
                    <div class="item-price">
                        <span>¥<em>266</em></span>
                        起
                    </div>
                </a>
            </li>
            <li class="popular-item">
                <a href="#">
                    <div class="item img">
                        <img src="http://img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_250x250_30e841af.jpg" alt="">
                    </div>
                    <div class="item-desc">长隆野生动物世界</div>
                    <div class="item-price">
                        <span>¥<em>266</em></span>
                        起
                    </div>
                </a>
            </li>
            <li class="popular-item">
                <a href="#">
                    <div class="item img">
                        <img src="http://img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_250x250_30e841af.jpg" alt="">
                    </div>
                    <div class="item-desc">长隆野生动物世界</div>
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
                // border: 1px solid red;
                margin-right: .1rem;
                .item img{
                    width: 100%;
                    overflow: hidden;
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
