<template>
  <button @click="increment"> {{ count }} </button>
  <button @click="inc('a')"> {{ numbers.a }}</button>
  <button @click="inc('b')"> {{ numbers.b }}</button>
  <p> {{ total }}</p>
</template>
  
<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue'

export default {
  setup() {
    // ref => number, string
    const count = ref(0)

    // reactive => {}
    const numbers = reactive({
        a: 1,
        b: 2
    })

    const inc = (n) => {
        numbers[n]++
    }

    const increment = () => {
        count.value++
    }
    watchEffect(() => {
        console.log(`count: ${numbers.a} `)
    })
    const total = computed(() => {
        return count.value +  numbers.a + numbers.b
    })

    return {
      count,
      total,
      inc,
      increment,
      numbers,
    }
  }
}
</script>

<style scoped>
p {
    font-size: 40px;
}

button {
    height: 100px;
    width: 100px;
    font-size: 40px;
}
</style>
