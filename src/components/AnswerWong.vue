<template lang="pug">
  div
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