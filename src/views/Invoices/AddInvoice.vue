<template>
  <div id="invoice-add">
    <h1>Nouvelle facture</h1>
    <form @submit.prevent="addInvoice">
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
              v-model="addInvoiceData.supplier_id"
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
              v-model="addInvoiceData.invoice_num"
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
              v-model="addInvoiceData.date"
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
              v-model="addInvoiceData.command_num"
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
              v-model="addInvoiceData.price_notax"
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
              v-model="addInvoiceData.tax"
              required
            />
          </div>
          <div class="form-group">
            <label for="status">Statut*</label>
            <select class="custom-select" v-model="addInvoiceData.status">
              <option selected>Sélectionnez le statut de la facture</option>
              <option value="emitted">Emise</option>
              <option value="received">Reçue</option>
              <option value="reminder">Relance</option>
              <option value="payed">Payée</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row float-right">
        <button type="sumbit" class="btn-lg btn-primary">/ AJOUTER LA FACTURE</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddInvoice",
  data() {
    return {
      addInvoiceData: {
        invoice_num: "",
        date: "",
        command_num: "",
        price_notax: "",
        tax: "",
        status: "",
        supplier_id: ""
      }
    };
  },
  methods: {
    addInvoice: async function() {
      const data = this.addInvoiceData;
      this.$http.post(`${rootURL}invoices/`, data).then(
        response => {
          this.$router.push("/factures");
          alert("La facture a bien été ajoutée");
        },
        response => {
          alert("Erreur lors de la connexion à l'API", response);
        }
      );
    }
  }
};
</script>
