<template>
  <div class="tabbaritem" @click="itemclick">
    <div v-if="!active"><slot name="itemicon"></slot></div>
    <div v-else><slot name="itemicon-active"></slot></div>
    <div :style="activestyle"><slot name="itemtext"></slot></div>
  </div>
</template>

<script>
export default {
  props:{
    path:String,
    color:{
      type:String,
      default:'red'
    }
  },
  methods:{
    itemclick(){
      return this.$router.push(this.path)
    }
  },
  computed:{
    active(){
      return this.$route.path.indexOf(this.path)!==-1
    },
    activestyle(){
      return this.active?{color:this.color}:{}
    }
  }
}
</script>

<style>
  .tabbaritem{
    flex: 1;
    padding-top: 2px;
  }
  .tabbaritem img{
    width: 24px;
    height: 24px;
  }
</style>