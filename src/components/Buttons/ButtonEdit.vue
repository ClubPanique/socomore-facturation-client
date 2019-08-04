<template>
  <div id="button-edit">
    <button class="btn-lg btn-primary" align="center" @click="$router.push(button.route)">
      <font-awesome-icon icon="edit" />
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonEdit",
  props: ["button"]
};
</script>
