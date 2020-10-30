<template lang="pug">
  div
    div
      | Round 2 Fight
    button(@click="beginRoundTwo")
      | Start Round 2
</template>
<script>
export default {
  methods: {
    beginRoundTwo() {
      this.$emit('start-round-two');
    },
  },
};
</script>