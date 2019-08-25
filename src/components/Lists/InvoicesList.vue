<template>
  <div id="invoices-list">
    <div v-if="loading == true">
      <pulse-loader class="pt-6" :loading="loading" :color="color"></pulse-loader>
    </div>
    <div v-if="loading == false">
      <div v-if="list.length > 0">
        <List
          :list="list"
          :types="types"
          :columns="columns"
          :path="path"
          @delete="deleteInvoice($event)"
        />
      </div>
      <div v-else-if="$route.params.id">
        <p>Il n'y a pas de facture associée à ce fournisseur</p>
      </div>
      <div v-else>
        <p>Il n'y a pas de facture dans la base de données. Cliquez sur ajouter une facture pour en ajouter :)</p>
      </div>
    </div>
  </div>
</template>

<script>
import List from "./List";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  name: "InvoicesList",
  components: { List, PulseLoader },
  data() {
    return {
      list: [],
      columns: ["Date", "Fournisseur", "Montant TTC", "Statut"],
      types: ["date", "company", "totalPrice", "status"],
      path: "factures",
      loading: true,
      color: "#e85e0e"
    };
  },
  methods: {
    //Fonction pour récupérer la liste des factures à partir de l'API (en utilisant Vue Resource)
    listInvoices: async function(id) {
      if (this.$route.params.id == null) {
        //Toutes les factures si on est sur la page /factures:
        this.$http.get(`${rootURL}invoices/`).then(
          response => {
            this.list = response.body;
            this.getTotalPrice(this.list);
            this.loading = false;
          },
          response => {
            alert("Problème lors de la requête à l'API", response);
          }
        );
      } else {
        //Les factures d'un fournisseur si on est sur la page fournisseurs/:id
        this.$http.get(`${rootURL}invoices/supplier/${id}`).then(
          response => {
            this.list = response.body;
            this.getTotalPrice(this.list);
            this.loading = false;
          },
          response => {
            alert("Problème lors de la requête à l'API", response);
          }
        );
      }
    },
    //Fonction pour calculer le prix total de chaque facture avec le prix HT et la taxe.
    getTotalPrice: function(list) {
      for (let invoice of list) {
        const totalPrice = invoice.price_notax * (1 + invoice.tax / 100);
        invoice.totalPrice = Math.round(totalPrice * 100) / 100;
      }
    },
    //Fonction pour supprimer une facture, selon son id.
    deleteInvoice: async function(id) {
      let question = confirm("Voulez-vous supprimer cette facture ?");
      if (question == true) {
        this.$http.delete(`${rootURL}invoices/${id}`).then(
          response => {
            alert("La facture a bien été supprimée !");
            this.listInvoices();
          },
          response => {
            alert("Erreur lors de la requête à l'API", response);
          }
        );
      }
    }
  },
  //Appel de la fonction à la création du composant, en lui passant l'id via $route s'il y a lieu (pour la page fournisseur).
  created() {
    this.listInvoices(this.$route.params.id);
  }
};
</script>
