<template>
  <div class="invoices">
    <ButtonAdd :button="button" />
    <h1 class="text-primary">Factures</h1>
    <InvoicesList />
  </div>
</template>

<script>
import InvoicesList from "../../components/Lists/InvoicesList";
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
