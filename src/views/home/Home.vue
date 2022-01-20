<template>
  <div class="home">
    <nav-bar class="home_navbar">
      <template v-slot:center>购物车</template>
    </nav-bar>

  </div>
</template>

<script >

import NavBar from "components/common/navbar/NavBar";
export default {
  data() {
    return {

    };
  },
  components: {
    NavBar,
  },
};
</script>

<style >
.home_navbar {
  background-color: deeppink;
}
</style>
