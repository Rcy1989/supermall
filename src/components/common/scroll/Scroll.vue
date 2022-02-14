<template>
  <div class="scroll_wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script >
import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        scroll:null
      }
    },
    components: {},
    methods: {
      scrollTo(x,y,time=300){
        this.scroll.scrollTo(x,y,time)
      },
      
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true,
        probeType:3,
        pullUpLoad:true
      })
      
    }
  }
</script>

<style >

</style>
