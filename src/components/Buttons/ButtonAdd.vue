<template>
  <div id="button-add">
    <button
      class="btn-lg btn-primary float-right"
      @click="$router.push(button.route)"
    >{{button.label}}</button>
  </div>
</template>

<script>
export default {
  name: "ButtonAdd",
  props: {
    button: {
      type: Object,
      required: true
    }
  }
};
</script>
