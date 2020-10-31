<template lang="pug">
  div
    | {{ answer.answer }} is correct!
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