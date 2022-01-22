<template>
  <div class="homerecommend">
    <div class="recommend-item" v-for="(item, index) in childrecommend" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {};
  },
  props: {
    childrecommend: null,
  },
  components: {},
  methods: {},
};
</script>

<style >
  .homerecommend{
    display: flex;
    text-align: center;
    border-bottom: 8px solid #eee;
  }
  .recommend-item{
    flex: 1;
    margin: 15px 0 20px;
    
  }
  .recommend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 5px;
  }
</style>
