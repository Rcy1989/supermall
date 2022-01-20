<template>
  <div class="home">
    <nav-bar class="home_navbar">
      <template v-slot:center>购物车</template>
    </nav-bar>
  </div>
</template>

<script >
import { getHomeMultidata } from "network/home";
import NavBar from "components/common/navbar/NavBar";
export default {
  data() {
    return {
      banner: null,
      recommend: null,
    };
  },
  components: {
    NavBar,
  },
  created() {
    getHomeMultidata().then((res) => {
      (this.banner = res.data.banner);
      this.recommend = res.data.recommend
    });
  },
};
</script>

<style >
.home_navbar {
  background-color: deeppink;
}
</style>
