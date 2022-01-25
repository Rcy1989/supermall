<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goodslist" :key="index" :goods="item" class="item"/>
    
  </div>
</template>

<script >
import GoodsListItem from './GoodsListItem.vue'
  export default {
    data() {
      return {}
    },
    props:{
      goodslist:{
        type:Array,
        default:[]
      }
    },
    components: {
      GoodsListItem
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
  .goods .item{
    width: 48vw;
  }
</style>
