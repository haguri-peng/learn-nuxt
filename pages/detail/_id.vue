<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img
          :src="product.imageUrl"
          :alt="product.name"
          class="product-image"
        />
      </div>
      <div class="side-panel">
        <p class="name">Name: {{ product.name }}</p>
        <p class="price">Price: {{ product.price }}</p>
        <button type="button" @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchProductById } from '@/api/index'

export default {
  async asyncData({ params }) {
    const { data } = await fetchProductById(params.id)
    const product = data
    product.imageUrl = `${product.imageUrl}?random=${Math.random()}`
    product.price = `$${product.price}`
    // console.log(product)
    return { product }
  },
  methods: {
    addToCart() {
      console.log('addToCart')
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>
