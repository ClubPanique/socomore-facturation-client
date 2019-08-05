import Vue from 'vue';

//Import des middlewares.
import VueRouter from 'vue-router';
import VueRessource from 'vue-resource';

//Utilisation des middlewares nécessaires.
Vue.use(VueRouter);
Vue.use(VueRessource);

//Import des composants à utiliser avec le router-view.
//Vue accueil
import Home from './views/Home';
//Vues factures.
import Invoices from './views/Invoices/Invoices';
import AddInvoice from './views/Invoices/AddInvoice';
import EditInvoice from './views/Invoices/EditInvoice';
//Vues fournisseurs.
import Suppliers from './views/Suppliers/Suppliers';
import Details from './views/Suppliers/Details';
import AddSupplier from './views/Suppliers/AddSupplier';
import EditSupplier from './views/Suppliers/EditSupplier';

//Définition des routes et des composants à charger pour chaque route.
const routes = [
  {path: '/', component: Home},
  {path: '/fournisseurs', component: Suppliers},
  {path: '/fournisseurs/:id', component: Details},
  {path: '/fournisseurs/ajouter', component: AddSupplier},
  {path: '/fournisseurs/modifier/:id', component: EditSupplier},
  {path: '/factures', component: Invoices},
  {path: '/factures/ajouter', component: AddInvoice},
  {path: '/factures/modifier/:id', component: EditInvoice},
];

//Création du routeur.
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes,
});

export default router;
