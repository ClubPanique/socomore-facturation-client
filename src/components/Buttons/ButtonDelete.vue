<template>
  <div id="button-delete">
<<<<<<< HEAD
    <button class="btn-lg btn-danger" @click="isClicked">
=======
    <button class="btn-lg btn-danger" @click="$emit('clicked')">
>>>>>>> 38a9bab5c2d29eabef7644b77875a8039c12c494
      <font-awesome-icon icon="trash" />
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonDelete",
  methods: {
    isClicked() {
      alert("Bouton cliqué");
      this.$emit("clicked");
    }
  }
};
</script>
