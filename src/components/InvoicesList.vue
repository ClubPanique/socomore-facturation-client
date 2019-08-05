<template>
  <div id="invoices-list">
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
          <td>{{list[index].supplier_id}}</td>
          <td>{{list[index].price_notax}} €</td>
          <td>{{list[index].status}}</td>
          <td class="text-center align-middle">
            <ButtonEdit />
          </td>
          <td class="text-center align-middle">
            <button class="btn-lg btn-danger float-right" @click="deleteInvoice(list[index].id)">
              <font-awesome-icon icon="trash" />
            </button>
          </td>
          <td class="text-center align-middle">
            <ButtonMore />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ButtonEdit from "../components/Buttons/ButtonEdit";
import ButtonDelete from "../components/Buttons/ButtonDelete";
import ButtonMore from "../components/Buttons/ButtonMore";

export default {
  name: "InvoicesList",
<<<<<<< HEAD
  props: ["list", "listInvoices"],
=======
  props: ["list"],
>>>>>>> 95359f41e5e984e05f05c5b4a0e16363155362ca
  components: { ButtonEdit, ButtonDelete, ButtonMore },
  methods: {
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
        else if (day < 10) return `${day}/0${month}/${year}`;
        return `${day}/${month}/${year}`;
      } else {
        return "La date n'a pas été renseignée";
      }
    },
    deleteInvoice: async function(id) {
      let question = confirm("Voulez-vous supprimer cette facture ?");
      if (question == true) {
        this.$http.delete(`${rootURL}invoices/${id}`).then(
          response => {
            alert("La facture a bien été supprimée !");
          },
          response => {
            alert("erreur : ", response);
          }
        );
      }
    }
  }
};
</script>
