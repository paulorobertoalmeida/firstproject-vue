import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import LastArticles from './components/LastArticles.vue'
import MyComponent from './components/MyComponent.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(VueRouter);

const routes = [
  {path: '/home', component: LastArticles},
  {path: '/last-articles', component: LastArticles},
  {path: '/my-components', component: MyComponent},
  {path: '/', component: LastArticles}
];