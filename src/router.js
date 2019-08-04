import Vue from 'vue';

//Import des middlewares.
import VueRouter from 'vue-router';
import VueRessource from 'vue-resource';

//Utilisation des middlewares nécessaires.
Vue.use(VueRouter);
Vue.use(VueRessource);

//Import des composants à utiliser avec le router-view.
import Home from './views/Home';
import Invoices from './views/Invoices/Invoices';
import Suppliers from './views/Suppliers/Suppliers';

//Définition des routes et des composants à charger pour chaque route.
const routes = [
  {path: '/', component: Home},
  {path: '/fournisseurs', component: Suppliers},
  {path: '/factures', component: Invoices},
];

//Création du routeur.
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes,
});

export default router;
