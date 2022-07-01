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
import { fetchProductById } from '@/api/products'
import { createCartItem } from '@/api/carts'

export default {
  async asyncData({ params }) {
    const { data } = await fetchProductById(params.id)
    const product = data
    product.imageUrl = `${product.imageUrl}?random=${Math.random()}`
    product.price = `$${product.price}`
    product.quantity = 1
    // console.log(product)
    return { product }
  },
  head() {
    return {
      title: `Shopping Item Detail (${this.product.name})`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `이 상품은 ${this.product.name}입니다.`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: '상품 상세 페이지',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '상품의 상세 정보를 확인해보세요',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'http://placeimg.com/640/480/fashion',
        },
      ],
    }
  },
  // head: {
  //   title: 'Shopping Item Detail',
  //   meta: [
  //     {
  //       hid: 'description',
  //       name: 'description',
  //       content: '이 상품은 ...입니다.',
  //     },
  //   ],
  // },
  methods: {
    async addToCart() {
      // const response = await createCartItem(this.product)
      // console.log(response)
      await createCartItem(this.product)
      this.$store.commit('addCartItem', this.product)
      this.$router.push('/cart')
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
