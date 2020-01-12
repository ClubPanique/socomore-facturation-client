<template>
  <div id="supplier-form">
    <form @submit.prevent="onSubmit">
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
              v-model.trim="data.company"
              name="entreprise"
              v-validate="'required|max:30'"
            />
            <span v-if="errors.has('entreprise')" class="text-danger">{{
              errors.first('entreprise')
            }}</span>
          </div>
          <div class="form-group">
            <label for="adress">Adresse*</label>
            <input
              type="text"
              id="adress"
              class="form-control"
              placeholder="Entrez l'adresse de l'entreprise"
              v-model.trim="data.adress"
              name="adresse"
              v-validate="'required|max:30'"
            />
            <span v-if="errors.has('adresse')" class="text-danger">{{
              errors.first('adresse')
            }}</span>
          </div>
          <div class="form-group">
            <label for="postcode">Code postal*</label>
            <input
              type="text"
              id="postcode"
              class="form-control"
              placeholder="Entrez le code postal de l'entreprise"
              v-model.trim="data.postcode"
              name="code postal"
              v-validate="'required|max:10'"
            />
            <span v-if="errors.has('code postal')" class="text-danger">{{
              errors.first('code postal')
            }}</span>
          </div>
          <div class="form-group">
            <label for="city">Ville*</label>
            <input
              type="text"
              id="city"
              class="form-control"
              placeholder="Entrez la ville de l'entreprise"
              v-model.trim="data.city"
              name="ville"
              v-validate="'required|max:30'"
            />
            <span v-if="errors.has('ville')" class="text-danger">{{
              errors.first('ville')
            }}</span>
          </div>
          <div class="form-group">
            <label for="country">Pays*</label>
            <input
              type="text"
              id="country"
              class="form-control"
              placeholder="Entrez le pays de l'entreprise"
              v-model.trim="data.country"
              name="pays"
              v-validate="'required|max:20'"
            />
            <span v-if="errors.has('pays')" class="text-danger">{{
              errors.first('pays')
            }}</span>
          </div>
          <div class="form-group">
            <label for="phone">Téléphone</label>
            <input
              type="text"
              id="phone"
              class="form-control"
              placeholder="Entrez le n° de téléphone de l'entreprise"
              v-model.trim="data.phone"
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
              v-model.trim="data.iban"
              name="iban"
              v-validate="'required|max:34'"
            />
            <span v-if="errors.has('iban')" class="text-danger">{{
              errors.first('iban')
            }}</span>
          </div>
          <div class="form-group">
            <label for="swift-bic">SWIFT/BIC</label>
            <input
              type="text"
              id="swift-bic"
              class="form-control"
              placeholder="Entrez le code SWIFT/BIC de l'entreprise"
              v-model.trim="data.swift_bic"
            />
          </div>
          <div class="form-group">
            <label for="account">Numéro de compte</label>
            <input
              type="text"
              id="account"
              class="form-control"
              placeholder="Entrez le numéro de compte de l'entreprise"
              v-model.trim="data.account"
            />
          </div>
        </div>
      </div>
      <ButtonBack class="float-left m-1" />
      <div class="row float-right m-1">
        <button type="sumbit" class="btn-lg btn-primary">
          / {{ action }} LE FOURNISSEUR
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import ButtonBack from '../Buttons/ButtonBack';

export default {
  name: 'SupplierForm',
  components: {ButtonBack},
  props: {
    data: {
      type: Object,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
  },
  methods: {
    onSubmit: function() {
      this.$validator.validateAll().then(() => {
        if (!this.errors.any()) {
          this.$emit('formSubmit');
        }
      });
    },
  },
};
</script>
