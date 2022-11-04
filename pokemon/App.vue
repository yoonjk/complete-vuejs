<template>
  <div class="cards">
    <card 
      v-for="pokemon in pokemons" 
      :key="pokemon.id"
      @click="fetchEvolutions(pokemon)"
    >
      <template v-slot:title>
        {{ pokemon.name }}
      </template>

      <template v-slot:content>
        <img :src="pokemon.sprite"/>
      </template>

      <template v-slot:description>
        <div 
          v-for="type in pokemon.types"
          :key="type"
        >
          {{ type }}
      </div>
      </template>
    </card>
  </div>

  <div class="cards">
    <card 
      v-for="pokemon in evolutions" 
      :key="pokemon.id"
    >
      <template v-slot:title>
        {{ pokemon.name }}
      </template>

      <template v-slot:content>
        <img :src="pokemon.sprite"/>
      </template>

      <template v-slot:description>
        <div 
          v-for="type in pokemon.types"
          :key="type"
        >
          {{ type }}
      </div>
      </template>
    </card>
  </div>
</template>

<script>
import Card from "./Card.vue"

const api = 'https://pokeapi.co/api/v2/pokemon'
const IDS = [1, 4, 7]

export default {
  components: {
    Card
  },
  data() {
    return {
      pokemons: [],
      evolutions: []
    }
  },
  async created() {
    this.pokemons = await this.fetchData(IDS)
  },

  methods: {
    async fetchEvolutions(pokemon) {
      console.log('fetch')
      this.evolutions = await this.fetchData(
        [pokemon.id + 1, pokemon.id + 2]
      )
    },
    async fetchData(ids) {
      const responses = await Promise.all(
        ids.map(id => window.fetch(`${api}/${id}`))
      )
      const json = await Promise.all(
        responses.map(data => data.json())
      )
      return json.map(datum => ({
        id: datum.id,
        name: datum.name, 
        sprite: datum.sprites.other['official-artwork'].front_default,
        types: datum.types.map(type => type.type.name)
      }))
    }
  }
}
</script>

<style scoped>
.cards {
  display: flex
}

img {
  width: 100%;
}

</style>