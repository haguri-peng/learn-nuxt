<template>
  <div class="container">
    <h1 class="list-title">Cart Page</h1>
    <CartList></CartList>
    <div class="extra-panel">
      <button type="button">Purchase</button>
    </div>
  </div>
</template>

<script>
// import { FETCH_CART_ITEMS } from '@/store/index'
import CartList from '@/components/CartList.vue'

export default {
  components: {
    CartList,
  },
  // async asyncData({ store }) {
  //   await store.dispatch(FETCH_CART_ITEMS)
  // },
}
</script>

<style scoped>
.container {
  margin: 2rem 10rem;
}
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}
.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
</style>
