<template>
  <div id="app-header" class="container-fluid">
    <div class="row vertical-align shadow-sm p-3 mb-5 bg-white">
      <div class="col-md-3 col-sm-2">
        <img src="../assets/logo.svg" class="img-fluid" alt="Socomore Logo" />
      </div>
      <div class="col px-auto">
        <h2 class="text-primary text-center">Outils de gestion des fournisseurs et des factures</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style scoped>
.vertical-align {
  display: flex;
  align-items: center;
}
</style>
