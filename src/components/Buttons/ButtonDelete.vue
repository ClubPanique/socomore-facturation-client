<template>
  <div id="button-delete">
    <button class="btn-lg btn-danger" @click="isClicked()">
      <font-awesome-icon icon="trash" />
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonDelete",
  data() {
    return {
      msg: "coucou"
    };
  },
  methods: {
    isClicked() {
      this.$emit("clicked", this.msg);
    }
  }
};
</script>
