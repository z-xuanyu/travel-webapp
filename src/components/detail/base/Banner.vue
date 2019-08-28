<template>
  <div class="banner">
    <div class="banner-content" @click="handleCarousel">
      <div class="banner-img">
        <img
          src="http://img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_600x330_b5e86902.jpg"
        />
      </div>
      <div class="banner-info">长隆野生动物世界(AAAAA景区)</div>
      <div class="banner-icon">
        <i class="iconfont icon-aixin"></i>
        <em>103</em>
      </div>
    </div>
    <router-link to="/" tag="div" class="back">
      <i class="iconfont icon-iconfontjiantou1"></i>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "DetailBanner",
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    handleCarousel() {
      this.$emit("handleCarousel");
    }
  }
};
</script>
<style lang="less" scoped>
.banner {
  position: relative;
  .banner-img {
    overflow: hidden;
    height: 0;
    width: 100%;
    padding-bottom: 55%;
    img {
      width: 100%;
    }
  }
  .banner-info {
    position: absolute;
    right: 0.2rem;
    bottom: 0.36rem;
    min-height: 0.4rem;
    left: 0.2rem;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
    font-size: 0.36rem;
    color: #fff;
    line-height: 0.4rem;
  }
  .banner-icon {
    position: absolute;
    bottom: 0.86rem;
    left: 0.2rem;
    right: 0.2rem;
    color: #fff;
    width: 1.2rem;
    height: 0.4rem;
    border-radius: 0.2rem;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .back {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    top: 0.2rem;
    left: 0.2rem;
    width: 0.72rem;
    line-height: 0.72rem;
    text-align: center;
    height: 0.72rem;
    i {
      font-size: 0.48rem;
    }
  }
}
</style>
