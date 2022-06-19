<template>
  <div class="container">
    <h1 class="list-title">Cart Page</h1>
    <CartList ref="cartList" @deleteItems="deleteItems" />
    <div class="extra-panel">
      <button type="button" @click="chkList">Delete</button>
      <button type="button">Purchase</button>
    </div>
  </div>
</template>

<script>
// import { FETCH_CART_ITEMS } from '@/store/index'
import CartList from '@/components/CartList.vue'
import { deleteCartItem } from '@/api/carts'

export default {
  components: {
    CartList,
  },
  // async asyncData({ store }) {
  //   await store.dispatch(FETCH_CART_ITEMS)
  // },
  methods: {
    chkList() {
      this.$refs.cartList.getCheckedList()
    },
    async deleteItems(arrId) {
      // DB와 vuex에서 삭제
      for (const id of arrId) {
        deleteCartItem(id)
        await this.$store.commit('deleteCartItem', id)
      }

      // this.$router.push('/cart')
      this.$router.go()
    },
  },
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
