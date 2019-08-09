<template>
  <div id="supplier-details">
    <ButtonBack class="float-right" />
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

    <router-link :to="`/fournisseurs/modifier/${supplier.id}`" tag="span">
      <button class="btn-lg btn-secondary float-right text-light">/ MODIFIER LE FOURNISSEUR</button>
    </router-link>

    <h1 class="text-primary mt-6">Factures associées au fournisseur</h1>
    <InvoicesList class="pt-2" />
  </div>
</template>

<script>
import InvoicesList from "../../components/Lists/InvoicesList";
import ButtonBack from "../../components/Buttons/ButtonBack";

export default {
  name: "DetailsSupplier",
  components: { InvoicesList, ButtonBack },
  data() {
    return {
      supplier: []
    };
  },
  methods: {
    getSupplier: async function(id) {
      this.$http.get(`${rootURL}suppliers/${id}`).then(
        response => {
          this.supplier = response.body;
        },
        response => {
          alert("Erreur lors de la connexion à l'API", response);
        }
      );
    }
  },
  created() {
    this.getSupplier(this.$route.params.id);
  }
};
</script>
