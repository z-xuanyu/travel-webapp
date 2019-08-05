<template>
    <div class="header">
        <router-link to="/">
            <i class="iconfont icon-iconfontjiantou1"></i>
        </router-link>
        <h2>城市选择</h2>
    </div>
</template>
<script>
export default {
    name:"CityHeader"
}
</script>
<style lang="less" scoped>
    .header{
        height: .68rem;
        background-color: #00bcd4;
        display: flex;
        color: #fff;
        i{
            font-size: .36rem;
            color: #fff;
            line-height: .68rem;
            font-weight: 800;
            margin-left: .1rem;
        }
        h2{
            line-height: .68rem;
            width: 100%;
            text-align: center;
            font-size: .32rem;
        }
    }
</style>
