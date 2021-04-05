<template>
  <nuxt-link
    class="seat"
    :to="{
      name: 'seat-id',
      params: { id: cSeatNumber, mapId: cMapId },
    }"
  >
    {{ cSeatNumber }}
  </nuxt-link>
</template>

<script>
export default {
  props: {
    seatNumber: {
      type: Number,
      default: null,
    },
    mapId: {
      type: String,
      default: '',
    },
  },
  computed: {
    cSeatNumber: {
      get() {
        return this.seatNumber + 1
      },
    },
    cMapId: {
      get() {
        return this.mapId
      },
    },
  },
}
</script>

<style>
.seat {
  display: block;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 3px;
  background-color: green;
  margin: 3px;
  text-align: center;
  cursor: pointer;
}
</style>
