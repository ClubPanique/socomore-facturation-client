<template>
  <div id="invoices-list">
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
</template>

<script>
import List from "./List";

export default {
  name: "InvoicesList",
  components: { List },
  data() {
    return {
      list: [],
      columns: ["Date", "Fournisseur", "Montant", "Statut"],
      types: ["date", "company", "price_notax", "status"],
      path: "factures"
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
          },
          response => {
            alert("Problème lors de la requête à l'API", response);
          }
        );
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
  //Appel de la fonction à la création du composant, en lui passant l'id via $route.
  created() {
    this.listInvoices(this.$route.params.id);
  }
};
</script>
