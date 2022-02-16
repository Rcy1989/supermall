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
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    components: {},
    methods: {
      scrollTo(x,y,time=300){
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp()
      },
      refresh(){
        console.log('refresh')
        this.scroll && this.scroll.refresh && this.scroll.refresh()
      }
      
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true,
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad
      })
      this.scroll.on('scroll',(position)=>{
        // console.log(position)
        this.$emit('scrollposition',position)
        })
      this.scroll.on('pullingUp',()=>{
        // console.log('上拉加载更多')
        this.$emit('pullUpLoadMore')
      })
    }
  }
</script>

<style >

</style>
