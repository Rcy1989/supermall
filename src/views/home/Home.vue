<template>
  <div class="home">
    <!-- 导航栏 -->
    <nav-bar class="home_navbar">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :childbanners="banners"/>
    <!-- 推荐 -->
    <home-recommend :childrecommend="recommends"/>
  </div>
</template>

<script >
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./child/HomeSwiper.vue";
import HomeRecommend from './child/HomeRecommend.vue'

import { getHomeMultidata } from "network/home";
export default {
  data() {
    return {
      banners: null,
      recommends: null,
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style >
.home_navbar {
  background-color: deeppink;
  color: #fff;
}
</style>
