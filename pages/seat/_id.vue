<template>
  <div>
    <div class="info">
      <p>Your seat number:</p>
      <span>{{ seatNumber }}</span>
    </div>
    <br />
    <br />
    <button class="buy-ticket-btn" @click="onBuyTicket()">Buy ticket</button>
    <br />
    <br />
    <br />
    <div v-if="ticketId" class="info">
      <p>Yout ticket ID:</p>
      <span>{{ ticketId }}</span>
    </div>
  </div>
</template>

<script>
import { MapService } from '@/services/map-service'

export default {
  data() {
    return {
      seatNumber: null,
      ticketId: '',
    }
  },
  created() {
    this.seatNumber = this.$route.params.id
  },
  methods: {
    onBuyTicket() {
      const payload = {
        mapId: this.$route.params.mapId,
        x: 1,
        y: 1,
      }
      const postFn = (service, method) =>
        ((payload) =>
          (() =>
            service[method](this, payload)
              .then((res) => {
                console.log(res)
              })
              .catch((e) => Error(`Error in resolving service: ${e}`))
              .finally(() => {}))())(payload)

      postFn(MapService, 'buyAsync')
    },
  },
}
</script>

<style>
.info {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
.info p {
  margin: 0;
}
.info span {
  margin-left: 10px;
  font-weight: bold;
}
.buy-ticket-btn {
  border: 1px solid yellowgreen;
  color: white;
  background-color: yellowgreen;
  width: 240px;
  height: 40px;
  border-radius: 5px;
  margin: 15px auto;
  font-size: 25px;
  cursor: pointer;
  transition: 0.1s;
}
.buy-ticket-btn:hover {
  background-color: aqua;
  border: 1px solid aqua;
}
</style>
