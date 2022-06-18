<template>
  <div class="list-wrapper">
    <ul>
      <li v-for="cartItem in getCartItems" :key="cartItem.id" class="list-item">
        <input type="checkbox" class="input-checkbox" />
        <img class="thumbnail" :src="cartItem.imageUrl" :alt="cartItem.name" />
        <div class="description">
          <p>Name: {{ cartItem.name }}</p>
          <p>Price: {{ cartItem.price }}</p>
          <p>
            Quantity:
            <input
              type="number"
              class="input-number"
              :value="cartItem.quantity || 1"
            />
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH_CART_ITEMS } from '@/store/index'

export default {
  async fetch() {
    await this.$store.dispatch(FETCH_CART_ITEMS)
  },
  computed: {
    ...mapGetters(['getCartItems']),
  },
}
</script>

<style scoped>
.list-wrapper {
  margin: 0.4rem 0;
}
.list-item {
  display: flex;
  margin: 5px 0;
}
.thumbnail {
  width: 150px;
  height: 150px;
}
.description {
  padding: 2rem 1rem;
}
.input-number {
  width: 50px;
  text-align: center;
}
.input-checkbox {
  margin: 4rem 1rem 0 0;
}
</style>
