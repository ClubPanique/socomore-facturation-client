<template>
  <div class="invoices">
    <h1>Page factures</h1>
    <InvoicesList />
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
      button: {
        label: "/ AJOUTER UNE FACTURE",
        route: "factures/ajouter"
      }
    };
  }
};
</script>
