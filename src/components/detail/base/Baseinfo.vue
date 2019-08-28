<template>
    <div class="baseinfo">
        <div class="info-card">
            <div class="info-card-left">
                <div class="card-praise">
                    <span class="score">5.0</span>
                    <span class="fraction">分</span>
                    <span class="praise">超赞</span>
                </div>
                <div class="card-comment">
                    <span class="num-comment">116288条评论</span>
                    <span class="raiders">27条攻略</span>
                </div>
                <div class="card-left-icon">
                    <i class="iconfont icon-youjiantou"></i>
                </div>
            </div>
            <div class="info-card-right">
                <div class="viewpoint-info">
                    景点简介
                </div>
                <div class="open-time">
                    开放时间、贴士
                </div>
                <div class="card-right-icon">
                    <i class="iconfont icon-youjiantou"></i>
                </div>
            </div>
        </div>
        <div class="info-address">
            <i class="iconfont icon-location"></i>
            <div class="address">
                广东省广州市番禺区迎宾路长隆旅游度假村旁
            </div>
            <i class="iconfont icon-youjiantou"></i>
        </div>
    </div>
</template>
<script>
export default {
    name:'DetailBaseinfo'
}
</script>
<style lang="less" scoped>
    .baseinfo{
        position: relative;
        top: -.1rem;
        padding: .1rem .2rem 0 .2rem;
        margin-bottom: .1rem;
        background-color: #fff;
        border-radius: .12rem .12rem 0 0;
        .info-card{
            display: flex;
            padding-top: .1rem;
            padding-bottom: .2rem;
            .info-card-left{
                position: relative;
                border-right: 1px solid #ddd;
                width: 50%;
                .card-praise{
                    .score{
                        font-size: .44rem;
                        color: #ff8300;
                        line-height: .44rem;
                    }
                    .fraction{
                        color: #ff8300;
                    }
                    .praise{
                        margin-left: .2rem;
                        font-size: .28rem;
                        color: #ff8300;
                        line-height: .48rem;
                    }
                }
                .card-comment{
                    .num-comment,.raiders{
                        font-size: .24rem;
                        line-height: .32rem;
                        margin-right: .2rem;
                        color: #9e9e9e;
                    }
                }
                .card-left-icon{
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    right: 0;
                    color: #9e9e9e;
                    i{
                        font-size: .48rem;
                    }
                }
            }
            .info-card-right{
                padding-left: .3rem;
                position: relative;
                width: 50%;
                .viewpoint-info{
                    color: #212121;
                    line-height: .48rem;
                    font-size: .28rem;
                }
                .open-time{
                    color: #9e9e9e;
                    font-size: .24rem;
                }
                .card-right-icon{
                    position: absolute;
                    top: 50%;
                    right: 0;
                    transform: translateY(-50%);
                    color: #9e9e9e;
                    i{
                        font-size: .48rem;
                    }
                }
            }
        }
        .info-address{
            padding: .2rem 0;
            line-height: .36rem;
            color: #212121;
            border-top: 1px solid #f0f0ef;
            display: flex;
            .address{
                flex: 1;
                margin-left: .2rem;
            }
            i{
                &:first-child{
                    font-size: .28rem;
                }
                font-size: .48rem;
                color: #9e9e9e;
            }
        }
    }
</style>
