<template>
  <div class="label">
    <label :for="name">{{ name }}</label>
  </div>
  <input :id="name" />
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true
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

</style>
  