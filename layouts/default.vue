<template>
  <div>
    <header>
      <!-- <h1>{{ capitalize }} Page</h1>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/product">Product</NuxtLink> -->
      <h1>
        <NuxtLink to="/"> Nuxt Shopping </NuxtLink>
      </h1>
    </header>
    <Nuxt />
  </div>
</template>

<script>
export default {
  computed: {
    capitalize() {
      const name = this.$route.name || '404'
      return name.length > 0 ? name.charAt(0).toUpperCase() + name.slice(1) : ''
    },
  },
}
</script>

<style></style>
