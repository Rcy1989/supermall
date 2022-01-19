<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  #tabbar{
    display: flex;
    position: fixed;
    height: 49px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #f2f2f2;
    text-align: center;
    vertical-align: center;
  }
</style>