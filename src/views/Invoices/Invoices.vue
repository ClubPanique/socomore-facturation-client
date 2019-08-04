<template>
  <div class="invoices">
    <h1>Page factures</h1>
    <InvoicesList :list="list" :listInvoices="listInvoices" />
    <ButtonAdd :button="button" />
  </div>
</template>

<script>
import InvoicesList from "../../components/InvoicesList";
import ButtonAdd from "../../components/Buttons/ButtonAdd";

export default {
  name: "Invoices",
  components: {
    InvoicesList,
    ButtonAdd
  },
  data() {
    return {
      list: [],
      button: {
        label: "/ AJOUTER UNE FACTURE",
        route: "factures/ajouter"
      }
    };
  },
  methods: {
    //Fonction pour récupérer la liste des fournisseurs à partir de l'API (en utilisant Vue Resource)
    listInvoices: async function() {
      this.$http.get(`${rootURL}invoices/`).then(
        response => {
          this.list = response.body;
        },
        response => {
          alert("erreur : ", response);
        }
      );
    }
  },
  //Appel de la fonction à la création du composant.
  created() {
    this.listInvoices();
  }
};
</script>
