<template>
  <div id="suppliers-list">
    <table class="table">
      <thead>
        <th scope="col">Entreprise</th>
        <th scope="col">Adresse</th>
        <th scope="col">Code Postal</th>
        <th scope="col">Ville</th>
        <th scope="col">Pays</th>
        <th scope="col" class="text-center align-middle">Modifier</th>
        <th scope="col" class="text-center align-middle">Supprimer</th>
        <th scope="col" class="text-center align-middle">Voir plus</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="index">
          <td>{{list[index].company}}</td>
          <td>{{list[index].adress}}</td>
          <td>{{list[index].postcode}}</td>
          <td>{{list[index].city}}</td>
          <td>{{list[index].country}}</td>
          <td class="text-center align-middle">
            <ButtonEdit />
          </td>
          <td class="text-center align-middle">
            <ButtonDelete @clicked="deleteSupplier(list[index].id)" />
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
  name: "SuppliersList",
  components: { ButtonEdit, ButtonDelete, ButtonMore },
  data() {
    return {
      list: []
    };
  },
  methods: {
    //Fonction pour récupérer la liste des fournisseurs à partir de l'API (en utilisant Vue Resource)
    listSuppliers: async function() {
      this.$http.get(`${rootURL}suppliers/`).then(
        response => {
          this.list = response.body;
        },
        error => {
          return error;
        }
      );
    },
    deleteSupplier: async function(id) {
      let question = confirm("Voulez-vous supprimer ce fournisseur ?");
      if (question == true) {
        this.$http.delete(`${rootURL}suppliers/${id}`).then(
          response => {
            alert("Le fournisseur a bien été supprimé !");
            this.listSuppliers();
          },
          response => {
            alert("erreur : ", response);
          }
        );
      }
    }
  },
  //Appel de la fonction à la création du composant.
  created() {
    this.listSuppliers();
  }
};
</script>
