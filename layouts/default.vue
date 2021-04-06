<template>
  <div>
    <header class="header">
      <nuxt-link to="/">Volleyball Federation Ticket Center</nuxt-link>
    </header>

    <main class="main">
      <Nuxt />
    </main>

    <!-- loader -->
    <Loader />

    <!-- error dialog -->
    <ErrDialog />
  </div>
</template>

<script>
import Loader from '@/components/loader'

export default {
  components: {
    Loader,
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  text-align: center;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

a {
  color: white;
  text-decoration: none;
}

.main {
  max-width: 1200px;
  margin: 15px auto;
  padding: 15px;
}

.header {
  background-color: darkolivegreen;
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  line-height: 50px;
}
</style>
