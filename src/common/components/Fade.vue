<template>
    <div>
        <transition name="carousel">
            <slot name="carousel"></slot>
        </transition>
        <transition name='buydata'>
            <slot name="buydata"></slot>
        </transition>
    </div>
</template>
<script>
export default {
    name:'Fade'
}
</script>
<style lang="less" scoped>
    .carousel-enter,.carousel-leave-to{
        opacity: 0;
    }
    .carousel-enter-active,.carousel-leave-to{
        transition: opacity .5s;
    }
    .buydata-enter,.buydata-leave-to{
        opacity: 0;
    }
    .buydata-enter-active,.buydata-leave-to{
        transition: opacity 5s;
    }
</style>
