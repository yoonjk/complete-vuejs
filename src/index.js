import * as Vue from 'vue/dist/vue.esm-bundler.js'

const app = Vue.createApp({
  template: `
    <button v-on:click="increment">Increment</button>
    <p>{{ count }} </p>

    <input 
      v-bind:value="value"
      v-on:input="input"
    />
    <div class="red">
      {{ error }}
    </div>
    <div v-for="number in numbers"
      v-bind:class="getClass(number)"
    >
      <div>
        {{ number }}
      </div>
    </div>
  `,
  data() {
    return {
      count: 0,
      numbers: [1,2,3,4,5,6,7,8,9,10],
      value: 'user'
    }
  },
  computed: {
    evenList() {
      return this.numbers.filter(num => this.isEven(num))
    },
    error() {
      if (this.value.length < 5) {
        return 'Must be greater than 5'
      }
    }
  },

  methods: {
    input($event) {
      this.value = $event.target.value
    },
    getClass(number) {
      return this.isEven(number) ? 'blue' : 'red'
    },
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