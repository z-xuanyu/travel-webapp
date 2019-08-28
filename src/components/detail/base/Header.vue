<template>
    <div class="header" v-show="showAbs" :style="opacityStyle"> 
        <h3>长隆野生动物世界</h3>
    </div>
</template>
<script>
export default {
    name:'DetailHeader',
    data() {
        return {
            showAbs:false,
            opacityStyle:{
                opacity:0
            }
        }
    },
    methods:{
        handleScroll(){
            const top = document.documentElement.scrollTop
            if (top > 60){
                let opacity = top / 200
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle = { opacity }
                this.showAbs = true
            }else{
                this.showAbs = false
            }
        }
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll)
    },
    unmounted(){
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>
<style scoped>
    .header{
        position: fixed;
        width: 100%;
        top: 0;
        right: 0;
        left: 0;
        background-color: #00bcd4;
        line-height: .88rem;
        color: #fff;
        z-index: 1;
    }
    h3{
        text-align: center;
        font-size: .32rem;
    }
</style>>