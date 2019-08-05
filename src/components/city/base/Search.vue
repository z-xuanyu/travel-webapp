<template>
  <div>
    <div class="search">
      <input class="search-input" v-model="keyword" type="text" placeholder="输入城市名或者拼音" />
    </div>
    <div class="search-keyword" ref="keyword" v-show="keyword">
      <ul>
        <li class="item" v-for="(item,index) in list" :key="index">{{item.name}}</li>
        <li class="item" v-show="hasNoData">
            没有匹配到相关的数据
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { setTimeout } from "timers";
import { constants } from "crypto";
import BScroll from "better-scroll";
export default {
  name: "CitySearch",
  props:{
    cities:Object
  },
  data(){
      return {
          keyword:'',
          timer:null,
          list:[]
      }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.keyword);
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if(!this.list){
          this.list = []
          return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let key in this.cities) {
          this.cities[key].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          })
        }
        this.list = result;
      }, 100);
    }
  },
  computed:{
      hasNoData(){
          return !this.list.length
      }
  }
};
</script>
<style lang="less" scoped>
.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background-color: #00bcd4;
  .search-input {
    width: 100%;
    height: 0.62rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
    padding: 0 0.1rem;
    box-sizing: border-box;
  }
}
.search-keyword {
  z-index: 111;
  position: absolute;
  top: 1.4rem;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
  background-color: #fff;
  .item{
      line-height: .68rem;
      padding-left: .2rem;
      border-bottom: 1px solid #ddd;
  }
}
</style>
