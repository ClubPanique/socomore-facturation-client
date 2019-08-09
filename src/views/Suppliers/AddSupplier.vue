<template>
  <div id="supplier-add">
    <h1 class="text-primary">Nouveau fournisseur</h1>
    <SupplierForm
      :data="addSupplierData"
      :action="action"
      @formSubmit="addSupplier($route.params.id)"
    />
  </div>
</template>

<script>
import SupplierForm from "../../components/Forms/SupplierForm";

export default {
  name: "AddSupplier",
  components: { SupplierForm },
  data() {
    return {
      addSupplierData: {
        company: "",
        adress: "",
        postcode: "",
        city: "",
        country: "",
        phone: this.cleanPhone,
        iban: "",
        swift_bic: "",
        account: ""
      },
      rawPhone: "",
      action: "AJOUTER"
    };
  },
  methods: {
    addSupplier: async function() {
      if (this.addSupplierData.phone)
        this.addSupplierData.phone = this.cleanPhone;
      const data = this.addSupplierData;
      this.$http.post(`${rootURL}suppliers/`, data).then(
        response => {
          alert("Le fournisseur a bien été ajouté");
          this.$router.push("/fournisseurs");
        },
        response => {
          alert("Erreur lors de la connexion à l'API", response);
        }
      );
    }
  },
  computed: {
    cleanPhone: function() {
      return this.rawPhone.replace(/ /g, "");
    }
  }
};
</script>
