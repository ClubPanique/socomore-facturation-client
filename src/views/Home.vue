<template>
  <div class="home container" style="height: 150px;">
    <div class="row h-100 align-middle">
      <div class="col text-center pt-5 bg-primary m-2">
        <router-link to="/fournisseurs" class="text-light font-weight-bold">/ FOURNISSEURS</router-link>
      </div>
      <div class="col text-center pt-5 bg-secondary text-light font-weight-bold m-2">
        <router-link to="/factures" class="text-light font-weight-bold">/ FACTURES</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
