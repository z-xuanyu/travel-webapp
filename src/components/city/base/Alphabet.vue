<template>
  <ul class="alphabet">
    <li
      class="alphabet-item"
      :ref="item"
      v-for="item in letters"
      :key="item"
      @click="handleLetterClick"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEed"
    >{{item}}</li>
  </ul>
</template>
<script>
import { constants } from "crypto";
import { clearInterval, setTimeout } from "timers";
export default {
  name: "CityAlphabet",
  props: {
    cities: Object
  },
  data() {
    return {
      touchStatus: false, //默认触摸状态
      touchY: 0,
      timer: null
    };
  },
  computed: {
    letters() {
      const letters = [];
      for (let key in this.cities) {
        letters.push(key);
      }
      return letters;
    }
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop; //每次数据更新时获取新的A距离定位元素的top值
  },
  methods: {
    handleLetterClick(e) {
      console.log(e.target.innerText);
      this.$emit("change", e.target.innerText); //向父组件发送事件
    },
    handleTouchStart() {
      //触摸开始事件
      this.touchStatus = true; //触摸开始时状态
    },
    handleTouchMove(e) {
      //接触点改变事件
      if (this.touchStatus) {
        if (this.timer) {
          clearInterval(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 70;
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          }
        }, 16);
      }
    },
    handleTouchEed() {
      //触摸结束事件
      this.touchStatus = false; //触摸结束时状态
    }
  }
};
</script>
<style lang="less" scoped>
.alphabet {
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  .alphabet-item {
    padding: 0.05rem 0;
    color: #00bcd4;
  }
}
</style>
