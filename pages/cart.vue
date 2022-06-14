<template>
  <div class="container">
    <h1 class="list-title">Cart Page</h1>
    <div class="list-wrapper">
      <ul>
        <li
          v-for="cartItem in getCartItems"
          :key="cartItem.id"
          class="list-item"
        >
          <input type="checkbox" class="input-checkbox" />
          <img
            class="thumbnail"
            :src="cartItem.imageUrl"
            :alt="cartItem.name"
          />
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
    <div class="extra-panel">
      <button type="button">Purchase</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async fetch({ store }) {
    await store.dispatch('getCartItems')
  },
  computed: {
    ...mapGetters(['getCartItems']),
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
.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
.input-number {
  width: 50px;
  text-align: center;
}
.input-checkbox {
  margin: 4rem 1rem 0 0;
}
</style>
