import * as Vue from 'vue/dist/vue.esm-bundler.js'

const app = Vue.createApp({
  template: `
    <button v-on:click="increment">Increment</button>
    <p>{{ count }} 
    <span v-if="isEvenCount()">
      Even
    </span>
    <span v-else>
      Odd
    </p>
    
    <div v-for="number in numbers">
      <div>
        {{ number }} 
        <span v-if="isEven(number)">
          Even
        </span>
        <span v-else>
          Odd
        </span>
      </div>
    </div>
  `,
  data() {
    return {
      count: 0,
      numbers: [1,2,3,4,5,6,7,8,9,10]
    }
  },
  methods: {
    increment() {
      this.count += 1
    },
    isEven(number) {
      return number % 2 === 0
    },
    isEvenCount() {
      return this.count % 2 === 0
    }
  }
})
app.mount('#app')