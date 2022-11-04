<template>
  <button @click="increment"> {{ count }} </button>
  <button @click="a++"> {{ a }}</button>
  <button @click="b++"> {{ b }}</button>
  <p> {{ total }}</p>
  <div 
    v-for="number in history"
    :key="number"
  >
    {{ number }}
  </div>
    
</template>
  
<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue'

export default {
  setup() {
    // ref => number, string
    const count = ref(0)
    const a = ref(0)
    const b = ref(0)
    const history = ref([])

    const increment = () => {
        count.value++
    }

    watch([a,b], ([newA, newB],[oldA, oldB]) => {
        if (newA !== oldA) {
           history.value.push(`A: ${oldA} -> ${newA}`) 
        }
        if (newB !== oldB) {
           history.value.push(`B: ${oldB} -> ${newB}`)
        }
    })

    const total = computed(() => {
        return count.value + a.value + b.value
    })

    return {
      count,
      total,
      a,
      b,
      history,
      increment
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
