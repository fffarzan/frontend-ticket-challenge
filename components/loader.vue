<template>
  <div v-if="isLoaderShowing" class="loader">
    <p>Loading...</p>
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

<style></style>
