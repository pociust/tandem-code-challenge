<style lang="sass" scoped>
  div
    font-size: 40px
    text-align: center

</style>

<template lang="pug">
  div
    | #[span(style="color: #0ABAB5") {{ answer.answer }}] is correct!
</template>

<script>
export default {
  props: {
    answer: {
      type: Object,
      default: null,
    },
  },
};
</script>