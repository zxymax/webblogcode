<template>
  <div id="app">
    
    <home />
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style>
body,html{
    height: 100%;
}
#app{
    height: 100%;
}
</style>
