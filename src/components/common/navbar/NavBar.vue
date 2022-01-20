<template>
  <div class="nav-bar">
    <div class="nav-left"><slot name="left"></slot></div>
    <div class="nav-center"><slot name="center"></slot></div>
    <div class="nav-right"><slot name="right"></slot></div>
  </div>
</template>

<script >
  export default {
    name: "",
    data() {
      return {}
    },
    components: {},
    methods: {}
  }
</script>

<style >
  .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    justify-content: center;
    /* background-color: red; */
  }
  .nav-left{
    width: 15vw;
    /* background-color: red; */
  }
  .nav-right{
    width: 15vw;
    /* background-color: red; */
  }
  .nav-center{
    flex: 1;
    text-align: center;
  }
</style>
