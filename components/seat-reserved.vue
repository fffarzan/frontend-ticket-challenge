<template>
  <div class="seat seat-reserved">{{ cSeatNumber }}</div>
</template>

<script>
export default {
  props: {
    seatNumber: {
      type: Number,
      default: null,
    },
  },
  computed: {
    cSeatNumber: {
      get() {
        return this.seatNumber + 1
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
.seat-reserved {
  background-color: red;
  cursor: not-allowed;
}
</style>
