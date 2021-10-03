<template>
  <div id="app">
    <Header/>
    <Slider/>
    <div class="center">
      <Sidebar/>
      <LastArticles /> 
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Slider from './components/Slider.vue';
import Sidebar from './components/Sidebar.vue';
import LastArticles from './components/LastArticles.vue';
//import Blog from './components/Blog.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Slider,
    Sidebar,
    LastArticles,
    Footer,
  }
}
</script>

<style>
  @import './assets/css/styles.css';
</style>
