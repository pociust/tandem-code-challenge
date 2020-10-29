<template lang="pug">
  div
    | {{ answer }} is correct!
</template>

<script>
export default {
  props: {
    answer: {
      type: String,
      default: '',
    },
  },
};
</script>