<template>
  <div id="app">
    <list-product-elvan/>
    <list-porduct-diano/>
  </div>
</template>

<script>
  import ListPorductDiano from "./components/ListPorductDiano";
  import ListProductElvan from "./components/ListProductElvan";

  export default {
    name: 'App',
    components: {
      ListProductElvan,
      ListPorductDiano
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
    margin-top: 20px;
  }
</style>
