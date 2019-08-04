<template>
  <div class="suppliers">
    <h1 class="text-primary mb-4">Fournisseurs</h1>
    <SuppliersList :list="list" />
    <ButtonAdd :button="button" />
  </div>
</template>

<script>
import SuppliersList from "../../components/SuppliersList";
import ButtonAdd from "../../components/Buttons/ButtonAdd";

export default {
  name: "Suppliers",
  components: {
    SuppliersList,
    ButtonAdd
  },
  data() {
    return {
      list: [],
      button: {
        label: "/ AJOUTER UN FOURNISSEUR",
        route: "fournisseurs/ajouter"
      }
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
    }
  },
  //Appel de la fonction à la création du composant.
  created() {
    this.listSuppliers();
  }
};
</script>
