<template>
  <div class="list" ref="wrapper">
    <div class="container">
      <div class="area">
        <div class="title">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <router-link tag="div" class="btn" to="/">广州</router-link>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="(item,index) in hot" :key="index">
            <router-link to="/" tag="div" class="btn">{{item.name}}</router-link>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
        <div class="title">{{key}}</div>
        <div class="item-list">
          <router-link to="/" tag="div" class="item" v-for="(innerItem,index) in item" :key="index">
              {{innerItem.name}}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import { constants } from 'crypto';
export default {
  name: "CityList",
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);   
  },
  watch:{
    letter () {
      const element = this.$refs[this.letter][0]   // 获取字母点击时滚轮到相对应字母区域节点
      this.scroll.scrollToElement(element)         //让滚轮滚到当前节点
    }
  }
};
</script>
<style lang="less" scoped>
.list {
  position: absolute;
  top: 1.45rem;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
  .title {
    margin: 0.2rem 0.3rem;
    font-size: 0.24rem;
  }
  .button-list {
    background-color: #fff;
    box-sizing: border-box;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    overflow: hidden;
    .button-wrapper {
      float: left;
      width: 33.3%;
      .btn {
        padding: 0.1rem 0;
        border: 0.02rem solid #ccc;
        text-align: center;
        border-radius: 0.06rem;
        margin: 0.1rem;
      }
    }
  }
  .item-list {
    background-color: #fff;
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;

      border-top: 1px solid #ddd;
    }
  }
}
</style>
