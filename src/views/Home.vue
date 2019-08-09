<template>
  <div class="home container">
    <h2 class="text-center">Bienvenue !</h2>
    <p class="text-center">Choisissez de consulter les fournisseurs ou les factures</p>
    <div class="row align-items-center mb-6" style="height: 100px;">
      <div class="col-sm text-center m-1">
        <router-link to="/fournisseurs" tag="span" class="text-white font-weight-bold">
          <button class="btn-lg btn-primary p-6 text-center h-100">/ FOURNISSEURS</button>
        </router-link>
      </div>
      <div class="col-sm text-center m-1">
        <router-link to="/factures" tag="span" class="text-white font-weight-bold">
          <button class="btn-lg btn-secondary p-6 text-center h-100">/ FACTURES</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
button {
  width: 100%;
  height: 100%;
}
</style>
