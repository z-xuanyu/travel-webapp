<template>
  <div class="nav-icons">
    <!--nav icon -->
    <div class="icons">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page,index) in pages" :key="index">
          <div class="icons">
            <div class="nav-icon" v-for="(item,index) in page" :key="index">
              <img :src="item.iconimg" />
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
  name: "HomeIcons",
  data() {
    return {
      swiperOption: {
        pagination:{
          el:'.swiper-pagination'
        }
      },
      icondatas:[
        {
          iconimg:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc:'景点门票'
        },
        {
          iconimg:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          desc:'广州必游'
        },
        {
          iconimg:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          desc:'动植物园'
        },
        {
          iconimg:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
          desc:'自然风光'
        },
        {
          iconimg:'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
          desc:'珠江夜游'
        },
        {
          iconimg:'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
          desc:'水上乐园'
        },
        {
          iconimg:'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
          desc:'亲子游'
        },
        {
          iconimg:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/184e261814a5d07a5d3d08cd29cf590d.png',
          desc:'长隆度假区'
        },
        {
          iconimg:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/c032ae43b15a3dac34b5e07bb0e46850.png',
          desc:'广州塔'
        },
        {
          iconimg:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/bda58ffc3016edad84e656e8a94b0321.png',
          desc:'广州融创'
        },
      ]
    }
  },
  computed:{
    pages(){
      let pages = []
      this.icondatas.forEach((item,index)=>{
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
