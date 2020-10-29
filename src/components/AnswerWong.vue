<template lang="pug">
  div
    | I'm sorry, {{ answer }} is wrong!
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