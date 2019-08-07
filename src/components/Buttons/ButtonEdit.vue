<template>
  <div id="button-edit">
    <button class="btn-lg btn-primary" align="center" @click="isClicked">
      <font-awesome-icon icon="edit" />
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonEdit",
  methods: {
    isClicked() {
      this.$emit("clicked");
    }
  }
};
</script>
