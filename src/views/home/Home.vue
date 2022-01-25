<template>
  <div class="home">
    <!-- 导航栏 -->
    <nav-bar class="home_navbar">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :childbanners="banners" />
    <!-- 推荐 -->
    <home-recommend :childrecommend="recommends" />
    <!-- 本周流行 -->
    <home-popular />
    <!-- 控制选项卡 -->
    <tab-control class="tab-control" :tabtitle="['流行', '新款', '精选']" @tabClickIndex="homeClickIndex"/>
    <!-- 选项卡数据显示 -->
    <goods :goodslist="goods[goods_key].list"/>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  </div>
</template>

<script >
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabcontrol/TabControl";
import Goods from "components/content/goods/Goods"

import HomeSwiper from "./child/HomeSwiper.vue";
import HomeRecommend from "./child/HomeRecommend.vue";
import HomePopular from "./child/HomePopular.vue";

import { getHomeMultidata, getHomegoods } from "network/home";
export default {
  data() {
    return {
      banners: null,
      recommends: null,
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] },
      },
      goods_key:'pop'
    };
  },
  components: {
    NavBar,
    TabControl,
    Goods,

    HomeSwiper,
    HomeRecommend,
    HomePopular,
  },
  computed:{
    getGoodsList(){
      return this.goods[this.goods_key]
    }
  },
  created() {
    this.getHomeMultidata();
    this.getHomegoods("pop");
    this.getHomegoods("new");
    this.getHomegoods("sell");
  },
  methods: {
    // 数据监听相关
    homeClickIndex(index){
      switch(index){
        case 0 :
          this.goods_key = 'pop'
          break
        case 1 :
          this.goods_key = 'new'
          break
        case 2 :
          this.goods_key = 'sell'
          break
      }
    },
    // 网络请求相关
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomegoods(type) {
      const page = this.goods[type].page + 1;
      getHomegoods(type, page).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1
      });
    },
  },
};
</script>

<style >
.home {
  padding: 44px 0 0;
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
</style>
