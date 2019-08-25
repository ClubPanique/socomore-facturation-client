import Vue from 'vue';
import router from './router';
import VeeValidate from 'vee-validate';
import App from './App.vue';

//Import des icones font awesome pour Vue :
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash, faEdit, faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

library.add(faTrash, faEdit, faPlus);

Vue.use(VeeValidate);
Vue.component('font-awesome-icon', FontAwesomeIcon);

//A enlever ?
Vue.config.productionTip = false;

//Placer l'URL de base de l'API ici :
window.rootURL = 'http://localhost:3000/api/v1/';

/* url pour version déployée : 'http://app-8d67b1a8-1400-4290-a3ca-ebe3f7d2d629.cleverapps.io/api/v1/'; */

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
