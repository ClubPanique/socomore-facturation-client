<template>
  <div id="button-more">
    <button class="btn-lg btn-secondary" @click="isClicked">
      <font-awesome-icon icon="plus" />
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonMore",
  methods: {
    isClicked() {
      this.$emit("clicked");
    }
  }
};
</script>
