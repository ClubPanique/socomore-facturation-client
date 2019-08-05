<template>
  <div class="suppliers">
    <h1 class="text-primary mb-4">Fournisseurs</h1>
    <SuppliersList />
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
      button: {
        label: "/ AJOUTER UN FOURNISSEUR",
        route: "fournisseurs/ajouter"
      }
    };
  }
};
</script>
