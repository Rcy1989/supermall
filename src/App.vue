<template>
  <div id="app">
    <main-tab-bar class="maintabbar"></main-tab-bar>
    <keep-alive><router-view/></keep-alive>
  </div>
</template>
<script>
  import MainTabBar from 'components/content/maintabbar/MainTabbar'
  export default ({
    components:{
      MainTabBar
    }
  })
</script>

<style>
  @import './assets/css/base.css';
</style>
