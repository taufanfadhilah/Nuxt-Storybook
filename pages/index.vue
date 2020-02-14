<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt-storybook
      </h1>
      <h2 class="subtitle">
        My wicked Nuxt.js project
      </h2>
      <div class="row mt-5">
        <div class="col-md-4" v-for="card in cards" :key="card.id"><Card :card="card" /></div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Card from '~/components/Card.vue'
export default {
  components: {
    Logo,
    Card
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          image:
            'https://q-cf.bstatic.com/images/hotel/max1024x768/107/107387387.jpg',
          title: 'Jayakarta Hotel'
        },
        {
          id: 2,
          image:
            'https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000001000189414_wh_28',
          title: 'Serela Legian Hotel'
        },
        {
          id: 3,
          image:
            'https://origin.pegipegi.com/jalan/images/pict1L/Y4/Y914314/Y914314047.jpg',
          title: 'Eden Hotel'
        },
      ]
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
