<template>
  <div id="list">
    <div v-if="list[0].status" class="form-group col-6 float-right mb-2">
      <label for="status">Filtrez selon le statut de la facture</label>
      <select class="custom-select" id="status" v-model="search">
        <option value>Pas de filtre</option>
        <option value="emitted">Emise</option>
        <option value="received">Reçue</option>
        <option value="reminder">Relance</option>
        <option value="payed">Payée</option>
      </select>
    </div>
    <table class="table">
      <thead>
        <th v-for="(column, index) in columns" :key="index" class="align-middle">{{column}}</th>
        <th scope="col" class="text-center align-middle">Modifier</th>
        <th scope="col" class="text-center align-middle">Supprimer</th>
        <th scope="col" class="text-center align-middle">Voir plus</th>
      </thead>
      <tbody>
        <tr v-if="!filteredList.length">
          <td>Pas de résultat pour ce filtre</td>
        </tr>
        <tr v-for="(item, index) in filteredList" :key="index">
          <td v-for="(type, index) in types" :key="index" class="align-middle">
            <div v-for="(element, name, index) in item" :key="index">
              <div v-if="name == type">
                <div v-if="type == 'date'">{{formatDate(element)}}</div>
                <div v-else-if="type == 'status'">{{translateStatus(element)}}</div>
                <div v-else>{{element}}</div>
              </div>
            </div>
          </td>
          <td class="text-center align-middle">
            <ButtonEdit @clicked="$router.push(`${path}/modifier/${list[index].id}`)" />
          </td>
          <td class="text-center align-middle">
            <ButtonDelete @clicked="onDelete(list[index].id)" />
          </td>
          <td class="text-center align-middle">
            <ButtonMore @clicked="$router.push(`${path}/${list[index].id}`)" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ButtonEdit from "../Buttons/ButtonEdit";
import ButtonMore from "../Buttons/ButtonMore";
import ButtonDelete from "../Buttons/ButtonDelete";

export default {
  name: "List",
  components: { ButtonEdit, ButtonDelete, ButtonMore },
  props: {
    columns: {
      type: Array,
      required: true
    },
    list: {
      type: Array,
      required: true
    },
    types: {
      type: Array,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      search: ""
    };
  },
  methods: {
    onDelete: function(id) {
      this.$emit("delete", id);
    },
    formatDate: function(date) {
      let dateFormat = date.slice(0, 10).replace(/[-]/g, "/");
      let jsDate = new Date(Date.parse(dateFormat));
      let year = jsDate.getFullYear();
      //J'ajoute 1 au mois car je ne sais pas pourquoi, il y a un décalage oO
      let month = jsDate.getMonth() + 1;
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
  computed: {
    filteredList: function() {
      return this.list.filter(item => {
        if (item.status) {
          return item.status.match(this.search);
        } else {
          return item;
        }
      });
    }
  }
};
</script>
