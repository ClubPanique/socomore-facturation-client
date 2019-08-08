<template>
  <div id="invoice-details">
    <h1 class="text-primary pb-3">Informations sur la facture n° {{$route.params.id}}</h1>
    <div class="row">
      <div class="col pl-5">
        <h2>Informations sur la facture</h2>
        <h3>Nom du fournisseur</h3>
        <p>{{invoice.supplier_id}}</p>
        <h3>Numéro de facture</h3>
        <p>{{invoice.invoice_num}}</p>
        <h3>Date</h3>
        <div v-if="invoice.date">
          <p>{{formatDate(invoice.date)}}</p>
        </div>
        <h3>Numéro de commande</h3>
        <p>{{invoice.command_num}}</p>
      </div>
      <div class="col">
        <h2>Informations de facturation</h2>
        <h3>Prix HT</h3>
        <p>{{invoice.price_notax}}</p>
        <h3>Taxe</h3>
        <p>{{invoice.tax}}</p>
        <h3>Statut</h3>
        <p>{{translateStatus(invoice.status)}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Details",
  data() {
    return {
      invoice: ""
    };
  },
  methods: {
    getInvoice: async function(id) {
      this.$http.get(`${rootURL}invoices/${id}`).then(
        response => {
          this.invoice = response.body[0];
          console.log(this.invoice);
        },
        response => {
          alert("Erreur lors de la connexion à l'API", response);
        }
      );
    },
    //Fonction pour transformer les dates de mySQL en javascript
    formatDate: function(date) {
      let dateFormat = date.slice(0, 10).replace(/[-]/g, "/");
      let jsDate = new Date(Date.parse(dateFormat));
      let year = jsDate.getFullYear();
      let month = jsDate.getMonth();
      let day = jsDate.getDate();
      if (year) {
        if (day < 10 && month < 10) return `0${day}/0${month}/${year}`;
        else if (day < 10) return `0${day}/${month}/${year}`;
        else if (month < 10) return `${day}/0${month}/${year}`;
        return `${day}/${month}/${year}`;
      }
    },
    translateStatus: function(status) {
      switch (status) {
        case "emitted":
          status = "Emise";
          break;
        case "received":
          status = "Reçue";
          break;
        case "reminder":
          status = "Relance";
          break;
        case "payed":
          status = "Payée";
          break;
        default:
          status;
      }
      return status;
    }
  },
  created() {
    this.getInvoice(this.$route.params.id);
  }
};
</script>
