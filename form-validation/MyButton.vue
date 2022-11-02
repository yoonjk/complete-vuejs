<template>
  <button
    v-bind:style="{ background, color }"
    v-bind:disabled="disabled"    
  >
    Button
  </button>
</template>
<script>
export default {
  props: {
    background: {
        type: String 
    },
    color: {
        type: String
    },
    disabled: {
        type: Boolean
    }
  }
}
</script>
<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
}
.label {
  display: flex;
  justify-content: space-between;
}
.error {
  color: red;
}
button:disabled {
  opacity: 0.5;
}
button {
  background: none;
  color: black;
  border: 1px solid silver;;
  border-radius: 5px;
  padding: 10px;
  margin: 5px 0;
  font-size: 16px;
}
</style>
