<template>
  <div id="invoice-edit">
    <h1>Modifier la facture n° {{ $route.params.id }}</h1>
    <form @submit.prevent="editInvoice($route.params.id)">
      <InvoiceForm :dataForm="editInvoiceData" />
      <div class="row float-right">
        <button type="sumbit" class="btn-lg btn-primary">/ MODIFIER LA FACTURE</button>
      </div>
    </form>
  </div>
</template>

<script>
import InvoiceForm from "../../components/InvoiceForm";

export default {
  name: "EditInvoice",
  components: { InvoiceForm },
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
          alert("Erreur lors de la connexion à l'API", response);
        }
      );
    },
    editInvoice: async function(id) {
      const data = this.editInvoiceData;
      return this.$http.put(`${rootURL}invoices/${id}`, data).then(
        response => {
          this.$router.go(-1);
          alert("La facture a bien été modifiée");
        },
        response => {
          alert("Erreur lors de la connexion à l'API", response);
        }
      );
    }
  },
  created() {
    this.getInvoice(this.$route.params.id);
  }
};
</script>
