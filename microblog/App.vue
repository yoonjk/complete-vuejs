<template>
  <card
    v-for="post in store.state.posts"
    :key="post.id"
  >
    <template v-slot:title>
      {{ post.title }}
    </template>

    <template v-slot:content>
      {{ post.content }}
    </template>

    <template v-slot:description>
      <controls :post="post" />
    </template>
  </card>
</template>

<script>
import Card from '../pokemon/Card.vue'
import Controls from './Controls.vue'
import { store } from './store.js'

export default {
  components: {
    Card,
    Controls
  },
  setup() {
    return {
      store
    }
  }  
}
</script>

<style scoped>

</style>