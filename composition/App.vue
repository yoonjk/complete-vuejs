<template>
  <button @click="increment"> {{ count }} </button>
  <button @click="inc('a')"> {{ numbers.a }}</button>
  <button @click="inc('b')"> {{ numbers.b }}</button>
</template>
  
<script>
import { ref, reactive } from 'vue'

export default {
  setup() {
    // ref => number, string
    const count = ref(0)

    // reactive => {}
    const numbers = reactive({
        a: 0,
        b: 0
    })

    const inc = (n) => {
        numbers[n]++
    }

    const increment = () => {
        count.value++
    }
    
    return {
      count,
      inc,
      increment,
      numbers
    }
  }
}
</script>

<style scoped>
button {
    height: 100px;
    width: 100px;
    font-size: 40px;
}
</style>
