<template>
  <ul class="recommend-list">
    <li class="recommend-list-item" v-for="(item,index) in buydata" :key="index">
      <div class="recommend-list-left">
        <h6>{{item.titleName}}</h6>
        <div class="time">
          <div class="time-icon">
            <i class="iconfont icon-iconfontjiantou1"></i>
          </div>
          <span>{{item.time}}</span>
        </div>
        <div class="tag">
          <span v-show="item.tag.tag1">{{item.tag.tag1}}</span>
          <span v-show="item.tag.tag2">{{item.tag.tag2}}</span>
          <span v-show="item.tag.tag3">{{item.tag.tag3}}</span>
        </div>
      </div>
      <div class="recommend-list-right">
        <div class="price">
          <em>¥</em>
          <span>{{item.price}}</span>
        </div>
        <div class="destine" @click="handleOrderShow">预定</div>
      </div>
    </li>
  </ul>
</template>
<script>
import { constants } from 'crypto';
export default {
  props: {
      buydata:Array
  },
  name: "BuyList",
  methods:{
    handleOrderShow(){
      console.log('我已经执行到这一步了')
      this.$emit('changeOrderShow')
    }
  }
};
</script>
<style lang="less" scoped>
.recommend-list {
  padding: 0rem 0.2rem 0.24rem 0;
  .recommend-list-item {
    border-top: 1px solid #ddd;
    padding-bottom: 0.2rem;
    display: flex;
    .recommend-list-left {
      flex: 2.92;
      h6 {
        margin-left: 0.1rem;
        line-height: 0.52rem;
        font-size: 0.3rem;
      }
      .time {
        height: 0.32rem;
        color: #616161;
        font-size: 0.24rem;
        line-height: 0.32rem;
        display: flex;
        align-items: center;
        .time-icon {
          height: 0.2rem;
          width: 0.2rem;
          border-radius: 50%;
          background-color: #00bcd4;
          overflow: hidden;
          i {
            font-size: 0.06rem;
            color: #fff;
          }
        }
      }
      .tag {
        margin-top: 0.08rem;
        height: 0.32rem;
        color: #00afc7;
        font-size: 0.2rem;
        line-height: 0.32rem;

        span {
          border: 1px solid #a5e4ec;
          border-radius: 0.06rem;
          padding: 0 0.04rem;
          margin-right: 0.1rem;
        }
      }
    }
    .recommend-list-right {
      flex: 1;
      text-align: center;
      padding-left: 0.2rem;
      margin: auto;
      .price {
        color: #ff9800;
        height: 0.4rem;
        span {
          line-height: 0.4rem;
          font-size: 0.4rem;
          margin-left: 0.04rem;
        }
      }
      .destine {
        height: 0.6rem;
        color: #fff;
        line-height: 0.6rem;
        border-radius: 0.08rem;
        background-image: linear-gradient(130deg, #ffab1e 37%, #ff8c12 100%);
      }
    }
  }
}
</style>

