<template>
  <div id="supplier-details">
    <h1 class="text-primary pb-3">Informations sur le fournisseur n° {{$route.params.id}}</h1>
    <div class="row">
      <div class="col pl-5">
        <h2>Informations sur l'entreprise</h2>
        <h3>Nom de l'entreprise</h3>
        <p>{{supplier.company}}</p>
        <h3>Adresse</h3>
        <p>{{supplier.adress}}</p>
        <h3>Code postal</h3>
        <p>{{supplier.postcode}}</p>
        <h3>Ville</h3>
        <p>{{supplier.city}}</p>
        <h3>Pays</h3>
        <p>{{supplier.country}}</p>
        <h3>Téléphone</h3>
        <p>{{supplier.phone}}</p>
      </div>
      <div class="col">
        <h2>Informations de facturation</h2>
        <h3>IBAN</h3>
        <p>{{supplier.iban}}</p>
        <h3>Code SWIFT/BIC</h3>
        <p>{{supplier.swift_bic}}</p>
        <h3>Numéro de compte</h3>
        <p>{{supplier.account}}</p>
      </div>
    </div>
    <InvoicesList />
  </div>
</template>

<script>
import InvoicesList from "../../components/InvoicesList";

export default {
  name: "Details",
  components: {InvoicesList},
  data() {
    return {
      supplier: [],
      invoices: []
    };
  },
  methods: {
    getSupplier: async function(id) {
      this.$http.get(`${rootURL}suppliers/${id}`).then(
        response => {
          //Pas le même format qu'avec les factures oO
          this.supplier = response.body;
        },
        response => {
          alert("erreur : ", response);
        }
      );
    }
  },
  created() {
    this.getSupplier(this.$route.params.id);
  }
};
</script>
