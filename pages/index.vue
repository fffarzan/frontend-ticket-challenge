<template>
  <div class="container">
    <br />
    <div class="choose-seat-btn">
      <button @click="onGetMap()">Choose a seat</button>
    </div>
    <br />
    <p v-if="seatsShown.length" class="studium-seats-heading">Active Seats:</p>
    <br />
    <div>
      <div class="studium-seats">
        <div v-for="(seat, index) in seatsShown" :key="index">
          <div v-if="seat" class="seat seat-reserved">{{ index + 1 }}</div>
          <nuxt-link
            v-else
            class="seat"
            :to="{
              name: 'seat-id',
              params: { id: index + 1 },
            }"
          >
            {{ index + 1 }}
          </nuxt-link>
        </div>
      </div>
    </div>
    <p v-if="seatsShown.length" class="more" @click="onShowMoreItems()">
      Show more
    </p>
  </div>
</template>

<script>
import { MapService } from '@/services/map-service'

export default {
  layout: 'default',
  data() {
    return {
      mapId: '',
      seats: [],
      seatsShown: [],
      pageUnit: 1000,
      page: 1,
    }
  },
  watch: {
    mapId: {
      handler(value) {
        this.getMap(value)
      },
    },
  },
  methods: {
    onGetMap() {
      this.seats.length = 0
      this.seatsShown.length = 0
      this.getRandomMapId()
    },
    onShowMoreItems() {
      const firstItem = this.pageUnit * (this.page - 1)
      const lastItem = this.pageUnit * this.page
      this.seatsShown = this.seatsShown.concat(
        this.seats.slice(firstItem, lastItem)
      )
      this.page++
    },
    getRandomMapId() {
      const getFn = (service, method) =>
        service[method](this)
          .then((res) => {
            const randomNumber = Math.floor(Math.random() * 10)
            this.mapId = res.map_ids[randomNumber]
          })
          .catch((e) => Error(e))
          .finally(() => {})

      getFn(MapService, 'getAllAsync')
    },
    getMap(mapId) {
      const getFn = (service, method) =>
        service[method](this, mapId)
          .then((res) => {
            for (let i = 0; i < res.length; i++) {
              for (let j = 0; j < res[i].length; j++) {
                this.seats.push(res[i][j])
              }
            }

            this.seatsShown = this.seatsShown.concat(
              this.seats.slice(0, this.pageUnit * this.page)
            )
          })
          .catch((e) => Error(e))
          .finally(() => {})

      getFn(MapService, 'getAsync')
    },
  },
}
</script>

<style>
.container {
  max-width: 1200px;
  margin: 15px auto;
}
.choose-seat-btn {
  text-align: center;
}
.studium-seats-heading {
  text-align: center;
  font-size: 25px;
}
.choose-seat-btn button {
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
.choose-seat-btn button:hover {
  background-color: aqua;
  border: 1px solid aqua;
}
.studium-seats {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
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
.more {
  text-align: center;
  font-size: 18px;
  margin: 25px 0;
  color: greenyellow;
  transition: 0.1s;
  cursor: pointer;
}
.more:hover {
  color: aqua;
}
</style>
