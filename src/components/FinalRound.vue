<template lang="pug">
  div
    | Final Round {{ score }}
</template>

<script>
export default {
  props: {
    score: {
      type: Number,
      default: 0,
    },
  },
};
</script>