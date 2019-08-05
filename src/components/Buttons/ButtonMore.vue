<template>
  <div id="button-more">
    <button class="btn-lg btn-secondary" @click="$router.push(button.route)">
      <font-awesome-icon icon="plus" />
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonMore",
  props: ["button"]
};
</script>
