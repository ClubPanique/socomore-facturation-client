<template>
  <div id="supplier-add">
    <h1>Nouveau fournisseur</h1>
    <form @submit.prevent="addSupplier">
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
              v-model.trim="addSupplierData.company"
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
              v-model.trim="addSupplierData.adress"
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
              v-model.trim="addSupplierData.postcode"
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
              v-model.trim="addSupplierData.city"
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
              v-model.trim="addSupplierData.country"
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
              v-model.trim="rawPhone"
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
              v-model.trim="addSupplierData.iban"
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
              v-model.trim="addSupplierData.swift_bic"
            />
          </div>
          <div class="form-group">
            <label for="account">Numéro de compte</label>
            <input
              type="text"
              id="account"
              class="form-control"
              placeholder="Entrez le numéro de compte de l'entreprise"
              v-model.trim="addSupplierData.account"
            />
          </div>
        </div>
      </div>
      <div class="row float-right">
        <button type="sumbit" class="btn-lg btn-primary">/ AJOUTER LE FOURNISSEUR</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddSupplier",
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
      rawPhone: ""
    };
  },
  methods: {
    addSupplier: async function() {
      this.addSupplierData.phone = this.cleanPhone;
      const data = this.addSupplierData;
      this.$http.post(`${rootURL}suppliers/`, data).then(
        response => {
          alert("Le fournisseur a bien été ajouté");
          this.$router.push("/fournisseurs");
        },
        response => {
          alert("erreur : ", response);
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
