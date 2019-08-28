<template>
  <div class="order">
    <div class="order-content">
      <!-- 订单预定票 titile 开始 -->
      <div class="order-title">
        <div class="title-name">
          <h3>野生动物世界特定日全票</h3>
          <i class="iconfont icon-Close" @click="handleOrderClose"></i>
        </div>
        <div class="order-ticket-price">
          <em>¥</em>
          <span>325</span>
          <em>/张</em>
        </div>
      </div>
      <!-- 订单预定票 titile 结束 -->
      <!-- 订单日期 开始 -->
      <div class="order-date">
        <div class="order-date-name">价格日历</div>
        <div class="order-date-list">
          <div class="item">
            <p>今天</p>
            <p class="date">8月8日</p>
          </div>
          <div class="item">
            <p>今天</p>
            <p class="date">8月8日</p>
          </div>
          <div class="item">
            <p>今天</p>
            <p class="date">8月8日</p>
          </div>
          <div class="item">
            <p>今天</p>
            <p class="date">8月8日</p>
          </div>
        </div>
      </div>
      <!-- 订单日期 结束 -->
      <div class="order-time">需要在游玩前1天的23:45前预订</div>
    </div>
    <!-- 立即下单 -->
    <div class="order-btn">立即预订</div>
  </div>
</template>
<script>
export default {
  name: "TicketOrder",
  methods:{
    handleOrderClose(){
      this.$emit('handleOrderClose')
    }
  }
};
</script>
<style lang="less" scoped>
.order {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  .order-content {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #fff;
    height: 4.64rem;
    padding: 0.2rem;
    .order-title {
      .title-name {
        font-size: 0.34rem;
        color: #212121;
        padding-top: 0.2rem;
        padding-bottom: 0.1rem;
        i{
            position: absolute;
            top: .2rem;
            right: .2rem;
            font-size: .48rem;
            display: block;
            width: .8rem;
            height: .8rem;
            text-align: center;
            line-height: .8rem;
        }
      }
      .order-ticket-price {
        font-size: 0.24rem;
        color: 0.24rem;
        line-height: 0.48rem;
        color: #ff9800;
        em {
          &:last-child {
            color: #9e9e9e;
            margin-left: 0.1rem;
          }
        }
        span {
          font-size: 0.36rem;
        }
      }
    }
    .order-date {
      margin-top: 0.18rem;
      .order-date-name {
        line-height: 0.65rem;
      }
      .order-date-list {
        display: flex;
        justify-content: space-between;
        .item {
          width: 22.5%;
          height: 0.86rem;
          border: 1px solid #ddd;
          border-radius: 0.1rem;
          text-align: center;
          p {
            color: #dedede;
            &:first-child {
              margin-top: 0.08rem;
              font-size: 0.28rem;
              line-height: 0.36rem;
            }
          }
          .date {
            font-size: 0.24rem;
            line-height: 0.32rem;
          }
        }
      }
    }
    .order-time {
      color: #ff8300;
      font-size: 0.24rem;
      line-height: 0.36rem;
      padding: 0.14rem 0;
    }
  }
  .order-btn{
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      height: 1rem;
      line-height: 1rem;
      text-align: center;
      color: #fff;
      background-color: #ff9800;

  }
}
</style>
