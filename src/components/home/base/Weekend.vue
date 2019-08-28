<template>
    <div class="weekend">
        <div class="weekend-title">
            周末去哪儿
        </div>
        <ul class="weekend-list">
            <li class="weekend-item" v-for="(item,index) in weekendData" :key="index">
                <div class="item-img">
                    <img :src="item.imgUrl" />
                </div>
                <div class="item-info">
                    <div class="info-title">
                        {{item.title}}
                    </div>
                    <div class="info-desc">
                        {{item.desc}}
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    namae:'HomeWeekend',
    props:{
        weekendData:Array
    }
}
</script>
<style lang="less" scoped>
    .weekend{
        .weekend-title{
            height: .8rem;
            line-height: .8rem;
            padding-left: .26rem;
            color: #212121;
        }
        .weekend-list{
            margin-bottom: .1rem;
            background-color: #fff;
            .weekend-item{
                .item-img{
                    overflow: hidden;
                    height: 0;
                    padding-bottom: 37.4375%;
                    img{
                        width:100%;
                    }
                }
                .item-info{
                    padding: .14rem .2rem .2rem .2rem;
                    .info-title{
                        padding-right: 1.4rem;
                        color: #212121;
                        font-size: .28rem;
                        line-height: .48rem;
                        white-space: nowrap;
                        text-overflow:ellipsis;
                        overflow: hidden;
                    }
                    .info-desc{
                        padding-right: 1.4rem;
                        color: #616161;
                        overflow: hidden;
                        white-space:nowrap;
                        text-overflow:ellipsis;
                        font-size: .24rem;
                        line-height: .42rem;
                    }
                }
            }
        }
    }
</style>
