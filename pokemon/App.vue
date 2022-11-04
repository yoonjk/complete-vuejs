<template>
  <div class="card">
    <div class="title">
      title
    </div>
    <div class="content">
      content
    </div>
    <div class="description">
      description
    </div>
    <button @click="fetchData">Fetch</button>
  </div>
</template>

<script>
const api = 'https://pokeapi.co/api/v2/pokemon'
export default {
  methods: {
    async fetchData() {
      const response = await window.fetch(`${api}/1`)
      const json = await response.json()
      this.pokemon = {
        id: json.id,
        name: json.name,
        sprite: json.sprites.other['official-artwork'].front_default,
        types: json.types.map(type => type.type)
      }
      console.log(this.pokemon)
    }
  }
}
</script>

<style scoped>
.card {
  border: 1px solid silver;
  border-radius: 8px;
  max-width: 200px;
  margin: 0 5px;
  cursor: pointer;
  box-shadow: 0px 1px 3px darkgrey;
  transition: 0.2s;
}
.title, .content, .description {
  padding: 16px;
  text-transform: capitalize;
  text-align: center;
}
.title, .content {
  border-bottom: 1px solid silver;
}
.title {
  font-size: 1.25em;
}
.card:hover {
  transition: 0.2s;
  box-shadow: 0px 1px 9px darkgrey;
}
</style>