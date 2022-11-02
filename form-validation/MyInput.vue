<template>
  <div class="label">
    <label :for="name">{{ name }}</label>
    <div class="error">{{ error }}</div>
  </div>
  <input 
    :id="name" 
    :value="value"
    v-on:input="input"
  />
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    rules: {
      // min: number
      // required: boolean 
      type: Object,
      default: {}
    }
  }, 
  methods: {
    input($event) {
      this.value = $event.target.value
    }
  },
  data() {
    return {
      value: ''
    }
  },

  computed: {
    error() {
      if (this.rules.required && this.value.length === 0) {
        return 'Value is required'
      }

      if (this.rules.min && this.value.length < this.rules.min) {
        return `The min length is ${this.rules.min}.`
      }
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
  