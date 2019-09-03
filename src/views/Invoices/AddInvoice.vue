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
        supplier_id: "",
        pdf: ""
      },
      action: "AJOUTER"
    };
  },
  methods: {
    addInvoice: async function() {
      let data = new FormData();
      //Boucle pour compléter l'objet data (qui est un FormData) avec chaque élément de l'objet addInvoiceData
      for (let [key, value] of Object.entries(this.addInvoiceData)) {
        data.append(key, value);
      }
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
        response => {
          alert("Erreur lors de la connexion à l'API", response);
        }
      );
    }
  },
  created() {
    this.getSuppliers();
  }
};
</script>
