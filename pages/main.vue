<template>
  <div>
    <nuxt-logo></nuxt-logo>
    <p>메인 페이지입니다.</p>
    <div>
      {{ products }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import NuxtLogo from '@/components/NuxtLogo.vue'

export default {
  // name: 'MainPage',
  components: {
    NuxtLogo,
  },
  async asyncData({ params, $http }) {
    const { data } = await axios.get('http://localhost:3000/products')
    const products = data
    return { products }
  },
  // data() {
  //   return {
  //     products: [],
  //   }
  // },
}
</script>

<style></style>
