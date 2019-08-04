import Vue from 'vue';
import router from './router';
import App from './App.vue';

Vue.config.productionTip = false;

//Placer l'URL de base de l'API ici :
window.rootURL = 'http://localhost:3000/api/v1/';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
