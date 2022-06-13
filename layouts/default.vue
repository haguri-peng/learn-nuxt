<template>
  <div>
    <header class="title">
      <!-- <h1>{{ capitalize }} Page</h1>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/product">Product</NuxtLink> -->
      <h1>
        <NuxtLink class="logo" to="/"> Nuxt Shopping </NuxtLink>
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

<style scoped>
/* 헤더 관련 style */
header {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
}
.logo {
  font-weight: 900;
}
.logo:visited {
  color: inherit;
}
</style>
