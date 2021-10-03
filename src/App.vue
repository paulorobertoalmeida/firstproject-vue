<template>
  <div id="app">
    <Header/>
    <Slider/>
    <div class="center">
      <LastArticles/>
      <Sidebar/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Slider from './components/Slider.vue';
import Sidebar from './components/Sidebar.vue';
import LastArticles from './components/LastArticles.vue';

export default {
  name: 'App',
  components: {
    Header,
    Slider,
    Sidebar,
    LastArticles,
  }
}
</script>

<style>
  @import './assets/css/styles.css';
</style>
