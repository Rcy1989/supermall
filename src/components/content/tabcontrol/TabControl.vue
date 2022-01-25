<template>
  <div class="tabcontrol">
    <div
      v-for="(item, index) in tabtitle"
      :key="index"
      class="tabcontrol-item"
      :class="{ active: index == activeIndex }"
      @click="tabitem(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {
      activeIndex: 0,
    };
  },
  props: {
    tabtitle: null,
  },
  components: {},
  methods: {
    tabitem(index) {
      this.activeIndex = index;
      this.$emit('tabClickIndex',index)
    },
  },
};
</script>

<style >
.tabcontrol {
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 44px;
  background-color: #fff;
  z-index: 9;
}
.tabcontrol-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-high-text);
  padding: 10px;
}
</style>
