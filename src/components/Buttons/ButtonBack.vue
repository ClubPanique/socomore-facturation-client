<template>
  <div id="button-back">
    <button class="btn-lg btn-danger" @click.prevent="$router.go(-1)">
      / RETOUR
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonBack',
};
</script>
