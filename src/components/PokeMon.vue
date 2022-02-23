<template>
  <div>
    <p>{{ pokemon.name }}</p>
    <p>{{ pokemon.type }}</p>
  </div>
</template>

<script>
export default {
  name: 'PokeMon',
  props:[
    'pokemon'
  ],
  created: function(){
  }
}
</script>

<style>

</style>