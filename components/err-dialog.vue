<template>
  <transition name="fade">
    <div v-if="isErrDialogShowning" class="dialog">
      <p>An error occured. Please try again</p>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('dialog', ['isErrDialogShowning']),
  },
}
</script>

<style>
.dialog {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 280px;
  font-size: 17px;
  background-color: red;
  border-radius: 5px;
  line-height: 45px;
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
