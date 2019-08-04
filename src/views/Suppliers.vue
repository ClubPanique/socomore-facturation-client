<template>
  <div class="suppliers">
    <h1>Page fournisseurs</h1>
    <SuppliersTable :type="type" :list="list" />
  </div>
</template>

<script>
import SuppliersTable from "../components/SuppliersTable";

export default {
  name: "Suppliers",
  components: {
    SuppliersTable
  },
  data() {
    return {
      type: {
        th1: "Entreprise",
        th2: "Adresse",
        th3: "Code Postal"
      },
      list: []
    };
  },
  methods: {
    //Récupère la liste des fournisseurs à partir de l'API (en utilisant Vue Resource)
    listSuppliers: async function() {
      this.$http.get(`${rootURL}suppliers/`).then(
        response => {
          console.log(response.body);
          this.list = response.body;
        },
        response => {
          console.log("Erreur", response);
        }
      );
    }
  },
  created() {
    this.listSuppliers();
  }
};
</script>
