<template>
  <div class="goods-item" @click="goodsitemclick">
    <img :src="goods.show.img" alt="" @load="ItemImageLoad" />
    <div class="goods-info">
      <p>{{ goods.title }}</p>
      <span class="price">{{ goods.price }}</span>
      <span class="collect">{{ goods.cfav }}</span>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {
      
    }
  },

  props: {
    goods: [],
  },
  components: {},
  methods: {
    ItemImageLoad() {
      this.$bus.$emit("ItemImageLoad");
    },
    goodsitemclick(){
      this.$router.push('/detail/'+this.goods.iid)
    }
  }
};
</script>

<style >
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48vw;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  /* 一行显示不了的显示... */
  text-overflow: ellipsis;
  /* 本文不换行 */
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
