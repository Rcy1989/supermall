<template>
  <div class="">
    <swiper>
      <swiper-item v-for="(item, index) in childbanners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script >
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  data() {
    return {};
  },
  props: {
    childbanners: null,
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {},
};
</script>

<style >
</style>
