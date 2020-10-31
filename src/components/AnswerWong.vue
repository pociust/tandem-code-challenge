<template lang="pug">
  div
    div
      | I'm sorry, {{ answer.answer }} is wrong!
    div
      | The correct answer is: {{ answer.correctAnswer }}
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