<template>
  <div class="app">
    <main>
      <!-- <SearchInput
        :search-keyword="searchKeyword"
        @input="updateSearchKeyword"
      /> -->
      <SearchInput v-model="searchKeyword" @search="searchProducts" />
      <ul>
        <li
          v-for="product in products"
          :key="product.id"
          class="item flex"
          @click="moveToDetailPage(product.id)"
        >
          <img
            :src="product.imageUrl"
            :alt="product.name"
            class="product-image"
          />
          <p>{{ product.name }}</p>
          <span>{{ product.price }}</span>
        </li>
      </ul>
      <div class="cart-wrapper">
        <button class="btn" @click="moveToCart">Go to Cart</button>
      </div>
    </main>
  </div>
</template>

<script>
import { fetchProducts, fetchProductsByKeyword } from '@/api/products'
import SearchInput from '@/components/SearchInput.vue'

export default {
  // name: 'MainPage',
  components: {
    SearchInput,
  },
  async asyncData() {
    const { data } = await fetchProducts()
    const products = data.map((item) => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`,
      price: `$${item.price}`,
    }))
    return { products }
  },
  data() {
    return {
      searchKeyword: '',
    }
  },
  methods: {
    moveToDetailPage(id) {
      // console.log(id)
      this.$router.push(`detail/${id}`)
    },
    // updateSearchKeyword(keyword) {
    //   this.searchKeyword = keyword
    // },
    async searchProducts() {
      const { data } = await fetchProductsByKeyword(this.searchKeyword)
      this.products = data.map((item) => ({
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`,
        price: `$${item.price}`,
      }))
    },
    moveToCart() {
      this.$router.push('/cart')
    },
  },
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
  background-color: palegreen;
  cursor: pointer;
}
</style>
