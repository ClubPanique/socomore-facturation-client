<template>
  <div id="suppliers-list">
    <div v-if="list.length > 0">
      <List :columns="columns" :list="list" :types="types" />
    </div>
  </div>
</template>

<script>
import List from "./List";

export default {
  name: "SuppliersList",
  components: { List },
  data() {
    return {
      list: [],
      columns: ["Entreprise", "Adresse", "Code Postal", "Ville", "Pays"],
      types: ["company", "adress", "postcode", "city", "country"]
    };
  },
  methods: {
    //Fonction pour récupérer la liste des fournisseurs à partir de l'API (en utilisant Vue Resource)
    listSuppliers: async function() {
      this.$http.get(`${rootURL}suppliers/`).then(
        response => {
          this.list = response.body;
        },
        error => {
          return error;
        }
      );
    },
    deleteSupplier: async function(id) {
      let question = confirm("Voulez-vous supprimer ce fournisseur ?");
      if (question == true) {
        this.$http.delete(`${rootURL}suppliers/${id}`).then(
          response => {
            alert("Le fournisseur a bien été supprimé !");
            this.listSuppliers();
          },
          response => {
            alert("Erreur lors de la connexion à l'API", response);
          }
        );
      }
    }
  },
  //Appel de la fonction à la création du composant.
  created() {
    this.listSuppliers();
  }
};
</script>
