<template>
  <div id="invoice-form-content">
    <div class="row">
      <div class="col-sm">
        <h2>Informations sur la facture</h2>
        <div class="form-group">
          <label for="supplier">Fournisseur*</label>
          <input
            type="text"
            id="supplier"
            class="form-control"
            placeholder="Entrez le nom du fournisseur"
            v-model.lazy="dataForm.supplier_id"
            required
          />
        </div>
        <div class="form-group">
          <label for="invoice_num">Numéro de facture*</label>
          <input
            type="text"
            id="invoice_num"
            class="form-control"
            placeholder="Entrez le numéro de la facture"
            v-model="dataForm.invoice_num"
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
            v-model="dataForm.date"
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
            v-model="dataForm.command_num"
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
            v-model="dataForm.price_notax"
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
            v-model="dataForm.tax"
            required
          />
        </div>
        <div class="form-group">
          <label for="status">Statut*</label>
          <select class="custom-select" v-model="dataForm.status">
            <option selected>Sélectionnez le statut de la facture</option>
            <option value="emitted">Emise</option>
            <option value="received">Reçue</option>
            <option value="reminder">Relance</option>
            <option value="payed">Payée</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InvoiceForm",
  prop: {
    dataForm: {
      type: Object,
      required: true
    }
  }
};
</script>
