<template lang="pug">
  div
    div
      | End of Round 1!
    div
      | currently you have {{ score }} points

    div
      | click below to start Round 2!

    div
      | Points are now double, but be careful, wong answers lose you points!
    button(@click="beginRoundTwo")
      | Start Round 2
</template>
<script>
export default {
  props: {
    score: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    beginRoundTwo() {
      this.$emit('start-round-two');
    },
  },
};
</script>