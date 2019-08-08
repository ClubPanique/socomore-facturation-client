<template>
  <div id="supplier-edit">
    <h1>Modifier le fournisseur n° {{$route.params.id}}</h1>
    <form @submit.prevent="editSupplier($route.params.id)">
      <div class="row">
        <div class="col-sm">
          <h2>Informations sur l'entreprise</h2>
          <div class="form-group">
            <label for="company">Entreprise*</label>
            <input
              type="text"
              id="company"
              class="form-control"
              placeholder="Entrez le nom de l'entreprise"
              v-model.trim="editSupplierData.company"
              required
            />
          </div>
          <div class="form-group">
            <label for="adress">Adresse*</label>
            <input
              type="text"
              id="adress"
              class="form-control"
              placeholder="Entrez l'adresse de l'entreprise"
              v-model.trim="editSupplierData.adress"
              required
            />
          </div>
          <div class="form-group">
            <label for="postcode">Code postal*</label>
            <input
              type="text"
              id="postcode"
              class="form-control"
              placeholder="Entrez le code postal de l'entreprise"
              v-model.trim="editSupplierData.postcode"
              required
            />
          </div>
          <div class="form-group">
            <label for="city">Ville*</label>
            <input
              type="text"
              id="city"
              class="form-control"
              placeholder="Entrez la ville de l'entreprise"
              v-model.trim="editSupplierData.city"
              required
            />
          </div>
          <div class="form-group">
            <label for="country">Pays*</label>
            <input
              type="text"
              id="country"
              class="form-control"
              placeholder="Entrez le pays de l'entreprise"
              v-model.trim="editSupplierData.country"
              required
            />
          </div>
          <div class="form-group">
            <label for="phone">Téléphone</label>
            <input
              type="text"
              id="phone"
              class="form-control"
              placeholder="Entrez le n° de téléphone de l'entreprise"
              v-model.trim="editSupplierData.phone"
            />
          </div>
        </div>
        <div class="col-sm">
          <h2>Informations de paiement</h2>
          <div class="form-group">
            <label for="iban">IBAN*</label>
            <input
              type="text"
              id="iban"
              class="form-control"
              placeholder="Entrez l'IBAN de l'entreprise"
              v-model.trim="editSupplierData.iban"
              required
            />
          </div>
          <div class="form-group">
            <label for="swift-bic">SWIFT/BIC</label>
            <input
              type="text"
              id="swift-bic"
              class="form-control"
              placeholder="Entrez le code SWIFT/BIC de l'entreprise"
              v-model.trim="editSupplierData.swift_bic"
            />
          </div>
          <div class="form-group">
            <label for="account">Numéro de compte</label>
            <input
              type="text"
              id="account"
              class="form-control"
              placeholder="Entrez le numéro de compte de l'entreprise"
              v-model.trim="editSupplierData.account"
            />
          </div>
        </div>
      </div>
      <div class="row float-right">
        <button type="sumbit" class="btn-lg btn-primary">/ MODIFIER LE FOURNISSEUR</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddSupplier",
  data() {
    return {
      editSupplierData: {
        company: "",
        adress: "",
        postcode: "",
        city: "",
        country: "",
        phone: "",
        iban: "",
        swift_bic: "",
        account: ""
      },
      rawPhone: ""
    };
  },
  methods: {
    getSupplier: async function(id) {
      this.$http.get(`${rootURL}suppliers/${id}`).then(
        response => {
          //Pas le même format qu'avec les factures oO
          this.editSupplierData = response.body;
        },
        response => {
          alert("Erreur lors de la connexion à l'API", response);
        }
      );
    },
    editSupplier: async function(id) {
      this.editSupplierData.phone = this.cleanPhone;
      const data = this.editSupplierData;
      return this.$http.put(`${rootURL}suppliers/${id}`, data).then(
        response => {
          this.$router.go(-1);
          alert("Le fournisseur a bien été modifiée");
        },
        response => {
          alert("Erreur lors de la connexion à l'API", response);
        }
      );
    }
  },
  created() {
    this.getSupplier(this.$route.params.id);
  },
  computed: {
    cleanPhone: function() {
      this.rawPhone = this.editSupplierData.phone;
      return this.rawPhone.replace(/ /g, "");
    }
  }
};
</script>
