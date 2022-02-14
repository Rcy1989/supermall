<template>
  <div class="goods">
    <goods-item v-for="(item,index) in HomeGoods" :key="index" class="item" :goods="item"/>
  </div>
</template>

<script >
import GoodsItem from './GoodItem.vue'
  export default {
    data() {
      return {}
    },
    props:{
      HomeGoods:[]
    },
    components: {
      GoodsItem
    },
    methods: {}
  }
</script>

<style >
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 5px;
  }

</style>
