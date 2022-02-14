<template>
  <div class="home">
    <!-- 导航栏 -->
    <nav-bar class="home_navbar"
      ><template v-slot:center>购物街</template></nav-bar
    >

    <scroll class="HomescrollWrapper" ref="scroll">
      <!-- 轮播图 -->
      <home-swiper :childbanners="banners" />
      <!-- 推荐 -->
      <home-recommend :childrecommend="recommends" />
      <!-- 本周流行 -->
      <home-popular />
      <!-- 控制选项卡 -->
      <tab-control
        class="tab-control"
        :tabtitle="['流行', '新款', '精选']"
        @tabClickIndex="tabClickIndex"
      />
      <!-- 选项卡数据显示 -->
      <goods :HomeGoods="getHomeGoods_list" />
    </scroll>
    <back-top @click.native="backtopclick" />
    <!-- <ul>
      <li>哈哈1</li>
      <li>哈哈2</li>
      <li>哈哈3</li>
      <li>哈哈4</li>
      <li>哈哈5</li>
      <li>哈哈6</li>
      <li>哈哈7</li>
      <li>哈哈8</li>
      <li>哈哈9</li>
      <li>哈哈10</li>
      <li>哈哈11</li>
      <li>哈哈12</li>
      <li>哈哈13</li>
      <li>哈哈14</li>
      <li>哈哈15</li>
      <li>哈哈16</li>
      <li>哈哈17</li>
      <li>哈哈18</li>
      <li>哈哈19</li>
      <li>哈哈20</li>
    </ul> -->
  </div>
</template>

<script >
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import Goods from "components/content/goods/Goods";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backtop/BackTop";

import HomeSwiper from "./child/HomeSwiper.vue";
import HomeRecommend from "./child/HomeRecommend.vue";
import HomePopular from "./child/HomePopular.vue";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  data() {
    return {
      banners: null,
      recommends: null,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      tabtitle_type: "pop",
    };
  },
  components: {
    NavBar,
    TabControl,
    Goods,
    Scroll,
    BackTop,

    HomeSwiper,
    HomeRecommend,
    HomePopular,
  },
  computed: {
    getHomeGoods_list() {
      return this.goods[this.tabtitle_type].list;
    },
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    // 数据监听相关
    tabClickIndex(index) {
      switch (index) {
        case 0:
          this.tabtitle_type = "pop";
          break;
        case 1:
          this.tabtitle_type = "new";
          break;
        case 2:
          this.tabtitle_type = "sell";
          break;
      }
    },
    backtopclick() {
      this.$refs.scroll.scrollTo(0, 0);
    },

    // 网络请求相关
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = (this.goods[type].page += 1);
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>

<style scoped>
.home {
  /* padding: 44px 0 0; */
  height: 100vh;
  position: relative;
}
.home_navbar {
  background-color: deeppink;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  width: 100vw;
}
.tab-control {
  position: sticky;
  top: 44px;
}
.HomescrollWrapper {
  /* height: calc(100vh-44px); */
  /*   
  height: 500px;
  overflow: hidden; */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
