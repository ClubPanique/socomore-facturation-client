<template>
  <div class="suppliers">
    <ButtonAdd :button="button" />
    <h1 class="text-primary mb-4">Fournisseurs</h1>
    <SuppliersList />
  </div>
</template>

<script>
import SuppliersList from "../../components/Lists/SuppliersList";
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
