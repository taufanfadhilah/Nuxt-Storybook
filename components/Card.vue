<template>
  <div class="card">
    <img :src="card.image" class="card-img-top" alt="card-img" />
    <div class="card-body">
      <h5 class="card-title">{{ card.title }}</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Card',
    props: ['card'],
}
</script>

<style>
</style>
