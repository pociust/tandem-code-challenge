<style lang="sass" scoped>
  div
    font-size: 40px
    text-align: center

  .answer-wrong-flex
    display: flex
    height: 100%
    flex-direction: column
    justify-content: space-evenly
</style>
<template lang="pug">
  div.answer-wrong-flex
    div
      | I am sorry, #[span(style="color: #e86f6d") {{ answer.answer }}] is wrong!
    div
      | The correct answer is: #[span(style="color: #0ABAB5") {{ answer.correctAnswer }}]

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