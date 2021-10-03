<template>
  <div id="app">
    <Header/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> NO NEEDED-->
    <NewComponent></NewComponent>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'; ** NO NEED THIS ONE 
import NewComponent from './components/NewComponent.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  
    NewComponent
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
