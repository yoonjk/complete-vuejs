<template>
  <button @click="increment"> {{ count }} </button>
</template>
  
<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)

    const increment = () => {
        count.value++
    }
    return {
      count,
      increment
    }
  }
}
</script>

<style scoped>
button {
    height: 200px;
    width: 200px;
    font-size: 40px;
}
</style>
