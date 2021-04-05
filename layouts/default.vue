<template>
  <div>
    <header class="header">
      <nuxt-link to="/">Volleyball Federation Ticket Center</nuxt-link>
    </header>

    <!-- loader -->
    <div v-if="isLoaderShowing" class="loader">
      <p>Loading...</p>
    </div>

    <main class="main">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('loader', ['isLoaderShowing']),
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

.loader {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 30px;
  background-color: rgba(0, 0, 0, 0.9);
  line-height: 100vh;
}
</style>
