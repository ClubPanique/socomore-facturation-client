<template>
  <div id="button-delete">
    <button class="btn-lg btn-danger" @click="$emit('clicked')">
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
