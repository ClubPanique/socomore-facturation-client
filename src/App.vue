<template>
  <div id="app">
    <AppHeader />
    <div class="container">
      <router-view />
    </div>
    <!-- Condition pour afficher le footer en bas de la page seulement sur la home page -->
    <div v-if="this.$route.path == '/'">
      <AppFooter class="mt-3" style="position: absolute; bottom: 0; width: 100%;" />
    </div>
    <div v-else>
      <AppFooter />
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

export default {
  name: "app",
  components: { AppHeader, AppFooter },
  created() {
    console.log(this.$route.path);
  }
};
</script>

<style lang="scss">
//Import de Bootstrap et du fichier de modification des variables pour y accéder dans toute l'application.
@import "./assets/custom.scss";
@import "../node_modules/bootstrap/scss/bootstrap.scss";
</style>
