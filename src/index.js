import * as Vue from 'vue/dist/vue.esm-bundler.js'

const app = Vue.createApp({
  template: `
    <button v-on:click="increment">Increment</button>
    <p>{{ count }} </p>
    <div v-if="isEven(count)">
      Even
    </div>
  `,
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count += 1
    },
    isEven(val) {
      return val % 2 === 0
    }
  }
})
app.mount('#app')