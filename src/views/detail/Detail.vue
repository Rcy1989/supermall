<template>
  <div class="">
    {{id}}
  </div>
</template>

<script >
  export default {
    data() {
      return {
        id:null
      }
    },
    components: {},
    methods: {},
    created(){
      this.id = this.$route.params.id
    }
  }
</script>

<style >

</style>
