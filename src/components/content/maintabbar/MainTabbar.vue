<template>
  <tabbar>
    <tabbaritem path="home" >
      <template v-slot:itemicon><img src="~assets/img/tabbar/home.svg" alt=""></template>
      <template v-slot:itemicon-active><img src="~assets/img/tabbar/home_active.svg" alt=""></template>
      <template v-slot:itemtext><div>首页</div></template>
    </tabbaritem>
    <tabbaritem path="category" color="red">
      <template v-slot:itemicon><img src="~assets/img/tabbar/category.svg" alt=""></template>
      <template v-slot:itemicon-active><img src="~assets/img/tabbar/category_active.svg" alt=""></template>
      <template v-slot:itemtext><div>分类</div></template>
    </tabbaritem>
    <tabbaritem path="cart" color="yellow">
      <template v-slot:itemicon><img src="~assets/img/tabbar/shopcart.svg" alt=""></template>
      <template v-slot:itemicon-active><img src="~assets/img/tabbar/shopcart_active.svg" alt=""></template>
      <template v-slot:itemtext><div>购物车</div></template>
    </tabbaritem>
    <tabbaritem path="profile" >
      <template v-slot:itemicon><img src="~assets/img/tabbar/profile.svg" alt=""></template>
      <template v-slot:itemicon-active><img src="~assets/img/tabbar/profile_active.svg" alt=""></template>
      <template v-slot:itemtext><div>我的</div></template>
    </tabbaritem>
  </tabbar>
</template>

<script>
import tabbar from 'components/common/tabbar/Tabbar.vue'
import tabbaritem from 'components/common/tabbar/TabbarItem.vue'
export default {
  components:{
    tabbar,
    tabbaritem
  }
}
</script>

<style>

</style>