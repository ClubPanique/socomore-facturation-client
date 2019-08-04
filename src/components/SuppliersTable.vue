<template>
  <div id="suppliers-table">
    <table class="table">
      <thead>
        <th scope="col">{{type.th1}}</th>
        <th scope="col">{{type.th2}}</th>
        <th scope="col">{{type.th3}}</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="index">
          <td>{{list[index].company}}</td>
          <td>{{list[index].adress}}</td>
          <td>{{list[index].postcode}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "SuppliersTable",
  props: ["type", "list"]
};
</script>
