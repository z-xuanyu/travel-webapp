<template>
  <div class="nav-icons">
    <!--nav icon -->
    <div class="icons">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page,index) in pages" :key="index">
          <div class="icons">
            <div class="nav-icon" v-for="(item,index) in page" :key="index">
              <img :src="item.imgUrl" />
              <span>{{item.desc}}</span>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- 定位 -->
    <div class="hot-icon">
      <div class="hot-icon-left">
        <i class="iconfont icon-location"></i>
        <span>定位失败</span>
      </div>
      <div class="hot-icon-right">
        <i class="iconfont icon-wangluo"></i>
        <span>必游榜单</span>
      </div>
    </div>
  </div>
</template>
<script>
import { parse } from 'path';
export default {
  props:{
    iconList: Array,
  },
  name: "HomeIcons",
  data() {
    return {
      swiperOption: {
        pagination:{
          el:'.swiper-pagination'
        },
        observer:true,
        observeParents:true,
      }
    }
  },
  computed:{
    //把iconList数据拆分成二维数组
    pages(){
      let pages = []
      this.iconList.forEach((item,index)=>{
        const page = Math.floor(index / 8)
        if(!pages[page]){
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
};
</script>
<style lang="less" scoped>
.icons {
  height: 3.7rem;
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  .nav-icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 50%;
    img {
      width: 1.1rem;
      height: 1.1rem;
      margin-bottom: .1rem;
    }
  }
}
.hot-icon{
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ddd;
  background-color: #fff;
  
  .hot-icon-left,.hot-icon-right{
    height: .98rem;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }
  .hot-icon-left{
    border-right: 1px solid #ddd;
  }
}
</style>
