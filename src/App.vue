<template>
  <div id="app">
    <AppHeader />
    <router-view />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";

export default {
  name: "app",
  components: { AppHeader }
};
</script>

<style lang="scss">
//Import de Bootstrap et du fichier de modification des variables pour y accéder dans toute l'application.
@import "./assets/custom.scss";
@import "../node_modules/bootstrap/scss/bootstrap.scss";
</style>
