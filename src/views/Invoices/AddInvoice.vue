<template>
  <div id="invoice-add">
    <h1 class="text-primary">Nouvelle facture</h1>
    <InvoiceForm
      :data="addInvoiceData"
      :suppliers="suppliers"
      :action="action"
      v-model="addInvoiceData"
      @formSubmit="addInvoice()"
    />
  </div>
</template>

<script>
import InvoiceForm from "../../components/Forms/InvoiceForm";

export default {
  name: "AddInvoice",
  components: { InvoiceForm },
  data() {
    return {
      suppliers: [],
      addInvoiceData: {
        invoice_num: "",
        date: "",
        command_num: "",
        price_notax: "",
        tax: "",
        status: "",
        supplier_id: ""
      },
      action: "AJOUTER"
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
    },
    getSuppliers: async function() {
      this.$http.get(`${rootURL}suppliers/`).then(
        response => {
          this.suppliers = response.body;
        },
        error => {
          return error;
        }
      );
    }
  },
  created() {
    this.getSuppliers();
  }
};
</script>
