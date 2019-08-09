<template>
  <div class="home container">
    <h2 class="text-center mb-5">Bienvenue sur l'outils de facturation de l'entreprise Socomore.</h2>

    <div class="row align-items-center" style="height: 100px;">
      <div class="col-sm text-center m-1">
        <button class="btn-lg btn-primary p-6 text-center h-100">
          <router-link
            to="/fournisseurs"
            tag="span"
            class="text-light font-weight-bold"
          >/ FOURNISSEURS</router-link>
        </button>
      </div>
      <div class="col-sm text-center m-1">
        <button class="btn-lg btn-secondary p-6 text-center h-100">
          <router-link to="/factures" tag="span" class="text-light font-weight-bold">/ FACTURES</router-link>
        </button>
      </div>
    </div>

    <!-- <div class="row">
      <div class="col align-self-center">
        <p>D'ici, vous pouvez :</p>
        <ul class="list-group list-group text-center w-75">
          <li class="list-group-item">
            <span class="font-weight-bold">Ajouter</span> des fournisseurs et des factures dans la base de données
          </li>
          <li class="list-group-item">
            <span class="font-weight-bold">Consulter</span> les fournisseurs et les factures inscrits dans la base de données
          </li>
          <li class="list-group-item">
            <span class="font-weight-bold">Modifier</span> les fournisseurs et les factures inscrits dans la base de données
          </li>
          <li class="list-group-item">
            <span class="font-weight-bold">Supprimer</span> les fournisseurs et les factures inscrits dans la base de données
          </li>
        </ul>
      </div>
    </div>-->
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
