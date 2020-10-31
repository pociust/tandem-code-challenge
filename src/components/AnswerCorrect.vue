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