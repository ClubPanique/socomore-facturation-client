<template>
  <div id="invoice-form">
    <form @submit.prevent="onSubmit">
      <div class="row">
        <div class="col-sm">
          <h2>Informations sur la facture</h2>
          <div class="form-group">
            <label for="supplier">Fournisseur*</label>
            <select id="supplier" class="custom-select" v-model="data.supplier_id" required>
              <option disabled selected>Selectionnez un fournisseur</option>
              <option
                v-for="(supplier, index) in suppliers"
                :key="index"
                :value="supplier.id"
              >{{supplier.company}}</option>
            </select>
            <small id="supplierHelp" class="form-text text-muted">
              Si le fournisseur associé à la facture n'est pas encore dans la base de données, veuillez l'entrer d'abord en
              <router-link to="/fournisseurs/ajouter">cliquant ici</router-link>.
            </small>
          </div>
          <div class="form-group">
            <label for="invoice_num">Numéro de facture*</label>
            <input
              type="text"
              id="invoice_num"
              class="form-control"
              placeholder="Entrez le numéro de la facture"
              v-model="data.invoice_num"
              required
            />
          </div>
          <div class="form-group">
            <label for="date">Date*</label>
            <input
              type="date"
              id="date"
              class="form-control"
              placeholder="Entrez la date de la facture"
              v-model="data.date"
              required
            />
          </div>
          <div class="form-group">
            <label for="command_num">Numéro de commande*</label>
            <input
              type="text"
              id="command_num"
              class="form-control"
              placeholder="Entrez le numéro de commande"
              v-model="data.command_num"
              required
            />
          </div>
        </div>
        <div class="col-sm">
          <h2>Informations sur le montant</h2>
          <div class="form-group">
            <label for="price_notax">Prix HT*</label>
            <input
              type="number"
              step="0.01"
              id="price_notax"
              class="form-control"
              placeholder="Entrez le prix HT de la facture"
              v-model="data.price_notax"
              required
            />
          </div>
          <div class="form-group">
            <label for="tax">Taxe*</label>
            <input
              type="number"
              step="0.01"
              id="tax"
              class="form-control"
              placeholder="Entrez le taux de taxe de la facture"
              v-model="data.tax"
              required
            />
          </div>
          <div class="form-group">
            <label for="status" id="status">Statut*</label>
            <select class="custom-select" v-model="data.status">
              <option disabled selected>Sélectionnez le statut de la facture</option>
              <option value="emitted">Emise</option>
              <option value="received">Reçue</option>
              <option value="reminder">Relance</option>
              <option value="payed">Payée</option>
            </select>
          </div>
        </div>
      </div>
      <ButtonBack class="float-left m-1" />
      <div class="row float-right m-1">
        <button type="sumbit" class="btn-lg btn-primary">/ {{action}} LA FACTURE</button>
      </div>
    </form>
  </div>
</template>

<script>
import ButtonBack from "../Buttons/ButtonBack";

export default {
  name: "InvoiceForm",
  components: { ButtonBack },
  props: {
    data: {
      type: Object,
      required: true
    },
    suppliers: {
      type: Array,
      required: true
    },
    action: {
      type: String,
      required: true
    }
  },
  methods: {
    onSubmit: function() {
      this.$emit("formSubmit");
    }
  }
};
</script>
