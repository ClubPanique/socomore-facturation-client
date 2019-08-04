<template>
  <div id="button-more">
    <button class="btn-lg btn-primary" @click="$router.push(button.route)">
      <font-awesome-icon icon="edit" />
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonMore",
  props: ["button"]
};
</script>
