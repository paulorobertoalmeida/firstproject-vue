import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import LastArticles from './components/LastArticles.vue'
import MyComponent from './components/MyComponent.vue'
import Blog from './components/Blog.vue'
import Form from './components/Form.vue'
import Page from './components/Page.vue'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

Vue.use(VueRouter);

const routes = [
  {path: '/home', component: LastArticles},
  {path: '/last-articles', component: LastArticles},
  {path: '/blog', component: Blog},
  {path: '/form', component: Form},
  {path: '/page', component: Page},
  {path: '/my-components', component: MyComponent},
  {path: '/', component: LastArticles},
  {path: '/blog', component: Blog}
];

const router = new VueRouter({
  routes,
  mode: 'history',
});
