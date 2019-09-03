<template>
  <div id="invoice-edit">
    <h1 class="text-primary">Modifier la facture n° {{ $route.params.id }}</h1>
    <InvoiceForm
      :data="editInvoiceData"
      :suppliers="suppliers"
      :action="action"
      v-model="editInvoiceData"
      @formSubmit="editInvoice($route.params.id)"
    />
    <a :href="pdfUrl">Voir la facture</a>
  </div>
</template>

<script>
import InvoiceForm from "../../components/Forms/InvoiceForm";

export default {
  name: "EditInvoice",
  components: { InvoiceForm },
  data() {
    return {
      suppliers: [],
      editInvoiceData: {
        invoice_num: "",
        date: "",
        command_num: "",
        price_notax: "",
        tax: "",
        status: "",
        supplier_id: "",
        pdf: ""
      },
      action: "MODIFIER"
    };
  },
  methods: {
    getInvoice: async function(id) {
      this.$http.get(`${rootURL}invoices/${id}`).then(
        response => {
          this.editInvoiceData = response.body[0];
          console.log(response.body);
          /* this.editInvoiceData.pdf = new Blob(); */
          /* this.editInvoiceData.pdf = response.body[0].pdf.blob(); */

          /* this.pdfUrl = URL.createObjectURL(response.body[0].pdf);
          console.log(this.pdfUrl); */
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
    this.getInvoice(this.$route.params.id);
    this.getSuppliers();
  },
  computed: {
    pdfUrl() {
      const arrayBuffer = new Uint8Array(this.editInvoiceData.pdf);
      console.log(arrayBuffer);
      const blob = new Blob([arrayBuffer], { type: "application/pdf" });

      return window.URL.createObjectURL(blob);
    }
  }
};
</script>
