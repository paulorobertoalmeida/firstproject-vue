<template>
  <div id="app">
    <Header/>
    <Slider/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Slider from './components/Slider.vue';

export default {
  name: 'App',
  components: {
    Header,
    Slider,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@import './assets/css/styles.css';
</style>
