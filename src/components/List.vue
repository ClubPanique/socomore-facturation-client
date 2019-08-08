<template>
  <div id="list">
    <table class="table">
      <thead>
        <th v-for="(column, index) in columns" :key="index">{{column}}</th>
        <th scope="col" class="text-center align-middle">Modifier</th>
        <th scope="col" class="text-center align-middle">Supprimer</th>
        <th scope="col" class="text-center align-middle">Voir plus</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="index">
          <td v-for="(type, index) in types" :key="index">
            <div v-for="(element, name, index) in item" :key="index">
              <div v-if="name == type">{{element}}</div>
            </div>
          </td>
          <td class="text-center align-middle">
            <ButtonEdit @clicked="$router.push(`fournisseurs/modifier/${list[index].id}`)" />
          </td>
          <td class="text-center align-middle">
            <ButtonDelete @clicked="deleteSupplier(list[index].id)" />
          </td>
          <td class="text-center align-middle">
            <ButtonMore @clicked="$router.push(`fournisseurs/${list[index].id}`)" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ButtonEdit from "../components/Buttons/ButtonEdit";
import ButtonMore from "../components/Buttons/ButtonMore";
import ButtonDelete from "../components/Buttons/ButtonDelete";

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
    }
  },
  data() {
    return {
      newList: []
    };
  }
  /* methods: {
    displayList: function(list) {
      for (type in types) {
        console.log(type);
        for (item in list) {
          if (item.key == type) {
            newList.push(item);
            console.log(item);
          }
        }
      }
    }
  },
  created() {
    console.log(this.list);
    console.log(this.types);
  } */
};
</script>
