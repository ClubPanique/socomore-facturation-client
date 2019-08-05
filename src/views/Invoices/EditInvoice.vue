<template>
  <div id="invoice-edit">
    <h1>Modifier la facture n° {{ $route.params.id }}</h1>
    <form @submit.prevent="editInvoice($route.params.id)">
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
              v-model.lazy="editInvoiceData.supplier_id"
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
              v-model="editInvoiceData.invoice_num"
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
              v-model="editInvoiceData.date"
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
              v-model="editInvoiceData.command_num"
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
              v-model="editInvoiceData.price_notax"
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
              v-model="editInvoiceData.tax"
              required
            />
          </div>
          <div class="form-group">
            <label for="status">Statut*</label>
            <select class="custom-select" v-model="editInvoiceData.status">
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
        <button type="sumbit" class="btn-lg btn-primary">/ MODIFIER LA FACTURE</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditInvoice",
  data() {
    return {
      editInvoiceData: {
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
    getInvoice: async function(id) {
      this.$http.get(`${rootURL}invoices/${id}`).then(
        response => {
          this.editInvoiceData = response.body[0];
          let dateFormat = this.editInvoiceData.date.slice(0, 10);
          this.editInvoiceData.date = dateFormat;
        },
        response => {
          alert("erreur : ", response);
        }
      );
    },
    editInvoice: async function(id) {
      const data = this.editInvoiceData;
      return this.$http.put(`${rootURL}invoices/${id}`, data).then(
        response => {
          this.$router.push("/factures");
          alert("La facture a bien été modifiée");
        },
        response => {
          alert("erreur : ", response);
        }
      );
    }
  },
  created() {
    this.getInvoice(this.$route.params.id);
  }
};
</script>
