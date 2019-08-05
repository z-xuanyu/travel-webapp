<template>
    <div class="header">
        <div class="header-left">
            <i class="iconfont icon-iconfontjiantou1"></i>
        </div>
        <div class="header-search">
            <i class="iconfont icon-sousuo"></i>
            <input type="text" placeholder="输入城市/景点/游玩主题">
        </div>
        <router-link tag="div" to="/city" class="header-right">
            <span>广州</span>
            <i class="iconfont icon-below-s"></i>
        </router-link>
    </div>
</template>
<script>
export default {
    name:'HomeHeader'
}
</script>]
<style lang="less" scoped>
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: .88rem;
        background-color: rgb(0,188,212);
        //返回
        .header-left{
            width: .4rem;
            color: #fff;
            line-height: .88rem;
            box-sizing: border-box;
            padding: 0 .2rem;
            i{
                font-size: .46rem;
            }
        }
        // 搜索框
        .header-search{
            flex: 1;
            height: .6rem;
            background-color: #fff;
            border-radius: .06rem;
            box-sizing: border-box;
            margin-left: .35rem;
            margin-right: .2rem;
            color: #e4e7ea;
            padding: .1rem .2rem;
            i{
                font-size: .36rem;
                vertical-align: middle;
            }
            input{
                vertical-align: middle;
                color: #999;
                margin-left: .2rem;
                border: none;
            }
        }
        //城市
        .header-right{
            color: #fff;
            margin-right: .2rem;
        }
    }
</style>