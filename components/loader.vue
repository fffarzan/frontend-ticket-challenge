<template>
  <transition name="fade">
    <div v-if="isLoaderShowing" class="loader">
      <p>Loading...</p>
    </div>
  </transition>
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
