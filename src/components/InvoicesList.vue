<template>
  <div id="invoices-list">
    <div v-if="list.length > 0">
      <table class="table">
        <thead>
          <th scope="col">Date</th>
          <th scope="col">Fournisseur</th>
          <th scope="col">Montant</th>
          <th scope="col">Statut</th>
          <th scope="col" class="text-center align-middle">Modifier</th>
          <th scope="col" class="text-center align-middle">Supprimer</th>
          <th scope="col" class="text-center align-middle">Voir plus</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in list" :key="index">
            <td>{{formatDate(list[index].date)}}</td>
            <div v-if="list[index].supplier_id">
              <td>{{list[index].supplier_id}}</td>
            </div>
            <td>{{list[index].price_notax}} €</td>
            <td>{{translateStatus(list[index].status)}}</td>
            <td class="text-center align-middle">
              <ButtonEdit @clicked="$router.push(`factures/modifier/${list[index].id}`)" />
            </td>
            <td class="text-center align-middle">
              <ButtonDelete @clicked="deleteInvoice(list[index].id)" />
            </td>
            <td class="text-center align-middle">
              <ButtonMore @clicked="$router.push(`factures/${list[index].id}`)" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else-if="$route.params.id">
      <p>Il n'y a pas de facture associée à ce fournisseur</p>
    </div>
    <div v-else>
      <p>Il n'y a pas de facture dans la base de données. Cliquez sur ajouter une facture pour en ajouter :)</p>
    </div>
  </div>
</template>

<script>
import ButtonEdit from "../components/Buttons/ButtonEdit";
import ButtonDelete from "../components/Buttons/ButtonDelete";
import ButtonMore from "../components/Buttons/ButtonMore";

export default {
  name: "InvoicesList",
  components: { ButtonEdit, ButtonDelete, ButtonMore },
  data() {
    return {
      list: []
    };
  },
  methods: {
    //Fonction pour récupérer la liste des factures à partir de l'API (en utilisant Vue Resource)
    listInvoices: async function(id) {
      if (this.$route.params.id == null) {
        //Toutes les factures si on est sur la page /factures:
        return new Promise((resolve, reject) => {
          this.$http
            .get(`${rootURL}invoices/`)
            .then(response => resolve(response))
            .catch(err => reject(err));
        });
      } else {
        //Les factures d'un fournisseur si on est sur la page fournisseurs/:id
        return new Promise((resolve, reject) => {
          this.$http
            .get(`${rootURL}invoices/supplier/${id}`)
            .then(response => resolve(response))
            .catch(err => reject(err));
        });
      }
    },
    getSupplierName: async function(supplier_id) {
      return new Promise((resolve, reject) => {
        this.$http
          .get(`${rootURL}suppliers/${supplier_id}`)
          .then(response => resolve(response))
          .catch(err => reject(err));
      });
    },
    //Fonction pour supprimer une facture, selon son id.
    deleteInvoice: async function(id) {
      let question = confirm("Voulez-vous supprimer cette facture ?");
      if (question == true) {
        this.$http.delete(`${rootURL}invoices/${id}`).then(
          response => {
            alert("La facture a bien été supprimée !");
            this.listInvoices();
          },
          response => {
            alert("Erreur lors de la requête à l'API", response);
          }
        );
      }
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
    //Fonction pour traduire le statut inscrit en base en français.
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
  //Appel de la fonction à la création du composant, en lui passant l'id via $route.
  created() {
    this.listInvoices(this.$route.params.id).then(response => {
      //Récupération des infos sur la facture
      this.list = response.body;
      //Boucle pour récupérer le nom des fournisseurs correspondant aux supplier_id
      for (let invoice of this.list) {
        this.getSupplierName(invoice.supplier_id).then(response => {
          invoice.supplier_id = response.body.company;
        });
      }
    });
  }
};
</script>
