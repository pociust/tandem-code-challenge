<template lang="pug">
  div
    | your final score is {{ score }}
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