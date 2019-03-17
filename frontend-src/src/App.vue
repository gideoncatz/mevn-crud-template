<template>
  <div id="app">
    <h1>Let's handle some products</h1>
    <Products/>
  </div>
</template>

<script>
import Products from './components/Products.vue'

export default {
  name: 'app',
  components: {
    Products
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
