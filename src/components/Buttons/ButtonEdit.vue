<template>
  <div id="button-edit">
    <button class="btn-lg btn-primary" align="center" @click="$router.push(button)">
      <font-awesome-icon icon="edit" />
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonEdit",
  props: {
    button: {
      type: String,
      required: true
    }
  }
};
</script>
